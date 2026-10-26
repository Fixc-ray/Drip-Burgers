import { Suspense } from "react";
import Link from "next/link";
import { LoginForm } from "@/components/forms/LoginForm";
export default function LoginPage(){return <main className="grid min-h-screen place-items-center bg-drip-black px-5"><div className="w-full max-w-md"><Link href="/" className="text-sm font-black">DRIP<span className="text-drip-red">.</span> BURGERS</Link><div className="mt-8 border border-white/10 bg-drip-charcoal p-7"><p className="text-xs font-black uppercase tracking-[.2em] text-drip-red">Team access</p><h1 className="mt-2 font-[var(--font-display)] text-4xl uppercase">Dashboard login</h1><p className="mt-3 text-sm text-white/50">Seeded local admin credentials are prefilled for development.</p><Suspense><LoginForm/></Suspense></div></div></main>}
