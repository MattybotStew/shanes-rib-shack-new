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
      className="flex items-center justify-center rounded-[50px] bg-brand-red p-4 transition-opacity hover:bg-[#a01b25] disabled:cursor-not-allowed disabled:opacity-40"
    >
      <span
        className={`relative block size-6 ${
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
    const step = card ? card.clientWidth + 30 : el.clientWidth;
    el.scrollBy({
      left: direction === "next" ? step : -step,
      behavior: "smooth",
    });
  };

  return (
    <section
      className="flex w-full flex-col items-center px-5 py-10 lg:py-[100px]"
      aria-labelledby="shack-news-heading"
    >
      <div className="flex w-full max-w-[1200px] flex-col gap-5 lg:gap-10">
        <div className="flex flex-wrap items-center justify-between gap-5">
          <h2
            id="shack-news-heading"
            className="text-[32px] font-extrabold uppercase leading-none text-brand-black sm:text-[36px] lg:text-[48px]"
          >
            Latest Shack News
          </h2>
          <div className="flex shrink-0 items-start gap-3">
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

        <div className={dashedRule} />

        <ul
          ref={scroller}
          onScroll={syncEdges}
          className="flex snap-x snap-mandatory list-none gap-[30px] overflow-x-auto scroll-smooth [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        >
          {newsItems.map((item) => (
            <li
              key={item.href}
              className="flex w-[290px] shrink-0 snap-start flex-col items-stretch gap-[30px] rounded-[12px] bg-brand-red px-[30px] py-5 sm:w-[460px] sm:flex-row sm:items-center sm:gap-5 lg:w-[534px] lg:gap-[30px]"
            >
              <div className="relative h-[198px] w-full shrink-0 overflow-hidden rounded-[10px] sm:aspect-square sm:h-auto sm:w-[160px] lg:w-[198px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(item.image)}
                  alt={item.imageAlt}
                  className="absolute inset-0 size-full object-cover"
                />
              </div>
              <div className="flex min-w-0 flex-1 flex-col items-start justify-center gap-6">
                <h3 className="w-full text-2xl font-semibold uppercase leading-none text-white">
                  {item.title}
                </h3>
                <p className="w-full text-[13px] font-semibold leading-[1.5] text-white">
                  {item.excerpt}
                </p>
                <Cta href={item.href} variant="white">
                  Read More
                </Cta>
              </div>
            </li>
          ))}
        </ul>

        <div className={dashedRule} />
      </div>
    </section>
  );
}
