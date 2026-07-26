import { expect, test } from "@playwright/test";

const expectedRoutes = [
  { path: "/", title: /Shane's Rib Shack/i, heading: /Welcome to The Original Shack/i },
  { path: "/catering/", title: /Catering|Shane's Rib Shack/i, heading: /How would you like to order\?/i },
  { path: "/menu/", title: /Menu|Shane's Rib Shack/i, heading: /Shane's Rib Shack Menu/i },
  { path: "/locations/", title: /Locations|Shane's Rib Shack/i, heading: /Find a Shack/i },
  { path: "/shop/", title: /Shop|Shane's Rib Shack/i, heading: /You actually can buy happiness/i },
  { path: "/our-story/", title: /Our Story|Shane's Rib Shack/i, heading: /It All Started At The Shack/i },
  { path: "/news-events/", title: /News|Events|Shane's Rib Shack/i, heading: /News & Events/i },
  { path: "/careers/", title: /Careers|Shane's Rib Shack/i, heading: /Careers|Join/i },
  { path: "/thank-you/", title: /Thank You|Shane's Rib Shack/i, heading: /Thank You|What Happens Next/i },
];

for (const route of expectedRoutes) {
  test(`route renders: ${route.path}`, async ({ page }) => {
    await page.goto(route.path);
    await expect(page).toHaveTitle(route.title);
    await expect(page.getByRole("heading", { name: route.heading }).first()).toBeVisible();
  });
}

test("catering path CTAs are visible", async ({ page }) => {
  await page.goto("/catering/");
  await expect(page.getByRole("link", { name: /Order Online/i }).first()).toBeVisible();
  await expect(page.getByRole("button", { name: /Get a Quote/i }).first()).toBeVisible();
});

test("menu Big Dad PDP renders", async ({ page }) => {
  await page.goto("/menu/sandwiches/big-dad/");
  await expect(page).toHaveTitle(/Big Dad|Shane's Rib Shack/i);
  await expect(page.getByRole("heading", { name: /Big Dad/i })).toBeVisible();
});

test("news article renders", async ({ page }) => {
  await page.goto("/news-events/nba-finals-watch-party-bbq-ideas/");
  await expect(page.getByRole("heading", { name: /NBA Finals Watch Party/i })).toBeVisible();
  await expect(page.getByRole("main").getByText(/championship-worthy/i).first()).toBeVisible();
});

test("header primary nav links resolve", async ({ page, isMobile }) => {
  test.skip(isMobile, "Desktop primary nav only");
  await page.goto("/");

  const navTargets = [
    { name: "Menu", path: "/menu/", heading: /Shane's Rib Shack Menu/i },
    { name: "Catering", path: "/catering/", heading: /How would you like to order\?/i },
    { name: "Locations", path: "/locations/", heading: /Find a Shack/i },
    { name: "Our Story", path: "/our-story/", heading: /It All Started At The Shack/i },
    { name: /News\s*&\s*Events/i, path: "/news-events/", heading: /News & Events/i },
    { name: "Careers", path: "/careers/", heading: /Careers|Join/i },
    { name: "FAQs", path: "/faqs/", heading: /FAQs/i },
  ];

  const primaryNav = page.getByRole("navigation", { name: /Primary/i });

  for (const target of navTargets) {
    await page.goto("/");
    await primaryNav.getByRole("link", { name: target.name }).click();
    await expect(page).toHaveURL(new RegExp(`${target.path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`));
    await expect(page.getByRole("heading", { name: target.heading }).first()).toBeVisible();
  }
});

test("footer routes render expected destinations", async ({ page }) => {
  const footerTargets = [
    { path: "/franchise/", heading: /Franchise/i },
    { path: "/shop/", heading: /You actually can buy happiness/i },
    { path: "/news-events/", heading: /News & Events/i },
    { path: "/terms/", heading: /Terms/i },
    { path: "/privacy/", heading: /Privacy/i },
    { path: "/troubleshooting/", heading: /Troubleshooting|Accessibility/i },
    { path: "/locations/", heading: /Find a Shack/i },
    { path: "/careers/", heading: /Careers|Join/i },
    { path: "/contact/", heading: /Contact Us/i },
  ];

  for (const target of footerTargets) {
    await page.goto(target.path);
    await expect(page).toHaveURL(new RegExp(`${target.path.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`));
    await expect(page.getByRole("heading", { name: target.heading }).first()).toBeVisible();
  }
});

test("mobile menu opens and navigates", async ({ page, isMobile }) => {
  test.skip(!isMobile, "Mobile-only header behavior");

  await page.goto("/");
  await page.getByRole("button", { name: /Open menu/i }).click();
  const mobileNav = page.getByRole("navigation", { name: /Mobile/i });
  await expect(mobileNav).toBeVisible();
  await mobileNav.getByRole("link", { name: "Menu", exact: true }).click();
  await expect(page).toHaveURL(/\/menu\/$/);
});

test("catering form validates invalid contact details", async ({ page }) => {
  await page.goto("/catering/");
  await page.getByLabel(/Name/i).fill("Test User");
  await page.getByLabel(/Location/i).selectOption("Norcross");
  await page.getByLabel(/Email or phone/i).fill("bad");
  await page.getByLabel(/Event date/i).fill("2099-12-31");
  await page.getByLabel(/Guest count/i).selectOption("26-50");
  await page.getByRole("button", { name: /^Get a Quote$/i }).last().click();
  await expect(page.getByText(/Enter a valid email or 10-digit phone number/i)).toBeVisible();
});

test("catering form can submit successfully with mocked endpoint", async ({ page }) => {
  await page.route("https://formsubmit.co/ajax/catering@shanesribshack.com", async (route) => {
    await route.fulfill({
      status: 200,
      contentType: "application/json",
      body: JSON.stringify({ success: "ok" }),
    });
  });

  await page.goto("/catering/");
  await page.getByLabel(/Name/i).fill("Test User");
  await page.getByLabel(/Location/i).selectOption("Norcross");
  await page.getByLabel(/Email or phone/i).fill("test@example.com");
  await page.getByLabel(/Event date/i).fill("2099-12-31");
  await page.getByLabel(/Guest count/i).selectOption("26-50");
  await page.getByRole("button", { name: /^Get a Quote$/i }).last().click();

  await expect(page.getByRole("heading", { name: /Thanks — we got your request/i })).toBeVisible();
  await expect(page.getByText(/A catering specialist will reach out during business hours/i)).toBeVisible();
  await expect(page.getByRole("button", { name: /Submit another request/i })).toBeVisible();
});

test("404 page renders branded fallback", async ({ page }) => {
  const response = await page.goto("/definitely-not-a-real-route/");
  expect(response?.status()).toBe(404);
  await expect(page.getByRole("heading", { name: /404|not found/i })).toBeVisible();
});
