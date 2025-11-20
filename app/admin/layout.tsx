import { redirect } from "next/navigation"
import { ReactNode } from "react"

import { Button } from "@/components/ui/button"
import { clearSessionCookie, getSessionUser } from "@/lib/auth/session"
import { AdminNav } from "./_components/admin-nav"

async function logout() {
  "use server"
  await clearSessionCookie()
  redirect("/login")
}

export default async function AdminLayout({ children }: { children: ReactNode }) {
  const user = await getSessionUser()
  if (!user) {
    redirect("/login")
  }

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-16 flex items-center justify-between">
            <div>
              <p className="text-sm text-muted-foreground">摄影协会管理后台</p>
              <h1 className="text-xl font-semibold text-foreground">欢迎回来，{user.name}</h1>
            </div>
            <form action={logout}>
              <Button type="submit" variant="outline">
                退出登录
              </Button>
            </form>
          </div>
          <AdminNav />
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-6 py-10 space-y-10">{children}</main>
    </div>
  )
}

