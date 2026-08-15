import Image from "next/image";
import styles from "./service-area-coverage.module.css";

type CoverageVariant = "primary" | "secondary";

type MapCity = {
  name: string;
  x: number;
  y: number;
  context?: boolean;
  anchor?: "start" | "middle" | "end";
};

type CoverageConfig = {
  title: string;
  subtitle: string;
  listTitle: string;
  cities: string[];
  feeLabel: string;
  fee: string;
  note: string;
  mapTitle: string;
  mapDescription: string;
  polygon: string;
  pin: { x: number; y: number };
  mapCities: MapCity[];
};

const primaryConfig: CoverageConfig = {
  title: "Kingo Primary Service Area",
  subtitle: "Based in Splendora, serving the northeast Houston corridor.",
  listTitle: "Primary service cities",
  cities: [
    "Splendora",
    "New Caney",
    "Porter",
    "Kingwood",
    "Humble",
    "Cleveland",
  ],
  feeLabel: "Primary trip and diagnostic fee",
  fee: "$75",
  note: "Mobile HVAC service based in Splendora, Texas.",
  mapTitle: "Kingo primary HVAC service area map",
  mapDescription:
    "A stylized map showing the primary Kingo service corridor from Humble and Kingwood through Porter, New Caney, Splendora, and Cleveland.",
  polygon: "330,70 760,105 760,265 620,825 225,790 155,610",
  pin: { x: 545, y: 235 },
  mapCities: [
    { name: "Conroe", x: 115, y: 175, context: true },
    { name: "The Woodlands", x: 130, y: 335, context: true },
    { name: "Cleveland", x: 640, y: 135 },
    { name: "Splendora", x: 545, y: 365, anchor: "middle" },
    { name: "New Caney", x: 520, y: 455, anchor: "middle" },
    { name: "Porter", x: 300, y: 605, anchor: "middle" },
    { name: "Kingwood", x: 340, y: 755, anchor: "middle" },
    { name: "Humble", x: 520, y: 705, anchor: "middle" },
  ],
};

const secondaryConfig: CoverageConfig = {
  title: "Kingo Secondary Service Area",
  subtitle: "Expanded coverage across Greater Houston and surrounding cities.",
  listTitle: "Regional coverage",
  cities: [
    "Houston",
    "Richmond",
    "Katy",
    "Sugar Land",
    "Missouri City",
    "Pearland",
    "Galveston",
    "Pasadena",
    "Baytown",
    "Humble",
    "Kingwood",
    "Spring",
    "The Woodlands",
    "Conroe",
    "Cleveland",
    "Shepherd",
  ],
  feeLabel: "Secondary trip and diagnostic fee",
  fee: "$125",
  note: "Expanded mobile HVAC coverage from the Splendora operating hub.",
  mapTitle: "Kingo secondary Greater Houston HVAC service area map",
  mapDescription:
    "A stylized regional map showing Kingo secondary coverage from Galveston and Richmond through Houston and north beyond Cleveland to Shepherd.",
  polygon: "185,45 650,45 770,115 785,575 650,855 250,850 65,705 20,360",
  pin: { x: 585, y: 215 },
  mapCities: [
    { name: "Shepherd", x: 610, y: 75, anchor: "middle" },
    { name: "Cleveland", x: 610, y: 145, anchor: "middle" },
    { name: "Splendora", x: 585, y: 350, anchor: "middle" },
    { name: "Conroe", x: 385, y: 250, anchor: "middle" },
    { name: "The Woodlands", x: 330, y: 325, anchor: "middle" },
    { name: "Spring", x: 400, y: 425, anchor: "middle" },
    { name: "Humble", x: 575, y: 455, anchor: "middle" },
    { name: "Kingwood", x: 620, y: 510, anchor: "middle" },
    { name: "Houston", x: 435, y: 595, anchor: "middle" },
    { name: "Katy", x: 220, y: 520, anchor: "middle" },
    { name: "Richmond", x: 150, y: 705, anchor: "middle" },
    { name: "Sugar Land", x: 300, y: 745, anchor: "middle" },
    { name: "Missouri City", x: 365, y: 805, anchor: "middle" },
    { name: "Pearland", x: 510, y: 770, anchor: "middle" },
    { name: "Pasadena", x: 585, y: 660, anchor: "middle" },
    { name: "Baytown", x: 745, y: 570, anchor: "middle" },
    { name: "Galveston", x: 640, y: 860, anchor: "middle" },
    { name: "Liberty", x: 810, y: 380, context: true, anchor: "middle" },
  ],
};

function RouteShield({
  x,
  y,
  label,
  interstate = false,
}: {
  x: number;
  y: number;
  label: string;
  interstate?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y})`} aria-hidden="true">
      {interstate ? (
        <>
          <path
            d="M-24 -19 H24 L20 17 Q0 34 -20 17 Z"
            className={styles.interstateShield}
          />
          <path d="M-23 -18 H23 V-6 H-23 Z" className={styles.interstateTop} />
        </>
      ) : (
        <rect
          x="-23"
          y="-18"
          width="46"
          height="36"
          rx="18"
          className={styles.routeShield}
        />
      )}
      <text y="7" textAnchor="middle" className={styles.routeText}>
        {label}
      </text>
    </g>
  );
}

function BrandPin({ x, y }: { x: number; y: number }) {
  return (
    <g transform={`translate(${x} ${y})`} aria-hidden="true">
      <path
        d="M0 70 C-20 39 -52 11 -52 -24 C-52 -65 -29 -88 0 -88 C29 -88 52 -65 52 -24 C52 11 20 39 0 70 Z"
        className={styles.pinBody}
      />
      <circle cy="-28" r="35" className={styles.pinCircle} />
      <text y="-15" textAnchor="middle" className={styles.pinLetter}>
        K
      </text>
    </g>
  );
}

function PrimaryRoads() {
  return (
    <g aria-hidden="true">
      <path d="M35 175 C245 170 500 210 865 120" className={styles.road} />
      <path d="M60 390 C280 360 520 410 855 360" className={styles.road} />
      <path d="M430 30 C440 240 455 510 450 885" className={styles.majorRoad} />
      <path d="M160 5 C165 300 120 570 110 890" className={styles.majorRoad} />
      <path d="M45 830 C270 790 560 800 875 835" className={styles.road} />
      <path d="M770 185 C690 360 690 560 810 760" className={styles.road} />
      <path d="M200 690 C380 600 555 610 745 680" className={styles.road} />
      <RouteShield x={454} y={515} label="69" interstate />
      <RouteShield x={112} y={650} label="45" interstate />
      <RouteShield x={250} y={382} label="242" />
      <RouteShield x={235} y={168} label="105" />
      <RouteShield x={795} y={400} label="146" />
      <RouteShield x={690} y={838} label="90" />
    </g>
  );
}

function SecondaryRoads() {
  return (
    <g aria-hidden="true">
      <path d="M310 15 C315 220 335 500 330 875" className={styles.majorRoad} />
      <path d="M560 10 C555 245 535 500 520 875" className={styles.majorRoad} />
      <path d="M20 590 C245 565 520 575 875 580" className={styles.majorRoad} />
      <path d="M120 470 C300 455 575 465 850 445" className={styles.road} />
      <path d="M70 700 C270 625 620 640 845 710" className={styles.road} />
      <path d="M180 230 C385 260 590 245 820 205" className={styles.road} />
      <ellipse cx="435" cy="590" rx="150" ry="105" className={styles.beltway} />
      <path d="M45 820 C310 770 610 805 865 845" className={styles.road} />
      <RouteShield x={320} y={205} label="45" interstate />
      <RouteShield x={535} y={385} label="69" interstate />
      <RouteShield x={115} y={590} label="10" interstate />
      <RouteShield x={685} y={582} label="10" interstate />
      <RouteShield x={435} y={490} label="610" />
    </g>
  );
}

function CoverageMap({ variant, config }: { variant: CoverageVariant; config: CoverageConfig }) {
  const titleId = `${variant}-map-title`;
  const descriptionId = `${variant}-map-description`;

  return (
    <div className={styles.mapWrap}>
      <svg
        className={styles.map}
        viewBox="0 0 900 900"
        role="img"
        aria-labelledby={`${titleId} ${descriptionId}`}
      >
        <title id={titleId}>{config.mapTitle}</title>
        <desc id={descriptionId}>{config.mapDescription}</desc>
        <defs>
          <pattern id={`${variant}-grid`} width="70" height="70" patternUnits="userSpaceOnUse">
            <path d="M70 0 H0 V70" className={styles.gridLine} />
          </pattern>
          <linearGradient id={`${variant}-water`} x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stopColor="#dceff2" />
            <stop offset="1" stopColor="#c8e4e9" />
          </linearGradient>
        </defs>

        <rect width="900" height="900" className={styles.mapBackground} />
        <rect width="900" height="900" fill={`url(#${variant}-grid)`} />
        <path
          d={
            variant === "primary"
              ? "M300 660 C350 600 430 610 485 660 C540 710 600 690 690 720 L690 900 H285 C250 820 245 735 300 660 Z"
              : "M540 610 C650 555 765 585 900 680 V900 H500 C480 795 485 675 540 610 Z"
          }
          fill={`url(#${variant}-water)`}
          opacity="0.9"
        />

        {variant === "primary" ? <PrimaryRoads /> : <SecondaryRoads />}

        <polygon points={config.polygon} className={styles.coveragePolygon} />

        {config.mapCities.map((city) => (
          <g key={city.name} className={city.context ? styles.contextCity : styles.mapCity}>
            <circle cx={city.x} cy={city.y} r="7" />
            <text
              x={city.x}
              y={city.y - 15}
              textAnchor={city.anchor ?? "middle"}
              className={styles.cityLabel}
            >
              {city.name}
            </text>
          </g>
        ))}

        <BrandPin x={config.pin.x} y={config.pin.y} />
      </svg>
    </div>
  );
}

export function ServiceAreaCoverage({
  variant,
  bookingUrl,
}: {
  variant: CoverageVariant;
  bookingUrl: string;
}) {
  const config = variant === "primary" ? primaryConfig : secondaryConfig;

  return (
    <div className={styles.visual}>
      <CoverageMap variant={variant} config={config} />

      <aside className={styles.panel} aria-label={`${config.title} summary`}>
        <Image
          className={styles.logo}
          src="/kingo-logo.webp"
          alt="Kingo Services Heating and Cooling"
          width={1150}
          height={404}
        />

        <div className={styles.divider} />
        <h3>{config.title}</h3>
        <p className={styles.subtitle}>{config.subtitle}</p>
        <div className={styles.divider} />

        <h4>{config.listTitle}</h4>
        <ul className={variant === "secondary" ? styles.cityListColumns : styles.cityList}>
          {config.cities.map((city) => (
            <li key={city}>
              <span aria-hidden="true">✓</span>
              {city}
            </li>
          ))}
        </ul>

        <div className={styles.divider} />
        <div className={variant === "secondary" ? styles.feeBoxAccent : styles.feeBox}>
          <div>
            <span>{config.feeLabel}</span>
            <small>Service address determines the applicable zone.</small>
          </div>
          <strong>{config.fee}</strong>
        </div>

        <p className={styles.mobileNote}>{config.note}</p>
        <a className={styles.panelCta} href={bookingUrl}>
          Book HVAC Service <span aria-hidden="true">→</span>
        </a>
      </aside>
    </div>
  );
}
