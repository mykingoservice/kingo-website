import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../cta-links";

export const metadata: Metadata = {
  title: "Job Post Pins™ — Real HVAC Proof Gallery",
  description:
    "Explore real-time heating and cooling job proofs across Greater Houston. See verified equipment installations, diagnostic details, and service logs.",
};

const jobPins = [
  {
    href: "/job-post-pins/job-2020/",
    jobId: "Job #2020",
    location: "Houston / Westbury area",
    service: "Carrier Condenser Installation",
    description: "Carrier condenser installation and startup. Vacuum pulled properly and refrigerant charge verified.",
    date: "2026-05-20",
  },
];

export default function JobPostPinsIndex() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Kingo Services Proof Map</p>
          <h1>Job Post Pins™</h1>
          <p className="hero-text">
            We believe in proof, not promises. Every Job Post Pin™ represents real comfort work completed by Kingo Services technicians on-site across Greater Houston.
          </p>
          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call (832) 517-1464
            </a>
            <a className="home-button home-button-secondary" href={BOOKING_URL}>
              Schedule Service
            </a>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Recent work proofs</p>
          <h2>Browse our verified job history.</h2>
          <p>Click on any job pin below to view the original proof asset, service logs, and equipment details.</p>
        </div>

        <div className="service-grid">
          {jobPins.map((pin) => (
            <Link className="service-card" href={pin.href} key={pin.jobId}>
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>{pin.jobId}</strong>
                <span className="eyebrow" style={{ margin: 0, fontSize: "0.72rem" }}>{pin.date}</span>
              </span>
              <strong style={{ display: "block", marginTop: "0.5rem", color: "var(--brand-strong)", fontSize: "1.1rem" }}>{pin.service}</strong>
              <p style={{ marginBlock: "0.5rem" }}>{pin.location}</p>
              <p>{pin.description}</p>
              <span style={{ display: "block", marginTop: "1rem", textDecoration: "underline", fontSize: "0.9rem" }}>View Proof Asset &rarr;</span>
            </Link>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Ready to start?</p>
        <h2>Get your heating or cooling system running right.</h2>
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
