/** Full menu page data — matches live Shane's Rib Shack menu categories. */

export type MenuItemCard = {
  name: string;
  price: string;
  /** Image path under public/images/. Use storefront placeholder when no item photo. */
  image?: string;
  imageAlt?: string;
};

export type MenuCategory = {
  title: string;
  items: MenuItemCard[];
};

const PLACEHOLDER = "/images/hero-catering.jpg";

export const menuCategories: MenuCategory[] = [
  {
    title: "Sandwiches",
    items: [
      { name: "Big Dad®", price: "$7.99" },
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
      { name: "50 Tenders + 5 Large Sides + 10 Sauces + 50 Cookies", price: "$149.99" },
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