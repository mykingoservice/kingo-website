import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const services = [
  {
    href: "/services/ac-repair",
    title: "AC Repair",
    text: "Cooling diagnostics and repair support when rooms are not staying comfortable.",
  },
  {
    href: "/services/ac-installation",
    title: "AC Installation",
    text: "Replacement and installation planning for a cooling system that fits the space.",
  },
  {
    href: "/services/heating-repair",
    title: "Heating Repair",
    text: "Heating system troubleshooting for cooler days and uneven indoor comfort.",
  },
  {
    href: "/services/heating-installation",
    title: "Heating Installation",
    text: "New heating system planning when repair is no longer the right next step.",
  },
  {
    href: "/services/hvac-maintenance",
    title: "HVAC Maintenance",
    text: "Seasonal service visits to help keep heating and cooling equipment on track.",
  },
  {
    href: "/services/duct-cleaning",
    title: "Duct Cleaning",
    text: "Duct service options for airflow, dust, and indoor comfort concerns.",
  },
  {
    href: "/services/commercial-hvac",
    title: "Commercial HVAC",
    text: "Commercial heating and cooling support for local business environments.",
  },
];

const processSteps = [
  "Start with the service category that best matches the issue.",
  "Share the symptoms, location, and preferred scheduling window.",
  "Review the next service step before work moves forward.",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">HVAC services</p>
          <h1>Heating, cooling, maintenance, and comfort services for the Houston area.</h1>
          <p className="hero-text">
            Choose the service that best matches the problem. Exact timing,
            recommendations, and next steps can be confirmed during scheduling.
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
          <p className="eyebrow">Phase 1 services</p>
          <h2>Find the right starting point for your HVAC request.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {services.map((service) => (
            <Link className="service-card" href={service.href} key={service.href}>
              <span>{service.title}</span>
              <p>{service.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Simple process</p>
          <h2>Clear next steps without overcomplicating the visit.</h2>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need help choosing?</p>
        <h2>Request service and describe what is happening with your system.</h2>
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
