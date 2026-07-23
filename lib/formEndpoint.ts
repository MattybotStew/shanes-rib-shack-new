/**
 * Static-site form endpoint.
 * Override with NEXT_PUBLIC_CATERING_FORM_ENDPOINT (Formspree, Basin, CRM webhook).
 * Default: FormSubmit → catering@shanesribshack.com (first submit may require email confirm).
 */
export const DEFAULT_CATERING_FORM_ENDPOINT =
  "https://formsubmit.co/ajax/catering@shanesribshack.com";

export function cateringFormEndpoint(): string {
  return (
    process.env.NEXT_PUBLIC_CATERING_FORM_ENDPOINT?.trim() ||
    DEFAULT_CATERING_FORM_ENDPOINT
  );
}
