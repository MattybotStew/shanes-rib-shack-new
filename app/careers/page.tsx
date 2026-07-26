import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import { asset } from "@/lib/asset";
import Cta from "@/components/Cta";
import CareersForm from "@/components/CareersForm";

export const metadata: Metadata = {
  title: "Careers | Shane's Rib Shack",
  description:
    "Join the Shane's Rib Shack team. View open positions and apply today.",
};

const benefits = [
  {
    number: "Benefit 1:",
    title: "Great Team Environment",
    description:
      "Join a close-knit team where camaraderie and mutual respect are at the heart of our operations. We believe in fostering a positive workplace where everyone feels valued and empowered.",
    image: "/images/careers/benefit-team.jpg",
    imageAlt: "Shane's Rib Shack team members working together",
  },
  {
    number: "Benefit 2:",
    title: "Flexible Scheduling",
    description:
      "We understand the importance of work-life balance. Whether you're a student, parent, or pursuing other passions, we offer flexible scheduling to accommodate your lifestyle.",
    image: "/images/careers/benefit-schedule.jpg",
    imageAlt: "Flexible work schedule at Shane's Rib Shack",
  },
  {
    number: "Benefit 3:",
    title: "Opportunities for Growth",
    description:
      "At Shane's, we invest in our team members' development. With clear pathways for advancement, your hard work and dedication can lead to new and exciting opportunities within the company.",
    image: "/images/careers/benefit-growth.jpg",
    imageAlt: "Career growth opportunities at Shane's Rib Shack",
  },
];

export default function CareersPage() {
  return (
    <PageShell showRewards={false}>
      {/* Hero */}
      <section className="relative flex min-h-[400px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[640px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/careers/hero.jpg")}
          alt=""
          className="absolute inset-0 size-full object-cover opacity-50"
          aria-hidden
        />
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            Join Our Team
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            {`At Shane's Rib Shack, we're more than a restaurant — we're a\n            family. Find your place at the Shack and help us serve up\n            slow-smoked BBQ and Southern hospitality.`}
          </p>
        </div>
      </section>

      {/* Benefits — 3 columns (Figma TopHeadHero `6250:7145`) */}
      <section className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid gap-8 lg:grid-cols-3">
            {benefits.map((b) => (
              <div
                key={b.title}
                className="flex flex-col rounded-lg bg-white p-5 shadow-sm lg:p-6"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={asset(b.image)}
                  alt={b.imageAlt}
                  className="mb-5 aspect-[3/2] w-full rounded object-cover"
                />
                <span className="mb-2 text-xs font-bold uppercase tracking-wider text-brand-red">
                  {b.number}
                </span>
                <h3 className="mb-3 text-lg font-extrabold uppercase text-brand-black">
                  {b.title}
                </h3>
                <p className="text-sm leading-relaxed text-brand-gray">
                  {b.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-page image */}
      <section className="relative h-[300px] overflow-hidden bg-brand-black lg:h-[350px]">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/careers/mid-image.jpg")}
          alt="Shane's Rib Shack team"
          className="size-full object-cover opacity-60"
        />
      </section>

      {/* Application form (Figma Cat-form `6250:7172`) */}
      <CareersForm />

      {/* External careers link */}
      <section className="bg-brand-black px-5 py-16 text-center lg:py-24">
        <div className="mx-auto max-w-[600px]">
          <h2 className="mb-4 text-2xl font-extrabold uppercase text-white">
            Already Know What You Want?
          </h2>
          <p className="mb-8 text-lg leading-relaxed text-white/70">
            Browse all open positions and apply directly through our careers
            portal.
          </p>
          <Cta
            href="https://www.shanesribshack.com/careers/"
            variant="red"
          >
            View Open Positions
          </Cta>
        </div>
      </section>
    </PageShell>
  );
}
