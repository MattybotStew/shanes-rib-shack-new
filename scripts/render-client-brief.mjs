#!/usr/bin/env node
/**
 * Render a client brief (HTML) to a shareable PNG.
 *
 * Usage:
 *   node scripts/render-client-brief.mjs                      # all docs/client-briefs/*.html
 *   node scripts/render-client-brief.mjs docs/client-briefs/mobile-find-a-shack.html
 *
 * Why this exists:
 *   The briefs in docs/client-briefs/ are authored as plain HTML so they stay easy
 *   to edit, then rendered to a single PNG for sending to the client. Rendering by
 *   hand drifts; this keeps it reproducible.
 *
 * Browser note:
 *   The bundled Playwright browsers are not always installed in this repo's cache
 *   (~/Library/Caches/ms-playwright holds metadata only). We therefore prefer the
 *   installed Google Chrome via `channel: "chrome"`, and fall back to the bundled
 *   Chromium if Chrome is unavailable. If both fail, run `npx playwright install chromium`.
 */

import { readdirSync } from "node:fs";
import path from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";
import { chromium } from "playwright";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const briefsDir = path.join(repoRoot, "docs", "client-briefs");

const VIEWPORT = { width: 1200, height: 1400 };
const SCALE = 2; // 2x for crisp text when the client zooms in

function resolveTargets(argv) {
  if (argv.length) {
    return argv.map((a) => path.resolve(process.cwd(), a));
  }
  return readdirSync(briefsDir)
    .filter((f) => f.endsWith(".html"))
    .map((f) => path.join(briefsDir, f));
}

async function launch() {
  const attempts = [
    { label: "system Chrome", opts: { channel: "chrome" } },
    { label: "bundled Chromium", opts: {} },
  ];
  const failures = [];
  for (const attempt of attempts) {
    try {
      const browser = await chromium.launch(attempt.opts);
      console.log(`Browser: ${attempt.label}`);
      return browser;
    } catch (error) {
      failures.push(`${attempt.label}: ${String(error).split("\n")[0]}`);
    }
  }
  throw new Error(
    `Could not launch a browser.\n  ${failures.join("\n  ")}\n` +
      `Fix: npx playwright install chromium`,
  );
}

const targets = resolveTargets(process.argv.slice(2));
if (!targets.length) {
  console.error(`No brief HTML found in ${path.relative(repoRoot, briefsDir)}/`);
  process.exit(1);
}

const browser = await launch();
try {
  const page = await browser.newPage({ viewport: VIEWPORT, deviceScaleFactor: SCALE });
  for (const htmlPath of targets) {
    const outPath = htmlPath.replace(/\.html$/, ".png");
    await page.goto(pathToFileURL(htmlPath).href, { waitUntil: "load" });
    // Let webfonts/images settle before capturing.
    await page.waitForLoadState("networkidle").catch(() => {});
    await page.waitForTimeout(400);
    const height = await page.evaluate(
      () => document.querySelector(".page")?.getBoundingClientRect().height ?? document.body.scrollHeight,
    );
    await page.screenshot({ path: outPath, fullPage: true });
    console.log(
      `Rendered ${path.relative(repoRoot, htmlPath)} -> ${path.relative(repoRoot, outPath)} (${Math.round(height)}px tall)`,
    );
  }
} finally {
  await browser.close();
}
