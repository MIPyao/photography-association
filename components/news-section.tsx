import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"
import Link from "next/link"

const newsItems = [
  {
    id: 1,
    title: "2024年东城区摄影大赛圆满落幕",
    excerpt: "本次大赛共收到来自全区摄影爱好者的作品500余幅，经过专业评委的严格评选，最终评出获奖作品50幅...",
    date: "2024-03-15",
    image: "/sucai/photography-competition-award-ceremony.jpg",
  },
  {
    id: 2,
    title: "春季摄影采风活动成功举办",
    excerpt: "协会组织会员前往故宫、天坛等地进行春季摄影采风，捕捉春日美景，提升摄影技艺...",
    date: "2024-03-10",
    image: "/sucai/photographers-taking-pictures-in-traditional-chine.jpg",
  },
  {
    id: 3,
    title: "摄影技术交流讲座即将开展",
    excerpt: "邀请知名摄影师分享人像摄影技巧，包括光线运用、构图技法等专业知识...",
    date: "2024-03-08",
    image: "/sucai/photography-workshop-with-professional-equipment.jpg",
  },
]

export function NewsSection() {
  return (
    <section className="py-16 bg-background theme-flat:bg-secondary/20 theme-business:bg-muted/10 theme-modern:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 theme-flat:font-semibold theme-business:font-bold theme-business:text-2xl theme-business:uppercase theme-business:tracking-wider theme-modern:metallic-text">
            协会动态
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto theme-business:text-base theme-business:font-medium">
            了解协会最新资讯，掌握摄影行业动向
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item) => (
            <Card
              key={item.id}
              className="group hover:shadow-lg transition-shadow duration-300 theme-flat:rounded-sm theme-flat:border-2 theme-flat:hover:border-primary theme-business:rounded-none theme-business:shadow-sm theme-business:hover:shadow-md theme-modern:glass-effect theme-modern:border theme-modern:border-white/10"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg theme-flat:rounded-t-sm theme-business:rounded-t-none">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center text-sm text-muted-foreground mb-2">
                  <Calendar className="h-4 w-4 mr-2" />
                  {item.date}
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors theme-flat:font-medium theme-business:font-bold theme-business:text-base theme-business:uppercase theme-modern:metallic-text">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm line-clamp-3 theme-business:text-xs">{item.excerpt}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="theme-flat:rounded-sm theme-business:rounded-none theme-business:font-semibold theme-business:uppercase theme-business:tracking-wide theme-modern:glass-effect theme-modern:border theme-modern:border-primary/20"
          >
            <Link href="/news">
              查看更多动态
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
