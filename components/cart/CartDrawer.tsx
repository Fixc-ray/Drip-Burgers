"use client";

import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus, ShoppingBag, X } from "lucide-react";
import { useCart } from "@/components/cart/CartProvider";

export function CartDrawer() {
  const cart = useCart();
  return <AnimatePresence>{cart.isOpen && (
    <>
      <motion.button aria-label="Close cart" onClick={() => cart.setOpen(false)} className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} />
      <motion.aside className="fixed right-0 top-0 z-[60] flex h-dvh w-full max-w-md flex-col bg-drip-cream text-drip-black" initial={{ x: "100%" }} animate={{ x: 0 }} exit={{ x: "100%" }} transition={{ type: "spring", damping: 28, stiffness: 250 }}>
        <div className="flex items-center justify-between border-b border-black/10 p-6"><div><p className="text-xs font-bold uppercase tracking-[.25em]">Your order</p><h2 className="text-3xl font-black uppercase">Drip Bag</h2></div><button aria-label="Close cart" onClick={() => cart.setOpen(false)}><X /></button></div>
        <div className="flex-1 overflow-y-auto p-6">
          {cart.lines.length === 0 ? <div className="grid h-full place-items-center text-center"><div><ShoppingBag className="mx-auto mb-4 h-10 w-10"/><p className="font-black uppercase">Your bag is hungry.</p><p className="mt-2 text-sm text-black/60">Add a burger and fix that.</p></div></div> : cart.lines.map((line) => (
            <div key={line.slug} className="mb-5 flex gap-4 border-b border-black/10 pb-5">
              <Image src={line.image} alt={line.name} width={92} height={92} className="h-24 w-24 rounded-2xl object-cover" />
              <div className="min-w-0 flex-1"><div className="flex justify-between gap-3"><h3 className="font-black uppercase">{line.name}</h3><button className="text-xs underline" onClick={() => cart.remove(line.slug)}>Remove</button></div><p className="mt-1 text-sm font-semibold">KSh {(line.price * line.quantity).toLocaleString("en-KE")}</p><div className="mt-3 flex w-fit items-center gap-3 rounded-full border border-black/20 px-3 py-1"><button aria-label="Decrease quantity" onClick={() => cart.setQuantity(line.slug, line.quantity - 1)}><Minus size={15}/></button><span className="w-4 text-center text-sm font-bold">{line.quantity}</span><button aria-label="Increase quantity" onClick={() => cart.setQuantity(line.slug, line.quantity + 1)}><Plus size={15}/></button></div></div>
            </div>
          ))}
        </div>
        <div className="border-t border-black/10 p-6"><div className="mb-5 flex items-end justify-between"><span className="text-sm font-bold uppercase">Subtotal</span><span className="text-3xl font-black">KSh {cart.subtotal.toLocaleString("en-KE")}</span></div><Link href="/checkout" onClick={() => cart.setOpen(false)} className="block bg-drip-red px-5 py-4 text-center text-sm font-black uppercase tracking-[.14em] text-white">Checkout</Link><button onClick={() => cart.setOpen(false)} className="mt-3 w-full py-3 text-sm font-bold uppercase">Continue shopping</button></div>
      </motion.aside>
    </>
  )}</AnimatePresence>;
}
