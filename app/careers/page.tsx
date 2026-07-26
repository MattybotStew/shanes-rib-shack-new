import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Careers | Shane's Rib Shack",
  description:
    "Join the Shane's Rib Shack team. View open positions and apply today.",
};

export default function CareersPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[400px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Careers
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Join a team that feels like family.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[800px] text-center">
          <p className="mb-8 text-lg leading-relaxed text-brand-gray">
            {`We're always looking for passionate people to join the Shane's family.
            From the kitchen to the front counter, every role makes a difference.`}
          </p>
          <Cta
            href="https://www.shanesribshack.com/careers/"
            variant="red"
          >
            View Open Positions
          </Cta>
        </div>
      </section>
    </PageShell>
  );
}