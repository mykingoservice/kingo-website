import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const cities = [
  { href: "/service-area/houston", label: "Houston" },
  { href: "/service-area/splendora", label: "Splendora" },
  { href: "/service-area/montgomery", label: "Montgomery" },
  { href: "/service-area/conroe", label: "Conroe" },
  { href: "/service-area/the-woodlands", label: "The Woodlands" },
  { href: "/service-area/spring", label: "Spring" },
  { href: "/service-area/katy", label: "Katy" },
  { href: "/service-area/sugar-land", label: "Sugar Land" },
  { href: "/service-area/cypress", label: "Cypress" },
  { href: "/service-area/humble", label: "Humble" },
];

const coverageNotes = [
  "Share your city or nearby cross streets when requesting service.",
  "Scheduling and availability can be confirmed during the request process.",
  "Service recommendations depend on the system, property, and comfort issue.",
];

export default function Page() {
  return (
    <div className="service-area-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Greater Houston service area</p>
          <h1>HVAC service coverage across Houston and nearby communities.</h1>
          <p className="hero-text">
            Kingo Services Heating and Cooling supports heating, cooling, and
            indoor comfort requests across the Greater Houston area. Use this
            page to find your city and continue to the local service-area page.
          </p>
          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call Now
            </a>
            <a className="home-button home-button-secondary" href={BOOKING_URL}>
              Request Service
            </a>
          </div>
        </div>
      </section>

      <section className="home-section area-overview-section">
        <div className="section-heading">
          <p className="eyebrow">Phase 1 cities</p>
          <h2>Choose your service-area page.</h2>
          <p>
            These city pages are the current Phase 1 coverage set. If your
            address is nearby, request service so coverage can be confirmed.
          </p>
        </div>
        <div className="city-card-grid">
          {cities.map((city) => (
            <Link href={city.href} key={city.href}>
              {city.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Coverage notes</p>
          <h2>Service details are confirmed when scheduling.</h2>
        </div>
        <ol className="process-list">
          {coverageNotes.map((note) => (
            <li key={note}>{note}</li>
          ))}
        </ol>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Not sure whether your address is covered?</p>
        <h2>Request service and include your city so the next step is clear.</h2>
        <div className="hero-actions">
          <a className="home-button home-button-primary" href={PHONE_HREF}>
            Call Now
          </a>
          <a className="home-button home-button-secondary" href={BOOKING_URL}>
            Request Service
          </a>
        </div>
      </section>
    </div>
  );
}
