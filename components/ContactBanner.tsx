import Link from "next/link";

/** Full-width catering contact strip — email, phone, menu jump. */
export default function ContactBanner() {
  return (
    <div
      className="flex w-full items-center justify-center bg-brand-red px-5 py-3.5"
      aria-label="Catering contact"
    >
      <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-center text-sm font-bold uppercase tracking-wide text-white sm:text-base">
        <a
          href="mailto:catering@shanesribshack.com"
          className="underline-offset-2 hover:underline"
        >
          catering@shanesribshack.com
        </a>
        <span className="text-white/50" aria-hidden>
          ·
        </span>
        <a href="tel:7704166606" className="underline-offset-2 hover:underline">
          (770) 416-6606
        </a>
        <span className="text-white/50" aria-hidden>
          ·
        </span>
        <Link
          href="#catering-menu"
          className="underline-offset-2 hover:underline"
        >
          See Menu ↓
        </Link>
      </p>
    </div>
  );
}
