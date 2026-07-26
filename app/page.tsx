import type { Metadata } from "next";
import CateringPromo from "@/components/CateringPromo";
import GiftCardPromo from "@/components/GiftCardPromo";
import HomeHero from "@/components/HomeHero";
import RewardsApp from "@/components/RewardsApp";
import ShackNews from "@/components/ShackNews";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Shane's Rib Shack | Slow-Smoked BBQ, Ribs & Family Meals",
  description:
    "Slow-smoked baby back ribs, hand-chopped BBQ pork, and classic Southern sides. Order online, book catering, or shop gift cards.",
};

export default function Home() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <HomeHero />
      <CateringPromo />
      <ShackNews />
      <GiftCardPromo />
      <RewardsApp />
      <SiteFooter />
    </main>
  );
}
