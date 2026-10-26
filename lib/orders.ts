import Decimal from "decimal.js";
import { prisma } from "@/lib/prisma";
import { checkoutSchema } from "@/lib/validation";
import { encryptSensitive, decryptSensitive } from "@/lib/crypto";

export async function createOrder(input: unknown, userId?: string) {
  const data = checkoutSchema.parse(input);
  const branch = await prisma.branch.findUnique({ where: { slug: data.branchSlug } });
  if (!branch || !branch.active) throw new Error("Branch is unavailable");

  const slugs = data.items.map((item) => item.slug);
  const products = await prisma.menuItem.findMany({
    where: { slug: { in: slugs }, active: true, branches: { some: { branchId: branch.id, available: true } } }
  });
  if (products.length !== new Set(slugs).size) throw new Error("One or more items are unavailable at this branch");

  let subtotal = new Decimal(0);
  const orderItems = data.items.map((item) => {
    const product = products.find((entry) => entry.slug === item.slug)!;
    const unitPrice = new Decimal(product.price.toString());
    const lineTotal = unitPrice.mul(item.quantity);
    subtotal = subtotal.add(lineTotal);
    return { menuItemId: product.id, quantity: item.quantity, unitPrice: unitPrice.toFixed(2), lineTotal: lineTotal.toFixed(2) };
  });

  const deliveryFee = data.fulfillmentType === "DELIVERY" ? new Decimal(250) : new Decimal(0);
  const total = subtotal.add(deliveryFee);
  const orderNumber = `DRIP-${Date.now().toString().slice(-8)}-${Math.floor(Math.random() * 90 + 10)}`;

  return prisma.order.create({
    data: {
      orderNumber,
      userId,
      branchId: branch.id,
      fulfillmentType: data.fulfillmentType,
      customerNameEncrypted: encryptSensitive(data.customerName),
      phoneEncrypted: encryptSensitive(data.phone),
      emailEncrypted: data.email ? encryptSensitive(data.email) : null,
      deliveryAddressEncrypted: data.deliveryAddress ? encryptSensitive(data.deliveryAddress) : null,
      notesEncrypted: data.notes ? encryptSensitive(data.notes) : null,
      subtotal: subtotal.toFixed(2),
      deliveryFee: deliveryFee.toFixed(2),
      total: total.toFixed(2),
      items: { create: orderItems }
    },
    include: { branch: true, items: { include: { menuItem: true } } }
  });
}

export function safeOrder(order: {
  customerNameEncrypted: string;
  phoneEncrypted: string;
  emailEncrypted: string | null;
  deliveryAddressEncrypted: string | null;
  notesEncrypted: string | null;
}) {
  return {
    customerName: decryptSensitive(order.customerNameEncrypted),
    phone: decryptSensitive(order.phoneEncrypted),
    email: order.emailEncrypted ? decryptSensitive(order.emailEncrypted) : null,
    deliveryAddress: order.deliveryAddressEncrypted ? decryptSensitive(order.deliveryAddressEncrypted) : null,
    notes: order.notesEncrypted ? decryptSensitive(order.notesEncrypted) : null
  };
}
