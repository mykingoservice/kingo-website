import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const financingPoints = [
  {
    title: "System replacement planning",
    text: "Financing can help when a repair is no longer the strongest long-term answer and replacement becomes the better move.",
  },
  {
    title: "Larger repair decisions",
    text: "Some customers want a payment path for major repairs, equipment upgrades, or comfort work that should not be delayed.",
  },
  {
    title: "Comfort urgency",
    text: "When cooling or heating needs to be restored quickly, financing can help customers review options faster.",
  },
  {
    title: "Clear scope first",
    text: "The equipment, property needs, installation scope, and direction should be reviewed before any financing path is discussed.",
  },
];

const reviewSteps = [
  "Review the HVAC issue and equipment condition first.",
  "Confirm whether repair or replacement makes more sense.",
  "Discuss the scope, equipment direction, and next service step.",
  "Review financing or payment options if the project is a fit.",
];

const goodFit = [
  "Older equipment with repeated repair history",
  "AC or heating replacement planning",
  "Larger repair or install decisions",
  "Projects where full upfront payment is not ideal",
  "Customers wanting a clearer payment path before moving forward",
];

const detailsToHave = [
  "Service address or city",
  "Main issue with the current system",
  "System age if known",
  "Property type",
  "Best callback number",
  "Any recent repair history that matters",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Financing</p>
          <h1>HVAC financing options for larger repair and replacement decisions.</h1>
          <p className="hero-text">
            Kingo Services Heating and Cooling can review financing direction for
            larger HVAC projects. Hearth can be discussed as one available option,
            and additional financing options may be added over time.
          </p>
          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call (832) 517-1464
            </a>
            <a className="home-button home-button-secondary" href={BOOKING_URL}>
              Book Online
            </a>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">When financing helps</p>
          <h2>Useful when the HVAC decision is bigger than a quick fix.</h2>
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
          <p className="eyebrow">How it starts</p>
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
          <h2>Common situations where financing may help.</h2>
          <p>{goodFit.join(". ")}.</p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Have this ready</p>
          <h2>Useful details before the conversation starts.</h2>
          <p>{detailsToHave.join(", ")}.</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need financing direction?</p>
        <h2>Call Kingo Services or book online to review the project first.</h2>
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
