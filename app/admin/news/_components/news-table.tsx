"use client"

import { useTransition } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"
import type { NewsArticle } from "@/modules/news/domain/news"

import { deleteNewsAction } from "../actions"

interface Props {
  news: NewsArticle[]
}

export function NewsTable({ news }: Props) {
  const [pending, startTransition] = useTransition()

  const handleDelete = (id: string) => {
    startTransition(async () => {
      try {
        await deleteNewsAction(id)
        toast({ title: "新闻已删除" })
      } catch (error) {
        toast({
          title: "操作失败",
          description: error instanceof Error ? error.message : "请稍后再试",
          variant: "destructive",
        })
      }
    })
  }

  return (
    <Card className="border-2">
      <CardHeader>
        <CardTitle>新闻列表</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>标题</TableHead>
                <TableHead>分类</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>发布时间</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {news.map((item) => (
                <TableRow key={item.id}>
                  <TableCell className="font-medium">{item.title}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>{item.status === "published" ? "已发布" : "草稿"}</TableCell>
                  <TableCell>{new Date(item.publishedAt).toLocaleDateString("zh-CN")}</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="sm" onClick={() => handleDelete(item.id)} disabled={pending}>
                      删除
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {news.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-6">
                    暂无新闻，请先创建
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  )
}

