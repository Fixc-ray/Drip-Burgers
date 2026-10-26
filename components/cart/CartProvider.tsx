"use client";

import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { MenuItemData } from "@/data/menu";

type CartLine = MenuItemData & { quantity: number };
type CartContextValue = {
  lines: CartLine[];
  branchSlug: string | null;
  isOpen: boolean;
  count: number;
  subtotal: number;
  add: (item: MenuItemData) => void;
  remove: (slug: string) => void;
  setQuantity: (slug: string, quantity: number) => void;
  chooseBranch: (slug: string) => void;
  setOpen: (open: boolean) => void;
  clear: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);
  const [branchSlug, setBranchSlug] = useState<string | null>(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem("drip-cart") || "null");
      if (saved?.lines) setLines(saved.lines);
      if (saved?.branchSlug) setBranchSlug(saved.branchSlug);
    } catch {}
  }, []);

  useEffect(() => {
    localStorage.setItem("drip-cart", JSON.stringify({ lines, branchSlug }));
  }, [lines, branchSlug]);

  const value = useMemo<CartContextValue>(() => ({
    lines,
    branchSlug,
    isOpen,
    count: lines.reduce((sum, line) => sum + line.quantity, 0),
    subtotal: lines.reduce((sum, line) => sum + line.price * line.quantity, 0),
    add: (item) => {
      setLines((current) => current.some((line) => line.slug === item.slug)
        ? current.map((line) => line.slug === item.slug ? { ...line, quantity: line.quantity + 1 } : line)
        : [...current, { ...item, quantity: 1 }]);
      setOpen(true);
    },
    remove: (slug) => setLines((current) => current.filter((line) => line.slug !== slug)),
    setQuantity: (slug, quantity) => setLines((current) => quantity <= 0 ? current.filter((line) => line.slug !== slug) : current.map((line) => line.slug === slug ? { ...line, quantity } : line)),
    chooseBranch: setBranchSlug,
    setOpen,
    clear: () => setLines([])
  }), [lines, branchSlug, isOpen]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
}
