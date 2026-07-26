"use client";

import { useMemo, useState } from "react";
import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";
import type { LocationListItem } from "@/lib/locationData";

const RADIUS_OPTIONS = [
  { value: "", label: "Select a Radius" },
  { value: "5", label: "5 miles" },
  { value: "10", label: "10 miles" },
  { value: "25", label: "25 miles" },
  { value: "50", label: "50 miles" },
] as const;

const compactCta =
  "!px-3 !py-3 text-[12px] leading-normal sm:!px-3 sm:!py-3 sm:text-[12px]";

type Props = {
  locations: LocationListItem[];
};

function matchesQuery(item: LocationListItem, query: string) {
  const q = query.trim().toLowerCase();
  if (!q) return true;
  return (
    item.title.toLowerCase().includes(q) ||
    item.address.toLowerCase().includes(q) ||
    item.id.toLowerCase().includes(q)
  );
}

function LocationCard({ item }: { item: LocationListItem }) {
  const detailsHref = item.slug
    ? `/locations/${item.slug}/`
    : item.mapsUrl;

  return (
    <article className="flex w-full flex-col gap-3 opacity-[0.83]">
      <div className="flex flex-col gap-3.5 lg:flex-row lg:items-start lg:gap-3.5">
        <div className="flex min-w-0 flex-1 flex-col gap-3.5">
          <h3 className="text-lg font-bold uppercase leading-[21px] text-brand-red">
            {item.title}
          </h3>
          <p className="text-base font-semibold leading-[1.3] text-brand-black">
            {item.address}
          </p>
          <div className="flex w-full max-w-[310px] gap-3 lg:max-w-none">
            <Cta
              href={item.mapsUrl}
              variant="outline"
              className={`${compactCta} min-w-0 flex-1 lg:w-[107px] lg:flex-none`}
            >
              Directions
            </Cta>
            <Cta
              href={item.cateringUrl}
              variant="black"
              className={`${compactCta} min-w-0 flex-1 border-2 border-brand-black lg:flex-none`}
            >
              Order Catering
            </Cta>
          </div>
        </div>
        <div className="flex w-full items-center lg:w-auto lg:shrink-0">
          <Cta
            href={detailsHref}
            variant="red"
            className="w-full !px-4 !py-4 text-base leading-4 sm:!px-4 sm:!py-4 sm:text-base lg:w-auto"
          >
            View Details
          </Cta>
        </div>
      </div>
    </article>
  );
}

function SearchFilters({
  query,
  radius,
  onQueryChange,
  onRadiusChange,
  onSearch,
}: {
  query: string;
  radius: string;
  onQueryChange: (value: string) => void;
  onRadiusChange: (value: string) => void;
  onSearch: () => void;
}) {
  return (
    <form
      className="flex w-full flex-col gap-4 lg:flex-row lg:items-center lg:gap-10"
      onSubmit={(e) => {
        e.preventDefault();
        onSearch();
      }}
    >
      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <label
          htmlFor="location-query"
          className="shrink-0 text-base font-semibold leading-[1.3] text-[#0d0d0d]"
        >
          Location
        </label>
        <input
          id="location-query"
          type="search"
          name="location"
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          placeholder="Enter City & State OR Zip Code"
          autoComplete="postal-code"
          className="h-11 min-w-0 flex-1 rounded-lg border border-[#d6d6d6] bg-brand-tan px-3 py-3.5 text-[13px] font-semibold leading-[1.5] text-brand-black placeholder:text-[#808080] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
        />
      </div>

      <p
        className="hidden shrink-0 text-base font-semibold leading-[1.3] text-[#0d0d0d] lg:block"
        aria-hidden
      >
        OR
      </p>

      <div className="flex min-w-0 flex-1 flex-col gap-2 sm:flex-row sm:items-center sm:gap-3">
        <label
          htmlFor="location-radius"
          className="shrink-0 text-base font-semibold leading-[1.3] text-[#0d0d0d]"
        >
          Select a Radius
        </label>
        <div className="relative min-w-0 flex-1">
          <select
            id="location-radius"
            name="radius"
            value={radius}
            onChange={(e) => onRadiusChange(e.target.value)}
            className="h-11 w-full appearance-none rounded-lg border border-[#d6d6d6] bg-brand-tan px-3 py-3.5 pr-10 text-[13px] font-semibold leading-[1.5] text-[#808080] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
          >
            {RADIUS_OPTIONS.map((opt) => (
              <option key={opt.value || "none"} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/locations/chevron-down.svg")}
            alt=""
            width={10}
            height={6}
            className="pointer-events-none absolute right-3 top-1/2 h-[6px] w-[10px] -translate-y-1/2"
            aria-hidden
          />
        </div>
      </div>

      <button
        type="submit"
        className="inline-flex shrink-0 items-center justify-center rounded-[5px] bg-brand-red p-4 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
      >
        Search
      </button>
    </form>
  );
}

/**
 * Locations finder — Figma DK-Location (`6250:6377`) / MB-Location (`6250:6567`).
 * Search filters client-side by city/state/zip text. Radius is UI-only (no geocoder).
 */
export default function LocationsFinder({ locations }: Props) {
  const [queryDraft, setQueryDraft] = useState("");
  const [radiusDraft, setRadiusDraft] = useState("");
  const [activeQuery, setActiveQuery] = useState("");
  const [filtersOpen, setFiltersOpen] = useState(false);

  const filtered = useMemo(
    () => locations.filter((item) => matchesQuery(item, activeQuery)),
    [locations, activeQuery],
  );

  function runSearch() {
    setActiveQuery(queryDraft);
  }

  return (
    <section
      className="flex w-full flex-col items-center gap-5 px-5 pb-10 pt-5 lg:gap-5 lg:px-5 lg:pb-10 lg:pt-[60px]"
      aria-labelledby="find-a-shack-heading"
    >
      {/* Mobile: collapsible filters (MB-Location) */}
      <div className="w-full max-w-[1180px] lg:hidden">
        <button
          type="button"
          onClick={() => setFiltersOpen((open) => !open)}
          aria-expanded={filtersOpen}
          className="flex h-[53px] w-full items-center justify-between rounded-[12px] border border-[rgba(31,33,31,0.2)] bg-white px-5 text-left text-base font-semibold leading-[1.3] text-[#0d0d0d]"
        >
          <span>Show Filters</span>
          <span className="text-xl font-normal leading-none" aria-hidden>
            {filtersOpen ? "−" : "+"}
          </span>
        </button>
        {filtersOpen ? (
          <div className="mt-4 rounded-[12px] border border-[rgba(31,33,31,0.2)] bg-white p-5">
            <SearchFilters
              query={queryDraft}
              radius={radiusDraft}
              onQueryChange={setQueryDraft}
              onRadiusChange={setRadiusDraft}
              onSearch={runSearch}
            />
          </div>
        ) : null}
      </div>

      {/* Desktop: always-visible filter bar */}
      <div className="hidden w-full max-w-[1180px] lg:block">
        <div className="rounded-[12px] border border-[rgba(31,33,31,0.2)] bg-white p-[30px]">
          <SearchFilters
            query={queryDraft}
            radius={radiusDraft}
            onQueryChange={setQueryDraft}
            onRadiusChange={setRadiusDraft}
            onSearch={runSearch}
          />
        </div>
      </div>

      <div className="flex w-full max-w-[1180px] flex-col gap-5 lg:flex-row lg:items-stretch">
        <div className="flex min-w-0 flex-1 flex-col gap-5 rounded-[12px] border border-black/10 bg-white/80 p-5">
          <h1
            id="find-a-shack-heading"
            className="text-[32px] font-extrabold uppercase leading-none text-brand-black"
          >
            Find a Shack
          </h1>

          {filtered.length === 0 ? (
            <p className="border-t border-[#d6d6d6] pt-5 text-base font-semibold leading-[1.3] text-brand-gray">
              No shacks match that search. Try a city, state, or zip code.
            </p>
          ) : (
            <ul className="flex flex-col">
              {filtered.map((item) => (
                <li
                  key={item.id}
                  className="border-t border-[#d6d6d6] py-5 first:border-t-0 first:pt-0 last:pb-0"
                >
                  <LocationCard item={item} />
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Map — desktop only (DK-Location); static Figma export until live map */}
        <div className="relative hidden h-[789px] w-full max-w-[580px] shrink-0 overflow-hidden rounded-[12px] lg:block">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/locations/map-atlanta.jpg")}
            alt="Map of Shane's Rib Shack locations in the Atlanta area"
            className="absolute inset-0 size-full object-cover object-left"
          />
        </div>
      </div>
    </section>
  );
}
