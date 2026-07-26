import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";

/** Full-bleed shop hero — DK-Shop `6250:7864` / MB-Shop `6250:8154`. */
export default function ShopHero() {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden px-5 py-16 lg:py-[140px]"
      aria-labelledby="shop-hero-heading"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/shop/hero-bg.jpg")}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative flex w-full max-w-[1200px] flex-col items-center justify-center py-5">
        <div className="flex w-full max-w-[330px] flex-col items-center gap-[30px] lg:max-w-[1000px] lg:px-[100px]">
          <h1
            id="shop-hero-heading"
            className="w-full text-center text-[32px] font-extrabold uppercase leading-none text-white lg:text-[48px]"
          >
            You actually can buy happiness
          </h1>
          <p className="w-full text-center text-2xl font-bold leading-[1.2] text-white lg:text-[32px]">
            Take home the sauces that made the Shack famous — or give the gift
            of great BBQ.
          </p>
          <Cta href="/gift-cards" variant="red">
            Gift Cards
          </Cta>
        </div>
      </div>
    </section>
  );
}
