import type { Metadata } from "next";
import Image from "next/image";
import { BOOKING_URL, PHONE_HREF } from "../../cta-links";

const proofAssetPath =
  "/job-post-pins/job-2020/job-2020-houston-westbury-carrier-condenser-job-post-pin.png";

export const metadata: Metadata = {
  title: "Job #2020 Houston Westbury Carrier Condenser Proof",
  description:
    "Job Post Pin proof asset for Kingo Services Job #2020 in the Houston / Westbury area.",
};

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Job Post Pin™ Proof</p>
          <h1>Job #2020 — Houston / Westbury Area</h1>
          <p className="hero-text">
            Carrier condenser installation. System was vacuumed properly and
            refrigerant charge was checked after installation.
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
          <p className="eyebrow">Proof Asset #1</p>
          <h2>Carrier condenser installation proof asset.</h2>
          <p>
            This is Proof Asset #1 for Kingo&apos;s Job Post Pin™ system.
          </p>
        </div>
        <div className="service-card">
          <Image
            src={proofAssetPath}
            alt="Job Post Pin proof for Job 2020 Houston Westbury Carrier condenser installation"
            width={1920}
            height={1080}
            priority
          />
        </div>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Job</p>
          <h2>Job #2020</h2>
          <p>Houston / Westbury Area</p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Work noted</p>
          <h2>Carrier condenser installation</h2>
          <p>
            Vacuum procedure completed and refrigerant charge checked after
            installation.
          </p>
        </div>
      </section>

      <section className="final-cta">
        <p className="eyebrow">Need HVAC service?</p>
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
