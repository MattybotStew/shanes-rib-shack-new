import Link from "next/link";
import { asset } from "@/lib/asset";

const title = "Need a Custom Catering Quote?";
const body =
  "Large events, weddings, or special requests — tell us a few details and a specialist will reach out during business hours.";

export default function BigCta() {
  return (
    <section
      className="relative flex w-full flex-col items-center justify-center overflow-hidden px-5 py-10 lg:px-0 lg:py-[60px]"
      aria-label="Request a custom catering quote"
    >
      <div aria-hidden className="pointer-events-none absolute inset-0">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={asset("/images/big-cta-bg.jpg")}
          alt=""
          className="absolute inset-0 size-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>

      <div className="relative hidden w-full max-w-[1200px] items-center justify-center rounded-[12px] border-[3px] border-[rgba(239,234,220,0.4)] px-[50px] py-[90px] lg:flex">
        <div className="flex w-full flex-col items-center justify-center gap-[30px] px-[130px]">
          <h2 className="w-full text-center text-[48px] font-extrabold uppercase leading-none text-white">
            {title}
          </h2>
          <p className="w-full text-center text-lg font-semibold leading-[1.5] text-white opacity-[0.83]">
            {body}
          </p>
          <Link
            href="#catering-inquiry"
            className="inline-flex items-center justify-center rounded-[5px] bg-brand-red px-[26px] py-5 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold"
          >
            Request a Custom Quote
          </Link>
          <p className="text-sm font-semibold text-white/75">
            Takes about 1 minute · Reply during business hours
          </p>
        </div>
      </div>

      <div className="relative flex w-full flex-col items-center justify-center rounded-[12px] border-[3px] border-[rgba(239,234,220,0.4)] px-[30px] py-10 lg:hidden">
        <div className="flex w-full flex-col items-center gap-[30px]">
          <h2 className="w-full text-center text-[36px] font-extrabold uppercase leading-none text-white sm:text-[45px]">
            {title}
          </h2>
          <p className="w-full text-center text-lg font-semibold leading-[1.5] text-white opacity-[0.83]">
            {body}
          </p>
          <Link
            href="#catering-inquiry"
            className="inline-flex w-full max-w-[280px] items-center justify-center rounded-[5px] bg-brand-red px-[26px] py-5 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25]"
          >
            Request a Custom Quote
          </Link>
          <p className="text-center text-sm font-semibold text-white/75">
            Takes about 1 minute · Reply during business hours
          </p>
        </div>
      </div>
    </section>
  );
}
