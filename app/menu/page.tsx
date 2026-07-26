import type { Metadata } from "next";
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
        <div className="relative flex h-[160px] w-full items-center justify-center overflow-hidden rounded-[10px] bg-brand-black sm:h-[200px] lg:h-[233px]">
          <p className="max-w-[90%] px-4 text-center text-sm font-bold uppercase leading-4 text-white sm:text-base">
            Client promotional banner image — upload desktop and mobile creatives
            here
          </p>
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
