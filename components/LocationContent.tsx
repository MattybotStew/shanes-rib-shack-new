import type { LocationDetail } from "@/lib/locationData";

/**
 * Live `.location_content` SEO card beneath the hero.
 * Renders trusted copy from location data (links already sanitized in source).
 */
export default function LocationContent({
  location,
}: {
  location: LocationDetail;
}) {
  const { content } = location;

  return (
    <section
      className="w-full bg-white px-4 pb-10 lg:px-[15px] lg:pb-16"
      aria-label={`${location.shortName} location details`}
    >
      <div className="mx-auto w-full max-w-[1200px] rounded-[12px] border border-black/20 px-5 py-8 lg:px-20 lg:py-20">
        <h2 className="text-[24px] font-bold uppercase leading-tight text-brand-black sm:text-[28px] lg:text-[32px]">
          {content.heading}
        </h2>

        <p className="mt-6 text-[17px] font-normal leading-7 text-brand-black">
          {content.addressLine}
          <br />
          {content.callLine.includes(":") ? (
            <>
              {content.callLine.split(":")[0]}:{" "}
              <a
                href={location.phoneHref}
                className="font-normal text-brand-red hover:underline"
              >
                {content.callLine.split(":").slice(1).join(":").trim()}
              </a>
            </>
          ) : (
            content.callLine
          )}
        </p>

        <p
          className="mt-10 text-[17px] font-normal leading-7 text-brand-black [&_a]:font-normal [&_a]:text-brand-red [&_a]:underline-offset-2 hover:[&_a]:underline"
          dangerouslySetInnerHTML={{ __html: content.introHtml }}
        />

        {content.sections.map((section) => (
          <div key={section.heading} className="mt-10">
            <h3 className="text-[20px] font-bold leading-snug text-brand-black">
              {section.heading}
            </h3>
            {section.paragraphs.map((p) => (
              <p
                key={p.slice(0, 48)}
                className="mt-6 text-[17px] font-normal leading-7 text-brand-black [&_a]:font-normal [&_a]:text-brand-red [&_a]:underline-offset-2 hover:[&_a]:underline [&_strong]:font-semibold [&_strong]:text-[#828282]"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
        ))}

        <p className="mt-10 mb-0 text-[17px] font-normal leading-7 text-brand-black">
          {content.closing}
        </p>
      </div>
    </section>
  );
}
