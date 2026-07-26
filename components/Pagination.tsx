"use client";

import Link from "next/link";

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  basePath?: string;
};

/**
 * Blog pagination — Figma DK-Blog page links (`6250:8269`).
 * Prev / numbered pages / Next. Two-row grid on mobile.
 * Accepts page numbers directly (no useSearchParams) for static export compat.
 */
export default function Pagination({
  currentPage,
  totalPages,
  basePath = "",
}: PaginationProps) {
  function pageHref(page: number) {
    if (page <= 1) return basePath || "/news-events/";
    return `${basePath || "/news-events/"}?page=${page}`;
  }

  // Generate page numbers (show max 7, ellipsis for gaps)
  const pages: (number | "...")[] = [];
  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) pages.push(i);
  } else {
    pages.push(1);
    if (currentPage > 3) pages.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) pages.push(i);
    if (currentPage < totalPages - 2) pages.push("...");
    pages.push(totalPages);
  }

  const linkBase =
    "inline-flex size-[43px] items-center justify-center rounded text-sm font-bold transition-colors";
  const activeLink = `${linkBase} bg-brand-red text-white`;
  const inactiveLink = `${linkBase} text-brand-black hover:bg-brand-cream`;

  return (
    <nav aria-label="Pagination" className="flex flex-wrap justify-center gap-0">
      {currentPage > 1 && (
        <Link
          href={pageHref(currentPage - 1)}
          className={`${inactiveLink} w-auto px-4`}
        >
          Prev
        </Link>
      )}
      {pages.map((page, i) =>
        page === "..." ? (
          <span
            key={`ellipsis-${i}`}
            className="inline-flex size-[43px] items-center justify-center text-sm text-brand-gray"
          >
            ...
          </span>
        ) : (
          <Link
            key={page}
            href={pageHref(page)}
            className={page === currentPage ? activeLink : inactiveLink}
            aria-current={page === currentPage ? "page" : undefined}
          >
            {page}
          </Link>
        ),
      )}
      {currentPage < totalPages && (
        <Link
          href={pageHref(currentPage + 1)}
          className={`${inactiveLink} w-auto px-4`}
        >
          Next
        </Link>
      )}
    </nav>
  );
}
