import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Shane's Rib Shack | Our Story",
  description:
    "Shane's Rib Shack started in a tiny shack in McDonough, GA. Today we're still serving the same slow-smoked BBQ that made us famous.",
};

export default function OurStoryPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[400px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Our Story
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            It started with a smoker, a dream, and a whole lot of BBQ.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[800px] space-y-6 text-base leading-relaxed text-brand-gray">
          <p>
            {`Shane's Rib Shack was born in a tiny 400-square-foot shack in
            McDonough, Georgia. What started as one man's passion for
            slow-smoked BBQ grew into a beloved local institution — and today,
            we serve our signature ribs, chopped pork, and Southern sides at
            locations across Georgia.`}
          </p>
          <p>
            {`Every rack of ribs is slow-smoked to perfection over hickory wood.
            Every batch of Brunswick stew is made from scratch. Every guest is
            treated like family. That's the Shane's way.`}
          </p>
          <p>
            From our family to yours — welcome to the Shack.
          </p>
        </div>
      </section>
    </PageShell>
  );
}