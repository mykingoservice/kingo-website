import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../cta-links";

type JobPin = {
  href: string;
  jobId: string;
  location: string;
  city?: string;
  state?: string;
  service: string;
  result?: string;
  description: string;
  date: string;
  thumbnail?: string;
  thumbnailWidth?: number;
  thumbnailHeight?: number;
  supportingLinks?: {
    href: string;
    label: string;
  }[];
};

export const metadata: Metadata = {
  title: "Completed Job Pins™ — Real HVAC Proof Gallery",
  description:
    "Browse documented HVAC proof records from Kingo Services, including completed service calls, job numbers, locations, equipment details, photos, field notes, and supporting videos.",
};

const jobPins: JobPin[] = [
  {
    href: "/completed-job-pins/job-2333-pearland-carrier-capacitor-replacement/",
    jobId: "Job #2333",
    location: "Pearland, TX 77581",
    city: "Pearland",
    state: "Texas",
    service: "Carrier AC capacitor replacement",
    result: "45/5 µF capacitor installed; condenser operation checked",
    description:
      "Diagnosed a no-cool Carrier condenser, replaced the failed dual-run capacitor with a Titan HD 45/5 µF capacitor, and checked condenser fan and compressor amperage after the repair.",
    date: "2026-07-21",
    thumbnail:
      "https://i.ytimg.com/vi/VVT1MEypzWU/maxresdefault.jpg",
    thumbnailWidth: 1280,
    thumbnailHeight: 720,
    supportingLinks: [
      {
        href: "/hvac-how-to/ac-capacitor-replacement-pearland-texas/",
        label: "Blog Post Pin™",
      },
      {
        href: "https://youtu.be/VVT1MEypzWU",
        label: "Video Post Pin™",
      },
      {
        href: "https://youtube.com/shorts/YYpwchnQasw",
        label: "Short Post Pin™",
      },
    ],
  },
  {
    href: "/completed-job-pins/installed-turbo-200-capacitor-splendora-texas/",
    jobId: "Job #2324",
    location: "Splendora, TX",
    city: "Splendora",
    state: "Texas",
    service: "Mini split capacitor replacement",
    result: "Cooling restored",
    description:
      "Installed a Turbo 200® Mini-Oval universal capacitor on a Comfort Total 24,000 BTU mini split after the system was down. Cooling was restored.",
    date: "2026-07-03",
    thumbnail:
      "/images/completed-job-pins/2324/installed-turbo-200-capacitor-splendora-texas.png",
    thumbnailWidth: 1536,
    thumbnailHeight: 1024,
    supportingLinks: [
      {
        href: "https://youtube.com/shorts/VOOahjN8L1I?feature=share",
        label: "Short Post Pin™",
      },
    ],
  },
  {
    href: "/completed-job-pins/job-2312-sugar-land-extra-room-airflow/",
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
  {
    href: "/completed-job-pins/job-2020/",
    jobId: "Job #2020",
    location: "Houston / Westbury area",
    service: "Carrier Condenser Installation",
    description:
      "Carrier condenser installation and startup. Vacuum pulled properly and refrigerant charge verified.",
    date: "2026-05-20",
  },
];

export default function CompletedJobPinsIndex() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Kingo Services Proof Map</p>
          <h1>Completed Job Pins™ — Real HVAC Proof Gallery</h1>
          <p className="hero-text">
            We believe in proof, not promises. Every Completed Job Pin™
            represents real comfort work completed by Kingo Services technicians
            on-site from Splendora across Greater Houston.
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
          <h2>What is a Completed Job Pin™?</h2>
          <p>
            A Completed Job Pin™ is not a job listing, job opening, recruiting
            post, employee badge, or physical lapel pin.
          </p>
          <p>
            For Kingo Services Heating and Cooling, a Completed Job Pin™ is a
            documented HVAC proof record. It connects a completed service call,
            job number, location, service type, photos, field notes, and
            supporting media into one public proof page.
          </p>
          <p>
            A Completed Job Pin™ is closest to a contractor job-site proof record
            or field check-in, but it is built around completed HVAC work instead
            of hiring or employment.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Proof system</p>
          <h2>How the Completed Job Pin™ system works</h2>
          <p>
            ServiceM8 remains the operational source of truth for scheduling,
            dispatch, invoices, and internal job notes.
          </p>
          <p>
            The Completed Job Pin™ page becomes the website source of truth for
            public proof.
          </p>
          <p>
            When supporting assets exist, they attach to the Completed Job Pin™:
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
            A single Completed Job Pin™ can also stand alone when the job has
            enough proof without a video or blog.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Recent work proofs</p>
          <h2>Browse our verified job history.</h2>
          <p>
            Click on any job pin below to view the original proof asset, service
            logs, and equipment details.
          </p>
        </div>

        <div className="service-grid">
          {jobPins.map((pin) => (
            <article className="service-card" key={pin.jobId}>
              <span
                style={{
                  alignItems: "center",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <strong>{pin.jobId}</strong>
                <span
                  className="eyebrow"
                  style={{ fontSize: "0.72rem", margin: 0 }}
                >
                  {pin.date}
                </span>
              </span>
              {pin.thumbnail ? (
                pin.thumbnail.startsWith("http") ? (
                  <>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={pin.thumbnail}
                      alt={`${pin.jobId} ${pin.service} proof thumbnail`}
                      width={pin.thumbnailWidth ?? 1280}
                      height={pin.thumbnailHeight ?? 720}
                      loading="lazy"
                      style={{
                        height: "auto",
                        marginTop: "0.75rem",
                        width: "100%",
                      }}
                    />
                  </>
                ) : (
                  <Image
                    src={pin.thumbnail}
                    alt={`${pin.jobId} ${pin.service} proof thumbnail`}
                    width={pin.thumbnailWidth ?? 1536}
                    height={pin.thumbnailHeight ?? 1024}
                    style={{
                      height: "auto",
                      marginTop: "0.75rem",
                      width: "100%",
                    }}
                  />
                )
              ) : null}
              <strong
                style={{
                  color: "var(--brand-strong)",
                  display: "block",
                  fontSize: "1.1rem",
                  marginTop: "0.5rem",
                }}
              >
                {pin.service}
              </strong>
              <p style={{ marginBlock: "0.5rem" }}>{pin.location}</p>
              {pin.result ? (
                <p style={{ marginBlock: "0.5rem" }}>
                  <strong>Result:</strong> {pin.result}
                </p>
              ) : null}
              <p>{pin.description}</p>
              {pin.supportingLinks ? (
                <div className="city-list" style={{ marginTop: "1rem" }}>
                  {pin.supportingLinks.map((link) =>
                    link.href.startsWith("/") ? (
                      <Link href={link.href} key={link.href}>
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        key={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {link.label}
                      </a>
                    )
                  )}
                </div>
              ) : null}
              <Link
                href={pin.href}
                style={{
                  display: "block",
                  fontSize: "0.9rem",
                  marginTop: "1rem",
                  textDecoration: "underline",
                }}
              >
                View Completed Job Pin™ &rarr;
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
