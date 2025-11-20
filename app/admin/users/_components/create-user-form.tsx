"use client"

import { useRef, useTransition } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { toast } from "@/components/ui/use-toast"

import { createUserAction } from "../actions"

export function CreateUserForm() {
  const [pending, startTransition] = useTransition()
  const formRef = useRef<HTMLFormElement>(null)

  const handleAction = (formData: FormData) => {
    startTransition(async () => {
      try {
        await createUserAction(formData)
        toast({ title: "用户创建成功" })
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
        <CardTitle>创建新用户</CardTitle>
      </CardHeader>
      <CardContent>
        <form ref={formRef} action={handleAction} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">姓名</Label>
            <Input id="name" name="name" placeholder="请输入姓名" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">邮箱</Label>
            <Input id="email" name="email" type="email" placeholder="user@example.com" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password">密码</Label>
            <Input id="password" name="password" type="password" placeholder="至少6位" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="role">角色</Label>
            <select
              id="role"
              name="role"
              defaultValue="editor"
              className="border-input focus-visible:border-ring focus-visible:ring-ring/50 dark:bg-input/30 dark:hover:bg-input/50 flex w-full rounded-md border bg-transparent px-3 py-2 text-sm shadow-xs transition outline-none focus-visible:ring-[3px]"
            >
              <option value="admin">管理员</option>
              <option value="editor">编辑</option>
              <option value="member">成员</option>
            </select>
          </div>
          <div className="md:col-span-2">
            <Button type="submit" disabled={pending}>
              {pending ? "创建中..." : "创建用户"}
            </Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}

