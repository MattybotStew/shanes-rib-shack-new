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

      <section className="bg-white px-5 py-16 text-center lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[600px]">
          <p className="mb-8 text-lg leading-relaxed text-brand-gray">
            {`Visit our online store for Shane's merchandise and gift cards.`}
          </p>
          <Cta
            href="https://www.shanesribshack.com/shop/"
            variant="red"
          >
            Visit the Shop
          </Cta>
        </div>
      </section>
    </PageShell>
  );
}