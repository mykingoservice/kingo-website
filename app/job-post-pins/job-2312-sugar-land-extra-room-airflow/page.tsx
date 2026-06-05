import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

export const metadata: Metadata = {
  title:
    "Job #2312 Sugar Land Extra Room Airflow Proof | Kingo Services",
  description:
    "Job Post Pin proof record for Kingo Services Job #2312 in Sugar Land, Texas, adding airflow to an extra room using one existing duct.",
};

const workPerformed = [
  "Installing a new supply vent",
  "Creating a triangular duct transition",
  "Installing duct collars",
  "Connecting flex duct",
  "Securing ductwork with spray glue",
  "Sealing connections with foil tape",
  "Securing ductwork with zip ties",
];

const connectedAssets = [
  {
    href: "https://youtu.be/t8sI-eGkF9s",
    label: "Video Post Pin™",
    text: "Long-form job video",
  },
  {
    href: "https://youtube.com/shorts/IGV6hmO6PHY",
    label: "Short Post Pin™",
    text: "Short-form proof clip",
  },
  {
    href: "https://youtube.com/shorts/afRhuL3dvRk",
    label: "Short Post Pin™",
    text: "Short-form proof clip",
  },
  {
    href: "/hvac-how-to/how-to-add-airflow-to-an-extra-room/",
    label: "Blog Post Pin™",
    text: "Educational/supporting article",
  },
  {
    href: "/content-post-pin/this-room-needed-more-air/",
    label: "Legacy Content Post Pin™",
    text: "Legacy supporting proof page",
  },
  {
    href: "https://www.instagram.com/reel/DYxExHYOo4o/",
    label: "Instagram Reel",
    text: "Social proof clip",
  },
  {
    href: "https://www.tiktok.com/t/ZP8pnS763/",
    label: "TikTok",
    text: "Social proof clip",
  },
];

const sourceHierarchy = [
  {
    title: "ServiceM8",
    text: "Operational source of truth for scheduling, dispatch, invoices, and internal job notes.",
  },
  {
    title: "Job Post Pin™",
    text: "Website source of truth for the public proof record tied to this completed HVAC job.",
  },
  {
    title: "Connected assets",
    text: "Supporting video, short-form clips, article content, and social media links attach back to the parent proof record.",
  },
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Job Post Pin™ Proof</p>
          <h1>How To Add Airflow To An Extra Room Using One Existing Duct</h1>
          <p className="hero-text">
            Job #2312 documents an airflow and ductwork modification for Comax
            Renovations in Sugar Land, TX 77479.
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
          <h2>Job #2312 — Sugar Land airflow and ductwork modification.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          <div className="service-card">
            <span>Customer</span>
            <p>Comax Renovations</p>
          </div>
          <div className="service-card">
            <span>Contact</span>
            <p>Nicholas</p>
          </div>
          <div className="service-card">
            <span>City</span>
            <p>Sugar Land, TX 77479</p>
          </div>
          <div className="service-card">
            <span>Job value</span>
            <p>$770</p>
          </div>
          <div className="service-card">
            <span>Service type</span>
            <p>Airflow / Ductwork Modification</p>
          </div>
          <div className="service-card">
            <span>Problem</span>
            <p>
              The customer needed conditioned airflow added to an extra room
              while utilizing the existing HVAC duct system.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Featured snippet answer</p>
          <h2>
            How Do Contractors Add Air To An Extra Room Using An Existing Duct?
          </h2>
          <p>
            Contractors can add air to an extra room by creating a new branch
            from an existing duct, installing a supply vent, connecting flex
            duct, securing the ductwork, and sealing the new connections so
            conditioned air can reach the added space.
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Job-specific answer</p>
          <h2>
            Kingo Services Heating and Cooling, an HVAC contractor serving
            Greater Houston from Splendora, Texas, added air to an extra room in
            Sugar Land by creating a new branch from an existing duct.
          </h2>
          <p>
            Airflow was successfully extended into the extra room using the
            existing duct layout. The solution provided additional conditioned
            air while working within the constraints of the current HVAC system.
          </p>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Work performed</p>
          <h2>What Kingo completed in the attic.</h2>
          <p>
            This HVAC project took place in a tight attic space and involved:
          </p>
        </div>
        <ol className="process-list">
          {workPerformed.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Connected assets</p>
          <h2>Supporting media attached to Job #2312.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {connectedAssets.map((asset) =>
            asset.href.startsWith("/") ? (
              <Link className="service-card" href={asset.href} key={asset.href}>
                <span>{asset.label}</span>
                <p>{asset.text}</p>
              </Link>
            ) : (
              <a className="service-card" href={asset.href} key={asset.href}>
                <span>{asset.label}</span>
                <p>{asset.text}</p>
              </a>
            )
          )}
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Source of truth hierarchy</p>
          <h2>How this proof record fits into the Kingo system.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {sourceHierarchy.map((item) => (
            <div className="service-card" key={item.title}>
              <span>{item.title}</span>
              <p>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need airflow or ductwork help?</p>
        <h2>Call now or book online and tell us what your room is doing.</h2>
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
