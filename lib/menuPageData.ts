/** Menu landing + category item data (Figma DK-Menu / item listings / PDP). */

export const NUTRITION_GUIDE_URL =
  "https://www.shanesribshack.com/media/2916/shanes-nutrition-guide-website-_11x17_-2222_final_.pdf";

export type MenuItemCard = {
  name: string;
  price: string;
  /** Image path under public/. Optional until per-item photography lands. */
  image?: string;
  imageAlt?: string;
  /** URL slug; derived from name when omitted. */
  slug?: string;
  /** Short uppercase tagline under the title (e.g. combo prompt). */
  tagline?: string;
  /** Shown on mobile PDP (MB-Menu-Item). */
  ingredients?: string;
  allergens?: string;
  calories?: string;
};

export type MenuCategory = {
  title: string;
  items: MenuItemCard[];
};

/** Category card on the Figma DK-Menu landing (`6250:6294`). */
export type MenuCategoryCard = {
  slug: string;
  title: string;
  image: string;
  imageAlt: string;
  /** Titles in `menuCategories` to show on `/menu/[slug]/` (may be multiple). */
  itemCategoryTitles: string[];
};

export const menuCategoryCards: MenuCategoryCard[] = [
  {
    slug: "sandwiches",
    title: "Sandwiches",
    image: "/images/menu/sandwiches.jpg",
    imageAlt: "Shane's Rib Shack BBQ sandwiches",
    itemCategoryTitles: ["Sandwiches"],
  },
  {
    slug: "burgers",
    title: "Burgers",
    image: "/images/menu/burgers.jpg",
    imageAlt: "Shane's Rib Shack burgers",
    itemCategoryTitles: ["Burgers"],
  },
  {
    slug: "shack-baskets",
    title: "Shack Baskets",
    image: "/images/menu/shack-baskets.jpg",
    imageAlt: "Shane's Rib Shack baskets with fries",
    itemCategoryTitles: ["Shack Baskets"],
  },
  {
    slug: "plates",
    title: "Plates",
    image: "/images/menu/plates.jpg",
    imageAlt: "Shane's Rib Shack BBQ plates",
    itemCategoryTitles: ["Plates"],
  },
  {
    slug: "sides",
    title: "Sides",
    image: "/images/menu/sides.jpg",
    imageAlt: "Shane's Rib Shack Southern sides",
    itemCategoryTitles: ["Sides"],
  },
  {
    slug: "wings-tenders",
    title: "Wings & Tenders",
    image: "/images/menu/wings-tenders.jpg",
    imageAlt: "Shane's Rib Shack smoked wings and chicken tenders",
    itemCategoryTitles: ["Wings", "Tenders"],
  },
  {
    slug: "shack-fries",
    title: "Shack Fries",
    image: "/images/menu/shack-fries.jpg",
    imageAlt: "Shane's Rib Shack loaded fries",
    itemCategoryTitles: ["Shack Fries"],
  },
  {
    slug: "shack-salads",
    title: "Shack Salads",
    image: "/images/menu/shack-salads.jpg",
    imageAlt: "Shane's Rib Shack salads",
    itemCategoryTitles: ["Shack Salads"],
  },
  {
    slug: "family-meals",
    title: "Family Meals",
    image: "/images/menu/family-meals.jpg",
    imageAlt: "Shane's Rib Shack family meal packs",
    itemCategoryTitles: ["Family Meals", "Game Day Meals"],
  },
  {
    slug: "kids-menu",
    title: "Kids Menu",
    image: "/images/menu/kids-menu.jpg",
    imageAlt: "Shane's Rib Shack kids meals",
    itemCategoryTitles: ["Kids Meals"],
  },
  {
    slug: "meat-only",
    title: "Meat Only",
    image: "/images/menu/meat-only.jpg",
    imageAlt: "Shane's Rib Shack meat-only portions",
    itemCategoryTitles: ["Meat Only"],
  },
  {
    slug: "drinks",
    title: "Drinks",
    image: "/images/menu/drinks.jpg",
    imageAlt: "Shane's Rib Shack drinks",
    itemCategoryTitles: ["Drinks"],
  },
  {
    slug: "desserts",
    title: "Desserts",
    image: "/images/menu/desserts.jpg",
    imageAlt: "Shane's Rib Shack desserts",
    itemCategoryTitles: ["Desserts"],
  },
  {
    slug: "gluten-sensitive",
    title: "Gluten Sensitive",
    image: "/images/menu/gluten-sensitive.jpg",
    imageAlt: "Gluten-sensitive options at Shane's Rib Shack",
    itemCategoryTitles: [],
  },
  {
    slug: "build-your-own-shack-pack",
    title: "Build Your Own Shack Pack",
    image: "/images/menu/build-your-own.jpg",
    imageAlt: "Build your own Shane's Rib Shack pack",
    itemCategoryTitles: [],
  },
];

/** First six cards sit above the promo banner in the Figma layout. */
export const MENU_PROMO_AFTER_INDEX = 6;

export const menuCategories: MenuCategory[] = [
  {
    title: "Sandwiches",
    items: [
      {
        name: "Big Dad®",
        slug: "big-dad",
        price: "$8.99",
        tagline: "Make it a combo with a side and a drink.",
        ingredients:
          "Boston pork butt, Shane's Butt Rub*, Shane's Original BBQ Sauce*, Texas Toast*, Liquid Margarine*.",
        allergens: "Contains wheat, soy.",
        calories: "500",
        image: "/images/menu/items/big-dad.jpg",
        imageAlt: "Big Dad® chopped BBQ pork sandwich on Texas toast",
      },
      { name: "Smothered Pork", price: "$8.99" },
      { name: "Chopped BBQ Chicken", price: "$8.99" },
      { name: "Fried Chicken Tender Sandwich", price: "$8.99" },
      { name: "Grilled Chicken Tender Sandwich", price: "$8.99" },
    ],
  },
  {
    title: "Plates",
    items: [
      { name: "Chopped Pork Plate", price: "$10.99" },
      { name: "Chopped Chicken Plate", price: "$10.99" },
      { name: "BBQ Sandwich Plate", price: "$10.99" },
      { name: "2-Meat Combo Plate", price: "$13.99" },
      { name: "3-Meat Combo Plate", price: "$15.99" },
      { name: "Rib Plate (Half Rack)", price: "$14.99" },
      { name: "Rib Plate (Full Rack)", price: "$21.99" },
    ],
  },
  {
    title: "Wings",
    items: [
      { name: "6-Pc Smoked Wings", price: "$7.99" },
      { name: "10-Pc Smoked Wings", price: "$11.99" },
      { name: "15-Pc Smoked Wings", price: "$16.99" },
      { name: "20-Pc Smoked Wings", price: "$21.99" },
    ],
  },
  {
    title: "Tenders",
    items: [
      { name: "4-Pc Chicken Tenders", price: "$5.99" },
      { name: "6-Pc Chicken Tenders", price: "$7.99" },
      { name: "8-Pc Chicken Tenders", price: "$9.99" },
      { name: "12-Pc Chicken Tenders", price: "$13.99" },
    ],
  },
  {
    title: "Burgers",
    items: [
      { name: "Shack Burger", price: "$7.99" },
      { name: "Cheese Shack Burger", price: "$8.49" },
      { name: "Bacon Shack Burger", price: "$8.99" },
      { name: "Beyond Burger", price: "$8.99" },
    ],
  },
  {
    title: "Shack Baskets",
    items: [
      { name: "Chicken Tender Basket", price: "$9.99" },
      { name: "Wing & Fry Basket", price: "$10.99" },
      { name: "Popcorn Shrimp Basket", price: "$10.99" },
      { name: "Fish Basket", price: "$10.99" },
    ],
  },
  {
    title: "Shack Potatoes",
    items: [
      { name: "Pork Shack Potato", price: "$9.99" },
      { name: "Chicken Shack Potato", price: "$9.99" },
      { name: "Pork & Chicken Shack Potato", price: "$10.99" },
    ],
  },
  {
    title: "Shack Fries",
    items: [
      { name: "Pork Shack Fries", price: "$9.99" },
      { name: "Chicken Shack Fries", price: "$9.99" },
      { name: "Pork & Chicken Shack Fries", price: "$10.99" },
      { name: "Loaded Cheese Fries", price: "$7.99" },
    ],
  },
  {
    title: "Shack Salads",
    items: [
      { name: "Grilled Chicken Salad", price: "$9.99" },
      { name: "Pulled Pork Salad", price: "$9.99" },
    ],
  },
  {
    title: "Kids Meals",
    items: [
      { name: "Kids Chicken Tenders (2 pc)", price: "$5.99" },
      { name: "Kids BBQ Sandwich", price: "$5.99" },
      { name: "Kids Burger", price: "$5.99" },
      { name: "Kids Grilled Cheese", price: "$4.99" },
    ],
  },
  {
    title: "Meat Only",
    items: [
      { name: "Full Rack Baby Back Ribs", price: "$21.99" },
      { name: "Half Rack Baby Back Ribs", price: "$13.99" },
      { name: "Chopped Pork (1 lb)", price: "$12.99" },
      { name: "Chopped Chicken (1 lb)", price: "$12.99" },
    ],
  },
  {
    title: "Family Meals",
    items: [
      { name: "Family Pack (serves 4-6)", price: "$39.99" },
      { name: "Family Feast (serves 10-12)", price: "$69.99" },
    ],
  },
  {
    title: "Game Day Meals",
    items: [
      {
        name: "50 Tenders + 5 Large Sides + 10 Sauces + 50 Cookies",
        price: "$149.99",
      },
      { name: "Game Day Wings Bundle (50 pcs)", price: "$59.99" },
    ],
  },
  {
    title: "Sides",
    items: [
      { name: "Baked Beans", price: "$2.99" },
      { name: "Coleslaw", price: "$2.99" },
      { name: "Brunswick Stew", price: "$3.49" },
      { name: "Mac & Cheese", price: "$3.49" },
      { name: "Potato Salad", price: "$2.99" },
      { name: "Side Salad", price: "$2.99" },
      { name: "French Fries", price: "$2.99" },
      { name: "Onion Rings", price: "$3.49" },
      { name: "Fried Okra", price: "$3.49" },
      { name: "Green Beans", price: "$2.99" },
    ],
  },
  {
    title: "Drinks",
    items: [
      { name: "Sweet Tea", price: "$2.49" },
      { name: "Unsweet Tea", price: "$2.49" },
      { name: "Lemonade", price: "$2.49" },
      { name: "Soft Drink", price: "$2.49" },
      { name: "Bottled Water", price: "$1.99" },
    ],
  },
  {
    title: "Desserts",
    items: [
      { name: "Homemade Peach Cobbler", price: "$4.99" },
      { name: "Brownie", price: "$2.99" },
      { name: "Cookie", price: "$1.99" },
    ],
  },
];

export function getMenuCategoryCard(slug: string): MenuCategoryCard | undefined {
  return menuCategoryCards.find((c) => c.slug === slug);
}

export function getItemsForCategorySlug(slug: string): MenuItemCard[] {
  const card = getMenuCategoryCard(slug);
  if (!card) return [];
  const titles = new Set(card.itemCategoryTitles);
  return menuCategories
    .filter((c) => titles.has(c.title))
    .flatMap((c) => c.items);
}

/** Slugify a menu item name for URLs (`Big Dad®` → `big-dad`). */
export function menuItemSlug(item: Pick<MenuItemCard, "name" | "slug">): string {
  if (item.slug) return item.slug;
  return item.name
    .normalize("NFKD")
    .replace(/[®™©]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export type MenuItemDetail = MenuItemCard & {
  categorySlug: string;
  categoryTitle: string;
  itemSlug: string;
};

export function getMenuItem(
  categorySlug: string,
  itemSlug: string,
): MenuItemDetail | undefined {
  const category = getMenuCategoryCard(categorySlug);
  if (!category) return undefined;
  const item = getItemsForCategorySlug(categorySlug).find(
    (i) => menuItemSlug(i) === itemSlug,
  );
  if (!item) return undefined;
  return {
    ...item,
    categorySlug,
    categoryTitle: category.title,
    itemSlug: menuItemSlug(item),
    image: item.image ?? category.image,
    imageAlt: item.imageAlt ?? `${item.name} from Shane's Rib Shack`,
  };
}

/** All category/item pairs for static generation. */
export function allMenuItemParams(): { slug: string; item: string }[] {
  return menuCategoryCards.flatMap((cat) =>
    getItemsForCategorySlug(cat.slug).map((item) => ({
      slug: cat.slug,
      item: menuItemSlug(item),
    })),
  );
}

/** Location SEO block used on menu item PDPs (Figma DK-Menu-Item Big Dad). */
export type MenuItemSeoBlock = {
  heading: string;
  addressLine: string;
  callLabel: string;
  phoneDisplay: string;
  phoneHref: string;
  intro: string;
  sections: { heading: string; paragraphs: string[] }[];
  closing: string;
  mapsUrl: string;
};

export const MENU_ITEM_SEO_DOUGLASVILLE: MenuItemSeoBlock = {
  heading: "Shane's Rib Shack in Douglasville, GA",
  addressLine: "2750 Chapel Hill Road, Suite 1400, Douglasville, GA 30135",
  callLabel: "Call for Pickup:",
  phoneDisplay: "(770) 947-4105",
  phoneHref: "tel:+17709474105",
  intro:
    "Most nights, the hardest part of dinner is deciding where to go. Shane's Rib Shack in Douglasville offers an easy answer. Located near major roads and popular retail areas, this Shack makes it simple to grab something satisfying without committing to a long sit-down meal or complicated order.",
  sections: [
    {
      heading: "BBQ and Ribs in Douglasville That Work on Your Schedule",
      paragraphs: [
        "Hosting a smaller crowd or picking up dinner for the family? Skip the stress of cooking and grab individual plates to-go—piled high with BBQ and paired with two Southern sides and our famous Texas Toast.",
        "Guests looking for variety often choose the Two Meat Plate or the Shack Sampler Plate, both of which allow you to mix ribs, pork, chicken, and tenders in one order. Sandwiches such as the Big Dad Sandwich are popular for lunch, while wings and tenders are frequently added for sharing at dinner.",
      ],
    },
    {
      heading: "Family-Friendly Meals Without the Fuss",
      paragraphs: [
        "Our Douglasville Shack is popular with families who want dinner handled quickly, offering kids meals that include mac & cheese, tenders, cheeseburgers, and kids ribs, while adults can choose plates, baskets, or family meals depending on appetite. Options like the OG Family Meal or Tender Family Meal simplify ordering when feeding more than a couple of people.",
        "Shack Potatoes topped with chopped BBQ pork or chicken, along with sides like fried okra, Brunswick stew, and coleslaw, help round out meals without extra decisions.",
      ],
    },
    {
      heading: "Why Locals Keep Coming Back",
      paragraphs: [
        "Consistency plays a big role here. Portions stay generous, food comes out hot, and the ordering process feels easy every time. To check hours, directions, or recent reviews before stopping by, you can ",
      ],
    },
  ],
  closing:
    "Whether dinner is planned or last-minute, this Shack fits neatly into the flow of everyday life, which is exactly why locals keep it in their regular rotation.",
  mapsUrl: "https://share.google/uRBWP9pjP2zNm7yum",
};
