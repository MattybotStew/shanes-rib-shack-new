export type PackageChoices = {
  /** Pick exactly one when present */
  meatOptions?: string[];
  /** Shown as included (no picker) */
  fixedMeats?: string[];
  sideCount: number;
  /** Boxed lunch only */
  sandwichOptions?: string[];
  servedWithOptions?: string[];
};

export type MenuItem =
  | {
      id: string;
      title: string;
      kind: "package";
      items: string[];
      choices: PackageChoices;
    }
  | {
      id: string;
      title: string;
      kind: "boxed";
      lines: string[];
      choices: PackageChoices;
    };

export const sideOptions = [
  "Baked Beans",
  "Coleslaw",
  "Brunswick Stew",
  "Mac & Cheese",
  "Potato Salad",
  "Side Salad",
] as const;

export const dessertOptions = [
  "Homemade Peach Cobbler",
  "Brownies",
  "Cookies",
] as const;

export const menuItems: MenuItem[] = [
  {
    id: "one-meat",
    title: "One Meat",
    kind: "package",
    items: [
      "Chopped Pork OR Chopped Chicken",
      "Two Side Items",
      "Bread & BBQ",
      "Sauce",
      "Tea",
      "Plates, Cups, Utensils, & Napkins",
    ],
    choices: {
      meatOptions: ["Chopped Pork", "Chopped Chicken"],
      sideCount: 2,
    },
  },
  {
    id: "ribs-one-meat",
    title: "Ribs & One Meat",
    kind: "package",
    items: [
      "Ribs, Chopped Pork OR Chopped Chicken",
      "Two Side Items",
      "Bread & BBQ",
      "Sauce",
      "Tea",
      "Plates, Cups, Utensils, & Napkins",
    ],
    choices: {
      meatOptions: ["Chopped Pork", "Chopped Chicken"],
      fixedMeats: ["Ribs"],
      sideCount: 2,
    },
  },
  {
    id: "two-meat",
    title: "Two Meat",
    kind: "package",
    items: [
      "Chopped Pork & Chopped Chicken",
      "Two Side Items",
      "Bread & BBQ",
      "Sauce",
      "Tea",
      "Plates, Cups, Utensils, & Napkins",
    ],
    choices: {
      fixedMeats: ["Chopped Pork", "Chopped Chicken"],
      sideCount: 2,
    },
  },
  {
    id: "three-meat",
    title: "Three Meat",
    kind: "package",
    items: [
      "Ribs, Chopped Pork, & Chopped Chicken",
      "Two Side Items",
      "Bread & BBQ",
      "Sauce",
      "Tea",
      "Plates, Cups, Utensils, & Napkins",
    ],
    choices: {
      fixedMeats: ["Ribs", "Chopped Pork", "Chopped Chicken"],
      sideCount: 2,
    },
  },
  {
    id: "boxed-lunches",
    title: "Boxed Lunches",
    kind: "boxed",
    lines: [
      "Pick Your Sandwich:",
      "Big Dad Pork Sandwich or BBQ Chicken Sandwich",
      "Served with:",
      "Chips, Cookie, & Tea OR One Side, Cookie, & Tea",
    ],
    choices: {
      sideCount: 0,
      sandwichOptions: ["Big Dad Pork Sandwich", "BBQ Chicken Sandwich"],
      servedWithOptions: [
        "Chips, Cookie, & Tea",
        "One Side, Cookie, & Tea",
      ],
    },
  },
];

export const packageNames = menuItems.map((item) => item.title);

export function getMenuItemByTitle(title: string): MenuItem | undefined {
  return menuItems.find((item) => item.title === title);
}

export const sides =
  "Baked Beans, Coleslaw, Brunswick Stew, Mac & Cheese, Potato Salad, & Side Salad";

export const desserts = "Homemade Peach Cobbler, Brownies, & Cookies";
