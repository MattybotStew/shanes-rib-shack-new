import { asset } from "@/lib/asset";
import Cta from "@/components/Cta";
import type { BlogArticle } from "@/lib/newsData";

type BlogCardProps = {
  article: BlogArticle;
};

/**
 * Blog listing card — Figma DK-Blog Card1 (`6250:7921`).
 * 320×180 image, optional "Featured" tag, title, excerpt, CTA.
 */
export default function BlogCard({ article }: BlogCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="relative aspect-[16/9] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(article.image)}
          alt={article.imageAlt}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        {article.featured && (
          <span className="absolute left-4 top-4 rounded bg-brand-red px-2.5 py-1 text-xs font-bold uppercase text-white">
            Featured
          </span>
        )}
      </div>
      <div className="flex flex-1 flex-col p-5">
        <h2 className="mb-2 text-lg font-bold uppercase leading-tight text-brand-black lg:text-xl">
          {article.title}
        </h2>
        <p className="mb-4 flex-1 text-sm leading-relaxed text-brand-gray">
          {article.excerpt}
        </p>
        <div>
          <Cta
            href={`/news-events/${article.slug}/`}
            variant="red"
            className="text-xs"
          >
            Read More
          </Cta>
        </div>
      </div>
    </article>
  );
}
