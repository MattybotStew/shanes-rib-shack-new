import { asset } from "@/lib/asset";
import { HeroPathActions } from "@/components/HeroPathActions";

const headline = "Norcross Shack BBQ Catering for Groups and Events";
const support =
  "Office lunches to weddings — order online or request a custom quote.";
const trust =
  "Instant checkout online · Custom events get a specialist reply during business hours";

export default function Hero() {
  return (
    <section className="w-full" aria-label="Catering hero">
      {/* Desktop — image plane + lean copy panel */}
      <div className="hidden w-full flex-col items-center px-5 pb-10 pt-5 lg:flex">
        <div className="relative flex w-full max-w-[1320px] flex-col items-center justify-center overflow-hidden rounded-[12px] px-[100px] py-[120px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/hero-catering.jpg")}
            alt="Shane's Rib Shack catering spread"
            className="pointer-events-none absolute inset-0 size-full rounded-[12px] object-cover"
          />
          <div className="relative flex w-full max-w-[1200px] flex-col items-start justify-center">
            <div className="flex w-full max-w-[720px] flex-col items-start gap-6 rounded-[12px] bg-white p-12">
              <h1 className="w-full text-[42px] font-extrabold uppercase leading-[1.05] text-brand-red">
                {headline}
              </h1>
              <p className="w-full text-lg font-semibold leading-[1.45] text-brand-black">
                {support}{" "}
                <span className="text-brand-red">{trust}</span>
              </p>
              <HeroPathActions />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — image, headline, one line, two CTAs */}
      <div className="flex w-full flex-col items-center lg:hidden">
        <div className="w-full px-5 pt-4">
          <div className="relative h-[240px] w-full overflow-hidden rounded-[12px] sm:h-[290px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/hero-catering.jpg")}
              alt="Shane's Rib Shack catering spread"
              className="absolute inset-0 size-full rounded-[12px] object-cover"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center px-5 pb-8 pt-6">
          <div className="flex w-full max-w-[480px] flex-col items-stretch gap-5">
            <p className="w-full text-center text-[28px] font-extrabold uppercase leading-[1.05] text-brand-red sm:text-[32px]">
              {headline}
            </p>
            <p className="w-full text-center text-base font-semibold leading-[1.4] text-brand-black">
              {support}{" "}
              <span className="text-brand-red">{trust}</span>
            </p>
            <HeroPathActions />
          </div>
        </div>
      </div>

    </section>
  );
}
