import Link from "next/link";

const introBody =
  "Get ready to sit back, relax and enjoy your next event or party by letting the professionals at Shane's Rib Shack take care of the food! We are proud to offer our signature barbecue and side dishes in four different catering packages to satisfy events of all sizes. Our catering packages were designed to allow flexibility and a great selection of choices that can be customized for your event.";

const dessertNote = "Add Dessert to any package! Choose from:";
const desserts = "Homemade Peach Cobbler, Brownies, & Cookies";

type PackageCard = {
  title: string;
  items: string[];
};

const packages: PackageCard[] = [
  {
    title: "One Meat",
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
    title: "Ribs & One Meat",
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
    title: "Two Meat",
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
    title: "Three Meat",
    items: [
      "Ribs, Chopped Pork, & Chopped Chicken",
      "Two Side Items",
      "Bread & BBQ",
      "Sauce",
      "Tea",
      "Plates, Cups, Utensils, & Napkins",
    ],
  },
];

const boxedLunch = {
  title: "Boxed Lunches",
  lines: [
    "Pick Your Sandwich:",
    "Big Dad Pork Sandwich or BBQ Chicken Sandwich",
    "Served with:",
    "Chips, Cookie, & Tea OR One Side, Cookie, & Tea",
  ],
};

function Divider() {
  return <div className="h-px w-full bg-brand-black/15" aria-hidden />;
}

function PackageCardView({ title, items }: PackageCard) {
  return (
    <article className="flex flex-col gap-[30px] rounded-[12px] border border-black/10 bg-brand-tan p-[30px]">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold uppercase leading-none text-brand-red">
          {title}
        </h3>
        <Divider />
        <ul className="flex flex-col gap-4">
          {items.map((item, i) => (
            <li key={item} className="flex flex-col gap-4">
              <p className="text-lg font-semibold leading-[1.5] text-brand-black">
                {item}
              </p>
              {i < items.length - 1 ? <Divider /> : null}
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

function BoxedLunchCard() {
  return (
    <article className="flex flex-col gap-[30px] rounded-[12px] border border-black/10 bg-brand-tan p-[30px]">
      <div className="flex flex-col gap-6">
        <h3 className="text-2xl font-semibold uppercase leading-none text-brand-red">
          {boxedLunch.title}
        </h3>
        <Divider />
        <div className="flex flex-col gap-4">
          {boxedLunch.lines.map((line, i) => (
            <div key={line} className="flex flex-col gap-4">
              <p className="text-lg font-semibold leading-[1.5] text-brand-black">
                {line}
              </p>
              {i < boxedLunch.lines.length - 1 ? <Divider /> : null}
            </div>
          ))}
        </div>
      </div>
    </article>
  );
}

function PromoBanner() {
  return (
    <div className="flex h-full min-h-[277px] flex-col self-stretch rounded-[20px] border border-black/10 bg-brand-red p-2.5">
      <div className="relative flex min-h-[277px] flex-1 items-center justify-center overflow-hidden rounded-[10px] px-[60px] py-2">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/images/catering-menu-banner.jpg"
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black" aria-hidden />
        <p className="relative text-center text-base font-bold uppercase leading-4 text-white">
          client promotional banner image - client needs to be able to upload
          desk and mobile images
        </p>
      </div>
    </div>
  );
}

function IntroCard({ compact }: { compact?: boolean }) {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-[30px] rounded-[12px] border border-[rgba(31,33,31,0.2)] bg-brand-tan text-center ${
        compact
          ? "items-start border-black/10 p-[30px] text-center"
          : "px-8 py-10 sm:px-[80px] sm:py-[70px]"
      }`}
    >
      <h2
        className={`w-full uppercase leading-none text-brand-red ${
          compact
            ? "text-2xl font-semibold"
            : "text-[32px] font-extrabold lg:text-[48px]"
        }`}
      >
        Catering Menu
      </h2>
      <div
        className={`w-full text-brand-black ${
          compact ? "text-[13px] font-semibold leading-[1.5]" : "text-lg leading-[1.5]"
        }`}
      >
        <p className={compact ? "font-normal" : "font-normal"}>{introBody}</p>
        <p className="my-0 leading-[1.5]">&nbsp;</p>
        <p className={`mb-0 font-bold leading-[1.5]`}>**{dessertNote}</p>
        <p className="leading-[1.5]">{desserts}</p>
      </div>
    </div>
  );
}

function FooterCard() {
  return (
    <div className="flex w-full max-w-[960px] flex-col items-center justify-center gap-[30px] rounded-[12px] border border-[rgba(31,33,31,0.2)] bg-brand-tan px-8 py-10 text-center sm:px-[80px] sm:py-[70px]">
      <div className="w-full text-lg leading-[1.5] text-brand-black">
        <p className="mb-0 font-bold leading-[1.5]">Side Selections Include:</p>
        <p className="font-normal leading-[1.5]">
          Baked Beans, Coleslaw, Brunswick Stew, Mac &amp; Cheese, Potato Salad,
          &amp; Side Salad
        </p>
      </div>
      <div className="w-full text-lg leading-[1.5] text-brand-black">
        <p className="mb-0 font-bold leading-[1.5]">**{dessertNote}</p>
        <p className="font-normal leading-[1.5]">{desserts}</p>
      </div>
      <div className="flex w-full max-w-[602px] flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          href="#catering-inquiry"
          className="inline-flex flex-1 items-center justify-center rounded-[5px] bg-brand-red px-[26px] py-5 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25]"
        >
          Submit Catering Inquiry
        </Link>
        <Link
          href="/order"
          className="inline-flex flex-1 items-center justify-center rounded-[5px] bg-brand-black px-[26px] py-5 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#1c2730]"
        >
          Order Catering Online
        </Link>
      </div>
    </div>
  );
}

export default function CateringMenu() {
  return (
    <section
      className="flex w-full flex-col items-center"
      aria-label="Catering menu"
    >
      {/* Desktop — node 6250:6101 */}
      <div className="hidden w-full flex-col items-center gap-[30px] px-5 py-20 lg:flex">
        <div className="flex w-full max-w-[960px] flex-col items-center">
          <IntroCard />
        </div>

        <div className="grid w-full max-w-[1200px] grid-cols-3 gap-5">
          {packages.map((pkg) => (
            <PackageCardView key={pkg.title} {...pkg} />
          ))}
          <BoxedLunchCard />
          <PromoBanner />
        </div>

        <FooterCard />
      </div>

      {/* Mobile — intro 6250:6632 + cards 6250:6638 */}
      <div className="flex w-full flex-col items-center lg:hidden">
        <div className="w-full px-5 py-10">
          <IntroCard compact />
        </div>

        <div className="flex w-full flex-col gap-5 px-5 pb-10">
          {packages.map((pkg) => (
            <PackageCardView key={pkg.title} {...pkg} />
          ))}
          <BoxedLunchCard />
          <PromoBanner />
          <FooterCard />
        </div>
      </div>
    </section>
  );
}
