import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "@/app/cta-links";

const canonicalPath = "/service-area/pearland/";
const jobPinPath =
  "/completed-job-pins/job-2333-pearland-carrier-capacitor-replacement/";

export const metadata: Metadata = {
  title: "Pearland AC Repair and HVAC Service",
  description:
    "Kingo Services provides selected AC repair, heating, maintenance, and HVAC service calls in Pearland, Texas when scheduling, distance, and job fit allow.",
  alternates: {
    canonical: canonicalPath,
  },
  openGraph: {
    title: "Pearland AC Repair and HVAC Service",
    description:
      "View Kingo Services availability and documented HVAC field work in Pearland, Texas.",
    type: "website",
    url: canonicalPath,
  },
};

const services = [
  "AC diagnostics and repair for no-cool, weak-cooling, and system-starting problems.",
  "Capacitor, contactor, condenser fan motor, drain, thermostat, and electrical component diagnosis.",
  "AC installation and replacement planning for aging or underperforming systems.",
  "Heating repair and seasonal heating checks.",
  "HVAC maintenance to identify developing problems and confirm system operation.",
  "Light commercial HVAC support when the equipment, schedule, and location fit the call.",
];

const intakeItems = [
  "Pearland service address, ZIP code, gate details, and access notes.",
  "Whether the property is residential or light commercial.",
  "Main issue: no cooling, weak airflow, system not starting, leaking, unusual noise, or another concern.",
  "Equipment location and system type if known.",
  "Best callback number and preferred appointment window.",
];

const serviceLinks = [
  { href: "/services/ac-repair/", label: "AC Repair" },
  { href: "/services/hvac-maintenance/", label: "HVAC Maintenance" },
  { href: "/services/ac-installation/", label: "AC Installation" },
  { href: "/services/heating-repair/", label: "Heating Repair" },
  { href: "/contact/", label: "Contact Kingo" },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Pearland HVAC service area
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Pearland AC Repair and HVAC Service
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Kingo Services Heating and Cooling operates from Splendora and
            accepts selected Pearland service calls when scheduling, distance,
            job type, and current call volume make the trip practical.
          </p>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-700">
            The goal is straightforward diagnosis, clear repair options, and
            documented field proof. Kingo is based in Splendora, and Pearland
            calls are scheduled only after travel availability is confirmed.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white hover:bg-slate-800"
            >
              Call (832) 517-1464
            </a>
            <a
              href={BOOKING_URL}
              className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold text-slate-950 hover:bg-slate-50"
            >
              Start Service Request
            </a>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">
            Pearland service intake
          </h2>
          <p className="mt-3 text-slate-700">
            Provide the full location and equipment details so Kingo can confirm
            travel availability before the appointment is scheduled.
          </p>
          <ul className="mt-5 space-y-3 text-sm text-slate-700">
            {intakeItems.map((item) => (
              <li key={item} className="rounded-2xl bg-white p-4 shadow-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          Heating and cooling services available in Pearland
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Service availability is confirmed before dispatch because Pearland is
          outside Kingo&apos;s closest Northeast Greater Houston operating
          corridor.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div
              key={service}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <p className="font-medium text-slate-800">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl border border-slate-200 bg-slate-50 p-8">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
          Real Pearland job proof
        </p>
        <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-950">
          Carrier AC capacitor replacement — ServiceM8 Job #2333
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          On July 21, 2026, Kingo Services completed a Carrier condenser
          capacitor replacement in Pearland ZIP code 77581. The failed capacitor
          was replaced with a Titan HD 45/5 µF capacitor, and condenser fan and
          compressor amperage were checked after the repair.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <Link
            href={jobPinPath}
            className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white hover:bg-slate-800"
          >
            View Completed Job Pin™
          </Link>
          <Link
            href="/hvac-how-to/ac-capacitor-replacement-pearland-texas/"
            className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold text-slate-950 hover:bg-white"
          >
            Read the HVAC Blog
          </Link>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-3xl font-bold tracking-tight text-slate-950">
          Related HVAC pages
        </h2>
        <div className="mt-6 flex flex-wrap gap-3">
          {serviceLinks.map((link) => (
            <Link
              href={link.href}
              key={link.href}
              className="rounded-full border border-slate-300 px-5 py-2.5 font-semibold text-slate-950 hover:bg-slate-50"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-slate-950 p-8 text-white">
        <h2 className="text-3xl font-bold tracking-tight">
          Need AC or HVAC service in Pearland?
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Call Kingo Services or submit a service request with the full address
          and problem details. Kingo will confirm availability, travel, and any
          applicable dispatch charge before the appointment is finalized.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={PHONE_HREF}
            className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 hover:bg-slate-100"
          >
            Call (832) 517-1464
          </a>
          <a
            href={BOOKING_URL}
            className="rounded-full border border-white/30 px-6 py-3 text-center font-semibold text-white hover:bg-white/10"
          >
            Start Service Request
          </a>
        </div>
      </section>
    </main>
  );
}
