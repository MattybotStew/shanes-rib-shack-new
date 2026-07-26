import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationContent from "@/components/LocationContent";
import LocationHero from "@/components/LocationHero";
import LocationPromoBanner from "@/components/LocationPromoBanner";
import RewardsApp from "@/components/RewardsApp";
import SiteFooter from "@/components/SiteFooter";
import { ALL_LOCATIONS, LOCATIONS_BY_SLUG } from "@/lib/locationData";

type Props = {
  params: Promise<{ slug: string }>;
};

/** Generate static params for all known locations. */
export async function generateStaticParams() {
  return ALL_LOCATIONS.map((loc) => ({ slug: loc.slug }));
}

/** Dynamic metadata per location. */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const location = LOCATIONS_BY_SLUG[slug];
  if (!location) return { title: "Location Not Found" };

  return {
    title: `Shane's Rib Shack ${location.name} | BBQ & Ribs`,
    description: `Shane's Rib Shack in ${location.name} serves slow-smoked ribs, chopped BBQ pork, sandwiches, wings, and classic Southern sides.`,
  };
}

export default async function LocationPage({ params }: Props) {
  const { slug } = await params;
  const location = LOCATIONS_BY_SLUG[slug];
  if (!location) notFound();

  return (
    <main id="main-content" className="flex flex-1 flex-col bg-white">
      <LocationHero location={location} />
      <LocationPromoBanner />
      <LocationContent location={location} />
      <RewardsApp />
      <SiteFooter />
    </main>
  );
}