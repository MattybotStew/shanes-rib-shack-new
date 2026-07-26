import type { Metadata } from "next";
import Link from "next/link";
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
        <div className="relative flex min-h-[160px] w-full flex-col items-center justify-center overflow-hidden rounded-[10px] bg-brand-black px-6 py-8 text-center sm:min-h-[200px] lg:h-[276px]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,199,44,0.2),transparent_40%),linear-gradient(140deg,rgba(255,255,255,0.06),transparent_48%)]" />
          <div className="relative z-10 flex max-w-[280px] flex-col items-center gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-gold">
              Shack favorites
            </p>
            <h2 className="text-[24px] font-extrabold uppercase leading-none text-white sm:text-[28px] lg:text-[30px]">
              Stock up on Shane&apos;s sauces and smoky BBQ gifts
            </h2>
            <p className="text-sm font-semibold leading-relaxed text-white/80 sm:text-base">
              Bring home the flavors you love or send a gift card to your favorite
              barbecue fan.
            </p>
            <Link
              href="/gift-cards/"
              className="mt-1 inline-flex min-h-11 items-center justify-center rounded-full bg-brand-gold px-6 py-3 text-sm font-extrabold uppercase tracking-[0.08em] text-brand-black transition hover:brightness-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
            >
              Shop Gift Cards
            </Link>
          </div>
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
