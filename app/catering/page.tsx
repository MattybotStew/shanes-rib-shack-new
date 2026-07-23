import type { Metadata } from "next";
import BigCta from "@/components/BigCta";
import CateringForm from "@/components/CateringForm";
import CateringMenu from "@/components/CateringMenu";
import Hero from "@/components/Hero";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "BBQ Catering | Shane's Rib Shack",
  description:
    "Order standard catering online or request a custom quote for offices, weddings, and events. Instant checkout or a specialist reply during business hours.",
};

export default function CateringPage() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      <Hero />
      <BigCta />
      <CateringMenu />
      <CateringForm />
      <SiteFooter />
    </main>
  );
}
