/** Homepage "Latest Shack News" carousel items. */
export type NewsItem = {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
};

export const newsItems: NewsItem[] = [
  {
    title: "Cheers to 22 Years!",
    excerpt:
      "Join us Sunday April 21st to celebrate 22 years at the Original Shane's Rib Shack!",
    href: "https://www.shanesribshack.com/news/24-years-of-shanes-rib-shack/",
    image: "/images/home/news-1.jpg",
    imageAlt: "Shane's Rib Shack 22 year anniversary artwork",
  },
  {
    title: "2023 Grand Prize Winner Reveal",
    excerpt:
      "Congratulations to Mrs. Brenda Clark on her BRAND NEW BOAT! See how she took home the top prize.",
    href: "https://www.shanesribshack.com/news/are-you-ready-to-take-on-the-challenge/",
    image: "/images/home/news-2.jpg",
    imageAlt: "Shane's Rib Shack grand prize winner with her new boat",
  },
  {
    title: "March Madness Catering",
    excerpt:
      "Build your BBQ menu bracket and let Shane's feed the whole watch party.",
    href: "https://www.shanesribshack.com/news/march-madness-catering-build-your-bbq-menu-bracket/",
    image: "/images/home/news-3.jpg",
    imageAlt: "Shane's Rib Shack catering spread for a game day party",
  },
];
