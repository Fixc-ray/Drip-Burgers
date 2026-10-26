import Image from "next/image";
import type { Metadata } from "next";
import { PublicShell } from "@/components/layout/PublicShell";
import { images } from "@/data/images";
export const metadata: Metadata = { title: "About", description: "The Drip Burgers Kenya brand story." };
export default function AboutPage() { return <PublicShell><section className="bg-drip-cream px-5 pb-24 pt-36 text-black lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid gap-10 lg:grid-cols-2 lg:items-end"><div><p className="text-xs font-black uppercase tracking-[.3em] text-drip-red">Bold. Urban. Kenyan.</p><h1 className="mt-4 font-[var(--font-display)] text-6xl uppercase leading-[.84] md:text-8xl">More than a burger stop.</h1><p className="mt-7 max-w-xl text-lg leading-8 text-black/65">Drip is built around big flavour, bold presentation and the energy of a modern Kenyan food-and-lifestyle brand. Every branch carries the same visual language while telling its story differently.</p></div><div className="relative aspect-[4/3]"><Image src={images.lifestyle} alt="Drip Burgers lifestyle" fill className="object-cover"/></div></div></div></section></PublicShell>; }
