import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Franchise Login | Shane's Rib Shack",
  description: "Franchise partner login portal for Shane's Rib Shack.",
};

export default function FranchiseLoginPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[400px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Franchise Login
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Partner portal for Shane&rsquo;s franchise owners.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 text-center lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[600px]">
          <p className="mb-8 text-lg leading-relaxed text-brand-gray">
            Access the franchise partner portal for resources, reports, and support.
          </p>
          <Cta
            href="https://www.shanesribshack.com/franchise/login/"
            variant="red"
          >
            Go to Portal
          </Cta>
        </div>
      </section>
    </PageShell>
  );
}