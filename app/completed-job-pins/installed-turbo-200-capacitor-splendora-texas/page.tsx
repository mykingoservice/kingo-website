import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

const title = "Installed a Turbo 200 Capacitor in Splendora, Texas";
const description =
  "Kingo Services Heating and Cooling repaired a Comfort Total 24,000 BTU mini split in Splendora, Texas by installing a Turbo 200® Mini-Oval universal capacitor. Cooling was restored.";
const heroImage =
  "/images/completed-job-pins/2324/installed-turbo-200-capacitor-splendora-texas.png";
const capacitorImage =
  "/images/completed-job-pins/2324/turbo-200-mini-oval-universal-capacitor-installed.jpg";
const localVideo =
  "/videos/completed-job-pins/2324/installed-turbo-200-capacitor-splendora-texas.mp4";
const youtubeShortUrl =
  "https://youtube.com/shorts/VOOahjN8L1I?feature=share";
const youtubeEmbedUrl = "https://www.youtube.com/embed/VOOahjN8L1I";

export const metadata: Metadata = {
  title: "Installed a Turbo 200 Capacitor in Splendora, Texas | Kingo Services",
  description,
  keywords: [
    "mini split repair Splendora TX",
    "Comfort Total mini split repair",
    "Turbo 200 capacitor installation",
    "mini split capacitor replacement",
    "HVAC repair Splendora Texas",
    "Kingo Services Heating and Cooling",
  ],
  openGraph: {
    title,
    description,
    type: "article",
    images: [heroImage],
    videos: [youtubeShortUrl],
  },
};

const jobFacts = [
  { label: "ServiceM8 Job Number", value: "2324" },
  { label: "Company", value: "Kingo Services Heating and Cooling" },
  { label: "Technician", value: "Jesse with Kingo" },
  { label: "City", value: "Splendora" },
  { label: "State", value: "Texas" },
  { label: "ZIP", value: "77372" },
  { label: "Equipment", value: "Comfort Total Mini Split" },
  { label: "Capacity", value: "24,000 BTU" },
  {
    label: "Repair",
    value: "Turbo 200® Mini-Oval Universal Capacitor Installation",
  },
  { label: "Result", value: "Cooling Restored" },
  { label: "License", value: "TACLA33837E" },
  { label: "Phone", value: "(832) 517-1464" },
  { label: "Website", value: "https://mykingoservice.com" },
];

const symptoms = [
  "Mini split will not start",
  "Indoor unit hums",
  "Outdoor unit does not start",
  "Weak or no cooling",
  "Breaker trips during startup",
  "Intermittent operation",
];

const relatedAssets = [
  {
    href: youtubeShortUrl,
    label: "YouTube Short",
    text: "Playable proof clip for Job #2324",
  },
  {
    href: localVideo,
    label: "Local video file",
    text: "Repository copy of the completed service video",
  },
  {
    href: heroImage,
    label: "Hero image",
    text: "Completed Job Pin proof image",
  },
  {
    href: capacitorImage,
    label: "Capacitor installation photo",
    text: "Turbo 200 Mini-Oval capacitor installed",
  },
];

const internalLinks = [
  { href: "/services/ac-repair/", label: "AC Repair" },
  { href: "/service-area/splendora/", label: "Splendora HVAC Service" },
  { href: "/completed-job-pins/", label: "Completed Job Pins™" },
  { href: "/reviews/", label: "Reviews" },
];

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "HVACBusiness",
      "@id": "https://mykingoservice.com/#business",
      name: "Kingo Services Heating and Cooling",
      telephone: "+18325171464",
      url: "https://mykingoservice.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Splendora",
        addressRegion: "TX",
        addressCountry: "US",
      },
    },
    {
      "@type": "Service",
      name: "Mini split capacitor replacement",
      provider: { "@id": "https://mykingoservice.com/#business" },
      areaServed: {
        "@type": "City",
        name: "Splendora",
        addressRegion: "Texas",
      },
      serviceType: "Mini split capacitor repair",
      description,
    },
    {
      "@type": "VideoObject",
      name: title,
      description,
      thumbnailUrl: `https://mykingoservice.com${heroImage}`,
      uploadDate: "2026-07-03",
      embedUrl: youtubeEmbedUrl,
      contentUrl: youtubeShortUrl,
    },
    {
      "@type": "Article",
      headline: title,
      description,
      image: `https://mykingoservice.com${heroImage}`,
      datePublished: "2026-07-03",
      author: {
        "@type": "Organization",
        name: "Kingo Services Heating and Cooling",
      },
      publisher: { "@id": "https://mykingoservice.com/#business" },
    },
  ],
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
          <p className="eyebrow">Completed Job Pin™ Proof</p>
          <h1>{title}</h1>
          <p className="hero-text">
            A Comfort Total 24,000 BTU mini split system in Splendora, Texas
            77372 stopped operating due to a failed capacitor. After diagnosing
            the problem, Jesse with Kingo Services Heating and Cooling
            installed a Turbo 200® Mini-Oval Universal Capacitor. Once the
            repair was completed, the system started properly and cooling was
            restored.
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
          <p className="eyebrow">Job facts</p>
          <h2>
            Jesse with Kingo Services Heating and Cooling installed a Turbo
            200® Mini-Oval universal capacitor in Splendora, Texas 77372
          </h2>
        </div>
        <div className="service-grid services-overview-grid">
          {jobFacts.map((fact) => (
            <div className="service-card" key={fact.label}>
              <span>{fact.label}</span>
              <p>{fact.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Customer / problem context</p>
          <h2>The mini split had stopped cooling the home.</h2>
          <p>
            The homeowner reported that the Comfort Total mini split had
            stopped operating correctly and was no longer cooling the home. The
            system would not start normally, preventing the equipment from
            producing conditioned air.
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Diagnosis</p>
          <h2>The capacitor was identified as the failed component.</h2>
          <p>
            After inspecting and testing the electrical components, the
            capacitor was identified as the failed component. Because the
            remaining electrical components were operating correctly, replacing
            the capacitor was the appropriate repair.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Work performed</p>
          <h2>The failed capacitor was replaced with a Turbo 200® Mini-Oval.</h2>
          <p>
            The failed capacitor was removed and replaced with a Turbo 200®
            Mini-Oval Universal Capacitor. After installation, the wiring was
            verified, the equipment was started, cooling operation was
            confirmed, and the mini split was checked before leaving the job
            site.
          </p>
        </div>
      </section>

      <section className="home-section comfort-section">
        <div>
          <p className="eyebrow">Result</p>
          <h2>Cooling was restored.</h2>
        </div>
        <p>
          The Comfort Total 24,000 BTU mini split returned to normal operation.
          Cooling was restored and the homeowner avoided a more expensive repair
          by replacing the failed capacitor.
        </p>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Photos / media</p>
          <h2>Job #2324 proof photos and video.</h2>
        </div>
        <div className="service-grid">
          <div className="service-card">
            <Image
              src={heroImage}
              alt="Completed Job Pin proof for Job 2324 Turbo 200 capacitor installation in Splendora Texas"
              width={1536}
              height={1024}
              priority
              style={{ height: "auto", width: "100%" }}
            />
          </div>
          <div className="service-card">
            <Image
              src={capacitorImage}
              alt="Turbo 200 Mini-Oval universal capacitor installed on Comfort Total mini split"
              width={1290}
              height={2238}
              style={{ height: "auto", width: "100%" }}
            />
          </div>
          <div className="service-card">
            <div className="aspect-video w-full" style={{ background: "#000" }}>
              <iframe
                className="h-full w-full"
                src={youtubeEmbedUrl}
                title="Installed a Turbo 200 Capacitor in Splendora Texas"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </div>
          <div className="service-card">
            <video
              controls
              preload="metadata"
              src={localVideo}
              style={{ width: "100%" }}
            >
              <a href={localVideo}>Download the local Job #2324 video</a>
            </video>
          </div>
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Why capacitors fail</p>
          <h2>Heat, age, electrical stress, and voltage changes wear them down.</h2>
          <p>
            Capacitors naturally wear over time due to heat, age, electrical
            stress, long operating hours, and voltage fluctuations. A failed
            capacitor can prevent the compressor or fan motor from starting even
            though the rest of the HVAC system may still be in good condition.
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Signs Your Mini Split May Have a Bad Capacitor</p>
          <h2>Startup trouble is the main warning sign.</h2>
          <ol className="process-list">
            {symptoms.map((symptom) => (
              <li key={symptom}>{symptom}</li>
            ))}
          </ol>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Related assets</p>
          <h2>Supporting media attached to Job #2324.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {relatedAssets.map((asset) => (
            <a className="service-card" href={asset.href} key={asset.href}>
              <span>{asset.label}</span>
              <p>{asset.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Internal links</p>
          <h2>More Kingo Services pages related to this proof record.</h2>
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
        <p className="eyebrow">Need mini split or AC repair?</p>
        <h2>Call now or book online and tell us what your system is doing.</h2>
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
