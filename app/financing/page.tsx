import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const financingPoints = [
  {
    title: "Replacement planning",
    text: "Financing can help when an HVAC system needs replacement but paying the full amount upfront is not the best move.",
  },
  {
    title: "Comfort urgency",
    text: "When the home or business needs cooling or heating restored, financing can help move the decision forward faster.",
  },
  {
    title: "Clear scope first",
    text: "The system, property, equipment needs, and installation details should be reviewed before financing is discussed.",
  },
  {
    title: "Practical options",
    text: "The goal is to help customers understand available payment paths without pressure or confusion.",
  },
];

const reviewSteps = [
  "Review the system issue and current equipment condition.",
  "Confirm whether repair or replacement is the better direction.",
  "Discuss the installation scope and estimated service path.",
  "Share next steps for financing or payment options when applicable.",
];

const goodFit = [
  "Older equipment with repeated repair needs",
  "Major AC or heating replacement planning",
  "Comfort problems that cannot wait",
  "Homeowners wanting a clearer payment path",
  "Commercial HVAC work that needs structured planning",
];

const detailsToHave = [
  "Service address or city",
  "System age if known",
  "Current issue",
  "Repair history",
  "Property type",
  "Best callback number",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Financing</p>
          <h1>HVAC financing support for bigger comfort decisions.</h1>
          <p className="hero-text">
            When repair is no longer the right long-term answer, financing can
            help make AC installation, heating installation, or larger HVAC work
            easier to plan.
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
          <p className="eyebrow">When financing helps</p>
          <h2>Useful when the system decision is bigger than a quick repair.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {financingPoints.map((point) => (
            <div className="service-card" key={point.title}>
              <span>{point.title}</span>
              <p>{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Review process</p>
          <h2>Start with the HVAC need before the payment path.</h2>
        </div>
        <ol className="process-list">
          {reviewSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Good fit</p>
          <h2>Financing may help with these situations.</h2>
          <p>{goodFit.join(" ")}.</p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Before asking</p>
          <h2>Have the useful details ready.</h2>
          <p>{detailsToHave.join(", ")}.</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need HVAC financing guidance?</p>
        <h2>Call Kingo Services or submit the request through the booking flow.</h2>
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