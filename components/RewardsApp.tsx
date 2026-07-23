import Link from "next/link";
import { asset } from "@/lib/asset";

function AppleBadge({
  size = "desktop",
}: {
  size?: "desktop" | "mobile";
}) {
  const isMobile = size === "mobile";
  const prefix = isMobile ? "badge-apple-mb" : "badge-apple";
  return (
    <div
      className={
        isMobile
          ? "relative h-[42px] w-[140px] shrink-0"
          : "relative h-[49px] w-[163px] shrink-0"
      }
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(`/images/${prefix}-1.svg`)}
        alt=""
        className="absolute inset-0 size-full"
      />
      <div className="absolute inset-[21.78%_79.44%_23.85%_7.4%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(`/images/${prefix}-2.svg`)}
          alt=""
          className="absolute inset-0 size-full"
        />
      </div>
      <div className="absolute inset-[44.62%_12.93%_16.38%_31.35%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(`/images/${prefix}-3.svg`)}
          alt=""
          className="absolute inset-0 size-full"
        />
      </div>
      <div className="absolute inset-[21.05%_16.39%_63.06%_32.28%]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(`/images/${prefix}-4.svg`)}
          alt=""
          className="absolute inset-0 size-full"
        />
      </div>
      <span className="sr-only">Download on the App Store</span>
    </div>
  );
}

export default function RewardsApp() {
  return (
    <section className="w-full" aria-label="Rewards app">
      {/* Desktop — 6250:6292 */}
      <div className="hidden w-full flex-col items-center px-5 py-20 lg:flex">
        <div className="flex w-full max-w-[1200px] items-center justify-center overflow-hidden rounded-[12px] bg-brand-black pl-[60px]">
          <div className="flex h-[354px] flex-1 flex-col items-start justify-center gap-10">
            <h2 className="w-full text-[45px] font-extrabold uppercase leading-none text-white">
              Download our rewards app today
            </h2>
            <p className="w-full text-lg font-semibold leading-[1.5] text-white">
              Earn points with every transaction, save favorites for easy
              reordering, redeem points for menu items, &amp; more!
            </p>
            <div className="flex items-start gap-6">
              <Link
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppleBadge size="desktop" />
              </Link>
              <Link
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-[49px] w-[165px] shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset("/images/badge-google-play.svg")}
                  alt="Get it on Google Play"
                  className="absolute inset-0 size-full object-contain object-left"
                />
              </Link>
            </div>
          </div>
          <div className="relative h-[492px] w-[433px] shrink-0">
            <div className="absolute inset-0 overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/images/rewards-phones.png")}
                alt="Shane's Rib Shack rewards app on phones"
                className="absolute left-[-6.54%] top-[6.74%] h-[99.53%] w-[107.37%] max-w-none"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — 6250:6828 TopHeadHeroMb Variant2 */}
      <div className="flex w-full flex-col items-center px-5 py-10 lg:hidden">
        <div className="flex w-full flex-col items-center rounded-[12px] bg-brand-black px-[30px] pt-10">
          <div className="flex w-full flex-col items-center justify-center gap-5">
            <h2 className="w-full text-center text-[32px] font-extrabold uppercase leading-none text-white">
              Download our rewards app today
            </h2>
            <p className="w-full text-center text-lg font-semibold leading-[1.5] text-brand-tan">
              Earn points with every transaction, save favorites for easy
              reordering, redeem points for menu items, &amp; more!
            </p>
            <div className="flex items-start gap-[10px]">
              <Link
                href="https://apps.apple.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AppleBadge size="mobile" />
              </Link>
              <Link
                href="https://play.google.com"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block h-[42px] w-[140px] shrink-0"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset("/images/badge-google-play-mb.svg")}
                  alt="Get it on Google Play"
                  className="absolute inset-0 size-full object-contain object-left"
                />
              </Link>
            </div>
            <div className="relative h-[331px] w-[292px] shrink-0">
              <div className="absolute inset-0 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset("/images/rewards-phones.png")}
                  alt="Shane's Rib Shack rewards app on phones"
                  className="absolute left-[-3.71%] top-[0.23%] h-[99.53%] w-[107.37%] max-w-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
