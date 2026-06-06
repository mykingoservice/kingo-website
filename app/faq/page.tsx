import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const faqs = [
  {
    question: "Does Kingo Services handle emergency HVAC calls?",
    answer:
      "Yes. Emergency HVAC requests are handled through intake and prioritized by system status, occupant risk, property impact, and urgency.",
  },
  {
    question: "Do you service both residential and commercial HVAC?",
    answer:
      "Yes. Kingo Services supports residential heating and cooling needs as well as commercial HVAC concerns for local business environments.",
  },
  {
    question: "What information should I share when requesting service?",
    answer:
      "Share your name, callback number, service city or address, property type, system issue, urgency, and whether anyone vulnerable is affected.",
  },
  {
    question: "Can I request service online?",
    answer:
      "Yes. Use the booking flow to submit the service request with clear details so the issue can be reviewed and routed properly.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "Kingo Services operates from Splendora and serves nearby Northeast Greater Houston communities including New Caney, Porter, Cleveland, Humble, Conroe, Montgomery, The Woodlands, and Spring.",
  },
  {
    question: "Do you install new AC systems?",
    answer:
      "Yes. AC installation and replacement planning are part of the service focus when repair is no longer the right long-term move.",
  },
  {
    question: "Do you repair heating systems?",
    answer:
      "Yes. Heating repair and heating installation support are included for Splendora and nearby Northeast Greater Houston comfort needs.",
  },
];

const quickTopics = [
  "AC repair",
  "AC installation",
  "Heating repair",
  "Heating installation",
  "HVAC maintenance",
  "Commercial HVAC",
  "Emergency HVAC intake",
];

const requestDetails = [
  "System issue",
  "Service address or city",
  "Residential or commercial property",
  "Urgency level",
  "Best callback number",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">FAQ</p>
          <h1>Frequently asked HVAC questions.</h1>
          <p className="hero-text">
            Common questions about Kingo Services Heating and Cooling, emergency
            HVAC intake, service areas, and what details to share before
            scheduling.
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
          <p className="eyebrow">Answers</p>
          <h2>What customers usually need to know first.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {faqs.map((faq) => (
            <div className="service-card" key={faq.question}>
              <span>{faq.question}</span>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Service topics</p>
          <h2>Core HVAC support.</h2>
          <p>{quickTopics.join(", ")}.</p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Before you request service</p>
          <h2>Have the useful details ready.</h2>
          <p>{requestDetails.join(", ")}.</p>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">How to move faster</p>
          <h2>Clear requests are easier to review.</h2>
        </div>
        <ol className="process-list">
          <li>Describe what the system is doing.</li>
          <li>Share whether the system is completely down or partly working.</li>
          <li>Include whether the request is urgent or after-hours.</li>
          <li>Use the booking flow when you want the request documented clearly.</li>
        </ol>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Still have a question?</p>
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