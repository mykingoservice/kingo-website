import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kingo Services Heating and Cooling",
    template: "%s | Kingo Services Heating and Cooling",
  },
  description:
    "Residential and commercial HVAC service, repair, installation, and maintenance across Greater Houston.",
};

const primaryNav = [
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/financing", label: "Financing" },
  { href: "/reviews", label: "Reviews" },
  { href: "/about", label: "About" },
  { href: "/faq", label: "FAQ" },
];

const serviceLinks = [
  { href: "/services/ac-repair", label: "AC Repair" },
  { href: "/services/ac-installation", label: "AC Installation" },
  { href: "/services/hvac-maintenance", label: "HVAC Maintenance" },
  { href: "/services/heating-repair", label: "Heating Repair" },
  { href: "/services/commercial-hvac", label: "Commercial HVAC" },
  { href: "/services/duct-cleaning", label: "Duct Cleaning" },
];

const areaLinks = [
  { href: "/service-area/houston", label: "Houston" },
  { href: "/service-area/splendora", label: "Splendora" },
  { href: "/service-area/montgomery", label: "Montgomery" },
  { href: "/service-area/conroe", label: "Conroe" },
  { href: "/service-area/the-woodlands", label: "The Woodlands" },
  { href: "/service-area/spring", label: "Spring" },
  { href: "/service-area/katy", label: "Katy" },
  { href: "/service-area/sugar-land", label: "Sugar Land" },
  { href: "/service-area/cypress", label: "Cypress" },
  { href: "/service-area/humble", label: "Humble" },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="min-h-full">
        <div className="site-shell">
          <a className="skip-link" href="#main-content">
            Skip to content
          </a>

          <header className="site-header">
            <div className="top-bar">
              <p>Greater Houston HVAC service</p>
              <Link href="/emergency-hvac">Emergency HVAC</Link>
            </div>

            <div className="nav-wrap">
              <Link className="brand" href="/" aria-label="Kingo Services home">
                <span className="brand-mark" aria-hidden="true">
                  K
                </span>
                <span>
                  <span className="brand-name">Kingo Services</span>
                  <span className="brand-line">Heating & Cooling</span>
                </span>
              </Link>

              <nav className="primary-nav" aria-label="Primary navigation">
                {primaryNav.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>

              <Link className="header-cta" href="/contact">
                Schedule Service
              </Link>
            </div>
          </header>

          <main id="main-content" className="site-main">
            {children}
          </main>

          <footer className="site-footer">
            <div className="footer-brand">
              <Link className="brand" href="/" aria-label="Kingo Services home">
                <span className="brand-mark" aria-hidden="true">
                  K
                </span>
                <span>
                  <span className="brand-name">Kingo Services</span>
                  <span className="brand-line">Heating & Cooling</span>
                </span>
              </Link>
              <p>
                HVAC repair, replacement, maintenance, and comfort planning for
                homes and businesses across Greater Houston.
              </p>
            </div>

            <nav className="footer-links" aria-label="HVAC services">
              <h2>Services</h2>
              {serviceLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <nav className="footer-links" aria-label="Service areas">
              <h2>Service Area</h2>
              {areaLinks.map((item) => (
                <Link key={item.href} href={item.href}>
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="footer-actions">
              <h2>Need Service?</h2>
              <Link className="footer-cta" href="/contact">
                Contact Kingo
              </Link>
              <Link className="footer-secondary" href="/emergency-hvac">
                Emergency HVAC
              </Link>
            </div>

            <div className="footer-bottom">
              <p>
                &copy; {new Date().getFullYear()} Kingo Services Heating and
                Cooling. All rights reserved.
              </p>
            </div>
          </footer>

          <div className="mobile-cta-bar" aria-label="Service actions">
            <Link href="/contact">Call Now</Link>
            <Link href="/contact">Request Service</Link>
          </div>
        </div>
      </body>
    </html>
  );
}
