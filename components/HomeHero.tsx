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
          ? "flex w-full flex-col items-stretch gap-3"
          : "flex flex-wrap items-center gap-3"
      }
    >
      <Cta href={ORDER_HOME_URL} variant="red" className={stack ? "w-full" : ""}>
        Order Now
      </Cta>
      <Cta href="/rewards" variant="black" className={stack ? "w-full" : ""}>
        Rewards
      </Cta>
    </div>
  );
}

export default function HomeHero() {
  return (
    <section className="w-full px-5 py-5" aria-label="Welcome">
      <div className="relative mx-auto w-full max-w-[1320px] overflow-hidden rounded-[12px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/home/hero-shack.jpg")}
          alt={heroAlt}
          className="absolute inset-0 size-full object-cover object-[50%_55%]"
        />
        <div className="relative flex min-h-[720px] flex-col justify-end p-5 sm:min-h-[640px] lg:min-h-[620px] lg:items-center lg:justify-start lg:p-[52px]">
          <div className="flex w-full flex-col items-center gap-6 rounded-[12px] bg-white/80 px-5 py-10 text-center lg:max-w-[720px] lg:items-start lg:gap-[30px] lg:self-start lg:p-[60px] lg:text-left">
            <h1 className="w-full text-[32px] font-extrabold uppercase leading-none text-brand-red lg:text-[48px]">
              {headline}
            </h1>
            <p className="w-full text-base font-semibold leading-[1.3] text-brand-black lg:text-lg lg:leading-[1.5]">
              {body}
            </p>
            <div className="w-full lg:hidden">
              <HeroCtas stack />
            </div>
            <div className="hidden lg:block">
              <HeroCtas />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
