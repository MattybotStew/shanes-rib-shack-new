/** Location detail data for location pages (prototype + order deep links). */
export type LocationDetail = {
  slug: string;
  /** Display title in the hero (live uses short city name). */
  name: string;
  /** Short label used on live site H1 / alert (“Edgewood Location”). */
  shortName: string;
  address: string;
  /** Hero phone display — matches live “+1 404-525-7427”. */
  phone: string;
  /** Compact alert-bar phone — matches live “+14045257427”. */
  phoneAlert: string;
  phoneHref: string;
  hours: string;
  /** Order platform store id — matches `?myShanes=` on production. */
  locationId: string;
  storefrontImage: string;
  mapsUrl: string;
  cateringMinimum: string;
  ezCaterUrl: string;
  /** SEO body below the hero (live `location_content`). */
  content: LocationContentBlock;
};

export type LocationContentBlock = {
  heading: string;
  addressLine: string;
  callLine: string;
  introHtml: string;
  sections: { heading: string; paragraphs: string[] }[];
  closing: string;
};

/**
 * Edgewood, Atlanta — live:
 * https://www.shanesribshack.com/locations/edgewood-atlanta-ga/?myShanes=LB1VY6W2WA7RZ
 */
export const EDGEWOOD: LocationDetail = {
  slug: "edgewood-atlanta-ga",
  name: "Edgewood",
  shortName: "Edgewood",
  address: "1221 Caroline St NE, Atlanta, GA, 30307-2768",
  phone: "+1 404-525-7427",
  phoneAlert: "+14045257427",
  phoneHref: "tel:+14045257427",
  hours: "MON-SUN, 11:00 AM-9:00 PM",
  locationId: "LB1VY6W2WA7RZ",
  storefrontImage: "/images/locations/edgewood-storefront.jpg",
  mapsUrl:
    "https://www.google.com/maps/dir//Shane's+Rib+Shack,+1221+Caroline+St+NE,+Atlanta,+GA+30307/@33.7582524,-84.3509215,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88f506ac9128a1cd:0x41f1aba136d81592!2m2!1d-84.348474!2d33.7582893",
  cateringMinimum: "$200.00",
  ezCaterUrl:
    "https://www.ezcater.com/catering/shanes-rib-shack-atlanta-caroline-st-ne",
  content: {
    heading: "Shane's Rib Shack in Edgewood, Atlanta, GA",
    addressLine: "1221 Caroline St, Atlanta, GA 30307",
    callLine: "Call for Pickup: (404) 525-7427",
    introHtml:
      'Some meals are about speed. Others are about sitting down, catching your breath, and actually enjoying what\'s on the table. Shane\'s Rib Shack in Edgewood falls into the second category. Located just off Caroline Street near the <a href="https://www.shopedgewoodretaildistrict.com/" target="_blank" rel="noopener noreferrer">retail district</a> and a short drive from neighborhoods like <a href="https://maps.app.goo.gl/wtuDmPkQYUZzVD6m9" target="_blank" rel="noopener noreferrer">Candler Park</a> and Kirkwood, this Shack feels right at home in a part of Atlanta that values good food without unnecessary fuss.',
    sections: [
      {
        heading: "BBQ and Ribs in Edgewood Worth Slowing Down For",
        paragraphs: [
          "This Edgewood location is a strong choice when ribs are what you're craving. Baby back ribs are smoked in-house until tender and served with your choice of sauce, making them a popular option for both dine-in meals and takeout. Chopped BBQ pork plates are another go-to, served with Texas toast and classic sides like mac & cheese, baked beans, or coleslaw.",
          "Instead of rushing through the menu, many guests here take their time. The Shack Sampler Plate is a common pick when you want ribs, chopped pork or chicken, tenders, and sides all in one order. For something handheld, the Big Dad Sandwich delivers slow-smoked chopped BBQ pork on Texas toast and works just as well for lunch as it does for dinner.",
        ],
      },
      {
        heading: "A Neighborhood Spot for Casual Meals and Meetups",
        paragraphs: [
          "Edgewood is known for being walkable and social, and this Shack fits right into that rhythm. It's a comfortable stop for small groups meeting up after work or neighbors grabbing dinner without heading across town. Wings, especially smoked or boneless, are often added to orders for sharing, while Shack Fries or Shack Potatoes topped with chopped BBQ pork give the table something extra.",
          "Sides like Brunswick stew, fried okra, and green beans help round out meals, and peach cobbler often finds its way onto the order when people decide to stay a little longer.",
        ],
      },
      {
        heading: "Why This Edgewood Shack Feels Like a Local Fixture",
        paragraphs: [
          'What sets this location apart is how easily it blends into the neighborhood. The food is consistent, the portions are generous, and nothing feels rushed. To check hours, directions, or recent reviews before stopping by, you can <a href="https://share.google/u4OXEI1eqfdr3ZXRE" target="_blank" rel="noopener noreferrer"><strong>view our Google Business Profile</strong></a>.',
        ],
      },
    ],
    closing:
      "If you want to plan ahead, you can explore the menu, or learn more about how Shane's Rib Shack got its start by visiting our story.",
  },
};

export const LOCATIONS_BY_SLUG: Record<string, LocationDetail> = {
  [EDGEWOOD.slug]: EDGEWOOD,
};

/** Resolve a location from a pathname like `/locations/edgewood-atlanta-ga/`. */
export function locationFromPathname(pathname: string): LocationDetail | null {
  const match = pathname.match(/\/locations\/([^/]+)\/?$/);
  if (!match) return null;
  return LOCATIONS_BY_SLUG[match[1]] ?? null;
}

/** Build order.shanesribshack.com URL with fulfillment + location deep link. */
export function orderUrl(
  fulfillment: "PICKUP" | "DELIVERY",
  locationId: string,
): string {
  const params = new URLSearchParams({
    fulfillmentType: fulfillment,
    locationId,
  });
  return `https://order.shanesribshack.com/order?${params.toString()}`;
}
