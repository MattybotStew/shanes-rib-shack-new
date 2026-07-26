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
            terms "we", "us", and "our" refer to Shane's Rib Shack. Shane's Rib Shack
            offers this website, including all information, tools, and services available
            from this site to you, the user, conditioned upon your acceptance of all terms,
            conditions, policies, and notices stated here.`}
          </p>
          <p>
            {`By visiting our site and/or purchasing something from us, you engage in our
            "Service" and agree to be bound by the following terms and conditions
            ("Terms of Service", "Terms"), including those additional terms and conditions
            and policies referenced herein.`}
          </p>
          <h2 className="pt-4 text-base font-bold uppercase text-brand-black">
            General Conditions
          </h2>
          <p>
            {`We reserve the right to refuse service to anyone for any reason at any time.
            You agree not to reproduce, duplicate, copy, sell, resell, or exploit any
            portion of the Service, use of the Service, or access to the Service without
            express written permission.`}
          </p>
          <h2 className="pt-4 text-base font-bold uppercase text-brand-black">
            Modifications to the Service and Prices
          </h2>
          <p>
            {`Prices for our products are subject to change without notice. We reserve the
            right at any time to modify or discontinue the Service without notice.`}
          </p>
          <h2 className="pt-4 text-base font-bold uppercase text-brand-black">
            Modifications to the Terms
          </h2>
          <p>
            {`We reserve the right to update these terms at any time. It is your
            responsibility to check this page periodically for changes. Your continued
            use of the website after any changes constitutes acceptance of those changes.`}
          </p>
          <h2 className="pt-4 text-base font-bold uppercase text-brand-black">
            Contact Information
          </h2>
          <p>
            {`Questions about the Terms of Service should be sent to us at
            catering@shanesribshack.com.`}
          </p>
        </div>
      </section>
    </PageShell>
  );
}