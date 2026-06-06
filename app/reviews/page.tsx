import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../cta-links";

export const metadata: Metadata = {
  title: "Kingo HVAC Reviews and Job Proof",
  description:
    "Review Post Pin pages from Kingo Services connect real Google reviews to documented Splendora-corridor and Greater Houston HVAC job proof.",
};

const reviewPins = [
  {
    href: "/reviews/job-2020-elizabeth-md-carrier-condenser/",
    customer: "Elizabeth MD",
    job: "Job #2020 — Carrier condenser installation",
    text: "A Review Post Pin connecting a Google review to the documented Carrier condenser installation proof page.",
  },
];

const trustPoints = [
  {
    title: "Real service matters",
    text: "Reviews should reflect clear communication, practical HVAC work, and how the request was handled.",
  },
  {
    title: "Documented requests",
    text: "Service requests are easier to review when the issue, location, urgency, and system behavior are clearly captured.",
  },
  {
    title: "Focused HVAC support",
    text: "Kingo Services focuses on heating, cooling, maintenance, commercial HVAC, installation planning, and emergency intake.",
  },
  {
    title: "Better customers, better outcomes",
    text: "Clear intake helps serious customers move faster and helps avoid confusion before dispatch.",
  },
];

const reviewSignals = [
  "Clear communication",
  "Professional service",
  "System issue understood",
  "Arrival and next steps explained",
  "Repair or replacement options reviewed",
  "Customer concern handled seriously",
];

const requestReviewDetails = [
  "What service was requested",
  "What city or area the job was in",
  "Whether the issue was urgent",
  "What was explained clearly",
  "How the service experience felt",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Review Post Pins</p>
          <h1>Kingo Services reviews connected to documented HVAC job proof.</h1>
          <p className="hero-text">
            Review Post Pin pages connect customer review signals to real job
            proof pages, helping HVAC customers across the Splendora corridor and
            Greater Houston evaluate the work, service path, and connected proof before calling.
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
          <p className="eyebrow">Pinned reviews</p>
          <h2>Review pages with connected job proof.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {reviewPins.map((pin) => (
            <Link className="service-card" href={pin.href} key={pin.href}>
              <span>{pin.customer}</span>
              <p>{pin.job}</p>
              <p>{pin.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Trust</p>
          <h2>What reviews should help prove.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {trustPoints.map((point) => (
            <div className="service-card" key={point.title}>
              <span>{point.title}</span>
              <p>{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Review signals</p>
          <h2>What customers usually look for.</h2>
          <p>{reviewSignals.join(", ")}.</p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Helpful review details</p>
          <h2>Specific feedback is more useful.</h2>
          <p>{requestReviewDetails.join(", ")}.</p>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Before choosing service</p>
          <h2>Use reviews as one trust layer, not the only layer.</h2>
        </div>
        <ol className="process-list">
          <li>Look for clear HVAC service experience.</li>
          <li>Check whether communication and next steps were explained.</li>
          <li>Compare the service need to your current system issue.</li>
          <li>Use the booking flow when you want the request documented clearly.</li>
        </ol>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need HVAC support?</p>
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
