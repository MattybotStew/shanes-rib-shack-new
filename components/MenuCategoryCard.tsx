import Link from "next/link";
import Cta from "@/components/Cta";
import { asset } from "@/lib/asset";
import type { MenuCategoryCard as MenuCategoryCardData } from "@/lib/menuPageData";

type Props = {
  category: MenuCategoryCardData;
};

/** Tan category card from Figma DK-Menu (`Card1`). */
export default function MenuCategoryCard({ category }: Props) {
  const href = `/menu/${category.slug}/`;

  return (
    <article className="flex flex-col gap-[30px] rounded-[12px] border border-black/10 bg-brand-tan px-[30px] py-5">
      <Link
        href={href}
        className="relative block h-[204px] w-full overflow-hidden rounded-[4px]"
        aria-label={`${category.title} — see all`}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset(category.image)}
          alt={category.imageAlt}
          className="absolute inset-0 size-full object-cover"
          loading="lazy"
        />
      </Link>
      <div className="flex flex-col items-start justify-center gap-6">
        <h2 className="w-full text-left text-2xl font-semibold uppercase leading-none text-brand-black">
          <Link href={href} className="hover:text-brand-red">
            {category.title}
          </Link>
        </h2>
        <Cta href={href} variant="red">
          See all
        </Cta>
      </div>
    </article>
  );
}
