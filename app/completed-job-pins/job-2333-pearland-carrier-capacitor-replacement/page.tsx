import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

const canonicalPath =
  "/completed-job-pins/job-2333-pearland-carrier-capacitor-replacement/";
const blogPath = "/hvac-how-to/ac-capacitor-replacement-pearland-texas/";
const imageUrl =
  "https://i.ytimg.com/vi/VVT1MEypzWU/maxresdefault.jpg";
const fullVideoUrl = "https://youtu.be/VVT1MEypzWU";
const shortVideoUrl = "https://youtube.com/shorts/YYpwchnQasw";

export const metadata: Metadata = {
  title: "Carrier AC Capacitor Replacement in Pearland, TX — Job #2333",
  description:
    "Completed Job Pin proof for Kingo Services Job #2333 in Pearland, Texas: Carrier condenser capacitor replacement with system operation and amperage checked after repair.",
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: "Carrier AC Capacitor Replacement in Pearland, TX — Job #2333",
    description:
      "Real HVAC field proof from a Carrier AC capacitor replacement completed by Kingo Services in Pearland, Texas.",
    type: "article",
    url: canonicalPath,
    images: [
      {
        url: imageUrl,
        width: 1280,
        height: 720,
        alt: "Kingo Services Carrier AC capacitor replacement in Pearland, Texas for Job #2333",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Carrier AC Capacitor Replacement — Pearland Job #2333",
    description:
      "Kingo Services replaced a failed 45/5 µF capacitor and checked the Carrier condenser after the repair.",
    images: [imageUrl],
  },
};

const jobDetails = [
  { label: "ServiceM8 job", value: "#2333" },
  { label: "Job date", value: "July 21, 2026" },
  { label: "Location", value: "Pearland, Texas 77581" },
  { label: "Equipment", value: "Carrier outdoor condenser" },
  { label: "Model", value: "NXA648GKA100" },
  { label: "Service", value: "AC capacitor replacement" },
];

const workPerformed = [
  "Inspected the outdoor Carrier condenser after a no-cool complaint.",
  "Diagnosed the failed dual-run capacitor.",
  "Installed a new Titan HD 45/5 µF capacitor.",
  "Started and checked the condenser after the replacement.",
  "Checked condenser fan and compressor amperage after the repair.",
];

const platformLinks = [
  {
    href: fullVideoUrl,
    label: "Full YouTube Video",
    text: "Watch the complete field walkthrough from Job #2333.",
  },
  {
    href: shortVideoUrl,
    label: "YouTube Short",
    text: "Watch the short-form proof clip from the same service call.",
  },
  {
    href: "https://www.tiktok.com/t/ZP8W8j5NS/",
    label: "TikTok",
    text: "View the Job #2333 short on TikTok.",
  },
  {
    href: "https://www.instagram.com/reel/DcCv6u1ueVy/?igsh=MWdvMnVzZno5bW02ZA==",
    label: "Instagram Reel",
    text: "View the Job #2333 Reel on Instagram.",
  },
  {
    href: "https://www.facebook.com/share/r/18ve9ugWbL/?mibextid=wwXIfr",
    label: "Facebook Reel",
    text: "View the Job #2333 Reel on Facebook.",
  },
  {
    href: "https://x.com/mykingoservice/status/2088453566545404339?s=46",
    label: "X Post",
    text: "View the Job #2333 proof post on X.",
  },
  {
    href: "https://www.threads.com/share/_vSxWJgZy/",
    label: "Threads Post",
    text: "View the Job #2333 proof post on Threads.",
  },
];

const relatedPages = [
  {
    href: blogPath,
    label: "Full HVAC Blog",
    text: "Read the supporting article about AC capacitor failure and this Pearland repair.",
  },
  {
    href: "/services/ac-repair/",
    label: "AC Repair",
    text: "Learn about Kingo air-conditioning diagnostic and repair service.",
  },
  {
    href: "/service-area/pearland/",
    label: "Pearland HVAC Service",
    text: "View service availability and documented Kingo work in Pearland, Texas.",
  },
  {
    href: "/completed-job-pins/",
    label: "Completed Job Pins™",
    text: "Browse more real Kingo HVAC proof records.",
  },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "Carrier AC Capacitor Replacement in Pearland, Texas — Job #2333",
  description:
    "A real Kingo Services field record documenting a Carrier condenser capacitor replacement in Pearland, Texas.",
  datePublished: "2026-07-21",
  dateModified: "2026-08-14",
  image: imageUrl,
  mainEntityOfPage: `https://mykingoservice.com${canonicalPath}`,
  author: {
    "@type": "Organization",
    name: "Kingo Services Heating and Cooling",
    url: "https://mykingoservice.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Kingo Services Heating and Cooling",
    url: "https://mykingoservice.com",
    logo: {
      "@type": "ImageObject",
      url: "https://mykingoservice.com/kingo-logo.webp",
    },
  },
  about: {
    "@type": "Service",
    name: "AC capacitor replacement",
    areaServed: {
      "@type": "City",
      name: "Pearland",
      containedInPlace: {
        "@type": "State",
        name: "Texas",
      },
    },
    provider: {
      "@type": "HVACBusiness",
      name: "Kingo Services Heating and Cooling",
      telephone: "+1-832-517-1464",
      url: "https://mykingoservice.com",
    },
  },
};

export default function Page() {
  return (
    <div className="services-page">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Completed Job Pin™ Proof</p>
          <h1>Carrier AC Capacitor Replacement in Pearland, Texas — Job #2333</h1>
          <p className="hero-text">
            A Carrier air-conditioning system in Pearland was not cooling.
            Kingo Services diagnosed the outdoor condenser, replaced the failed
            capacitor with a new Titan HD 45/5 µF capacitor, and checked system
            operation, including condenser fan and compressor amperage.
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={imageUrl}
          alt="Kingo Services Carrier AC capacitor replacement proof for Job #2333 in Pearland, Texas"
          width={1280}
          height={720}
          loading="eager"
          style={{ borderRadius: "18px", height: "auto", width: "100%" }}
        />
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Job proof summary</p>
          <h2>Verified field details from ServiceM8 Job #2333.</h2>
          <p>
            This is real HVAC field work completed by Kingo Services Heating and
            Cooling in Pearland, Texas.
          </p>
        </div>

        <div className="service-grid services-overview-grid">
          {jobDetails.map((detail) => (
            <div className="service-card" key={detail.label}>
              <span>{detail.label}</span>
              <p>{detail.value}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Customer problem</p>
          <h2>The Carrier AC system was not cooling.</h2>
          <p>
            The service request was for a no-cool condition. The outdoor
            condenser needed to be diagnosed before the correct repair could be
            confirmed.
          </p>
        </div>

        <div className="split-card">
          <p className="eyebrow">Diagnosis and repair</p>
          <h2>The failed capacitor was replaced with the correct 45/5 µF part.</h2>
          <p>
            Kingo Services replaced the failed dual-run capacitor with a Titan
            HD 45/5 µF capacitor, then restarted and checked the condenser.
          </p>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Work performed</p>
          <h2>What Kingo completed on Job #2333.</h2>
        </div>
        <ol className="process-list">
          {workPerformed.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Verified result</p>
          <h2>The replacement capacitor and condenser operation were checked.</h2>
          <p>
            The new 45/5 µF capacitor was operating after installation. The
            condenser fan and compressor amperage were checked after the repair.
            No numerical electrical readings are published because they were not
            included in the public job record.
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Full field walkthrough</p>
          <h2>Watch the Carrier capacitor replacement from Job #2333.</h2>
        </div>
        <div
          style={{
            aspectRatio: "16 / 9",
            margin: "0 auto 2rem",
            maxWidth: "960px",
            width: "100%",
          }}
        >
          <iframe
            src="https://www.youtube.com/embed/VVT1MEypzWU"
            title="Carrier AC capacitor replacement in Pearland, Texas — Kingo Job #2333"
            width="100%"
            height="100%"
            style={{ border: 0, borderRadius: "18px" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Short-form proof</p>
          <h2>Watch the Job #2333 YouTube Short.</h2>
          <div
            style={{
              aspectRatio: "9 / 16",
              margin: "1.25rem auto 0",
              maxWidth: "360px",
              width: "100%",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/YYpwchnQasw"
              title="Carrier AC capacitor replacement YouTube Short — Kingo Job #2333"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "18px" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="split-card">
          <p className="eyebrow">Supporting article</p>
          <h2>What does an AC capacitor do, and why can it cause a no-cool call?</h2>
          <p>
            Read the full supporting HVAC article for a plain-language
            explanation of capacitor function, common warning signs, and the
            checks completed on this Pearland service call.
          </p>
          <p>
            <Link href={blogPath}>Read the full HVAC blog →</Link>
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Published proof network</p>
          <h2>Job #2333 across Kingo video and social channels.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {platformLinks.map((asset) => (
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
          <p className="eyebrow">Related Kingo pages</p>
          <h2>Continue from this Pearland capacitor repair.</h2>
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
        <p className="eyebrow">AC not cooling?</p>
        <h2>
          Call Kingo Services Heating and Cooling or request an appointment
          online.
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
