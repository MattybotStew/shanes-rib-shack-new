import type { Metadata } from "next";
import Link from "next/link";
import MenuCategoryCard from "@/components/MenuCategoryCard";
import PageShell from "@/components/PageShell";
import {
  MENU_PROMO_AFTER_INDEX,
  menuCategoryCards,
} from "@/lib/menuPageData";

export const metadata: Metadata = {
  title: "Menu | Shane's Rib Shack | Ribs, BBQ, Wings & Family Meals",
  description:
    "Explore Shane's Rib Shack menu categories — sandwiches, plates, wings, family meals, sides, and more. See all items and order online.",
};

function PromoBanner() {
  return (
    <div className="flex w-full justify-center px-5 lg:px-0">
      <div className="w-full max-w-[1180px] rounded-[20px] border border-black/10 bg-brand-red p-2.5">
        <div className="relative flex h-[160px] w-full flex-col items-center justify-center overflow-hidden rounded-[10px] bg-brand-black px-6 text-center sm:h-[200px] lg:h-[233px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,199,44,0.22),transparent_42%),linear-gradient(135deg,rgba(255,255,255,0.06),transparent_45%)]" />
          <div className="relative z-10 flex max-w-[760px] flex-col items-center gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
              Crowd favorites
            </p>
            <h2 className="text-[24px] font-extrabold uppercase leading-none text-white sm:text-[30px] lg:text-[36px]">
              Slow-smoked BBQ, family meals, and game-day ready picks
            </h2>
            <p className="max-w-[620px] text-sm font-semibold leading-relaxed text-white/80 sm:text-base">
              Explore the full menu, then order online for pickup or delivery from
              your nearest Shack.
            </p>
            <Link
              href="/order/"
              className="mt-1 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-brand-black transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Order Online
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategoryGrid({ cards }: { cards: typeof menuCategoryCards }) {
  return (
    <div className="grid w-full max-w-[1200px] grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {cards.map((category) => (
        <MenuCategoryCard key={category.slug} category={category} />
      ))}
    </div>
  );
}

export default function MenuPage() {
  const abovePromo = menuCategoryCards.slice(0, MENU_PROMO_AFTER_INDEX);
  const belowPromo = menuCategoryCards.slice(MENU_PROMO_AFTER_INDEX);

  return (
    <PageShell>
      <section
        className="flex w-full flex-col items-center gap-5 px-5 pt-5 lg:pt-[60px]"
        aria-labelledby="menu-heading"
      >
        <div className="flex w-full max-w-[1200px] flex-col items-center">
          <div className="flex w-full flex-col items-center justify-center rounded-[12px] border border-[rgba(31,33,31,0.2)] bg-brand-tan px-6 py-8 sm:px-12 sm:py-10 lg:px-[80px] lg:py-[44px]">
            <h1
              id="menu-heading"
              className="w-full text-center text-[28px] font-extrabold uppercase leading-none text-brand-red sm:text-[36px] lg:text-[48px]"
            >
              Shane&apos;s Rib Shack Menu
            </h1>
          </div>
        </div>

        <div className="flex w-full flex-col items-center gap-5 pb-10 lg:pb-0">
          <CategoryGrid cards={abovePromo} />

          <div className="w-full pb-5 pt-0 lg:pb-10">
            <PromoBanner />
          </div>

          <div className="flex w-full flex-col items-center gap-5 pt-0 lg:pt-0">
            <CategoryGrid cards={belowPromo} />
          </div>
        </div>
      </section>
    </PageShell>
  );
}
