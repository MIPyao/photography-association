"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { MasonryImage } from "@/components/exhibitions/masonry-image"
import { ImageModal } from "@/components/exhibitions/image-modal"
import { ExhibitionFilterComponent } from "@/components/exhibitions/exhibition-filter"
import { mockExhibitions } from "@/data/exhibitions"
import { Exhibition, ExhibitionFilter } from "@/types/exhibition"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, Image, Star, Eye, Users } from "lucide-react"

export default function ExhibitionsPage() {
  const [selectedExhibition, setSelectedExhibition] = useState<Exhibition | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [filter, setFilter] = useState<ExhibitionFilter>({})

  // 根据筛选条件过滤展览
  const filteredExhibitions = useMemo(() => {
    return mockExhibitions.filter((exhibition) => {
      if (filter.category && exhibition.category !== filter.category) {
        return false
      }
      if (filter.featured !== undefined && exhibition.featured !== filter.featured) {
        return false
      }
      return true
    })
  }, [filter])

  const handleImageClick = (exhibition: Exhibition) => {
    setSelectedExhibition(exhibition)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
    setSelectedExhibition(null)
  }

  const handleFilterChange = (newFilter: ExhibitionFilter) => {
    setFilter(newFilter)
  }

  // 统计数据
  const stats = {
    total: mockExhibitions.length,
    featured: mockExhibitions.filter(e => e.featured).length,
    categories: [...new Set(mockExhibitions.map(e => e.category))].length,
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* 英雄区域 */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/photography-gallery-exhibition.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              <Camera className="h-4 w-4 mr-2" />
              影展在线
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              光影艺术
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              欣赏协会会员的优秀摄影作品
              <br />
              感受光影艺术的魅力
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Image className="h-5 w-5 text-primary" />
                <span>{stats.total} 幅作品</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-primary" />
                <span>{stats.featured} 幅精选</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Camera className="h-5 w-5 text-primary" />
                <span>{stats.categories} 个分类</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 作品统计区域 */}
      <section className="py-16 bg-linear-to-b from-background to-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  <Image className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stats.total}</div>
                <div className="text-sm text-muted-foreground">总作品数</div>
              </CardContent>
            </Card>
            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-yellow-500/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  <Star className="h-6 w-6 text-yellow-500" />
                </div>
                <div className="text-2xl font-bold text-yellow-500 mb-1">{stats.featured}</div>
                <div className="text-sm text-muted-foreground">精选作品</div>
              </CardContent>
            </Card>
            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-secondary/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  <Camera className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="text-2xl font-bold text-secondary-foreground mb-1">{stats.categories}</div>
                <div className="text-sm text-muted-foreground">作品分类</div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* 左侧筛选 */}
            <div className="lg:w-80 flex-shrink-0">
              <ExhibitionFilterComponent
                filter={filter}
                onFilterChange={handleFilterChange}
                exhibitions={mockExhibitions}
              />
            </div>

            {/* 右侧瀑布流展示 */}
            <div className="flex-1">
              {/* 作品统计 */}
              <Card className="mb-6 shadow-lg border-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Image className="h-5 w-5 text-primary" />
                      <span className="text-foreground">
                        共展示 <span className="font-semibold text-primary">{filteredExhibitions.length}</span> 幅作品
                      </span>
                    </div>
                    {Object.keys(filter).length > 0 && (
                      <Badge variant="outline" className="text-xs">
                        已应用筛选条件
                      </Badge>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* 瀑布流布局 */}
              {filteredExhibitions.length > 0 ? (
                <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
                  {filteredExhibitions.map((exhibition) => (
                    <div key={exhibition.id} className="break-inside-avoid">
                      <MasonryImage
                        exhibition={exhibition}
                        onClick={handleImageClick}
                      />
                    </div>
                  ))}
                </div>
              ) : (
                <Card className="text-center py-16 shadow-lg border-2">
                  <CardContent>
                    <div className="text-muted-foreground mb-6">
                      <Image className="h-16 w-16 mx-auto mb-4" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">暂无作品</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      当前筛选条件下没有找到作品，请尝试调整筛选条件。
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* 图片详情弹窗 */}
      <ImageModal
        exhibition={selectedExhibition}
        open={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  )
}