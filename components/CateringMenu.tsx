"use client";

import Link from "next/link";
import { asset } from "@/lib/asset";
import { ezCaterUrl } from "@/lib/ezcater";
import { desserts, menuItems, sides, type MenuItem } from "@/lib/menuData";

const introBody =
  "Get ready to sit back, relax and enjoy your next event or party by letting the professionals at Shane's Rib Shack take care of the food! We are proud to offer our signature barbecue and side dishes in four different catering packages to satisfy events of all sizes. Our catering packages were designed to allow flexibility and a great selection of choices that can be customized for your event.";

const pathHelper =
  "Instant checkout online · Custom quotes get a specialist reply during business hours";

const primaryBtn =
  "inline-flex flex-1 items-center justify-center rounded-[5px] bg-brand-red px-4 py-3 text-center text-xs font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25] sm:text-sm";
const secondaryBtn =
  "inline-flex flex-1 items-center justify-center rounded-[5px] bg-brand-black px-4 py-3 text-center text-xs font-bold uppercase leading-4 text-white transition-colors hover:bg-[#1c2730] sm:text-sm";

function Divider() {
  return <div className="h-px w-full bg-black/10" aria-hidden />;
}

function PackagePathCtAs({ packageName }: { packageName: string }) {
  const quoteHref = `?package=${encodeURIComponent(packageName)}#catering-inquiry`;
  return (
    <div className="mt-auto flex flex-col gap-2 pt-2 sm:flex-row">
      <a
        href={ezCaterUrl()}
        target="_blank"
        rel="noopener noreferrer"
        className={secondaryBtn}
        data-path="online"
      >
        Order This Online
      </a>
      <Link href={quoteHref} className={primaryBtn} data-path="quote">
        Get a Quote
      </Link>
    </div>
  );
}

function PackageCard({ item }: { item: MenuItem }) {
  const lines = item.kind === "package" ? item.items : item.lines;

  return (
    <article className="flex h-full flex-col gap-[30px] rounded-[12px] border border-black/10 bg-brand-tan p-[30px]">
      <div className="flex flex-1 flex-col gap-6">
        <h3 className="text-2xl font-semibold uppercase leading-none text-brand-red">
          {item.title}
        </h3>
        <Divider />
        <ul className="flex flex-col gap-4">
          {lines.map((line, i) => (
            <li key={`${item.id}-${line}`} className="flex flex-col gap-4">
              <p className="text-lg font-semibold leading-[1.5] text-brand-black">
                {line}
              </p>
              {i < lines.length - 1 ? <Divider /> : null}
            </li>
          ))}
        </ul>
        <PackagePathCtAs packageName={item.title} />
      </div>
    </article>
  );
}

function PromoBanner() {
  return (
    <div className="flex h-full min-h-[277px] flex-col self-stretch rounded-[20px] border border-black/10 bg-brand-red p-2.5">
      <div className="relative flex min-h-[277px] flex-1 flex-col items-center justify-center gap-4 overflow-hidden rounded-[10px] px-8 py-8 text-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/catering-menu-banner.jpg")}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-brand-black/70" aria-hidden />
        <p className="relative text-2xl font-extrabold uppercase leading-none text-white">
          Not sure which package?
        </p>
        <p className="relative max-w-xs text-sm font-semibold leading-[1.5] text-white/90">
          Request a custom quote — a specialist will help you build the right
          spread.
        </p>
        <Link
          href="#catering-inquiry"
          className="relative inline-flex items-center justify-center rounded-[5px] bg-brand-red px-5 py-3 text-xs font-bold uppercase text-white transition-colors hover:bg-[#a01b25]"
        >
          Get a Quote
        </Link>
      </div>
    </div>
  );
}

function PackageGrid() {
  return (
    <div className="grid w-full max-w-[1200px] grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
      {menuItems.map((item) => (
        <PackageCard key={item.id} item={item} />
      ))}
      <PromoBanner />
    </div>
  );
}

function IntroBlock() {
  return (
    <div className="flex w-full max-w-[960px] flex-col items-center gap-5 text-center sm:gap-6">
      <h2 className="w-full text-[32px] font-extrabold uppercase leading-none text-brand-red lg:text-[48px]">
        Catering Menu
      </h2>
      <p className="w-full text-lg font-normal leading-[1.5] text-brand-black">
        {introBody}
      </p>
      <p className="w-full text-sm font-semibold text-brand-black/70">
        {pathHelper}
      </p>
    </div>
  );
}

function FooterBlock() {
  return (
    <div className="grid w-full max-w-[1200px] gap-4 sm:grid-cols-2 sm:gap-5">
      <article className="flex flex-col gap-3 rounded-[12px] border border-brand-black/15 bg-brand-tan p-5 text-left sm:p-6">
        <h3 className="text-lg font-extrabold uppercase leading-none text-brand-red sm:text-xl">
          Side Selections Include
        </h3>
        <p className="text-base font-semibold leading-[1.5] text-brand-black">
          {sides}
        </p>
      </article>
      <article className="flex flex-col gap-3 rounded-[12px] border border-brand-black/15 bg-brand-tan p-5 text-left sm:p-6">
        <h3 className="text-lg font-extrabold uppercase leading-none text-brand-red sm:text-xl">
          Add Dessert to Any Package
        </h3>
        <p className="text-sm font-bold uppercase tracking-wide text-brand-black/60">
          Choose from
        </p>
        <p className="text-base font-semibold leading-[1.5] text-brand-black">
          {desserts}
        </p>
      </article>
    </div>
  );
}

export default function CateringMenu() {
  return (
    <section
      id="catering-menu"
      className="scroll-mt-6 flex w-full flex-col items-center bg-white px-5 pt-10 pb-0 sm:pt-12 lg:pt-16"
      aria-label="Catering menu"
    >
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-[30px]">
        <IntroBlock />
        <PackageGrid />
        <FooterBlock />
      </div>
    </section>
  );
}
