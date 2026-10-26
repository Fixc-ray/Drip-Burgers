"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { MapPin, X } from "lucide-react";
import { useRouter } from "next/navigation";
import { locations } from "@/data/locations";
import { useCart } from "@/components/cart/CartProvider";

export function OrderNowButton({ className = "" }: { className?: string }) {
  const [open, setOpen] = useState(false);
  const cart = useCart();
  const router = useRouter();
  function begin() { if (cart.branchSlug) router.push("/menu"); else setOpen(true); }
  return <><button onClick={begin} className={className}>Order now</button><AnimatePresence>{open && <div className="fixed inset-0 z-[70] grid place-items-end bg-black/75 p-0 backdrop-blur-sm md:place-items-center md:p-6"><motion.div initial={{ y: 60, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 60, opacity: 0 }} className="max-h-[88dvh] w-full max-w-3xl overflow-y-auto bg-drip-cream p-6 text-black md:p-9"><div className="flex items-start justify-between gap-5"><div><p className="text-xs font-black uppercase tracking-[.2em] text-drip-red">Select branch</p><h2 className="mt-2 font-[var(--font-display)] text-4xl uppercase leading-none md:text-6xl">Where are you getting your drip?</h2></div><button aria-label="Close location picker" onClick={() => setOpen(false)}><X/></button></div><div className="mt-8 grid gap-2 sm:grid-cols-2">{locations.map((location) => <button key={location.slug} onClick={() => { cart.chooseBranch(location.slug); setOpen(false); router.push("/menu"); }} className="flex items-center justify-between border border-black/15 p-4 text-left transition hover:bg-black hover:text-white"><span><strong className="block uppercase">{location.name}</strong><span className="text-xs opacity-60">{location.address}</span></span><MapPin size={18}/></button>)}</div></motion.div></div>}</AnimatePresence></>;
}

export function BranchOrderButton({ branchSlug, className = "" }: { branchSlug: string; className?: string }) {
  const cart = useCart();
  const router = useRouter();
  return <button onClick={() => { cart.chooseBranch(branchSlug); router.push("/menu"); }} className={className}>Order from this branch</button>;
}
