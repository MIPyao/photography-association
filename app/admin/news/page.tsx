import { getNewsService } from "@/modules/container"

import { CreateNewsForm } from "./_components/create-news-form"
import { NewsTable } from "./_components/news-table"

export default async function AdminNewsPage() {
  const newsService = getNewsService()
  const news = await newsService.listNews()

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">新闻管理</h2>
        <p className="text-muted-foreground text-sm">创建、查看和管理协会新闻内容</p>
      </div>
      <CreateNewsForm />
      <NewsTable news={news} />
    </div>
  )
}

