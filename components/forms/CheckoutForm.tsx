"use client";

import { FormEvent, useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, ShieldCheck } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";
import { locations } from "@/data/locations";

export function CheckoutForm() {
  const cart = useCart();
  const router = useRouter();
  const [fulfillmentType, setFulfillmentType] = useState<"PICKUP" | "DELIVERY">("PICKUP");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const deliveryFee = fulfillmentType === "DELIVERY" ? 250 : 0;
  const total = useMemo(() => cart.subtotal + deliveryFee, [cart.subtotal, deliveryFee]);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setError("");
    if (!cart.branchSlug) { setError("Choose a Drip location before checking out."); return; }
    if (!cart.lines.length) { setError("Your cart is empty."); return; }
    const form = new FormData(event.currentTarget);
    setSubmitting(true);
    try {
      const response = await fetch("/api/orders", { method: "POST", headers: { "content-type": "application/json" }, body: JSON.stringify({
        branchSlug: cart.branchSlug, fulfillmentType, customerName: form.get("name"), phone: form.get("phone"), email: form.get("email"), deliveryAddress: form.get("address"), notes: form.get("notes"), items: cart.lines.map((line) => ({ slug: line.slug, quantity: line.quantity }))
      }) });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Unable to place order");
      cart.clear();
      router.push(`/order-confirmation?order=${encodeURIComponent(result.order.orderNumber)}&total=${encodeURIComponent(result.order.total)}`);
    } catch (err) { setError(err instanceof Error ? err.message : "Unable to place order"); }
    finally { setSubmitting(false); }
  }

  return <form onSubmit={submit} className="grid gap-8 lg:grid-cols-[1.1fr_.9fr]">
    <div className="space-y-7">
      <section className="border border-white/10 bg-drip-charcoal p-6"><p className="text-xs font-black uppercase tracking-[.2em] text-drip-red">1 · Location</p><div className="mt-4 grid gap-2 sm:grid-cols-2">{locations.map((location) => <button type="button" key={location.slug} onClick={() => cart.chooseBranch(location.slug)} className={`flex items-center gap-3 border p-4 text-left ${cart.branchSlug === location.slug ? "border-drip-red bg-drip-red/10" : "border-white/10"}`}><MapPin size={18} className="shrink-0 text-drip-red"/><span><strong className="block text-sm uppercase">{location.name}</strong><span className="text-xs text-white/45">{location.address}</span></span></button>)}</div></section>
      <section className="border border-white/10 bg-drip-charcoal p-6"><p className="text-xs font-black uppercase tracking-[.2em] text-drip-red">2 · Pickup or delivery</p><div className="mt-4 grid grid-cols-2 gap-2">{(["PICKUP","DELIVERY"] as const).map((type) => <button type="button" onClick={() => setFulfillmentType(type)} key={type} className={`p-4 text-sm font-black uppercase ${fulfillmentType === type ? "bg-drip-red" : "border border-white/10"}`}>{type}</button>)}</div></section>
      <section className="border border-white/10 bg-drip-charcoal p-6"><p className="text-xs font-black uppercase tracking-[.2em] text-drip-red">3 · Your details</p><div className="mt-5 grid gap-4 sm:grid-cols-2"><Field name="name" label="Name" required/><Field name="phone" label="Phone number" required/><Field name="email" label="Email" type="email"/><div className={fulfillmentType === "DELIVERY" ? "" : "opacity-40"}><Field name="address" label="Delivery address" required={fulfillmentType === "DELIVERY"} disabled={fulfillmentType !== "DELIVERY"}/></div><label className="sm:col-span-2"><span className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/50">Order notes</span><textarea name="notes" rows={4} className="w-full border border-white/15 bg-black p-3 outline-none focus:border-drip-red" placeholder="No onions, extra napkins…"/></label></div></section>
    </div>
    <aside className="h-fit border border-white/10 bg-drip-cream p-6 text-black lg:sticky lg:top-28"><p className="text-xs font-black uppercase tracking-[.2em] text-drip-red">Your order</p><div className="mt-5 space-y-4">{cart.lines.map((line) => <div key={line.slug} className="flex justify-between gap-4 border-b border-black/10 pb-4"><div><strong className="uppercase">{line.name}</strong><p className="text-xs text-black/50">Qty {line.quantity}</p></div><span className="font-bold">KSh {(line.price * line.quantity).toLocaleString("en-KE")}</span></div>)}</div><div className="mt-5 space-y-2 text-sm"><div className="flex justify-between"><span>Subtotal</span><strong>KSh {cart.subtotal.toLocaleString("en-KE")}</strong></div><div className="flex justify-between"><span>Delivery</span><strong>KSh {deliveryFee.toLocaleString("en-KE")}</strong></div><div className="mt-4 flex justify-between border-t border-black/15 pt-4 text-xl"><strong>Total</strong><strong>KSh {total.toLocaleString("en-KE")}</strong></div></div>{error && <p role="alert" className="mt-4 bg-red-100 p-3 text-sm font-semibold text-red-800">{error}</p>}<button disabled={submitting} className="mt-6 w-full bg-drip-red px-5 py-4 text-sm font-black uppercase tracking-[.14em] text-white disabled:opacity-50">{submitting ? "Placing order…" : "Place order"}</button><div className="mt-4 flex gap-2 text-xs leading-5 text-black/55"><ShieldCheck size={17} className="shrink-0"/><p>This creates a pending order only. No payment is captured. The backend is intentionally ready for a real M-Pesa/payment integration later.</p></div></aside>
  </form>;
}

function Field({ name, label, required, type = "text", disabled = false }: { name: string; label: string; required?: boolean; type?: string; disabled?: boolean }) {
  return <label><span className="mb-2 block text-xs font-bold uppercase tracking-wider text-white/50">{label}</span><input name={name} type={type} required={required} disabled={disabled} className="w-full border border-white/15 bg-black p-3 outline-none focus:border-drip-red disabled:cursor-not-allowed"/></label>;
}
