"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock } from "lucide-react"
import { Activity } from "@/types/activity"

interface ActivityCardProps {
  activity: Activity
  onViewDetails: (activity: Activity) => void
}

export function ActivityCard({ activity, onViewDetails }: ActivityCardProps) {
  const getStatusColor = (status: Activity['status']) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500/10 text-blue-500 border-blue-500/20'
      case 'ongoing': return 'bg-green-500/10 text-green-500 border-green-500/20'
      case 'completed': return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
      default: return 'bg-gray-500/10 text-gray-500 border-gray-500/20'
    }
  }

  const getStatusText = (status: Activity['status']) => {
    switch (status) {
      case 'upcoming': return '即将开始'
      case 'ongoing': return '进行中'
      case 'completed': return '已结束'
      default: return '未知状态'
    }
  }

  const isRegistrationOpen = activity.registrationRequired && 
    activity.status === 'upcoming' && 
    activity.currentParticipants! < activity.maxParticipants!

  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-primary/30 overflow-hidden">
      {/* 活动封面图 */}
      <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
        {activity.coverImage && (
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url('${activity.coverImage}')` }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        
        {/* 状态标签 */}
        <div className="absolute top-4 right-4">
          <Badge className={`${getStatusColor(activity.status)} text-xs px-3 py-1 font-medium`}>
            {getStatusText(activity.status)}
          </Badge>
        </div>
        
        {/* 活动标题 */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-foreground line-clamp-2 drop-shadow-lg">
            {activity.title}
          </h3>
        </div>
      </div>

      <CardContent className="p-6">
        <div className="space-y-4">
          {/* 活动信息 */}
          <div className="space-y-3">
            <div className="flex items-center text-muted-foreground group/item">
              <Calendar className="w-5 h-5 mr-3 text-primary group-hover/item:scale-110 transition-transform" />
              <span className="text-sm">{activity.date}</span>
            </div>
            <div className="flex items-center text-muted-foreground group/item">
              <MapPin className="w-5 h-5 mr-3 text-primary group-hover/item:scale-110 transition-transform" />
              <span className="text-sm">{activity.location}</span>
            </div>
            <div className="flex items-center text-muted-foreground group/item">
              <Users className="w-5 h-5 mr-3 text-primary group-hover/item:scale-110 transition-transform" />
              <span className="text-sm">{activity.organizer}</span>
            </div>
          </div>
          
          {/* 报名信息 */}
          {activity.registrationRequired && (
            <div className="p-3 bg-secondary/10 rounded-xl border-2 border-secondary/20">
              <div className="flex items-center justify-between">
                <div className="flex items-center text-foreground">
                  <Users className="w-4 h-4 mr-2 text-primary" />
                  <span className="text-sm font-medium">
                    {activity.currentParticipants}/{activity.maxParticipants} 人
                  </span>
                </div>
                {activity.registrationDeadline && (
                  <div className="flex items-center text-orange-500 text-xs">
                    <Clock className="w-3 h-3 mr-1" />
                    截止 {activity.registrationDeadline}
                  </div>
                )}
              </div>
              {/* 进度条 */}
              <div className="mt-2">
                <div className="w-full bg-background rounded-full h-2 border border-border">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${Math.min((activity.currentParticipants! / activity.maxParticipants!) * 100, 100)}%` 
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {/* 活动标签 */}
          {activity.tags && activity.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {activity.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs px-2 py-1">
                  {tag}
                </Badge>
              ))}
              {activity.tags.length > 3 && (
                <Badge variant="outline" className="text-xs px-2 py-1">
                  +{activity.tags.length - 3}
                </Badge>
              )}
            </div>
          )}

          {/* 活动描述 */}
          <p className="text-muted-foreground text-sm leading-relaxed line-clamp-2">
            {activity.description}
          </p>

          {/* 操作按钮 */}
          <div className="flex gap-3 pt-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 group/btn hover:scale-105 transition-transform"
              onClick={() => onViewDetails(activity)}
            >
              查看详情
            </Button>
            {isRegistrationOpen && (
              <Button size="sm" className="flex-1 group/btn hover:scale-105 transition-transform">
                立即报名
              </Button>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}