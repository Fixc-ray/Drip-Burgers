"use client";

import Image from "next/image";
import { Plus, Flame } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/components/cart/CartProvider";
import type { MenuItemData } from "@/data/menu";

export function MenuCard({ item }: { item: MenuItemData }) {
  const cart = useCart();
  return <motion.article whileHover={{ y: -6 }} className="group overflow-hidden border border-white/10 bg-drip-charcoal">
    <div className="relative aspect-[4/3] overflow-hidden"><Image src={item.image} alt={item.name} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition duration-500 group-hover:scale-105"/><div className="absolute left-4 top-4 flex gap-2">{item.bestseller && <span className="bg-drip-red px-3 py-1 text-[10px] font-black uppercase tracking-wider">Bestseller</span>}{item.spicy && <span className="flex items-center gap-1 bg-black/80 px-3 py-1 text-[10px] font-black uppercase"><Flame size={12}/>Spicy</span>}</div></div>
    <div className="p-5"><p className="text-[10px] font-bold uppercase tracking-[.2em] text-drip-red">{item.category}</p><div className="mt-2 flex items-start justify-between gap-4"><h3 className="font-[var(--font-display)] text-2xl uppercase leading-none">{item.name}</h3><span className="whitespace-nowrap font-black">KSh {item.price.toLocaleString("en-KE")}</span></div><p className="mt-3 min-h-10 text-sm leading-6 text-white/55">{item.description}</p><button onClick={() => cart.add(item)} className="mt-5 flex w-full items-center justify-between bg-drip-cream px-4 py-3 text-xs font-black uppercase tracking-[.12em] text-black transition hover:bg-white"><span>Add to bag</span><Plus size={17}/></button></div>
  </motion.article>;
}
