import type { Metadata } from "next";
import LocationsFinder from "@/components/LocationsFinder";
import PageShell from "@/components/PageShell";
import { LOCATION_LIST_ITEMS } from "@/lib/locationData";

export const metadata: Metadata = {
  title: "Locations | Shane's Rib Shack",
  description:
    "Find a Shane's Rib Shack near you. Slow-smoked BBQ, ribs, and Southern sides served fresh daily.",
};

export default function LocationsPage() {
  return (
    <PageShell>
      <LocationsFinder locations={LOCATION_LIST_ITEMS} />
    </PageShell>
  );
}
