"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ShoppingBag, X } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useCart } from "@/components/cart/CartProvider";

const links = [["/menu","Menu"],["/locations","Locations"],["/deals","Deals"],["/about","About"],["/contact","Contact"]] as const;

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const pathname = usePathname();
  const cart = useCart();
  useEffect(() => { const onScroll = () => setSolid(window.scrollY > 32); onScroll(); addEventListener("scroll", onScroll); return () => removeEventListener("scroll", onScroll); }, []);
  useEffect(() => setOpen(false), [pathname]);
  return <>
    <header className={`fixed inset-x-0 top-0 z-40 transition ${solid || pathname !== "/" ? "bg-drip-black/95 backdrop-blur-xl" : "bg-transparent"}`}>
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="text-xl font-black tracking-tight">DRIP<span className="text-drip-red">.</span> BURGERS</Link>
        <nav className="hidden items-center gap-8 md:flex">{links.map(([href,label]) => <Link key={href} href={href} className="text-xs font-bold uppercase tracking-[.18em] text-white/75 transition hover:text-white">{label}</Link>)}</nav>
        <div className="flex items-center gap-3"><button aria-label="Open cart" onClick={() => cart.setOpen(true)} className="relative grid h-10 w-10 place-items-center rounded-full border border-white/20"><ShoppingBag size={18}/>{cart.count > 0 && <span className="absolute -right-1 -top-1 grid h-5 min-w-5 place-items-center rounded-full bg-drip-red px-1 text-[10px] font-bold">{cart.count}</span>}</button><Link href="/menu" className="hidden bg-drip-red px-5 py-3 text-xs font-black uppercase tracking-[.16em] md:block">Order now</Link><button aria-label="Open menu" className="md:hidden" onClick={() => setOpen(true)}><Menu/></button></div>
      </div>
    </header>
    <AnimatePresence>{open && <motion.div className="fixed inset-0 z-50 bg-drip-red p-6" initial={{ y: "-100%" }} animate={{ y: 0 }} exit={{ y: "-100%" }} transition={{ duration: .35 }}><div className="flex justify-between"><span className="font-black">DRIP BURGERS</span><button aria-label="Close menu" onClick={() => setOpen(false)}><X/></button></div><nav className="mt-20 flex flex-col">{links.map(([href,label], index) => <Link href={href} key={href} className="border-b border-white/25 py-5 text-5xl font-black uppercase tracking-tight">0{index+1}. {label}</Link>)}<Link href="/menu" className="mt-8 bg-black px-6 py-5 text-center font-black uppercase">Order now</Link></nav></motion.div>}</AnimatePresence>
  </>;
}
