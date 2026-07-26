/** Shop page products — Figma DK-Shop `6250:7860` / MB-Shop `6250:8150`. */

export type ShopProductCta = "buy" | "in-store";

export type ShopProduct = {
  id: string;
  name: string;
  image: string;
  imageAlt: string;
  cta: ShopProductCta;
  /** Purchase URL for buy-now products; in-store items link to locations. */
  href: string;
};

export const SHOP_HUB_URL = "https://www.shanesribshack.com/shop/";

export const shopProducts: ShopProduct[] = [
  {
    id: "original",
    name: "Original",
    image: "/images/shop/sauce-original.jpg",
    imageAlt: "Shane's Rib Shack Original BBQ Sauce bottle",
    cta: "buy",
    href: "https://www.shanesribshack.com/menu-items/original-bbq-sauce-bottle/",
  },
  {
    id: "carolina-mustard",
    name: "Carolina Mustard",
    image: "/images/shop/sauce-carolina-mustard.jpg",
    imageAlt: "Shane's Rib Shack Carolina Mustard BBQ Sauce bottle",
    cta: "in-store",
    href: "/locations",
  },
  {
    id: "honey",
    name: "Honey BBQ",
    image: "/images/shop/sauce-honey.jpg",
    imageAlt: "Shane's Rib Shack Honey BBQ Sauce bottle",
    cta: "buy",
    href: "https://www.shanesribshack.com/menu-items/honey-bbq-sauce-bottle/",
  },
  {
    id: "medium-wing",
    name: "Medium Wing",
    image: "/images/shop/sauce-medium-wing.jpg",
    imageAlt: "Shane's Rib Shack Medium Wing Sauce bottle",
    cta: "buy",
    href: SHOP_HUB_URL,
  },
  {
    id: "cayenne",
    name: "Cayenne",
    image: "/images/shop/sauce-cayenne.jpg",
    imageAlt: "Shane's Rib Shack Cayenne Sauce bottle",
    cta: "in-store",
    href: "/locations",
  },
  {
    id: "sizzlin-hot",
    name: "Sizzlin' Hot",
    image: "/images/shop/sauce-sizzlin-hot.jpg",
    imageAlt: "Shane's Rib Shack Sizzlin' Hot BBQ Sauce bottle",
    cta: "buy",
    href: SHOP_HUB_URL,
  },
  {
    id: "spicy",
    name: "Spicy BBQ",
    image: "/images/shop/sauce-spicy.jpg",
    imageAlt: "Shane's Rib Shack Spicy BBQ Sauce bottle",
    cta: "buy",
    href: "https://www.shanesribshack.com/menu-items/spicy-bbq-sauce-bottle/",
  },
  {
    id: "4-pack",
    name: "4-Pack",
    image: "/images/shop/sauce-4pack.jpg",
    imageAlt: "Shane's Rib Shack BBQ sauce 4-pack assortment",
    cta: "in-store",
    href: "/locations",
  },
];

/** Specialty sauce links in the Shop All section (Figma list). */
export const shopSpecialtyLinks: { label: string; href: string }[] = [
  {
    label: "Honey BBQ Sauce",
    href: "https://www.shanesribshack.com/menu-items/honey-bbq-sauce-bottle/",
  },
  {
    label: "Spicy BBQ Sauce",
    href: "https://www.shanesribshack.com/menu-items/spicy-bbq-sauce-bottle/",
  },
  {
    label: "Sizzlin' Hot BBQ",
    href: SHOP_HUB_URL,
  },
  {
    label: "Carolina Mustard BBQ",
    href: "https://www.shanesribshack.com/menu-items/mustard-bbq-sauce-bottle/",
  },
];

export const shopAllCopy =
  "Shane's Original BBQ sauce is a blend of sweet tomato, tangy vinegar, mustard and…you know what? We've said too much already. Just order a few bottles and enjoy it whenever you like. And to mix things up, try our specialty BBQ sauces.";
