import Link from "next/link";
import { PHONE_HREF } from "./cta-links";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container narrow">
        <p className="eyebrow">Kingo Services Heating and Cooling</p>
        <h1>This page is currently being updated</h1>
        <p className="lead">The essentials are below.</p>

        <div className="hero-actions">
          <a className="home-button primary" href={PHONE_HREF}>
            Call (832) 517-1464
          </a>
          <Link className="home-button secondary" href="/emergency-hvac">
            Emergency HVAC
          </Link>
        </div>

        <div className="service-grid">
          <Link className="service-card" href="/services">
            <h2>Services</h2>
          </Link>

          <Link className="service-card" href="/service-area">
            <h2>Service Area</h2>
          </Link>

          <Link className="service-card" href="/reviews">
            <h2>Reviews</h2>
          </Link>

          <Link className="service-card" href="/contact">
            <h2>Contact</h2>
          </Link>
        </div>
      </div>
    </section>
  );
}
