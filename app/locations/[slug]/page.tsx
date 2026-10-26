import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PublicShell } from "@/components/layout/PublicShell";
import { LocationExperience } from "@/components/locations/LocationExperience";
import { getLocation, locations } from "@/data/locations";

export function generateStaticParams() { return locations.map(({ slug }) => ({ slug })); }

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) return {};
  return { title: `Drip Burgers ${location.name}`, description: `${location.description} Visit Drip Burgers ${location.name} at ${location.address}.` };
}

export default async function LocationPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const location = getLocation(slug);
  if (!location) notFound();
  return <PublicShell><LocationExperience location={location}/></PublicShell>;
}
