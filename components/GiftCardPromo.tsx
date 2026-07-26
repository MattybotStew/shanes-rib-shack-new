import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";

const headline = "Give the Gift of Great Food";
const body =
  "Shane's Rib Shack gift cards are an easy way to treat friends, family, or coworkers to something they'll actually enjoy. Perfect for birthdays, thank-you gifts, or last-minute surprises, a Shane's gift card lets them choose their favorite BBQ whenever the craving hits.";

export default function GiftCardPromo() {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden py-12 lg:py-[50px]"
      aria-label="Gift cards"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/home/giftcard-bg.jpg")}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative w-full px-5 lg:px-[80px]">
        <div className="mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[30px] rounded-[12px] border-[3px] border-brand-cream/40 px-6 py-10 sm:px-10 lg:flex-row lg:gap-[90px] lg:px-[50px] lg:py-[60px]">
          <div className="relative h-[290px] w-full overflow-hidden rounded-[21px] sm:h-[300px] lg:h-[327px] lg:flex-1">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/home/giftcard-plate-new.png")}
              alt="Shane's Rib Shack gift card with BBQ plate"
              className="size-full object-cover"
            />
          </div>

          <div className="flex w-full flex-col items-start justify-center gap-6 lg:flex-1 lg:gap-[30px]">
            <h2 className="w-full text-[45px] font-extrabold uppercase leading-none text-white lg:text-[60px]">
              {headline}
            </h2>
            <p className="w-full text-base font-semibold leading-[1.5] text-white/85 sm:text-lg">
              {body}
            </p>
            <p className="w-full text-sm font-semibold italic leading-[1.5] text-white/70">
              ** Gift cards are also available for purchase in the restaurant!
            </p>
            <Cta href="/gift-cards" variant="red">
              Shop Gift Cards
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
