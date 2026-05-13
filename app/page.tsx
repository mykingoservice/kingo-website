import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "./cta-links";

const coreServices = [
  {
    href: "/services/ac-repair",
    title: "AC Repair",
    text: "Troubleshooting and repair support when cooling performance drops.",
  },
  {
    href: "/services/ac-installation",
    title: "AC Installation",
    text: "Replacement and installation planning for home comfort systems.",
  },
  {
    href: "/services/hvac-maintenance",
    title: "HVAC Maintenance",
    text: "Seasonal service visits to help keep equipment running smoothly.",
  },
  {
    href: "/services/heating-repair",
    title: "Heating Repair",
    text: "Heating system diagnostics and repair for cooler Houston-area days.",
  },
  {
    href: "/services/commercial-hvac",
    title: "Commercial HVAC",
    text: "Commercial comfort support for light business environments.",
  },
];

const priorityCities = [
  { href: "/service-area/houston", label: "Houston" },
  { href: "/service-area/splendora", label: "Splendora" },
  { href: "/service-area/montgomery", label: "Montgomery" },
  { href: "/service-area/conroe", label: "Conroe" },
  { href: "/service-area/the-woodlands", label: "The Woodlands" },
  { href: "/service-area/spring", label: "Spring" },
  { href: "/service-area/katy", label: "Katy" },
  { href: "/service-area/sugar-land", label: "Sugar Land" },
  { href: "/service-area/cypress", label: "Cypress" },
  { href: "/service-area/humble", label: "Humble" },
];

const processSteps = [
  "Tell us what is happening with the system.",
  "Schedule the next available service path.",
  "Review findings and options before work moves forward.",
];

export default function Home() {
  return (
    <div className="home-page">
      <section className="home-hero">
        <div className="home-hero-copy">
          <p className="eyebrow">Houston-area heating and cooling</p>
          <h1>HVAC service for hot days, cold snaps, and the comfort in between.</h1>
          <p className="hero-text">
            Kingo Services Heating and Cooling supports homeowners and local
            businesses across the Greater Houston area with repair,
            installation, maintenance, emergency HVAC, and comfort planning.
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

        <div className="hero-panel" aria-label="Service focus">
          <div>
            <span>Primary focus</span>
            <strong>Cooling, heating, and indoor comfort</strong>
          </div>
          <div>
            <span>Service type</span>
            <strong>Residential and commercial HVAC</strong>
          </div>
          <div>
            <span>Next step</span>
            <strong>Share the issue and request scheduling</strong>
          </div>
        </div>
      </section>

      <section className="home-section comfort-section">
        <div>
          <p className="eyebrow">When comfort starts slipping</p>
          <h2>Small HVAC problems can turn into long, uncomfortable days.</h2>
        </div>
        <p>
          Warm rooms, weak airflow, short cycling, unusual sounds, and uneven
          comfort are all good reasons to request help. Exact availability and
          service details can be confirmed when scheduling.
        </p>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Core services</p>
          <h2>Start with the service that fits the problem.</h2>
        </div>
        <div className="service-grid">
          {coreServices.map((service) => (
            <Link className="service-card" href={service.href} key={service.href}>
              <span>{service.title}</span>
              <p>{service.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section area-section">
        <div className="section-heading">
          <p className="eyebrow">Service area</p>
          <h2>HVAC help across Houston and nearby communities.</h2>
          <Link href="/service-area">View full service area</Link>
        </div>
        <div className="city-list" aria-label="Priority service cities">
          {priorityCities.map((city) => (
            <Link href={city.href} key={city.href}>
              {city.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section process-section">
        <div className="section-heading">
          <p className="eyebrow">Process</p>
          <h2>A straightforward path from issue to next step.</h2>
        </div>
        <ol className="process-list">
          {processSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Emergency HVAC</p>
          <h2>When the system needs urgent attention.</h2>
          <p>
            Use the emergency HVAC page to start the service request path for
            urgent heating or cooling issues.
          </p>
          <a href={PHONE_HREF}>Emergency HVAC</a>
        </div>
        <div className="split-card">
          <p className="eyebrow">Financing</p>
          <h2>Planning for a larger comfort project.</h2>
          <p>
            For larger repair or replacement decisions, the financing page gives
            visitors a clear place to continue.
          </p>
          <Link href="/financing">View Financing</Link>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Ready to talk through the HVAC issue?</p>
        <h2>Request service and share what is happening with your system.</h2>
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
