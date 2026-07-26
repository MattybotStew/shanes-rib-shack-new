import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageShell from "@/components/PageShell";
import { asset } from "@/lib/asset";
import {
  blogArticles,
  getBlogArticle,
  getRelatedArticles,
} from "@/lib/newsData";
import Cta from "@/components/Cta";
import ShareButtons from "@/components/ShareButtons";
import RelatedArticles from "@/components/RelatedArticles";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

/* ── Static generation ── */

export function generateStaticParams() {
  return blogArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getBlogArticle(slug);
  if (!article) return { title: "Article Not Found" };

  return {
    title: `${article.title} | Shane's Rib Shack`,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      images: [article.image],
    },
  };
}

/* ── Page ── */

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getBlogArticle(slug);

  if (!article) notFound();

  const related = getRelatedArticles(slug, 6);

  return (
    <PageShell>
      {/* Hero image — full-bleed */}
      <section className="relative flex min-h-[350px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[480px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(article.image)}
          alt={article.imageAlt}
          className="absolute inset-0 size-full object-cover opacity-50"
        />
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <p className="mb-2 text-sm font-bold uppercase tracking-wider text-brand-gold">
            {article.date}
          </p>
          {article.category && (
            <span className="mb-4 inline-block rounded bg-brand-red px-3 py-1 text-xs font-bold uppercase text-white">
              {article.category}
            </span>
          )}
          <h1 className="mx-auto max-w-[800px] text-3xl font-extrabold uppercase leading-tight lg:text-4xl">
            {article.title}
          </h1>
        </div>
      </section>

      {/* Article content area */}
      <article className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[1040px]">
          {/* Header row: excerpt + share */}
          <div className="mb-10 flex flex-col gap-8 lg:flex-row lg:items-start">
            <div className="flex-1">
              <p className="mb-6 text-lg leading-relaxed text-brand-gray">
                {article.excerpt}
              </p>
              <ShareButtons
                path={`/news-events/${article.slug}/`}
                title={article.title}
              />
            </div>
          </div>

          {/* Horizontal divider */}
          <hr className="mb-10 border-t-2 border-brand-cream" />

          {/* Article body (HTML content) */}
          <div
            className="prose prose-lg mx-auto max-w-[800px] prose-headings:font-extrabold prose-headings:uppercase prose-headings:text-brand-black prose-p:text-brand-gray prose-a:text-brand-red prose-a:underline prose-li:text-brand-gray prose-strong:text-brand-black"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          {/* Mid-article Big CTA */}
          <div className="my-12 flex justify-center">
            <Cta
              href="/catering/"
              variant="red"
              className="px-10 py-5 text-lg"
            >
              Get a Catering Quote
            </Cta>
          </div>

          {/* Bottom share */}
          <div className="mb-10 flex justify-center">
            <ShareButtons
              path={`/news-events/${article.slug}/`}
              title={article.title}
            />
          </div>

          {/* Back to all news */}
          <div className="text-center">
            <Cta href="/news-events/" variant="outline">
              Back to News &amp; Events
            </Cta>
          </div>
        </div>
      </article>

      {/* Related articles */}
      <RelatedArticles articles={related} />
    </PageShell>
  );
}
