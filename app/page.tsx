import BigCta from "@/components/BigCta";
import CateringForm from "@/components/CateringForm";
import CateringMenu from "@/components/CateringMenu";
import Hero from "@/components/Hero";
import RewardsApp from "@/components/RewardsApp";
import SiteFooter from "@/components/SiteFooter";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col">
      <Hero />
      <BigCta />
      <CateringMenu />
      <CateringForm />
      <RewardsApp />
      <SiteFooter />
    </main>
  );
}
