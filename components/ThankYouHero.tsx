import { asset } from "@/lib/asset";

type ThankYouHeroProps = {
  /** Reason for the thank you (e.g. "catering", "contact") — used for conditional messaging. */
  reason?: string;
};

/**
 * Thank You hero section — Figma DK-thank you TopHeadHero (`6250:8409`).
 * Full-bleed image + centered thank you content.
 */
export default function ThankYouHero({ reason }: ThankYouHeroProps) {
  const message =
    reason === "catering"
      ? "Your catering inquiry has been received! Our team will review your request and get back to you within 24-48 hours."
      : reason === "contact"
        ? "Thanks for reaching out! We'll get back to you as soon as possible."
        : "Thank you! Your submission has been received.";

  return (
    <section className="relative flex min-h-[500px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[650px]">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/images/thank-you/hero.jpg")}
        alt=""
        className="absolute inset-0 size-full object-cover opacity-60"
        aria-hidden
      />
      <div className="relative z-10 mx-auto max-w-[600px] px-5 py-16 text-center text-white lg:py-24">
        {/* Checkmark icon */}
        <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-brand-red">
          <svg
            className="size-8 text-white"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={3}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M5 13l4 4L19 7"
            />
          </svg>
        </div>
        <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
          Thank You!
        </h1>
        <p className="text-lg leading-relaxed text-white/80">{message}</p>
      </div>
    </section>
  );
}
