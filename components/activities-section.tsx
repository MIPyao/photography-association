import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react"
import Link from "next/link"

const activities = [
  {
    id: 1,
    title: "夜景摄影技巧分享会",
    description:
      "专业摄影师现场指导夜景拍摄技巧，包括长曝光、光轨拍摄等高级技法",
    date: "2024-03-25",
    time: "19:00-21:00",
    location: "东城区文化馆",
    participants: 30,
    status: "报名中",
    image: "/sucai/night-photography-workshop-with-city-lights.jpg",
  },
  {
    id: 2,
    title: "胡同文化摄影采风",
    description: "走进老北京胡同，用镜头记录传统文化与现代生活的交融",
    date: "2024-04-02",
    time: "09:00-17:00",
    location: "南锣鼓巷周边",
    participants: 25,
    status: "即将开始",
    image: "/sucai/traditional-beijing-hutong-alley-with-photographer.jpg",
  },
  {
    id: 3,
    title: "人像摄影专题讲座",
    description: "邀请知名人像摄影师分享拍摄心得，从构图到后期全流程解析",
    date: "2024-04-10",
    time: "14:00-16:30",
    location: "东城区图书馆",
    participants: 50,
    status: "筹备中",
    image: "/sucai/portrait-photography-studio-setup-with-professiona.jpg",
  },
];

export function ActivitiesSection() {
  return (
    <section className="py-16 bg-muted/30 theme-flat:bg-accent/30 theme-business:bg-secondary/10 theme-modern:bg-muted/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 theme-flat:font-semibold theme-business:font-bold theme-business:text-2xl theme-business:uppercase theme-business:tracking-wider theme-modern:metallic-text">
            协会活动
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto theme-business:text-base theme-business:font-medium">
            参与丰富多彩的摄影活动，提升技艺，结识同好
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 mb-12">
          {activities.map((activity) => (
            <Card
              key={activity.id}
              className="group hover:shadow-lg transition-shadow duration-300 theme-flat:rounded-sm theme-flat:border-2 theme-flat:hover:border-accent theme-business:rounded-none theme-business:shadow-sm theme-business:hover:shadow-md theme-modern:glass-effect theme-modern:border theme-modern:border-white/10"
            >
              <div className="aspect-video overflow-hidden rounded-t-lg theme-flat:rounded-t-sm theme-business:rounded-t-none">
                <img
                  src={activity.image || "/placeholder.svg"}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge
                    variant={activity.status === "报名中" ? "default" : "secondary"}
                    className="theme-flat:rounded-sm theme-business:rounded-none theme-business:font-semibold theme-business:text-xs theme-business:uppercase theme-modern:glass-effect"
                  >
                    {activity.status}
                  </Badge>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors theme-flat:font-medium theme-business:font-bold theme-business:text-base theme-business:uppercase theme-modern:metallic-text">
                  {activity.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-muted-foreground text-sm line-clamp-2 theme-business:text-xs">
                  {activity.description}
                </p>

                <div className="space-y-2 text-sm text-muted-foreground theme-business:text-xs">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2" />
                    {activity.date} {activity.time}
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    {activity.location}
                  </div>
                  <div className="flex items-center">
                    <Users className="h-4 w-4 mr-2" />限{activity.participants}人
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            className="theme-flat:rounded-sm theme-business:rounded-none theme-business:font-semibold theme-business:uppercase theme-business:tracking-wide theme-modern:glass-effect theme-modern:border theme-modern:border-primary/20"
          >
            <Link href="/activities">
              查看更多活动
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
