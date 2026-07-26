"use client";

import { useState, type FormEvent } from "react";
import Cta from "@/components/Cta";

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  position: string;
  location: string;
  startDate: string;
  monday: string;
  tuesday: string;
  wednesday: string;
  thursday: string;
  friday: string;
  education: string;
  talents: string;
  experience: string;
  comments: string;
};

const initial: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  position: "",
  location: "",
  startDate: "",
  monday: "",
  tuesday: "",
  wednesday: "",
  thursday: "",
  friday: "",
  education: "",
  talents: "",
  experience: "",
  comments: "",
};

const availabilityOptions = [
  "Please Select",
  "Morning (8AM–12PM)",
  "Afternoon (12PM–4PM)",
  "Evening (4PM–Close)",
  "All Day",
  "Not Available",
];

const positionOptions = [
  "Please Select",
  "Cashier / Front Counter",
  "Cook / Pit Master",
  "Server",
  "Shift Leader",
  "Assistant Manager",
  "General Manager",
  "Catering Coordinator",
  "Other",
];

const educationOptions = [
  "Please Select",
  "High School / GED",
  "Some College",
  "Associate's Degree",
  "Bachelor's Degree",
  "Master's Degree",
  "Other",
];

const fieldLabel = "mb-1 text-[11px] font-bold uppercase text-brand-black";
const inputClass =
  "w-full rounded-[5px] border border-brand-black/20 bg-white px-3 py-3 text-sm text-brand-black placeholder:text-brand-gray/50 focus:border-brand-red focus:outline-none focus:ring-1 focus:ring-brand-red";

const FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_CAREERS_FORM_ENDPOINT?.trim() ||
  "https://formsubmit.co/ajax/careers@shanesribshack.com";

export default function CareersForm() {
  const [form, setForm] = useState<FormData>(initial);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const update = (key: keyof FormData, value: string) =>
    setForm((p) => ({ ...p, [key]: value }));

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: `Careers Application: ${form.firstName} ${form.lastName}`,
          ...form,
        }),
      });
      if (!res.ok) throw new Error("Submit failed");
      setStatus("success");
      setForm(initial);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <section className="bg-brand-tan px-5 py-24 text-center">
        <div className="mx-auto max-w-[600px]">
          <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full bg-brand-red">
            <svg
              className="size-8 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={3}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h2 className="mb-4 text-3xl font-extrabold uppercase text-brand-black">
            Application Submitted!
          </h2>
          <p className="mb-8 text-lg text-brand-gray">
            Thank you for your interest in joining the Shack. We&apos;ll review
            your application and reach out if there&apos;s a fit.
          </p>
          <Cta href="/careers" variant="red">
            Submit Another
          </Cta>
        </div>
      </section>
    );
  }

  return (
    <section
      id="careers-form"
      className="bg-brand-tan px-5 py-16 lg:px-[66px] lg:py-24"
    >
      <div className="mx-auto max-w-[600px]">
        <h2 className="mb-8 text-center text-3xl font-extrabold uppercase text-brand-black lg:text-4xl">
          Join Our Team
        </h2>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-5"
          noValidate
        >
          {/* Name row */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={fieldLabel} htmlFor="cf-first">
                First Name
              </label>
              <input
                id="cf-first"
                className={inputClass}
                value={form.firstName}
                onChange={(e) => update("firstName", e.target.value)}
                required
              />
            </div>
            <div>
              <label className={fieldLabel} htmlFor="cf-last">
                Last Name
              </label>
              <input
                id="cf-last"
                className={inputClass}
                value={form.lastName}
                onChange={(e) => update("lastName", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Contact row */}
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={fieldLabel} htmlFor="cf-email">
                Email
              </label>
              <input
                id="cf-email"
                type="email"
                className={inputClass}
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                required
              />
            </div>
            <div>
              <label className={fieldLabel} htmlFor="cf-phone">
                Phone
              </label>
              <input
                id="cf-phone"
                type="tel"
                className={inputClass}
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                required
              />
            </div>
          </div>

          {/* Position */}
          <div>
            <label className={fieldLabel} htmlFor="cf-position">
              Position
            </label>
            <select
              id="cf-position"
              className={inputClass}
              value={form.position}
              onChange={(e) => update("position", e.target.value)}
              required
            >
              {positionOptions.map((o) => (
                <option key={o} value={o === "Please Select" ? "" : o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          {/* Location */}
          <div>
            <label className={fieldLabel} htmlFor="cf-location">
              Preferred Location
            </label>
            <input
              id="cf-location"
              className={inputClass}
              placeholder="e.g. Edgewood, Norcross"
              value={form.location}
              onChange={(e) => update("location", e.target.value)}
            />
          </div>

          {/* Start Date */}
          <div>
            <label className={fieldLabel} htmlFor="cf-start">
              Available Start Date
            </label>
            <input
              id="cf-start"
              type="date"
              className={inputClass}
              value={form.startDate}
              onChange={(e) => update("startDate", e.target.value)}
            />
          </div>

          {/* Availability */}
          <fieldset>
            <legend className={`${fieldLabel} mb-3`}>
              Weekly Availability
            </legend>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {(
                ["monday", "tuesday", "wednesday", "thursday", "friday"] as const
              ).map((day) => (
                <div key={day}>
                  <label className="mb-1 block text-[10px] font-bold uppercase text-brand-gray">
                    {day.charAt(0).toUpperCase() + day.slice(1)}
                  </label>
                  <select
                    className={inputClass}
                    value={form[day]}
                    onChange={(e) => update(day, e.target.value)}
                  >
                    {availabilityOptions.map((o) => (
                      <option key={o} value={o === "Please Select" ? "" : o}>
                        {o}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          </fieldset>

          {/* Education */}
          <div>
            <label className={fieldLabel} htmlFor="cf-edu">
              Education Level
            </label>
            <select
              id="cf-edu"
              className={inputClass}
              value={form.education}
              onChange={(e) => update("education", e.target.value)}
            >
              {educationOptions.map((o) => (
                <option key={o} value={o === "Please Select" ? "" : o}>
                  {o}
                </option>
              ))}
            </select>
          </div>

          {/* Talents */}
          <div>
            <label className={fieldLabel} htmlFor="cf-talents">
              Tell Us More About Your Talents &amp; Desires
            </label>
            <textarea
              id="cf-talents"
              className={`${inputClass} min-h-[78px]`}
              rows={3}
              value={form.talents}
              onChange={(e) => update("talents", e.target.value)}
            />
          </div>

          {/* Experience */}
          <div>
            <label className={fieldLabel} htmlFor="cf-exp">
              Previous Work Experience
            </label>
            <textarea
              id="cf-exp"
              className={`${inputClass} min-h-[78px]`}
              rows={3}
              value={form.experience}
              onChange={(e) => update("experience", e.target.value)}
            />
          </div>

          {/* Comments */}
          <div>
            <label className={fieldLabel} htmlFor="cf-comments">
              Comments / Questions
            </label>
            <textarea
              id="cf-comments"
              className={`${inputClass} min-h-[78px]`}
              rows={3}
              value={form.comments}
              onChange={(e) => update("comments", e.target.value)}
            />
          </div>

          {/* Submit */}
          {status === "error" && (
            <p className="text-center text-sm text-red-600">
              Something went wrong. Please try again or email us directly.
            </p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="inline-flex items-center justify-center rounded-[5px] bg-brand-red px-10 py-4 text-sm font-bold uppercase text-white transition-colors hover:bg-[#a01b25] disabled:opacity-60"
          >
            {status === "loading" ? "Submitting..." : "Submit Application"}
          </button>
        </form>
      </div>
    </section>
  );
}
