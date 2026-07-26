import type { Metadata } from "next";
import OurStoryHero from "@/components/OurStoryHero";
import OurStorySections from "@/components/OurStorySections";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "Our Story | Shane's Rib Shack",
  description:
    "Shane's Rib Shack started in a tiny shack in McDonough, GA. Family, hard work, and darn-good BBQ — still serving Big Dad's recipes today.",
};

export default function OurStoryPage() {
  return (
    <PageShell>
      <OurStoryHero />
      <OurStorySections />
    </PageShell>
  );
}
