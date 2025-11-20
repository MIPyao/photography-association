import { NextResponse } from "next/server"
import { z } from "zod"

import { requireSessionUser } from "@/lib/auth/session"
import { getNewsService } from "@/modules/container"

const newsSchema = z.object({
  title: z.string().min(3),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  category: z.string().min(1),
  coverImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  status: z.enum(["draft", "published"]).optional(),
})

export async function GET() {
  const service = getNewsService()
  const news = await service.listNews()
  return NextResponse.json({ data: news })
}

export async function POST(request: Request) {
  const body = await request.json().catch(() => null)
  const parsed = newsSchema.safeParse(body)

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
  }

  const user = await requireSessionUser().catch(() => null)
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const service = getNewsService()
  const created = await service.createNews({
    ...parsed.data,
    authorId: user.id,
    authorName: user.name,
  })

  return NextResponse.json({ data: created }, { status: 201 })
}

