import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";
import { ezCaterUrl } from "@/lib/ezcater";

const headline = "Catering For Every Occasion";
const body =
  "Feeding a group doesn't have to be complicated. Shane's Rib Shack catering brings slow-smoked BBQ and classic sides prepared fresh at your local Shack, so everything arrives hot and ready to enjoy. Whatever the occasion, we make serving a crowd simple.";

export default function CateringPromo() {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden px-5 py-10 lg:py-[60px]"
      aria-label="Catering"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/home/catering-promo.jpg")}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative flex w-full max-w-[1200px] items-center rounded-[12px] border-[3px] border-brand-cream/40 px-[30px] py-10 sm:px-10 sm:py-16 lg:px-[50px] lg:py-[104px]">
        <div className="flex flex-1 flex-col items-center justify-center gap-6 lg:gap-[30px]">
          <h2 className="w-full text-center text-[45px] font-extrabold uppercase leading-none text-white sm:text-[52px] lg:text-[74px]">
            {headline}
          </h2>
          <p className="w-full max-w-[900px] text-center text-base font-semibold leading-[1.5] text-white/85 sm:text-lg">
            {body}
          </p>
          <div className="flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row sm:flex-wrap">
            <Cta
              href={ezCaterUrl()}
              variant="red"
              className="w-[206px] max-w-full sm:w-auto"
            >
              Order Now
            </Cta>
            <Cta
              href="/catering/#catering-menu"
              variant="white"
              className="w-full sm:w-auto"
            >
              View Catering Menu
            </Cta>
          </div>
        </div>
      </div>
    </section>
  );
}
