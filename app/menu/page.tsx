import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { asset } from "@/lib/asset";
import { menuCategories } from "@/lib/menuPageData";

export const metadata: Metadata = {
  title: "Menu | Shane's Rib Shack | Ribs, BBQ, Wings & Family Meals",
  description:
    "See our full BBQ menu including ribs, wings, sandwiches, plates, sides, kids meals, and family bundles. Order online or plan your next meal.",
};

/** Placeholder image used when an item has no dedicated photo yet. */
const FALLBACK_IMAGE = "/images/hero-catering.jpg";

function MenuCard({
  name,
  price,
  image,
  imageAlt,
}: {
  name: string;
  price: string;
  image?: string;
  imageAlt?: string;
}) {
  const src = image ? asset(image) : asset(FALLBACK_IMAGE);
  return (
    <div className="flex flex-col overflow-hidden rounded-[14px] bg-white shadow-sm">
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-brand-black/5">
        <img
          src={src}
          alt={imageAlt || name}
          className="size-full object-cover"
          loading="lazy"
        />
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col gap-2.5 p-4">
        <h3 className="text-[18px] font-extrabold uppercase leading-tight text-brand-black">
          {name}
        </h3>
        <p className="text-[16px] font-bold text-brand-red">{price}</p>

        {/* CTA buttons */}
        <div className="mt-auto flex gap-3 pt-2">
          <a
            href="#"
            className="flex-1 rounded-[6px] bg-brand-red px-4 py-2.5 text-center text-[13px] font-bold uppercase leading-none text-white transition-colors hover:bg-[#a01b25]"
          >
            More Info
          </a>
          <a
            href="#"
            className="flex-1 rounded-[6px] border border-brand-black px-4 py-2.5 text-center text-[13px] font-bold uppercase leading-none text-brand-black transition-colors hover:bg-brand-black hover:text-white"
          >
            Order Now
          </a>
        </div>
      </div>
    </div>
  );
}

/** Catering promo card injected into the grid. */
function CateringPromoCard() {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-[14px] bg-brand-black shadow-sm">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={asset("/images/home/catering-promo.jpg")}
          alt="Catering spread"
          className="size-full object-cover opacity-80"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <p className="mb-1 text-[13px] font-bold uppercase tracking-widest text-white/80">
              Handcrafted
            </p>
            <p className="text-[28px] font-extrabold uppercase leading-none text-white">
              Catering
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 items-end p-4">
        <a
          href="/catering"
          className="flex w-full items-center justify-center rounded-[6px] border border-white px-4 py-2.5 text-[13px] font-bold uppercase leading-none text-white transition-colors hover:bg-white hover:text-brand-black"
        >
          View Catering Menu
        </a>
      </div>
    </div>
  );
}

function MenuCategorySection({
  title,
  items,
}: {
  title: string;
  items: (typeof menuCategories)[0]["items"];
}) {
  // Insert catering promo card after every 5th item
  const gridItems: React.ReactNode[] = [];
  items.forEach((item, i) => {
    gridItems.push(
      <MenuCard
        key={item.name}
        name={item.name}
        price={item.price}
        image={item.image}
        imageAlt={item.imageAlt}
      />
    );
    if ((i + 1) % 5 === 0 && i + 1 < items.length) {
      gridItems.push(<CateringPromoCard key={`promo-${i}`} />);
    }
  });

  return (
    <section className="mb-16 last:mb-0">
      {/* Category header — cream/tan rounded box, centered */}
      <div className="mb-8 flex justify-center">
        <h2 className="rounded-[14px] bg-brand-tan px-8 py-4 text-[28px] font-extrabold uppercase leading-none text-brand-red lg:text-[36px]">
          {title}
        </h2>
      </div>

      {/* Card grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {gridItems}
      </div>
    </section>
  );
}

export default function MenuPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative flex min-h-[250px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[350px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-[42px] font-extrabold uppercase leading-tight lg:text-[56px]">
            Menu
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Slow-smoked ribs, hand-chopped pork, wings, and Southern sides — made from scratch every day.
          </p>
        </div>
      </section>

      {/* All menu categories */}
      <section className="bg-white px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[1320px]">
          {menuCategories.map((cat) => (
            <MenuCategorySection
              key={cat.title}
              title={cat.title}
              items={cat.items}
            />
          ))}
        </div>
      </section>
    </PageShell>
  );
}