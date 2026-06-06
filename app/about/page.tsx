import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "../cta-links";

const siteUrl = "https://mykingoservice.com";

const serviceArea = [
  "Splendora",
  "New Caney",
  "Porter",
  "Cleveland",
  "Humble",
  "Conroe",
  "Montgomery",
  "The Woodlands",
  "Spring",
];

const coreServices = [
  "Emergency Air Conditioning Repair",
  "Air Conditioning Installation and Replacement",
  "Heating Repair and Installation",
  "HVAC Maintenance Programs",
  "Commercial HVAC Service",
  "Airflow Improvements and Duct Modifications",
  "Indoor Air Quality Solutions",
  "System Diagnostics and Troubleshooting",
  "Equipment Replacement Planning",
  "Preventative Maintenance Programs",
];

const commitmentItems = [
  "Responding quickly",
  "Communicating clearly",
  "Diagnosing accurately",
  "Recommending honestly",
  "Installing professionally",
  "Standing behind our work",
];

const officialProfiles = [
  {
    href: "https://g.page/r/CUaufGQiE2vQEBM/review",
    label: "Google Business Profile",
  },
  {
    href: "https://www.facebook.com/mykingoservice/",
    label: "Facebook",
  },
  {
    href: "https://www.youtube.com/channel/UCo_Nnt1KsWwd6rAIZ9J0pHg",
    label: "YouTube",
  },
  {
    href: "https://www.linkedin.com/in/mykingoservice/",
    label: "LinkedIn",
  },
  {
    href: "https://www.yelp.com/biz/kingo-services-heating-and-cooling-houston",
    label: "Yelp",
  },
  {
    href: "https://www.bbb.org/us/tx/houston/profile/air-conditioning-repair/kingo-llc-0915-90052409",
    label: "BBB",
  },
];

const proofAssetPath =
  "/job-post-pins/job-2020/job-2020-houston-westbury-carrier-condenser-job-post-pin.png";

const internalLinks = [
  {
    href: "/services/",
    title: "Services",
    text: "Review Kingo's heating, cooling, maintenance, installation, and commercial HVAC services.",
  },
  {
    href: "/service-area/",
    title: "Service Areas",
    text: "See Splendora corridor coverage and priority city pages for local HVAC service.",
  },
  {
    href: "/reviews/",
    title: "Reviews",
    text: "View review pages connected to documented job proof where available.",
  },
  {
    href: "/job-post-pins/job-2020/",
    title: "Job Post Pins",
    text: "See a documented Kingo job proof asset from the Houston / Westbury area.",
  },
];

export const metadata: Metadata = {
  title: "About Kingo Services Heating and Cooling | Splendora HVAC Company",
  description:
    "Learn about Kingo Services Heating and Cooling, a Splendora-based HVAC company founded by Abdiel Jesus Mata, providing emergency HVAC, AC repair, heating repair, installation, maintenance, and documented HVAC service across Northeast Greater Houston.",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "HVACBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Kingo Services Heating and Cooling",
      url: siteUrl,
      telephone: "+1-832-517-1464",
      email: "email@mykingoservice.com",
      foundingDate: "2017",
      description:
        "Splendora-based HVAC company providing residential and light commercial heating and air conditioning services across nearby Northeast Greater Houston communities.",
      address: {
        "@type": "PostalAddress",
        streetAddress: "275 County Road 3662",
        addressLocality: "Splendora",
        addressRegion: "TX",
        postalCode: "77372",
        addressCountry: "US",
      },
      founder: {
        "@id": `${siteUrl}/#founder`,
      },
      areaServed: serviceArea.map((city) => ({
        "@type": "City",
        name: city,
      })),
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "HVAC Services",
        itemListElement: coreServices.map((service) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: service,
          },
        })),
      },
      hasCredential: {
        "@type": "EducationalOccupationalCredential",
        credentialCategory: "license",
        name: "Texas TDLR License",
        identifier: "TACLA33837E",
      },
      sameAs: officialProfiles.map((profile) => profile.href),
    },
    {
      "@type": "Person",
      "@id": `${siteUrl}/#founder`,
      name: "Abdiel Jesus Mata",
      alternateName: "Jesse",
      jobTitle: "Founder and Operator",
      description:
        "Founder and operator of Kingo Services Heating and Cooling who has worked in HVAC since 2008.",
      worksFor: {
        "@id": `${siteUrl}/#organization`,
      },
      knowsAbout: [
        "HVAC diagnostics",
        "Air conditioning repair",
        "Heating repair",
        "HVAC installation",
        "HVAC maintenance",
        "Airflow improvements",
        "Commercial HVAC service",
      ],
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
          <p className="eyebrow">About Kingo</p>
          <h1>About Kingo Services Heating and Cooling</h1>
          <p className="hero-text">
            Kingo Services Heating and Cooling is a Splendora-based HVAC company
            serving residential and light commercial customers across nearby
            Northeast Greater Houston communities.
          </p>
          <p className="hero-text">
            Founded by Abdiel Jesus Mata, known to many customers as Jesse,
            Kingo was built around a simple belief: homeowners and business
            owners deserve honest HVAC service, clear communication, documented
            results, and practical solutions that solve real problems.
          </p>
          <div className="hero-actions">
            <a className="home-button home-button-primary" href={PHONE_HREF}>
              Call Kingo Services
            </a>
            <a className="home-button home-button-secondary" href={BOOKING_URL}>
              Request HVAC Service
            </a>
          </div>
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Splendora HVAC company</p>
          <h2>Why Kingo Exists</h2>
          <p>Air conditioning is not a luxury in Southeast Texas.</p>
          <p>
            For much of the year, families, businesses, property managers, and
            facility owners depend on properly functioning HVAC systems to stay
            comfortable, productive, and safe.
          </p>
          <p>
            When an HVAC system fails, customers often face confusing
            diagnoses, conflicting recommendations, and uncertainty about what
            is actually happening with their equipment.
          </p>
          <p>Kingo was created to provide a different experience.</p>
          <p>
            Instead of focusing on sales pressure, we focus on understanding the
            problem, documenting what we find, explaining our recommendations,
            and helping customers make informed decisions.
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Mission</p>
          <h2>Diagnose accurately. Communicate clearly. Fix problems correctly.</h2>
          <p>
            We provide air conditioning repair, heating repair, HVAC
            installation, preventative maintenance, airflow improvements, indoor
            air quality solutions, and light commercial HVAC services across Splendora and nearby Northeast
            Greater Houston communities.
          </p>
          <p>
            By combining hands-on field experience with modern technology,
            digital documentation, and streamlined operations, Kingo works to
            deliver faster response times, better communication, and a more
            transparent service experience.
          </p>
          <p>We do not cut corners.</p>
          <p>We cut waste.</p>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Founder</p>
          <h2>Meet Jesse</h2>
          <p>
            Abdiel Jesus Mata is the founder and operator of Kingo Services
            Heating and Cooling.
          </p>
        </div>
        <div className="service-grid">
          <div className="service-card">
            <span>Field experience since 2008</span>
            <p>
              Jesse has worked in HVAC since 2008 and works directly in the
              field performing diagnostics, repairs, maintenance, system
              replacements, airflow improvements, and commercial HVAC service
              throughout the Splendora corridor and nearby Northeast Greater Houston communities.
            </p>
          </div>
          <div className="service-card">
            <span>Customers deserve proof</span>
            <p>
              Over years of hands-on work, he developed a strong belief that
              customers should not have to guess what is happening with their
              HVAC system.
            </p>
            <p>Customers deserve proof.</p>
            <p>They deserve documentation.</p>
            <p>They deserve clear explanations.</p>
          </div>
          <div className="service-card">
            <span>How Kingo operates</span>
            <p>
              That philosophy became one of the foundations of Kingo and
              continues to shape how the company operates today.
            </p>
          </div>
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Proof-based service</p>
          <h2>Why We Document Everything</h2>
          <p>Every HVAC company says they provide quality work.</p>
          <p>We believe customers should be able to verify it.</p>
          <p>
            Whenever possible, Kingo documents projects using real field photos,
            videos, measurements, reports, and service records from actual jobs.
          </p>
          <p>Our goal is to help customers see what we see.</p>
          <p>
            Whether we are diagnosing a failed component, replacing equipment,
            correcting airflow issues, or performing preventative maintenance,
            documentation helps create transparency and accountability
            throughout the service process.
          </p>
          <p>We believe transparency creates trust.</p>
          <Link href="/job-post-pins/job-2020/">View documented job proof</Link>
        </div>
        <div className="service-card">
          <Image
            src={proofAssetPath}
            alt="Documented Kingo job proof for a Houston Westbury Carrier condenser installation"
            width={1920}
            height={1080}
            sizes="(max-width: 900px) 100vw, 50vw"
            style={{ display: "block", height: "auto", width: "100%" }}
          />
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Modern HVAC service</p>
          <h2>Built for Modern HVAC Service</h2>
          <p>Kingo operates differently than many traditional HVAC companies.</p>
          <p>
            Instead of building large layers of overhead, management, and sales
            structures, we use technology, digital systems, AI-assisted tools,
            and streamlined workflows to improve communication, reduce waste,
            and stay responsive to customer needs.
          </p>
          <p>Technology should improve service, not replace craftsmanship.</p>
          <p>
            Our approach combines practical field experience with modern
            operational systems to create a company built for the future while
            remaining grounded in the fundamentals of the HVAC trade.
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Service area</p>
          <h2>Serving the Splendora Corridor</h2>
          <p>
            Kingo Services Heating and Cooling serves customers from the Splendora
            operating hub into nearby communities including New Caney, Porter,
            Cleveland, Humble, Conroe, Montgomery, The Woodlands, Spring,
            and surrounding Northeast Greater Houston communities.
          </p>
          <p>
            Southeast Texas climate presents unique challenges including extreme
            heat, high humidity, long cooling seasons, and heavy HVAC system
            usage. Our recommendations are made with these local conditions in
            mind.
          </p>
          <Link href="/service-area/">View service areas</Link>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Core Services</p>
          <h2>HVAC services Kingo provides across the Splendora corridor.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {coreServices.map((service) => (
            <div className="service-card" key={service}>
              <span>{service}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">The Kingo Commitment</p>
          <h2>Reliable HVAC solutions with professionalism and accountability.</h2>
          <p>
            Whether you need emergency HVAC service, routine maintenance,
            equipment replacement, or commercial support, our goal remains the
            same: provide reliable HVAC solutions with professionalism,
            transparency, and accountability.
          </p>
        </div>
        <ol className="process-list">
          {commitmentItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Company Information</p>
          <h2>Kingo Services Heating and Cooling</h2>
          <p>275 County Road 3662, Splendora, TX 77372</p>
          <p>Phone: (832) 517-1464</p>
          <p>Email: email@mykingoservice.com</p>
          <p>Website: https://mykingoservice.com</p>
          <p>Founder and Operator: Abdiel Jesus Mata</p>
          <p>Service Area: Splendora and nearby Northeast Greater Houston communities</p>
          <p>Texas TDLR License: TACLA33837E</p>
          <p>Licensed and Insured</p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Official profiles</p>
          <h2>Verified Kingo entity links.</h2>
          <p>
            These public profiles are included so customers and search systems
            can connect Kingo Services Heating and Cooling to the same business
            entity across the web.
          </p>
          <div className="city-list">
            {officialProfiles.map((profile) => (
              <a href={profile.href} key={profile.href}>
                {profile.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Explore Kingo</p>
          <h2>Helpful pages for service, coverage, reviews, and proof.</h2>
        </div>
        <div className="service-grid services-overview-grid">
          {internalLinks.map((item) => (
            <Link className="service-card" href={item.href} key={item.href}>
              <span>{item.title}</span>
              <p>{item.text}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need HVAC service near Splendora?</p>
        <h2>Call Kingo Services or request HVAC service online.</h2>
        <div className="hero-actions">
          <a className="home-button home-button-primary" href={PHONE_HREF}>
            Call Kingo Services
          </a>
          <a className="home-button home-button-secondary" href={BOOKING_URL}>
            Request HVAC Service
          </a>
        </div>
      </section>
    </div>
  );
}
