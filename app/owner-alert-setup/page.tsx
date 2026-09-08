import type { Metadata } from "next";
import { OwnerAlertEnrollment } from "./owner-alert-enrollment";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Owner Call Alert Setup",
  description: "Private Kingo Services owner-device notification setup.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
    },
  },
};

export default function OwnerAlertSetupPage() {
  return (
    <section className={styles.page} aria-labelledby="owner-alert-title">
      <div className={styles.card}>
        <p className={styles.eyebrow}>Private owner setup</p>
        <h1 id="owner-alert-title">Connect this Android to Kingo call alerts.</h1>
        <p className={styles.intro}>
          Use this page only on the Android phone that stays with the person
          answering <strong>(832) 517-1464</strong>.
        </p>

        <ol className={styles.steps}>
          <li>Open this link in Chrome or Samsung Internet on that phone.</li>
          <li>Tap the button below and allow notifications when asked.</li>
          <li>Wait for the Kingo test alert before leaving this page.</li>
        </ol>

        <OwnerAlertEnrollment />

        <p className={styles.note}>
          Call forwarding is separate from this alert. Calls will still ring the
          main phone if PushEngage is unavailable.
        </p>
      </div>
    </section>
  );
}
