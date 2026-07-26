import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found | Shane's Rib Shack",
};

export default function NotFound() {
  return (
    <main
      id="main-content"
      className="flex min-h-[60vh] flex-1 flex-col items-center justify-center bg-brand-tan px-5 text-center"
    >
      <h1 className="mb-4 text-6xl font-extrabold uppercase text-brand-red lg:text-8xl">
        404
      </h1>
      <p className="mb-2 text-xl font-bold uppercase text-brand-black">
        Page Not Found
      </p>
      <p className="mb-8 max-w-md text-base leading-relaxed text-brand-gray">
        {`Looks like this page got lost somewhere between the smoker and the table.
        Let's get you back to the BBQ.`}
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-[5px] bg-brand-red px-8 py-4 text-sm font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25]"
      >
        Back to Home
      </Link>
    </main>
  );
}