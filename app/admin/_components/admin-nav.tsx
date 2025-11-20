"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { cn } from "@/lib/utils"

const navItems = [
  { name: "控制面板", href: "/admin" },
  { name: "新闻管理", href: "/admin/news" },
  { name: "用户管理", href: "/admin/users" },
]

export function AdminNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-1 border-t border-border">
      {navItems.map((item) => {
        const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href))
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "px-4 py-3 text-sm font-medium transition-colors border-b-2",
              isActive
                ? "text-primary border-primary bg-accent/50"
                : "text-muted-foreground border-transparent hover:bg-accent hover:text-accent-foreground hover:border-primary/50"
            )}
          >
            {item.name}
          </Link>
        )
      })}
    </nav>
  )
}

