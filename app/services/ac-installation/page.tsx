import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

const installationSignals = [
  {
    title: "Repeated cooling problems",
    text: "Repair visits or recurring comfort issues may point toward replacement planning.",
  },
  {
    title: "Uneven comfort",
    text: "Rooms that never cool evenly can be a sign the system fit should be reviewed.",
  },
  {
    title: "Aging equipment",
    text: "Older equipment may need a practical repair-versus-replacement conversation.",
  },
  {
    title: "Major component concerns",
    text: "Some repair findings make it worth comparing replacement as a next step.",
  },
  {
    title: "Home changes",
    text: "Renovations, additions, or usage changes can affect cooling needs.",
  },
  {
    title: "Comfort planning",
    text: "Installation can be part of a broader plan for reliable Houston-area cooling.",
  },
];

const replacementReview = [
  "Current system behavior and recent repair history.",
  "Comfort concerns by room, floor, or area of the property.",
  "Equipment location, access, and visible installation considerations.",
  "Home comfort goals before recommending the next planning step.",
];

const planningProcess = [
  "Share what is not working about the current cooling system.",
  "Request an installation planning conversation through phone or booking.",
  "Review replacement options and next steps before work moves forward.",
];

const detailsToShare = [
  "How long the current AC has been struggling.",
  "Which rooms are hardest to cool.",
  "Any recent repair findings or maintenance concerns.",
  "Whether the home layout or usage has changed.",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">AC Installation</p>
          <h1>Cooling system installation planning for Houston-area homes.</h1>
          <p className="hero-text">
            When repair is no longer the right path, AC installation starts with
            understanding the comfort issue, the space, and what the next system
            needs to solve.
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
          <p className="eyebrow">When installation makes sense</p>
          <h2>Replacement planning starts with the pattern of problems.</h2>
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
          <h2>Replacement should fit the home and the comfort goal.</h2>
        </div>
        <ol className="process-list">
          {replacementReview.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Installation planning process</p>
          <h2>A clear path before choosing the next system.</h2>
        </div>
        <ol className="process-list">
          {planningProcess.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Good details to share</p>
          <h2>The best next step starts with context.</h2>
          <p>
            Details about comfort issues, previous repairs, and home layout help
            frame the installation conversation.
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Helpful starting points</p>
          <h2>Tell us what the current system is not solving.</h2>
          <p>{detailsToShare.join(" ")}</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Planning AC installation?</p>
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
