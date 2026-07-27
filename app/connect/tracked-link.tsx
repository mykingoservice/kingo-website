"use client";

import type { ComponentPropsWithoutRef } from "react";

export type ConnectEventName =
  | "connect_book_service"
  | "connect_call"
  | "connect_text"
  | "connect_email"
  | "connect_google_reviews"
  | "connect_youtube"
  | "connect_website"
  | "connect_yelp"
  | "connect_facebook"
  | "connect_instagram"
  | "connect_tiktok"
  | "connect_x";

type TrackedLinkProps = ComponentPropsWithoutRef<"a"> & {
  actionName: string;
  eventName: ConnectEventName;
};

declare global {
  interface Window {
    gtag?: (
      command: "event",
      eventName: ConnectEventName,
      parameters: { action_name: string },
    ) => void;
  }
}

export function TrackedLink({
  actionName,
  eventName,
  onClick,
  ...props
}: TrackedLinkProps) {
  return (
    <a
      {...props}
      onClick={(event) => {
        onClick?.(event);

        try {
          window.gtag?.("event", eventName, {
            action_name: actionName,
          });
        } catch {
          // Analytics must never interrupt the link's normal behavior.
        }
      }}
    />
  );
}
