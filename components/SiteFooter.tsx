import Link from "next/link";
import { asset } from "@/lib/asset";

const col1 = [
  { label: "Franchising", href: "/franchise" },
  { label: "Merchandise", href: "/shop" },
  { label: "Press Room", href: "/news-events" },
  { label: "Terms and Conditions of Use", href: "/terms" },
  { label: "Privacy Policy", href: "/privacy" },
];

const col2 = [
  { label: "Cookie and Internet-Based Advertising Policy", href: "/privacy" },
  { label: "Do Not Sell Or Share My Personal Information", href: "/privacy" },
  { label: "Accessibility", href: "/troubleshooting" },
];

const col3 = [
  { label: "Locations", href: "/locations" },
  { label: "Cookie Preference Center", href: "/privacy" },
  { label: "Careers", href: "/careers" },
  { label: "Supply Chain", href: "/contact" },
];

const socialLinks = [
  {
    href: "https://facebook.com/shanesribshack",
    src: "/images/social-facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://instagram.com/shanesribshack",
    src: "/images/social-instagram.svg",
    alt: "Instagram",
  },
  {
    href: "https://youtube.com/@shanesribshack",
    src: "/images/social-youtube.svg",
    alt: "YouTube",
  },
];

function FooterColumn({
  links,
}: {
  links: { label: string; href: string }[];
}) {
  return (
    <div className="flex min-w-0 flex-1 flex-col">
      {links.map((link) => (
        <div key={link.label} className="flex flex-col">
          <Link
            href={link.href}
            className="py-2.5 text-center text-[11px] font-bold uppercase leading-tight text-white transition-opacity hover:opacity-80 lg:text-left lg:text-[9px]"
          >
            {link.label}
          </Link>
          <div className="h-px w-full border-b border-dashed border-white/30" />
        </div>
      ))}
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="flex w-full items-center justify-center bg-brand-red px-[30px] py-10 lg:px-[66px] lg:py-[90px]">
      <div className="flex w-full max-w-[1200px] flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-24">
        {/* Links — 3 columns on desktop, stacked on mobile */}
        <div className="flex w-full flex-col gap-0 lg:flex-row lg:gap-0">
          {/* Mobile: stacked sections with spacing between groups */}
          <div className="flex flex-col gap-8 lg:hidden">
            <FooterColumn links={col1} />
            <FooterColumn links={col2} />
            <FooterColumn links={col3} />
          </div>
          {/* Desktop: 3 columns side by side */}
          <div className="hidden lg:flex lg:w-full lg:flex-row lg:gap-10">
            <FooterColumn links={col1} />
            <FooterColumn links={col2} />
            <FooterColumn links={col3} />
          </div>
        </div>

        {/* Logo + Social + Copyright */}
        <div className="flex shrink-0 flex-col items-center gap-4">
          <Link
            href="/"
            className="relative block size-24 lg:size-28"
            aria-label="Home"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={asset("/images/footer-logo.svg")}
              alt="Shane's Rib Shack"
              className="size-full"
            />
          </Link>
          <div className="flex items-start gap-3 opacity-80">
            {socialLinks.map((s) => (
              <a
                key={s.alt}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="relative block size-[35px]"
                aria-label={s.alt}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(s.src)} alt="" className="size-full" />
              </a>
            ))}
          </div>
          <p className="text-center text-[11px] font-bold uppercase text-white/70">
            {`© ${new Date().getFullYear()} shane's rib shack.`}
          </p>
        </div>
      </div>
    </footer>
  );
}
