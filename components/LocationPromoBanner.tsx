/**
 * Optional promo slot — live Edgewood currently has no promo image.
 * Renders nothing until a CMS image is provided (avoids dashed placeholder).
 */
export default function LocationPromoBanner({
  desktopSrc,
  mobileSrc,
  alt = "Promotional banner",
}: {
  desktopSrc?: string;
  mobileSrc?: string;
  alt?: string;
} = {}) {
  if (!desktopSrc && !mobileSrc) return null;

  return (
    <section
      className="flex w-full flex-col items-center bg-white px-4 py-6 lg:px-[15px] lg:py-10"
      aria-label="Promotional banner"
    >
      <div className="w-full max-w-[1200px] overflow-hidden rounded-[12px] bg-brand-red p-2.5">
        {desktopSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={desktopSrc}
            alt={alt}
            className="hidden w-full rounded-[10px] sm:block"
          />
        ) : null}
        {mobileSrc || desktopSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={mobileSrc || desktopSrc}
            alt={alt}
            className="block w-full rounded-[10px] sm:hidden"
          />
        ) : null}
      </div>
    </section>
  );
}
