/** Build ezCater outbound URL with UTMs for catering CTAs. */
export function ezCaterUrl(): string {
  const raw =
    process.env.NEXT_PUBLIC_EZCATER_URL?.trim() || "https://www.ezcater.com";
  try {
    const url = new URL(raw);
    if (!url.searchParams.has("utm_source")) {
      url.searchParams.set("utm_source", "shanessite");
    }
    if (!url.searchParams.has("utm_medium")) {
      url.searchParams.set("utm_medium", "catering");
    }
    if (!url.searchParams.has("utm_campaign")) {
      url.searchParams.set("utm_campaign", "online_order");
    }
    return url.toString();
  } catch {
    return raw;
  }
}
