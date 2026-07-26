import type { BlogArticle } from "@/lib/newsData";
import BlogCard from "@/components/BlogCard";

type RelatedArticlesProps = {
  articles: BlogArticle[];
};

/**
 * "Similar Reads" section — Figma DK-Blog-Article related cards grid (`6250:8087`).
 * 2 rows × 3 cards on desktop, single column on mobile.
 */
export default function RelatedArticles({ articles }: RelatedArticlesProps) {
  if (articles.length === 0) return null;

  return (
    <section className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24">
      <div className="mx-auto max-w-[1200px]">
        <h2 className="mb-10 text-center text-3xl font-extrabold uppercase text-brand-black lg:text-4xl">
          Similar Reads
        </h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      </div>
    </section>
  );
}
