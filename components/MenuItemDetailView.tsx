import Link from "next/link";
import Cta from "@/components/Cta";
import ShareButtons from "@/components/ShareButtons";
import { asset } from "@/lib/asset";
import { ORDER_HOME_URL } from "@/lib/locationData";
import {
  MENU_ITEM_SEO_DOUGLASVILLE,
  NUTRITION_GUIDE_URL,
  type MenuItemDetail,
  type MenuItemSeoBlock,
} from "@/lib/menuPageData";

const rule = "h-0 w-full border-t border-dashed border-brand-black/30";

type Props = {
  item: MenuItemDetail;
  seo?: MenuItemSeoBlock;
};

/** Menu item PDP — Figma `DK-Menu-Item-sandwich-BigDad` / `MB-Menu-Item`. */
export default function MenuItemDetailView({
  item,
  seo = MENU_ITEM_SEO_DOUGLASVILLE,
}: Props) {
  const categoryHref = `/menu/${item.categorySlug}/`;
  const sharePath = `/menu/${item.categorySlug}/${item.itemSlug}/`;
  const tagline =
    item.tagline ?? "Make it a combo with a side and a drink.";

  return (
    <>
      {/* Hero — desktop: info | photo; mobile: info then photo */}
      <section
        className="flex w-full flex-col items-center px-5 pt-5 lg:pt-[60px]"
        aria-labelledby="menu-item-heading"
      >
        <div className="flex w-full max-w-[1200px] flex-col gap-6 lg:flex-row lg:items-start lg:gap-10">
          <div className="flex w-full flex-1 flex-col gap-5 rounded-[12px] border border-black/10 bg-brand-tan p-5 lg:max-w-[403px]">
            <h1
              id="menu-item-heading"
              className="w-full text-[32px] font-extrabold uppercase leading-none text-brand-red lg:text-[48px]"
            >
              {item.name}
            </h1>

            <div className={rule} />

            <p className="w-full text-base font-bold uppercase leading-4 text-brand-black/85">
              {tagline}
            </p>

            <div className={rule} />

            <p className="w-full text-lg font-bold leading-[1.5] text-brand-red">
              {item.price}
            </p>

            <div className={rule} />

            {/* Mobile-only ingredients / allergens / calories (MB-Menu-Item) */}
            {(item.ingredients || item.allergens || item.calories) && (
              <div className="flex w-full flex-col gap-5 lg:hidden">
                {item.ingredients ? (
                  <div className="flex flex-col gap-2.5">
                    <p className="text-[11px] font-bold uppercase leading-none text-brand-black">
                      Ingredients:
                    </p>
                    <p className="text-[13px] font-semibold leading-[1.4] text-brand-black/80">
                      {item.ingredients}
                    </p>
                  </div>
                ) : null}
                {item.allergens ? (
                  <div className="flex flex-col gap-2.5">
                    <p className="text-[11px] font-bold uppercase leading-none text-brand-black">
                      Allergens:
                    </p>
                    <p className="text-[13px] font-semibold leading-none text-brand-black/80">
                      {item.allergens}
                    </p>
                  </div>
                ) : null}
                {item.calories ? (
                  <p className="text-[11px] font-bold uppercase leading-none text-brand-black">
                    Calories: {item.calories}
                  </p>
                ) : null}
                <div className={rule} />
              </div>
            )}

            <p className="w-full text-xs font-normal leading-[1.5] text-brand-black/85">
              *View{" "}
              <a
                href={NUTRITION_GUIDE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-bold text-brand-red underline"
              >
                Nutrition Guide
              </a>{" "}
              for more information.
            </p>

            <div className="flex w-full flex-wrap items-center gap-3">
              <Cta href={ORDER_HOME_URL} variant="red" className="min-w-0 flex-1">
                Order Now
              </Cta>
              <Cta href={categoryHref} variant="outline" className="min-w-0 flex-1">
                Menu
              </Cta>
            </div>
          </div>

          <div className="relative w-full overflow-hidden rounded-[8px] lg:h-[427px] lg:w-[757px] lg:shrink-0 lg:flex-none">
            <div className="relative aspect-[16/9] w-full lg:absolute lg:inset-0 lg:aspect-auto">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset(item.image!)}
                alt={item.imageAlt!}
                className="absolute inset-0 size-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location SEO content */}
      <section
        className="flex w-full flex-col items-center px-5 pt-10 lg:pt-[60px]"
        aria-labelledby="menu-item-seo-heading"
      >
        <div className="w-full max-w-[1200px] rounded-[12px] border border-black/20 bg-white p-5 sm:p-10 lg:p-[80px]">
          <div className="flex w-full flex-col items-start gap-8 lg:gap-10">
            <h2
              id="menu-item-seo-heading"
              className="w-full text-[28px] font-extrabold uppercase leading-none text-brand-black sm:text-[36px] lg:text-[45px]"
            >
              {seo.heading}
            </h2>

            <p className="w-full text-base font-normal leading-[1.3] text-[#828282]">
              {seo.addressLine}
              <br />
              {seo.callLabel}{" "}
              <a href={seo.phoneHref} className="text-[#c41e3a] hover:underline">
                {seo.phoneDisplay}
              </a>
            </p>

            <p className="w-full text-base font-normal leading-[1.3] text-[#828282]">
              {seo.intro}
            </p>

            {seo.sections.map((section) => (
              <div key={section.heading} className="flex w-full flex-col gap-8 lg:gap-10">
                <h3 className="w-full text-2xl font-bold leading-none text-brand-black">
                  {section.heading}
                </h3>
                {section.paragraphs.map((p, i) => (
                  <p
                    key={`${section.heading}-${i}`}
                    className="w-full text-base font-normal leading-[1.3] text-[#828282]"
                  >
                    {section.heading === "Why Locals Keep Coming Back" &&
                    i === section.paragraphs.length - 1 ? (
                      <>
                        {p}
                        <a
                          href={seo.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#c41e3a] hover:underline"
                        >
                          find this Shack on Google
                        </a>
                        .
                      </>
                    ) : (
                      p
                    )}
                  </p>
                ))}
              </div>
            ))}

            <p className="w-full text-base font-normal leading-[1.3] text-[#828282]">
              {seo.closing}
            </p>

            <ShareButtons path={sharePath} title={item.name} />

            <Link
              href={categoryHref}
              className="text-sm font-bold uppercase text-brand-red hover:underline"
            >
              ← Back to {item.categoryTitle}
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
