import type { Metadata } from "next";
import GiftCardPromo from "@/components/GiftCardPromo";
import PageShell from "@/components/PageShell";
import ShopAllSauces from "@/components/ShopAllSauces";
import ShopHero from "@/components/ShopHero";
import ShopProductCard from "@/components/ShopProductCard";
import { shopProducts } from "@/lib/shopData";

export const metadata: Metadata = {
  title: "Shop | Shane's Rib Shack | BBQ Sauces & Gift Cards",
  description:
    "Shop Shane's Rib Shack BBQ sauces and gift cards. Take home Original, Honey, Spicy, and more — or give the gift of great BBQ.",
};

function PromoBanner() {
  return (
    <div className="flex w-full justify-center">
      <div className="w-full rounded-[20px] border border-black/10 bg-brand-red p-2.5 lg:w-[390px] lg:shrink-0">
        <div className="relative flex min-h-[160px] w-full items-center justify-center overflow-hidden rounded-[10px] bg-brand-black px-6 py-8 sm:min-h-[200px] lg:h-[276px]">
          <p className="max-w-[90%] text-center text-sm font-bold uppercase leading-4 text-white sm:text-base">
            Client promotional banner image — upload desktop and mobile creatives
            here
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ShopPage() {
  const productsBeforeBanner = shopProducts.slice(0, 6);
  const productsAfterBanner = shopProducts.slice(6);

  return (
    <PageShell>
      <ShopHero />

      <section
        className="flex w-full flex-col items-center gap-[30px] px-5 pt-5 pb-5 lg:pt-[60px]"
        aria-labelledby="sauces-heading"
      >
        <div className="flex w-full max-w-[1200px] flex-col items-center">
          <div className="flex w-full flex-col items-center justify-center rounded-[20px] border border-[rgba(31,33,31,0.2)] bg-brand-tan px-5 py-[26px] lg:px-[80px] lg:py-[44px]">
            <h2
              id="sauces-heading"
              className="w-full text-center text-[32px] font-extrabold uppercase leading-none text-brand-red lg:text-[48px]"
            >
              Shane&apos;s Rib Shack BBQ Sauces
            </h2>
          </div>
        </div>

        <div className="flex w-full max-w-[1200px] flex-col gap-5">
          {/* Desktop: 3×2 grid, then last row with 2 products + promo */}
          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {productsBeforeBanner.map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="grid w-full grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:items-stretch">
            {productsAfterBanner.map((product) => (
              <ShopProductCard key={product.id} product={product} />
            ))}
            <PromoBanner />
          </div>
        </div>
      </section>

      {/*
        Section order: DK-Shop = Shop All → Gift Cards;
        MB-Shop = Gift Cards → Shop All. Flex order swaps on mobile.
      */}
      <div className="flex flex-col">
        <div className="order-2 lg:order-1">
          <ShopAllSauces />
        </div>
        <div className="order-1 lg:order-2">
          <GiftCardPromo />
        </div>
      </div>
    </PageShell>
  );
}
