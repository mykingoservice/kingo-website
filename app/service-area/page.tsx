import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const primaryCities = [
  { href: "/service-area/splendora", label: "Splendora" },
  { href: "/service-area/new-caney", label: "New Caney" },
  { href: "/service-area/porter", label: "Porter" },
  { href: "/service-area/cleveland", label: "Cleveland" },
];

const nearbyCities = [
  { href: "/service-area/humble", label: "Humble" },
  { href: "/service-area/conroe", label: "Conroe" },
  { href: "/service-area/montgomery", label: "Montgomery" },
  { href: "/service-area/the-woodlands", label: "The Woodlands" },
  { href: "/service-area/spring", label: "Spring" },
];

const legacyCities = [
  { href: "/service-area/houston", label: "Houston" },
  { href: "/service-area/cypress", label: "Cypress" },
  { href: "/service-area/katy", label: "Katy" },
  { href: "/service-area/sugar-land", label: "Sugar Land" },
];

const coverageNotes = [
  "Kingo operates from Splendora and prioritizes nearby Northeast Greater Houston service calls.",
  "Emergency and after-hours availability depends on location, schedule, and current call volume.",
  "Any emergency or after-hours dispatch charges are explained before the appointment is confirmed.",
];

export default function Page() {
  return (
    <div className="service-area-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Northeast Greater Houston service area</p>
          <h1>HVAC service from Splendora into nearby Northeast Greater Houston communities.</h1>
          <p className="hero-text">
            Kingo Services Heating and Cooling operates from Splendora and
            serves nearby communities including New Caney, Porter, Cleveland,
            Humble, Conroe, Montgomery, The Woodlands, and Spring. Emergency
            HVAC, AC repair, heating repair, maintenance, and light commercial
            HVAC service are available when schedule and location allow.
          </p>
          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call Now
            </a>
            <Link className="home-button home-button-secondary" href="/emergency-hvac">
              Emergency HVAC
            </Link>
            <a className="home-button home-button-secondary" href={BOOKING_URL}>
              Book Online
            </a>
          </div>
        </div>
      </section>

      <section className="home-section area-overview-section">
        <div className="section-heading">
          <p className="eyebrow">Primary nearby service areas</p>
          <h2>Backyard service corridor.</h2>
          <p>
            These are the closest priority communities to the Splendora
            operating hub.
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
          <p className="eyebrow">Nearby service areas</p>
          <h2>Additional Northeast Greater Houston communities.</h2>
          <p>
            Kingo also serves selected nearby communities when scheduling,
            distance, and job fit make sense.
          </p>
        </div>
        <div className="city-card-grid">
          {nearbyCities.map((city) => (
            <Link href={city.href} key={city.href}>
              {city.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section area-overview-section">
        <div className="section-heading">
          <p className="eyebrow">Other served areas by availability</p>
          <h2>Legacy markets are still served when the job fits.</h2>
          <p>
            Kingo may still serve Houston and other larger Greater Houston
            markets when scheduling, distance, and job type make sense.
          </p>
        </div>
        <div className="city-card-grid">
          {legacyCities.map((city) => (
            <Link href={city.href} key={city.href}>
              {city.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Coverage notes</p>
          <h2>Service details are confirmed before scheduling.</h2>
        </div>
        <ol className="process-list">
          {coverageNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ol>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need HVAC service near Splendora?</p>
        <h2>Call now, open Emergency HVAC, or book online and include your city.</h2>
        <div className="hero-actions">
          <a className="home-button home-button-primary" href={PHONE_HREF}>
            Call Now
          </a>
          <Link className="home-button home-button-secondary" href="/emergency-hvac">
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
