import { hashPassword, verifyPassword } from "@/lib/auth/password"
import { CreateUserInput, UpdateUserInput, User } from "@/modules/users/domain/user"
import { IUserRepository } from "@/modules/users/domain/user-repository"

type SafeUser = Omit<User, "passwordHash">

export class UserService {
  constructor(private readonly repository: IUserRepository) {}

  private sanitize(user: User): SafeUser {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { passwordHash, ...rest } = user
    return rest
  }

  async listUsers(): Promise<SafeUser[]> {
    const users = await this.repository.list()
    return users.map((user) => this.sanitize(user))
  }

  async getUserById(id: string): Promise<SafeUser | null> {
    const user = await this.repository.findById(id)
    return user ? this.sanitize(user) : null
  }

  async createUser(data: CreateUserInput): Promise<SafeUser> {
    const hashed = await hashPassword(data.password)
    const created = await this.repository.create({
      ...data,
      password: hashed,
    })
    return this.sanitize(created)
  }

  async updateUser(id: string, data: UpdateUserInput): Promise<SafeUser | null> {
    const payload = { ...data }
    if (data.password) {
      payload.password = await hashPassword(data.password)
    }
    const updated = await this.repository.update(id, payload)
    return updated ? this.sanitize(updated) : null
  }

  async deleteUser(id: string): Promise<boolean> {
    return this.repository.delete(id)
  }

  async verifyCredentials(email: string, password: string): Promise<SafeUser | null> {
    const user = await this.repository.findByEmail(email)
    if (!user || user.status !== "active") {
      return null
    }
    const isValid = await verifyPassword(password, user.passwordHash)
    if (!isValid) {
      return null
    }
    return this.sanitize(user)
  }

  async hasUsers(): Promise<boolean> {
    return (await this.repository.count()) > 0
  }
}

export type { SafeUser }

