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

/* ------------------------------------------------------------------ */
/*  Blog / Article data (Figma DK-Blog \`6250:7905\`, DK-Blog-Article)  */
/* ------------------------------------------------------------------ */

export type BlogArticle = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  featured: boolean;
  image: string;
  imageAlt: string;
  content: string;
  category?: string;
};

export function getBlogArticle(slug: string): BlogArticle | undefined {
  return blogArticles.find((a) => a.slug === slug);
}

export function getRelatedArticles(
  slug: string,
  limit = 6,
): BlogArticle[] {
  return blogArticles.filter((a) => a.slug !== slug).slice(0, limit);
}

export const blogArticles: BlogArticle[] = [
  {
    slug: "nba-finals-watch-party-bbq-ideas",
    title: "NBA Finals Watch Party – BBQ Food Ideas and Essentials",
    excerpt:
      "From individual plates to full BBQ catering, Shane's Rib Shack has everything you need to host a championship-worthy NBA Finals watch party.",
    date: "2025-06-01",
    featured: true,
    image: "/images/news-events/article-nba-finals.jpg",
    imageAlt: "BBQ spread for NBA Finals watch party with Shane's Rib Shack food",
    content: `<p>As the NBA's best hit the court for the biggest games of the season, it's time for you to make some plays of your own—starting with what's on the table at your NBA Finals watch party.</p><p>Whether you're throwing a full-on BBQ bash or just having a few friends over to watch the game, Shane's Rib Shack is ready to fuel your crew with slow-smoked meats, game-day sides, and options for every type of appetite. From individual BBQ plates to full-service catering, we've got the playbook for a winning game-day spread.</p><h3>Why Shane's for Your Watch Party?</h3><p>Slow-smoked meats, from-scratch sides, and genuine Southern hospitality make Shane's the MVP of any gathering.</p><ul><li><strong>Slow-Smoked Perfection:</strong> Our meats are smoked low and slow for hours.</li><li><strong>Crowd-Pleasing Variety:</strong> From the Big Dad Sandwich to Shack Baskets.</li><li><strong>Easy Catering:</strong> Skip the stress and let our team handle the food.</li><li><strong>Local Favorite:</strong> A community staple since 2002.</li></ul><p>Ready to make your watch party unforgettable? <a href="/catering/">Get a catering quote</a> or <a href="/order/">order online</a> today.</p>`,
    category: "Catering",
  },
  {
    slug: "march-madness-catering",
    title: "March Madness Catering — Build Your BBQ Menu Bracket",
    excerpt:
      "Build your BBQ menu bracket and let Shane's feed the whole watch party with championship-worthy catering.",
    date: "2025-03-10",
    featured: false,
    image: "/images/news-events/march-madness.jpg",
    imageAlt: "Shane's Rib Shack catering spread for March Madness",
    content: `<p>March Madness is here, and whether your bracket is busted or you're still in the running, one thing's for sure—you need great food to get through the tournament. Shane's Rib Shack has your game-day catering covered with slow-smoked meats, hearty sides, and desserts that'll have your guests cheering louder than a buzzer-beater.</p><h3>Catering Packages for Every Watch Party</h3><p>From small gatherings to full-on tournament bashes, our catering menu scales to fit your crew. Choose from individual plates, group bundles, or full-service catering with all the fixings.</p><p>Explore our <a href="/catering/">catering options</a> and let us handle the food while you focus on the games.</p>`,
    category: "Catering",
  },
  {
    slug: "new-shack-baskets-menu",
    title: "Introducing: New & Improved Shack Baskets",
    excerpt:
      "We've leveled up our Shack Baskets with bigger portions, new sides, and the same slow-smoked flavor you love.",
    date: "2025-02-15",
    featured: true,
    image: "/images/news-events/shack-baskets.jpg",
    imageAlt: "Shane's Rib Shack new Shack Baskets menu items",
    content: `<p>We heard you loud and clear, and we're excited to announce our newly upgraded Shack Baskets! Bigger portions, new side options, and the same award-winning slow-smoked meats that have made Shane's a community staple for over two decades.</p><h3>What's New?</h3><ul><li><strong>Bigger Portions:</strong> More meat, more sides, more satisfaction.</li><li><strong>New Sides:</strong> Try our new loaded mac & cheese, sweet potato fries, or seasonal vegetable medley.</li><li><strong>Signature Sauces:</strong> Each basket comes with your choice of our house-made sauces.</li></ul><p>Stop by your <a href="/locations/">nearest Shack</a> to try the new Shack Baskets today, or <a href="/order/">order online</a> for pickup.</p>`,
    category: "Menu",
  },
  {
    slug: "community-giving-back-2025",
    title: "Giving Back: How Shane's Supports Local Communities",
    excerpt:
      "From school fundraisers to food drives, see how Shane's Rib Shack is making a difference in the neighborhoods we serve.",
    date: "2025-01-20",
    featured: false,
    image: "/images/news-events/community.jpg",
    imageAlt: "Shane's Rib Shack team members volunteering at a community event",
    content: `<p>At Shane's Rib Shack, community isn't just where we do business—it's who we are. Since opening our doors in 2002, giving back has been at the heart of everything we do.</p><h3>How We Give Back</h3><ul><li><strong>Spirit Nights:</strong> Host a fundraiser at your local Shack.</li><li><strong>Food Drives:</strong> Partnering with local food banks throughout the year.</li><li><strong>First Responder Appreciation:</strong> Special discounts for police, fire, EMS, and military.</li></ul><p>Interested in partnering with Shane's? <a href="/contact/">Contact us</a> to learn more.</p>`,
    category: "Community",
  },
  {
    slug: "holiday-catering-guide",
    title: "The Ultimate Holiday Catering Guide from Shane's",
    excerpt:
      "Make your holiday gathering stress-free with Shane's Rib Shack catering. Tips, menu ideas, and how to order.",
    date: "2024-12-01",
    featured: false,
    image: "/images/news-events/holiday-catering.jpg",
    imageAlt: "Holiday catering spread from Shane's Rib Shack",
    content: `<p>The holidays are about spending time with family and friends—not stressing over the stove. Let Shane's Rib Shack handle the cooking this year.</p><h3>Holiday Catering Tips</h3><ul><li><strong>Order Early:</strong> Holiday slots fill up fast. Book at least 2 weeks in advance.</li><li><strong>Know Your Headcount:</strong> Have a rough guest count ready.</li><li><strong>Mix & Match:</strong> Combine classic BBQ with holiday sides.</li></ul><p>Ready to plan your holiday feast? <a href="/catering/">Get a catering quote</a> today.</p>`,
    category: "Catering",
  },
  {
    slug: "shanes-rewards-program",
    title: "Earn Rewards Every Time You Visit — Introducing Shane's Rewards",
    excerpt:
      "Download the Shane's Rib Shack app and start earning points toward free food, exclusive deals, and more.",
    date: "2024-11-05",
    featured: true,
    image: "/images/news-events/rewards-launch.jpg",
    imageAlt: "Shane's Rib Shack Rewards app on a smartphone",
    content: `<p>We're thrilled to announce the launch of Shane's Rewards—our brand-new loyalty program designed to thank our amazing customers.</p><h3>How It Works</h3><ul><li><strong>Download the App:</strong> Available on iOS and Android.</li><li><strong>Earn Points:</strong> Get 1 point for every dollar spent.</li><li><strong>Redeem Rewards:</strong> Cash in your points for free food, drinks, and more.</li><li><strong>Birthday Bonus:</strong> Enjoy a special treat on your birthday, on us!</li></ul><p><a href="/rewards/">Learn more about Shane's Rewards</a> and start earning today.</p>`,
    category: "Promotions",
  },
  {
    slug: "summer-bbq-essentials",
    title: "Summer BBQ Essentials — What to Order for Your Backyard Bash",
    excerpt:
      "From ribs to sides, here's your checklist for the ultimate summer BBQ powered by Shane's Rib Shack.",
    date: "2024-07-15",
    featured: false,
    image: "/images/news-events/summer-bbq.jpg",
    imageAlt: "Backyard summer BBQ with Shane's Rib Shack food",
    content: `<p>Summer is BBQ season, and nobody does it better than Shane's. Here's your ultimate checklist for a crowd-pleasing spread.</p><h3>The Summer BBQ Checklist</h3><ul><li><strong>Ribs:</strong> Slow-smoked baby back ribs are a must.</li><li><strong>Pulled Pork:</strong> Tender, juicy, perfect for sandwiches.</li><li><strong>Smoked Chicken:</strong> A lighter option with that smoky flavor.</li><li><strong>Sides:</strong> Mac & cheese, coleslaw, baked beans, cornbread.</li><li><strong>Sauces:</strong> Stock up on our signature sauces.</li><li><strong>Sweet Tea:</strong> No Southern BBQ is complete without it.</li></ul><p><a href="/catering/">Get your summer catering quote</a> and let us handle the grill.</p>`,
    category: "Catering",
  },
  {
    slug: "franchise-opportunities-2024",
    title: "Bring Shane's to Your Community — Franchise Opportunities",
    excerpt:
      "Join the Shane's Rib Shack family. Learn about franchise opportunities and how to open your own Shack.",
    date: "2024-06-01",
    featured: false,
    image: "/images/news-events/franchise.jpg",
    imageAlt: "Shane's Rib Shack franchise location storefront",
    content: `<p>Shane's Rib Shack is growing, and we're looking for passionate entrepreneurs to join our family. With a proven business model, strong brand recognition, and comprehensive support, opening a Shane's franchise is your opportunity to bring authentic Southern BBQ to your community.</p><h3>Why Franchise with Shane's?</h3><ul><li><strong>Established Brand:</strong> Over 20 years of BBQ tradition.</li><li><strong>Proven Systems:</strong> From operations to marketing, we provide the playbook.</li><li><strong>Ongoing Support:</strong> Training, site selection, and continuous guidance.</li><li><strong>Growing Demand:</strong> BBQ is one of the fastest-growing restaurant segments.</li></ul><p><a href="/franchise/">Learn more about franchising</a> and start your journey.</p>`,
    category: "Franchise",
  },
  {
    slug: "new-sauce-lineup",
    title: "Try Our New Sauce Lineup — Available in Store and Online",
    excerpt:
      "Shane's introduces three new signature sauces. Taste them at your local Shack or order bottles online.",
    date: "2024-04-20",
    featured: false,
    image: "/images/news-events/new-sauces.jpg",
    imageAlt: "New Shane's Rib Shack signature sauce bottles",
    content: `<p>We're excited to unveil three new additions to our signature sauce lineup!</p><h3>Meet the New Sauces</h3><ul><li><strong>Sweet & Smoky:</strong> A perfect balance of molasses sweetness and hickory smoke.</li><li><strong>Carolina Gold:</strong> Tangy mustard-based sauce with a peppery kick.</li><li><strong>Spicy Chipotle:</strong> Smoky chipotle with a slow-building heat.</li></ul><p>Try them at your <a href="/locations/">local Shack</a> or <a href="/shop/">order bottles online</a>.</p>`,
    category: "Menu",
  },
  {
    slug: "game-day-catering-guide",
    title: "Game Day Catering Guide — Score Big with Shane's BBQ",
    excerpt:
      "Whether it's football, basketball, or baseball, here's how to feed your crew on game day with Shane's catering.",
    date: "2024-02-01",
    featured: false,
    image: "/images/news-events/game-day.jpg",
    imageAlt: "Game day spread with Shane's Rib Shack catering",
    content: `<p>Game day is better with BBQ. Period. Whether you're tailgating at the stadium or hosting a watch party at home, Shane's Rib Shack has the catering options to make your game day spread the real MVP.</p><h3>Game Day Favorites</h3><ul><li><strong>Rib Racks:</strong> A full rack of our famous baby back ribs.</li><li><strong>Pulled Pork Sliders:</strong> Easy to eat, hard to resist.</li><li><strong>Smoked Wings:</strong> Available in your choice of sauce or dry rub.</li><li><strong>Party Sides:</strong> Mac & cheese, coleslaw, and beans by the pan.</li></ul><p><a href="/catering/">Get your game day catering quote</a> and let's make this season one to remember.</p>`,
    category: "Catering",
  },
  {
    slug: "shanes-rib-shack-history",
    title: "From One Shack to Many — The Story of Shane's Rib Shack",
    excerpt:
      "How a small-town BBQ joint became one of the South's most beloved rib shacks. The Shane's origin story.",
    date: "2024-01-10",
    featured: true,
    image: "/images/news-events/origin-story.jpg",
    imageAlt: "The original Shane's Rib Shack location",
    content: `<p>It all started in 2002 in a small shack in McDonough, Georgia. Shane Thompson had a dream, a smoker, and a family recipe for ribs that would change everything.</p><h3>The Secret? Patience.</h3><p>From day one, Shane insisted on doing things the hard way—the right way. Meats are slow-smoked for hours over hickory wood, sauces are made from scratch, and every plate is served with genuine Southern hospitality.</p><p><a href="/our-story/">Read the full story</a> of how Shane's Rib Shack became a BBQ legend.</p>`,
    category: "Our Story",
  },
  {
    slug: "gift-cards-now-available",
    title: "Give the Gift of BBQ — Shane's Gift Cards Now Available",
    excerpt:
      "Share the love of slow-smoked BBQ with Shane's Rib Shack gift cards. Perfect for any occasion.",
    date: "2023-12-01",
    featured: false,
    image: "/images/news-events/gift-cards.jpg",
    imageAlt: "Shane's Rib Shack gift cards",
    content: `<p>Looking for the perfect gift? Give the gift of great BBQ with Shane's Rib Shack gift cards.</p><h3>Gift Card Options</h3><ul><li><strong>Digital Gift Cards:</strong> Instant delivery via email.</li><li><strong>Physical Gift Cards:</strong> Available at any Shack location.</li><li><strong>Any Amount:</strong> Load any amount from $10 to $200.</li><li><strong>No Expiration:</strong> Our gift cards never expire.</li></ul><p><a href="/gift-cards/">Purchase a gift card</a> today and share the BBQ love.</p>`,
    category: "Promotions",
  },
];
