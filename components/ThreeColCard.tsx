import { asset } from "@/lib/asset";
import Cta from "@/components/Cta";
import type { ThreeColItem } from "@/components/ThreeColGrid";

type ThreeColCardProps = {
  item: ThreeColItem;
};

/**
 * 3-column grid card — Figma 3-col Card1 (`6478:16371`).
 * Image + title + CTA button. Used in reusable 3-col grids.
 */
export default function ThreeColCard({ item }: ThreeColCardProps) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="aspect-[16/10] overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(item.image)}
          alt={item.imageAlt}
          className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col items-start gap-3 p-5 lg:p-6">
        <h3 className="text-lg font-bold uppercase text-brand-black">
          {item.title}
        </h3>
        {item.href && (
          <Cta href={item.href} variant="red" className="text-xs">
            {item.ctaLabel ?? "Learn More"}
          </Cta>
        )}
      </div>
    </article>
  );
}
