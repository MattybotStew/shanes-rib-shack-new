import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";
import { ezCaterUrl } from "@/lib/ezcater";

export const metadata: Metadata = {
  title: "Order Online | Shane's Rib Shack",
  description:
    "Order Shane's Rib Shack online for pickup or delivery. Slow-smoked BBQ, ribs, and Southern sides.",
};

export default function OrderPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[400px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Order Online
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Get your BBQ fix — order pickup or delivery today.
          </p>
        </div>
      </section>

      <section className="bg-white px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[800px]">
          <div className="mx-auto mb-12 max-w-[600px] text-center">
            <h2 className="mb-4 text-2xl font-bold uppercase text-brand-black lg:text-3xl">
              Choose How to Order
            </h2>
            <p className="text-base leading-relaxed text-brand-gray">
              {`Order through ezCater for delivery or find your nearest shack for
              pickup. You can also call any location to place an order by phone.`}
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            <div className="rounded-lg border border-brand-black/10 bg-brand-tan p-8 text-center">
              <h3 className="mb-3 text-lg font-bold uppercase text-brand-red">
                Delivery
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-brand-gray">
                {`Order through ezCater for delivery to your home or office. Large
                catering orders welcome.`}
              </p>
              <Cta href={ezCaterUrl()} variant="red">
                Order Delivery
              </Cta>
            </div>

            <div className="rounded-lg border border-brand-black/10 bg-brand-tan p-8 text-center">
              <h3 className="mb-3 text-lg font-bold uppercase text-brand-red">
                Pickup
              </h3>
              <p className="mb-6 text-sm leading-relaxed text-brand-gray">
                {`Find your nearest Shane's Rib Shack and order for pickup. Just
                walk in and smell the smoke.`}
              </p>
              <Cta href="/locations" variant="outline">
                Find a Location
              </Cta>
            </div>
          </div>
        </div>
      </section>
    </PageShell>
  );
}