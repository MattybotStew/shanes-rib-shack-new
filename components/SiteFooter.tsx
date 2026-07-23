import Link from "next/link";
import { asset } from "@/lib/asset";

const col1 = [
  { label: "Catering & Catering Menu", href: "/catering" },
  { label: "Locations", href: "/locations" },
  { label: "Careers", href: "/careers" },
  { label: "Rewards", href: "/rewards" },
  { label: "Order Online", href: "/order" },
];

const col2 = [
  { label: "Shop", href: "/shop" },
  { label: "Franchise", href: "/franchise" },
  { label: "Franchise Login", href: "/franchise/login" },
  { label: "News & Events", href: "/news-events" },
];

const col3 = [
  { label: "Terms of Use", href: "/terms" },
  { label: "Contact", href: "/contact" },
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Troubleshooting", href: "/troubleshooting" },
  { label: "Gift Card Balance", href: "/gift-cards" },
];

function FooterLinks({ links }: { links: { label: string; href: string }[] }) {
  return (
    <div className="flex min-w-0 flex-1 flex-col items-stretch">
      {links.map((link) => (
        <div key={link.href} className="flex flex-col">
          <Link
            href={link.href}
            className="py-1 text-center text-[13px] font-semibold uppercase leading-[1.5] text-white transition-opacity hover:opacity-80 lg:text-left"
          >
            {link.label}
          </Link>
          <div className="h-0.5 w-full border-b border-dashed border-white/50" />
        </div>
      ))}
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="flex w-full items-center justify-center bg-brand-red px-6 py-12 lg:px-[66px] lg:py-[90px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:items-start lg:justify-center lg:gap-10">
        <div className="flex shrink-0 flex-col items-center gap-6">
          <Link href="/" className="relative block size-32" aria-label="Home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/footer-logo.svg")}
              alt="Shane's Rib Shack"
              className="size-full"
            />
          </Link>
          <div className="flex items-start gap-3.5 opacity-70">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block size-[35px] -scale-y-100"
              aria-label="Facebook"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/images/social-facebook.svg")}
                alt=""
                className="size-full"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block size-[35px] -scale-y-100"
              aria-label="Instagram"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/images/social-instagram.svg")}
                alt=""
                className="size-full"
              />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block size-[35px] -scale-y-100"
              aria-label="YouTube"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={asset("/images/social-youtube.svg")}
                alt=""
                className="size-full"
              />
            </a>
          </div>
          <p className="text-center text-[13px] font-semibold uppercase leading-[1.5] text-white">
            © 2025 shane&apos;s rib shack.
          </p>
        </div>

        <div className="flex w-full flex-col gap-8 sm:flex-row sm:gap-6 lg:gap-10">
          <FooterLinks links={col1} />
          <FooterLinks links={col2} />
          <FooterLinks links={col3} />
        </div>
      </div>
    </footer>
  );
}
