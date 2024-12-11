import { DashboardLayout } from "@/components/dashboard-layout"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-background text-foreground">
      <DashboardLayout>{children}</DashboardLayout>
    </div>
  )
}

