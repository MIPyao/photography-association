"use server"

import { revalidatePath } from "next/cache"
import { z } from "zod"

import { requireSessionUser } from "@/lib/auth/session"
import { getUserService } from "@/modules/container"

const createSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["admin", "editor", "member"]),
})

export async function createUserAction(formData: FormData) {
  const current = await requireSessionUser()
  if (current.role !== "admin") {
    throw new Error("仅管理员可以创建用户")
  }

  const parsed = createSchema.safeParse({
    name: formData.get("name") as string,
    email: formData.get("email") as string,
    password: formData.get("password") as string,
    role: (formData.get("role") as string) ?? "editor",
  })

  if (!parsed.success) {
    throw new Error("表单内容不合法")
  }

  const service = getUserService()
  await service.createUser(parsed.data)
  revalidatePath("/admin/users")
}

const statusSchema = z.object({
  userId: z.string(),
  status: z.enum(["active", "inactive"]),
})

export async function updateUserStatusAction(data: { userId: string; status: "active" | "inactive" }) {
  const current = await requireSessionUser()
  if (current.role !== "admin") {
    throw new Error("仅管理员可以操作")
  }

  const parsed = statusSchema.safeParse(data)
  if (!parsed.success) {
    throw new Error("参数错误")
  }

  const service = getUserService()
  await service.updateUser(parsed.data.userId, { status: parsed.data.status })
  revalidatePath("/admin/users")
}

