import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../cta-links";

export const metadata: Metadata = {
  title: "Job Post Pins™ — Real HVAC Proof Gallery",
  description:
    "Learn how Kingo Services uses Job Post Pins™ as documented HVAC proof records for completed service calls, job numbers, photos, field notes, and supporting media.",
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
  {
    href: "/job-post-pins/job-2312-sugar-land-extra-room-airflow/",
    jobId: "Job #2312",
    location: "Sugar Land, TX",
    service: "Airflow / Ductwork Modification",
    description:
      "Added conditioned airflow to an extra room using one existing duct line, a triangular branch transition, collars, flex duct, spray glue, foil tape, and zip ties.",
    date: "2026-05-20",
    supportingLinks: [
      {
        href: "/hvac-how-to/how-to-add-airflow-to-an-extra-room/",
        label: "Blog Post Pin™",
      },
      {
        href: "https://youtube.com/shorts/IGV6hmO6PHY",
        label: "Short Post Pin™",
      },
      {
        href: "https://youtu.be/t8sI-eGkF9s",
        label: "Video Post Pin™",
      },
    ],
  },
];

export default function JobPostPinsIndex() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Kingo Services Proof Map</p>
          <h1>Job Post Pins™ — Real HVAC Proof Gallery</h1>
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
          <p className="eyebrow">Definition</p>
          <h2>What is a Job Post Pin™?</h2>
          <p>
            A Job Post Pin™ is not a job listing, job opening, recruiting post, employee badge, or physical lapel pin.
          </p>
          <p>
            For Kingo Services Heating and Cooling, a Job Post Pin™ is a documented HVAC proof record. It connects a completed service call, job number, location, service type, photos, field notes, and supporting media into one public proof page.
          </p>
          <p>
            A Job Post Pin™ is closest to a contractor job-site proof record or field check-in, but it is built around completed HVAC work instead of hiring or employment.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Proof system</p>
          <h2>How the Job Post Pin™ system works</h2>
          <p>
            ServiceM8 remains the operational source of truth for scheduling, dispatch, invoices, and internal job notes.
          </p>
          <p>
            The Job Post Pin™ page becomes the website source of truth for public proof.
          </p>
          <p>
            When supporting assets exist, they attach to the Job Post Pin™:
          </p>
        </div>
        <div className="service-grid services-overview-grid">
          <div className="service-card">
            <span>Short Post Pin™</span>
            <p>Short-form proof clip</p>
          </div>
          <div className="service-card">
            <span>Video Post Pin™</span>
            <p>Long-form job video</p>
          </div>
          <div className="service-card">
            <span>Blog Post Pin™</span>
            <p>Educational/supporting article</p>
          </div>
          <div className="service-card">
            <span>Review Post Pin™</span>
            <p>Customer trust signal tied to the job</p>
          </div>
        </div>
        <div className="section-heading" style={{ marginTop: "1.5rem" }}>
          <p>
            A single Job Post Pin™ can also stand alone when the job has enough proof without a video or blog.
          </p>
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
            <article className="service-card" key={pin.jobId}>
              <span style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <strong>{pin.jobId}</strong>
                <span className="eyebrow" style={{ margin: 0, fontSize: "0.72rem" }}>{pin.date}</span>
              </span>
              <strong style={{ display: "block", marginTop: "0.5rem", color: "var(--brand-strong)", fontSize: "1.1rem" }}>{pin.service}</strong>
              <p style={{ marginBlock: "0.5rem" }}>{pin.location}</p>
              <p>{pin.description}</p>
              {pin.supportingLinks ? (
                <div className="city-list" style={{ marginTop: "1rem" }}>
                  {pin.supportingLinks.map((link) =>
                    link.href.startsWith("/") ? (
                      <Link href={link.href} key={link.href}>
                        {link.label}
                      </Link>
                    ) : (
                      <a href={link.href} key={link.href}>
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              ) : null}
              <Link href={pin.href} style={{ display: "block", marginTop: "1rem", textDecoration: "underline", fontSize: "0.9rem" }}>
                View Job Post Pin™ &rarr;
              </Link>
            </article>
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
