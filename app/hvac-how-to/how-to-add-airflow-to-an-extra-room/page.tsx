import type { Metadata } from "next";
import Link from "next/link";

const title = "How To Add Airflow To An Extra Room Using One Existing Duct";
const youtubeUrl = "https://youtu.be/t8sI-eGkF9s";
const embedUrl = "https://www.youtube.com/embed/t8sI-eGkF9s";

export const metadata: Metadata = {
  title,
  description:
    "Learn how airflow can be added to an extra room using one existing duct, plus when to call a Houston HVAC contractor for ductwork review.",
  keywords: [
    "how to add airflow to a room",
    "room not getting enough air",
    "add AC vent to extra room",
    "garage conversion AC airflow",
    "add duct to existing duct",
    "HVAC airflow to extra room",
    "Houston HVAC ductwork",
  ],
  openGraph: {
    title,
    description:
      "A Kingo HVAC how-to video about adding airflow to an extra room using one existing duct.",
    type: "article",
    videos: [youtubeUrl],
  },
};

const relatedLinks = [
  { href: "/services/ac-repair/", label: "AC Repair" },
  { href: "/services/hvac-maintenance/", label: "HVAC Maintenance" },
  { href: "/services/ac-installation/", label: "AC Installation" },
  { href: "/service-area/houston/", label: "Houston HVAC Service" },
  { href: "/contact/", label: "Contact Kingo" },
];

const howToSteps = [
  "Identify the room that is not getting enough air and compare it with nearby conditioned rooms.",
  "Look for an existing duct path that may be able to support an added branch or supply run.",
  "Review whether the current system and ductwork can handle added airflow without creating new comfort issues.",
  "Have a qualified HVAC contractor evaluate duct sizing, airflow balance, and installation details before modifying the system.",
];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: title,
  description:
    "A Houston HVAC airflow how-to video about adding airflow to an extra room using one existing duct.",
  video: {
    "@type": "VideoObject",
    name: title,
    description:
      "How to add airflow to an extra room, including garage conversion AC airflow and adding a duct to existing ductwork.",
    embedUrl,
    url: youtubeUrl,
    thumbnailUrl: "https://i.ytimg.com/vi/t8sI-eGkF9s/hqdefault.jpg",
  },
  step: howToSteps.map((step, index) => ({
    "@type": "HowToStep",
    position: index + 1,
    text: step,
  })),
};

export default function Page() {
  return (
    <div className="services-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">HVAC How-To</p>
          <h1>{title}</h1>
          <p className="hero-text">
            If one room is not getting enough air, an added supply path may be
            part of the solution. This video covers adding airflow to an extra
            room using one existing duct, including situations like garage
            conversion AC airflow and Houston HVAC ductwork questions.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Watch the video</p>
          <h2>Adding airflow to an extra room from existing ductwork.</h2>
        </div>
        <div className="service-card">
          <iframe
            title={title}
            src={embedUrl}
            style={{
              aspectRatio: "16 / 9",
              border: 0,
              display: "block",
              width: "100%",
            }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="home-section comfort-section">
        <div>
          <p className="eyebrow">What this helps explain</p>
          <h2>Why an extra room may not get enough air.</h2>
        </div>
        <p>
          A room can feel uncomfortable when it does not have enough supply air,
          when the duct path is restricted, or when a conversion space was added
          without a complete airflow plan. Adding an AC vent to an extra room
          may involve more than opening a duct. The system, duct sizing, and
          airflow balance all matter.
        </p>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Written walkthrough</p>
          <h2>How to think about adding ductwork to an extra room.</h2>
        </div>
        <ol className="process-list">
          {howToSteps.map((step) => (
            <li key={step}>{step}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Safety and contractor note</p>
          <h2>Duct changes can affect the whole HVAC system.</h2>
          <p>
            Adding ductwork to an existing duct can change static pressure,
            airflow balance, moisture behavior, and comfort in other rooms. A
            qualified HVAC contractor should review the system before cutting,
            branching, or changing ductwork.
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Common search question</p>
          <h2>Can I add airflow to a garage conversion or extra room?</h2>
          <p>
            Sometimes, but the right answer depends on the current HVAC system,
            duct layout, room load, insulation, and how the added airflow will
            affect the rest of the property.
          </p>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Related services</p>
          <h2>Need help with AC airflow, ductwork, or cooling performance?</h2>
        </div>
        <div className="city-list" aria-label="Related HVAC service links">
          {relatedLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
