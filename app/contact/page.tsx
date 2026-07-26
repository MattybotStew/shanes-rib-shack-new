import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Contact | Shane's Rib Shack",
  description:
    "Get in touch with Shane's Rib Shack. Find phone numbers, email, and location information.",
};

export default function ContactPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[400px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Contact Us
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            {`We'd love to hear from you.`}
          </p>
        </div>
      </section>

      <section className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[600px] space-y-8">
          <div className="rounded-lg bg-white p-8 text-center shadow-sm">
            <h2 className="mb-2 text-xl font-bold uppercase text-brand-black">
              Catering Inquiries
            </h2>
            <p className="mb-1 text-brand-gray">Email: catering@shanesribshack.com</p>
            <p className="text-brand-gray">Phone: (770) 416-6606</p>
            <p className="mt-4 text-sm text-brand-gray">
              {`We typically respond within 1 business day. For rush orders, please call.`}
            </p>
          </div>

          <div className="rounded-lg bg-white p-8 text-center shadow-sm">
            <h2 className="mb-2 text-xl font-bold uppercase text-brand-black">
              General Inquiries
            </h2>
            <p className="mb-4 text-brand-gray">
              Visit your nearest location or reach out through our social channels.
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://facebook.com/ShanesRibShack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase text-brand-red hover:underline"
              >
                Facebook
              </a>
              <a
                href="https://instagram.com/shanesribshack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase text-brand-red hover:underline"
              >
                Instagram
              </a>
              <a
                href="https://youtube.com/@ShanesRibShack"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-bold uppercase text-brand-red hover:underline"
              >
                YouTube
              </a>
            </div>
          </div>

          <div className="rounded-lg bg-white p-8 text-center shadow-sm">
            <h2 className="mb-2 text-xl font-bold uppercase text-brand-black">
              Locations
            </h2>
            <p className="mb-4 text-brand-gray">
              Find hours, address, and contact info for your nearest shack.
            </p>
            <a
              href="/locations"
              className="text-sm font-bold uppercase text-brand-red hover:underline"
            >
              View All Locations &rarr;
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}