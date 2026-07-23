export type MenuItem =
  | { id: string; title: string; kind: "package"; items: string[] }
  | { id: string; title: string; kind: "boxed"; lines: string[] };

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
  },
];

export const packageNames = menuItems.map((item) => item.title);

export const sides =
  "Baked Beans, Coleslaw, Brunswick Stew, Mac & Cheese, Potato Salad, & Side Salad";

export const desserts = "Homemade Peach Cobbler, Brownies, & Cookies";
