import CateringForm from "@/components/CateringForm";
import CateringMenu from "@/components/CateringMenu";
import ContactBanner from "@/components/ContactBanner";
import PathDecision from "@/components/PathDecision";
import RewardsApp from "@/components/RewardsApp";
import SiteFooter from "@/components/SiteFooter";
import StickyPathBar from "@/components/StickyPathBar";

export default function Home() {
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
