"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import type { BlogArticle } from "@/lib/newsData";
import BlogCard from "@/components/BlogCard";
import Pagination from "@/components/Pagination";

const PER_PAGE = 6;

function BlogGridInner({ articles }: { articles: BlogArticle[] }) {
  const searchParams = useSearchParams();
  const totalPages = Math.max(1, Math.ceil(articles.length / PER_PAGE));
  const rawPage = Number(searchParams.get("page")) || 1;
  const page = Math.min(Math.max(1, rawPage), totalPages);
  const start = (page - 1) * PER_PAGE;
  const displayed = articles.slice(start, start + PER_PAGE);

  return (
    <>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {displayed.map((article) => (
          <BlogCard key={article.slug} article={article} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="mt-12">
          <Pagination currentPage={page} totalPages={totalPages} />
        </div>
      )}
    </>
  );
}

export default function BlogGrid({ articles }: { articles: BlogArticle[] }) {
  return (
    <Suspense
      fallback={
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, PER_PAGE).map((article) => (
            <BlogCard key={article.slug} article={article} />
          ))}
        </div>
      }
    >
      <BlogGridInner articles={articles} />
    </Suspense>
  );
}
