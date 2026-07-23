import type { Metadata } from "next";
import CateringForm from "@/components/CateringForm";
import CateringMenu from "@/components/CateringMenu";
import ContactBanner from "@/components/ContactBanner";
import PathDecision from "@/components/PathDecision";
import RewardsApp from "@/components/RewardsApp";
import SiteFooter from "@/components/SiteFooter";
import StickyPathBar from "@/components/StickyPathBar";

export const metadata: Metadata = {
  title: "BBQ Catering | Shane's Rib Shack",
  description:
    "Order standard catering online or get a quote for offices, weddings, and events. Instant checkout or a specialist reply during business hours.",
};

export default function CateringPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col pb-20 lg:pb-0">
      <ContactBanner />
      <PathDecision />
      <CateringForm />
      <CateringMenu />
      <RewardsApp />
      <SiteFooter />
      <StickyPathBar />
    </main>
  );
}
