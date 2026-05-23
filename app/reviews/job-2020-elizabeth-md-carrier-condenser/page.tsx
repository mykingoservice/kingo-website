import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

const googleReviewUrl = "https://share.google/sMydG0Cc0xAryzgiU";
const jobProofPath = "/job-post-pins/job-2020/";

export const metadata: Metadata = {
  title: "Elizabeth MD Review for Job #2020 Carrier Condenser Installation",
  description:
    "Review Post Pin for Elizabeth MD connected to Kingo Services Job #2020 Carrier condenser installation proof in the Houston area.",
};

const reviewDetails = [
  {
    title: "Customer / review label",
    text: "Elizabeth MD",
  },
  {
    title: "Connected service",
    text: "Carrier condenser installation",
  },
  {
    title: "Connected job",
    text: "Job #2020",
  },
  {
    title: "Proof connection",
    text: "This review is connected to the Job #2020 Carrier condenser installation proof page.",
  },
];

const internalLinks = [
  { href: "/reviews/", label: "All Reviews" },
  { href: "/services/ac-installation/", label: "AC Installation" },
  { href: "/service-area/houston/", label: "Houston HVAC Service" },
  { href: jobProofPath, label: "Job #2020 Proof Page" },
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Review Post Pin</p>
          <h1>Elizabeth MD — Job #2020 Carrier condenser installation</h1>
          <p className="hero-text">
            This Review Post Pin connects the Elizabeth MD Google review signal
            to Kingo Services Job #2020, a documented Carrier condenser
            installation in the Houston area.
          </p>
          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call Kingo Services
            </a>
            <a className="home-button home-button-secondary" href={BOOKING_URL}>
              Request Service
            </a>
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Review summary</p>
          <h2>A review signal connected to documented HVAC work.</h2>
          <p>
            This page does not recreate or exaggerate the Google review. It
            gives customers a clean path from the review label to the connected
            job proof page, service category, and Kingo contact options.
          </p>
        </div>
        <div className="service-grid services-overview-grid">
          {reviewDetails.map((detail) => (
            <div className="service-card" key={detail.title}>
              <span>{detail.title}</span>
              <p>{detail.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Connected job proof</p>
          <h2>Job #2020 — Carrier condenser installation</h2>
          <p>
            The connected Job Post Pin proof page documents the Carrier
            condenser installation and installation checks for Job #2020.
          </p>
          <Link href={jobProofPath}>Open Job #2020 proof page</Link>
        </div>
        <div className="split-card">
          <p className="eyebrow">Google review</p>
          <h2>Elizabeth MD Google review link</h2>
          <p>
            Use the Google review share link to view the review source directly.
          </p>
          <a href={googleReviewUrl}>Open Google review</a>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Houston-area HVAC trust</p>
          <h2>Reviews are stronger when they connect to real work.</h2>
          <p>
            Kingo Services Heating and Cooling serves Houston-area customers
            with heating, cooling, repair, installation, maintenance, and
            emergency HVAC intake. Review Post Pins help connect customer trust
            signals to the job records and service pages that explain the work.
          </p>
        </div>
        <div className="city-list" aria-label="Related internal links">
          {internalLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need HVAC service?</p>
        <h2>Call Kingo Services or request service online.</h2>
        <div className="hero-actions">
          <a className="home-button home-button-primary" href={PHONE_HREF}>
            Call Kingo Services
          </a>
          <a className="home-button home-button-secondary" href={BOOKING_URL}>
            Request Service
          </a>
        </div>
      </section>
    </div>
  );
}
