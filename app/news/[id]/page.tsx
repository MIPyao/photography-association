import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, Tag, User, ArrowLeft, Share2, Eye } from "lucide-react"
import Link from "next/link"
import { notFound } from "next/navigation";

import { getNewsService } from "@/modules/container";

export default async function NewsDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const newsService = getNewsService();
  const news = await newsService.getNewsById(params.id);

  if (!news) {
    notFound();
  }

  const relatedNews = (await newsService.listNews())
    .filter((item) => item.id !== news.id && item.status === "published")
    .slice(0, 2);

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Article Header */}
      <article className="py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link href="/news">
            <Button variant="ghost" className="mb-6 -ml-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回列表
            </Button>
          </Link>

          {/* Title & Meta */}
          <div className="mb-8">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Tag className="h-3 w-3 mr-1" />
              {news.category}
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
              {news.title}
            </h1>

            <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                {new Date(news.publishedAt).toLocaleDateString("zh-CN")}
              </div>
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                {news.authorName ?? "协会秘书处"}
              </div>
              <div className="flex items-center">
                <Eye className="h-4 w-4 mr-2" />
                {news.views} 次浏览
              </div>
              <Button variant="ghost" size="sm" className="ml-auto">
                <Share2 className="h-4 w-4 mr-2" />
                分享
              </Button>
            </div>
          </div>

          {/* Featured Image */}
          <div className="aspect-video overflow-hidden rounded-xl mb-12 border-2 border-border">
            <img
              src={news.coverImage || "/placeholder.svg"}
              alt={news.title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Article Content */}
          <div
            className="prose prose-lg max-w-none prose-headings:text-foreground prose-p:text-foreground/90 prose-li:text-foreground/90 prose-strong:text-foreground prose-a:text-primary hover:prose-a:text-primary/80"
            dangerouslySetInnerHTML={{ __html: news.content }}
          />

          {/* Tags & Share */}
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                <span className="text-sm text-muted-foreground">标签：</span>
                {(news.tags?.length ? news.tags : ["协会动态"]).map((tag) => (
                  <Button
                    key={tag}
                    variant="outline"
                    size="sm"
                    className="rounded-full bg-transparent"
                  >
                    {tag}
                  </Button>
                ))}
              </div>
              <Button variant="default" size="sm">
                <Share2 className="h-4 w-4 mr-2" />
                分享文章
              </Button>
            </div>
          </div>
        </div>
      </article>

      {/* Related News */}
      <section className="py-16 bg-secondary/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8">相关动态</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedNews.map((item) => (
              <Link key={item.id} href={`/news/${item.id}`}>
                <Card className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                  <div className="flex gap-4">
                    <div className="w-32 h-24 shrink-0 overflow-hidden">
                      <img
                        src={item.coverImage || "/placeholder.svg"}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>
                    <div className="flex-1 py-2 pr-4">
                      <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {new Date(item.publishedAt).toLocaleDateString("zh-CN")}
                      </p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
