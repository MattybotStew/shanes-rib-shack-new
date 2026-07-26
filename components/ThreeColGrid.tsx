import ThreeColCard from "@/components/ThreeColCard";

export type ThreeColItem = {
  title: string;
  image: string;
  imageAlt: string;
  href: string;
  ctaLabel?: string;
};

type ThreeColGridProps = {
  items: ThreeColItem[];
  heading?: string;
};

/**
 * Reusable 3-column responsive card grid — Figma 2xl-3col (`6478:16369`).
 * 6 breakpoints: 3-col (2xl/xl/lg) → 2-col (md) → 1-col (sm/xsm).
 */
export default function ThreeColGrid({ items, heading }: ThreeColGridProps) {
  if (items.length === 0) return null;

  return (
    <section className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        {heading && (
          <h2 className="mb-10 text-center text-3xl font-extrabold uppercase text-brand-black lg:text-4xl">
            {heading}
          </h2>
        )}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <ThreeColCard key={`${item.title}-${i}`} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
