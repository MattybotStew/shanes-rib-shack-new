import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Shop | Shane's Rib Shack",
  description:
    "Shop Shane's Rib Shack merchandise, gift cards, and more.",
};

export default function ShopPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[400px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Shop
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Gear, gift cards, and more — show your Shack pride.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[800px]">
          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-brand-black/10 bg-brand-tan p-8 text-center">
              <h2 className="mb-3 text-lg font-bold uppercase text-brand-red">
                Gift Cards
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-brand-gray">
                {`The perfect gift for any BBQ lover. Available in any amount at
                all locations or online.`}
              </p>
              <Cta href="/gift-cards" variant="red">
                Buy Gift Cards
              </Cta>
            </div>

            <div className="rounded-lg border border-brand-black/10 bg-brand-tan p-8 text-center">
              <h2 className="mb-3 text-lg font-bold uppercase text-brand-red">
                Merchandise
              </h2>
              <p className="mb-6 text-sm leading-relaxed text-brand-gray">
                {`T-shirts, hats, and more — rep the Shack wherever you go.`}
              </p>
              <Cta
                href="https://www.shanesribshack.com/shop/"
                variant="outline"
              >
                Visit Online Store
              </Cta>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}