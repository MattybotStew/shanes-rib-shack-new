const DEFAULT_SITE_URL = "https://mattybotstew.github.io";
const GITHUB_PAGES_REPO = "shanes-rib-shack-new";

function normalizeOrigin(url: string): string {
  return url.replace(/\/$/, "");
}

export function getSiteOrigin(): string {
  const publicUrl = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (publicUrl) {
    try {
      return normalizeOrigin(new URL(publicUrl).origin + new URL(publicUrl).pathname);
    } catch {
      return normalizeOrigin(publicUrl);
    }
  }

  if (process.env.GITHUB_PAGES === "true") {
    return `${DEFAULT_SITE_URL}/${GITHUB_PAGES_REPO}`;
  }

  return "http://localhost:3000";
}

export function getMetadataBase(): URL {
  return new URL(`${getSiteOrigin()}/`);
}
