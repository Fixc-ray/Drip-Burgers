import { images } from "@/data/images";

export type DesignVariant = "dynamic" | "editorial" | "luxury" | "cinematic" | "architectural" | "playful" | "immersive";

export type Location = {
  slug: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  designVariant: DesignVariant;
  headline: string;
  description: string;
  image: string;
  openingHours: string;
  coordinates?: { lat: number; lng: number };
};

export const locations: Location[] = [
  { slug: "mombasa-road", name: "Mombasa Road", city: "Nairobi", address: "Thermoteq Centre", phone: "0750 000 100", designVariant: "dynamic", headline: "BIG FLAVOUR. NO BRAKES.", description: "Fast, urban and high-energy — the Drip stop built for the city in motion.", image: images.locations["mombasa-road"], openingHours: "Daily · 10:00–22:00" },
  { slug: "kilimani", name: "Kilimani", city: "Nairobi", address: "B Arcade Mall / Westfield Hub", phone: "0751 000 020", designVariant: "editorial", headline: "KEEP IT DRIPPY.", description: "A fashion-forward edit of burgers, shakes and late lunch energy.", image: images.locations.kilimani, openingHours: "Daily · 10:00–23:00" },
  { slug: "lavington", name: "Lavington", city: "Nairobi", address: "Lavington Corner Mall", phone: "0752 000 100", designVariant: "luxury", headline: "YOUR BURGER. ELEVATED.", description: "A polished Drip experience with generous space and cinematic food moments.", image: images.locations.lavington, openingHours: "Daily · 10:00–22:30" },
  { slug: "karen", name: "Karen", city: "Nairobi", address: "Hass Petrol Station", phone: "0750 000 200", designVariant: "cinematic", headline: "GOOD FOOD. GOOD MOOD.", description: "Relaxed, lifestyle-led and made for a slow afternoon that turns into dinner.", image: images.locations.karen, openingHours: "Daily · 10:00–22:00" },
  { slug: "parklands", name: "Parklands", city: "Nairobi", address: "Parklands, Nairobi · update in admin", phone: "+254 700 000 000", designVariant: "architectural", headline: "PARKLANDS. MAKE IT DRIP.", description: "Structured, bold and product-first, with a sharper visual rhythm.", image: images.locations.parklands, openingHours: "Daily · 10:00–22:00" },
  { slug: "kiambu-road", name: "Kiambu Road", city: "Nairobi", address: "Kiambu Road · update in admin", phone: "+254 700 000 001", designVariant: "playful", headline: "KIAMBU ROAD IS DRIPPING.", description: "Playful layouts, social energy and big comfort-food attitude.", image: images.locations["kiambu-road"], openingHours: "Daily · 10:00–22:00" },
  { slug: "nyali", name: "Nyali", city: "Mombasa", address: "Nyali, Mombasa · update in admin", phone: "+254 700 000 002", designVariant: "immersive", headline: "THE COAST GOT DRIP.", description: "Coastal energy through photography and motion — still unmistakably Drip.", image: images.locations.nyali, openingHours: "Daily · 10:00–23:00" }
];

export function getLocation(slug: string) {
  return locations.find((location) => location.slug === slug);
}
