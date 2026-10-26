import { images } from "@/data/images";

export type MenuItemData = {
  slug: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  featured?: boolean;
  bestseller?: boolean;
  spicy?: boolean;
};

export const categories = ["Smash Burgers", "Chicken", "Loaded Fries", "Sides", "Milkshakes", "Drinks", "Combos"];

export const menuItems: MenuItemData[] = [
  { slug: "smash-burger", name: "Smash Burger", description: "Smashed beef, molten cheese, pickles and Drip sauce on a toasted bun.", price: 1250, category: "Smash Burgers", image: images.smashBurger, featured: true, bestseller: true },
  { slug: "double-smash-burger", name: "Double Smash Burger", description: "Two smashed beef patties, double cheese, pickles, onion and house sauce.", price: 1550, category: "Smash Burgers", image: images.doubleSmash, featured: true, bestseller: true },
  { slug: "big-smokin-burger", name: "The Big Smokin' Burger", description: "Beef, smoked notes, cheese, crispy onion and a bold peppery sauce.", price: 1700, category: "Smash Burgers", image: images.hero, featured: true },
  { slug: "all-in-burger", name: "All In Burger", description: "Beef and chicken stacked with cheese, slaw and Drip sauce.", price: 1650, category: "Smash Burgers", image: images.chicken, featured: true },
  { slug: "chicken-loaded-fries", name: "Chicken Loaded Fries", description: "Crispy fries loaded with seasoned chicken, cheese sauce and house drizzle.", price: 1150, category: "Loaded Fries", image: images.loadedFries, bestseller: true },
  { slug: "crispy-chicken", name: "Crispy Chicken", description: "Crunchy chicken, slaw and spicy mayo in a soft toasted bun.", price: 1350, category: "Chicken", image: images.chicken, spicy: true },
  { slug: "classic-fries", name: "Classic Fries", description: "Golden, hot and heavily snackable.", price: 450, category: "Sides", image: images.loadedFries },
  { slug: "vanilla-shake", name: "Vanilla Shake", description: "Thick vanilla shake, cold and creamy.", price: 750, category: "Milkshakes", image: images.shake },
  { slug: "snickers-shake", name: "Snickers Shake", description: "Chocolate, peanut and caramel indulgence.", price: 1050, category: "Milkshakes", image: images.shake, bestseller: true },
  { slug: "lotus-shake", name: "Lotus Shake", description: "Biscoff-style caramel biscuit shake.", price: 1150, category: "Milkshakes", image: images.shake },
  { slug: "soda", name: "Chilled Soda", description: "A cold classic to reset between bites.", price: 250, category: "Drinks", image: images.lifestyle },
  { slug: "smash-combo", name: "Smash Combo", description: "Smash Burger, fries and a chilled drink.", price: 1750, category: "Combos", image: images.hero, bestseller: true }
];
