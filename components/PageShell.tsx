import type { ReactNode } from "react";
import SiteFooter from "@/components/SiteFooter";

type PageShellProps = {
  children: ReactNode;
  /** Include RewardsApp section before footer (default: true) */
  showRewards?: boolean;
};

/**
 * Shared page shell — wraps content with main tag, optional RewardsApp, and SiteFooter.
 * Header is already in the root layout, so this only handles per-page content.
 */
export default function PageShell({
  children,
  showRewards = true,
}: PageShellProps) {
  return (
    <main id="main-content" className="flex flex-1 flex-col">
      {children}
      {showRewards && <RewardsAppSection />}
      <SiteFooter />
    </main>
  );
}

/** Inline RewardsApp import to avoid circular deps. */
import RewardsApp from "@/components/RewardsApp";

function RewardsAppSection() {
  return <RewardsApp />;
}