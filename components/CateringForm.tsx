"use client";

import { FormEvent, useEffect, useId, useRef, useState } from "react";
import { asset } from "@/lib/asset";
import { cateringFormEndpoint } from "@/lib/formEndpoint";
import { desserts, menuItems, packageNames, sides, sideOptions, dessertOptions, getMenuItemByTitle } from "@/lib/menuData";
import type { MenuItem } from "@/lib/menuData";

const fieldClass =
  "h-11 w-full rounded-[8px] border border-[#d6d6d6] bg-brand-tan px-3 text-base font-semibold leading-[1.4] text-brand-black placeholder:text-[#6b6b6b] outline-none focus:border-brand-red focus-visible:ring-2 focus-visible:ring-brand-gold";
const labelClass = "text-sm font-semibold leading-[1.3] text-[#0d0d0d]";
const selectWrap =
  "relative flex h-11 w-full items-center overflow-hidden rounded-[8px] border border-[#d6d6d6] bg-brand-tan";
const selectClass =
  "h-full w-full appearance-none bg-transparent px-3 text-base font-semibold text-brand-black outline-none";

const locations = [
  "Norcross",
  "Alpharetta",
  "Marietta",
  "Decatur",
  "Other",
];

const packages = packageNames;

const guestRanges = [
  { value: "1-25", label: "1–25 people" },
  { value: "26-50", label: "26–50 people" },
  { value: "51-100", label: "51–100 people" },
  { value: "100+", label: "100+ people" },
];

const ENDPOINT = cateringFormEndpoint();

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

function todayPlusDays(days: number) {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  d.setDate(d.getDate() + days);
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}

function looksLikeEmailOrPhone(value: string) {
  if (value.includes("@") && value.includes(".")) return true;
  const digits = value.replace(/\D/g, "");
  return digits.length >= 10;
}

function Chevron() {
  return (
    <span className="pointer-events-none absolute right-3 size-2.5">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset("/images/chevron-down.svg")}
        alt=""
        className="size-full"
        aria-hidden
      />
    </span>
  );
}

type PackageChoicesState = {
  meat: string;
  sides: string[];
  dessert: string;
  sandwich: string;
  servedWith: string;
};

const emptyChoices: PackageChoicesState = {
  meat: "",
  sides: [],
  dessert: "",
  sandwich: "",
  servedWith: "",
};

function choiceBtnClass(selected: boolean, disabled = false) {
  if (disabled) {
    return "cursor-not-allowed border-brand-black/10 bg-brand-black/[0.03] text-brand-black/35";
  }
  if (selected) {
    return "border-brand-red bg-brand-red text-white";
  }
  return "border-brand-black/15 bg-white text-brand-black hover:border-brand-black/35";
}

function PackageCustomize({
  item,
  choices,
  onChange,
  onClear,
}: {
  item: MenuItem;
  choices: PackageChoicesState;
  onChange: (next: PackageChoicesState) => void;
  onClear: () => void;
}) {
  const { choices: config } = item;
  const needsBoxedSide =
    item.kind === "boxed" &&
    choices.servedWith === "One Side, Cookie, & Tea";
  const sideLimit = needsBoxedSide ? 1 : config.sideCount;
  const showSides = sideLimit > 0;

  function toggleSide(side: string) {
    const has = choices.sides.includes(side);
    if (has) {
      onChange({ ...choices, sides: choices.sides.filter((s) => s !== side) });
      return;
    }
    if (choices.sides.length >= sideLimit) return;
    onChange({ ...choices, sides: [...choices.sides, side] });
  }

  return (
    <div className="rounded-[10px] border border-brand-black/10 bg-white p-4 sm:p-5">
      <div className="mb-4 flex items-center justify-between gap-3 border-b border-brand-black/10 pb-3">
        <h3 className="text-base font-extrabold uppercase leading-none text-brand-red">
          {item.title}
        </h3>
        <button
          type="button"
          onClick={onClear}
          className="inline-flex items-center rounded-[5px] border border-brand-black/20 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-brand-black transition-colors hover:border-brand-red hover:text-brand-red"
        >
          Clear
        </button>
      </div>

      <input type="hidden" name="package" value={item.title} />

      <div className="flex flex-col gap-5">
        {config.fixedMeats?.length ? (
          <p className="text-sm font-semibold text-brand-black/65">
            Includes {config.fixedMeats.join(", ")}
          </p>
        ) : null}

        {config.meatOptions?.length ? (
          <fieldset className="flex flex-col gap-2 border-0 p-0">
            <legend className={`${labelClass} mb-[5px]`}>
              Meat <span className="text-brand-red">*</span>
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {config.meatOptions.map((opt) => (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center justify-center rounded-[8px] border px-3 py-2.5 text-center text-sm font-semibold transition-colors ${choiceBtnClass(choices.meat === opt)}`}
                >
                  <input
                    type="radio"
                    name="meat"
                    value={opt}
                    checked={choices.meat === opt}
                    onChange={() => onChange({ ...choices, meat: opt })}
                    className="sr-only"
                    required
                  />
                  {opt}
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {config.sandwichOptions?.length ? (
          <fieldset className="flex flex-col gap-2 border-0 p-0">
            <legend className={`${labelClass} mb-[5px]`}>
              Sandwich <span className="text-brand-red">*</span>
            </legend>
            <div className="grid gap-2">
              {config.sandwichOptions.map((opt) => (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center justify-center rounded-[8px] border px-3 py-2.5 text-center text-sm font-semibold transition-colors ${choiceBtnClass(choices.sandwich === opt)}`}
                >
                  <input
                    type="radio"
                    name="sandwich"
                    value={opt}
                    checked={choices.sandwich === opt}
                    onChange={() => onChange({ ...choices, sandwich: opt })}
                    className="sr-only"
                    required
                  />
                  {opt}
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {config.servedWithOptions?.length ? (
          <fieldset className="flex flex-col gap-2 border-0 p-0">
            <legend className={`${labelClass} mb-[5px]`}>
              Served with <span className="text-brand-red">*</span>
            </legend>
            <div className="grid gap-2">
              {config.servedWithOptions.map((opt) => (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center justify-center rounded-[8px] border px-3 py-2.5 text-center text-sm font-semibold transition-colors ${choiceBtnClass(choices.servedWith === opt)}`}
                >
                  <input
                    type="radio"
                    name="servedWith"
                    value={opt}
                    checked={choices.servedWith === opt}
                    onChange={() =>
                      onChange({
                        ...choices,
                        servedWith: opt,
                        sides:
                          opt === "One Side, Cookie, & Tea"
                            ? choices.sides.slice(0, 1)
                            : [],
                      })
                    }
                    className="sr-only"
                    required
                  />
                  {opt}
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}

        {showSides ? (
          <fieldset className="flex flex-col gap-2 border-0 p-0">
            <legend className={`${labelClass} mb-[5px]`}>
              Sides ({choices.sides.length}/{sideLimit}){" "}
              <span className="text-brand-red">*</span>
            </legend>
            <div className="grid grid-cols-2 gap-2">
              {sideOptions.map((side) => {
                const checked = choices.sides.includes(side);
                const disabled =
                  !checked && choices.sides.length >= sideLimit;
                return (
                  <label
                    key={side}
                    className={`flex cursor-pointer items-center justify-center rounded-[8px] border px-2.5 py-2 text-center text-sm font-semibold transition-colors ${choiceBtnClass(checked, disabled)}`}
                  >
                    <input
                      type="checkbox"
                      name="side"
                      value={side}
                      checked={checked}
                      disabled={disabled}
                      onChange={() => toggleSide(side)}
                      className="sr-only"
                    />
                    {side}
                  </label>
                );
              })}
            </div>
            <input
              type="hidden"
              name="sides"
              value={choices.sides.join(", ")}
            />
          </fieldset>
        ) : null}

        {item.kind === "package" ? (
          <fieldset className="flex flex-col gap-2 border-0 p-0">
            <legend className={`${labelClass} mb-[5px]`}>
              Dessert{" "}
              <span className="text-sm font-normal text-[#808080]">
                (optional)
              </span>
            </legend>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <label
                className={`flex cursor-pointer items-center justify-center rounded-[8px] border px-2.5 py-2 text-center text-sm font-semibold transition-colors ${choiceBtnClass(choices.dessert === "")}`}
              >
                <input
                  type="radio"
                  name="dessert"
                  value=""
                  checked={choices.dessert === ""}
                  onChange={() => onChange({ ...choices, dessert: "" })}
                  className="sr-only"
                />
                None
              </label>
              {dessertOptions.map((opt) => (
                <label
                  key={opt}
                  className={`flex cursor-pointer items-center justify-center rounded-[8px] border px-2.5 py-2 text-center text-sm font-semibold transition-colors ${choiceBtnClass(choices.dessert === opt)}`}
                >
                  <input
                    type="radio"
                    name="dessert"
                    value={opt}
                    checked={choices.dessert === opt}
                    onChange={() => onChange({ ...choices, dessert: opt })}
                    className="sr-only"
                  />
                  {opt.replace("Homemade ", "")}
                </label>
              ))}
            </div>
          </fieldset>
        ) : null}
      </div>
    </div>
  );
}

/** Desktop-only menu rail — browsing feeds the form; selecting prefills it. */
function MenuRail({
  selected,
  onSelect,
}: {
  selected: string;
  onSelect: (title: string) => void;
}) {
  const baseId = useId();
  const [openId, setOpenId] = useState<string | null>(menuItems[0]?.id ?? null);

  return (
    <aside
      className="hidden w-full flex-col gap-3 lg:flex"
      aria-label="Catering packages reference"
    >
      <div className="flex flex-col gap-1 px-1">
        <h3 className="text-lg font-extrabold uppercase leading-none text-brand-red">
          Catering Packages
        </h3>
        <p className="text-xs font-semibold text-brand-black/60">
          Browse details — pick a package in the form, or leave it to us.
        </p>
      </div>

      {selected ? (
        <div className="flex items-center justify-between gap-3 rounded-[8px] border border-brand-red/25 bg-brand-red/[0.06] px-3 py-2">
          <p className="text-xs font-bold uppercase tracking-wide text-brand-red">
            Selected: {selected}
          </p>
          <button
            type="button"
            onClick={() => onSelect("")}
            className="shrink-0 text-xs font-bold uppercase tracking-wide text-brand-black/70 underline-offset-2 hover:text-brand-red hover:underline"
          >
            Remove
          </button>
        </div>
      ) : null}

      <div className="flex flex-col overflow-hidden rounded-[12px] border border-brand-black/15 bg-white">
        {menuItems.map((item, index) => {
          const open = openId === item.id;
          const isSelected = selected === item.title;
          const lines = item.kind === "package" ? item.items : item.lines;
          const panelId = `${baseId}-panel-${item.id}`;
          const headerId = `${baseId}-header-${item.id}`;

          return (
            <div
              key={item.id}
              className={index > 0 ? "border-t border-brand-black/15" : ""}
            >
              <button
                type="button"
                id={headerId}
                aria-expanded={open}
                aria-controls={panelId}
                onClick={() => setOpenId(open ? null : item.id)}
                className={`flex w-full items-center justify-between gap-3 px-4 py-3 text-left transition-colors hover:bg-brand-black/[0.03] ${
                  isSelected ? "bg-brand-red/[0.06]" : ""
                }`}
              >
                <span
                  className={`text-sm font-extrabold uppercase leading-none ${
                    isSelected ? "text-brand-red" : "text-brand-black"
                  }`}
                >
                  {item.title}
                  {isSelected ? " ✓" : ""}
                </span>
                <svg
                  className={`size-4 shrink-0 text-brand-red transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              <div
                id={panelId}
                role="region"
                aria-labelledby={headerId}
                hidden={!open}
                className={open ? "block" : "hidden"}
              >
                {open ? (
                  <div className="flex flex-col gap-2 px-4 pb-4">
                    <ul className="flex flex-col gap-1">
                      {lines.map((line) => (
                        <li
                          key={line}
                          className="text-[13px] font-semibold leading-[1.45] text-brand-black/80"
                        >
                          {line}
                        </li>
                      ))}
                    </ul>
                    {isSelected ? (
                      <button
                        type="button"
                        onClick={() => onSelect("")}
                        className="self-start text-xs font-bold uppercase tracking-wide text-brand-black/65 underline-offset-2 hover:text-brand-red hover:underline"
                      >
                        Remove selection
                      </button>
                    ) : (
                      <button
                        type="button"
                        onClick={() => onSelect(item.title)}
                        className="self-start text-xs font-bold uppercase tracking-wide text-brand-red underline-offset-2 hover:underline"
                      >
                        Use this package →
                      </button>
                    )}
                  </div>
                ) : null}
              </div>
            </div>
          );
        })}
      </div>

      <p className="px-1 text-xs font-semibold leading-[1.5] text-brand-black/55">
        <span className="font-bold text-brand-black/70">Sides:</span> {sides}
        <br />
        <span className="font-bold text-brand-black/70">Desserts:</span>{" "}
        {desserts}
      </p>
    </aside>
  );
}

export default function CateringForm() {
  const [delivery, setDelivery] = useState("not-sure");
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [packagePrefill, setPackagePrefill] = useState("");
  const [packageChoices, setPackageChoices] =
    useState<PackageChoicesState>(emptyChoices);
  const [showExtras, setShowExtras] = useState(false);
  const [minDate, setMinDate] = useState("");
  const formRef = useRef<HTMLFormElement>(null);
  const startedRef = useRef(false);
  const selectedPackage = getMenuItemByTitle(packagePrefill);

  function selectPackage(title: string) {
    setPackagePrefill(title);
    setPackageChoices(emptyChoices);
    if (title) {
      track("catering_package_selected", { package: title });
    } else {
      track("catering_package_cleared");
    }
  }

  useEffect(() => {
    setMinDate(todayPlusDays(2));
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const applyPackageFromUrl = () => {
      const params = new URLSearchParams(window.location.search);
      const fromQuery = params.get("package");
      if (fromQuery && packages.includes(fromQuery)) {
        setPackagePrefill(fromQuery);
        setPackageChoices(emptyChoices);
      }
    };

    applyPackageFromUrl();
    window.addEventListener("popstate", applyPackageFromUrl);
    window.addEventListener("catering:urlchange", applyPackageFromUrl);
    return () => {
      window.removeEventListener("popstate", applyPackageFromUrl);
      window.removeEventListener("catering:urlchange", applyPackageFromUrl);
    };
  }, []);

  function onFormStart() {
    if (startedRef.current) return;
    startedRef.current = true;
    track("catering_form_started", { path: "quote" });
  }

  function validatePackageChoices(): string | null {
    if (!selectedPackage) return null;
    const config = selectedPackage.choices;
    if (config.meatOptions?.length && !packageChoices.meat) {
      return "Choose a meat for your package.";
    }
    if (config.sandwichOptions?.length && !packageChoices.sandwich) {
      return "Choose a sandwich.";
    }
    if (config.servedWithOptions?.length && !packageChoices.servedWith) {
      return "Choose how the boxed lunch is served.";
    }
    const needsBoxedSide =
      packageChoices.servedWith === "One Side, Cookie, & Tea";
    const sideLimit = needsBoxedSide ? 1 : config.sideCount;
    if (sideLimit > 0 && packageChoices.sides.length !== sideLimit) {
      return `Pick ${sideLimit} side${sideLimit === 1 ? "" : "s"}.`;
    }
    return null;
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMsg("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const contact = String(data.get("contact") ?? "").trim();

    if (!looksLikeEmailOrPhone(contact)) {
      setErrorMsg(
        "Enter a valid email or 10-digit phone number so we can reach you.",
      );
      setSubmitState("error");
      document.getElementById("contact")?.focus();
      return;
    }

    const choiceError = validatePackageChoices();
    if (choiceError) {
      setErrorMsg(choiceError);
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
      const payload: Record<string, string> = {
        _subject: "Shane's Rib Shack — Catering Quote Request",
        _template: "table",
        _captcha: "false",
      };
      data.forEach((value, key) => {
        if (typeof value !== "string") return;
        if (key === "contact" || key === "side") return;
        payload[key] = value;
      });

      if (contact.includes("@")) {
        payload.email = contact;
        payload._replyto = contact;
      } else {
        payload.phone = contact;
      }

      const res = await fetch(ENDPOINT, {
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) throw new Error(`Server responded with ${res.status}`);

      const json = (await res.json().catch(() => null)) as {
        success?: string;
        error?: string;
      } | null;
      if (json?.error) throw new Error(json.error);

      setSubmitState("success");
      track("catering_form_success", { path: "quote" });
      formRef.current?.reset();
      setDelivery("not-sure");
      setPackagePrefill("");
      setPackageChoices(emptyChoices);
      setShowExtras(false);
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
        className="scroll-mt-6 flex w-full flex-col items-center bg-brand-tan px-5 py-10 lg:py-14"
        aria-label="Catering inquiry confirmation"
        id="catering-inquiry"
      >
        <div
          className="flex w-full max-w-[640px] flex-col items-center gap-5 rounded-[12px] border border-brand-black/10 bg-white p-6 text-center sm:p-10"
          role="status"
          aria-live="polite"
        >
          <div className="flex size-14 items-center justify-center rounded-full bg-brand-red/10">
            <svg
              className="size-7 text-brand-red"
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
          <a
            href="#catering-menu"
            className="text-sm font-bold uppercase text-brand-red underline-offset-2 hover:underline"
          >
            Browse packages while you wait
          </a>
          <button
            type="button"
            onClick={() => setSubmitState("idle")}
            className="inline-flex items-center justify-center rounded-[5px] border-2 border-brand-black px-6 py-3 text-sm font-bold uppercase text-brand-black transition-colors hover:bg-brand-black hover:text-white"
          >
            Submit another request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      className="scroll-mt-6 flex w-full flex-col items-center bg-brand-tan px-5 py-10 lg:py-14"
      aria-label="Catering inquiry form"
      id="catering-inquiry"
    >
      <div className="grid w-full max-w-[640px] grid-cols-1 gap-4 lg:max-w-[1040px] lg:grid-cols-[minmax(0,1fr)_340px] lg:items-start lg:gap-10">
        <div className="flex w-full flex-col items-center gap-4">
        <header className="flex w-full flex-col items-center gap-1.5 text-center">
          <p className="text-xs font-bold uppercase tracking-[0.14em] text-brand-red">
            Step 2 — Tell us about your event
          </p>
          <h2 className="text-[26px] font-extrabold uppercase leading-none text-brand-black sm:text-[30px]">
            Get a Quote
          </h2>
          <p className="text-sm font-semibold text-brand-black/65">
            About 1 minute · Specialist replies during business hours
          </p>
        </header>

        <form
          ref={formRef}
          onSubmit={onSubmit}
          onFocus={onFormStart}
          className="flex w-full flex-col gap-4 rounded-[12px] border border-brand-black/10 bg-white p-4 sm:p-6"
        >
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className={labelClass}>
                Name <span className="text-brand-red">*</span>
              </label>
              <input
                id="name"
                name="name"
                required
                autoComplete="name"
                placeholder="Your name"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="location" className={labelClass}>
                Location <span className="text-brand-red">*</span>
              </label>
              <div className={selectWrap}>
                <select
                  id="location"
                  name="location"
                  required
                  defaultValue=""
                  className={selectClass}
                >
                  <option value="" disabled>
                    Select location
                  </option>
                  {locations.map((loc) => (
                    <option key={loc} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
                <Chevron />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-1.5">
            <label htmlFor="contact" className={labelClass}>
              Email or phone <span className="text-brand-red">*</span>
            </label>
            <input
              id="contact"
              name="contact"
              required
              autoComplete="email"
              inputMode="email"
              placeholder="Whichever is easiest to reach you"
              className={fieldClass}
            />
          </div>

          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="eventDate" className={labelClass}>
                Event date <span className="text-brand-red">*</span>
              </label>
              <input
                id="eventDate"
                name="eventDate"
                type="date"
                required
                min={minDate}
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="attendees" className={labelClass}>
                Guest count <span className="text-brand-red">*</span>
              </label>
              <div className={selectWrap}>
                <select
                  id="attendees"
                  name="attendees"
                  required
                  defaultValue=""
                  className={selectClass}
                >
                  <option value="" disabled>
                    Select range
                  </option>
                  {guestRanges.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
                <Chevron />
              </div>
            </div>
          </div>

          <div className="flex w-full flex-col gap-1.5">
            <label htmlFor="packageSelect" className={labelClass}>
              Package{" "}
              <span className="font-semibold normal-case tracking-normal text-brand-black/50">
                (optional)
              </span>
            </label>
            <div className={selectWrap}>
              <select
                id="packageSelect"
                value={packagePrefill}
                onChange={(e) => selectPackage(e.target.value)}
                className={selectClass}
              >
                <option value="">Not sure — we&apos;ll help</option>
                {packages.map((pkg) => (
                  <option key={pkg} value={pkg}>
                    {pkg}
                  </option>
                ))}
              </select>
              <Chevron />
            </div>
            {!selectedPackage ? (
              <p className="text-xs font-semibold text-brand-black/55">
                Optional — pick one to customize meats, sides, and dessert, or
                leave blank and we&apos;ll help in follow-up.
              </p>
            ) : null}
          </div>

          {selectedPackage ? (
            <PackageCustomize
              item={selectedPackage}
              choices={packageChoices}
              onChange={setPackageChoices}
              onClear={() => selectPackage("")}
            />
          ) : null}

          <div className="border-t border-brand-black/10">
            <button
              type="button"
              aria-expanded={showExtras}
              onClick={() => setShowExtras((v) => !v)}
              className="flex w-full items-center justify-between gap-3 py-2.5 text-left text-xs font-bold uppercase tracking-wide text-brand-black/70"
            >
              <span>{showExtras ? "Hide" : "Add"} optional details</span>
              <span className="text-brand-red" aria-hidden>
                {showExtras ? "−" : "+"}
              </span>
            </button>

            {!showExtras ? (
              <input type="hidden" name="deliveryMethod" value={delivery} />
            ) : null}

            {showExtras ? (
              <div className="flex flex-col gap-4 pb-1 pt-1">
                <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="startTime" className={labelClass}>
                      Start time
                    </label>
                    <input
                      id="startTime"
                      name="startTime"
                      type="time"
                      className={fieldClass}
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="organization" className={labelClass}>
                      Organization
                    </label>
                    <input
                      id="organization"
                      name="organization"
                      placeholder="Company or group"
                      className={fieldClass}
                    />
                  </div>
                </div>

                <div className="flex w-full flex-col gap-2">
                  <p className={labelClass}>Delivery method</p>
                  <div className="flex flex-wrap gap-5">
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

                <div className="flex w-full flex-col gap-1.5">
                  <label htmlFor="comments" className={labelClass}>
                    Comments or questions
                  </label>
                  <textarea
                    id="comments"
                    name="comments"
                    rows={3}
                    placeholder="Anything else we should know?"
                    className="w-full resize-y rounded-[8px] border border-[#d6d6d6] bg-brand-tan px-3 py-2.5 text-base font-semibold leading-[1.4] text-brand-black placeholder:text-[#6b6b6b] outline-none focus:border-brand-red focus-visible:ring-2 focus-visible:ring-brand-gold"
                  />
                </div>
              </div>
            ) : null}
          </div>

          {submitState === "error" && errorMsg ? (
            <div
              className="rounded-[8px] border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700"
              role="alert"
              aria-live="assertive"
            >
              {errorMsg}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={submitState === "submitting"}
            className="inline-flex w-full items-center justify-center rounded-[5px] bg-brand-red px-6 py-4 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold disabled:cursor-not-allowed disabled:opacity-60"
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
              "Get a Quote"
            )}
          </button>
          <p className="text-center text-xs font-semibold text-[#6b6b6b] lg:hidden">
            Prefer a standard package?{" "}
            <a
              href="#catering-menu"
              className="text-brand-red underline-offset-2 hover:underline"
            >
              See the menu
            </a>
          </p>
        </form>
        </div>

        <div className="lg:sticky lg:top-6">
          <MenuRail
            selected={packagePrefill}
            onSelect={selectPackage}
          />
        </div>
      </div>
    </section>
  );
}
