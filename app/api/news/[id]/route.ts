import { NextResponse } from "next/server"
import { z } from "zod"

import { requireSessionUser } from "@/lib/auth/session"
import { getNewsService } from "@/modules/container"

const updateSchema = z.object({
  title: z.string().min(3).optional(),
  excerpt: z.string().min(10).optional(),
  content: z.string().min(20).optional(),
  category: z.string().optional(),
  coverImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  status: z.enum(["draft", "published"]).optional(),
})

export async function GET(_: Request, context: { params: { id: string } }) {
  const service = getNewsService()
  const news = await service.getNewsById(context.params.id)
  if (!news) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  return NextResponse.json({ data: news })
}

export async function PATCH(request: Request, context: { params: { id: string } }) {
  const user = await requireSessionUser().catch(() => null)
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const body = await request.json().catch(() => null)
  const parsed = updateSchema.safeParse(body)
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid payload" }, { status: 400 })
  }

  const service = getNewsService()
  const updated = await service.updateNews(context.params.id, parsed.data)
  if (!updated) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  return NextResponse.json({ data: updated })
}

export async function DELETE(_: Request, context: { params: { id: string } }) {
  const user = await requireSessionUser().catch(() => null)
  if (!user) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const service = getNewsService()
  const success = await service.deleteNews(context.params.id)
  if (!success) {
    return NextResponse.json({ error: "Not found" }, { status: 404 })
  }
  return NextResponse.json({ success: true })
}

