import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Careers | Shane's Rib Shack",
  description:
    "Join the Shane's Rib Shack team. View open positions and apply today.",
};

const benefits = [
  "Competitive pay and tips",
  "Flexible scheduling",
  "Career growth opportunities",
  "Employee meal discounts",
  "Fun, family-oriented work environment",
];

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
        <div className="mx-auto max-w-[800px]">
          <p className="mb-8 text-center text-lg leading-relaxed text-brand-gray">
            {`At Shane's Rib Shack, we're more than a restaurant — we're a family.
            From the pit to the front counter, every role matters. We're looking
            for hardworking, friendly people who take pride in serving great BBQ.`}
          </p>

          <h2 className="mb-6 text-center text-xl font-bold uppercase text-brand-black">
            Why Work at the Shack?
          </h2>
          <ul className="mx-auto mb-10 max-w-[500px] space-y-3">
            {benefits.map((b) => (
              <li
                key={b}
                className="flex items-center gap-3 text-base text-brand-gray"
              >
                <span className="inline-block size-2 rounded-full bg-brand-red" />
                {b}
              </li>
            ))}
          </ul>

          <div className="text-center">
            <p className="mb-6 text-base leading-relaxed text-brand-gray">
              {`Ready to join the team? View open positions and apply through our
              careers portal.`}
            </p>
            <Cta
              href="https://www.shanesribshack.com/careers/"
              variant="red"
            >
              View Open Positions
            </Cta>
          </div>
        </div>
      </section>
    </PageShell>
  );
}