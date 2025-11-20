import { connectMongo } from "@/lib/db/mongodb"
import { CreateNewsInput, NewsArticle, UpdateNewsInput } from "@/modules/news/domain/news"
import { INewsRepository } from "@/modules/news/domain/news-repository"

import { NewsModel } from "./mongo-news-model"

export class MongoNewsRepository implements INewsRepository {
  private async ready() {
    await connectMongo()
  }

  private toDomain(doc: any): NewsArticle {
    return {
      id: doc._id.toString(),
      title: doc.title,
      excerpt: doc.excerpt,
      content: doc.content,
      category: doc.category,
      coverImage: doc.coverImage ?? undefined,
      tags: doc.tags ?? [],
      publishedAt: doc.publishedAt ?? doc.createdAt,
      authorId: doc.authorId?.toString() ?? "",
      authorName: doc.authorName,
      status: doc.status,
      views: doc.views ?? 0,
      createdAt: doc.createdAt,
      updatedAt: doc.updatedAt,
    }
  }

  async create(data: CreateNewsInput & { authorId: string; authorName?: string }): Promise<NewsArticle> {
    await this.ready()
    const created = await NewsModel.create({
      ...data,
      publishedAt: data.status === "published" ? new Date() : undefined,
    })
    return this.toDomain(created)
  }

  async update(id: string, data: UpdateNewsInput): Promise<NewsArticle | null> {
    await this.ready()
    const updated = await NewsModel.findByIdAndUpdate(
      id,
      {
        ...data,
        ...(data.status === "published" && !data.publishedAt ? { publishedAt: new Date() } : {}),
      },
      { new: true }
    )
    return updated ? this.toDomain(updated) : null
  }

  async delete(id: string): Promise<boolean> {
    await this.ready()
    const res = await NewsModel.findByIdAndDelete(id)
    return Boolean(res)
  }

  async findById(id: string): Promise<NewsArticle | null> {
    await this.ready()
    const doc = await NewsModel.findById(id)
    return doc ? this.toDomain(doc) : null
  }

  async list(): Promise<NewsArticle[]> {
    await this.ready()
    const docs = await NewsModel.find().sort({ publishedAt: -1 })
    return docs.map((doc) => this.toDomain(doc))
  }
}

