import type { Metadata } from "next";
import { PublicShell } from "@/components/layout/PublicShell";
import { CheckoutForm } from "@/components/forms/CheckoutForm";
export const metadata: Metadata = { title: "Checkout" };
export default function CheckoutPage() { return <PublicShell><section className="min-h-screen bg-drip-black px-5 pb-24 pt-36 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.3em] text-drip-red">Almost there</p><h1 className="mt-3 font-[var(--font-display)] text-6xl uppercase md:text-8xl">Checkout.</h1><p className="mb-10 mt-4 text-white/50">Choose your branch, fulfilment method and customer details.</p><CheckoutForm/></div></section></PublicShell>; }
