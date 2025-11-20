import { NextResponse } from "next/server"
import { z } from "zod"

import { createSessionToken, persistSessionCookie } from "@/lib/auth/session"
import { getUserService } from "@/modules/container"

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = loginSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
  }

  const userService = getUserService()
  const user = await userService.verifyCredentials(parsed.data.email, parsed.data.password)

  if (!user) {
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 })
  }

  const token = createSessionToken({ sub: user.id, role: user.role })
  await persistSessionCookie(token)

  return NextResponse.json({ user }, { status: 200 })
}

