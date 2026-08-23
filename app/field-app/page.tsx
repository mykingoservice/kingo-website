const jobs = [
  { number: "#2345", customer: "John Smith", city: "Splendora", status: "Ready" },
  { number: "#2346", customer: "Maria Lopez", city: "New Caney", status: "Scheduled" },
];

const outdoorChecks = [
  "Condenser coil condition",
  "Compressor amperage",
  "Condenser fan motor amperage",
  "Run capacitor",
  "Contactor & electrical connections",
  "Operating / refrigerant performance",
];

const indoorChecks = [
  "Indoor equipment / evaporator condition",
  "Blower motor amperage",
  "Condensate drain line & drain pan",
  "Primary / secondary overflow protection",
  "Thermostat operation",
  "Filter condition",
  "Airflow & indoor air quality",
];

const stock = [
  { item: "45/5 MFD capacitor", qty: 4, status: "In truck" },
  { item: "Hard-start kit", qty: 2, status: "In truck" },
  { item: "Primary float switch", qty: 3, status: "In truck" },
  { item: "UV light", qty: 1, status: "In truck" },
];

export default function FieldAppPage() {
  return (
    <main className="min-h-screen bg-[#f7f4ef] text-[#17211f]">
      <header className="border-b border-black/10 bg-white px-4 py-4">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#0f5c5a]">Kingo Services</p>
            <h1 className="text-xl font-semibold">Field Protection App</h1>
          </div>
          <div className="rounded-full bg-[#e8f0ec] px-3 py-1 text-sm font-medium">Technician: Charlie</div>
        </div>
      </header>

      <div className="mx-auto grid max-w-5xl gap-5 px-4 py-5 lg:grid-cols-[1.35fr_0.65fr]">
        <section className="space-y-5">
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <div className="mb-4 flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0f5c5a]">ServiceM8 jobs</p>
                <h2 className="text-2xl font-semibold">Today</h2>
              </div>
              <button className="rounded-xl bg-[#17211f] px-4 py-2 text-sm font-semibold text-white">Sync jobs</button>
            </div>
            <div className="space-y-3">
              {jobs.map((job) => (
                <div key={job.number} className="flex items-center justify-between rounded-xl border border-black/10 p-4">
                  <div>
                    <p className="font-semibold">{job.number} · {job.customer}</p>
                    <p className="text-sm text-black/60">{job.city}</p>
                  </div>
                  <button className="rounded-lg bg-[#0f5c5a] px-3 py-2 text-sm font-semibold text-white">Start</button>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0f5c5a]">Summer system check</p>
            <h2 className="mb-4 text-2xl font-semibold">Inspection checklist</h2>
            <div className="grid gap-5 md:grid-cols-2">
              <Checklist title="Outdoor / condenser" items={outdoorChecks} />
              <Checklist title="Indoor equipment" items={indoorChecks} />
            </div>
          </div>
        </section>

        <aside className="space-y-5">
          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0f5c5a]">Truck inventory</p>
            <h2 className="mb-4 text-xl font-semibold">Available to sell today</h2>
            <div className="space-y-3">
              {stock.map((part) => (
                <div key={part.item} className="flex items-center justify-between border-b border-black/10 pb-3 last:border-0 last:pb-0">
                  <div>
                    <p className="text-sm font-semibold">{part.item}</p>
                    <p className="text-xs text-black/55">{part.status}</p>
                  </div>
                  <span className="rounded-full bg-[#e8f0ec] px-2.5 py-1 text-sm font-semibold">{part.qty}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-black/10 bg-[#17211f] p-5 text-white shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-white/65">Recommendation rule</p>
            <h2 className="mt-1 text-xl font-semibold">Evidence first. Stock second.</h2>
            <p className="mt-3 text-sm leading-6 text-white/75">Only present a recommendation when the inspection finding supports it and the required item is available. Out-of-stock work is marked schedule/order instead of same-day install.</p>
          </div>

          <div className="rounded-2xl border border-black/10 bg-white p-5 shadow-sm">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#0f5c5a]">V1 modules</p>
            <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
              {[
                "ServiceM8 Jobs",
                "System Check",
                "Price Book",
                "Inventory",
                "Membership",
                "Protection",
                "Stripe",
                "Reports",
              ].map((item) => (
                <div key={item} className="rounded-lg bg-[#f7f4ef] px-3 py-2 font-medium">{item}</div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </main>
  );
}

function Checklist({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="mb-3 font-semibold">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <label key={item} className="flex items-start gap-3 rounded-lg border border-black/10 p-3 text-sm">
            <input type="checkbox" className="mt-0.5 h-4 w-4" />
            <span>{item}</span>
          </label>
        ))}
      </div>
    </div>
  );
}
