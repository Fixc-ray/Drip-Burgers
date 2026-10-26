import type { Metadata } from "next";
import { PublicShell } from "@/components/layout/PublicShell";
import { LocationCards } from "@/components/locations/LocationCards";
export const metadata: Metadata = { title: "Locations", description: "Find Drip Burgers in Nairobi and Mombasa." };
export default function LocationsPage() { return <PublicShell><section className="min-h-screen bg-drip-black px-5 pb-24 pt-36 lg:px-8"><div className="mx-auto max-w-7xl"><p className="text-xs font-black uppercase tracking-[.3em] text-drip-red">One brand. Seven experiences.</p><h1 className="mt-3 max-w-5xl font-[var(--font-display)] text-6xl uppercase leading-[.83] md:text-9xl">Find your nearest drip.</h1><p className="mb-12 mt-6 max-w-xl text-white/55">Choose a branch, see its personality, then order from the location that makes sense for you.</p><LocationCards/></div></section></PublicShell>; }
