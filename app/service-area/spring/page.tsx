import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "@/app/cta-links";

const services = [
  "AC repair for Spring homes, residential properties, and nearby rural properties.",
  "AC installation and replacement options for aging or underperforming cooling systems.",
  "Heating repair for cold-weather comfort issues and system failures.",
  "Heating installation for homes and properties needing dependable heat.",
  "HVAC maintenance to help reduce breakdowns and catch problems early.",
  "Commercial HVAC support for Spring-area local businesses.",
  "Emergency HVAC intake for urgent no-cool, no-heat, or comfort-risk situations.",
];

const intakeItems = [
  "Service address, nearby cross streets, or rural property details.",
  "Whether the property is residential, commercial, or a nearby rural property.",
  "Main issue: no cooling, no heating, weak airflow, system not starting, leaking, or unusual noise.",
  "System type if known, including attic, closet, rooftop, package unit, or split system.",
  "Best callback number and preferred appointment window.",
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
            Spring HVAC service area
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
            Spring HVAC Service Area
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Kingo Services Heating and Cooling serves Spring, Texas homes, nearby rural
            properties, residential properties, and local businesses with practical heating and
            cooling service.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-semibold text-white hover:bg-slate-800"
            >
              Call (832) 517-1464
            </a>
            <Link
              href={BOOKING_URL}
              className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold text-slate-950 hover:bg-slate-50"
            >
              Start Service Request
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Spring service intake</h2>
          <p className="mt-3 text-slate-700">
            For faster scheduling, provide the service address, nearby cross streets, or rural
            property details when requesting service.
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
          Heating and cooling services in Spring
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Whether the call is for a home, rural property, residential property, or local business,
          the goal is to identify the issue clearly, explain the practical options, and restore
          comfort without confusion.
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
          Need AC, heating, maintenance, commercial HVAC, or emergency help in Spring?
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Call Kingo Services Heating and Cooling or request service online. Include the service
          address, nearby cross streets, or rural property details so the call can be handled faster.
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
            Start Service Request
          </Link>
        </div>
      </section>
    </main>
  );
}
