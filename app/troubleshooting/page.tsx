import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Troubleshooting | Shane's Rib Shack",
  description:
    "Troubleshooting help for Shane's Rib Shack online ordering, app, and website.",
};

export default function TroubleshootingPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[200px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[250px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-20">
          <h1 className="text-3xl font-extrabold uppercase leading-tight lg:text-4xl">
            Troubleshooting
          </h1>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[800px] space-y-6 text-sm leading-relaxed text-brand-gray">
          <div className="rounded-lg bg-brand-tan p-6">
            <h2 className="mb-2 text-base font-bold uppercase text-brand-black">
              Online Ordering Issues
            </h2>
            <p>
              {`If you're having trouble placing an order, try clearing your browser
              cache or using a different browser. You can also call your nearest
              location to place an order by phone.`}
            </p>
          </div>

          <div className="rounded-lg bg-brand-tan p-6">
            <h2 className="mb-2 text-base font-bold uppercase text-brand-black">
              App Issues
            </h2>
            <p>
              {`Make sure you have the latest version of the Shane's Rib Shack app
              installed. Try uninstalling and reinstalling if you experience crashes
              or login issues.`}
            </p>
          </div>

          <div className="rounded-lg bg-brand-tan p-6">
            <h2 className="mb-2 text-base font-bold uppercase text-brand-black">
              Still Need Help?
            </h2>
            <p>
              {`Contact us at catering@shanesribshack.com or call (770) 416-6606.`}
            </p>
          </div>
        </div>
      </section>
    </PageShell>
  );
}