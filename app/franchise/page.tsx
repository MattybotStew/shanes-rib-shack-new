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
        <div className="mx-auto max-w-[800px] text-center">
          <p className="mb-8 text-lg leading-relaxed text-brand-gray">
            {`Interested in owning a Shane's Rib Shack? Learn more about franchise
            opportunities and take the first step toward joining the family.`}
          </p>
          <Cta
            href="https://www.shanesribshack.com/franchise/"
            variant="red"
          >
            Learn About Franchising
          </Cta>
        </div>
      </section>
    </PageShell>
  );
}