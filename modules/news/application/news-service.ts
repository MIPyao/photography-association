import { CreateNewsInput, NewsArticle, UpdateNewsInput } from "@/modules/news/domain/news"
import { INewsRepository } from "@/modules/news/domain/news-repository"

export class NewsService {
  constructor(private readonly repository: INewsRepository) {}

  async listNews(): Promise<NewsArticle[]> {
    return this.repository.list()
  }

  async getNewsById(id: string): Promise<NewsArticle | null> {
    return this.repository.findById(id)
  }

  async createNews(input: CreateNewsInput & { authorId: string; authorName?: string }) {
    return this.repository.create(input)
  }

  async updateNews(id: string, input: UpdateNewsInput) {
    return this.repository.update(id, input)
  }

  async deleteNews(id: string) {
    return this.repository.delete(id)
  }
}

