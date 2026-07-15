import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

export const metadata: Metadata = {
  title:
    "Lennox Capacitor Replacement in Splendora, Texas | Kingo Job #2322",
  description:
    "Completed Job Pin proof record for Kingo Services Job #2322 in Splendora, Texas. A failed capacitor caused the Lennox condenser fan to stop spinning and the air conditioner to stop cooling.",
};

const workPerformed = [
  "Inspected the outdoor Lennox condenser",
  "Diagnosed a failed capacitor",
  "Installed the correct-size replacement capacitor",
  "Tested the air-conditioning system",
  "Verified condenser operation and cooling",
];

const connectedAssets = [
  {
    href: "https://youtube.com/shorts/GXwoENjIvbg",
    label: "Completed Job Short Video Pin™",
    text: "Watch the short-form field proof from Job #2322.",
  },
];

const relatedPages = [
  {
    href: "/services/ac-repair/",
    label: "AC Repair",
    text: "Learn about Kingo air-conditioning repair services.",
  },
  {
    href: "/service-area/splendora/",
    label: "Splendora HVAC Service",
    text: "View heating and cooling services available in Splendora, Texas.",
  },
  {
    href: "/services/hvac-maintenance/",
    label: "HVAC Maintenance",
    text: "Learn about preventive HVAC maintenance from Kingo Services.",
  },
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Completed Job Pin™ Proof</p>

          <h1>
            Lennox Capacitor Replacement in Splendora, Texas — Job #2322
          </h1>

          <p className="hero-text">
            The outdoor condenser fan was not spinning and the air conditioner
            was not cooling. Kingo Services diagnosed a failed capacitor,
            installed the correct-size replacement, tested the system, and
            verified condenser operation and cooling.
          </p>

          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call (832) 517-1464
            </a>

            <a className="home-button home-button-secondary" href={BOOKING_URL}>
              Book Online
            </a>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Job proof summary</p>
          <h2>Job #2322 — Lennox condenser capacitor replacement.</h2>
        </div>

        <div className="service-grid services-overview-grid">
          <div className="service-card">
            <span>Location</span>
            <p>Splendora, Texas</p>
          </div>

          <div className="service-card">
            <span>Equipment</span>
            <p>Lennox outdoor condenser</p>
          </div>

          <div className="service-card">
            <span>Service type</span>
            <p>Air-conditioning repair and capacitor replacement</p>
          </div>

          <div className="service-card">
            <span>Problem</span>
            <p>
              The outdoor condenser fan was not spinning and the air
              conditioner was not cooling.
            </p>
          </div>

          <div className="service-card">
            <span>Diagnosis</span>
            <p>Failed capacitor</p>
          </div>

          <div className="service-card">
            <span>Verified result</span>
            <p>Condenser operation and cooling were verified after the repair.</p>
          </div>
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Customer problem</p>

          <h2>Why was the Lennox air conditioner not cooling?</h2>

          <p>
            The outdoor condenser fan was not spinning. Without normal
            condenser operation, the air conditioner was unable to cool the
            home properly.
          </p>
        </div>

        <div className="split-card">
          <p className="eyebrow">Job-specific diagnosis</p>

          <h2>A failed capacitor prevented normal condenser operation.</h2>

          <p>
            Kingo Services diagnosed the failed capacitor and installed the
            correct-size replacement before testing the system.
          </p>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Work performed</p>
          <h2>What Kingo completed on Job #2322.</h2>
        </div>

        <ol className="process-list">
          {workPerformed.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Completed job video</p>
          <h2>Watch the field proof from Job #2322.</h2>
          <p>
            This YouTube Short documents the Lennox condenser fan not spinning,
            the failed capacitor diagnosis, and the completed repair in
            Splendora, Texas.
          </p>
        </div>

        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            margin: "0 auto 2rem",
            aspectRatio: "9 / 16",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/GXwoENjIvbg"
            title="Lennox AC capacitor replacement in Splendora, Texas — Kingo Job #2322"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "18px" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>

        <div className="service-grid services-overview-grid">
          {connectedAssets.map((asset) => (
            <a
              className="service-card"
              href={asset.href}
              key={asset.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              <span>{asset.label}</span>
              <p>{asset.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Related Kingo services</p>
          <h2>AC repair and HVAC service in Splendora.</h2>
        </div>

        <div className="service-grid services-overview-grid">
          {relatedPages.map((page) => (
            <Link className="service-card" href={page.href} key={page.href}>
              <span>{page.label}</span>
              <p>{page.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Is your outside AC unit not running?</p>

        <h2>
          Call Kingo Services Heating and Cooling or book an appointment online.
        </h2>

        <div className="hero-actions">
          <a className="home-button home-button-primary" href={PHONE_HREF}>
            Call (832) 517-1464
          </a>

          <a className="home-button home-button-secondary" href={BOOKING_URL}>
            Book Online
          </a>
        </div>
      </section>
    </div>
  );
}
