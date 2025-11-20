import { CreateUserInput, UpdateUserInput, User } from "./user"

export interface IUserRepository {
  create(data: CreateUserInput): Promise<User>
  update(id: string, data: UpdateUserInput): Promise<User | null>
  delete(id: string): Promise<boolean>
  findById(id: string): Promise<User | null>
  findByEmail(email: string): Promise<User | null>
  list(): Promise<User[]>
  count(): Promise<number>
}

