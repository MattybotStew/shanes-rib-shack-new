import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Cta from "@/components/Cta";
import PageShell from "@/components/PageShell";
import { asset } from "@/lib/asset";
import { ORDER_HOME_URL } from "@/lib/locationData";
import {
  getItemsForCategorySlug,
  getMenuCategoryCard,
  menuCategoryCards,
  menuItemSlug,
} from "@/lib/menuPageData";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return menuCategoryCards.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const category = getMenuCategoryCard(slug);
  if (!category) return { title: "Menu | Shane's Rib Shack" };
  return {
    title: `${category.title} | Shane's Rib Shack Menu`,
    description: `See ${category.title} from Shane's Rib Shack. Order online for pickup or delivery.`,
  };
}

const FALLBACK_IMAGE = "/images/hero-catering.jpg";

export default async function MenuCategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = getMenuCategoryCard(slug);
  if (!category) notFound();

  const items = getItemsForCategorySlug(slug);

  return (
    <PageShell>
      <section className="flex w-full flex-col items-center px-5 pt-5 lg:pt-[60px]">
        <div className="mb-8 flex w-full max-w-[1200px] flex-col items-start gap-4 sm:mb-10">
          <Link
            href="/menu/"
            className="text-sm font-bold uppercase text-brand-red hover:underline"
          >
            ← All Menu Categories
          </Link>
          <div className="flex w-full flex-col items-center justify-center rounded-[12px] border border-[rgba(31,33,31,0.2)] bg-brand-tan px-6 py-8 sm:px-12 lg:px-[80px] lg:py-[44px]">
            <h1 className="w-full text-center text-[28px] font-extrabold uppercase leading-none text-brand-red sm:text-[36px] lg:text-[48px]">
              {category.title}
            </h1>
          </div>
        </div>

        <div className="w-full max-w-[1200px] pb-16">
          {items.length === 0 ? (
            <div className="flex flex-col items-center gap-6 rounded-[12px] border border-black/10 bg-brand-tan px-6 py-12 text-center">
              <p className="max-w-xl text-base font-semibold leading-[1.5] text-brand-black">
                Browse this category and place your order online — prices and
                availability vary by location.
              </p>
              <Cta href={ORDER_HOME_URL} variant="red">
                Order Now
              </Cta>
            </div>
          ) : (
            <ul className="grid list-none gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((item) => {
                const itemPath = `/menu/${slug}/${menuItemSlug(item)}/`;
                const src = item.image
                  ? asset(item.image)
                  : asset(category.image || FALLBACK_IMAGE);
                return (
                  <li
                    key={item.name}
                    className="flex flex-col overflow-hidden rounded-[12px] border border-black/10 bg-white"
                  >
                    <Link
                      href={itemPath}
                      className="relative aspect-[4/3] overflow-hidden bg-brand-black/5"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={src}
                        alt={item.imageAlt || item.name}
                        className="size-full object-cover"
                        loading="lazy"
                      />
                    </Link>
                    <div className="flex flex-1 flex-col gap-2.5 p-5">
                      <h2 className="text-lg font-extrabold uppercase leading-tight text-brand-black">
                        <Link href={itemPath} className="hover:text-brand-red">
                          {item.name}
                        </Link>
                      </h2>
                      <p className="text-base font-bold text-brand-red">
                        {item.price}
                      </p>
                      <div className="mt-auto flex flex-wrap gap-3 pt-2">
                        <Cta href={itemPath} variant="red" className="flex-1">
                          More Info
                        </Cta>
                        <Cta
                          href={ORDER_HOME_URL}
                          variant="outline"
                          className="flex-1"
                        >
                          Order Now
                        </Cta>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </section>
    </PageShell>
  );
}
