import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { asset } from "@/lib/asset";
import { EDGEWOOD } from "@/lib/locationData";

export const metadata: Metadata = {
  title: "Locations | Shane's Rib Shack",
  description:
    "Find a Shane's Rib Shack near you. Slow-smoked BBQ, ribs, and Southern sides served fresh daily.",
};

const locations = [
  {
    ...EDGEWOOD,
    image: asset("/images/locations/edgewood-storefront.jpg"),
  },
];

export default function LocationsPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative flex min-h-[250px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[350px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Find Your Shack
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Visit us for slow-smoked BBQ, cold drinks, and Southern hospitality.
          </p>
        </div>
      </section>

      {/* Location Cards */}
      <section className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc) => (
              <Link
                key={loc.slug}
                href={`/locations/${loc.slug}/`}
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[16/9] overflow-hidden">
                  <img
                    src={loc.image}
                    alt={`${loc.name} storefront`}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="mb-2 text-xl font-bold uppercase text-brand-black">
                    {loc.name}
                  </h2>
                  <p className="mb-1 text-sm text-brand-gray">{loc.address}</p>
                  <p className="mb-3 text-sm font-semibold text-brand-red">
                    {loc.hours}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-bold uppercase text-brand-red group-hover:underline">
                    View Details
                    <span aria-hidden>→</span>
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {locations.length === 0 && (
            <p className="py-20 text-center text-lg text-brand-gray">
              More locations coming soon. Check back for a Shane's near you.
            </p>
          )}
        </div>
      </section>
    </PageShell>
  );
}