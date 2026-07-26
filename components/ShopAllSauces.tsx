import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";
import {
  SHOP_HUB_URL,
  shopAllCopy,
  shopSpecialtyLinks,
} from "@/lib/shopData";

/** Shop All BBQ Sauces — DK-Shop `6250:7893` / MB-Shop `6250:8183`. */
export default function ShopAllSauces() {
  return (
    <section
      className="flex w-full flex-col items-center justify-center px-5 py-10 lg:py-[100px]"
      aria-labelledby="shop-all-heading"
    >
      <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:gap-[80px]">
        {/* Mobile: image above copy (MB-Shop). Desktop: copy left, image right. */}
        <div className="relative h-[290px] w-full overflow-hidden rounded-[12px] lg:order-2 lg:h-[475px] lg:w-[580px] lg:shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/shop/shop-all.jpg")}
            alt="Assortment of Shane's Rib Shack BBQ sauce bottles"
            className="absolute inset-0 size-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="flex w-full flex-col items-start gap-8 lg:order-1 lg:flex-1 lg:gap-10">
          <h2
            id="shop-all-heading"
            className="w-full text-[32px] font-extrabold uppercase leading-none text-brand-red lg:text-[48px]"
          >
            Shop All BBQ Sauces
          </h2>
          <p className="w-full text-base font-semibold leading-[1.3] text-[#828282]">
            {shopAllCopy}
          </p>
          <ul className="flex w-full flex-col gap-3 text-base font-semibold leading-[1.3] text-brand-red">
            {shopSpecialtyLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
                  {...(link.href.startsWith("http")
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <Cta href={SHOP_HUB_URL} variant="red" className="w-full sm:w-auto">
            Shop All BBQ Sauces
          </Cta>
        </div>
      </div>
    </section>
  );
}
