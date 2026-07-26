import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";

const headline = "It All Started At The Shack";
const body =
  "The love of great BBQ and close-knit communities had to be shared.";
const heroAlt =
  "The Original Shane's Rib Shack building in McDonough, Georgia, with red roof and wooden deck";

export default function OurStoryHero() {
  return (
    <section className="w-full" aria-label="Our Story">
      {/* Mobile — MB-OurStory 6250:7364: photo above copy, stacked */}
      <div className="flex w-full flex-col lg:hidden">
        <div className="w-full px-5">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/our-story/hero-shack.jpg")}
            alt={heroAlt}
            className="h-[290px] w-full rounded-[12px] object-cover object-center"
          />
        </div>
        <div className="w-full bg-white px-5 pb-5">
          <div className="flex w-full flex-col items-start justify-center gap-[30px] px-[30px] py-10 text-center">
            <h1 className="w-full text-[32px] font-extrabold uppercase leading-none text-brand-red">
              {headline}
            </h1>
            <p className="w-full text-base font-semibold leading-[1.3] text-brand-black">
              {body}
            </p>
            <div className="flex w-full flex-col items-center gap-3">
              <Cta href="/careers/">Join Our Team</Cta>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop — DK-OurStory 6250:6884: white card overlaid on photo */}
      <div className="hidden w-full flex-col items-center px-5 pb-[70px] pt-5 lg:flex">
        <div className="relative flex h-[620px] w-full max-w-[1320px] flex-col items-center justify-center overflow-hidden rounded-[12px] px-[100px] py-[150px]">
          <div className="pointer-events-none absolute inset-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/our-story/hero-shack.jpg")}
              alt={heroAlt}
              className="absolute inset-0 size-full rounded-[12px] object-cover object-bottom"
            />
          </div>
          <div className="relative flex w-full max-w-[1200px] flex-col items-start justify-center">
            <div className="flex w-full max-w-[680px] flex-col items-start justify-center gap-[30px] rounded-[12px] bg-white p-[60px]">
              <h1 className="w-full text-[48px] font-extrabold uppercase leading-none text-brand-red">
                {headline}
              </h1>
              <p className="w-full text-lg font-semibold leading-[1.5] text-brand-black">
                {body}
              </p>
              <Cta href="/careers/">Join Our Team</Cta>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
