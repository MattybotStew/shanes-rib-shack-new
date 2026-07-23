import Link from "next/link";
import { asset } from "@/lib/asset";
import { HeroPathActions, outlineBtn } from "@/components/HeroPathActions";

const headline = "Norcross Shack BBQ Catering for Groups and Events";
const body =
  "Whether you're planning your next office lunch, corporate catering, wedding catering or a casual family get-together, Shane's Rib Shack has catering options that scale easily. From team lunches to once-in-a-lifetime celebrations, we bring real BBQ and Southern hospitality to every order.";

export default function Hero() {
  return (
    <section className="w-full" aria-label="Catering hero">
      {/* Desktop */}
      <div className="hidden w-full flex-col items-center px-5 pb-[70px] pt-5 lg:flex">
        <div className="relative flex w-full max-w-[1320px] flex-col items-center justify-center overflow-hidden rounded-[12px] px-[100px] py-[120px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={asset("/images/hero-catering.jpg")}
            alt="Shane's Rib Shack catering spread"
            className="pointer-events-none absolute inset-0 size-full rounded-[12px] object-cover"
          />
          <div className="relative flex w-full max-w-[1200px] flex-col items-start justify-center">
            <div className="flex w-full max-w-[960px] flex-col items-start justify-center gap-[30px] rounded-[12px] bg-white p-[60px]">
              <h1 className="w-full text-[48px] font-extrabold uppercase leading-none text-brand-red">
                {headline}
              </h1>
              <p className="w-full text-lg font-semibold leading-[1.5] text-brand-black">
                {body}
              </p>
              <div className="flex flex-wrap items-center gap-3">
                <Link
                  href="mailto:catering@shanesribshack.com"
                  className={outlineBtn}
                >
                  Email us
                </Link>
                <Link href="tel:7704166606" className={outlineBtn}>
                  (770) 416-6606
                </Link>
              </div>
              <HeroPathActions />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — single H1 on desktop; mobile uses styled paragraph */}
      <div className="flex w-full flex-col items-center lg:hidden">
        <div className="w-full px-5">
          <div className="relative h-[290px] w-full overflow-hidden rounded-[12px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/hero-catering.jpg")}
              alt="Shane's Rib Shack catering spread"
              className="absolute inset-0 size-full rounded-[12px] object-cover"
            />
          </div>
        </div>

        <div className="flex w-full flex-col items-center px-5 pb-5">
          <div className="flex w-full flex-col items-start justify-center gap-[30px] rounded-[40px] px-[30px] py-10">
            <p className="w-full text-center text-[32px] font-extrabold uppercase leading-none text-brand-red">
              {headline}
            </p>

            <div className="flex w-full flex-col items-center justify-center gap-3">
              <Link
                href="mailto:catering@shanesribshack.com"
                className={`${outlineBtn} w-full`}
              >
                Email us
              </Link>
              <Link href="tel:7704166606" className={`${outlineBtn} w-full`}>
                (770) 416-6606
              </Link>
            </div>

            <p className="w-full text-center text-base font-semibold leading-[1.3] text-brand-black">
              {body}
            </p>

            <HeroPathActions compact />
          </div>
        </div>
      </div>
    </section>
  );
}
