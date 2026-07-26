import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Privacy Policy | Shane's Rib Shack",
  description: "Privacy policy for Shane's Rib Shack website.",
};

export default function PrivacyPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[200px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[250px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-20">
          <h1 className="text-3xl font-extrabold uppercase leading-tight lg:text-4xl">
            Privacy Policy
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[800px] space-y-4 text-sm leading-relaxed text-brand-gray">
          <p>
            {`This Privacy Policy describes how Shane's Rib Shack collects, uses, and
            discloses your information when you visit our website.`}
          </p>
          <h2 className="pt-4 text-base font-bold uppercase text-brand-black">
            Information We Collect
          </h2>
          <p>
            {`We may collect personal information such as your name, email address,
            phone number, and location data when you fill out forms on our site.`}
          </p>
          <h2 className="pt-4 text-base font-bold uppercase text-brand-black">
            How We Use Your Information
          </h2>
          <p>
            {`We use your information to respond to inquiries, process catering
            requests, and improve our services. We do not sell your personal
            information to third parties.`}
          </p>
          <h2 className="pt-4 text-base font-bold uppercase text-brand-black">
            Contact
          </h2>
          <p>
            {`If you have questions about this policy, please contact us at
            catering@shanesribshack.com.`}
          </p>
        </div>
      </section>
    </PageShell>
  );
}