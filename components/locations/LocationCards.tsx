"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { locations } from "@/data/locations";
import { useCart } from "@/components/cart/CartProvider";
import { useRouter } from "next/navigation";

export function LocationCards({ compact = false }: { compact?: boolean }) {
  const cart = useCart();
  const router = useRouter();
  return <div className={`grid gap-4 ${compact ? "md:grid-cols-2 lg:grid-cols-4" : "md:grid-cols-2 lg:grid-cols-3"}`}>{locations.map((location, index) => <motion.article key={location.slug} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .04 }} className={`group relative overflow-hidden border border-white/10 ${index === 0 && !compact ? "lg:col-span-2" : ""}`}><div className={`${compact ? "aspect-[4/3]" : index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"} relative`}><Image src={location.image} alt={`Drip Burgers ${location.name}`} fill sizes="(max-width:768px) 100vw, 50vw" className="object-cover transition duration-700 group-hover:scale-105"/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-5 md:p-7"><div className="flex items-end justify-between gap-4"><div><div className="mb-2 flex items-center gap-2 text-xs font-bold uppercase tracking-[.16em] text-white/65"><MapPin size={14}/>{location.city}</div><h3 className="font-[var(--font-display)] text-3xl uppercase md:text-4xl">{location.name}</h3><p className="mt-2 max-w-lg text-sm text-white/60">{location.address}</p></div><Link aria-label={`Explore ${location.name}`} href={`/locations/${location.slug}`} className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-drip-red"><ArrowUpRight/></Link></div><button onClick={() => { cart.chooseBranch(location.slug); router.push("/menu"); }} className="mt-4 text-xs font-black uppercase tracking-[.13em] underline decoration-drip-red decoration-2 underline-offset-4">Order from here</button></div></div></motion.article>)}</div>;
}
