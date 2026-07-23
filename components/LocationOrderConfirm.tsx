"use client";

import Link from "next/link";
import { useEffect, useId, useRef } from "react";
import { orderUrl, type LocationDetail } from "@/lib/locationData";

export type OrderFulfillment = "PICKUP" | "DELIVERY";

const ctaBase =
  "inline-flex w-full items-center justify-center rounded-[6px] px-[15px] py-[11px] text-xs font-bold uppercase leading-4 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold sm:w-auto";

type LocationOrderConfirmProps = {
  location: LocationDetail;
  fulfillment: OrderFulfillment;
  open: boolean;
  onClose: () => void;
};

/** Confirms location before sending the user to the third-party order site. */
export default function LocationOrderConfirm({
  location,
  fulfillment,
  open,
  onClose,
}: LocationOrderConfirmProps) {
  const titleId = useId();
  const descId = useId();
  const dialogRef = useRef<HTMLDivElement>(null);
  const continueRef = useRef<HTMLAnchorElement>(null);
  const previouslyFocused = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement as HTMLElement | null;
    const frame = requestAnimationFrame(() => {
      continueRef.current?.focus();
    });

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", onKeyDown);

    return () => {
      cancelAnimationFrame(frame);
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKeyDown);
      previouslyFocused.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  const continueHref = orderUrl(fulfillment, location.locationId);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="presentation"
    >
      <button
        type="button"
        aria-label="Dismiss location confirmation"
        className="absolute inset-0 animate-[fadeIn_180ms_ease-out] bg-brand-black/50"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
        className="relative z-10 w-full max-w-[420px] animate-[confirmPop_180ms_ease-out] rounded-[12px] border border-black/[0.1] bg-white p-6 shadow-[0_16px_40px_rgba(16,24,32,0.18)]"
      >
        <h2
          id={titleId}
          className="text-[28px] font-extrabold uppercase leading-none text-brand-red"
        >
          {location.shortName}
        </h2>

        <p
          id={descId}
          className="mt-3 text-base font-semibold leading-snug text-brand-black"
        >
          {location.address}
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            ref={continueRef}
            href={continueHref}
            target="_blank"
            rel="noopener noreferrer"
            className={`${ctaBase} border border-brand-red bg-brand-red text-white hover:shadow-[0px_6px_16px_0px_rgba(217,74,43,0.4)]`}
            onClick={onClose}
          >
            Continue to Order
          </a>
          <Link
            href="/locations"
            className={`${ctaBase} border-2 border-brand-black bg-transparent text-brand-black hover:border-[#d94a2b] hover:bg-[#d94a2b] hover:text-white`}
            onClick={onClose}
          >
            Change Location
          </Link>
        </div>
      </div>
    </div>
  );
}
