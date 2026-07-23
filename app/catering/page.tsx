import type { Metadata } from "next";
import CateringForm from "@/components/CateringForm";
import CateringMenu from "@/components/CateringMenu";
import ContactBanner from "@/components/ContactBanner";
import PathDecision from "@/components/PathDecision";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "BBQ Catering | Shane's Rib Shack",
  description:
    "Order standard catering online or request a custom quote for offices, weddings, and events. Instant checkout or a specialist reply during business hours.",
};

export default function CateringPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      {/* Hero hidden for now — restore <Hero /> above ContactBanner when ready */}
      <ContactBanner />
      <PathDecision />
      <CateringMenu />
      <CateringForm />
      <SiteFooter />
    </main>
  );
}
