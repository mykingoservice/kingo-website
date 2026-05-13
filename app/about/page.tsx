import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const companyPrinciples = [
  {
    title: "Clear communication",
    text: "Customers should understand what is happening, what was found, and what the next step is.",
  },
  {
    title: "Practical HVAC service",
    text: "The goal is to solve the comfort problem with repair, maintenance, replacement planning, or honest direction.",
  },
  {
    title: "Professional intake",
    text: "Service requests are handled through a structured intake flow so important details are not missed.",
  },
  {
    title: "Residential and commercial support",
    text: "Kingo Services supports homeowners, property managers, tenants, and business comfort needs.",
  },
];

const serviceFocus = [
  "AC repair",
  "AC installation",
  "Heating repair",
  "Heating installation",
  "HVAC maintenance",
  "Commercial HVAC",
  "Emergency HVAC intake",
];

const serviceAreas = [
  "Houston",
  "Humble",
  "Spring",
  "The Woodlands",
  "Katy",
  "Sugar Land",
  "Cypress",
  "Conroe",
  "Montgomery",
  "Splendora",
];

const operatingStandards = [
  "Listen to the comfort issue before jumping to conclusions.",
  "Separate urgent problems from routine service requests.",
  "Use clear service notes and practical next steps.",
  "Avoid fake guarantees and pressure-based selling.",
  "Keep the customer focused on the real system problem.",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">About Kingo Services</p>
          <h1>Houston-area heating and cooling service built on clarity.</h1>
          <p className="hero-text">
            Kingo Services Heating and Cooling provides residential and
            commercial HVAC support across the Houston metro area. The company
            focuses on clear communication, structured intake, practical
            service, and honest next steps.
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

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Company principles</p>
          <h2>How Kingo approaches HVAC service.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {companyPrinciples.map((principle) => (
            <div className="service-card" key={principle.title}>
              <span>{principle.title}</span>
              <p>{principle.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Service focus</p>
          <h2>Heating, cooling, maintenance, and commercial HVAC.</h2>
          <p>{serviceFocus.join(", ")}.</p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Service area</p>
          <h2>Serving Houston and nearby communities.</h2>
          <p>{serviceAreas.join(", ")}.</p>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Operating standards</p>
          <h2>Simple standards keep service controlled.</h2>
        </div>
        <ol className="process-list">
          {operatingStandards.map((standard) => (
            <li key={standard}>{standard}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Why structured intake matters</p>
          <h2>Better details lead to better service decisions.</h2>
          <p>
            HVAC calls can become confusing when the issue is described too
            loosely. Kingo uses a structured intake approach to capture the
            system concern, urgency, property type, location, and next-step
            need before work moves forward.
          </p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need HVAC support?</p>
        <h2>Call Kingo Services or request service through the booking flow.</h2>
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