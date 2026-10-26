import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export const checkoutSchema = z.object({
  branchSlug: z.string().min(1),
  fulfillmentType: z.enum(["PICKUP", "DELIVERY"]),
  customerName: z.string().min(2).max(100),
  phone: z.string().min(7).max(30),
  email: z.string().email().optional().or(z.literal("")),
  deliveryAddress: z.string().max(250).optional().or(z.literal("")),
  notes: z.string().max(500).optional().or(z.literal("")),
  items: z.array(z.object({ slug: z.string(), quantity: z.number().int().min(1).max(20) })).min(1)
}).superRefine((data, ctx) => {
  if (data.fulfillmentType === "DELIVERY" && !data.deliveryAddress) {
    ctx.addIssue({ code: "custom", message: "Delivery address is required", path: ["deliveryAddress"] });
  }
});
