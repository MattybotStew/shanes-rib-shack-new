import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Franchise | Shane's Rib Shack",
  description:
    "Own a Shane's Rib Shack franchise. Learn about franchise opportunities and join the family.",
};

export default function FranchisePage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[400px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Franchise
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Bring the Shack to your community.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-8 text-center text-lg leading-relaxed text-brand-gray">
            {`Since opening our doors in 2002, Shane's Rib Shack has grown from a
            tiny roadside stand to a beloved BBQ brand with multiple locations
            across Georgia. Now you can bring the Shack to your community.`}
          </p>

          <div className="mb-10 grid gap-8 md:grid-cols-3">
            <div className="rounded-lg border border-brand-black/10 bg-brand-tan p-6 text-center">
              <h3 className="mb-2 text-base font-bold uppercase text-brand-red">
                Proven Model
              </h3>
              <p className="text-sm leading-relaxed text-brand-gray">
                {`20+ years of BBQ experience and a loyal customer base.`}
              </p>
            </div>
            <div className="rounded-lg border border-brand-black/10 bg-brand-tan p-6 text-center">
              <h3 className="mb-2 text-base font-bold uppercase text-brand-red">
                Support
              </h3>
              <p className="text-sm leading-relaxed text-brand-gray">
                {`Training, marketing, and operational support every step of the way.`}
              </p>
            </div>
            <div className="rounded-lg border border-brand-black/10 bg-brand-tan p-6 text-center">
              <h3 className="mb-2 text-base font-bold uppercase text-brand-red">
                Quality
              </h3>
              <p className="text-sm leading-relaxed text-brand-gray">
                {`A menu and recipes that customers crave — slow-smoked, made from scratch.`}
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="mb-6 text-base leading-relaxed text-brand-gray">
              {`Interested in franchise opportunities? Learn more on our franchise site.`}
            </p>
            <Cta
              href="https://www.shanesribshack.com/franchise/"
              variant="red"
            >
              Learn About Franchising
            </Cta>
          </div>
        </div>
      </section>
    </PageShell>
  );
}