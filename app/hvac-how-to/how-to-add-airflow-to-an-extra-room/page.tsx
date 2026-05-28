import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const title = "How We Fixed A Hot Room In Houston Using A Space-Saving Duct Transition";
const youtubeUrl = "https://youtu.be/t8sI-eGkF9s";
const shortUrl = "https://youtube.com/shorts/IGV6hmO6PHY";

export const metadata: Metadata = {
  title,
  description:
    "See how Kingo Services added airflow to a hot extra room in Houston using a triangular branch duct transition where attic space was limited.",
  keywords: [
    "hot room in Houston",
    "add airflow to a room",
    "room not getting enough air",
    "triangular branch duct transition",
    "add AC vent to extra room",
    "Houston HVAC ductwork",
    "Kingo Services Heating and Cooling",
  ],
  openGraph: {
    title,
    description:
      "A real Kingo Services ductwork job showing how airflow was added to an extra room using a space-saving branch transition.",
    type: "article",
    videos: [youtubeUrl],
  },
};

const relatedLinks = [
  { href: "/services/ac-repair/", label: "AC Repair" },
  { href: "/services/hvac-maintenance/", label: "HVAC Maintenance" },
  { href: "/services/ac-installation/", label: "AC Installation" },
  { href: "/service-area/houston/", label: "Houston HVAC Service" },
  { href: "/contact/", label: "Contact Kingo" },
];

const imageBase = "/images/hvac-how-to/hot-room-airflow-duct-transition";

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">HVAC How-To</p>
          <h1>{title}</h1>
          <p className="hero-text">
            Some rooms do not receive enough conditioned air even when the HVAC
            system is running correctly. In this project, the attic space was
            too tight to run a completely new duct from the main plenum, so we
            used a triangular branch transition to add another supply vent into
            the existing run.
          </p>
        </div>
      </section>

      <section className="home-section">
        <Image
          src={`${imageBase}/hero-triangular-branch-transition-before-after.jpeg`}
          alt="Before and after view of a triangular branch duct transition used to add airflow to an extra room."
          width={1448}
          height={1086}
          style={{ borderRadius: "18px", height: "auto", width: "100%" }}
          priority
        />
      </section>

      <section className="home-section comfort-section">
        <div>
          <p className="eyebrow">Project problem</p>
          <h2>The room needed more conditioned airflow.</h2>
        </div>
        <p>
          The goal was to improve airflow to the added room while working within
          limited attic space. Instead of forcing a full new duct run from the
          main plenum, we used the existing duct path and created a cleaner
          branch connection.
        </p>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Step 1</p>
          <h2>Dry fit everything first.</h2>
        </div>
        <p>
          Before cutting anything, the triangular transition and duct
          connections were dry fitted to make sure everything lined up
          correctly. This helps prevent mistakes and confirms there is enough
          clearance inside the attic before modifying the ductwork.
        </p>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Step 2</p>
          <h2>Mark the opening.</h2>
        </div>
        <p>
          Once the transition location was confirmed, the opening was marked
          carefully before cutting. Marking the opening first helps keep the cut
          clean and allows the branch connection to fit properly once installed.
        </p>
      </section>

      <section className="home-section">
        <Image
          src={`${imageBase}/step-3-cut-duct-opening.jpeg`}
          alt="Cutting the duct opening for the triangular branch duct transition."
          width={1068}
          height={1472}
          style={{ borderRadius: "18px", height: "auto", width: "100%" }}
        />
        <div className="section-heading">
          <p className="eyebrow">Step 3</p>
          <h2>Cut the duct opening.</h2>
        </div>
        <p>
          After marking the layout, the triangular branch transition was
          modified so it could sit properly into the existing duct run. The
          round opening on the front is where the new flex duct connects to feed
          conditioned air into the added room.
        </p>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Step 4</p>
          <h2>Test fit the transition.</h2>
        </div>
        <p>
          Before final installation, the transition was positioned into place to
          confirm the cuts and alignment matched correctly. A proper test fit
          helps reduce gaps, prevent airflow leaks, simplify final sealing, and
          improve long-term reliability.
        </p>
      </section>

      <section className="home-section">
        <Image
          src={`${imageBase}/step-5-secure-seal-connection.jpeg`}
          alt="Securing and sealing the duct connection with proper fastening."
          width={1089}
          height={1444}
          style={{ borderRadius: "18px", height: "auto", width: "100%" }}
        />
        <div className="section-heading">
          <p className="eyebrow">Step 5</p>
          <h2>Secure and seal the connection.</h2>
        </div>
        <p>
          Once the transition was fitted correctly, the connection was secured
          and prepared for sealing. Spray glue, foil tape, and proper fastening
          methods help keep the connection sealed and reduce conditioned air
          loss.
        </p>
      </section>

      <section className="home-section">
        <Image
          src={`${imageBase}/final-result-airflow-duct-transition.jpeg`}
          alt="Final sealed duct transition with flex duct connected to supply conditioned air to the added room."
          width={1076}
          height={1461}
          style={{ borderRadius: "18px", height: "auto", width: "100%" }}
        />
        <div className="section-heading">
          <p className="eyebrow">Final result</p>
          <h2>The added room now receives conditioned airflow.</h2>
        </div>
        <p>
          Using a triangular branch transition allowed the system to improve
          airflow, save attic space, avoid major reconstruction, and keep the
          installation cleaner and more efficient.
        </p>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Full video breakdown</p>
          <h2>Watch the walkthrough.</h2>
          <p>
            See the installation process from start to finish on YouTube.
          </p>
          <p>
            <Link href={youtubeUrl}>Full video</Link>
          </p>
          <p>
            <Link href={shortUrl}>Short version</Link>
          </p>
        </div>
        <div className="split-card">
          <p className="eyebrow">Houston HVAC note</p>
          <h2>Duct changes affect airflow balance.</h2>
          <p>
            Adding a supply connection can help a hot room, but the duct size,
            system capacity, static pressure, and sealing all matter. The
            connection needs to be planned, fitted, secured, and sealed
            correctly.
          </p>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Related services</p>
          <h2>Need help with AC airflow, ductwork, or cooling performance?</h2>
        </div>
        <div className="city-list" aria-label="Related HVAC service links">
          {relatedLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
