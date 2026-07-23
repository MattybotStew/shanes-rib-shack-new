import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import Header from "@/components/Header";
import HashScroll from "@/components/HashScroll";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Shane's Rib Shack",
  description: "Find your shack. Order ribs, catering, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} h-full scroll-smooth antialiased`}>
      <body className="flex min-h-full flex-col font-sans">
        <a
          href="#main-content"
          className="sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:m-0 focus:inline-flex focus:h-auto focus:w-auto focus:overflow-visible focus:rounded focus:bg-brand-red focus:px-4 focus:py-2 focus:text-sm focus:font-bold focus:text-white focus:[clip:auto]"
        >
          Skip to content
        </a>
        <Header />
        <HashScroll />
        {children}
      </body>
    </html>
  );
}
