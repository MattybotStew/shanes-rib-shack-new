"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";
import { newsItems } from "@/lib/newsData";

const dashedRule = "h-0 w-full border-t-2 border-dashed border-brand-black/25";

function ArrowButton({
  direction,
  disabled,
  onClick,
}: {
  direction: "prev" | "next";
  disabled: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={direction === "prev" ? "Previous news" : "Next news"}
      className="flex size-[52px] items-center justify-center rounded-full bg-brand-red transition-opacity hover:bg-[#a01b25] disabled:cursor-not-allowed disabled:opacity-40"
    >
      <span
        className={`relative block size-5 ${
          direction === "prev" ? "rotate-180" : ""
        }`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/arrow-right.svg")}
          alt=""
          className="absolute inset-0 block size-full"
          aria-hidden
        />
      </span>
    </button>
  );
}

export default function ShackNews() {
  const scroller = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  const syncEdges = useCallback(() => {
    const el = scroller.current;
    if (!el) return;
    const maxScroll = el.scrollWidth - el.clientWidth;
    setAtStart(el.scrollLeft <= 1);
    setAtEnd(maxScroll <= 1 || el.scrollLeft >= maxScroll - 1);
  }, []);

  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    const observer = new ResizeObserver(syncEdges);
    observer.observe(el);
    return () => observer.disconnect();
  }, [syncEdges]);

  const scrollByCard = (direction: "prev" | "next") => {
    const el = scroller.current;
    if (!el) return;
    const card = el.querySelector("li");
    const step = card ? card.clientWidth + 24 : el.clientWidth;
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="flex w-full flex-col items-center bg-brand-tan px-6 py-12 lg:py-[72px]"
      aria-labelledby="shack-news-heading"
    >
      <div className="flex w-full max-w-[1230px] flex-col">
        <div className="mb-7 flex flex-wrap items-center justify-between gap-4">
          <h2
            id="shack-news-heading"
            className="text-[28px] font-extrabold uppercase leading-none text-brand-black sm:text-[36px] lg:text-[44px]"
          >
            Latest Shack News
          </h2>
          <div className="flex shrink-0 gap-3">
            <ArrowButton
              direction="prev"
              disabled={atStart}
              onClick={() => scrollByCard("prev")}
            />
            <ArrowButton
              direction="next"
              disabled={atEnd}
              onClick={() => scrollByCard("next")}
            />
          </div>
        </div>

        <div className={`${dashedRule} mb-8`} />

        <ul
          ref={scroller}
          onScroll={syncEdges}
          className="flex snap-x snap-mandatory list-none gap-6 overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {newsItems.map((item) => (
            <li
              key={item.href}
              className="w-[min(100%,380px)] shrink-0 snap-start sm:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)]"
            >
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col overflow-hidden rounded-[12px] border border-brand-cream bg-white text-brand-black transition-transform duration-150 hover:-translate-y-0.5 hover:shadow-[0_10px_24px_rgba(0,0,0,0.08)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
              >
                <div className="aspect-[1900/1080] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset(item.image)}
                    alt={item.imageAlt}
                    className="size-full object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col p-[18px]">
                  <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.04em] text-brand-red">
                    {item.category}
                    <span className="font-semibold normal-case tracking-normal text-brand-gray">
                      {" "}
                      · {item.date}
                    </span>
                  </p>
                  <h3 className="mb-2 flex-1 text-sm font-bold uppercase leading-[1.35]">
                    {item.title}
                  </h3>
                  <p className="mb-4 line-clamp-2 text-[13px] leading-[1.55] text-brand-gray">
                    {item.excerpt}
                  </p>
                  <span className="inline-flex self-start rounded-[5px] bg-brand-red px-4 py-[9px] text-xs font-bold uppercase text-white group-hover:bg-[#a01b25]">
                    Read More
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-9 flex justify-center">
          <Cta href="/news-events/" className="px-7 py-3.5 text-[13px]">
            View All News
          </Cta>
        </div>
      </div>
    </section>
  );
}
