import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const contactOptions = [
  {
    title: "Call Kingo Services",
    text: "Use the main phone line for HVAC service questions, urgent comfort concerns, and scheduling direction.",
  },
  {
    title: "Request service online",
    text: "Use the booking flow to submit service details when you want the request documented clearly.",
  },
  {
    title: "Emergency HVAC intake",
    text: "Emergency requests are reviewed and prioritized based on system status, occupant risk, property impact, and urgency.",
  },
];

const detailsToShare = [
  "Your name and callback number.",
  "Service address or city.",
  "Whether the property is residential or commercial.",
  "What the heating or cooling system is doing.",
  "Whether the issue is urgent, after-hours, or affecting vulnerable occupants.",
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

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Contact Kingo Services</p>
          <h1>Contact Kingo Services Heating and Cooling.</h1>
          <p className="hero-text">
            For HVAC repair, installation, maintenance, commercial HVAC, or
            emergency intake, call Kingo Services or submit a service request
            through the booking flow.
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
          <p className="eyebrow">Contact options</p>
          <h2>Choose the best way to reach Kingo.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {contactOptions.map((option) => (
            <div className="service-card" key={option.title}>
              <span>{option.title}</span>
              <p>{option.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">What to include</p>
          <h2>Clear details help move the request faster.</h2>
        </div>
        <ol className="process-list">
          {detailsToShare.map((detail) => (
            <li key={detail}>{detail}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Service area</p>
          <h2>Serving the Houston metro and nearby areas.</h2>
          <p>{serviceAreas.join(", ")}.</p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Service focus</p>
          <h2>Heating, cooling, maintenance, and commercial HVAC.</h2>
          <p>
            Kingo Services handles HVAC repair, AC installation, heating repair,
            heating installation, HVAC maintenance, commercial HVAC, and
            emergency HVAC intake.
          </p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Ready to contact Kingo?</p>
        <h2>Call now or request service through the booking flow.</h2>
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