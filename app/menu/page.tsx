import type { Metadata } from "next";
import { PublicShell } from "@/components/layout/PublicShell";
import { MenuExperience } from "@/components/menu/MenuExperience";
export const metadata: Metadata = { title: "Menu", description: "Explore Drip Burgers smash burgers, chicken, loaded fries, shakes, drinks and combos." };
export default function MenuPage() { return <PublicShell><section className="bg-drip-black px-5 pb-24 pt-36 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.3em] text-drip-red">Pick your poison</p><h1 className="mt-3 font-[var(--font-display)] text-6xl uppercase leading-[.85] md:text-9xl">The menu.</h1><p className="mb-12 mt-6 max-w-2xl text-white/55">Big flavour, crisp edges, loaded sides and shakes thick enough to require commitment.</p><MenuExperience/></div></section></PublicShell>; }
