import type { Metadata } from "next";
import Image from "next/image";
import { PHONE_HREF } from "../cta-links";
import { GoogleAnalytics } from "./google-analytics";
import styles from "./page.module.css";
import { TrackedLink, type ConnectEventName } from "./tracked-link";

const SITE_URL = "https://mykingoservice.com/";
const CONNECT_BOOKING_URL = "https://bit.ly/kingoonlinebooking";
const SMS_HREF = "sms:+18325171464";
const EMAIL_HREF = "mailto:email@mykingoservice.com";
const GOOGLE_REVIEWS_URL = "https://g.page/r/CUaufGQiE2vQEBM/review";
const YOUTUBE_URL =
  "https://www.youtube.com/channel/UCo_Nnt1KsWwd6rAIZ9J0pHg";
const secondaryLinks = [
  {
    href: EMAIL_HREF,
    label: "Email Kingo",
    eventName: "connect_email",
    actionName: "email",
    external: false,
  },
  {
    href: "https://www.yelp.com/biz/kingo-services-heating-and-cooling-houston",
    label: "Yelp",
    eventName: "connect_yelp",
    actionName: "yelp",
    external: true,
  },
  {
    href: "https://www.facebook.com/Kingollc/",
    label: "Facebook",
    eventName: "connect_facebook",
    actionName: "facebook",
    external: true,
  },
  {
    href: "https://www.instagram.com/mykingoservice/",
    label: "Instagram",
    eventName: "connect_instagram",
    actionName: "instagram",
    external: true,
  },
  {
    href: "https://www.tiktok.com/@kingoservices",
    label: "TikTok",
    eventName: "connect_tiktok",
    actionName: "tiktok",
    external: true,
  },
  {
    href: "https://twitter.com/mykingoservice",
    label: "X",
    eventName: "connect_x",
    actionName: "x",
    external: true,
  },
] as const satisfies ReadonlyArray<{
  href: string;
  label: string;
  eventName: ConnectEventName;
  actionName: string;
  external: boolean;
}>;
const configuredMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA_MEASUREMENT_ID =
  configuredMeasurementId &&
  /^G-[A-Z0-9]+$/.test(configuredMeasurementId)
    ? configuredMeasurementId
    : undefined;

const serviceAreas = [
  "Splendora",
  "New Caney",
  "Porter",
  "Kingwood",
  "Humble",
  "Atascocita",
  "The Woodlands",
  "Spring",
  "Conroe",
  "Montgomery",
];

const actions = [
  {
    href: CONNECT_BOOKING_URL,
    label: "Book HVAC Service",
    text: "Submit your service request online",
    kind: "primary",
    external: true,
    eventName: "connect_book_service",
    actionName: "book_service",
  },
  {
    href: PHONE_HREF,
    label: "Call Kingo",
    text: "(832) 517-1464",
    kind: "standard",
    external: false,
    eventName: "connect_call",
    actionName: "call",
  },
  {
    href: SMS_HREF,
    label: "Text Kingo",
    text: "Start a text conversation",
    kind: "standard",
    external: false,
    eventName: "connect_text",
    actionName: "text",
  },
  {
    href: GOOGLE_REVIEWS_URL,
    label: "Read Our Google Reviews",
    text: "See what customers share on Google",
    kind: "standard",
    external: true,
    eventName: "connect_google_reviews",
    actionName: "google_reviews",
  },
  {
    href: YOUTUBE_URL,
    label: "Watch Kingo on YouTube",
    text: "See real HVAC work and practical videos",
    kind: "standard",
    external: true,
    eventName: "connect_youtube",
    actionName: "youtube",
  },
  {
    href: SITE_URL,
    label: "Visit the Full Website",
    text: "Explore services, service areas, and more",
    kind: "standard",
    external: true,
    eventName: "connect_website",
    actionName: "full_website",
  },
] as const satisfies ReadonlyArray<{
  href: string;
  label: string;
  text: string;
  kind: "primary" | "standard";
  external: boolean;
  eventName: ConnectEventName;
  actionName: string;
}>;

export const metadata: Metadata = {
  title: {
    absolute: "Connect With Kingo Services | HVAC Service, Reviews & Videos",
  },
  description:
    "Book HVAC service, call or text Kingo, read Google reviews, watch real HVAC work, and explore Kingo Services Heating and Cooling.",
  alternates: {
    canonical: `${SITE_URL}connect`,
  },
  openGraph: {
    title: "Connect With Kingo Services | HVAC Service, Reviews & Videos",
    description:
      "Choose the easiest way to book, call, text, read reviews, watch Kingo, or visit the full website.",
    url: `${SITE_URL}connect`,
    siteName: "Kingo Services Heating and Cooling",
    type: "website",
    images: [
      {
        url: `${SITE_URL}kingo-favicon.png`,
        width: 1254,
        height: 1254,
        alt: "Kingo Services Heating and Cooling",
      },
    ],
  },
};

export default function ConnectPage() {
  return (
    <article className={styles.connectPage}>
      <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      <div className={styles.shell}>
        <header className={styles.header}>
          <TrackedLink
            actionName="header_logo"
            className={styles.logoLink}
            eventName="connect_website"
            href={SITE_URL}
            aria-label="Visit the Kingo Services Heating and Cooling website"
          >
            <span className={styles.logoWrap}>
              <Image
                src="/kingo-favicon.png"
                alt=""
                width={88}
                height={88}
                priority
              />
            </span>
            <span className={styles.businessName}>
              <strong>Kingo Services</strong>
              <span>Heating and Cooling</span>
            </span>
          </TrackedLink>
          <p className={styles.trustLine}>
            Real HVAC service. Real work. Real proof.
          </p>
        </header>

        <div className={styles.main}>
          <section aria-labelledby="connect-heading">
            <p className={styles.eyebrow}>How can we help?</p>
            <h1 id="connect-heading">Connect with Kingo</h1>
            <p className={styles.intro}>
              Choose the quickest way to get service, reach our team, or see
              our work.
            </p>

            <div className={styles.actions}>
              {actions.map((action, index) => (
                <TrackedLink
                  actionName={action.actionName}
                  className={`${styles.action} ${
                    action.kind === "primary" ? styles.primaryAction : ""
                  }`}
                  eventName={action.eventName}
                  href={action.href}
                  key={action.label}
                  {...(action.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  <span className={styles.actionNumber} aria-hidden="true">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className={styles.actionCopy}>
                    <strong>{action.label}</strong>
                    <span>{action.text}</span>
                  </span>
                  <span className={styles.arrow} aria-hidden="true">
                    →
                  </span>
                </TrackedLink>
              ))}
            </div>

            <nav
              className={styles.secondaryLinks}
              aria-label="Email and social profiles"
            >
              {secondaryLinks.map((link) => (
                <TrackedLink
                  actionName={link.actionName}
                  eventName={link.eventName}
                  href={link.href}
                  key={link.label}
                  {...(link.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {link.label}
                </TrackedLink>
              ))}
            </nav>
          </section>

          <section
            className={styles.serviceArea}
            aria-labelledby="service-area-heading"
          >
            <p className={styles.eyebrow}>Close to home</p>
            <h2 id="service-area-heading">Communities we serve</h2>
            <p>
              Kingo serves customers across these communities, with scheduling
              based on location and current availability.
            </p>
            <ul>
              {serviceAreas.map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </section>
        </div>

        <footer className={styles.footer}>
          <p className={styles.footerName}>
            Kingo Services Heating and Cooling
          </p>
          <p>We do not cut corners. We cut waste.</p>
          <address>
            275 County Road 3662
            <br />
            Splendora, TX 77372-7019
          </address>
          <p>Texas HVAC License TACLA33837E</p>
          <TrackedLink
            actionName="footer_website"
            eventName="connect_website"
            href={SITE_URL}
          >
            mykingoservice.com
          </TrackedLink>
        </footer>
      </div>
    </article>
  );
}
