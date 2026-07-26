import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";
import { ezCaterUrl } from "@/lib/ezcater";
import { menuItems, sideOptions, dessertOptions } from "@/lib/menuData";

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
    items: sideOptions.map((s) => s),
  },
  {
    title: "Desserts",
    items: dessertOptions.map((d) => d),
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

      {/* Regular Menu Grid */}
      <section className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-10 text-center text-2xl font-bold uppercase text-brand-black lg:text-3xl">
            Dine-In & Takeout Menu
          </h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {categories.map((cat) => (
              <div
                key={cat.title}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 border-b border-brand-red/20 pb-2 text-xl font-bold uppercase text-brand-red">
                  {cat.title}
                </h3>
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
        </div>
      </section>

      {/* Catering Packages Section */}
      <section className="bg-white px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <h2 className="mb-4 text-center text-2xl font-bold uppercase text-brand-black lg:text-3xl">
            Catering Packages
          </h2>
          <p className="mx-auto mb-10 max-w-2xl text-center text-base leading-relaxed text-brand-gray">
            Perfect for offices, parties, weddings, and events. Each package includes
            bread, BBQ sauce, tea, and disposableware. Add sides and desserts to complete
            your meal.
          </p>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {menuItems.map((pkg) => (
              <div
                key={pkg.id}
                className="flex flex-col rounded-lg border border-brand-black/10 bg-brand-tan p-6"
              >
                <h3 className="mb-3 text-lg font-bold uppercase text-brand-red">
                  {pkg.title}
                </h3>
                <ul className="mb-4 flex-1 space-y-1.5">
                  {pkg.kind === "package"
                    ? pkg.items.map((item, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed text-brand-gray"
                        >
                          {item}
                        </li>
                      ))
                    : pkg.lines.map((line, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed text-brand-gray"
                        >
                          {line}
                        </li>
                      ))}
                </ul>
                {pkg.choices.sideCount > 0 && (
                  <p className="mb-1 text-xs font-semibold uppercase text-brand-black">
                    Choose {pkg.choices.sideCount} side{pkg.choices.sideCount > 1 ? "s" : ""}:
                  </p>
                )}
                {pkg.choices.meatOptions && (
                  <p className="text-xs text-brand-gray">
                    Meat choice: {pkg.choices.meatOptions.join(" / ")}
                  </p>
                )}
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Cta href="/catering" variant="red">
              Order Catering
            </Cta>
          </div>
        </div>
      </section>

      {/* CTAs */}
      <section className="bg-brand-tan px-5 py-16 text-center lg:py-20">
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