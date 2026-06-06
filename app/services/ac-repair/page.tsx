import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

const symptoms = [
  {
    title: "Warm air or weak cooling",
    text: "The system is running, but the home is not cooling the way it should.",
  },
  {
    title: "Uneven rooms",
    text: "Some spaces feel comfortable while other rooms stay warm or stuffy.",
  },
  {
    title: "Short cycling",
    text: "The AC turns on and off frequently instead of running steady cycles.",
  },
  {
    title: "New sounds or odors",
    text: "Unusual noises, smells, or changes in airflow can be worth checking.",
  },
  {
    title: "Higher comfort strain",
    text: "The system seems to work harder than usual during Houston heat.",
  },
  {
    title: "Water or drain concerns",
    text: "Moisture around the unit or drain issues should be reviewed promptly.",
  },
];

const checks = [
  "Thermostat settings and basic system operation.",
  "Airflow, filter condition, and visible comfort restrictions.",
  "Indoor and outdoor equipment behavior during a cooling call.",
  "Drain, electrical, and component symptoms that may affect performance.",
];

const repairProcess = [
  "Tell us what changed and when the cooling issue started.",
  "Schedule the repair request through the phone or booking flow.",
  "Review findings and practical next steps before work moves forward.",
];

const whenToCall = [
  "The AC is running but the home keeps getting warmer.",
  "The system stops cooling during a hot day.",
  "You notice water, unusual sounds, or repeated cycling.",
  "Comfort problems return after changing the filter or thermostat settings.",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">AC Repair</p>
          <h1>Cooling repair support for Splendora and Northeast Greater Houston comfort problems.</h1>
          <p className="hero-text">
            If your air conditioner is struggling, blowing warm air, cycling
            oddly, or not keeping rooms comfortable, request AC repair and share
            what you are noticing with the system.
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
          <h2>Signs your AC may need attention.</h2>
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
          <h2>AC repair starts with the system behavior.</h2>
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
          <h2>A clear path from cooling concern to next step.</h2>
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
          <h2>Do not wait on a cooling issue that is getting worse.</h2>
          <p>
            AC problems can become more uncomfortable as temperatures rise.
            Calling early helps clarify whether the issue needs repair,
            maintenance, or another next step.
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Good details to share</p>
          <h2>Tell us what changed with the system.</h2>
          <p>{whenToCall.join(" ")}</p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need AC repair?</p>
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
