import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { PublicShell } from "@/components/layout/PublicShell";
import { LocationCards } from "@/components/locations/LocationCards";
import { OrderNowButton } from "@/components/locations/LocationPicker";
import { MenuCard } from "@/components/menu/MenuCard";
import { Reveal } from "@/components/ui/Reveal";
import { images } from "@/data/images";
import { menuItems } from "@/data/menu";
import { promotions } from "@/data/promotions";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Drip Burgers Kenya",
    servesCuisine: ["Burgers", "Fast Food"],
    priceRange: "KSh 250–1,750",
    slogan: "Burger. But make it drip.",
    areaServed: ["Nairobi", "Mombasa"]
  };
  const classics = menuItems.filter((item) => item.featured).slice(0, 4);
  return <PublicShell>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    <section className="relative min-h-[100svh] overflow-hidden bg-drip-black">
      <Image src={images.hero} alt="Drip Burgers smash burger" fill priority sizes="100vw" className="object-cover object-center" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/55 to-black/10" />
      <div className="absolute inset-0 grid-noise opacity-35" />
      <div className="relative mx-auto flex min-h-[100svh] max-w-7xl items-end px-5 pb-16 pt-32 lg:px-8 lg:pb-20">
        <div className="max-w-5xl"><p className="mb-5 text-xs font-black uppercase tracking-[.35em] text-drip-red">Nairobi · Mombasa · Kenya</p><h1 className="font-[var(--font-display)] text-[clamp(4.1rem,12vw,10.5rem)] uppercase leading-[.77] tracking-[-.055em]">Burger.<br/><span className="text-outline">But make it</span><br/>Drip.</h1><p className="mt-8 max-w-xl text-base leading-7 text-white/70 md:text-lg">Smash burgers. Loaded fries. Thick shakes. Zero boring bites.</p><div className="mt-8 flex flex-wrap gap-3"><OrderNowButton className="bg-drip-red px-7 py-4 text-xs font-black uppercase tracking-[.18em]"/><Link href="/menu" className="border border-white/30 px-7 py-4 text-xs font-black uppercase tracking-[.18em] backdrop-blur-sm">Explore menu</Link></div></div>
        <a href="#find-your-drip" aria-label="Scroll to locations" className="absolute bottom-8 right-6 hidden h-14 w-14 place-items-center rounded-full border border-white/25 md:grid"><ArrowDown/></a>
      </div>
    </section>

    <section id="find-your-drip" className="bg-drip-black px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><Reveal><div className="mb-10 flex items-end justify-between gap-6"><div><p className="text-xs font-black uppercase tracking-[.28em] text-drip-red">Seven spots. One Drip.</p><h2 className="mt-3 font-[var(--font-display)] text-5xl uppercase leading-none md:text-7xl">Find your drip.</h2></div><Link href="/locations" className="hidden items-center gap-2 text-xs font-black uppercase tracking-[.15em] md:flex">All locations <ArrowUpRight size={17}/></Link></div></Reveal><LocationCards/></div></section>

    <section className="bg-drip-cream px-5 py-24 text-black lg:px-8"><div className="mx-auto max-w-7xl"><Reveal><p className="text-xs font-black uppercase tracking-[.28em] text-drip-red">The Drip classics</p><h2 className="mt-3 max-w-4xl font-[var(--font-display)] text-5xl uppercase leading-[.9] md:text-8xl">Built to make your lunch plans irrelevant.</h2></Reveal><div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{classics.map((item, index) => <div key={item.slug} className={index % 2 ? "lg:translate-y-10" : ""}><MenuCard item={item}/></div>)}</div><div className="mt-20"><Link href="/menu" className="inline-flex bg-black px-7 py-4 text-xs font-black uppercase tracking-[.16em] text-white">See the full menu</Link></div></div></section>

    <section className="overflow-hidden bg-drip-red"><div className="grid min-h-[72vh] lg:grid-cols-2"><div className="relative min-h-[55vh]"><Image src={images.loadedFries} alt="Chicken loaded fries" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover"/></div><div className="flex items-center p-8 md:p-14 lg:p-16"><Reveal><p className="text-xs font-black uppercase tracking-[.25em] text-black/65">Chicken loaded fries · KSh 1,150</p><h2 className="mt-4 font-[var(--font-display)] text-6xl uppercase leading-[.83] md:text-8xl">Fries don’t have to be boring.</h2><p className="mt-6 max-w-lg text-base leading-7 text-white/75">Golden fries, seasoned chicken, cheese sauce and the kind of drizzle that makes sharing feel like a bad idea.</p><Link href="/menu" className="mt-8 inline-block bg-black px-7 py-4 text-xs font-black uppercase tracking-[.16em]">Get the fries</Link></Reveal></div></div></section>

    <section className="bg-drip-charcoal px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><div className="grid items-center gap-10 lg:grid-cols-[.9fr_1.1fr]"><Reveal><p className="text-xs font-black uppercase tracking-[.28em] text-drip-red">Thick. Cold. Drippy.</p><h2 className="mt-4 font-[var(--font-display)] text-6xl uppercase leading-[.85] md:text-8xl">Shake things up.</h2><p className="mt-6 max-w-md leading-7 text-white/60">Vanilla. Snickers. Lotus. Built thick, served cold, and absolutely not an afterthought.</p></Reveal><div className="relative aspect-[4/3] overflow-hidden"><Image src={images.shake} alt="Drip Burgers milkshake" fill sizes="(max-width:1024px) 100vw, 50vw" className="object-cover"/><div className="absolute bottom-5 left-5 bg-drip-cream px-4 py-3 font-black uppercase text-black">KSh 750–1,150</div></div></div></div></section>

    <section className="bg-drip-black px-5 py-24 lg:px-8"><div className="mx-auto max-w-7xl"><Reveal><p className="text-xs font-black uppercase tracking-[.28em] text-drip-red">What’s dripping?</p><h2 className="mt-3 font-[var(--font-display)] text-5xl uppercase md:text-7xl">Drops, deals & reasons to pull up.</h2></Reveal><div className="mt-10 grid gap-4 md:grid-cols-3">{promotions.map((deal) => <Link href="/deals" key={deal.id} className="group relative aspect-[4/5] overflow-hidden"><Image src={deal.image} alt={deal.title} fill className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width:768px) 100vw, 33vw"/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent"/><div className="absolute inset-x-0 bottom-0 p-6"><span className="text-[10px] font-black uppercase tracking-[.2em] text-drip-red">{deal.label}</span><h3 className="mt-2 font-[var(--font-display)] text-3xl uppercase">{deal.title}</h3><p className="mt-2 text-sm text-white/65">{deal.description}</p></div></Link>)}</div></div></section>

    <section className="bg-drip-cream px-5 py-20 text-black lg:px-8"><div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-end"><div><p className="text-xs font-black uppercase tracking-[.28em] text-drip-red">Seen the drip?</p><h2 className="mt-3 font-[var(--font-display)] text-5xl uppercase leading-none md:text-7xl">Your feed is hungry too.</h2></div><a href="#" className="inline-flex items-center gap-2 bg-black px-7 py-4 text-xs font-black uppercase tracking-[.16em] text-white">Follow the drip <ArrowUpRight size={16}/></a></div></section>
  </PublicShell>;
}
