import type { Metadata } from "next";
import LocationContent from "@/components/LocationContent";
import LocationHero from "@/components/LocationHero";
import LocationPromoBanner from "@/components/LocationPromoBanner";
import RewardsApp from "@/components/RewardsApp";
import SiteFooter from "@/components/SiteFooter";
import { EDGEWOOD } from "@/lib/locationData";

export const metadata: Metadata = {
  title: "Shane's Rib Shack Edgewood | BBQ & Ribs in Atlanta, GA",
  description:
    "Shane's Rib Shack in Edgewood, Atlanta serves slow-smoked ribs, chopped BBQ pork, sandwiches, wings, and classic Southern sides.",
};

/** Desktop location detail — matched to live Edgewood production. */
export default function EdgewoodLocationPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col bg-white">
      <LocationHero location={EDGEWOOD} />
      <LocationPromoBanner />
      <LocationContent location={EDGEWOOD} />
      <RewardsApp />
      <SiteFooter />
    </main>
  );
}
