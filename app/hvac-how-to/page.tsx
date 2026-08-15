import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "HVAC How-To Videos and Field Walkthroughs",
  description:
    "HVAC how-to videos and real field walkthroughs from Kingo Services covering AC repair, capacitors, airflow, comfort, ductwork, and Houston-area service topics.",
};

const videos = [
  {
    href: "/hvac-how-to/ac-capacitor-replacement-pearland-texas/",
    title: "Carrier AC Capacitor Replacement in Pearland, Texas",
    text: "A real no-cool service call showing how Kingo diagnosed a failed 45/5 µF dual-run capacitor, replaced it, and checked condenser operation on Job #2333.",
  },
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
  { href: "/service-area/pearland/", label: "Pearland HVAC Service" },
  { href: "/service-area/houston/", label: "Houston HVAC Service" },
  { href: "/completed-job-pins/", label: "Completed Job Pins™" },
  { href: "/contact/", label: "Contact Kingo" },
];

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">HVAC How-To Videos</p>
          <h1>Practical HVAC repair, airflow, and comfort videos.</h1>
          <p className="hero-text">
            Browse Kingo HVAC how-to content and real field walkthroughs for
            common comfort problems, including no-cool calls, failed capacitors,
            rooms not getting enough air, and ductwork modifications.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Featured walkthroughs</p>
          <h2>Start with real Kingo field work.</h2>
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
          <h2>Connect the video library to service and proof pages.</h2>
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
