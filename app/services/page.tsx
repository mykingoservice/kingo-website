import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const services = [
  {
    href: "/emergency-hvac",
    title: "Emergency HVAC",
    text: "Emergency and after-hours HVAC intake when no cooling, no heat, system failure, or comfort risk needs faster attention.",
  },
  {
    href: "/services/ac-repair",
    title: "AC Repair",
    text: "Cooling diagnostics and repair when the AC is not keeping up, airflow is weak, or the system stops cooling.",
  },
  {
    href: "/services/heating-repair",
    title: "Heating Repair",
    text: "Heating troubleshooting and repair when the system will not heat, runs poorly, or creates uneven comfort.",
  },
  {
    href: "/services/hvac-maintenance",
    title: "HVAC Maintenance",
    text: "Seasonal service visits to help reduce breakdowns, catch wear early, and keep equipment on track.",
  },
  {
    href: "/services/ac-installation",
    title: "AC Installation",
    text: "Replacement and installation planning when the cooling system is aging, undersized, or no longer worth repairing.",
  },
  {
    href: "/services/heating-installation",
    title: "Heating Installation",
    text: "Heating system replacement planning when repair is no longer the strongest long-term answer.",
  },
  {
    href: "/services/commercial-hvac",
    title: "Commercial HVAC",
    text: "Light commercial heating and cooling support for nearby local business environments.",
  },
];

const processSteps = [
  "Start with the service category that best matches the issue.",
  "Share the system symptoms, service address, urgency, and preferred scheduling window.",
  "Emergency or after-hours dispatch charges are explained before the appointment is confirmed.",
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">HVAC services from Splendora</p>
          <h1>Emergency HVAC, AC repair, heating repair, maintenance, and comfort services across Northeast Greater Houston.</h1>
          <p className="hero-text">
            Kingo Services Heating and Cooling operates from Splendora and helps
            nearby homeowners and local businesses with emergency HVAC intake,
            AC repair, heating repair, maintenance, installation planning, and
            light commercial HVAC service.
          </p>
          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call Now
            </a>
            <Link className="home-button home-button-secondary" href="/emergency-hvac">
              Emergency HVAC
            </Link>
            <a className="home-button home-button-secondary" href={BOOKING_URL}>
              Book Online
            </a>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Core service paths</p>
          <h2>Choose the service that matches the system problem.</h2>
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
          <h2>Clear next steps before the visit is confirmed.</h2>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need HVAC help near Splendora?</p>
        <h2>Call now, open Emergency HVAC, or book online and describe what your system is doing.</h2>
        <div className="hero-actions">
          <a className="home-button home-button-primary" href={PHONE_HREF}>
            Call Now
          </a>
          <Link className="home-button home-button-secondary" href="/emergency-hvac">
            Emergency HVAC
          </Link>
          <a className="home-button home-button-secondary" href={BOOKING_URL}>
            Book Online
          </a>
        </div>
      </section>
    </div>
  );
}
