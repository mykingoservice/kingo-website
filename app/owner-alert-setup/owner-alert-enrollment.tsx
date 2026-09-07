"use client";

import { useEffect, useState } from "react";
import styles from "./page.module.css";

const ENROLLMENT_ENDPOINT =
  "https://kingo-call-alerts-8804.twil.io/owner-device-setup";

type PermissionResult = {
  permission?: "default" | "denied" | "granted";
  subscriber_id?: string;
};

type SubscriberDetails = {
  browser?: string;
  device?: string;
  subscriber_id?: string;
};

type PushEngageSdk = {
  getSubscriber: () => Promise<SubscriberDetails>;
  getSubscriberId: () => Promise<string | null>;
  showNativePermissionPrompt: () => Promise<PermissionResult>;
};

type SetupStatus =
  | "loading"
  | "ready"
  | "connecting"
  | "success"
  | "blocked"
  | "error";

function getPushEngageSdk() {
  const candidate = (
    window as Window & { PushEngage?: Partial<PushEngageSdk> }
  ).PushEngage;

  if (
    candidate &&
    typeof candidate.getSubscriber === "function" &&
    typeof candidate.getSubscriberId === "function" &&
    typeof candidate.showNativePermissionPrompt === "function"
  ) {
    return candidate as PushEngageSdk;
  }

  return null;
}

function readSetupToken() {
  return new URLSearchParams(window.location.hash.slice(1)).get("setup") || "";
}

export function OwnerAlertEnrollment() {
  const [status, setStatus] = useState<SetupStatus>("loading");
  const [message, setMessage] = useState(
    "Checking this phone and loading secure notification setup…",
  );

  useEffect(() => {
    let attempts = 0;
    const timer = window.setInterval(() => {
      if (!/Android/i.test(window.navigator.userAgent)) {
        window.clearInterval(timer);
        setStatus("blocked");
        setMessage(
          "This private setup only accepts an Android phone. Open the same link on the phone that answers the Kingo line.",
        );
        return;
      }

      if (!readSetupToken()) {
        window.clearInterval(timer);
        setStatus("blocked");
        setMessage("This setup link is incomplete. Ask for a fresh private link.");
        return;
      }

      attempts += 1;

      if (getPushEngageSdk()) {
        window.clearInterval(timer);
        setStatus("ready");
        setMessage("This Android is ready to connect.");
      } else if (attempts >= 40) {
        window.clearInterval(timer);
        setStatus("error");
        setMessage(
          "PushEngage did not load. Check the browser connection, turn off content blocking for this site, and refresh.",
        );
      }
    }, 250);

    return () => window.clearInterval(timer);
  }, []);

  async function connectOwnerDevice() {
    const sdk = getPushEngageSdk();
    const token = readSetupToken();

    if (!sdk || !token || !/Android/i.test(window.navigator.userAgent)) {
      setStatus("error");
      setMessage("This phone is not ready. Refresh the private setup link and try again.");
      return;
    }

    setStatus("connecting");
    setMessage("Waiting for notification permission…");

    try {
      const permission = await sdk.showNativePermissionPrompt();
      const subscriberHash =
        permission.subscriber_id || (await sdk.getSubscriberId());

      if (permission.permission === "denied") {
        throw new Error(
          "Notifications are blocked. Allow notifications for mykingoservice.com in this browser's Android settings, then try again.",
        );
      }

      if (!subscriberHash) {
        throw new Error(
          "The phone did not finish subscribing. Allow notifications and tap the button again.",
        );
      }

      const subscriber = await sdk.getSubscriber();
      if (subscriber.device && !/mobile/i.test(subscriber.device)) {
        throw new Error("PushEngage did not identify this as a mobile device.");
      }

      setMessage("Registering this Android and sending a test alert…");

      const body = new URLSearchParams({
        token,
        subscriberHash,
      });
      const response = await fetch(ENROLLMENT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      });
      const result = (await response.json().catch(() => null)) as
        | { error?: string; ok?: boolean; testQueued?: boolean }
        | null;

      if (!response.ok || !result?.ok) {
        throw new Error(result?.error || "The secure registration did not complete.");
      }

      window.history.replaceState(null, "", window.location.pathname);
      setStatus("success");
      setMessage(
        result.testQueued
          ? "Connected. A Kingo test notification was sent to this Android."
          : "This Android was already connected to Kingo call alerts.",
      );
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Setup could not be completed. Please try again.",
      );
    }
  }

  const buttonDisabled =
    status === "loading" ||
    status === "connecting" ||
    status === "success" ||
    status === "blocked";

  return (
    <div className={styles.enrollment}>
      <div
        className={`${styles.status} ${styles[status]}`}
        role="status"
        aria-live="polite"
      >
        <span aria-hidden="true" />
        <p>{message}</p>
      </div>

      <button
        className={styles.button}
        type="button"
        disabled={buttonDisabled}
        onClick={connectOwnerDevice}
      >
        {status === "connecting"
          ? "Connecting…"
          : status === "success"
            ? "Android connected"
            : "Connect this Android"}
      </button>
    </div>
  );
}
