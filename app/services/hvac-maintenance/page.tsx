import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

const maintenanceReasons = [
  {
    title: "Seasonal system check",
    text: "Maintenance helps review heating and cooling equipment before heavier seasonal use.",
  },
  {
    title: "Airflow concerns",
    text: "Filters, airflow, and visible restrictions can affect comfort and system performance.",
  },
  {
    title: "Comfort consistency",
    text: "Small comfort changes can be reviewed before they become larger service issues.",
  },
  {
    title: "Equipment protection",
    text: "Routine service helps keep visible operating concerns from being ignored.",
  },
  {
    title: "Drain and moisture checks",
    text: "Cooling systems can create water and drain concerns that should be reviewed.",
  },
  {
    title: "Heating readiness",
    text: "Maintenance can help prepare the heating side before colder weather arrives.",
  },
];

const checks = [
  "Basic heating and cooling operation.",
  "Filter, airflow, and visible comfort restrictions.",
  "Indoor and outdoor equipment behavior.",
  "Drain, electrical, safety, and general system condition observations.",
];

const maintenanceProcess = [
  "Tell us what system you want checked and what concerns you have noticed.",
  "Schedule the maintenance request through the phone or booking flow.",
  "Review findings and practical next steps before additional work moves forward.",
];

const detailsToShare = [
  "When the system was last serviced.",
  "Whether the issue is cooling, heating, airflow, or general maintenance.",
  "Any rooms that feel uncomfortable.",
  "Any recent noises, water concerns, odors, or thermostat issues.",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">HVAC Maintenance</p>
          <h1>Seasonal HVAC maintenance for Splendora and Northeast Greater Houston comfort systems.</h1>
          <p className="hero-text">
            If your heating and cooling system needs a seasonal check, airflow
            review, or general comfort maintenance, request service and share
            what you want reviewed before heavier system use.
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
          <p className="eyebrow">Maintenance reasons</p>
          <h2>Reasons to schedule HVAC maintenance.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {maintenanceReasons.map((reason) => (
            <div className="service-card" key={reason.title}>
              <span>{reason.title}</span>
              <p>{reason.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">What Kingo checks</p>
          <h2>Maintenance starts with visible system condition.</h2>
        </div>
        <ol className="process-list">
          {checks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ol>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Maintenance process</p>
          <h2>A clear path from system check to next step.</h2>
        </div>
        <ol className="process-list">
          {maintenanceProcess.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">When to schedule</p>
          <h2>Do not wait until small comfort concerns become urgent.</h2>
          <p>
            Maintenance is useful when the system is still running but you want
            the equipment reviewed before heavier cooling or heating demand.
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Good details to share</p>
          <h2>Tell us what you want checked.</h2>
          <p>{detailsToShare.join(" ")}</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need HVAC maintenance?</p>
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