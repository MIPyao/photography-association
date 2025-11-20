"use client"

import { useTransition } from "react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { toast } from "@/components/ui/use-toast"
import type { SafeUser } from "@/modules/users/application/user-service"

import { updateUserStatusAction } from "../actions"

interface Props {
  users: SafeUser[]
}

export function UsersTable({ users }: Props) {
  const [pending, startTransition] = useTransition()

  const toggleStatus = (userId: string, current: "active" | "inactive") => {
    startTransition(async () => {
      try {
        await updateUserStatusAction({
          userId,
          status: current === "active" ? "inactive" : "active",
        })
        toast({ title: "状态已更新" })
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
        <CardTitle>用户列表</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>姓名</TableHead>
                <TableHead>邮箱</TableHead>
                <TableHead>角色</TableHead>
                <TableHead>状态</TableHead>
                <TableHead>操作</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>{user.name}</TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>{user.role}</TableCell>
                  <TableCell>
                    <Badge variant={user.status === "active" ? "default" : "secondary"}>
                      {user.status === "active" ? "启用" : "停用"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="sm"
                      disabled={pending}
                      onClick={() => toggleStatus(user.id, user.status)}
                    >
                      {user.status === "active" ? "停用" : "启用"}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
              {users.length === 0 && (
                <TableRow>
                  <TableCell colSpan={5} className="text-center text-muted-foreground py-6">
                    暂无用户
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

