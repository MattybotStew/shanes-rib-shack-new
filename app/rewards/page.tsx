import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import RewardsApp from "@/components/RewardsApp";

export const metadata: Metadata = {
  title: "Rewards | Shane's Rib Shack",
  description:
    "Join the Shane's Rib Shack rewards program. Earn points, get exclusive offers, and enjoy birthday rewards.",
};

export default function RewardsPage() {
  return (
    <PageShell showRewards={false}>
      <section className="relative flex min-h-[250px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[350px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Rewards
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Earn points with every visit. Download the app to get started.
          </p>
        </div>
      </section>
      <RewardsApp />
    </PageShell>
  );
}