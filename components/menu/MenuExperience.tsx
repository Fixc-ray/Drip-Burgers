"use client";

import { useState } from "react";
import { categories, menuItems } from "@/data/menu";
import { MenuCard } from "@/components/menu/MenuCard";

export function MenuExperience() {
  const [category, setCategory] = useState("All");
  const shown = category === "All" ? menuItems : menuItems.filter((item) => item.category === category);
  return <div><div className="no-scrollbar mb-8 flex gap-2 overflow-x-auto pb-2">{["All", ...categories].map((item) => <button key={item} onClick={() => setCategory(item)} className={`whitespace-nowrap border px-5 py-3 text-xs font-black uppercase tracking-[.1em] transition ${category === item ? "border-drip-red bg-drip-red" : "border-white/15 bg-white/[.03] hover:border-white/40"}`}>{item}</button>)}</div><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{shown.map((item) => <MenuCard key={item.slug} item={item}/>)}</div></div>;
}
