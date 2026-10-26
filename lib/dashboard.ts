import Decimal from "decimal.js";
import { prisma } from "@/lib/prisma";

export async function getDashboardStats(branchIds?: string[]) {
  const where = branchIds ? { branchId: { in: branchIds } } : {};
  const [orders, pending, completed] = await Promise.all([
    prisma.order.findMany({ where, select: { total: true } }),
    prisma.order.count({ where: { ...where, status: { in: ["PENDING", "CONFIRMED", "PREPARING", "READY"] } } }),
    prisma.order.count({ where: { ...where, status: "COMPLETED" } })
  ]);
  const revenue = orders.reduce((sum, order) => sum.add(order.total.toString()), new Decimal(0));
  return { revenue: revenue.toFixed(2), totalOrders: orders.length, pending, completed };
}
