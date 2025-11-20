import { connectMongo } from "@/lib/db/mongodb"
import { CreateUserInput, UpdateUserInput, User } from "@/modules/users/domain/user"
import { IUserRepository } from "@/modules/users/domain/user-repository"

import { UserModel } from "./mongo-user-model"

export class MongoUserRepository implements IUserRepository {
  private async ready() {
    await connectMongo()
  }

  private toDomain(doc: any): User {
    return {
      id: doc._id.toString(),
      name: doc.name,
      email: doc.email,
      passwordHash: doc.passwordHash,
      role: doc.role,
      status: doc.status,
      avatarUrl: doc.avatarUrl ?? undefined,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    }
  }

  async create(data: CreateUserInput): Promise<User> {
    await this.ready()
    const created = await UserModel.create({
      name: data.name,
      email: data.email,
      passwordHash: data.password,
      role: data.role ?? "admin",
      status: "active",
      avatarUrl: data.avatarUrl,
    })
    return this.toDomain(created)
  }

  async update(id: string, data: UpdateUserInput): Promise<User | null> {
    await this.ready()
    const updated = await UserModel.findByIdAndUpdate(
      id,
      {
        ...(data.name && { name: data.name }),
        ...(data.role && { role: data.role }),
        ...(data.status && { status: data.status }),
        ...(data.avatarUrl && { avatarUrl: data.avatarUrl }),
        ...(data.password && { passwordHash: data.password }),
      },
      { new: true }
    )
    return updated ? this.toDomain(updated) : null
  }

  async delete(id: string): Promise<boolean> {
    await this.ready()
    const res = await UserModel.findByIdAndDelete(id)
    return Boolean(res)
  }

  async findById(id: string): Promise<User | null> {
    await this.ready()
    const doc = await UserModel.findById(id)
    return doc ? this.toDomain(doc) : null
  }

  async findByEmail(email: string): Promise<User | null> {
    await this.ready()
    const doc = await UserModel.findOne({ email })
    return doc ? this.toDomain(doc) : null
  }

  async list(): Promise<User[]> {
    await this.ready()
    const docs = await UserModel.find().sort({ createdAt: -1 })
    return docs.map((doc) => this.toDomain(doc))
  }

  async count(): Promise<number> {
    await this.ready()
    return UserModel.countDocuments()
  }
}

