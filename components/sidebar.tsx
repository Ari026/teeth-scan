"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { ScrollText, Plus, LayoutGrid, Settings, LogIn, BarChart } from 'lucide-react'
import React from "react"

const routes = [
  {
    label: "Dashboard",
    icon: LayoutGrid,
    href: "/dashboard",
  },
  {
    label: "All Studies",
    icon: ScrollText,
    href: "/dashboard/studies",
  },
  {
    label: "Analytics",
    icon: BarChart,
    href: "/dashboard/analytics",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/dashboard/settings",
  },
  {
    label: "Login",
    icon: LogIn,
    href: "/login",
  },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-background border-r">
      <div className="px-3 py-2">
        <h2 className="mb-2 px-4 text-lg font-semibold text-foreground">
          Dental Scan Analyzer
        </h2>
        <div className="space-y-1">
          {routes.map((route, index) => (
            <React.Fragment key={route.href}>
              {index === routes.length - 1 && (
                <div className="my-2 border-t border-border" />
              )}
              <Link
                href={route.href}
                className={cn(
                  "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-primary hover:bg-primary/10 rounded-lg transition",
                  pathname === route.href ? "text-primary bg-primary/10" : "text-muted-foreground"
                )}
              >
                <div className="flex items-center flex-1">
                  <route.icon className={cn("h-5 w-5 mr-3")} />
                  {route.label}
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  )
}

