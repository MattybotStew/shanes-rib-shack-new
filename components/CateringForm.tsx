"use client";

import { FormEvent, useState } from "react";
import { asset } from "@/lib/asset";

const fieldClass =
  "w-full rounded-[8px] border border-[#d6d6d6] bg-brand-tan px-3 py-3.5 text-[13px] font-semibold leading-[1.5] text-brand-black placeholder:text-[#808080] outline-none focus:border-brand-red";
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

export default function CateringForm() {
  const [delivery, setDelivery] = useState("not-sure");

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  return (
    <section
      className="flex w-full flex-col items-center bg-brand-tan px-5 py-10 lg:py-20"
      aria-label="Catering inquiry form"
      id="catering-inquiry"
    >
      <div className="flex w-full max-w-[824px] flex-col items-center justify-center rounded-[12px] bg-brand-black px-5 py-10 sm:px-10 lg:px-20 lg:py-[70px]">
        <h2 className="mb-[30px] w-full text-center text-[28px] font-extrabold uppercase leading-none text-white sm:text-[32px]">
          Submit a Catering Inquiry
        </h2>
        <div className="mb-[30px] w-full text-center text-lg font-bold leading-[1.5] text-white">
          <p className="mb-0">Please complete all fields.</p>
          <p>After form submission, you will receive a confirmation email.</p>
        </div>

        <form
          onSubmit={onSubmit}
          className="flex w-full flex-col gap-2.5 rounded-[12px] bg-white p-6 sm:p-10 lg:p-[60px]"
        >
          <div className="flex flex-col gap-6 pb-5">
            {/* Location */}
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

            {/* Names */}
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="firstName" className={labelClass}>
                  First Name <span className="text-brand-red">*</span>
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  required
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
                  placeholder="Enter your last name"
                  className={fieldClass}
                />
              </div>
            </div>

            {/* Organization */}
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="organization" className={labelClass}>
                Organization <span className="text-brand-red">*</span>
              </label>
              <input
                id="organization"
                name="organization"
                required
                placeholder="Enter Organization"
                className={fieldClass}
              />
            </div>

            {/* Email / Phone */}
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>
                  Email <span className="text-brand-red">*</span>
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Enter your email"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="phone" className={labelClass}>
                  Phone Number <span className="text-brand-red">*</span>
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="Enter 10 digit number"
                  className={fieldClass}
                />
              </div>
            </div>

            {/* Event type / people */}
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="eventType" className={labelClass}>
                  Type of Event <span className="text-brand-red">*</span>
                </label>
                <input
                  id="eventType"
                  name="eventType"
                  required
                  placeholder="Enter your event"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="attendees" className={labelClass}>
                  Number of People Attending{" "}
                  <span className="text-brand-red">*</span>
                </label>
                <input
                  id="attendees"
                  name="attendees"
                  required
                  placeholder="Enter # of People Attending"
                  className={fieldClass}
                />
              </div>
            </div>

            {/* Date / time */}
            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="eventDate" className={labelClass}>
                  Date of Event <span className="text-brand-red">*</span>
                </label>
                <input
                  id="eventDate"
                  name="eventDate"
                  required
                  placeholder="Enter your event date"
                  className={fieldClass}
                />
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="startTime" className={labelClass}>
                  Start Time <span className="text-brand-red">*</span>
                </label>
                <input
                  id="startTime"
                  name="startTime"
                  required
                  placeholder="Enter start time"
                  className={fieldClass}
                />
              </div>
            </div>

            {/* Package */}
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="package" className={labelClass}>
                Catering Package <span className="text-brand-red">*</span>
              </label>
              <div className={selectWrap}>
                <select
                  id="package"
                  name="package"
                  required
                  defaultValue=""
                  className="h-full w-full appearance-none bg-transparent px-3 text-[13px] font-semibold text-[#808080] outline-none"
                >
                  <option value="" disabled>
                    Select Catering Package
                  </option>
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

            {/* Delivery method */}
            <div className="flex w-full flex-col gap-3 border-t border-brand-black/10 pt-4">
              <p className={labelClass}>Delivery Method</p>
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

            {/* Comments */}
            <div className="flex w-full flex-col gap-2">
              <label htmlFor="comments" className={labelClass}>
                Comments or Questions
              </label>
              <textarea
                id="comments"
                name="comments"
                rows={4}
                placeholder="Enter your comments or questions"
                className={`${fieldClass} min-h-[96px] resize-y`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-[5px] bg-brand-red px-[26px] py-5 text-base font-bold uppercase leading-4 text-white transition-colors hover:bg-[#a01b25]"
          >
            Submit Catering Inquiry
          </button>
        </form>
      </div>
    </section>
  );
}
