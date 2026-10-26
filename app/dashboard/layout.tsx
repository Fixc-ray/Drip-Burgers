import { redirect } from "next/navigation";
import { canUseDashboard, getCurrentUser } from "@/lib/auth";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
export const dynamic="force-dynamic";
export default async function DashboardLayout({children}:{children:React.ReactNode}){const user=await getCurrentUser();if(!user||!canUseDashboard(user.role))redirect("/login");return <div className="min-h-screen bg-drip-charcoal text-white"><DashboardSidebar user={user}/><main className="px-5 pb-12 pt-24 lg:ml-64 lg:px-8 lg:pt-8">{children}</main></div>}
