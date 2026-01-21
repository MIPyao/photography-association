"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { Heart, Eye, User } from "lucide-react"
import { Exhibition } from "@/types/exhibition"

interface MasonryImageProps {
  exhibition: Exhibition
  onClick: (exhibition: Exhibition) => void
}

export function MasonryImage({ exhibition, onClick }: MasonryImageProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [isLiked, setIsLiked] = useState(false)

  const handleClick = () => {
    onClick(exhibition)
  }

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsLiked(!isLiked)
  }

  // 根据图片尺寸计算列高度
  const aspectRatio = exhibition.dimensions 
    ? exhibition.dimensions.height / exhibition.dimensions.width
    : 1.5

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-xl cursor-pointer group transition-all duration-300",
        "hover:shadow-xl hover:scale-[1.02] border-2 border-transparent hover:border-primary/30"
      )}
      style={{ aspectRatio: `${1}/${aspectRatio}` }}
      onClick={handleClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 图片 */}
      <img
        src={exhibition.imageUrl}
        alt={exhibition.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* 精选标识 */}
      {exhibition.featured && (
        <div className="absolute top-3 left-3 z-10">
          <div className="bg-yellow-500 text-black text-xs px-3 py-1 rounded-full font-medium flex items-center gap-1">
            <div className="w-1 h-1 bg-black rounded-full" />
            精选
          </div>
        </div>
      )}

      {/* 悬停遮罩 */}
      <div
        className={cn(
          "absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent transition-opacity duration-300",
          isHovered ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="absolute inset-0 flex flex-col justify-between p-4">
          {/* 顶部信息 */}
          <div className="flex justify-between items-start">
            <div className="text-white">
              <h3 className="font-bold text-base mb-2 line-clamp-2 drop-shadow-lg">
                {exhibition.title}
              </h3>
              <div className="flex items-center text-sm opacity-90">
                <User className="w-4 h-4 mr-2" />
                {exhibition.author}
              </div>
            </div>
          </div>

          {/* 底部信息和操作 */}
          <div className="flex justify-between items-end">
            <div className="text-white">
              <div className="flex items-center gap-4 text-sm">
                <div className="flex items-center group/item">
                  <Eye className="w-4 h-4 mr-2 group-hover/item:scale-110 transition-transform" />
                  {exhibition.views}
                </div>
                <div className="flex items-center group/item">
                  <Heart className={cn("w-4 h-4 mr-2 group-hover/item:scale-110 transition-transform", isLiked && "fill-current text-red-400")} />
                  {exhibition.likes! + (isLiked ? 1 : 0)}
                </div>
              </div>
              <div className="mt-2">
                <span className="text-sm bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full border border-white/30">
                  {exhibition.category}
                </span>
              </div>
            </div>
            <button
              onClick={handleLike}
              className={cn(
                "p-3 rounded-full transition-all duration-200 backdrop-blur-sm border-2",
                isLiked 
                  ? "bg-red-500/20 text-red-400 border-red-400/50 hover:bg-red-500/30" 
                  : "bg-white/20 text-white border-white/30 hover:bg-white/30 hover:scale-110"
              )}
            >
              <Heart className={cn("w-5 h-5", isLiked && "fill-current")} />
            </button>
          </div>
        </div>
      </div>

      {/* 快速信息条（始终显示） */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
        <div className="flex justify-between items-end">
          <div className="text-white">
            <h4 className="text-sm font-bold line-clamp-1 drop-shadow-lg">{exhibition.title}</h4>
            <p className="text-xs opacity-90 flex items-center">
              <User className="w-3 h-3 mr-1" />
              {exhibition.author}
            </p>
          </div>
          <div className="flex items-center gap-3 text-white text-xs">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
              <Eye className="w-3 h-3 mr-1" />
              {exhibition.views}
            </div>
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
              <Heart className="w-3 h-3 mr-1" />
              {exhibition.likes}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}