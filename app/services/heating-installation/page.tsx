import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

const installationSignals = [
  {
    title: "Heating problems keep returning",
    text: "Repeated heating issues may point toward replacement planning instead of another repair.",
  },
  {
    title: "Uneven comfort",
    text: "Rooms that never feel evenly heated may need a better system plan.",
  },
  {
    title: "Older equipment",
    text: "Older heating equipment may need review when comfort or reliability keeps declining.",
  },
  {
    title: "Major component concerns",
    text: "Some repair findings make replacement worth discussing before more money is spent.",
  },
  {
    title: "Home changes",
    text: "Renovations, additions, or layout changes can affect heating needs.",
  },
  {
    title: "Comfort planning",
    text: "Installation can be part of a larger comfort plan for the home.",
  },
];

const replacementReview = [
  "Current system behavior and recent repair history.",
  "Comfort concerns by room, floor, or area of the property.",
  "Equipment location, access, and visible installation considerations.",
  "Home comfort goals before recommending the next planning step.",
];

const planningProcess = [
  "Share what is not working about the current heating system.",
  "Request an installation planning conversation through phone or booking.",
  "Review replacement options and next steps before work moves forward.",
];

const detailsToShare = [
  "How long the current heating system has been struggling.",
  "Which rooms are hardest to heat.",
  "Any recent repair findings or maintenance concerns.",
  "Whether the home layout or usage has changed.",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Heating Installation</p>
          <h1>Heating installation planning for Houston-area homes.</h1>
          <p className="hero-text">
            If your heating system is unreliable, outdated, or no longer
            supporting the comfort of the home, request a heating installation
            planning conversation and share what is changing with the system.
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
          <p className="eyebrow">Installation signals</p>
          <h2>Signs heating installation may be worth discussing.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {installationSignals.map((signal) => (
            <div className="service-card" key={signal.title}>
              <span>{signal.title}</span>
              <p>{signal.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">What Kingo reviews</p>
          <h2>Replacement planning starts with the current system.</h2>
        </div>
        <ol className="process-list">
          {replacementReview.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Planning process</p>
          <h2>A clear path from heating concern to installation planning.</h2>
        </div>
        <ol className="process-list">
          {planningProcess.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Before replacement</p>
          <h2>Do not rush a heating installation decision without review.</h2>
          <p>
            A heating installation should be planned around the home, the
            current system, comfort concerns, and practical next steps. The goal
            is not pressure. The goal is a clearer replacement conversation.
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Good details to share</p>
          <h2>Tell us what is changing with the heating system.</h2>
          <p>{detailsToShare.join(" ")}</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need heating installation planning?</p>
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