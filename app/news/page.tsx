import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"

import { getNewsService } from "@/modules/container";

export default async function NewsPage() {
  const newsService = getNewsService();
  const allNews = (await newsService.listNews()).filter(
    (item) => item.status === "published"
  );
  const categories = [
    "全部",
    ...Array.from(new Set(allNews.map((item) => item.category))),
  ];

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-linear-to-br from-primary/10 via-background to-primary/5">
        <div className="absolute inset-0 bg-[url('/abstract-photography-pattern.jpg')] opacity-5 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            协会动态
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            了解协会最新资讯，掌握摄影行业动向
          </p>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "全部" ? "default" : "outline"}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allNews.map((item) => (
              <Link key={item.id} href={`/news/${item.id}`}>
                <Card className="group hover:shadow-xl transition-all duration-300 h-full border-2 hover:border-primary/50">
                  <div className="aspect-video overflow-hidden rounded-t-lg">
                    <img
                      src={item.coverImage || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {new Date(item.publishedAt).toLocaleDateString("zh-CN")}
                      </div>
                      <div className="flex items-center text-primary">
                        <Tag className="h-4 w-4 mr-1" />
                        {item.category}
                      </div>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">
                      {item.excerpt}
                    </p>
                    <div className="flex items-center text-primary text-sm font-medium group-hover:translate-x-2 transition-transform">
                      阅读全文
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-12">
            <Button variant="outline" size="sm" disabled>
              上一页
            </Button>
            <Button variant="default" size="sm">
              1
            </Button>
            <Button variant="outline" size="sm">
              2
            </Button>
            <Button variant="outline" size="sm">
              3
            </Button>
            <Button variant="outline" size="sm">
              下一页
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
