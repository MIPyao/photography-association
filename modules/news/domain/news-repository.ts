import { CreateNewsInput, NewsArticle, UpdateNewsInput } from "./news"

export interface INewsRepository {
  create(data: CreateNewsInput & { authorId: string; authorName?: string }): Promise<NewsArticle>
  update(id: string, data: UpdateNewsInput): Promise<NewsArticle | null>
  delete(id: string): Promise<boolean>
  findById(id: string): Promise<NewsArticle | null>
  list(): Promise<NewsArticle[]>
}

