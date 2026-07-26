import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Terms of Use | Shane's Rib Shack",
  description: "Terms of use for Shane's Rib Shack website.",
};

export default function TermsPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[200px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[250px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-20">
          <h1 className="text-3xl font-extrabold uppercase leading-tight lg:text-4xl">
            Terms of Use
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[800px] space-y-4 text-sm leading-relaxed text-brand-gray">
          <p>
            {`This website is operated by Shane's Rib Shack. Throughout the site, the
            terms "we", "us", and "our" refer to Shane's Rib Shack.`}
          </p>
          <p>
            {`By visiting our site and/or purchasing something from us, you engage in
            our "Service" and agree to be bound by the following terms and conditions.`}
          </p>
          <h2 className="pt-4 text-base font-bold uppercase text-brand-black">
            General Conditions
          </h2>
          <p>
            {`We reserve the right to refuse service to anyone for any reason at any
            time. You agree not to reproduce, duplicate, copy, sell, resell, or
            exploit any portion of the Service without express written permission.`}
          </p>
          <h2 className="pt-4 text-base font-bold uppercase text-brand-black">
            Modifications
          </h2>
          <p>
            {`We reserve the right to update these terms at any time. It is your
            responsibility to check this page periodically for changes.`}
          </p>
        </div>
      </section>
    </PageShell>
  );
}