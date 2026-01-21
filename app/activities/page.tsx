"use client"

import { useState, useMemo } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ActivityCard } from "@/components/activities/activity-card"
import { ActivityDetail } from "@/components/activities/activity-detail"
import { ActivityFilterComponent } from "@/components/activities/activity-filter"
import { mockActivities } from "@/data/activities"
import { Activity, ActivityFilter } from "@/types/activity"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Camera, MapPin, Users, Clock } from "lucide-react"

export default function ActivitiesPage() {
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)
  const [isDetailOpen, setIsDetailOpen] = useState(false)
  const [filter, setFilter] = useState<ActivityFilter>({})

  // 根据筛选条件过滤活动
  const filteredActivities = useMemo(() => {
    return mockActivities.filter((activity) => {
      if (filter.status && activity.status !== filter.status) {
        return false
      }
      if (filter.registrationRequired !== undefined && activity.registrationRequired !== filter.registrationRequired) {
        return false
      }
      return true
    })
  }, [filter])

  const handleViewDetails = (activity: Activity) => {
    setSelectedActivity(activity)
    setIsDetailOpen(true)
  }

  const handleCloseDetail = () => {
    setIsDetailOpen(false)
    setSelectedActivity(null)
  }

  const handleFilterChange = (newFilter: ActivityFilter) => {
    setFilter(newFilter)
  }

  // 统计数据
  const stats = {
    total: mockActivities.length,
    upcoming: mockActivities.filter(a => a.status === 'upcoming').length,
    ongoing: mockActivities.filter(a => a.status === 'ongoing').length,
    completed: mockActivities.filter(a => a.status === 'completed').length,
  }

  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* 英雄区域 */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/photography-activity-workshop.jpg')`,
          }}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background via-background/90 to-background" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge variant="secondary" className="mb-6 text-base px-4 py-2">
              <Calendar className="h-4 w-4 mr-2" />
              协会活动
            </Badge>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 text-balance">
              精彩活动
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto text-pretty leading-relaxed">
              参加我们丰富多彩的摄影活动
              <br />
              提升摄影技巧，结识志同道合的朋友
            </p>
            <div className="flex items-center justify-center gap-6 mt-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5 text-primary" />
                <span>{stats.upcoming} 个即将开始</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>{stats.ongoing} 个进行中</span>
              </div>
              <div className="hidden sm:block h-4 w-px bg-border" />
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-primary" />
                <span>{stats.total} 个总活动</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 活动统计区域 */}
      <section className="py-16 bg-linear-to-b from-background to-secondary/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-primary/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  <Calendar className="h-6 w-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-primary mb-1">{stats.upcoming}</div>
                <div className="text-sm text-muted-foreground">即将开始</div>
              </CardContent>
            </Card>
            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-green-500/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  <Clock className="h-6 w-6 text-green-500" />
                </div>
                <div className="text-2xl font-bold text-green-500 mb-1">{stats.ongoing}</div>
                <div className="text-sm text-muted-foreground">进行中</div>
              </CardContent>
            </Card>
            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-gray-500/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  <Camera className="h-6 w-6 text-gray-500" />
                </div>
                <div className="text-2xl font-bold text-gray-500 mb-1">{stats.completed}</div>
                <div className="text-sm text-muted-foreground">已完成</div>
              </CardContent>
            </Card>
            <Card className="text-center group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30">
              <CardContent className="p-6">
                <div className="mb-4 p-3 bg-secondary/10 rounded-lg inline-block group-hover:scale-110 transition-transform">
                  <Users className="h-6 w-6 text-secondary-foreground" />
                </div>
                <div className="text-2xl font-bold text-secondary-foreground mb-1">{stats.total}</div>
                <div className="text-sm text-muted-foreground">总活动数</div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* 左侧筛选 */}
            <div className="lg:w-80 flex-shrink-0">
              <ActivityFilterComponent
                filter={filter}
                onFilterChange={handleFilterChange}
                activities={mockActivities}
              />
            </div>

            {/* 右侧活动列表 */}
            <div className="flex-1">
              {/* 活动统计 */}
              <Card className="mb-6 shadow-lg border-2">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-primary" />
                      <span className="text-foreground">
                        共找到 <span className="font-semibold text-primary">{filteredActivities.length}</span> 个活动
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

              {/* 活动网格 */}
              {filteredActivities.length > 0 ? (
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredActivities.map((activity) => (
                    <ActivityCard
                      key={activity.id}
                      activity={activity}
                      onViewDetails={handleViewDetails}
                    />
                  ))}
                </div>
              ) : (
                <Card className="text-center py-16 shadow-lg border-2">
                  <CardContent>
                    <div className="text-muted-foreground mb-6">
                      <Calendar className="h-16 w-16 mx-auto mb-4" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-3">暂无活动</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      当前筛选条件下没有找到活动，请尝试调整筛选条件。
                    </p>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* 活动详情弹窗 */}
      <ActivityDetail
        activity={selectedActivity}
        open={isDetailOpen}
        onClose={handleCloseDetail}
      />
    </main>
  )
}