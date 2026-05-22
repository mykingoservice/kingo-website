import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HVAC How-To Videos",
  description:
    "HVAC how-to videos from Kingo Services covering airflow, comfort, AC, ductwork, and Houston HVAC service topics.",
};

const videos = [
  {
    href: "/hvac-how-to/how-to-add-airflow-to-an-extra-room/",
    title: "How To Add Airflow To An Extra Room Using One Existing Duct",
    text: "A practical HVAC airflow video for rooms that are not getting enough air, garage conversions, and extra-room ductwork questions.",
  },
];

const topicLinks = [
  { href: "/services/ac-repair/", label: "AC Repair" },
  { href: "/services/hvac-maintenance/", label: "HVAC Maintenance" },
  { href: "/services/ac-installation/", label: "AC Installation" },
  { href: "/service-area/houston/", label: "Houston HVAC Service" },
  { href: "/contact/", label: "Contact Kingo" },
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">HVAC How-To Videos</p>
          <h1>Practical HVAC airflow and comfort videos for Houston-area homes.</h1>
          <p className="hero-text">
            Browse Kingo HVAC how-to content for common comfort questions like
            rooms not getting enough air, adding airflow to an extra room, and
            understanding when ductwork should be reviewed by a contractor.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Featured how-to</p>
          <h2>Start with airflow to an extra room.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {videos.map((video) => (
            <Link className="service-card" href={video.href} key={video.href}>
              <span>{video.title}</span>
              <p>{video.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Related HVAC topics</p>
          <h2>Connect the video library to service pages.</h2>
        </div>
        <div className="city-list" aria-label="Related HVAC service links">
          {topicLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
