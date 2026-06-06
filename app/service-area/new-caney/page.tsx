import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "@/app/cta-links";

const services = [
  "Emergency HVAC intake for urgent no-cool, no-heat, or comfort-risk situations.",
  "AC repair for homes, residential properties, and nearby local businesses.",
  "Heating repair for cold-weather comfort issues and system failures.",
  "HVAC maintenance to help reduce breakdowns and catch problems early.",
  "AC installation and replacement planning for aging or underperforming systems.",
  "Light commercial HVAC support for nearby businesses.",
];

const intakeItems = [
  "Service address and nearby cross streets.",
  "Whether the property is residential or commercial.",
  "Main issue: no cooling, no heating, weak airflow, system not starting, leaking, or unusual noise.",
  "System type if known, including attic, closet, package unit, rooftop unit, or split system.",
  "Best callback number and preferred appointment window.",
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            New Caney HVAC service area
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Emergency HVAC Service in New Caney, TX
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Kingo Services Heating and Cooling serves New Caney, Texas with emergency HVAC intake, AC repair, heating repair, maintenance, and practical comfort planning from the Splendora operating hub.
          </p>
          <p className="mt-4 max-w-3xl text-slate-700">
            New Caney sits directly south of the Splendora operating hub and is part of Kingo's primary Northeast Greater Houston service corridor.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white hover:bg-slate-800"
            >
              Call (832) 517-1464
            </a>
            <Link
              href="/emergency-hvac"
              className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold text-slate-950 hover:bg-slate-50"
            >
              Emergency HVAC
            </Link>
            <Link
              href={BOOKING_URL}
              className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold text-slate-950 hover:bg-slate-50"
            >
              Book Online
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">New Caney service intake</h2>
          <p className="mt-3 text-slate-700">
            For faster scheduling, provide the service address, nearby cross streets, system issue, and best callback number.
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
          HVAC services in New Caney
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Kingo focuses on clear diagnostics, practical repair options, emergency HVAC intake when available, and honest communication before the appointment is confirmed.
        </p>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {services.map((service) => (
            <div key={service} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <p className="font-medium text-slate-800">{service}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-slate-950 p-8 text-white">
        <h2 className="text-3xl font-bold tracking-tight">
          Need emergency HVAC, AC repair, or heating service in New Caney?
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Call Kingo Services Heating and Cooling or request service online. Emergency and after-hours availability depends on location, schedule, and current call volume. Any emergency or after-hours dispatch charges are explained before the appointment is confirmed.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={PHONE_HREF}
            className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 hover:bg-slate-100"
          >
            Call (832) 517-1464
          </a>
          <Link
            href={BOOKING_URL}
            className="rounded-full border border-white/30 px-6 py-3 text-center font-semibold text-white hover:bg-white/10"
          >
            Book Online
          </Link>
        </div>
      </section>
    </main>
  );
}
