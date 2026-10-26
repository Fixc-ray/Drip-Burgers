import { NextResponse } from "next/server";
import { createOrder, safeOrder } from "@/lib/orders";
import { getAuthorizedBranches, getCurrentUser, canUseDashboard } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const runtime = "nodejs";

export async function POST(request: Request) {
  try {
    const user = await getCurrentUser();
    const order = await createOrder(await request.json(), user?.id);
    return NextResponse.json({ order: { id: order.id, orderNumber: order.orderNumber, total: order.total.toString(), status: order.status } }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Unable to place order" }, { status: 400 });
  }
}

export async function GET() {
  const user = await getCurrentUser();
  if (!user || !canUseDashboard(user.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const branches = await getAuthorizedBranches(user.id, user.role);
  const orders = await prisma.order.findMany({
    where: { branchId: { in: branches.map((branch) => branch.id) } },
    include: { branch: true, items: { include: { menuItem: true } } },
    orderBy: { createdAt: "desc" }, take: 100
  });
  return NextResponse.json({ orders: orders.map((order) => ({
    id: order.id, orderNumber: order.orderNumber, status: order.status, fulfillmentType: order.fulfillmentType,
    branch: order.branch.name, total: order.total.toString(), createdAt: order.createdAt, customer: safeOrder(order),
    items: order.items.map((item) => ({ name: item.menuItem.name, quantity: item.quantity, lineTotal: item.lineTotal.toString() }))
  })) });
}
