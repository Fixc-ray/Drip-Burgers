import Decimal from "decimal.js";
import { NextResponse } from "next/server";
import { canUseDashboard, getAuthorizedBranches, getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function GET(request: Request) {
  const user = await getCurrentUser();
  if (!user || !canUseDashboard(user.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const branches = await getAuthorizedBranches(user.id, user.role);
  const url = new URL(request.url);
  const day = url.searchParams.get("date") ? new Date(`${url.searchParams.get("date")}T00:00:00+03:00`) : new Date();
  day.setHours(0, 0, 0, 0);
  const end = new Date(day); end.setDate(end.getDate() + 1);
  const orders = await prisma.order.findMany({ where: { branchId: { in: branches.map((b) => b.id) }, createdAt: { gte: day, lt: end } }, include: { branch: true } });
  const revenue = orders.reduce((sum, order) => sum.add(order.total.toString()), new Decimal(0));
  const byBranch = branches.map((branch) => {
    const branchOrders = orders.filter((order) => order.branchId === branch.id);
    return { branch: branch.name, orders: branchOrders.length, revenue: branchOrders.reduce((sum, order) => sum.add(order.total.toString()), new Decimal(0)).toFixed(2) };
  });
  return NextResponse.json({ date: day.toISOString().slice(0, 10), orders: orders.length, revenue: revenue.toFixed(2), byBranch });
}
