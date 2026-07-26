import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";
import { ezCaterUrl } from "@/lib/ezcater";

export const metadata: Metadata = {
  title: "Menu | Shane's Rib Shack | Ribs, BBQ, Wings & Family Meals",
  description:
    "See our full BBQ menu including ribs, wings, sandwiches, plates, sides, kids meals, and family bundles. Order online or plan your next meal.",
};

const menuSections = [
  {
    title: "Game Day Meals",
    items: [
      "50 Chicken Tenders + 5 Large Sides + 10 Sauces + 50 Cookies",
      "Game Day Wings Bundle (50 pcs)",
      "Family Feast (serves 10-12)",
    ],
  },
  {
    title: "Plates",
    items: [
      "Chopped Pork Plate (smoked 12+ hrs)",
      "Chopped Chicken Plate",
      "BBQ Sandwich Plate",
      "2-Meat Combo Plate (pork + chicken)",
      "3-Meat Combo Plate (ribs + pork + chicken)",
      "Rib Plate (half rack)",
      "Rib Plate (full rack)",
    ],
  },
  {
    title: "Sandwiches",
    items: [
      "Big Dad Sandwich (chopped pork on Texas toast)",
      "BBQ Chicken Sandwich",
      "Pulled Chicken Sandwich",
    ],
  },
  {
    title: "Burgers",
    items: [
      "Shack Burger",
      "Cheese Shack Burger",
      "Bacon Shack Burger",
      "Beyond Burger",
    ],
  },
  {
    title: "Tenders",
    items: [
      "4-Pc Chicken Tenders",
      "6-Pc Chicken Tenders",
      "8-Pc Chicken Tenders",
      "12-Pc Chicken Tenders",
    ],
  },
  {
    title: "Wings",
    items: [
      "6-Pc Smoked Wings",
      "10-Pc Smoked Wings",
      "15-Pc Smoked Wings",
      "20-Pc Smoked Wings",
      "50-Pc Smoked Wings",
    ],
  },
  {
    title: "Shack Baskets",
    items: [
      "Chicken Tender Basket",
      "Wing & Fry Basket",
      "Popcorn Shrimp Basket",
      "Fish Basket",
    ],
  },
  {
    title: "Shack Potatoes",
    items: [
      "Pork Shack Potato",
      "Chicken Shack Potato",
      "Pork & Chicken Shack Potato",
    ],
  },
  {
    title: "Shack Fries",
    items: [
      "Pork Shack Fries",
      "Chicken Shack Fries",
      "Pork & Chicken Shack Fries",
      "Loaded Cheese Fries",
    ],
  },
  {
    title: "Shack Salads",
    items: [
      "Grilled Chicken Salad",
      "Pulled Pork Salad",
    ],
  },
  {
    title: "Kids Meals",
    items: [
      "Kids Chicken Tenders (2 pc)",
      "Kids BBQ Sandwich",
      "Kids Burger",
      "Kids Grilled Cheese",
    ],
  },
  {
    title: "Meat Only",
    items: [
      "Full Rack Baby Back Ribs",
      "Half Rack Baby Back Ribs",
      "Chopped Pork (lb)",
      "Chopped Chicken (lb)",
      "Smoked Wings (per piece)",
    ],
  },
  {
    title: "Family Meals",
    items: [
      "Family Pack (serves 4-6)",
      "Family Feast (serves 10-12)",
    ],
  },
  {
    title: "Sides",
    items: [
      "Baked Beans",
      "Coleslaw",
      "Brunswick Stew",
      "Mac & Cheese",
      "Potato Salad",
      "Side Salad",
      "French Fries",
      "Onion Rings",
      "Fried Okra",
      "Green Beans",
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
  {
    title: "Desserts",
    items: [
      "Homemade Peach Cobbler",
      "Brownies",
      "Cookies",
    ],
  },
];

export default function MenuPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[450px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-[42px] font-extrabold uppercase leading-tight lg:text-[64px]">
            Menu
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Slow-smoked ribs, hand-chopped pork, wings, and Southern sides — made from scratch every day.
          </p>
        </div>
      </section>

      {/* Full Menu Grid */}
      <section className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {menuSections.map((section) => (
              <div
                key={section.title}
                className="rounded-lg bg-white p-6 shadow-sm"
              >
                <h2 className="mb-4 border-b-2 border-brand-red pb-2 text-lg font-extrabold uppercase text-brand-red">
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm font-medium text-brand-black leading-snug"
                    >
                      <span className="mt-[5px] inline-block size-1.5 shrink-0 rounded-full bg-brand-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="bg-white px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-4 text-[32px] font-extrabold uppercase text-brand-black">
            Catering & Events
          </h2>
          <p className="mb-8 text-base leading-relaxed text-brand-gray">
            {`Planning a party, office lunch, or wedding? We've got BBQ packages that
            feed a crowd. Choose from One Meat, Two Meat, Three Meat, or Boxed Lunches.`}
          </p>
          <Cta href="/catering" variant="red">
            View Catering Menu
          </Cta>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand-tan px-5 py-16 text-center lg:py-20">
        <div className="mx-auto max-w-[600px]">
          <h2 className="mb-4 text-[32px] font-extrabold uppercase text-brand-black">
            Ready to Eat?
          </h2>
          <p className="mb-8 text-base leading-relaxed text-brand-gray">
            Order online for pickup or delivery.
          </p>
          <Cta href={ezCaterUrl()} variant="red">
            Order Now
          </Cta>
        </div>
      </section>
    </PageShell>
  );
}