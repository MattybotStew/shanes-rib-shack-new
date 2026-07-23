import CateringForm from "@/components/CateringForm";
import CateringMenu from "@/components/CateringMenu";
import ContactBanner from "@/components/ContactBanner";
import PathDecision from "@/components/PathDecision";
import RewardsApp from "@/components/RewardsApp";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      {/* Hero hidden for now — restore <Hero /> above ContactBanner when ready */}
      <ContactBanner />
      <PathDecision />
      <CateringMenu />
      <CateringForm />
      <RewardsApp />
      <SiteFooter />
    </main>
  );
}
