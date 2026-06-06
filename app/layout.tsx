import type { Metadata } from "next";
import Link from "next/link";
import Script from "next/script";
import { BOOKING_URL, PHONE_HREF } from "./cta-links";
import { MobileMenu } from "../components/mobile-menu";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Kingo Services Heating and Cooling",
    template: "%s | Kingo Services Heating and Cooling",
  },
  description:
    "Emergency HVAC, AC repair, heating repair, installation, and maintenance from Splendora across Northeast Greater Houston.",
  icons: {
    icon: "/kingo-favicon.png",
    apple: "/kingo-favicon.png",
  },
};

const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/emergency-hvac", label: "Emergency HVAC" },
  { href: "/services", label: "Services" },
  { href: "/service-area", label: "Service Area" },
  { href: "/reviews", label: "Reviews" },
  { href: "/financing", label: "Financing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const serviceLinks = [
  { href: "/services/ac-repair", label: "AC Repair" },
  { href: "/services/ac-installation", label: "AC Installation" },
  { href: "/services/hvac-maintenance", label: "HVAC Maintenance" },
  { href: "/services/heating-repair", label: "Heating Repair" },
  { href: "/services/commercial-hvac", label: "Commercial HVAC" },
];

const areaLinks = [
  { href: "/service-area/splendora", label: "Splendora" },
  { href: "/service-area/new-caney", label: "New Caney" },
  { href: "/service-area/porter", label: "Porter" },
  { href: "/service-area/cleveland", label: "Cleveland" },
  { href: "/service-area/humble", label: "Humble" },
  { href: "/service-area/conroe", label: "Conroe" },
  { href: "/service-area/montgomery", label: "Montgomery" },
  { href: "/service-area/the-woodlands", label: "The Woodlands" },
  { href: "/service-area/spring", label: "Spring" },
];

const pushEngageSdk = `
(function(w, d) {
  w.PushEngage = w.PushEngage || [];
  w._peq = w._peq || [];
  PushEngage.push(['init', {
      appId: '70f437f1-41bd-4e83-8506-b2e6b03cd5e2'
  }]);

  var e = d.createElement('script');

  e.src = 'https://clientcdn.pushengage.com/sdks/pushengage-web-sdk.js';
  e.async = true;
  e.type = 'text/javascript';
  d.head.appendChild(e);
})(window, document);
`;

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
              <p>Northeast Greater Houston HVAC service</p>
              <Link href="/emergency-hvac">Emergency HVAC</Link>
            </div>

            <div className="nav-wrap">
              <Link className="brand" href="/" aria-label="Kingo Services home">
                <span className="brand-mark" aria-hidden="true">
                  <img src="/kingo-favicon.png" alt="" />
                </span>
                <span>
                  <span className="brand-name">Kingo Services</span>
                  <span className="brand-line">Heating and Cooling</span>
                </span>
              </Link>

              <nav className="primary-nav" aria-label="Primary navigation">
                {primaryNav.map((item) => (
                  <Link key={item.href} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </nav>

              <MobileMenu items={primaryNav} />

              <a className="header-cta" href={BOOKING_URL}>
                Book Online
              </a>
            </div>
          </header>

          <main id="main-content" className="site-main">
            {children}
          </main>

          <footer className="site-footer">
            <div className="footer-brand">
              <Link className="brand" href="/" aria-label="Kingo Services home">
                <span className="brand-mark" aria-hidden="true">
                  <img src="/kingo-favicon.png" alt="" />
                </span>
                <span>
                  <span className="brand-name">Kingo Services</span>
                  <span className="brand-line">Heating and Cooling</span>
                </span>
              </Link>
              <p>
                Emergency HVAC, AC repair, heating repair, maintenance, and
                comfort planning from Splendora across Northeast Greater Houston.
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
              <a className="footer-cta" href={PHONE_HREF}>
                Call Kingo
              </a>
              <a className="footer-secondary" href={PHONE_HREF}>
                Emergency HVAC
              </a>
            </div>

            <div className="footer-bottom">
              <p>
                &copy; {new Date().getFullYear()} Kingo Services Heating and
                Cooling. All rights reserved.
              </p>
            </div>
          </footer>

          <div className="mobile-cta-bar" aria-label="Service actions">
            <a href={PHONE_HREF}>Call Now</a>
            <a href="/emergency-hvac">Emergency</a>
          </div>
        </div>
        <Script
          id="pushengage-sdk"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{ __html: pushEngageSdk }}
        />
      </body>
    </html>
  );
}
