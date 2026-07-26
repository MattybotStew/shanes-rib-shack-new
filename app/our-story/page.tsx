import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Our Story | Shane's Rib Shack",
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
            {`Shane's Rib Shack was born in 2002 in a tiny 400-square-foot shack in
            McDonough, Georgia. Founder Shane Thompson had a simple vision: serve
            authentic, slow-smoked BBQ that would bring people together. What started
            as a roadside stand with a single smoker quickly became a local legend.`}
          </p>
          <p>
            {`Word spread fast. People drove from all over Georgia for Shane's
            baby back ribs — fall-off-the-bone tender, kissed by hickory smoke,
            and slathered in our signature sauce. The Shack grew from that one
            location to multiple spots across the state, but the recipe never
            changed: low-and-slow, made from scratch, served with a smile.`}
          </p>
          <p>
            {`Today, Shane's Rib Shack is still family-owned and operated. Every
            rack of ribs is hand-rubbed and smoked daily. Every batch of
            Brunswick stew simmers for hours. Every guest is treated like
            family. That's the Shane's way — and it always will be.`}
          </p>
          <p className="pt-4 text-center text-lg font-bold text-brand-black">
            From our family to yours — welcome to the Shack.
          </p>
        </div>
      </section>
    </PageShell>
  );
}