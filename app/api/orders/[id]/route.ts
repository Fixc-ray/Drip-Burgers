import { NextResponse } from "next/server";
import { z } from "zod";
import { canUseDashboard, getAuthorizedBranches, getCurrentUser } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

const statusSchema = z.object({ status: z.enum(["PENDING", "CONFIRMED", "PREPARING", "READY", "COMPLETED", "CANCELLED"]) });
export const runtime = "nodejs";

export async function PATCH(request: Request, { params }: { params: Promise<{ id: string }> }) {
  const user = await getCurrentUser();
  if (!user || !canUseDashboard(user.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const { id } = await params;
  const branches = await getAuthorizedBranches(user.id, user.role);
  const order = await prisma.order.findUnique({ where: { id }, select: { branchId: true } });
  if (!order || !branches.some((branch) => branch.id === order.branchId)) return NextResponse.json({ error: "Order not found" }, { status: 404 });
  try {
    const { status } = statusSchema.parse(await request.json());
    const updated = await prisma.order.update({ where: { id }, data: { status } });
    return NextResponse.json({ id: updated.id, status: updated.status });
  } catch (error) {
    return NextResponse.json({ error: error instanceof Error ? error.message : "Invalid status" }, { status: 400 });
  }
}
