"use client"

import { useRef, useTransition } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "@/components/ui/use-toast"

import { createNewsAction } from "../actions"

export function CreateNewsForm() {
  const [pending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)

  const handleAction = async (formData: FormData) => {
    startTransition(async () => {
      try {
        await createNewsAction(formData)
        toast({ title: "新闻已创建" })
        formRef.current?.reset()
      } catch (error) {
        toast({
          title: "创建失败",
          description: error instanceof Error ? error.message : "请稍后再试",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle>新增新闻</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={handleAction} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="title">标题</Label>
              <Input id="title" name="title" placeholder="请输入新闻标题" required />
            </div>
            <div>
              <Label htmlFor="category">分类</Label>
              <Input id="category" name="category" placeholder="例如：协会新闻" required />
            </div>
          </div>
          <div>
            <Label htmlFor="coverImage">封面图片 URL</Label>
            <Input id="coverImage" name="coverImage" placeholder="/sucai/xxx.jpg" />
          </div>
          <div>
            <Label htmlFor="excerpt">摘要</Label>
            <Textarea id="excerpt" name="excerpt" placeholder="简要描述新闻..." rows={3} required />
          </div>
          <div>
            <Label htmlFor="content">正文</Label>
            <Textarea id="content" name="content" placeholder="支持 HTML 内容" rows={6} required />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="tags">标签（逗号分隔）</Label>
              <Input id="tags" name="tags" placeholder="活动, 新闻, 赛事" />
            </div>
            <div>
              <Label htmlFor="status">状态</Label>
              <select
                id="status"
                name="status"
                defaultValue="draft"
                className="border-input focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 dark:hover:bg-input/50 flex w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition outline-none focus-visible:ring-[3px]"
              >
                <option value="draft">草稿</option>
                <option value="published">发布</option>
              </select>
            </div>
          </div>
          <Button type="submit" disabled={pending}>
            {pending ? "创建中..." : "创建新闻"}
          </Button>
        </form>
      </CardContent>
    </Card>
  )
}

