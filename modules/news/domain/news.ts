export interface NewsArticle {
  id: string
  title: string
  excerpt: string
  content: string
  category: string
  coverImage?: string
  tags?: string[]
  publishedAt: Date
  authorId: string
  authorName?: string
  status: "draft" | "published"
  views: number
  createdAt: Date
  updatedAt: Date
}

export interface CreateNewsInput {
  title: string
  excerpt: string
  content: string
  category: string
  coverImage?: string
  tags?: string[]
  status?: "draft" | "published"
}

export interface UpdateNewsInput extends Partial<CreateNewsInput> {
  publishedAt?: Date
}

