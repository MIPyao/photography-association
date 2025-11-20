export type UserRole = "admin" | "editor" | "member"

export interface User {
  id: string
  name: string
  email: string
  passwordHash: string
  role: UserRole
  status: "active" | "inactive"
  avatarUrl?: string
  createdAt: Date
  updatedAt: Date
}

export interface CreateUserInput {
  name: string
  email: string
  password: string
  role?: UserRole
  avatarUrl?: string
}

export interface UpdateUserInput {
  name?: string
  role?: UserRole
  status?: "active" | "inactive"
  avatarUrl?: string
  password?: string
}

