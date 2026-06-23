import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const faqs = [
  {
    question: "Do you offer complimentary follow-up visits after a repair?",
    answer:
      "Yes, in some cases. When Kingo Services Heating and Cooling completes certain repairs or installations, we may offer a complimentary follow-up visit to verify system performance. Complimentary follow-up visits are based on scheduling availability and are usually performed when a technician is already working nearby. They are not guaranteed for every service call. If your system has a new issue, is leaking, dripping, not cooling, not heating, or needs troubleshooting, that would be scheduled as a diagnostic service call.",
  },
  {
    question: "What is the difference between a diagnostic service call and a maintenance inspection?",
    answer:
      "A diagnostic service call is for a system that has a problem and needs troubleshooting. A maintenance inspection is for a system that is currently working, but the customer wants it checked for performance, safety, and potential future issues.",
  },
  {
    question: "How much is a diagnostic service call?",
    answer:
      "Our diagnostic service call is $129. It includes system troubleshooting, evaluation, and repair recommendations. Any repair pricing is discussed and approved before work begins.",
  },
  {
    question: "How much is a maintenance inspection?",
    answer:
      "Our maintenance inspection is $129. It is designed for systems that are operating normally but need a professional checkup before hotter or colder weather.",
  },
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
];

const quickTopics = [
  "Diagnostic service calls",
  "Maintenance inspections",
  "Follow-up visits",
  "AC repair",
  "AC installation",
  "Heating repair",
  "Heating installation",
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
            Common questions about Kingo Services Heating and Cooling, service
            calls, maintenance inspections, complimentary follow-up visits,
            emergency HVAC intake, and service areas.
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
          <p className="eyebrow">Service calls and follow-ups</p>
          <h2>How scheduling works.</h2>
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
          <p className="eyebrow">Not sure what to schedule?</p>
          <h2>Use the condition of the system to decide.</h2>
        </div>
        <ol className="process-list">
          <li>If the system has a problem, schedule a diagnostic service call.</li>
          <li>If the system is working normally, schedule a maintenance inspection.</li>
          <li>
            If Kingo recently completed work and you have a related concern,
            contact us so we can review the best next step.
          </li>
          <li>
            Complimentary follow-up visits are based on availability and are not
            guaranteed for every appointment.
          </li>
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
