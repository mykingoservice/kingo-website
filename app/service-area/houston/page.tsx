import type { Metadata } from "next";
import Link from "next/link";
import { PHONE_HREF, BOOKING_URL } from "@/app/cta-links";

export const metadata: Metadata = {
  title: "Houston HVAC Service | Kingo Services Heating and Cooling",
  description:
    "Kingo Services Heating and Cooling operates from Splendora, TX and serves Houston when scheduling and distance allow. Call for availability.",
};

const services = [
  "AC repair for Houston homes, residential properties, and local businesses.",
  "AC installation and replacement options for homes and local businesses.",
  "Heating repair for cold-weather system problems.",
  "Heating installation for homes and local businesses.",
  "HVAC maintenance to help reduce surprise breakdowns.",
  "Commercial HVAC support for business properties.",
  "Emergency HVAC intake for urgent heating and cooling issues.",
];

const intakeItems = [
  "Service address, nearby cross streets, or building, unit, gate, or access details.",
  "Whether the property is residential or commercial.",
  "What the system is doing right now.",
  "Whether the issue is urgent, no-cool, no-heat, or comfort-related.",
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <section className="grid gap-8 md:grid-cols-[1.3fr_0.7fr] md:items-center">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-700">
            Houston HVAC — Served by availability from Splendora
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            HVAC service for Houston homes and businesses — available from the Splendora corridor
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Kingo Services Heating and Cooling operates from Splendora, TX. Houston is served
            when scheduling, distance, and job type allow. Primary service focus is the
            Northeast Greater Houston corridor. Call to confirm availability for your location.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={PHONE_HREF}
              className="rounded-full bg-blue-700 px-6 py-3 text-center font-semibold text-white shadow-sm hover:bg-blue-800"
            >
              Call (832) 517-1464
            </a>
            <Link
              href={BOOKING_URL}
              className="rounded-full border border-slate-300 px-6 py-3 text-center font-semibold text-slate-950 hover:bg-slate-50"
            >
              Request HVAC Service
            </Link>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
          <h2 className="text-xl font-bold text-slate-950">Houston service intake — confirm availability</h2>
          <p className="mt-3 text-slate-700">
            For faster scheduling, provide the service address and confirm the location works
            for dispatch from the Splendora operating hub.
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
          Heating and cooling services available in Houston by scheduling
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Kingo operates from Splendora and extends service to Houston when distance, schedule,
          and job type are a fit. Call first to confirm availability for your area.
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
          Need HVAC service in Houston? Call to confirm availability from Splendora.
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Kingo Services Heating and Cooling operates from Splendora, TX and serves Houston
          when scheduling and distance allow. Include the service address so availability
          can be confirmed before scheduling.
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
