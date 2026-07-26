import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import GiftCardPromo from "@/components/GiftCardPromo";

export const metadata: Metadata = {
  title: "Gift Cards | Shane's Rib Shack",
  description:
    "Purchase Shane's Rib Shack gift cards for friends, family, and coworkers.",
};

export default function GiftCardsPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[250px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[350px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Gift Cards
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            The perfect gift for any BBQ lover.
          </p>
        </div>
      </section>
      <GiftCardPromo />
    </PageShell>
  );
}