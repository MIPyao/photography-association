import { NextResponse } from "next/server"
import { z } from "zod"

import { requireSessionUser } from "@/lib/auth/session"
import { getUserService } from "@/modules/container"

const updateSchema = z.object({
  name: z.string().min(2).optional(),
  role: z.enum(["admin", "editor", "member"]).optional(),
  status: z.enum(["active", "inactive"]).optional(),
  password: z.string().min(6).optional(),
})

export async function PATCH(request: Request, context: { params: { id: string } }) {
  const currentUser = await requireSessionUser().catch(() => null)
  if (!currentUser || currentUser.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  const parsed = updateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
  }

  const service = getUserService()
  const updated = await service.updateUser(context.params.id, parsed.data)
  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  return NextResponse.json({ data: updated })
}

export async function DELETE(_: Request, context: { params: { id: string } }) {
  const currentUser = await requireSessionUser().catch(() => null)
  if (!currentUser || currentUser.role !== "admin") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const service = getUserService()
  const success = await service.deleteUser(context.params.id)
  if (!success) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  return NextResponse.json({ success: true })
}

