import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

const symptoms = [
  {
    title: "No heat or weak heat",
    text: "The system runs, but the home does not warm up the way it should.",
  },
  {
    title: "Uneven heating",
    text: "Some rooms feel warm while other areas stay cold or uncomfortable.",
  },
  {
    title: "Frequent cycling",
    text: "The heater turns on and off repeatedly instead of running steady cycles.",
  },
  {
    title: "Unusual smells or sounds",
    text: "New noises, burning smells, rattling, or changes in airflow should be checked.",
  },
  {
    title: "Thermostat concerns",
    text: "The temperature setting and actual comfort level do not seem to match.",
  },
  {
    title: "System safety concerns",
    text: "If heating equipment seems unsafe, unreliable, or inconsistent, request service.",
  },
];

const checks = [
  "Thermostat settings and basic heating operation.",
  "Airflow, filter condition, and visible comfort restrictions.",
  "Indoor equipment behavior during a heating call.",
  "Electrical, ignition, safety, and component symptoms that may affect performance.",
];

const repairProcess = [
  "Tell us what changed and when the heating issue started.",
  "Schedule the repair request through the phone or booking flow.",
  "Review findings and practical next steps before work moves forward.",
];

const whenToCall = [
  "The heater runs but the home stays cold.",
  "The system stops heating during cold weather.",
  "You notice unusual smells, sounds, or repeated cycling.",
  "Comfort problems return after changing the filter or thermostat settings.",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Heating Repair</p>
          <h1>Heating repair support for Houston-area comfort problems.</h1>
          <p className="hero-text">
            If your heating system is not keeping the home comfortable, cycling
            oddly, making new sounds, or showing signs of unreliable operation,
            request heating repair and share what you are noticing.
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
          <p className="eyebrow">Common symptoms</p>
          <h2>Signs your heating system may need attention.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {symptoms.map((symptom) => (
            <div className="service-card" key={symptom.title}>
              <span>{symptom.title}</span>
              <p>{symptom.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">What Kingo checks</p>
          <h2>Heating repair starts with system behavior and safety.</h2>
        </div>
        <ol className="process-list">
          {checks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ol>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Repair process</p>
          <h2>A clear path from heating concern to next step.</h2>
        </div>
        <ol className="process-list">
          {repairProcess.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">When to call</p>
          <h2>Do not wait on a heating issue that is getting worse.</h2>
          <p>
            Heating problems can become more uncomfortable and more urgent when
            temperatures drop. Calling early helps clarify whether the issue
            needs repair, maintenance, or another next step.
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Good details to share</p>
          <h2>Tell us what changed with the system.</h2>
          <p>{whenToCall.join(" ")}</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need heating repair?</p>
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