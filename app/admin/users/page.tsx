import { getUserService } from "@/modules/container"

import { CreateUserForm } from "./_components/create-user-form"
import { UsersTable } from "./_components/users-table"

export default async function AdminUsersPage() {
  const userService = getUserService()
  const users = await userService.listUsers()

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">用户管理</h2>
        <p className="text-muted-foreground text-sm">维护管理员和成员账号</p>
      </div>
      <CreateUserForm />
      <UsersTable users={users} />
    </div>
  )
}

