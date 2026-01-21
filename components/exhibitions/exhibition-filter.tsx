"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Filter, Grid, List } from "lucide-react"
import { Exhibition, ExhibitionFilter } from "@/types/exhibition"
import { categories, mockExhibitions } from "@/data/exhibitions"

interface ExhibitionFilterProps {
  filter: ExhibitionFilter
  onFilterChange: (filter: ExhibitionFilter) => void
  exhibitions: Exhibition[]
}

export function ExhibitionFilterComponent({ filter, onFilterChange, exhibitions }: ExhibitionFilterProps) {
  const [isExpanded, setIsExpanded] = useState(false)

  const categoryOptions = categories.map(category => ({
    value: category,
    label: category,
    count: exhibitions.filter(e => e.category === category).length
  }))

  const featuredOptions = [
    { value: true, label: '精选作品', count: exhibitions.filter(e => e.featured === true).length },
    { value: false, label: '全部作品', count: exhibitions.length }
  ]

  const handleCategoryChange = (category: string | undefined) => {
    onFilterChange({ ...filter, category })
  }

  const handleFeaturedChange = (featured: boolean | undefined) => {
    onFilterChange({ ...filter, featured })
  }

  const clearFilters = () => {
    onFilterChange({})
  }

  const hasActiveFilters = filter.category !== undefined || filter.featured !== undefined

  return (
    <Card>
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg flex items-center">
            <Filter className="w-5 h-5 mr-2" />
            作品筛选
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
          {/* 分类筛选 */}
          <div>
            <h4 className="font-medium mb-2">作品分类</h4>
            <div className="space-y-1 max-h-48 overflow-y-auto">
              {categoryOptions.map((option) => (
                <div
                  key={option.value}
                  className="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-gray-50"
                  onClick={() => handleCategoryChange(filter.category === option.value ? undefined : option.value)}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filter.category === option.value}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    <span className="text-sm">{option.label}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">{option.count}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* 精选筛选 */}
          <div>
            <h4 className="font-medium mb-2">作品状态</h4>
            <div className="space-y-2">
              {featuredOptions.map((option) => (
                <div
                  key={option.value.toString()}
                  className="flex items-center justify-between p-2 rounded cursor-pointer hover:bg-gray-50"
                  onClick={() => handleFeaturedChange(filter.featured === option.value ? undefined : option.value)}
                >
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={filter.featured === option.value}
                      onChange={() => {}}
                      className="mr-2"
                    />
                    <span className="text-sm">{option.label}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">{option.count}</Badge>
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