import { NextResponse } from "next/server"
import { z } from "zod"

import { requireSessionUser } from "@/lib/auth/session"
import { getUserService } from "@/modules/container"

const createSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["admin", "editor", "member"]).optional(),
})

export async function GET() {
  const user = await requireSessionUser().catch(() => null)
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const service = getUserService()
  const users = await service.listUsers()
  return NextResponse.json({ data: users })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = createSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
  }

  const service = getUserService()
  const hasUsers = await service.hasUsers()

  if (hasUsers) {
    const currentUser = await requireSessionUser().catch(() => null)
    if (!currentUser || currentUser.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }
  }

  const created = await service.createUser(parsed.data)
  return NextResponse.json({ data: created }, { status: 201 })
}

