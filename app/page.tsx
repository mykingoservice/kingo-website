import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "./cta-links";

const coreServices = [
  {
    href: "/emergency-hvac",
    title: "Emergency HVAC",
    text: "Emergency and after-hours HVAC intake when cooling, heating, or comfort risk needs faster attention.",
  },
  {
    href: "/services/ac-repair",
    title: "AC Repair",
    text: "Troubleshooting and repair when cooling drops, airflow weakens, or the system stops keeping up.",
  },
  {
    href: "/services/heating-repair",
    title: "Heating Repair",
    text: "Heating diagnostics and repair when cold weather exposes system problems or weak performance.",
  },
  {
    href: "/services/hvac-maintenance",
    title: "HVAC Maintenance",
    text: "Seasonal maintenance to help reduce breakdowns, catch wear early, and keep comfort more consistent.",
  },
  {
    href: "/services/ac-installation",
    title: "AC Installation",
    text: "Replacement and installation planning for homes and light commercial properties that need a stronger long-term solution.",
  },
  {
    href: "/services/commercial-hvac",
    title: "Commercial HVAC",
    text: "Light commercial HVAC support for local business environments that need reliable heating and cooling service.",
  },
];

const priorityCities = [
  { href: "/service-area/splendora", label: "Splendora" },
  { href: "/service-area/new-caney", label: "New Caney" },
  { href: "/service-area/porter", label: "Porter" },
  { href: "/service-area/cleveland", label: "Cleveland" },
  { href: "/service-area/humble", label: "Humble" },
  { href: "/service-area/conroe", label: "Conroe" },
  { href: "/service-area/montgomery", label: "Montgomery" },
  { href: "/service-area/the-woodlands", label: "The Woodlands" },
  { href: "/service-area/spring", label: "Spring" },
];

const trustPoints = [
  "Owner-operated HVAC service",
  "Emergency and after-hours intake available",
  "Residential and light commercial support",
  "Clear communication before dispatch",
  "Real job proof and review-building system",
  "Financing options for larger projects",
];

const processSteps = [
  "Tell us what the HVAC system is doing right now.",
  "We confirm the location, system issue, urgency, and best next step.",
  "Any emergency or after-hours dispatch charges are explained before the appointment is confirmed.",
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Splendora-based emergency HVAC service</p>
          <h1>Emergency HVAC, AC repair, and heating service across Northeast Greater Houston.</h1>
          <p className="hero-text">
            Kingo Services Heating and Cooling helps homeowners and local
            businesses with emergency HVAC intake, AC repair, heating repair,
            maintenance, and replacement planning from the Splendora operating
            hub into nearby Northeast Greater Houston communities.
          </p>
          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call (832) 517-1464
            </a>
            <Link className="home-button home-button-secondary" href="/emergency-hvac">
              Emergency HVAC
            </Link>
            <a className="home-button home-button-secondary" href={BOOKING_URL}>
              Book Online
            </a>
          </div>
          <p className="hero-text" style={{ marginTop: "0.75rem" }}>
            Emergency and after-hours availability depends on location, schedule,
            and current call volume. Any emergency or after-hours dispatch charges
            are explained before the appointment is confirmed.
          </p>
        </div>

        <div className="hero-panel" aria-label="Why Kingo">
          <div>
            <span>Phone</span>
            <strong>(832) 517-1464</strong>
          </div>
          <div>
            <span>Hub</span>
            <strong>Operating from Splendora, TX</strong>
          </div>
          <div>
            <span>Emergency</span>
            <strong>After-hours HVAC intake available</strong>
          </div>
        </div>
      </section>

      <section className="home-section comfort-section">
        <div>
          <p className="eyebrow">Emergency HVAC problems</p>
          <h2>AC stopped cooling, no heat, weak airflow, system down, or comfort risk rising?</h2>
        </div>
        <p>
          If the system is not cooling, not heating, leaking, short cycling,
          struggling with airflow, or creating comfort problems across the
          property, that is enough reason to call or start emergency HVAC intake.
        </p>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Core services</p>
          <h2>Start with the service path that matches the issue.</h2>
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

      <section className="home-section area-section">
        <div className="section-heading">
          <p className="eyebrow">Service area</p>
          <h2>HVAC service from Splendora into the Northeast Greater Houston corridor.</h2>
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

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Why customers call Kingo</p>
          <h2>Clear service paths, owner-operator accountability, and no fake urgency.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {trustPoints.map((point) => (
            <div className="service-card" key={point}>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section process-section">
        <div className="section-heading">
          <p className="eyebrow">How it works</p>
          <h2>A straightforward path from HVAC issue to next step.</h2>
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
          <h2>Emergency and after-hours HVAC intake for serious heating and cooling issues.</h2>
          <p>
            Start emergency intake when the system is down, comfort risk is
            rising, or the situation needs faster review and prioritization.
          </p>
          <Link href="/emergency-hvac">Open Emergency HVAC</Link>
        </div>
        <div className="split-card">
          <p className="eyebrow">Proof-based HVAC work</p>
          <h2>Real jobs, reviews, photos, and service-area proof build the authority.</h2>
          <p>
            Kingo is building local SEO through real HVAC work, Job Post Pins™,
            reviews, videos, and service-area pages instead of generic city-page
            fluff.
          </p>
          <Link href="/job-post-pins">View Recent Work</Link>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Ready to start?</p>
        <h2>Call now, open Emergency HVAC, or book online and tell us what your system is doing.</h2>
        <div className="hero-actions">
          <a className="home-button home-button-primary" href={PHONE_HREF}>
            Call (832) 517-1464
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
