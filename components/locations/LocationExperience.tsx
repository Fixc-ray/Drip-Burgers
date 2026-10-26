import Image from "next/image";
import Link from "next/link";
import { Clock3, MapPin, Phone, ArrowUpRight } from "lucide-react";
import type { Location } from "@/data/locations";
import { menuItems } from "@/data/menu";
import { MenuCard } from "@/components/menu/MenuCard";
import { Reveal } from "@/components/ui/Reveal";
import { BranchOrderButton } from "@/components/locations/LocationPicker";

const variantMap = {
  dynamic: { hero: "lg:grid-cols-[1.05fr_.95fr]", image: "lg:-rotate-2 lg:scale-105", align: "items-center", menu: "lg:grid-cols-4" },
  editorial: { hero: "lg:grid-cols-[.8fr_1.2fr]", image: "lg:translate-y-8", align: "items-start", menu: "lg:grid-cols-3" },
  luxury: { hero: "lg:grid-cols-2", image: "lg:rounded-[2rem]", align: "items-center", menu: "lg:grid-cols-2" },
  cinematic: { hero: "lg:grid-cols-[1.2fr_.8fr]", image: "lg:scale-110", align: "items-end", menu: "lg:grid-cols-3" },
  architectural: { hero: "lg:grid-cols-[.95fr_1.05fr]", image: "", align: "items-stretch", menu: "lg:grid-cols-4" },
  playful: { hero: "lg:grid-cols-[.9fr_1.1fr]", image: "lg:rotate-2", align: "items-center", menu: "lg:grid-cols-3" },
  immersive: { hero: "lg:grid-cols-[1.3fr_.7fr]", image: "lg:-translate-x-4", align: "items-end", menu: "lg:grid-cols-2" }
} as const;

export function LocationExperience({ location }: { location: Location }) {
  const variant = variantMap[location.designVariant];
  const featured = menuItems.slice(location.designVariant === "luxury" ? 1 : 0, location.designVariant === "luxury" ? 5 : 4);
  return <>
    <section className="overflow-hidden bg-drip-black px-5 pb-16 pt-32 lg:px-8 lg:pb-24">
      <div className={`mx-auto grid min-h-[72vh] max-w-7xl gap-10 ${variant.hero} ${variant.align}`}>
        <div className={location.designVariant === "editorial" ? "lg:pt-16" : ""}><p className="text-xs font-black uppercase tracking-[.3em] text-drip-red">Drip Burgers · {location.city}</p><h1 className={`mt-4 font-[var(--font-display)] uppercase leading-[.82] ${location.designVariant === "architectural" ? "text-6xl md:text-8xl" : "text-6xl md:text-9xl"}`}>{location.headline}</h1><p className="mt-6 max-w-xl text-base leading-7 text-white/60">{location.description}</p><div className="mt-8 flex flex-wrap gap-3"><BranchOrderButton branchSlug={location.slug} className="bg-drip-red px-6 py-4 text-xs font-black uppercase tracking-[.16em]"/><a href={`tel:${location.phone.replace(/\s/g, "")}`} className="border border-white/20 px-6 py-4 text-xs font-black uppercase tracking-[.16em]">Call branch</a></div></div>
        <div className={`relative min-h-[430px] overflow-hidden ${variant.image}`}><Image src={location.image} alt={`Drip Burgers ${location.name}`} fill priority sizes="(max-width:1024px) 100vw, 55vw" className="object-cover"/><div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"/><span className="absolute bottom-5 right-5 bg-drip-red px-4 py-2 text-xs font-black uppercase tracking-[.15em]">{location.designVariant}</span></div>
      </div>
    </section>

    <section className="border-y border-white/10 bg-drip-charcoal px-5 py-8 lg:px-8"><div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3"><div className="flex gap-3"><MapPin className="mt-1 shrink-0 text-drip-red" size={18}/><div><p className="text-[10px] font-black uppercase tracking-[.2em] text-white/40">Address</p><p className="mt-1 font-semibold">{location.address}</p></div></div><div className="flex gap-3"><Phone className="mt-1 shrink-0 text-drip-red" size={18}/><div><p className="text-[10px] font-black uppercase tracking-[.2em] text-white/40">Phone</p><p className="mt-1 font-semibold">{location.phone}</p></div></div><div className="flex gap-3"><Clock3 className="mt-1 shrink-0 text-drip-red" size={18}/><div><p className="text-[10px] font-black uppercase tracking-[.2em] text-white/40">Hours</p><p className="mt-1 font-semibold">{location.openingHours}</p></div></div></div></section>

    <section className={`px-5 py-24 lg:px-8 ${location.designVariant === "luxury" ? "bg-drip-cream text-black" : "bg-drip-black"}`}><div className="mx-auto max-w-7xl"><Reveal><div className="flex items-end justify-between gap-5"><div><p className="text-xs font-black uppercase tracking-[.28em] text-drip-red">Featured here</p><h2 className="mt-3 font-[var(--font-display)] text-5xl uppercase md:text-7xl">The branch edit.</h2></div><Link href="/menu" className="hidden items-center gap-2 text-xs font-black uppercase tracking-[.14em] md:flex">Full menu <ArrowUpRight size={16}/></Link></div></Reveal><div className={`mt-10 grid gap-5 sm:grid-cols-2 ${variant.menu}`}>{featured.map((item) => <MenuCard key={item.slug} item={item}/>)}</div></div></section>

    <section className="bg-drip-red px-5 py-20 lg:px-8"><div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.8fr_1.2fr]"><div><p className="text-xs font-black uppercase tracking-[.28em] text-black/55">Pull up</p><h2 className="mt-3 font-[var(--font-display)] text-5xl uppercase leading-[.9] md:text-7xl">Meet us at {location.name}.</h2></div><div className="min-h-72 overflow-hidden border border-black/15 bg-black"><iframe title={`Map for Drip Burgers ${location.name}`} loading="lazy" className="h-[360px] w-full border-0" referrerPolicy="no-referrer-when-downgrade" src={`https://www.google.com/maps?q=${encodeURIComponent(`${location.address}, ${location.city}, Kenya`)}&output=embed`} /></div></div></section>
  </>;
}
