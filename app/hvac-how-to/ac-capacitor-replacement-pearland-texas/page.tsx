import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

const title =
  "AC Capacitor Replacement in Pearland, Texas: Carrier Job #2333";
const canonicalPath = "/hvac-how-to/ac-capacitor-replacement-pearland-texas/";
const jobPinPath =
  "/completed-job-pins/job-2333-pearland-carrier-capacitor-replacement/";
const imagePath =
  "/images/completed-job-pins/2333/job-2333-pearland-carrier-capacitor-replacement.jpg";
const fullVideoUrl = "https://youtu.be/VVT1MEypzWU";
const shortVideoUrl = "https://youtube.com/shorts/YYpwchnQasw";

export const metadata: Metadata = {
  title,
  description:
    "See how Kingo Services diagnosed a no-cool Carrier condenser in Pearland, replaced a failed 45/5 µF capacitor, and checked system operation after the repair.",
  keywords: [
    "AC capacitor replacement Pearland TX",
    "Carrier AC not cooling",
    "45/5 capacitor replacement",
    "Pearland AC repair",
    "air conditioner capacitor failure",
    "Kingo Services Heating and Cooling",
  ],
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title,
    description:
      "A real Carrier AC capacitor replacement in Pearland, Texas, with full video and verified job details from Kingo Services Job #2333.",
    type: "article",
    url: canonicalPath,
    images: [
      {
        url: imagePath,
        width: 1280,
        height: 720,
        alt: "Carrier AC capacitor replacement in Pearland, Texas by Kingo Services",
      },
    ],
    videos: [fullVideoUrl],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description:
      "Real Pearland HVAC field work: failed Carrier capacitor replaced and condenser operation checked.",
    images: [imagePath],
  },
};

const commonSigns = [
  "The thermostat is calling for cooling, but the outdoor unit does not start normally.",
  "The condenser fan or compressor struggles to start or stops unexpectedly.",
  "The system hums, cycles irregularly, or produces little to no cooling.",
  "Cooling becomes intermittent even though the indoor blower is still moving air.",
];

const jobChecks = [
  "Confirmed the service complaint was a no-cool condition.",
  "Inspected the outdoor Carrier condenser.",
  "Diagnosed the failed dual-run capacitor.",
  "Installed a Titan HD 45/5 µF replacement capacitor.",
  "Checked condenser fan and compressor amperage after the repair.",
];

const relatedLinks = [
  { href: jobPinPath, label: "Completed Job Pin™ for Job #2333" },
  { href: "/services/ac-repair/", label: "AC Repair" },
  { href: "/service-area/pearland/", label: "Pearland HVAC Service" },
  { href: "/completed-job-pins/", label: "More Completed Job Pins™" },
  { href: "/contact/", label: "Contact Kingo" },
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description:
    "A real Carrier AC capacitor replacement in Pearland, Texas, documented by Kingo Services Heating and Cooling.",
  datePublished: "2026-08-14",
  dateModified: "2026-08-14",
  image: `https://mykingoservice.com${imagePath}`,
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
          <p className="eyebrow">HVAC How-To and Field Proof</p>
          <h1>{title}</h1>
          <p className="hero-text">
            A Carrier air-conditioning system in Pearland was not cooling. On
            ServiceM8 Job #2333, Kingo Services diagnosed a failed dual-run
            capacitor, installed a new Titan HD 45/5 µF capacitor, and checked
            condenser operation after the repair.
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
        <Image
          src={imagePath}
          alt="Kingo Services technician presenting the replacement capacitor used on Carrier AC Job #2333 in Pearland, Texas"
          width={1280}
          height={720}
          style={{ borderRadius: "18px", height: "auto", width: "100%" }}
          preload
        />
      </section>

      <section className="home-section comfort-section">
        <div>
          <p className="eyebrow">The service call</p>
          <h2>The Carrier system had a no-cool problem.</h2>
        </div>
        <p>
          A no-cool complaint does not automatically prove that the capacitor is
          bad. Several electrical, airflow, refrigerant, and control problems can
          produce similar symptoms. The outdoor unit must be tested so the
          failed component is identified before parts are replaced.
        </p>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">What the part does</p>
          <h2>What does an AC capacitor do?</h2>
          <p>
            A dual-run capacitor supports the outdoor condenser fan motor and
            compressor. The two numbers on a 45/5 µF capacitor correspond to the
            required capacitance for those two loads.
          </p>
          <p>
            When the capacitor can no longer provide the required support, the
            outdoor unit may struggle to start or may not operate normally.
          </p>
        </div>

        <div className="split-card">
          <p className="eyebrow">Why the rating matters</p>
          <h2>The replacement must match the equipment requirements.</h2>
          <p>
            Capacitors are selected from the equipment specifications and the
            installed component rating. Using the wrong capacitance can prevent
            normal operation and may place unnecessary stress on the motor or
            compressor.
          </p>
          <p>
            Because an outdoor condenser contains high-voltage electrical
            components, testing and replacement should be handled by a trained
            HVAC professional.
          </p>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Possible warning signs</p>
          <h2>What can a weak or failed AC capacitor look like?</h2>
          <p>
            These symptoms can point toward a capacitor problem, but they can
            also be caused by other faults. Diagnosis matters.
          </p>
        </div>
        <ol className="process-list">
          {commonSigns.map((sign) => (
            <li key={sign}>{sign}</li>
          ))}
        </ol>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Job #2333 walkthrough</p>
          <h2>What Kingo verified on this Pearland repair.</h2>
        </div>
        <ol className="process-list">
          {jobChecks.map((check) => (
            <li key={check}>{check}</li>
          ))}
        </ol>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Full video</p>
          <h2>Watch the Carrier capacitor replacement walkthrough.</h2>
          <p>
            The long-form video shows the real field work from ServiceM8 Job
            #2333 in Pearland, Texas.
          </p>
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
            title="Carrier AC capacitor replacement in Pearland, Texas — full Kingo walkthrough"
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
          <p className="eyebrow">Short video</p>
          <h2>Watch the 80-second field proof.</h2>
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
              title="Carrier AC capacitor replacement YouTube Short in Pearland, Texas"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: "18px" }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="split-card">
          <p className="eyebrow">Completed Job Pin™</p>
          <h2>See the complete public proof record.</h2>
          <p>
            The Completed Job Pin™ connects the ServiceM8 job number, date,
            equipment, model, repair, verified result, videos, and social posts
            into one canonical page.
          </p>
          <p>
            <Link href={jobPinPath}>Open Job #2333 Completed Job Pin™ →</Link>
          </p>
          <p>
            <a href={fullVideoUrl}>Open the full video on YouTube →</a>
          </p>
          <p>
            <a href={shortVideoUrl}>Open the Short on YouTube →</a>
          </p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">When to request service</p>
          <h2>Call when the system is not starting or not cooling normally.</h2>
          <p>
            If the indoor blower runs but the outdoor unit does not start, the
            system repeatedly stops, or the home is not cooling, shut the system
            down if operation appears abnormal and request a professional
            diagnosis. A capacitor may be involved, but the correct repair
            depends on testing the complete system.
          </p>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Related Kingo pages</p>
          <h2>AC repair, Pearland service, and real completed-job proof.</h2>
        </div>
        <div className="city-list" aria-label="Related HVAC links">
          {relatedLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need an AC diagnosis?</p>
        <h2>Call Kingo Services or submit a service request online.</h2>
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
