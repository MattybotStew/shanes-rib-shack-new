import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";
import { ORDER_HOME_URL } from "@/lib/locationData";

const headline = "Welcome to The Original Shack";
const body =
  "Great food brings people together, and that's what Shane's Rib Shack does best. From slow-smoked baby back ribs to hand-chopped BBQ pork, chicken, burgers, salads, and classic Southern sides, our menu offers something for every appetite. Dine in, take it to go, or make it a regular stop with the people you enjoy most.";

const heroAlt =
  "Slow-smoked ribs, chopped BBQ pork, and Texas toast from Shane's Rib Shack";

function HeroCtas({ stack }: { stack?: boolean }) {
  return (
    <div
      className={
        stack
          ? "flex flex-col items-center gap-3"
          : "flex flex-wrap items-center gap-3"
      }
    >
      <Cta href={ORDER_HOME_URL} variant="red">
        Order Now
      </Cta>
      <Cta href="/rewards" variant="black">
        Rewards
      </Cta>
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="w-full" aria-label="Welcome">
      {/* Mobile — MB-Home 6310:5773: photo above copy, stacked */}
      <div className="flex w-full flex-col lg:hidden">
        <div className="w-full px-5 pt-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/home/hero-shack.jpg")}
            alt={heroAlt}
            className="h-[290px] w-full rounded-[12px] object-cover object-[50%_62%]"
          />
        </div>
        <div className="w-full bg-white px-5 pb-10">
          <div className="flex w-full flex-col items-center gap-[30px] px-[30px] py-10 text-center">
            <h1 className="w-full text-[32px] font-extrabold uppercase leading-none text-brand-red">
              {headline}
            </h1>
            <p className="w-full text-base font-semibold leading-[1.3] text-brand-black">
              {body}
            </p>
            <HeroCtas stack />
          </div>
        </div>
      </div>

      {/* Desktop — DK-Home 6310:5562: white card overlaid on photo */}
      <div className="hidden w-full flex-col items-center px-5 pb-[70px] pt-5 lg:flex">
        <div className="relative flex w-full max-w-[1320px] flex-col items-center justify-center overflow-hidden rounded-[12px] px-[100px] py-[120px]">
          <div className="pointer-events-none absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/home/hero-shack.jpg")}
              alt={heroAlt}
              className="absolute inset-0 size-full object-cover object-[50%_62%]"
            />
          </div>
          <div className="relative flex w-full max-w-[680px] flex-col items-start justify-center gap-[30px] rounded-[12px] bg-white p-[60px]">
            <h1 className="w-full text-[48px] font-extrabold uppercase leading-none text-brand-red">
              {headline}
            </h1>
            <p className="w-full text-lg font-semibold leading-[1.5] text-brand-black">
              {body}
            </p>
            <HeroCtas />
          </div>
        </div>
      </div>
    </section>
  );
}
