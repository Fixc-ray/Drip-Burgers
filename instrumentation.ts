export async function register() {
  if (process.env.NEXT_RUNTIME !== "nodejs" || process.env.CRON_ENABLED !== "true") return;
  const cron = (await import("node-cron")).default;
  const { prisma } = await import("@/lib/prisma");
  const Decimal = (await import("decimal.js")).default;

  cron.schedule("0 23 * * *", async () => {
    const start = new Date();
    start.setHours(0, 0, 0, 0);
    const orders = await prisma.order.findMany({ where: { createdAt: { gte: start } }, select: { total: true } });
    const revenue = orders.reduce((sum, order) => sum.add(order.total.toString()), new Decimal(0));
    console.info(`[Drip daily report] orders=${orders.length} revenue=${revenue.toFixed(2)}`);
  }, { timezone: "Africa/Nairobi" });
}
