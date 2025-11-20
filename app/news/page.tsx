import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Calendar, Tag, ArrowRight } from "lucide-react"
import Link from "next/link"

const allNews = [
  {
    id: 1,
    title: "2024年东城区摄影大赛圆满落幕",
    excerpt:
      "本次大赛共收到来自全区摄影爱好者的作品500余幅，经过专业评委的严格评选，最终评出获奖作品50幅...",
    date: "2024-03-15",
    category: "赛事活动",
    image: "/sucai/photography-competition-award-ceremony.jpg",
  },
  {
    id: 2,
    title: "春季摄影采风活动成功举办",
    excerpt:
      "协会组织会员前往故宫、天坛等地进行春季摄影采风，捕捉春日美景，提升摄影技艺...",
    date: "2024-03-10",
    category: "采风活动",
    image: "/sucai/photographers-taking-pictures-in-traditional-chine.jpg",
  },
  {
    id: 3,
    title: "摄影技术交流讲座即将开展",
    excerpt:
      "邀请知名摄影师分享人像摄影技巧，包括光线运用、构图技法等专业知识...",
    date: "2024-03-08",
    category: "技术培训",
    image: "/sucai/photography-workshop-with-professional-equipment.jpg",
  },
  {
    id: 4,
    title: "协会年度会员大会顺利召开",
    excerpt:
      "2024年度会员大会在东城区文化中心召开，总结过去一年工作成果，部署新年度工作计划...",
    date: "2024-03-01",
    category: "协会新闻",
    image: "/sucai/conference-meeting-hall.jpg",
  },
  {
    id: 5,
    title: "夏季风光摄影专题讲座报名开启",
    excerpt:
      "特邀国内知名风光摄影师讲解风光摄影的拍摄技巧、后期处理等内容，名额有限，欢迎报名...",
    date: "2024-02-25",
    category: "技术培训",
    image: "/sucai/mountain-landscape.png",
  },
  {
    id: 6,
    title: "协会摄影作品展览筹备中",
    excerpt: "协会将于4月举办年度优秀摄影作品展览，现向全体会员征集优秀作品...",
    date: "2024-02-20",
    category: "展览活动",
    image: "/sucai/art-gallery-exhibition-photos.jpg",
  },
  {
    id: 7,
    title: "新会员入会申请流程优化通知",
    excerpt:
      "为更好地服务摄影爱好者，协会优化了会员入会流程，简化申请材料，提高办理效率...",
    date: "2024-02-15",
    category: "协会新闻",
    image: "/sucai/photography-club-membership.jpg",
  },
  {
    id: 8,
    title: "冬季冰雪摄影采风活动回顾",
    excerpt:
      "协会组织会员前往北京郊区进行冰雪摄影创作，记录冬日美景，收获颇丰...",
    date: "2024-02-10",
    category: "采风活动",
    image: "/sucai/winter-snow-photography.jpg",
  },
  {
    id: 9,
    title: "手机摄影技巧公益讲座成功举办",
    excerpt:
      "协会举办手机摄影公益讲座，吸引众多摄影爱好者参与，讲解手机摄影实用技巧...",
    date: "2024-02-05",
    category: "技术培训",
    image: "/sucai/smartphone-photography-tutorial.jpg",
  },
];

const categories = ["全部", "协会新闻", "赛事活动", "采风活动", "技术培训", "展览活动"]

export default function NewsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary/10 via-background to-primary/5">
        <div className="absolute inset-0 bg-[url('/abstract-photography-pattern.jpg')] opacity-5 bg-cover bg-center" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">协会动态</h1>
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
              <Button key={category} variant={category === "全部" ? "default" : "outline"} className="rounded-full">
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
                      src={item.image || "/placeholder.svg"}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {item.date}
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
                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{item.excerpt}</p>
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
  )
}
