import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const emergencyExamples = [
  {
    title: "AC not cooling in extreme heat",
    text: "A cooling system that stops working during Houston heat may need emergency intake review.",
  },
  {
    title: "No heat during cold weather",
    text: "Heating loss can become urgent when indoor comfort or occupant safety is affected.",
  },
  {
    title: "Vulnerable occupants affected",
    text: "Elderly occupants, young children, medical needs, or heat-sensitive situations increase priority.",
  },
  {
    title: "Water around equipment",
    text: "Moisture, drain issues, or water near HVAC equipment should be reviewed promptly.",
  },
  {
    title: "Burning smells or electrical concerns",
    text: "Unusual electrical symptoms, burning smells, or unsafe operation should not be ignored.",
  },
  {
    title: "Commercial comfort interruption",
    text: "Business spaces, tenant areas, or equipment-sensitive environments may need priority review.",
  },
];

const priorityFactors = [
  "System status and whether heating or cooling is completely offline.",
  "Occupant risk, including elderly, medical, young children, or vulnerable persons.",
  "Property impact, including water concerns, commercial interruption, or safety concerns.",
  "Access, location, call details, and how urgent the situation is becoming.",
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

const trustPoints = [
  "Residential and commercial HVAC support.",
  "Repair, maintenance, and replacement experience.",
  "Emergency-focused intake and prioritization process.",
  "Clear next steps before work moves forward.",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Emergency HVAC</p>
          <h1>24/7 Emergency HVAC Intake</h1>
          <p className="hero-text">
            Emergency heating and cooling intake is available for urgent
            residential and commercial HVAC situations across the Houston area.
            Requests are reviewed and prioritized based on system status,
            occupant risk, property impact, and urgency.
          </p>
          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call Emergency Intake
            </a>
            <a className="home-button home-button-secondary" href={BOOKING_URL}>
              Request Emergency Service
            </a>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Emergency examples</p>
          <h2>What may count as an HVAC emergency?</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {emergencyExamples.map((item) => (
            <div className="service-card" key={item.title}>
              <span>{item.title}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">How priority works</p>
          <h2>Emergency requests are filtered through intake before dispatch.</h2>
        </div>
        <p className="section-intro">
          The emergency intake process is designed to separate serious HVAC
          situations from routine service requests. The AI intake flow helps
          collect the right details so urgent cases can be identified, escalated,
          and handled with better focus.
        </p>
        <ol className="process-list">
          {priorityFactors.map((factor) => (
            <li key={factor}>{factor}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Service area</p>
          <h2>Emergency HVAC intake for the Houston area.</h2>
          <p>{serviceAreas.join(", ")}.</p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Trust factors</p>
          <h2>Urgency without fake guarantees.</h2>
          <p>{trustPoints.join(" ")}</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need emergency HVAC support?</p>
        <h2>Call now or submit an emergency request through the booking flow.</h2>
        <div className="hero-actions">
          <a className="home-button home-button-primary" href={PHONE_HREF}>
            Call Now
          </a>
          <a className="home-button home-button-secondary" href={BOOKING_URL}>
            Submit Emergency Request
          </a>
        </div>
      </section>
    </div>
  );
}