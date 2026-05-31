import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const emergencyExamples = [
  {
    title: "AC not cooling in extreme heat",
    text: "A cooling system going down during heavy heat is one of the clearest reasons to start emergency HVAC intake.",
  },
  {
    title: "No heat during cold weather",
    text: "Heating loss becomes more serious when indoor comfort, sleep, or occupant safety is being affected.",
  },
  {
    title: "Vulnerable occupants affected",
    text: "Young children, elderly occupants, medical needs, or heat-sensitive situations raise the priority level.",
  },
  {
    title: "Water around equipment",
    text: "Moisture, drain issues, or water near HVAC equipment should be reviewed quickly before the situation spreads.",
  },
  {
    title: "Burning smell or electrical concern",
    text: "Burning smells, repeated breaker issues, or unsafe equipment behavior should not be ignored.",
  },
  {
    title: "Commercial interruption",
    text: "Business spaces, tenant areas, and commercial environments may need faster review when HVAC failure affects operations.",
  },
];

const intakeRules = [
  "Emergency intake is available 24/7.",
  "The request should include the real system problem, not just general concern.",
  "The intake flow is meant to collect enough detail to identify serious cases quickly.",
  "Submitting full information helps separate urgent HVAC situations from routine service requests.",
];

const detailsToSubmit = [
  "Service address and city",
  "Best callback number",
  "What the system is doing right now",
  "Whether the issue is no-cool, no-heat, leaking, electrical, or comfort-related",
  "Whether children, elderly occupants, or medical needs are involved",
  "Any gate, building, access, or commercial details that matter",
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

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Emergency HVAC</p>
          <h1>24/7 emergency HVAC intake for urgent heating and cooling issues.</h1>
          <p className="hero-text">
            Emergency HVAC intake is available 24/7 for serious residential and
            commercial heating and cooling situations across the Houston area.
            The intake flow is designed to collect real details first so urgent
            cases can be reviewed with better focus.
          </p>
          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call (832) 517-1464
            </a>
            <a className="home-button home-button-secondary" href="https://book.servicem8.com/request_service_booking?strVendorUUID=8e24b5d7-d6e5-46c8-b45e-a3d24f3cd24b#68c2fdba-5306-432d-bb7e-24417b5dc12b">
              Submit Emergency Intake
            </a>
          </div>
          <p className="hero-text">
            Emergency and after-hours service is available. Depending on time,
            distance, and technician availability, an additional emergency
            dispatch fee may apply. Any additional charges are discussed and
            approved before service is scheduled. For non-emergency appointments
            during normal business hours, standard diagnostic rates apply.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Emergency examples</p>
          <h2>What may count as an urgent HVAC situation?</h2>
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
          <p className="eyebrow">How emergency intake works</p>
          <h2>Serious cases should submit complete information.</h2>
        </div>
        <ol className="process-list">
          {intakeRules.map((rule) => (
            <li key={rule}>{rule}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Submit these details</p>
          <h2>Full information helps identify serious cases faster.</h2>
          <p>{detailsToSubmit.join(", ")}.</p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Emergency area coverage</p>
          <h2>Emergency HVAC intake across Greater Houston.</h2>
          <p>{serviceAreas.join(", ")}.</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need emergency HVAC support now?</p>
        <h2>Call now or submit the emergency intake request online.</h2>
        <div className="hero-actions">
          <a className="home-button home-button-primary" href={PHONE_HREF}>
            Call (832) 517-1464
          </a>
          <a className="home-button home-button-secondary" href="https://book.servicem8.com/request_service_booking?strVendorUUID=8e24b5d7-d6e5-46c8-b45e-a3d24f3cd24b#68c2fdba-5306-432d-bb7e-24417b5dc12b">
            Submit Emergency Intake
          </a>
        </div>
      </section>
    </div>
  );
}
