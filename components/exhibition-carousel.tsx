"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Eye, Heart, ArrowRight } from "lucide-react"
import Link from "next/link"

const exhibitions = [
  {
    id: 1,
    title: "春日京城",
    artist: "张明华",
    description: "捕捉北京春天的美丽瞬间，从樱花盛开到柳絮飞舞",
    image: "/beautiful-spring-scenery-in-beijing-with-cherry-bl.jpg",
    views: 1250,
    likes: 89,
  },
  {
    id: 2,
    title: "胡同记忆",
    artist: "李文静",
    description: "老北京胡同的光影变化，记录传统与现代的交融",
    image: "/traditional-beijing-hutong-with-dramatic-lighting-.jpg",
    views: 980,
    likes: 67,
  },
  {
    id: 3,
    title: "都市夜色",
    artist: "王建国",
    description: "东城区夜景摄影作品，展现现代都市的璀璨夜色",
    image: "/beijing-city-night-skyline-with-beautiful-lights-a.jpg",
    views: 1580,
    likes: 124,
  },
  {
    id: 4,
    title: "人文东城",
    artist: "赵雅琴",
    description: "街头摄影作品集，记录东城区人民的日常生活",
    image: "/street-photography-of-people-daily-life-in-beijing.jpg",
    views: 756,
    likes: 45,
  },
]

export function ExhibitionCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % exhibitions.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + exhibitions.length) % exhibitions.length)
  }

  useEffect(() => {
    const timer = setInterval(nextSlide, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section className="py-16 bg-background theme-flat:bg-secondary/20 theme-business:bg-muted/10 theme-modern:bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 theme-flat:font-semibold theme-business:font-bold theme-business:text-2xl theme-business:uppercase theme-business:tracking-wider theme-modern:metallic-text">
            影展在线
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto theme-business:text-base theme-business:font-medium">
            欣赏会员优秀摄影作品，感受光影艺术的魅力
          </p>
        </div>

        <div className="relative">
          {/* Main carousel */}
          <div className="relative h-[500px] md:h-[600px] overflow-hidden rounded-lg theme-flat:rounded-sm theme-business:rounded-none theme-modern:rounded-xl">
            {exhibitions.map((exhibition, index) => (
              <div
                key={exhibition.id}
                className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
                  index === currentIndex
                    ? "translate-x-0"
                    : index < currentIndex
                      ? "-translate-x-full"
                      : "translate-x-full"
                }`}
              >
                <div className="relative h-full">
                  <img
                    src={exhibition.image || "/placeholder.svg"}
                    alt={exhibition.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent theme-modern:from-black/80" />

                  {/* Content overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white theme-modern:glass-effect theme-modern:backdrop-blur-sm">
                    <div className="max-w-2xl">
                      <h3 className="text-3xl md:text-4xl font-bold mb-2 theme-flat:font-semibold theme-business:font-bold theme-business:uppercase theme-modern:metallic-text">
                        {exhibition.title}
                      </h3>
                      <p className="text-lg mb-2 text-white/90 theme-business:text-base theme-business:font-medium">
                        摄影师：{exhibition.artist}
                      </p>
                      <p className="text-white/80 mb-4 text-pretty theme-business:text-sm">{exhibition.description}</p>

                      <div className="flex items-center space-x-6 text-sm text-white/70 theme-business:text-xs">
                        <div className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" />
                          {exhibition.views}
                        </div>
                        <div className="flex items-center">
                          <Heart className="h-4 w-4 mr-1" />
                          {exhibition.likes}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 theme-flat:rounded-sm theme-business:rounded-none theme-modern:glass-effect"
            onClick={prevSlide}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20 theme-flat:rounded-sm theme-business:rounded-none theme-modern:glass-effect"
            onClick={nextSlide}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>

          {/* Indicators */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
            {exhibitions.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors theme-flat:rounded-sm theme-business:rounded-none ${
                  index === currentIndex ? "bg-white" : "bg-white/50"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-8">
          <Button
            asChild
            className="theme-flat:rounded-sm theme-business:rounded-none theme-business:font-semibold theme-business:uppercase theme-business:tracking-wide theme-modern:glass-effect theme-modern:border theme-modern:border-primary/20"
          >
            <Link href="/exhibitions">
              浏览更多作品
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
