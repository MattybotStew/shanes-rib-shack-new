/** Location detail data for location pages (prototype + order deep links). */
export type LocationDetail = {
  slug: string;
  /** Display title in the hero (live uses short city name). */
  name: string;
  /** Short label used on live site H1 / alert ("Edgewood Location"). */
  shortName: string;
  address: string;
  /** Hero phone display — matches live "+1 404-525-7427". */
  phone: string;
  /** Compact alert-bar phone — matches live "+14045257427". */
  phoneAlert: string;
  phoneHref: string;
  hours: string;
  /** Order platform store id — matches `?myShanes=` on production. */
  locationId: string;
  storefrontImage: string;
  mapsUrl: string;
  cateringMinimum: string;
  ezCaterUrl: string;
  /** Live locations picker with this store preselected (`?myShanes=`). */
  changeLocationUrl: string;
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
  changeLocationUrl: "/locations/",
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

/** Norcross — the original Shane's Rib Shack location. */
export const NORCROSS: LocationDetail = {
  slug: "norcross-ga",
  name: "Norcross",
  shortName: "Norcross",
  address: "5770 Peachtree Industrial Blvd Suite 111, Norcross, GA 30092",
  phone: "+1 770-416-6606",
  phoneAlert: "+17704166606",
  phoneHref: "tel:+17704166606",
  hours: "MON-SUN, 11:00 AM-9:00 PM",
  locationId: "NORCROSS",
  storefrontImage: "/images/locations/edgewood-storefront.jpg",
  mapsUrl:
    "https://www.google.com/maps/dir//Shane's+Rib+Shack,+5770+Peachtree+Industrial+Blvd+Suite+111,+Norcross,+GA+30092",
  cateringMinimum: "$200.00",
  ezCaterUrl:
    "https://www.ezcater.com/catering/shanes-rib-shack-norcross",
  changeLocationUrl: "/locations/",
  content: {
    heading: "Shane's Rib Shack in Norcross, GA",
    addressLine: "5770 Peachtree Industrial Blvd Suite 111, Norcross, GA 30092",
    callLine: "Call for Pickup: (770) 416-6606",
    introHtml:
      "The original Shane's Rib Shack. What started as a tiny roadside stand in McDonough grew into a beloved BBQ destination, and the Norcross location carries that tradition forward. Located off Peachtree Industrial Boulevard, this Shack serves the same slow-smoked ribs, chopped pork, and Southern sides that made Shane's famous.",
    sections: [
      {
        heading: "The Original BBQ Experience",
        paragraphs: [
          "As one of the flagship locations, Norcross delivers the full Shane's experience. Baby back ribs smoked low and slow over hickory, hand-chopped pork, and chicken that's tender enough to fall off the bone. The menu covers all the classics, and the portions are generous enough to guarantee leftovers.",
          "The Norcross location is a favorite for lunch crowds and families looking for a reliable BBQ dinner without the drive downtown. The dining room is comfortable and unpretentious — exactly what a BBQ joint should be.",
        ],
      },
    ],
    closing:
      "Stop by the original Shack and taste the BBQ that started it all.",
  },
};

/** Carrollton location. */
export const CARROLLTON: LocationDetail = {
  slug: "carrollton-ga",
  name: "Carrollton",
  shortName: "Carrollton",
  address: "1109 Bankhead Hwy, Carrollton, GA 30117",
  phone: "+1 770-832-7427",
  phoneAlert: "+17708327427",
  phoneHref: "tel:+17708327427",
  hours: "MON-SUN, 11:00 AM-9:00 PM",
  locationId: "CARROLLTON",
  storefrontImage: "/images/locations/edgewood-storefront.jpg",
  mapsUrl:
    "https://www.google.com/maps/dir//Shane's+Rib+Shack,+1109+Bankhead+Hwy,+Carrollton,+GA+30117",
  cateringMinimum: "$200.00",
  ezCaterUrl:
    "https://www.ezcater.com/catering/shanes-rib-shack-carrollton",
  changeLocationUrl: "/locations/",
  content: {
    heading: "Shane's Rib Shack in Carrollton, GA",
    addressLine: "1109 Bankhead Hwy, Carrollton, GA 30117",
    callLine: "Call for Pickup: (770) 832-7427",
    introHtml:
      "Shane's Rib Shack in Carrollton brings authentic slow-smoked BBQ to the west Georgia community. Located on Bankhead Highway, this location is a go-to spot for Carrollton residents and visitors alike who crave real Southern BBQ.",
    sections: [
      {
        heading: "BBQ Worth the Drive",
        paragraphs: [
          "The Carrollton location serves all the Shane's classics: baby back ribs, chopped pork, chicken, wings, and a full lineup of Southern sides. Whether you're dining in or taking out, the food is made fresh and smoked on-site.",
          "It's a popular stop for game day catering, family dinners, and lunch breaks. The staff knows the regulars by name, and the service is as warm as the food.",
        ],
      },
    ],
    closing:
      "Next time you're in Carrollton, stop by the Shack for BBQ that hits the spot.",
  },
};

/** Douglasville location. */
export const DOUGLASVILLE: LocationDetail = {
  slug: "douglasville-ga",
  name: "Douglasville",
  shortName: "Douglasville",
  address: "6480 Douglas Blvd, Douglasville, GA 30135",
  phone: "+1 770-577-7427",
  phoneAlert: "+17705777427",
  phoneHref: "tel:+17705777427",
  hours: "MON-SUN, 11:00 AM-9:00 PM",
  locationId: "DOUGLASVILLE",
  storefrontImage: "/images/locations/edgewood-storefront.jpg",
  mapsUrl:
    "https://www.google.com/maps/dir//Shane's+Rib+Shack,+6480+Douglas+Blvd,+Douglasville,+GA+30135",
  cateringMinimum: "$200.00",
  ezCaterUrl:
    "https://www.ezcater.com/catering/shanes-rib-shack-douglasville",
  changeLocationUrl: "/locations/",
  content: {
    heading: "Shane's Rib Shack in Douglasville, GA",
    addressLine: "6480 Douglas Blvd, Douglasville, GA 30135",
    callLine: "Call for Pickup: (770) 577-7427",
    introHtml:
      "Shane's Rib Shack in Douglasville serves the same award-winning BBQ that made the brand famous, now convenient for the west Atlanta suburbs. Located on Douglas Boulevard, this location is a favorite for families, commuters, and anyone craving real hickory-smoked BBQ.",
    sections: [
      {
        heading: "Suburban BBQ Done Right",
        paragraphs: [
          "The Douglasville location brings the full Shane's experience to the suburbs. From full racks of baby back ribs to chopped pork plates, chicken tenders, and wings, every order is made from scratch and smoked in-house.",
          "It's a popular choice for catering events, weekend family dinners, and quick lunch stops. The drive-through makes it easy to grab BBQ on the go without sacrificing quality.",
        ],
      },
    ],
    closing:
      "Find us on Douglas Boulevard and taste why Douglasville keeps coming back to the Shack.",
  },
};

export const ALL_LOCATIONS: LocationDetail[] = [
  EDGEWOOD,
  NORCROSS,
  CARROLLTON,
  DOUGLASVILLE,
];

export const LOCATIONS_BY_SLUG: Record<string, LocationDetail> =
  Object.fromEntries(ALL_LOCATIONS.map((loc) => [loc.slug, loc]));

/** Card row on the `/locations/` finder (DK-Location / MB-Location). */
export type LocationListItem = {
  id: string;
  /** Red uppercase title, e.g. "Edgewood - Atlanta, GA". */
  title: string;
  address: string;
  mapsUrl: string;
  cateringUrl: string;
  /** When set, View Details → `/locations/[slug]/`. */
  slug?: string;
  closedTemporarily?: boolean;
};

/** Listing titles that match Figma DK-Location card copy. */
const LIST_TITLES: Record<string, string> = {
  "edgewood-atlanta-ga": "Edgewood - Atlanta, GA",
  "norcross-ga": "Norcross, GA",
  "carrollton-ga": "Carrollton, GA",
  "douglasville-ga": "Douglasville, GA",
};

function listItemFromDetail(loc: LocationDetail): LocationListItem {
  return {
    id: loc.slug,
    title: LIST_TITLES[loc.slug] ?? loc.name,
    address: loc.content.addressLine,
    mapsUrl: loc.mapsUrl,
    cateringUrl: loc.ezCaterUrl,
    slug: loc.slug,
  };
}

/**
 * Finder list for `/locations/` — detail-backed shacks plus Figma showcase
 * rows that do not yet have local detail pages.
 */
export const LOCATION_LIST_ITEMS: LocationListItem[] = [
  listItemFromDetail(EDGEWOOD),
  {
    id: "airport-atlanta-ga",
    title: "Airport - Atlanta, GA (CLOSED TEMPORARILY)",
    address: "6000 N Terminal Pkwy Atlanta, GA 30320",
    mapsUrl:
      "https://www.google.com/maps/dir//Shane's+Rib+Shack,+6000+N+Terminal+Pkwy,+Atlanta,+GA+30320",
    cateringUrl: "https://www.ezcater.com/brand/shanes-rib-shack",
    closedTemporarily: true,
  },
  {
    id: "cumberland-pointe-atlanta-ga",
    title: "Cumberland Pointe - Atlanta, GA",
    address: "3155 Cobb Parkway Atlanta, GA 30339",
    mapsUrl:
      "https://www.google.com/maps/dir//Shane's+Rib+Shack,+3155+Cobb+Parkway,+Atlanta,+GA+30339",
    cateringUrl: "https://www.ezcater.com/brand/shanes-rib-shack",
  },
  listItemFromDetail(NORCROSS),
  listItemFromDetail(CARROLLTON),
  listItemFromDetail(DOUGLASVILLE),
];

/** Resolve a location from a pathname like `/locations/edgewood-atlanta-ga/`. */
export function locationFromPathname(pathname: string): LocationDetail | null {
  const match = pathname.match(/\/locations\/([^/]+)\/?$/);
  if (!match) return null;
  return LOCATIONS_BY_SLUG[match[1]] ?? null;
}

/** Order platform entry point with no store preselected. */
export const ORDER_HOME_URL = "https://order.shanesribshack.com/order";

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