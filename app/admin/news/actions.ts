"use server"

import { revalidatePath } from "next/cache"
import { z } from "zod"

import { requireSessionUser } from "@/lib/auth/session"
import { getNewsService } from "@/modules/container"

const createSchema = z.object({
  title: z.string().min(3),
  excerpt: z.string().min(10),
  content: z.string().min(20),
  category: z.string().min(1),
  coverImage: z.string().optional(),
  tags: z.array(z.string()).optional(),
  status: z.enum(["draft", "published"]).default("draft"),
})

export async function createNewsAction(formData: FormData) {
  const user = await requireSessionUser()
  const data = {
    title: formData.get("title") as string,
    excerpt: formData.get("excerpt") as string,
    content: formData.get("content") as string,
    category: formData.get("category") as string,
    coverImage: (formData.get("coverImage") as string) || undefined,
    tags: ((formData.get("tags") as string) ?? "")
      .split(",")
      .map((tag) => tag.trim())
      .filter(Boolean),
    status: (formData.get("status") as string) ?? "draft",
  }

  const parsed = createSchema.safeParse({
    ...data,
    tags: data.tags.length ? data.tags : undefined,
    status: data.status,
  })

  if (!parsed.success) {
    throw new Error("表单内容不合法")
  }

  const service = getNewsService()
  await service.createNews({
    ...parsed.data,
    authorId: user.id,
    authorName: user.name,
  })

  revalidatePath("/admin/news")
  revalidatePath("/news")
}

export async function deleteNewsAction(newsId: string) {
  await requireSessionUser()
  const service = getNewsService()
  await service.deleteNews(newsId)
  revalidatePath("/admin/news")
  revalidatePath("/news")
}

