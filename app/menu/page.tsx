import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";
import { ezCaterUrl } from "@/lib/ezcater";

export const metadata: Metadata = {
  title: "Menu | Shane's Rib Shack",
  description:
    "Slow-smoked baby back ribs, hand-chopped BBQ pork, chicken, wings, and classic Southern sides. View our full menu and order online.",
};

const categories = [
  {
    title: "Ribs & Combos",
    items: [
      "Full Rack Baby Back Ribs",
      "Half Rack Baby Back Ribs",
      "Rib & Chicken Combo",
      "Rib & Pork Combo",
    ],
  },
  {
    title: "BBQ Pork & Chicken",
    items: [
      "Chopped Pork Plate",
      "Chopped Chicken Plate",
      "Pork & Chicken Combo",
      "BBQ Sandwich",
    ],
  },
  {
    title: "Wings & More",
    items: [
      "6-Piece Wings",
      "12-Piece Wings",
      "Wing & Fry Basket",
      "Chicken Tender Basket",
    ],
  },
  {
    title: "Southern Sides",
    items: [
      "Baked Beans",
      "Coleslaw",
      "Brunswick Stew",
      "Mac & Cheese",
      "Potato Salad",
      "Side Salad",
    ],
  },
  {
    title: "Desserts",
    items: [
      "Homemade Peach Cobbler",
      "Brownies",
      "Cookies",
    ],
  },
  {
    title: "Drinks",
    items: [
      "Sweet Tea",
      "Unsweet Tea",
      "Lemonade",
      "Soft Drinks",
      "Bottled Water",
    ],
  },
];

export default function MenuPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[400px]">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-50"
          style={{ backgroundImage: `url(${asset("/images/hero-catering.jpg")})` }}
        />
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Our Menu
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Slow-smoked, hand-chopped, and made from scratch. Every bite tastes like home.
          </p>
        </div>
      </section>

      {/* Menu Grid */}
      <section className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="rounded-lg bg-white p-6 shadow-sm"
            >
              <h2 className="mb-4 border-b border-brand-red/20 pb-2 text-xl font-bold uppercase text-brand-red">
                {cat.title}
              </h2>
              <ul className="space-y-2">
                {cat.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-semibold text-brand-black"
                  >
                    <span className="inline-block size-1.5 rounded-full bg-brand-red" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* CTAs */}
      <section className="bg-white px-5 py-16 text-center lg:py-20">
        <div className="mx-auto max-w-[600px]">
          <h2 className="mb-4 text-2xl font-bold uppercase text-brand-black lg:text-3xl">
            Ready to Eat?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-brand-gray">
            Order online for pickup or delivery, or book catering for your next event.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Cta href={ezCaterUrl()} variant="red">
              Order Online
            </Cta>
            <Cta href="/catering" variant="outline">
              View Catering Menu
            </Cta>
          </div>
        </div>
      </section>
    </PageShell>
  );
}