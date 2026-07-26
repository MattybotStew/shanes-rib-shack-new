import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { asset } from "@/lib/asset";
import Cta from "@/components/Cta";

export const metadata: Metadata = {
  title: "Thank You | Shane's Rib Shack",
  description: "Your submission has been received. Thank you!",
};

export default function ThankYouPage() {
  return (
    <PageShell>
      {/* Hero */}
      <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[650px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/thank-you/hero.jpg")}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-60"
          aria-hidden
        />
        <div className="relative z-10 mx-auto max-w-[600px] px-5 py-16 text-center text-white lg:py-24">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-brand-red">
            <svg
              className="size-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Thank You!
          </h1>
          <p className="text-lg leading-relaxed text-white/80">
            Your submission has been received. Our team will review your request
            and get back to you shortly.
          </p>
        </div>
      </section>

      {/* Next steps */}
      <section className="bg-brand-tan px-5 py-16 text-center lg:py-24">
        <div className="mx-auto max-w-[600px]">
          <h2 className="mb-4 text-2xl font-extrabold uppercase text-brand-black">
            What Happens Next?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-brand-gray">
            Our team will review your request and follow up shortly. In the
            meantime, feel free to explore our menu or visit your nearest Shack.
          </p>
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Cta href="/menu/" variant="red">
              Explore Our Menu
            </Cta>
            <Cta href="/locations/" variant="outline">
              Find a Shack
            </Cta>
            <Cta href="/" variant="black">
              Back to Home
            </Cta>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
