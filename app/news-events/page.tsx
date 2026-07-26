import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { asset } from "@/lib/asset";
import { blogArticles } from "@/lib/newsData";
import BlogGrid from "@/components/BlogGrid";

export const metadata: Metadata = {
  title: "News & Events | Shane's Rib Shack",
  description:
    "Stay up to date with the latest news, events, promotions, and BBQ inspiration from Shane's Rib Shack.",
};

export default function NewsEventsPage() {
  const featured = blogArticles.filter((a) => a.featured);
  const rest = blogArticles.filter((a) => !a.featured);
  const all = [...featured, ...rest];

  return (
    <PageShell>
      <section className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[480px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/news-events/hero.jpg")}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-50"
          aria-hidden
        />
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            News &amp; Events
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            The latest from the Shack — BBQ tips, community stories, new menu
            items, and more.
          </p>
        </div>
      </section>

      <section className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <BlogGrid articles={all} />
        </div>
      </section>
    </PageShell>
  );
}
