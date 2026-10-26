import type { Metadata } from "next";
import { Archivo_Black, Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/cart/CartProvider";
import { CartDrawer } from "@/components/cart/CartDrawer";

const display = Archivo_Black({ subsets: ["latin"], weight: "400", variable: "--font-display" });
const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"),
  title: { default: "Drip Burgers Kenya | Burger. But Make It Drip.", template: "%s | Drip Burgers Kenya" },
  description: "Smash burgers, loaded fries and thick shakes across Drip Burgers locations in Nairobi and Mombasa.",
  openGraph: { title: "Drip Burgers Kenya", description: "Burger. But make it drip.", type: "website" }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${display.variable} ${inter.variable} font-[var(--font-sans)] antialiased`}><CartProvider>{children}<CartDrawer/></CartProvider></body></html>;
}
