import "server-only"

import { env } from "@/lib/config/env"
import { NewsService } from "@/modules/news/application/news-service"
import { MongoNewsRepository } from "@/modules/news/infrastructure/mongo-news-repository"
import { UserService } from "@/modules/users/application/user-service"
import { MongoUserRepository } from "@/modules/users/infrastructure/mongo-user-repository"

let userService: UserService | null = null
let newsService: NewsService | null = null

export function getUserService() {
  if (!userService) {
    if (env.dbProvider === "mongo") {
      userService = new UserService(new MongoUserRepository())
    } else {
      throw new Error(`Unsupported DB provider: ${env.dbProvider}`)
    }
  }
  return userService
}

export function getNewsService() {
  if (!newsService) {
    if (env.dbProvider === "mongo") {
      newsService = new NewsService(new MongoNewsRepository())
    } else {
      throw new Error(`Unsupported DB provider: ${env.dbProvider}`)
    }
  }
  return newsService
}

