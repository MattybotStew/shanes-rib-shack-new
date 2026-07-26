import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";
import { newsItems } from "@/lib/newsData";

export const metadata: Metadata = {
  title: "News & Events | Shane's Rib Shack",
  description:
    "The latest news, events, and promotions from Shane's Rib Shack.",
};

export default function NewsEventsPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[300px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[400px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            News & Events
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Stay up to date with everything happening at the Shack.
          </p>
        </div>
      </section>

      <section className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[900px]">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {newsItems.map((item) => (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={asset(item.image)}
                    alt={item.imageAlt}
                    className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-5">
                  <h2 className="mb-2 text-lg font-bold uppercase text-brand-black">
                    {item.title}
                  </h2>
                  <p className="mb-3 text-sm leading-relaxed text-brand-gray">
                    {item.excerpt}
                  </p>
                  <span className="text-sm font-bold uppercase text-brand-red group-hover:underline">
                    Read More
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}