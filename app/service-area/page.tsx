import type { Metadata } from "next";
import Link from "next/link";
import { ServiceAreaCoverage } from "../../components/service-area-coverage";
import { BOOKING_URL, PHONE_HREF } from "../cta-links";

export const metadata: Metadata = {
  title: "HVAC Service Areas and Trip and Diagnostic Fees",
  description:
    "See Kingo Services' primary and secondary HVAC service areas from Splendora across Greater Houston, including the $75 and $125 trip and diagnostic fees.",
  alternates: {
    canonical: "/service-area/",
  },
  openGraph: {
    title: "Kingo HVAC Service Areas and Trip and Diagnostic Fees",
    description:
      "Primary HVAC coverage near Splendora and expanded secondary coverage across Greater Houston, with trip and diagnostic fees shown by service area.",
    type: "website",
    url: "/service-area/",
    images: [
      {
        url: "/kingo-logo.webp",
        width: 1150,
        height: 404,
        alt: "Kingo Services Heating and Cooling",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Kingo HVAC Service Areas and Diagnostic Fees",
    description:
      "View Kingo's primary and secondary HVAC coverage areas and the applicable trip and diagnostic fee.",
    images: ["/kingo-logo.webp"],
  },
};

const primaryCities = [
  { href: "/service-area/splendora/", label: "Splendora" },
  { href: "/service-area/new-caney/", label: "New Caney" },
  { href: "/service-area/porter/", label: "Porter" },
  { href: "/service-area/humble/", label: "Humble" },
  { href: "/service-area/cleveland/", label: "Cleveland" },
];

const nearbyCities = [
  { href: "/service-area/conroe/", label: "Conroe" },
  { href: "/service-area/montgomery/", label: "Montgomery" },
  { href: "/service-area/the-woodlands/", label: "The Woodlands" },
  { href: "/service-area/spring/", label: "Spring" },
];

const greaterHoustonCities = [
  { href: "/service-area/houston/", label: "Houston" },
  { href: "/service-area/cypress/", label: "Cypress" },
  { href: "/service-area/katy/", label: "Katy" },
  { href: "/service-area/sugar-land/", label: "Sugar Land" },
  { href: "/service-area/pearland/", label: "Pearland" },
];

const feeNotes = [
  "The service address determines whether the primary or secondary trip and diagnostic fee applies.",
  "The trip and diagnostic fee covers dispatch to the property and diagnosis of the HVAC problem. Repair pricing is presented separately before work begins.",
  "Emergency, after-hours, or unusually long-distance dispatch may involve an additional charge based on time, distance, and technician availability. Any additional charge is discussed before scheduling.",
];

const primaryCoverage =
  "Splendora, New Caney, Porter, Kingwood, Humble, and Cleveland";
const secondaryCoverage =
  "Houston, Richmond, Katy, Sugar Land, Missouri City, Pearland, Galveston, Pasadena, Baytown, Spring, The Woodlands, Conroe, Shepherd, and surrounding Greater Houston communities";

export default function Page() {
  return (
    <div className="service-area-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Kingo HVAC coverage and dispatch pricing</p>
          <h1>Primary and secondary HVAC service areas from Splendora.</h1>
          <p className="hero-text">
            Kingo Services Heating and Cooling operates from Splendora and
            serves the northeast Houston corridor as its primary service area.
            Expanded secondary coverage is available across Greater Houston and
            surrounding communities. The trip and diagnostic fee is based on the
            service address.
          </p>
          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call Now
            </a>
            <a className="home-button home-button-secondary" href={BOOKING_URL}>
              Book Online
            </a>
          </div>
        </div>
      </section>

      <section className="home-section area-overview-section">
        <div className="section-heading">
          <p className="eyebrow">Primary service area</p>
          <h2>Northeast Houston corridor: $75 trip and diagnostic fee.</h2>
          <p>
            The primary service area covers {primaryCoverage}. These are the
            closest priority communities to the Splendora operating hub.
          </p>
        </div>
        <ServiceAreaCoverage variant="primary" bookingUrl={BOOKING_URL} />
      </section>

      <section className="home-section area-overview-section">
        <div className="section-heading">
          <p className="eyebrow">Secondary service area</p>
          <h2>Expanded Greater Houston coverage: $125 trip and diagnostic fee.</h2>
          <p>
            The secondary service area extends from Galveston and the southwest
            Houston region through Houston and north beyond Cleveland. Calls are
            accepted based on schedule, distance, technician availability, and
            job fit. Representative coverage includes {secondaryCoverage}.
          </p>
        </div>
        <ServiceAreaCoverage variant="secondary" bookingUrl={BOOKING_URL} />
      </section>

      <section className="home-section area-overview-section">
        <div className="section-heading">
          <p className="eyebrow">Primary city pages</p>
          <h2>Local HVAC service information near the Splendora operating hub.</h2>
          <p>
            Open a city page for local services, completed-job proof, and related
            Kingo resources.
          </p>
        </div>
        <div className="city-card-grid">
          {primaryCities.map((city) => (
            <Link href={city.href} key={city.href}>
              {city.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section area-overview-section">
        <div className="section-heading">
          <p className="eyebrow">Additional city pages</p>
          <h2>Northeast and Greater Houston service locations.</h2>
          <p>
            These pages support the larger regional service area. Availability
            and the applicable trip and diagnostic fee are confirmed from the
            service address before dispatch.
          </p>
        </div>
        <div className="city-card-grid">
          {[...nearbyCities, ...greaterHoustonCities].map((city) => (
            <Link href={city.href} key={city.href}>
              {city.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">How the fee works</p>
          <h2>Trip and diagnostic pricing is confirmed before dispatch.</h2>
        </div>
        <ol className="process-list">
          {feeNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ol>
        <p
          style={{
            color: "var(--muted)",
            lineHeight: 1.7,
            margin: "1.5rem 0 0",
          }}
        >
          The maps are visual coverage guides, not exact municipal or ZIP-code
          boundaries. Kingo confirms the service zone and fee from the property
          address before the appointment is scheduled.
        </p>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need HVAC service?</p>
        <h2>Send the service address so Kingo can confirm coverage and the fee.</h2>
        <div className="hero-actions">
          <a className="home-button home-button-primary" href={PHONE_HREF}>
            Call Now
          </a>
          <Link
            className="home-button home-button-secondary"
            href="/emergency-hvac/"
          >
            Emergency HVAC
          </Link>
          <a className="home-button home-button-secondary" href={BOOKING_URL}>
            Book Online
          </a>
        </div>
      </section>
    </div>
  );
}
