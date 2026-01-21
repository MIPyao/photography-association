"use client"

import { useState } from "react"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { 
  Heart, 
  Eye, 
  Camera, 
  MapPin, 
  Calendar, 
  Settings,
  Share2,
  Download,
  X
} from "lucide-react"
import { Exhibition } from "@/types/exhibition"

interface ImageModalProps {
  exhibition: Exhibition | null
  open: boolean
  onClose: () => void
}

export function ImageModal({ exhibition, open, onClose }: ImageModalProps) {
  if (!exhibition) return null

  const [isLiked, setIsLiked] = useState(false)

  const handleLike = () => {
    setIsLiked(!isLiked)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: exhibition.title,
        text: `${exhibition.title} - 作者: ${exhibition.author}`,
        url: window.location.href
      })
    }
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-6xl max-h-[90vh] p-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row h-full">
          {/* 左侧图片区域 */}
          <div className="lg:w-3/4 bg-black flex items-center justify-center relative">
            <div className="w-full h-full flex items-center justify-center p-4">
              <div className="relative max-w-full max-h-full">
                <img 
                  src={exhibition.imageUrl} 
                  alt={exhibition.title}
                  className="max-w-full max-h-full object-contain"
                />
                {/* 图片操作按钮 */}
                <div className="absolute top-4 right-4 flex gap-2">
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={handleShare}
                    className="bg-black/50 text-white hover:bg-black/70"
                  >
                    <Share2 className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-black/50 text-white hover:bg-black/70"
                  >
                    <Download className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="secondary"
                    size="sm"
                    onClick={onClose}
                    className="bg-black/50 text-white hover:bg-black/70"
                  >
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* 右侧信息区域 */}
          <div className="lg:w-1/4 bg-white flex flex-col h-full">
            <div className="flex-1 overflow-y-auto p-6">
              {/* 作品标题和基本信息 */}
              <div className="mb-6">
                <h2 className="text-2xl font-bold mb-2">{exhibition.title}</h2>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                  <div className="flex items-center">
                    <Eye className="w-4 h-4 mr-1" />
                    {exhibition.views}
                  </div>
                  <div className="flex items-center">
                    <Heart className={`w-4 h-4 mr-1 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
                    {exhibition.likes! + (isLiked ? 1 : 0)}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="w-4 h-4 mr-1" />
                    {exhibition.uploadDate}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{exhibition.category}</Badge>
                  {exhibition.featured && (
                    <Badge className="bg-yellow-100 text-yellow-800">精选</Badge>
                  )}
                </div>
              </div>

              {/* 作者信息 */}
              <div className="mb-6 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center mb-3">
                  <Avatar className="w-10 h-10 mr-3">
                    <AvatarImage src={exhibition.authorAvatar} />
                    <AvatarFallback>{exhibition.author[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{exhibition.author}</h3>
                    <p className="text-sm text-gray-600">摄影师</p>
                  </div>
                </div>
                {exhibition.authorBio && (
                  <p className="text-sm text-gray-700">{exhibition.authorBio}</p>
                )}
              </div>

              {/* 作品描述 */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">作品介绍</h3>
                <p className="text-gray-700 leading-relaxed">{exhibition.description}</p>
              </div>

              {/* 拍摄信息 */}
              <div className="mb-6">
                <h3 className="font-semibold mb-3">拍摄信息</h3>
                <div className="space-y-2">
                  {exhibition.camera && (
                    <div className="flex items-center text-sm">
                      <Camera className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-600 mr-2">相机:</span>
                      <span>{exhibition.camera}</span>
                    </div>
                  )}
                  {exhibition.settings && (
                    <div className="flex items-center text-sm">
                      <Settings className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-600 mr-2">参数:</span>
                      <span>{exhibition.settings}</span>
                    </div>
                  )}
                  {exhibition.location && (
                    <div className="flex items-center text-sm">
                      <MapPin className="w-4 h-4 mr-2 text-gray-500" />
                      <span className="text-gray-600 mr-2">地点:</span>
                      <span>{exhibition.location}</span>
                    </div>
                  )}
                  {exhibition.dimensions && (
                    <div className="flex items-center text-sm">
                      <span className="text-gray-600 mr-2">尺寸:</span>
                      <span>{exhibition.dimensions.width} × {exhibition.dimensions.height}</span>
                    </div>
                  )}
                </div>
              </div>

              {/* 标签 */}
              <div className="mb-6">
                <h3 className="font-semibold mb-2">标签</h3>
                <div className="flex flex-wrap gap-2">
                  {exhibition.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs">
                      #{tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>

            {/* 底部操作栏 */}
            <div className="border-t p-4">
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleLike}
                  className={`flex-1 ${isLiked ? 'text-red-500 border-red-500' : ''}`}
                >
                  <Heart className={`w-4 h-4 mr-2 ${isLiked ? 'fill-current' : ''}`} />
                  {isLiked ? '已喜欢' : '喜欢'}
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShare}
                  className="flex-1"
                >
                  <Share2 className="w-4 h-4 mr-2" />
                  分享
                </Button>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}