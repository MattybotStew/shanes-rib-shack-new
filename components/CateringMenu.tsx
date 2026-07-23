"use client";

import Link from "next/link";
import { useId, useState } from "react";
import { ezCaterUrl } from "@/lib/ezcater";

const introBody =
  "Get ready to sit back, relax and enjoy your next event or party by letting the professionals at Shane's Rib Shack take care of the food! We are proud to offer our signature barbecue and side dishes in four different catering packages to satisfy events of all sizes. Our catering packages were designed to allow flexibility and a great selection of choices that can be customized for your event.";

const dessertNote = "Add Dessert to any package! Choose from:";
const desserts = "Homemade Peach Cobbler, Brownies, & Cookies";

const pathHelper =
  "Instant checkout online · Custom quotes get a specialist reply during business hours";

const primaryBtn =
  "inline-flex flex-1 items-center justify-center rounded-[5px] bg-brand-red px-4 py-3 text-center text-xs font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25] sm:text-sm";
const secondaryBtn =
  "inline-flex flex-1 items-center justify-center rounded-[5px] bg-brand-black px-4 py-3 text-center text-xs font-bold uppercase leading-4 text-white transition-colors hover:bg-[#1c2730] sm:text-sm";

type MenuItem =
  | { id: string; title: string; kind: "package"; items: string[] }
  | { id: string; title: string; kind: "boxed"; lines: string[] };

const menuItems: MenuItem[] = [
  {
    id: "one-meat",
    title: "One Meat",
    kind: "package",
    items: [
      "Chopped Pork OR Chopped Chicken",
      "Two Side Items",
      "Bread & BBQ",
      "Sauce",
      "Tea",
      "Plates, Cups, Utensils, & Napkins",
    ],
  },
  {
    id: "ribs-one-meat",
    title: "Ribs & One Meat",
    kind: "package",
    items: [
      "Ribs, Chopped Pork OR Chopped Chicken",
      "Two Side Items",
      "Bread & BBQ",
      "Sauce",
      "Tea",
      "Plates, Cups, Utensils, & Napkins",
    ],
  },
  {
    id: "two-meat",
    title: "Two Meat",
    kind: "package",
    items: [
      "Chopped Pork & Chopped Chicken",
      "Two Side Items",
      "Bread & BBQ",
      "Sauce",
      "Tea",
      "Plates, Cups, Utensils, & Napkins",
    ],
  },
  {
    id: "three-meat",
    title: "Three Meat",
    kind: "package",
    items: [
      "Ribs, Chopped Pork, & Chopped Chicken",
      "Two Side Items",
      "Bread & BBQ",
      "Sauce",
      "Tea",
      "Plates, Cups, Utensils, & Napkins",
    ],
  },
  {
    id: "boxed-lunches",
    title: "Boxed Lunches",
    kind: "boxed",
    lines: [
      "Pick Your Sandwich:",
      "Big Dad Pork Sandwich or BBQ Chicken Sandwich",
      "Served with:",
      "Chips, Cookie, & Tea OR One Side, Cookie, & Tea",
    ],
  },
];

function Divider() {
  return <div className="h-px w-full bg-brand-black/15" aria-hidden />;
}

function PackagePathCtAs({ packageName }: { packageName: string }) {
  const quoteHref = `?package=${encodeURIComponent(packageName)}#catering-inquiry`;
  return (
    <div className="flex flex-col gap-2 pt-1 sm:flex-row">
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
        Quote This Package
      </Link>
    </div>
  );
}

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      className={`size-5 shrink-0 text-brand-red transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      viewBox="0 0 20 20"
      fill="currentColor"
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

function AccordionPanel({ item }: { item: MenuItem }) {
  if (item.kind === "package") {
    return (
      <div className="flex flex-col gap-4 px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
        <ul className="flex flex-col gap-3">
          {item.items.map((line, i) => (
            <li key={line} className="flex flex-col gap-3">
              <p className="text-base font-semibold leading-[1.5] text-brand-black sm:text-lg">
                {line}
              </p>
              {i < item.items.length - 1 ? <Divider /> : null}
            </li>
          ))}
        </ul>
        <PackagePathCtAs packageName={item.title} />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
      <div className="flex flex-col gap-3">
        {item.lines.map((line, i) => (
          <div key={line} className="flex flex-col gap-3">
            <p className="text-base font-semibold leading-[1.5] text-brand-black sm:text-lg">
              {line}
            </p>
            {i < item.lines.length - 1 ? <Divider /> : null}
          </div>
        ))}
      </div>
      <PackagePathCtAs packageName={item.title} />
    </div>
  );
}

function PackageAccordion() {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(menuItems[0]?.id ?? null);

  return (
    <div className="flex w-full max-w-[720px] flex-col overflow-hidden rounded-[12px] border border-brand-black/15 bg-brand-tan">
      {menuItems.map((item, index) => {
        const open = openId === item.id;
        const panelId = `${baseId}-panel-${item.id}`;
        const headerId = `${baseId}-header-${item.id}`;

        return (
          <div
            key={item.id}
            className={index > 0 ? "border-t border-brand-black/15" : ""}
          >
            <h3 className="m-0">
              <button
                type="button"
                id={headerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-brand-black/[0.03] sm:px-6 sm:py-5"
              >
                <span className="text-lg font-extrabold uppercase leading-none text-brand-red sm:text-xl">
                  {item.title}
                </span>
                <Chevron open={open} />
              </button>
            </h3>
            <div
              id={panelId}
              role="region"
              aria-labelledby={headerId}
              hidden={!open}
              className={open ? "block" : "hidden"}
            >
              <AccordionPanel item={item} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

function IntroBlock() {
  return (
    <div className="flex w-full max-w-[720px] flex-col items-center gap-5 text-center sm:gap-6">
      <h2 className="w-full text-[32px] font-extrabold uppercase leading-none text-brand-red lg:text-[48px]">
        Catering Menu
      </h2>
      <div className="w-full text-base leading-[1.5] text-brand-black sm:text-lg">
        <p className="font-normal">{introBody}</p>
        <p className="mt-4 mb-0 font-bold leading-[1.5]">{dessertNote}</p>
        <p className="leading-[1.5]">{desserts}</p>
      </div>
      <p className="w-full text-sm font-semibold text-brand-black/70">{pathHelper}</p>
    </div>
  );
}

function FooterBlock() {
  return (
    <div className="flex w-full max-w-[720px] flex-col items-center gap-6">
      <div className="grid w-full gap-4 sm:grid-cols-2 sm:gap-5">
        <article className="flex flex-col gap-3 rounded-[12px] border border-brand-black/15 bg-brand-tan p-5 text-left sm:p-6">
          <h3 className="text-lg font-extrabold uppercase leading-none text-brand-red sm:text-xl">
            Side Selections Include
          </h3>
          <p className="text-base font-semibold leading-[1.5] text-brand-black">
            Baked Beans, Coleslaw, Brunswick Stew, Mac &amp; Cheese, Potato
            Salad, &amp; Side Salad
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
      <div className="flex w-full flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="#catering-inquiry"
          className="inline-flex flex-1 items-center justify-center rounded-[5px] bg-brand-red px-[26px] py-5 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25]"
        >
          Request a Custom Quote
        </Link>
        <a
          href={ezCaterUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex flex-1 items-center justify-center rounded-[5px] bg-brand-black px-[26px] py-5 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#1c2730]"
        >
          Order Online
        </a>
      </div>
      <p className="w-full text-center text-sm font-semibold leading-[1.5] text-brand-black/70">
        {pathHelper}
      </p>
    </div>
  );
}

export default function CateringMenu() {
  return (
    <section
      id="catering-menu"
      className="flex w-full flex-col items-center px-5 py-12 sm:py-16 lg:py-20"
      aria-label="Catering menu"
    >
      <div className="flex w-full max-w-[720px] flex-col items-center gap-8 sm:gap-10">
        <IntroBlock />
        <PackageAccordion />
        <FooterBlock />
      </div>
    </section>
  );
}
