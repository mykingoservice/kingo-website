import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

const title = "How Do I Know If My Contractor Added Airflow To This Room Correctly?";
const youtubeUrl = "https://youtu.be/t8sI-eGkF9s";
const shortUrl = "https://youtube.com/shorts/IGV6hmO6PHY";
const imageBase = "/images/hvac-how-to/hot-room-airflow-duct-transition";

export const metadata: Metadata = {
  title:
    "Did Your Contractor Add Airflow To A Room Correctly? | Houston HVAC Guide",
  description:
    "See what Houston homeowners should look for when a contractor adds airflow to a room using an existing duct, new vent, or branch connection.",
  keywords: [
    "contractor added airflow to room",
    "new air vent installed correctly",
    "added ductwork installed correctly",
    "Houston HVAC airflow",
    "room not getting enough air",
    "HVAC contractor ductwork",
    "Kingo Services Heating and Cooling",
  ],
  openGraph: {
    title:
      "Did Your Contractor Add Airflow To A Room Correctly?",
    description:
      "A Houston HVAC consumer awareness guide showing what to look for when airflow is added to a room using an existing duct and branch connection.",
    type: "article",
    videos: [youtubeUrl],
  },
};

export default function Page() {
  return (
    <div className="services-page">
      <section className="home-section services-hero">
        <div>
          <p className="eyebrow">Consumer Awareness</p>
          <h1>{title}</h1>
          <p className="hero-text">
            If a contractor added airflow to a room, the finished work should
            make sense visually and mechanically. The new connection should be
            planned, fitted, secured, sealed, and tied into the duct system
            without creating obvious restriction, leakage, or loose ductwork.
          </p>
        </div>
      </section>

      <section className="home-section">
        <Image
          src={`${imageBase}/hero-triangular-branch-transition-before-after.jpeg`}
          alt="Field example of an added airflow duct connection used to supply air to an extra room."
          width={1448}
          height={1086}
          style={{ borderRadius: "18px", height: "auto", width: "100%" }}
          priority
        />
      </section>

      <section className="home-section comfort-section">
        <div>
          <p className="eyebrow">Homeowner verification</p>
          <h2>What should you look for after airflow is added to a room?</h2>
        </div>
        <p>
          A proper airflow modification should not look random. The contractor
          should have a reason for where the duct was cut, how the branch was
          connected, how the flex duct was routed, and how the final connection
          was sealed. In this Houston-area project, the attic space was tight,
          so a triangular branch transition was used to add airflow without
          forcing a full new duct run from the main plenum.
        </p>
      </section>

      <section className="home-section">
        <div className="section-heading">
          <p className="eyebrow">Check 1</p>
          <h2>The connection should be planned before cutting.</h2>
        </div>
        <p>
          Before a duct is cut open, the fitting should be dry fitted and
          checked for clearance, airflow direction, and flex duct routing. This
          helps prevent crooked openings, poor alignment, and unnecessary duct
          damage.
        </p>
      </section>

      <section className="home-section">
        <Image
          src={`${imageBase}/step-3-cut-duct-opening.jpeg`}
          alt="Duct opening prepared for a branch connection after layout and test fitting."
          width={1068}
          height={1472}
          style={{ borderRadius: "18px", height: "auto", width: "100%" }}
        />
        <div className="section-heading">
          <p className="eyebrow">Check 2</p>
          <h2>The branch connection should fit the duct cleanly.</h2>
        </div>
        <p>
          If a contractor adds airflow from an existing duct, the new branch
          needs to sit cleanly into the duct run. Gaps, loose metal, crushed
          duct, or sloppy cuts can create airflow loss and make sealing harder.
        </p>
      </section>

      <section className="home-section">
        <Image
          src={`${imageBase}/step-5-secure-seal-connection.jpeg`}
          alt="Secured and sealed duct branch connection used for an added room supply vent."
          width={1089}
          height={1444}
          style={{ borderRadius: "18px", height: "auto", width: "100%" }}
        />
        <div className="section-heading">
          <p className="eyebrow">Check 3</p>
          <h2>The connection should be sealed, not just attached.</h2>
        </div>
        <p>
          A duct connection can be physically attached and still leak air if it
          is not sealed properly. Spray glue, foil tape, proper fastening, and a
          clean final seal help reduce conditioned air loss in the attic.
        </p>
      </section>

      <section className="home-section">
        <Image
          src={`${imageBase}/final-result-airflow-duct-transition.jpeg`}
          alt="Final sealed airflow branch connection feeding conditioned air to an added room."
          width={1076}
          height={1461}
          style={{ borderRadius: "18px", height: "auto", width: "100%" }}
        />
        <div className="section-heading">
          <p className="eyebrow">Check 4</p>
          <h2>The room should receive airflow without creating new problems.</h2>
        </div>
        <p>
          Adding a vent or branch connection can help a room that needs more
          airflow, but duct size, system capacity, static pressure, sealing, and
          return air path still matter. A good-looking connection is only part
          of the story. The room also needs to perform correctly after the work
          is done.
        </p>
      </section>

      <section className="home-section split-section">
        <div className="split-card">
          <p className="eyebrow">Real job proof</p>
          <h2>See the full field walkthrough.</h2>
          <p>
            This Consumer Awareness page is connected to a real Kingo Services
            job where airflow was added to an extra room using one existing duct
            line and a triangular branch connection.
          </p>
          <p>
            <Link href={youtubeUrl}>Watch the full video</Link>
          </p>
          <p>
            <Link href={shortUrl}>Watch the short version</Link>
          </p>
        </div>

        <div className="split-card">
          <p className="eyebrow">Supporting proof page</p>
          <h2>Want to see how the work was done?</h2>
          <p>
            The step-by-step project page shows the dry fit, layout, cutting,
            sealing, and final result from the same airflow modification.
          </p>
          <p>
            <Link href="/hvac-how-to/how-to-add-airflow-to-an-extra-room/">
              View the supporting project page
            </Link>
          </p>
        </div>
      </section>

      <section className="home-section services-process">
        <div className="section-heading">
          <p className="eyebrow">Houston HVAC service</p>
          <h2>Need a second opinion on airflow, ductwork, or a hot room?</h2>
        </div>
        <p>
          Kingo Services Heating and Cooling helps Houston-area homeowners with
          AC repair, airflow concerns, ductwork adjustments, HVAC maintenance,
          and comfort problems.
        </p>
        <div className="city-list" aria-label="Related HVAC links">
          <Link href="/services/ac-repair/">AC Repair</Link>
          <Link href="/services/hvac-maintenance/">HVAC Maintenance</Link>
          <Link href="/service-area/houston/">Houston HVAC Service</Link>
          <Link href="/contact/">Contact Kingo</Link>
        </div>
      </section>
    </div>
  );
}
