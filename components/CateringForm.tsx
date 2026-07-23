"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { asset } from "@/lib/asset";

const fieldClass =
  "w-full rounded-[8px] border border-[#d6d6d6] bg-brand-tan px-3 py-3.5 text-[13px] font-semibold leading-[1.5] text-brand-black placeholder:text-[#808080] outline-none focus:border-brand-red focus-visible:ring-2 focus-visible:ring-brand-gold";
const labelClass =
  "text-base font-semibold leading-[1.3] text-[#0d0d0d]";
const selectWrap =
  "relative flex h-12 w-full items-center overflow-hidden rounded-[8px] border border-[#d6d6d6] bg-brand-tan";

const locations = [
  "Norcross",
  "Alpharetta",
  "Marietta",
  "Decatur",
  "Other",
];

const packages = [
  "One Meat",
  "Ribs & One Meat",
  "Two Meat",
  "Three Meat",
  "Boxed Lunches",
];

const ENDPOINT = process.env.NEXT_PUBLIC_CATERING_FORM_ENDPOINT ?? "";

type SubmitState = "idle" | "submitting" | "success" | "error";

function track(event: string, payload?: Record<string, string>) {
  if (typeof window === "undefined") return;
  const w = window as Window & {
    dataLayer?: Record<string, unknown>[];
    gtag?: (...args: unknown[]) => void;
  };
  w.dataLayer?.push({ event, ...payload });
  w.gtag?.("event", event, payload);
}

export default function CateringForm() {
  const [delivery, setDelivery] = useState("not-sure");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [packagePrefill, setPackagePrefill] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    const fromQuery = params.get("package");
    if (fromQuery && packages.includes(fromQuery)) {
      setPackagePrefill(fromQuery);
    }
  }, []);

  function onFormStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    track("catering_form_started", { path: "quote" });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();

    if (!email && !phone) {
      setErrorMsg("Please enter an email or phone number so we can reach you.");
      setSubmitState("error");
      return;
    }

    if (!ENDPOINT) {
      setErrorMsg(
        "Form is not connected yet. Please call (770) 416-6606 or email catering@shanesribshack.com.",
      );
      setSubmitState("error");
      return;
    }

    setSubmitState("submitting");
    track("catering_form_submitted", { path: "quote" });

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (!res.ok) throw new Error(`Server responded with ${res.status}`);

      setSubmitState("success");
      track("catering_form_success", { path: "quote" });
      formRef.current?.reset();
      setDelivery("not-sure");
      setPackagePrefill("");
    } catch {
      setErrorMsg(
        "Something went wrong. Please try again, or call (770) 416-6606.",
      );
      setSubmitState("error");
    }
  }

  if (submitState === "success") {
    return (
      <section
        className="flex w-full flex-col items-center bg-brand-tan px-5 py-10 lg:py-20"
        aria-label="Catering inquiry confirmation"
        id="catering-inquiry"
      >
        <div className="flex w-full max-w-[824px] flex-col items-center justify-center rounded-[12px] bg-brand-black px-5 py-10 sm:px-10 lg:px-20 lg:py-[70px]">
          <div
            className="flex w-full flex-col items-center gap-6 rounded-[12px] bg-white p-6 text-center sm:p-10 lg:p-[60px]"
            role="status"
            aria-live="polite"
          >
            <div className="flex size-16 items-center justify-center rounded-full bg-brand-red/10">
              <svg
                className="size-8 text-brand-red"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-extrabold uppercase text-brand-black">
              Thanks — we got your request
            </h2>
            <p className="max-w-md text-base font-semibold text-brand-black/70">
              A catering specialist will reach out during business hours. Most
              events need about 48 hours&apos; notice.
            </p>
            <button
              type="button"
              onClick={() => setSubmitState("idle")}
              className="inline-flex items-center justify-center rounded-[5px] border-2 border-brand-black px-6 py-3 text-sm font-bold uppercase text-brand-black transition-colors hover:bg-brand-black hover:text-white"
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      className="flex w-full flex-col items-center bg-brand-tan px-5 py-10 lg:py-20"
      aria-label="Catering inquiry form"
      id="catering-inquiry"
    >
      <div className="flex w-full max-w-[824px] flex-col items-center justify-center rounded-[12px] bg-brand-black px-5 py-10 sm:px-10 lg:px-20 lg:py-[70px]">
        <h2 className="mb-3 w-full text-center text-[28px] font-extrabold uppercase leading-none text-white sm:text-[32px]">
          Request a Custom Quote
        </h2>
        <p className="mb-4 w-full text-center text-base font-semibold text-white/90">
          Takes about 1 minute. Large events, special requests, or if you&apos;re
          not sure yet.
        </p>
        <div className="mb-[30px] w-full text-center text-sm font-semibold leading-[1.5] text-white/80">
          <p>
            Most events need ~48-hour notice · A specialist will reach out
            during business hours
          </p>
        </div>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          onFocus={onFormStart}
          className="flex w-full flex-col gap-2.5 rounded-[12px] bg-white p-6 sm:p-10 lg:p-[60px]"
        >
          <div className="flex flex-col gap-6 pb-5">
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="location" className={labelClass}>
                Select Your Location <span className="text-brand-red">*</span>
              </label>
              <div className={selectWrap}>
                <select
                  id="location"
                  name="location"
                  required
                  defaultValue=""
                  className="h-full w-full appearance-none bg-transparent px-3 text-[13px] font-semibold text-[#808080] outline-none"
                >
                  <option value="" disabled>
                    Select your Location
                  </option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc} className="text-brand-black">
                      {loc}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 size-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset("/images/chevron-down.svg")}
                    alt=""
                    className="size-full"
                    aria-hidden
                  />
                </span>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className={labelClass}>
                  First Name <span className="text-brand-red">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
                  autoComplete="given-name"
                  placeholder="Enter your first name"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="lastName" className={labelClass}>
                  Last Name <span className="text-brand-red">*</span>
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  required
                  autoComplete="family-name"
                  placeholder="Enter your last name"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>
                  Email{" "}
                  <span className="text-sm font-normal text-[#808080]">
                    (or phone)
                  </span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={labelClass}>
                  Phone{" "}
                  <span className="text-sm font-normal text-[#808080]">
                    (or email)
                  </span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Enter 10 digit number"
                  className={fieldClass}
                />
              </div>
            </div>
            <p className="text-sm font-semibold text-[#808080]">
              <span className="text-brand-red">*</span> Provide at least one
              contact method (email or phone).
            </p>

            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="eventDate" className={labelClass}>
                  Date of Event <span className="text-brand-red">*</span>
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  type="date"
                  required
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="startTime" className={labelClass}>
                  Start Time{" "}
                  <span className="text-sm font-normal text-[#808080]">
                    (optional)
                  </span>
                </label>
                <input
                  id="startTime"
                  name="startTime"
                  type="time"
                  className={fieldClass}
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="attendees" className={labelClass}>
                Number of People Attending{" "}
                <span className="text-brand-red">*</span>
              </label>
              <input
                id="attendees"
                name="attendees"
                type="number"
                min={1}
                required
                placeholder="Enter # of People Attending"
                className={fieldClass}
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="organization" className={labelClass}>
                Organization{" "}
                <span className="text-sm font-normal text-[#808080]">
                  (optional)
                </span>
              </label>
              <input
                id="organization"
                name="organization"
                placeholder="Company or group name"
                className={fieldClass}
              />
            </div>

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="package" className={labelClass}>
                Catering Package{" "}
                <span className="text-sm font-normal text-[#808080]">
                  (optional)
                </span>
              </label>
              <div className={selectWrap}>
                <select
                  id="package"
                  name="package"
                  value={packagePrefill}
                  onChange={(e) => setPackagePrefill(e.target.value)}
                  className="h-full w-full appearance-none bg-transparent px-3 text-[13px] font-semibold text-[#808080] outline-none"
                >
                  <option value="">Not sure yet</option>
                  {packages.map((pkg) => (
                    <option key={pkg} value={pkg} className="text-brand-black">
                      {pkg}
                    </option>
                  ))}
                </select>
                <span className="pointer-events-none absolute right-3 size-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={asset("/images/chevron-down.svg")}
                    alt=""
                    className="size-full"
                    aria-hidden
                  />
                </span>
              </div>
            </div>

            <div className="flex w-full flex-col gap-3 border-t border-brand-black/10 pt-4">
              <p className={labelClass}>
                Delivery Method{" "}
                <span className="text-sm font-normal text-[#808080]">
                  (optional)
                </span>
              </p>
              <div className="flex flex-wrap gap-6">
                {[
                  { id: "pickup", label: "Pick Up" },
                  { id: "delivery", label: "Delivery" },
                  { id: "not-sure", label: "Not Sure" },
                ].map((opt) => (
                  <label
                    key={opt.id}
                    className="flex cursor-pointer items-center gap-2 text-sm font-semibold text-[#0d0d0d]"
                  >
                    <input
                      type="radio"
                      name="deliveryMethod"
                      value={opt.id}
                      checked={delivery === opt.id}
                      onChange={() => setDelivery(opt.id)}
                      className="size-4 accent-brand-red"
                    />
                    {opt.label}
                  </label>
                ))}
              </div>
            </div>

            <div className="flex w-full flex-col gap-2">
              <label htmlFor="comments" className={labelClass}>
                Comments or Questions{" "}
                <span className="text-sm font-normal text-[#808080]">
                  (optional)
                </span>
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                placeholder="Anything else we should know?"
                className={`${fieldClass} min-h-[96px] resize-y`}
              />
            </div>
          </div>

          {submitState === "error" && errorMsg ? (
            <div
              className="mb-4 rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              role="alert"
              aria-live="assertive"
            >
              {errorMsg}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="inline-flex w-full items-center justify-center rounded-[5px] bg-brand-red px-[26px] py-5 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold disabled:cursor-not-allowed disabled:opacity-60"
          >
            {submitState === "submitting" ? (
              <span className="flex items-center gap-2">
                <svg
                  className="size-5 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Sending...
              </span>
            ) : (
              "Get My Quote"
            )}
          </button>
          <p className="mt-2 text-center text-xs font-semibold text-[#808080]">
            Prefer to order a standard package now?{" "}
            <a
              href="#catering-menu"
              className="text-brand-red underline-offset-2 hover:underline"
            >
              See packages above
            </a>
          </p>
        </form>
      </div>
    </section>
  );
}
