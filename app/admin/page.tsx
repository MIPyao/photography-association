import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { getNewsService, getUserService } from "@/modules/container"

export default async function AdminDashboardPage() {
  const [newsService, userService] = [getNewsService(), getUserService()]
  const [newsList, users] = await Promise.all([newsService.listNews(), userService.listUsers()])

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-2">控制面板</h2>
        <p className="text-muted-foreground text-sm">查看协会动态和管理员概况</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card className="border-2">
          <CardHeader>
            <CardTitle>新闻数量</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{newsList.length}</p>
            <p className="text-sm text-muted-foreground mt-1">当前已发布新闻总数</p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>管理员/用户</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{users.length}</p>
            <p className="text-sm text-muted-foreground mt-1">系统中可登录用户数量</p>
          </CardContent>
        </Card>

        <Card className="border-2">
          <CardHeader>
            <CardTitle>待办事项</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-4xl font-bold">{newsList.filter((n) => n.status === "draft").length}</p>
            <p className="text-sm text-muted-foreground mt-1">草稿状态的新闻</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

