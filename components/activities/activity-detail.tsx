"use client"

import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, Users, Clock, Tag } from "lucide-react"
import { Activity } from "@/types/activity"

interface ActivityDetailProps {
  activity: Activity | null
  open: boolean
  onClose: () => void
}

export function ActivityDetail({ activity, open, onClose }: ActivityDetailProps) {
  if (!activity) return null

  const getStatusColor = (status: Activity['status']) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-100 text-blue-800'
      case 'ongoing': return 'bg-green-100 text-green-800'
      case 'completed': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
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
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex justify-between items-start">
            <DialogTitle className="text-xl font-semibold pr-4">
              {activity.title}
            </DialogTitle>
            <Badge className={getStatusColor(activity.status)}>
              {getStatusText(activity.status)}
            </Badge>
          </div>
        </DialogHeader>

        <div className="space-y-6">
          {/* 活动图片 */}
          <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500">活动封面图</span>
          </div>

          {/* 基本信息 */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center space-x-3">
              <Calendar className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">活动时间</p>
                <p className="font-medium">{activity.date}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">活动地点</p>
                <p className="font-medium">{activity.location}</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Users className="w-5 h-5 text-gray-500" />
              <div>
                <p className="text-sm text-gray-500">组织者</p>
                <p className="font-medium">{activity.organizer}</p>
              </div>
            </div>
            {activity.registrationRequired && (
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5 text-gray-500" />
                <div>
                  <p className="text-sm text-gray-500">参与人数</p>
                  <p className="font-medium">
                    {activity.currentParticipants}/{activity.maxParticipants} 人
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* 活动描述 */}
          <div>
            <h3 className="font-semibold mb-2">活动介绍</h3>
            <p className="text-gray-700 leading-relaxed">{activity.description}</p>
          </div>

          {/* 标签 */}
          <div>
            <h3 className="font-semibold mb-2">活动标签</h3>
            <div className="flex flex-wrap gap-2">
              {activity.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="text-sm">
                  <Tag className="w-3 h-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>

          {/* 报名信息 */}
          {activity.registrationRequired && (
            <div className="border-t pt-4">
              <h3 className="font-semibold mb-3">报名信息</h3>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">报名状态:</span>
                  <Badge className={isRegistrationOpen ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}>
                    {isRegistrationOpen ? '开放报名' : '报名已截止'}
                  </Badge>
                </div>
                {activity.registrationDeadline && (
                  <div className="flex items-center">
                    <Clock className="w-4 h-4 mr-2 text-orange-500" />
                    <span className="text-gray-600">
                      报名截止: {activity.registrationDeadline}
                    </span>
                  </div>
                )}
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ 
                      width: `${(activity.currentParticipants! / activity.maxParticipants!) * 100}%` 
                    }}
                  />
                </div>
                <p className="text-sm text-gray-600">
                  已报名 {activity.currentParticipants} 人，剩余 {activity.maxParticipants! - activity.currentParticipants!} 个名额
                </p>
              </div>
            </div>
          )}

          {/* 操作按钮 */}
          <div className="flex gap-3 pt-4 border-t">
            <Button variant="outline" onClick={onClose} className="flex-1">
              关闭
            </Button>
            {isRegistrationOpen && (
              <Button className="flex-1">
                立即报名
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}