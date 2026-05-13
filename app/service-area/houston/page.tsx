import Link from "next/link";
import { PHONE_HREF, BOOKING_URL } from "@/app/cta-links";

const services = [
  "AC repair for Houston homes, residential properties, and local businesses.",
  "AC installation and replacement options for Houston-area comfort needs.",
  "Heating repair for cold-weather system problems.",
  "Heating installation for homes and local businesses.",
  "HVAC maintenance to help reduce surprise breakdowns.",
  "Commercial HVAC support for Houston-area business properties.",
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
            Houston HVAC Service Area
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            HVAC service for Houston homes, residential properties, and local businesses
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-700">
            Kingo Services Heating and Cooling supports Houston, Texas with practical heating
            and air conditioning service for homes, residential properties, and local commercial spaces.
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
          <h2 className="text-xl font-bold text-slate-950">Houston service intake</h2>
          <p className="mt-3 text-slate-700">
            For faster scheduling, provide the service address, nearby cross streets, or building,
            unit, gate, or access details when requesting service.
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
          Heating and cooling services in Houston
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          The goal is simple: identify the issue clearly, explain practical options, and help
          restore comfort without turning the service call into confusion.
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
          Need AC, heating, maintenance, commercial HVAC, or emergency help in Houston?
        </h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Call Kingo Services Heating and Cooling or request service online. Include the service
          address, nearby cross streets, or building, unit, gate, or access details so the call
          can be handled faster.
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
