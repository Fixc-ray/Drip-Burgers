import type { MetadataRoute } from "next";
import { locations } from "@/data/locations";
export default function sitemap(): MetadataRoute.Sitemap { const base=process.env.NEXT_PUBLIC_APP_URL||"http://localhost:3000"; const staticRoutes=["","/menu","/locations","/deals","/about","/contact"]; return [...staticRoutes.map(route=>({url:`${base}${route}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:route===""?1:.8})),...locations.map(location=>({url:`${base}/locations/${location.slug}`,lastModified:new Date(),changeFrequency:"weekly" as const,priority:.8}))]; }
