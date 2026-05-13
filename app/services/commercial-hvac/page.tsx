import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

const commercialNeeds = [
  {
    title: "Business comfort concerns",
    text: "Uneven temperatures, hot areas, or uncomfortable spaces can affect staff, customers, and operations.",
  },
  {
    title: "System downtime",
    text: "Commercial HVAC issues should be reviewed quickly when comfort problems interrupt business activity.",
  },
  {
    title: "Recurring service issues",
    text: "Repeated problems may point to a deeper equipment, airflow, controls, or maintenance concern.",
  },
  {
    title: "Tenant or customer complaints",
    text: "Comfort complaints from occupants can help identify where the system is struggling.",
  },
  {
    title: "Maintenance planning",
    text: "Commercial systems benefit from planned review before peak heating or cooling demand.",
  },
  {
    title: "Replacement planning",
    text: "Older or unreliable equipment may need a practical repair-versus-replacement conversation.",
  },
];

const checks = [
  "Business comfort issue and affected areas.",
  "System operation, airflow, and visible equipment behavior.",
  "Urgency level and whether operations are being affected.",
  "Practical next steps before repair, maintenance, or replacement work moves forward.",
];

const process = [
  "Tell us what type of business or property needs service.",
  "Share the comfort issue, affected areas, and urgency level.",
  "Schedule the request through phone or booking.",
  "Review findings and next steps before work moves forward.",
];

const detailsToShare = [
  "Business name and service address.",
  "Whether the issue affects staff, customers, tenants, or equipment areas.",
  "When the issue started and whether it is getting worse.",
  "Any access notes, roof access, gate codes, tenant contact, or scheduling restrictions.",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Commercial HVAC</p>
          <h1>Commercial HVAC support for Houston-area businesses.</h1>
          <p className="hero-text">
            If your business, office, tenant space, or commercial property is
            dealing with heating, cooling, airflow, or comfort concerns, request
            service and share what is happening with the system.
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
          <p className="eyebrow">Commercial needs</p>
          <h2>When commercial HVAC service may be needed.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {commercialNeeds.map((need) => (
            <div className="service-card" key={need.title}>
              <span>{need.title}</span>
              <p>{need.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">What Kingo reviews</p>
          <h2>Commercial service starts with the business impact.</h2>
        </div>
        <ol className="process-list">
          {checks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ol>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Service process</p>
          <h2>A clear path from commercial concern to next step.</h2>
        </div>
        <ol className="process-list">
          {process.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">When to call</p>
          <h2>Do not wait when HVAC problems affect business operations.</h2>
          <p>
            Commercial comfort problems can affect customers, employees, tenants,
            and daily operations. Calling early helps clarify urgency and the
            right next step.
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Good details to share</p>
          <h2>Tell us how the HVAC issue affects the property.</h2>
          <p>{detailsToShare.join(" ")}</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need commercial HVAC support?</p>
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