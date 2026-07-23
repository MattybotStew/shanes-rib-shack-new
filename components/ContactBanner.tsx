/** Full-width catering contact strip — email + phone as text links. */
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
        <span className="hidden text-white/50 sm:inline" aria-hidden>
          ·
        </span>
        <a href="tel:7704166606" className="underline-offset-2 hover:underline">
          (770) 416-6606
        </a>
      </p>
    </div>
  );
}
