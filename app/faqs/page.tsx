import type { Metadata } from "next";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = {
  title: "FAQs | Shane's Rib Shack",
  description:
    "Frequently asked questions about Shane's Rib Shack catering, menu, locations, and more.",
};

const faqs = [
  {
    q: "What are your hours?",
    a: "Most locations are open Monday through Sunday, 11:00 AM to 9:00 PM. Hours may vary by location, so check your local shack's page for exact times.",
  },
  {
    q: "Do you offer catering?",
    a: "Yes! We cater offices, parties, weddings, and events of all sizes. Choose from our catering packages like One Meat, Two Meat, Three Meat, or Boxed Lunches. Each includes sides, bread, BBQ sauce, tea, and disposableware. Visit our catering page to order online or request a quote.",
  },
  {
    q: "What's the minimum for catering?",
    a: "Our catering minimum is $200. We recommend ordering at least 2-3 days in advance to ensure availability.",
  },
  {
    q: "Can I order online?",
    a: "Absolutely! Order online for pickup or delivery through ezCater. You can also order directly from your nearest location by phone.",
  },
  {
    q: "Do you have a rewards program?",
    a: "Yes! Download the Shane's Rib Shack app to earn points with every purchase, get exclusive offers, and enjoy a birthday reward. Available on iOS and Android.",
  },
  {
    q: "Do you have gift cards?",
    a: "Gift cards are available for purchase at any location or online. They make the perfect gift for BBQ lovers and can be redeemed at any Shane's Rib Shack.",
  },
  {
    q: "What's on the menu?",
    a: "We serve slow-smoked baby back ribs, chopped pork, chopped chicken, wings, chicken tenders, and classic Southern sides like mac & cheese, Brunswick stew, baked beans, coleslaw, and potato salad. Don't forget dessert — homemade peach cobbler, brownies, and cookies.",
  },
  {
    q: "Do you have gluten-free options?",
    a: "Many of our meats and sides are naturally gluten-free. Please ask your server for details and recommendations.",
  },
  {
    q: "Can I book a location for an event?",
    a: "Contact your nearest Shane's Rib Shack location to inquire about event bookings and private dining options.",
  },
];

export default function FaqsPage() {
  return (
    <PageShell>
      <section className="relative flex min-h-[250px] items-center justify-center overflow-hidden bg-brand-black lg:min-h-[350px]">
        <div className="relative z-10 px-5 py-16 text-center text-white lg:py-24">
          <h1 className="mb-4 text-4xl font-extrabold uppercase leading-tight lg:text-5xl">
            FAQs
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-white/80">
            Got questions? We&rsquo;ve got answers.
          </p>
        </div>
      </section>

      <section className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24">
        <div className="mx-auto max-w-[800px] space-y-6">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="group overflow-hidden rounded-lg bg-white shadow-sm"
            >
              <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-base font-bold uppercase text-brand-black transition-colors hover:text-brand-red">
                {faq.q}
                <span className="ml-2 shrink-0 text-brand-red transition-transform duration-200 group-open:rotate-45">
                  +
                </span>
              </summary>
              <div className="border-t border-brand-black/10 px-6 py-5 text-base leading-relaxed text-brand-gray">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>
    </PageShell>
  );
}