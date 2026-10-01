"use client";

import { useEffect } from "react";

/** Records intent to contact Kingo, not a completed call or booking. */
export function LeadClickTracking() {
  useEffect(() => {
    const trackClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a[href]");
      if (!(link instanceof HTMLAnchorElement)) return;

      const href = link.href;
      const eventName = href.startsWith("tel:")
        ? "phone_link_click"
        : href.startsWith("https://book.servicem8.com/") ||
            href.startsWith("https://bit.ly/kingoonlinebooking")
          ? "booking_link_click"
          : null;

      if (!eventName) return;

      try {
        window.gtag?.("event", eventName, {
          page_path: window.location.pathname,
        });
      } catch {
        // Tracking must never interrupt the link's normal behavior.
      }
    };

    document.addEventListener("click", trackClick, true);
    return () => document.removeEventListener("click", trackClick, true);
  }, []);

  return null;
}
