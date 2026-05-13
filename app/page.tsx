import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "./cta-links";

const coreServices = [
  {
    href: "/services/ac-repair",
    title: "AC Repair",
    text: "Fast troubleshooting and repair support when cooling drops, airflow weakens, or the system stops keeping up.",
  },
  {
    href: "/services/ac-installation",
    title: "AC Installation",
    text: "Replacement and installation planning for homes and light commercial properties that need a stronger long-term solution.",
  },
  {
    href: "/services/hvac-maintenance",
    title: "HVAC Maintenance",
    text: "Seasonal maintenance to help reduce breakdowns, catch wear early, and keep comfort more consistent.",
  },
  {
    href: "/services/heating-repair",
    title: "Heating Repair",
    text: "Heating diagnostics and repair when cold weather exposes system problems or weak performance.",
  },
  {
    href: "/services/commercial-hvac",
    title: "Commercial HVAC",
    text: "Commercial HVAC support for local business environments that need reliable heating and cooling service.",
  },
];

const priorityCities = [
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

const trustPoints = [
  "Residential and commercial HVAC service",
  "Emergency HVAC intake available 24/7",
  "Financing options available for larger projects",
  "Clear next steps before work moves forward",
];

const processSteps = [
  "Tell us what the system is doing right now.",
  "We review the issue and move the request into the right service path.",
  "You review the next step before work moves forward.",
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Houston-area heating and cooling</p>
          <h1>Houston AC repair, heating, installation, and emergency HVAC intake.</h1>
          <p className="hero-text">
            Kingo Services Heating and Cooling supports homeowners and local
            businesses across Greater Houston with repair, installation,
            maintenance, emergency HVAC intake, and larger comfort planning.
          </p>
          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call (832) 517-1464
            </a>
            <a className="home-button home-button-secondary" href={BOOKING_URL}>
              Book Online
            </a>
          </div>
          <p className="hero-text" style={{ marginTop: "0.75rem" }}>
            Emergency intake available 24/7. Financing options available for
            qualifying larger repair and replacement projects.
          </p>
        </div>

        <div className="hero-panel" aria-label="Why Kingo">
          <div>
            <span>Phone</span>
            <strong>(832) 517-1464</strong>
          </div>
          <div>
            <span>Emergency</span>
            <strong>24/7 emergency HVAC intake</strong>
          </div>
          <div>
            <span>Financing</span>
            <strong>Options available for larger projects</strong>
          </div>
        </div>
      </section>

      <section className="home-section comfort-section">
        <div>
          <p className="eyebrow">Common HVAC problems</p>
          <h2>Not cooling, weak airflow, odd noises, or uneven comfort?</h2>
        </div>
        <p>
          If the system is not cooling, not heating, leaking, short cycling,
          struggling with airflow, or creating comfort problems across the
          property, that is enough reason to start service.
        </p>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Core services</p>
          <h2>Start with the service that matches the issue.</h2>
        </div>
        <div className="service-grid">
          {coreServices.map((service) => (
            <Link className="service-card" href={service.href} key={service.href}>
              <span>{service.title}</span>
              <p>{service.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Why customers start here</p>
          <h2>Clear service paths without extra confusion.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {trustPoints.map((point) => (
            <div className="service-card" key={point}>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section area-section">
        <div className="section-heading">
          <p className="eyebrow">Service area</p>
          <h2>HVAC help across Houston and nearby communities.</h2>
          <Link href="/service-area">View full service area</Link>
        </div>
        <div className="city-list" aria-label="Priority service cities">
          {priorityCities.map((city) => (
            <Link href={city.href} key={city.href}>
              {city.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section process-section">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>A straightforward path from issue to next step.</h2>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Emergency HVAC</p>
          <h2>24/7 emergency HVAC intake for serious heating and cooling issues.</h2>
          <p>
            Start emergency intake when the system is down, comfort risk is
            rising, or the situation needs faster review and prioritization.
          </p>
          <Link href="/emergency-hvac">Open Emergency HVAC</Link>
        </div>
        <div className="split-card">
          <p className="eyebrow">Financing</p>
          <h2>Financing options for bigger repair and replacement decisions.</h2>
          <p>
            When the project is larger than a quick repair, the financing page
            gives customers a clearer path to continue.
          </p>
          <Link href="/financing">View Financing</Link>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Ready to start?</p>
        <h2>Call now or book online and tell us what your HVAC system is doing.</h2>
        <div className="hero-actions">
          <a className="home-button home-button-primary" href={PHONE_HREF}>
            Call (832) 517-1464
          </a>
          <a className="home-button home-button-secondary" href={BOOKING_URL}>
            Book Online
          </a>
        </div>
      </section>
    </div>
  );
}
