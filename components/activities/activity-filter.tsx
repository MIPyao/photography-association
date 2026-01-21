"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, Calendar, Users } from "lucide-react"
import { Activity, ActivityFilter } from "@/types/activity"

interface ActivityFilterProps {
  filter: ActivityFilter
  onFilterChange: (filter: ActivityFilter) => void
  activities: Activity[]
}

export function ActivityFilterComponent({ filter, onFilterChange, activities }: ActivityFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const statusOptions = [
    { value: 'upcoming', label: '即将开始', count: activities.filter(a => a.status === 'upcoming').length },
    { value: 'ongoing', label: '进行中', count: activities.filter(a => a.status === 'ongoing').length },
    { value: 'completed', label: '已结束', count: activities.filter(a => a.status === 'completed').length }
  ]

  const registrationOptions = [
    { value: true, label: '需要报名', count: activities.filter(a => a.registrationRequired === true).length },
    { value: false, label: '无需报名', count: activities.filter(a => a.registrationRequired === false).length }
  ]

  const handleStatusChange = (status: Activity['status'] | undefined) => {
    onFilterChange({ ...filter, status })
  }

  const handleRegistrationChange = (registrationRequired: boolean | undefined) => {
    onFilterChange({ ...filter, registrationRequired })
  }

  const clearFilters = () => {
    onFilterChange({})
  }

  const hasActiveFilters = filter.status !== undefined || filter.registrationRequired !== undefined

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            活动筛选
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
          >
            {isExpanded ? '收起' : '展开'}
          </Button>
        </div>
      </CardHeader>
      {isExpanded && (
        <CardContent className="space-y-4">
          {/* 状态筛选 */}
          <div>
            <h4 className="font-medium mb-2">活动状态</h4>
            <div className="space-y-2">
              {statusOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-gray-50"
                  onClick={() => handleStatusChange(filter.status === option.value ? undefined : option.value as Activity['status'])}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filter.status === option.value}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    <span>{option.label}</span>
                  </div>
                  <Badge variant="secondary">{option.count}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* 报名要求筛选 */}
          <div>
            <h4 className="font-medium mb-2">报名要求</h4>
            <div className="space-y-2">
              {registrationOptions.map((option) => (
                <div
                  key={option.value.toString()}
                  className="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-gray-50"
                  onClick={() => handleRegistrationChange(filter.registrationRequired === option.value ? undefined : option.value)}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filter.registrationRequired === option.value}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    <span>{option.label}</span>
                  </div>
                  <Badge variant="secondary">{option.count}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* 清除筛选 */}
          {hasActiveFilters && (
            <div className="pt-2 border-t">
              <Button variant="outline" size="sm" onClick={clearFilters} className="w-full">
                清除所有筛选
              </Button>
            </div>
          )}
        </CardContent>
      )}
    </Card>
  )
}