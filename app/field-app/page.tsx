"use client";

import { useMemo, useState } from "react";

type ModuleStatus = "working" | "prototype" | "not-connected";
type Screen =
  | "dispatch"
  | "jobs"
  | "clients"
  | "door-to-door"
  | "inspections"
  | "troubleshooting"
  | "materials"
  | "inventory"
  | "quotes"
  | "invoices"
  | "payments"
  | "memberships"
  | "reports"
  | "ai-help"
  | "account"
  | "settings";

type InventoryItem = {
  id: string;
  name: string;
  category: string;
  quantity: number;
  cost: number | null;
  price: number | null;
  verified: boolean;
  reorderAt: number;
};

const statusMeta: Record<ModuleStatus, { label: string; classes: string }> = {
  working: {
    label: "Working UI",
    classes: "border-emerald-200 bg-emerald-50 text-emerald-700",
  },
  prototype: {
    label: "Prototype",
    classes: "border-sky-200 bg-sky-50 text-sky-700",
  },
  "not-connected": {
    label: "Not connected",
    classes: "border-amber-200 bg-amber-50 text-amber-800",
  },
};

const navigation: Array<{
  group: string;
  items: Array<{ id: Screen; label: string; short: string; status: ModuleStatus }>;
}> = [
  {
    group: "Operations",
    items: [
      { id: "dispatch", label: "Dispatch Board", short: "D", status: "prototype" },
      { id: "jobs", label: "Jobs", short: "J", status: "prototype" },
      { id: "clients", label: "Clients", short: "C", status: "not-connected" },
    ],
  },
  {
    group: "Kingo Field",
    items: [
      { id: "door-to-door", label: "Door-to-Door", short: "K", status: "prototype" },
      { id: "inspections", label: "Maintenance SOP", short: "M", status: "prototype" },
      { id: "troubleshooting", label: "Troubleshooting", short: "T", status: "prototype" },
      { id: "ai-help", label: "Ask Kingo AI", short: "AI", status: "not-connected" },
    ],
  },
  {
    group: "Sales & Stock",
    items: [
      { id: "materials", label: "Materials & Services", short: "$", status: "prototype" },
      { id: "inventory", label: "Inventory", short: "I", status: "working" },
      { id: "quotes", label: "Quotes", short: "Q", status: "not-connected" },
      { id: "invoices", label: "Invoices", short: "N", status: "not-connected" },
      { id: "payments", label: "Payments", short: "P", status: "not-connected" },
      { id: "memberships", label: "Memberships", short: "R", status: "not-connected" },
      { id: "reports", label: "Reports", short: "R", status: "prototype" },
    ],
  },
];

const jobs = [
  {
    id: "job-2345",
    number: "#2345",
    customer: "John Smith",
    city: "Splendora",
    time: "9:00 AM",
    type: "Preventive maintenance",
    status: "Today",
    source: "Demo data",
  },
  {
    id: "job-2346",
    number: "#2346",
    customer: "Maria Lopez",
    city: "New Caney",
    time: "11:30 AM",
    type: "No-cool service call",
    status: "Today",
    source: "Demo data",
  },
  {
    id: "lead-001",
    number: "Lead #001",
    customer: "Door-to-door prospect",
    city: "Porter",
    time: "Unscheduled",
    type: "Free preventive inspection",
    status: "Unscheduled",
    source: "Demo data",
  },
];

const inspectionSteps = [
  "Condenser coil condition",
  "Electrical safety and contactor",
  "Compressor amperage and starting condition",
  "Condenser fan motor amperage",
  "Run capacitor test",
  "Surge protection",
  "Refrigerant performance and PT calculations",
  "Indoor equipment and evaporator condition",
  "Blower, airflow and filtration",
  "Drain, pan and overflow protection",
  "Thermostat and indoor air quality",
];

const inventorySeed: InventoryItem[] = [
  { id: "cap-35-5", name: "35/5 MFD capacitor", category: "Capacitors", quantity: 1, cost: 0, price: null, verified: false, reorderAt: 1 },
  { id: "cap-45-5", name: "45/5 MFD capacitor", category: "Capacitors", quantity: 1, cost: 0, price: null, verified: false, reorderAt: 1 },
  { id: "cap-50-5", name: "50/5 MFD capacitor", category: "Capacitors", quantity: 1, cost: 0, price: null, verified: false, reorderAt: 1 },
  { id: "hard-small", name: "Small hard-start kit", category: "Compressor protection", quantity: 1, cost: null, price: null, verified: false, reorderAt: 1 },
  { id: "hard-large", name: "Large hard-start kit", category: "Compressor protection", quantity: 1, cost: null, price: null, verified: false, reorderAt: 1 },
  { id: "contactor", name: "2-pole contactor", category: "Electrical", quantity: 1, cost: 0, price: null, verified: false, reorderAt: 1 },
  { id: "transformer", name: "24V transformer", category: "Electrical", quantity: 1, cost: 0, price: null, verified: false, reorderAt: 1 },
  { id: "fan-motor", name: "Universal condenser fan motor", category: "Motors", quantity: 1, cost: null, price: null, verified: false, reorderAt: 1 },
  { id: "surge", name: "HVAC surge protector", category: "Protection", quantity: 1, cost: null, price: null, verified: false, reorderAt: 1 },
  { id: "float-primary", name: "Primary float switch", category: "Drain protection", quantity: 1, cost: null, price: null, verified: false, reorderAt: 1 },
  { id: "float-secondary", name: "Secondary overflow switch", category: "Drain protection", quantity: 1, cost: null, price: null, verified: false, reorderAt: 1 },
  { id: "drain-kit", name: "Drain cleanout kit", category: "Drain protection", quantity: 1, cost: null, price: null, verified: false, reorderAt: 1 },
  { id: "algae-tabs", name: "Drain pan algae tablets", category: "Drain protection", quantity: 1, cost: null, price: null, verified: false, reorderAt: 1 },
  { id: "thermostat", name: "Universal thermostat", category: "Controls", quantity: 1, cost: null, price: null, verified: false, reorderAt: 1 },
  { id: "uv-light", name: "UV light", category: "Indoor air quality", quantity: 0, cost: null, price: null, verified: true, reorderAt: 1 },
];

export default function FieldAppPage() {
  const [activeScreen, setActiveScreen] = useState<Screen>("dispatch");
  const [operator, setOperator] = useState<"Jesse" | "Charlie">("Jesse");
  const [selectedJobId, setSelectedJobId] = useState(jobs[0].id);
  const [inventory, setInventory] = useState(inventorySeed);
  const [boardView, setBoardView] = useState<"schedule" | "map" | "list">("schedule");

  const selectedJob = jobs.find((job) => job.id === selectedJobId) ?? jobs[0];
  const buyCount = inventory.filter((item) => item.quantity <= item.reorderAt).length;

  return (
    <main className="min-h-screen bg-[#edf1f0] text-[#17211f]">
      <div className="flex min-h-screen">
        <DesktopSidebar activeScreen={activeScreen} onNavigate={setActiveScreen} buyCount={buyCount} />

        <div className="min-w-0 flex-1 pb-20 lg:pb-0">
          <TopBar
            activeScreen={activeScreen}
            operator={operator}
            setOperator={setOperator}
            onOpenAccount={() => setActiveScreen("account")}
          />

          <div className="p-3 sm:p-5 lg:p-6">
            {activeScreen === "dispatch" && (
              <DispatchBoard
                boardView={boardView}
                setBoardView={setBoardView}
                selectedJobId={selectedJobId}
                setSelectedJobId={setSelectedJobId}
                selectedJob={selectedJob}
                onNavigate={setActiveScreen}
              />
            )}
            {activeScreen === "inventory" && (
              <InventoryView inventory={inventory} setInventory={setInventory} />
            )}
            {activeScreen === "materials" && <MaterialsView inventory={inventory} />}
            {activeScreen === "inspections" && <InspectionView />}
            {activeScreen === "door-to-door" && <DoorToDoorView onStartInspection={() => setActiveScreen("inspections")} />}
            {activeScreen === "troubleshooting" && <TroubleshootingView />}
            {activeScreen === "reports" && <ReportsView buyCount={buyCount} />}
            {activeScreen === "account" && <AccountView onOpenSettings={() => setActiveScreen("settings")} />}
            {activeScreen === "settings" && <SettingsView onNavigate={setActiveScreen} />}
            {activeScreen === "ai-help" && (
              <AiHelpView jobNumber={selectedJob.number} />
            )}
            {![
              "dispatch",
              "inventory",
              "materials",
              "inspections",
              "door-to-door",
              "troubleshooting",
              "reports",
              "account",
              "settings",
              "ai-help",
            ].includes(activeScreen) && (
              <ModulePlaceholder screen={activeScreen} onNavigate={setActiveScreen} />
            )}
          </div>
        </div>
      </div>

      <MobileNavigation activeScreen={activeScreen} onNavigate={setActiveScreen} />
    </main>
  );
}

function DesktopSidebar({
  activeScreen,
  onNavigate,
  buyCount,
}: {
  activeScreen: Screen;
  onNavigate: (screen: Screen) => void;
  buyCount: number;
}) {
  return (
    <aside className="sticky top-0 hidden h-screen w-[246px] shrink-0 flex-col bg-[#172d2b] text-white lg:flex">
      <div className="border-b border-white/10 px-5 py-5">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#91c9c4]">Kingo Services</p>
        <h1 className="mt-1 text-lg font-semibold">Kingo Field OS</h1>
        <p className="mt-1 text-xs text-white/50">ServiceM8-style operating shell</p>
      </div>

      <nav className="flex-1 overflow-y-auto px-3 py-4">
        {navigation.map((group) => (
          <div key={group.group} className="mb-5">
            <p className="mb-2 px-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/35">{group.group}</p>
            <div className="space-y-1">
              {group.items.map((item) => {
                const active = activeScreen === item.id;
                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => onNavigate(item.id)}
                    className={`flex w-full items-center gap-3 rounded-lg px-2.5 py-2 text-left text-sm transition ${
                      active ? "bg-white text-[#17211f] shadow-sm" : "text-white/78 hover:bg-white/8 hover:text-white"
                    }`}
                  >
                    <span className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-md text-[10px] font-bold ${active ? "bg-[#e8f0ec] text-[#0f5c5a]" : "bg-white/10 text-white/70"}`}>
                      {item.short}
                    </span>
                    <span className="min-w-0 flex-1 truncate font-medium">{item.label}</span>
                    {item.id === "inventory" && buyCount > 0 ? (
                      <span className="rounded-full bg-[#c84a2b] px-1.5 py-0.5 text-[10px] font-bold text-white">{buyCount}</span>
                    ) : item.status === "not-connected" ? (
                      <span className="h-2 w-2 rounded-full bg-amber-400" title="Not connected" />
                    ) : null}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </nav>

      <div className="border-t border-white/10 p-3">
        <button
          type="button"
          onClick={() => onNavigate("account")}
          className={`flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left text-sm ${activeScreen === "account" || activeScreen === "settings" ? "bg-white text-[#17211f]" : "text-white/75 hover:bg-white/8"}`}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0f5c5a] text-xs font-bold text-white">K</span>
          <span className="flex-1">
            <span className="block font-semibold">Account</span>
            <span className="block text-[11px] opacity-60">Settings and connections</span>
          </span>
        </button>
      </div>
    </aside>
  );
}

function TopBar({
  activeScreen,
  operator,
  setOperator,
  onOpenAccount,
}: {
  activeScreen: Screen;
  operator: "Jesse" | "Charlie";
  setOperator: (operator: "Jesse" | "Charlie") => void;
  onOpenAccount: () => void;
}) {
  const label = navigation.flatMap((group) => group.items).find((item) => item.id === activeScreen)?.label ?? (activeScreen === "settings" ? "Settings" : "Account");

  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/95 backdrop-blur">
      <div className="flex h-16 items-center gap-3 px-3 sm:px-5 lg:px-6">
        <div className="min-w-0 lg:w-52">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0f5c5a] lg:hidden">Kingo Field OS</p>
          <h2 className="truncate text-base font-semibold sm:text-lg">{label}</h2>
        </div>

        <div className="hidden min-w-0 flex-1 md:block">
          <div className="mx-auto flex max-w-xl items-center rounded-lg border border-black/10 bg-[#f7f8f7] px-3 py-2">
            <span className="mr-2 text-black/35">⌕</span>
            <input
              aria-label="Search jobs and customers"
              className="w-full bg-transparent text-sm outline-none placeholder:text-black/35"
              placeholder="Search job number, client, address or material"
            />
          </div>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <label className="hidden items-center gap-2 rounded-lg border border-black/10 bg-white px-2 py-1.5 text-xs font-semibold sm:flex">
            <span className="text-black/45">User</span>
            <select
              value={operator}
              onChange={(event) => setOperator(event.target.value as "Jesse" | "Charlie")}
              className="bg-transparent pr-1 outline-none"
            >
              <option>Jesse</option>
              <option>Charlie</option>
            </select>
          </label>
          <button type="button" className="rounded-lg bg-[#0f5c5a] px-3 py-2 text-xs font-semibold text-white shadow-sm sm:px-4 sm:text-sm">
            + New Job
          </button>
          <button type="button" onClick={onOpenAccount} className="flex h-9 w-9 items-center justify-center rounded-full border border-black/10 bg-[#e8f0ec] text-xs font-bold text-[#0f5c5a]">
            K
          </button>
        </div>
      </div>
    </header>
  );
}

function DispatchBoard({
  boardView,
  setBoardView,
  selectedJobId,
  setSelectedJobId,
  selectedJob,
  onNavigate,
}: {
  boardView: "schedule" | "map" | "list";
  setBoardView: (view: "schedule" | "map" | "list") => void;
  selectedJobId: string;
  setSelectedJobId: (id: string) => void;
  selectedJob: (typeof jobs)[number];
  onNavigate: (screen: Screen) => void;
}) {
  return (
    <div className="space-y-4">
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-5">
        <Metric title="Today’s sales" value="$0" note="Real total after checkout" />
        <Metric title="Jobs" value="2" note="Demo schedule" />
        <Metric title="Inspections" value="0" note="Completed today" />
        <Metric title="Memberships" value="0" note="New today" />
        <Metric title="Door knocks" value="0" note="Conversations: 0" />
      </section>

      <section className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
        <div className="flex flex-wrap items-center gap-3 border-b border-black/10 px-4 py-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#0f5c5a]">Central workspace</p>
            <h3 className="text-lg font-semibold">Dispatch Board</h3>
          </div>
          <div className="ml-auto flex rounded-lg bg-[#edf1f0] p-1 text-xs font-semibold">
            {(["schedule", "map", "list"] as const).map((view) => (
              <button
                key={view}
                type="button"
                onClick={() => setBoardView(view)}
                className={`rounded-md px-3 py-1.5 capitalize ${boardView === view ? "bg-white text-[#0f5c5a] shadow-sm" : "text-black/50"}`}
              >
                {view}
              </button>
            ))}
          </div>
        </div>

        {boardView === "schedule" && (
          <div className="grid min-h-[520px] xl:grid-cols-[minmax(0,1fr)_370px]">
            <div className="overflow-x-auto bg-[#f4f6f5] p-3 sm:p-4">
              <div className="grid min-w-[720px] grid-cols-3 gap-3">
                <JobColumn title="Unscheduled" count={1}>
                  {jobs.filter((job) => job.status === "Unscheduled").map((job) => (
                    <JobCard key={job.id} job={job} selected={selectedJobId === job.id} onSelect={() => setSelectedJobId(job.id)} />
                  ))}
                </JobColumn>
                <JobColumn title="Today" count={2}>
                  {jobs.filter((job) => job.status === "Today").map((job) => (
                    <JobCard key={job.id} job={job} selected={selectedJobId === job.id} onSelect={() => setSelectedJobId(job.id)} />
                  ))}
                </JobColumn>
                <JobColumn title="Completed" count={0}>
                  <div className="rounded-lg border border-dashed border-black/15 bg-white/60 p-5 text-center text-xs text-black/40">Completed jobs will appear here.</div>
                </JobColumn>
              </div>
            </div>

            <JobDetailPanel job={selectedJob} onNavigate={onNavigate} />
          </div>
        )}

        {boardView === "map" && (
          <div className="flex min-h-[520px] items-center justify-center bg-[linear-gradient(135deg,#e8f0ec_25%,#f7f4ef_25%,#f7f4ef_50%,#e8f0ec_50%,#e8f0ec_75%,#f7f4ef_75%)] bg-[length:32px_32px] p-6">
            <div className="max-w-md rounded-xl border border-amber-200 bg-white p-6 text-center shadow-sm">
              <StatusBadge status="not-connected" />
              <h3 className="mt-3 text-xl font-semibold">Dispatch map placeholder</h3>
              <p className="mt-2 text-sm leading-6 text-black/55">The map, technician location and route layer are visible in the shell but are intentionally not connected yet.</p>
            </div>
          </div>
        )}

        {boardView === "list" && (
          <div className="overflow-x-auto p-4">
            <table className="w-full min-w-[720px] text-left text-sm">
              <thead className="border-b border-black/10 text-xs uppercase tracking-wide text-black/45">
                <tr><th className="pb-3">Job</th><th className="pb-3">Client</th><th className="pb-3">Type</th><th className="pb-3">Time</th><th className="pb-3">Status</th></tr>
              </thead>
              <tbody>
                {jobs.map((job) => (
                  <tr key={job.id} className="border-b border-black/8 last:border-0">
                    <td className="py-4 font-semibold text-[#0f5c5a]">{job.number}</td>
                    <td className="py-4">{job.customer}<span className="block text-xs text-black/45">{job.city}</span></td>
                    <td className="py-4">{job.type}</td>
                    <td className="py-4">{job.time}</td>
                    <td className="py-4"><span className="rounded-full bg-[#e8f0ec] px-2.5 py-1 text-xs font-semibold">{job.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

function JobDetailPanel({ job, onNavigate }: { job: (typeof jobs)[number]; onNavigate: (screen: Screen) => void }) {
  const tabs = ["Overview", "Diary", "Photos", "Billing", "Checklist"];
  const [tab, setTab] = useState("Overview");

  return (
    <aside className="border-l border-black/10 bg-white">
      <div className="border-b border-black/10 p-4">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs font-bold text-[#0f5c5a]">{job.number}</p>
            <h3 className="mt-1 text-xl font-semibold">{job.customer}</h3>
            <p className="mt-1 text-sm text-black/50">{job.city} · {job.time}</p>
          </div>
          <span className="rounded-full bg-amber-50 px-2.5 py-1 text-[10px] font-bold text-amber-700">{job.source}</span>
        </div>
        <div className="mt-4 flex gap-2">
          <button type="button" onClick={() => onNavigate(job.type.includes("No-cool") ? "troubleshooting" : "inspections")} className="flex-1 rounded-lg bg-[#0f5c5a] px-3 py-2 text-sm font-semibold text-white">Start workflow</button>
          <button type="button" className="rounded-lg border border-black/10 px-3 py-2 text-sm font-semibold">•••</button>
        </div>
      </div>

      <div className="flex overflow-x-auto border-b border-black/10 px-2">
        {tabs.map((item) => (
          <button key={item} type="button" onClick={() => setTab(item)} className={`whitespace-nowrap border-b-2 px-3 py-3 text-xs font-semibold ${tab === item ? "border-[#0f5c5a] text-[#0f5c5a]" : "border-transparent text-black/45"}`}>{item}</button>
        ))}
      </div>

      <div className="p-4">
        {tab === "Overview" ? (
          <div className="space-y-4 text-sm">
            <DetailRow label="Job type" value={job.type} />
            <DetailRow label="Assigned to" value="Jesse + Charlie" />
            <DetailRow label="ServiceM8" value="Not connected" warning />
            <DetailRow label="Equipment" value="Not entered" warning />
            <div className="rounded-lg bg-[#f7f4ef] p-3">
              <p className="font-semibold">Next action</p>
              <p className="mt-1 text-black/55">Open the guided SOP, record measurements and add approved corrective items to the job.</p>
            </div>
          </div>
        ) : (
          <div className="rounded-lg border border-dashed border-black/15 bg-[#f7f8f7] p-5 text-center">
            <StatusBadge status="not-connected" />
            <p className="mt-3 text-sm font-semibold">{tab} shell is ready.</p>
            <p className="mt-1 text-xs leading-5 text-black/45">The screen is represented now so we can connect it later without changing the navigation you learn.</p>
          </div>
        )}
      </div>
    </aside>
  );
}

function InventoryView({ inventory, setInventory }: { inventory: InventoryItem[]; setInventory: (items: InventoryItem[]) => void }) {
  const [filter, setFilter] = useState<"all" | "buy" | "unverified">("all");
  const visible = inventory.filter((item) => filter === "all" || (filter === "buy" ? item.quantity <= item.reorderAt : !item.verified));

  const updateQuantity = (id: string, quantity: number) => {
    setInventory(inventory.map((item) => item.id === id ? { ...item, quantity: Math.max(0, quantity) } : item));
  };

  const verifyItem = (id: string) => {
    setInventory(inventory.map((item) => item.id === id ? { ...item, verified: true } : item));
  };

  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Stock control" title="Truck inventory" description="Counts are editable now. Every item except the UV light begins as assumed stock and must be physically verified." action="+ Add item" />

      <section className="grid gap-3 sm:grid-cols-3">
        <Metric title="Stocked items" value={String(inventory.filter((item) => item.quantity > 0).length)} note="Includes assumed stock" />
        <Metric title="Need to buy" value={String(inventory.filter((item) => item.quantity <= item.reorderAt).length)} note="At or below reorder level" alert />
        <Metric title="Needs physical count" value={String(inventory.filter((item) => !item.verified).length)} note="Verify in the car" />
      </section>

      <section className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
        <div className="flex flex-wrap items-center gap-2 border-b border-black/10 p-3">
          {(["all", "buy", "unverified"] as const).map((item) => (
            <button key={item} type="button" onClick={() => setFilter(item)} className={`rounded-lg px-3 py-2 text-xs font-semibold capitalize ${filter === item ? "bg-[#0f5c5a] text-white" : "bg-[#edf1f0] text-black/55"}`}>{item === "buy" ? "Need to buy" : item}</button>
          ))}
          <p className="ml-auto text-xs text-black/40">Changes are local-only until the database is connected.</p>
        </div>

        <div className="divide-y divide-black/8">
          {visible.map((item) => {
            const low = item.quantity <= item.reorderAt;
            return (
              <div key={item.id} className="grid gap-3 p-4 md:grid-cols-[minmax(0,1fr)_190px_160px] md:items-center">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <p className="font-semibold">{item.name}</p>
                    {low && <span className="rounded-full bg-[#fff0ec] px-2 py-0.5 text-[10px] font-bold text-[#c84a2b]">BUY</span>}
                    {!item.verified && <span className="rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-bold text-amber-700">Needs count</span>}
                  </div>
                  <p className="mt-1 text-xs text-black/45">{item.category} · Cost {item.cost === null ? "unknown" : `$${item.cost.toFixed(2)}`} · Selling price {item.price === null ? "not set" : `$${item.price.toFixed(2)}`}</p>
                </div>

                <div className="flex items-center justify-start gap-2 md:justify-center">
                  <button type="button" onClick={() => updateQuantity(item.id, item.quantity - 1)} className="h-9 w-9 rounded-lg border border-black/10 bg-white text-lg font-semibold">−</button>
                  <input
                    aria-label={`${item.name} quantity`}
                    type="number"
                    min="0"
                    value={item.quantity}
                    onChange={(event) => updateQuantity(item.id, Number(event.target.value) || 0)}
                    className="h-9 w-16 rounded-lg border border-black/10 text-center font-bold outline-none focus:border-[#0f5c5a]"
                  />
                  <button type="button" onClick={() => updateQuantity(item.id, item.quantity + 1)} className="h-9 w-9 rounded-lg border border-black/10 bg-white text-lg font-semibold">+</button>
                </div>

                <div className="flex md:justify-end">
                  {item.verified ? (
                    <span className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-xs font-semibold text-emerald-700">Count verified</span>
                  ) : (
                    <button type="button" onClick={() => verifyItem(item.id)} className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs font-semibold text-amber-800">Mark counted</button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}

function MaterialsView({ inventory }: { inventory: InventoryItem[] }) {
  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Price book" title="Materials & Services" description="The Kingo version of the materials database: cost, standard price, member price, inventory mapping and inspection trigger." action="+ New material/service" />
      <section className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[940px] text-left text-sm">
            <thead className="border-b border-black/10 bg-[#f7f8f7] text-[11px] uppercase tracking-wide text-black/45">
              <tr><th className="px-4 py-3">Item</th><th className="px-4 py-3">Category</th><th className="px-4 py-3">Cost</th><th className="px-4 py-3">Standard</th><th className="px-4 py-3">Member</th><th className="px-4 py-3">Stock</th><th className="px-4 py-3">Connection</th></tr>
            </thead>
            <tbody>
              {inventory.map((item) => (
                <tr key={item.id} className="border-b border-black/8 last:border-0">
                  <td className="px-4 py-3 font-semibold">{item.name}</td>
                  <td className="px-4 py-3 text-black/55">{item.category}</td>
                  <td className="px-4 py-3">{item.cost === null ? "—" : `$${item.cost.toFixed(2)}`}</td>
                  <td className="px-4 py-3 text-black/40">Not set</td>
                  <td className="px-4 py-3 text-black/40">Not set</td>
                  <td className="px-4 py-3 font-semibold">{item.quantity}</td>
                  <td className="px-4 py-3"><StatusBadge status="not-connected" compact /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

function InspectionView() {
  const [step, setStep] = useState(0);
  const [result, setResult] = useState<"pass" | "correct" | "action" | null>(null);

  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Guided workflow" title="Summer preventive maintenance SOP" description="Condenser first, indoor equipment second. The app controls sequence, measurements, corrective action, inventory and customer approval." action="Edit SOP" />
      <section className="grid gap-4 xl:grid-cols-[300px_minmax(0,1fr)_330px]">
        <div className="rounded-xl border border-black/10 bg-white p-3 shadow-sm">
          <p className="px-2 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">Procedure steps</p>
          <div className="space-y-1">
            {inspectionSteps.map((item, index) => (
              <button key={item} type="button" onClick={() => { setStep(index); setResult(null); }} className={`flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left text-sm ${step === index ? "bg-[#e8f0ec] text-[#0f5c5a]" : "hover:bg-[#f7f8f7]"}`}>
                <span className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold ${step === index ? "bg-[#0f5c5a] text-white" : "bg-[#edf1f0] text-black/45"}`}>{index + 1}</span>
                <span className="font-medium">{item}</span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0f5c5a]">Step {step + 1} of {inspectionSteps.length}</p>
          <h3 className="mt-2 text-2xl font-semibold">{inspectionSteps[step]}</h3>
          <p className="mt-2 text-sm leading-6 text-black/55">Record the actual condition or measurement. The final rules and thresholds will be editable from the desktop SOP manager.</p>

          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Field label="Measured value / condition" placeholder="Enter reading or observation" />
            <Field label="Nameplate / target" placeholder="Enter rated value or target" />
            <Field label="Photo evidence" placeholder="Photo upload not connected" disabled />
            <Field label="Technician note" placeholder="Add job-specific note" />
          </div>

          <div className="mt-5">
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.12em] text-black/45">Result</p>
            <div className="grid gap-2 sm:grid-cols-3">
              <ResultButton active={result === "pass"} onClick={() => setResult("pass")} tone="green" title="Pass" subtitle="Continue" />
              <ResultButton active={result === "correct"} onClick={() => setResult("correct")} tone="orange" title="Correct first" subtitle="Block next test" />
              <ResultButton active={result === "action"} onClick={() => setResult("action")} tone="red" title="Action required" subtitle="Present repair" />
            </div>
          </div>

          <div className="mt-6 flex justify-between border-t border-black/10 pt-4">
            <button type="button" onClick={() => setStep(Math.max(0, step - 1))} className="rounded-lg border border-black/10 px-4 py-2 text-sm font-semibold">Back</button>
            <button type="button" onClick={() => setStep(Math.min(inspectionSteps.length - 1, step + 1))} className="rounded-lg bg-[#0f5c5a] px-4 py-2 text-sm font-semibold text-white">Save & continue</button>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="rounded-xl border border-black/10 bg-[#172d2b] p-5 text-white shadow-sm">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50">Corrective action</p>
            <h3 className="mt-2 text-xl font-semibold">Recommendation panel</h3>
            <p className="mt-2 text-sm leading-6 text-white/65">A verified deficiency will map to the approved Kingo item, stock count, price and customer explanation.</p>
            <div className="mt-4 rounded-lg border border-white/10 bg-white/7 p-3">
              <p className="text-sm font-semibold">Waiting for result</p>
              <p className="mt-1 text-xs text-white/50">No item is added until the finding supports it.</p>
            </div>
          </div>
          <div className="rounded-xl border border-amber-200 bg-amber-50 p-4">
            <StatusBadge status="not-connected" />
            <p className="mt-3 text-sm font-semibold">PT / superheat / subcool calculator</p>
            <p className="mt-1 text-xs leading-5 text-black/55">The space is reserved. Validated refrigerant tables and deterministic calculations still need to be connected.</p>
          </div>
        </aside>
      </section>
    </div>
  );
}

function DoorToDoorView({ onStartInspection }: { onStartInspection: () => void }) {
  const [stage, setStage] = useState(0);
  const stages = [
    { title: "Opening", script: "Hi, we’re Kingo Services Heating and Cooling. We’re already working in the area and offering homeowners a complimentary preventive maintenance and inspection." },
    { title: "Qualify", script: "When was the last time your air conditioner had a complete preventive inspection?" },
    { title: "Explain", script: "There’s no charge. We check the system, show you the condition and measurements, and tell you what needs attention. There is no commitment, and we give you the price before doing any work." },
    { title: "Permission", script: "We’ll begin at the outdoor unit. When we reach the indoor equipment, we’ll ask permission before entering. Would you like us to inspect it while we’re here?" },
    { title: "Capture lead", script: "Confirm the homeowner’s name, address and phone number, then create the inspection job." },
  ];

  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Guided sales interaction" title="Door-to-door SOP" description="One prompt at a time, with objections, lead capture and direct handoff into the maintenance inspection." action="Edit script" />
      <section className="grid gap-4 lg:grid-cols-[280px_minmax(0,1fr)]">
        <div className="rounded-xl border border-black/10 bg-white p-3 shadow-sm">
          {stages.map((item, index) => (
            <button key={item.title} type="button" onClick={() => setStage(index)} className={`mb-1 flex w-full items-center gap-3 rounded-lg px-3 py-3 text-left ${stage === index ? "bg-[#e8f0ec] text-[#0f5c5a]" : "hover:bg-[#f7f8f7]"}`}>
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-xs font-bold shadow-sm">{index + 1}</span>
              <span className="text-sm font-semibold">{item.title}</span>
            </button>
          ))}
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm sm:p-7">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0f5c5a]">Say this</p>
          <blockquote className="mt-4 rounded-xl bg-[#172d2b] p-5 text-lg font-medium leading-8 text-white sm:text-xl">“{stages[stage].script}”</blockquote>
          <div className="mt-5 grid gap-2 sm:grid-cols-4">
            {['Interested', 'Question', 'Not interested', 'No answer'].map((item) => <button key={item} type="button" className="rounded-lg border border-black/10 px-3 py-3 text-sm font-semibold hover:border-[#0f5c5a] hover:text-[#0f5c5a]">{item}</button>)}
          </div>
          <div className="mt-6 flex justify-between border-t border-black/10 pt-4">
            <button type="button" onClick={() => setStage(Math.max(0, stage - 1))} className="rounded-lg border border-black/10 px-4 py-2 text-sm font-semibold">Back</button>
            {stage === stages.length - 1 ? (
              <button type="button" onClick={onStartInspection} className="rounded-lg bg-[#0f5c5a] px-4 py-2 text-sm font-semibold text-white">Create job & start inspection</button>
            ) : (
              <button type="button" onClick={() => setStage(stage + 1)} className="rounded-lg bg-[#0f5c5a] px-4 py-2 text-sm font-semibold text-white">Next prompt</button>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

function TroubleshootingView() {
  const [path, setPath] = useState(["Thermostat"]);
  const current = path[path.length - 1];
  const options: Record<string, Array<{ label: string; next: string }>> = {
    Thermostat: [{ label: "Calling for cooling", next: "Indoor blower" }, { label: "Not calling", next: "Thermostat / 24V controls" }],
    "Indoor blower": [{ label: "Blower running", next: "Outdoor unit" }, { label: "Blower not running", next: "Indoor electrical / motor" }],
    "Outdoor unit": [{ label: "Condenser running", next: "Performance testing" }, { label: "Condenser not running", next: "Contactor and line voltage" }],
  };

  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Decision tree" title="Residential no-cool troubleshooting" description="The field screen asks one question at a time and preserves the diagnostic path in the job record." action="Edit decision tree" />
      <section className="grid gap-4 lg:grid-cols-[260px_minmax(0,1fr)_320px]">
        <div className="rounded-xl border border-black/10 bg-white p-4 shadow-sm">
          <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/40">Diagnostic path</p>
          <ol className="mt-3 space-y-2">
            {path.map((item, index) => <li key={`${item}-${index}`} className="flex gap-2 text-sm"><span className="font-bold text-[#0f5c5a]">{index + 1}.</span><span>{item}</span></li>)}
          </ol>
          {path.length > 1 && <button type="button" onClick={() => setPath(path.slice(0, -1))} className="mt-4 text-xs font-semibold text-[#0f5c5a]">← Go back one step</button>}
        </div>
        <div className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#0f5c5a]">Current check</p>
          <h3 className="mt-2 text-2xl font-semibold">{current}</h3>
          <p className="mt-2 text-sm leading-6 text-black/55">Complete the check safely, record the measurement and select the observed result.</p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <Field label="Measurement" placeholder="Enter voltage, amperage or observation" />
            <Field label="Photo / note" placeholder="Add evidence" />
          </div>
          <div className="mt-5 space-y-2">
            {(options[current] ?? [{ label: "Continue to guided diagnosis", next: `${current} details` }]).map((option) => (
              <button key={option.label} type="button" onClick={() => setPath([...path, option.next])} className="flex w-full items-center justify-between rounded-lg border border-black/10 px-4 py-3 text-left text-sm font-semibold hover:border-[#0f5c5a] hover:bg-[#e8f0ec]">
                <span>{option.label}</span><span>→</span>
              </button>
            ))}
          </div>
        </div>
        <div className="rounded-xl border border-amber-200 bg-amber-50 p-5 shadow-sm">
          <StatusBadge status="not-connected" />
          <h3 className="mt-3 text-lg font-semibold">Ask Kingo AI</h3>
          <p className="mt-2 text-sm leading-6 text-black/55">When connected, AI will receive the current branch and entered readings, then explain the next approved diagnostic checks. It will not override the SOP or alter the job.</p>
          <button type="button" className="mt-4 w-full rounded-lg bg-[#172d2b] px-4 py-2.5 text-sm font-semibold text-white">Open AI help</button>
        </div>
      </section>
    </div>
  );
}

function AiHelpView({ jobNumber }: { jobNumber: string }) {
  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Knowledge and troubleshooting" title="Ask Kingo AI" description={`Job context available in the interface: ${jobNumber}. The actual AI connection is intentionally disabled until its data and safety boundaries are built.`} action="AI settings" />
      <section className="mx-auto max-w-4xl overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
        <div className="border-b border-black/10 bg-amber-50 p-3"><StatusBadge status="not-connected" /><span className="ml-2 text-xs text-black/55">Visible now, connection later.</span></div>
        <div className="min-h-[360px] p-5">
          <div className="max-w-xl rounded-xl bg-[#edf1f0] p-4 text-sm leading-6 text-black/60">Ask about readings, troubleshooting, the Kingo SOP, customer explanations or what to verify next on the open job.</div>
        </div>
        <div className="border-t border-black/10 p-3">
          <div className="flex gap-2 rounded-xl border border-black/10 bg-[#f7f8f7] p-2">
            <textarea className="min-h-12 flex-1 resize-none bg-transparent p-2 text-sm outline-none" placeholder="Ask a question about this job..." />
            <button type="button" className="self-end rounded-lg bg-[#0f5c5a] px-4 py-2 text-sm font-semibold text-white">Send</button>
          </div>
        </div>
      </section>
    </div>
  );
}

function ReportsView({ buyCount }: { buyCount: number }) {
  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Performance" title="Sales and field activity" description="The shell shows the metrics we intend to collect. Totals remain zero until job checkout is connected." action="Export" />
      <section className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        <Metric title="Revenue today" value="$0" note="No completed sales" />
        <Metric title="Average ticket" value="$0" note="No completed sales" />
        <Metric title="Inspection close rate" value="—" note="No completed inspections" />
        <Metric title="Inventory alerts" value={String(buyCount)} note="Requires review" alert={buyCount > 0} />
      </section>
      <section className="rounded-xl border border-black/10 bg-white p-6 shadow-sm">
        <div className="h-64 rounded-lg border border-dashed border-black/15 bg-[linear-gradient(to_top,rgba(15,92,90,0.08)_1px,transparent_1px)] bg-[length:100%_48px] p-5">
          <p className="text-sm font-semibold">Daily sales chart</p><p className="mt-1 text-xs text-black/45">Chart will populate after checkout events are stored.</p>
        </div>
      </section>
    </div>
  );
}

function AccountView({ onOpenSettings }: { onOpenSettings: () => void }) {
  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Account" title="Kingo Services Heating and Cooling" description="Owner controls, settings, integrations and the future staff system live here." action="Edit profile" />
      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        <AccountCard title="Settings" description="Preferences, materials, staff, API keys, templates and connections." status="prototype" action="Open settings" onClick={onOpenSettings} />
        <AccountCard title="ServiceM8 migration" description="Import and optional sync path. Kingo IDs will remain independent." status="not-connected" action="View connection" />
        <AccountCard title="Stripe" description="Payments, monthly memberships and customer checkout." status="not-connected" action="View connection" />
        <AccountCard title="QuickBooks" description="Customer, invoice, payment and accounting synchronization." status="not-connected" action="View connection" />
        <AccountCard title="Twilio / Messaging" description="Appointment, invoice and follow-up text messages." status="not-connected" action="View connection" />
        <AccountCard title="Backups & Security" description="Database backups, audit history and access controls." status="not-connected" action="View plan" />
      </section>
    </div>
  );
}

function SettingsView({ onNavigate }: { onNavigate: (screen: Screen) => void }) {
  const settings = [
    { title: "Staff", description: "Jesse and Charlie selector now; real permissions later.", status: "prototype" as ModuleStatus },
    { title: "Security Roles", description: "Reserved for future staff and access control.", status: "not-connected" as ModuleStatus },
    { title: "Preferences", description: "Job, pricing, notifications and workflow defaults.", status: "prototype" as ModuleStatus },
    { title: "API Keys", description: "Server-side integrations only. Keys will never display on Charlie’s phone.", status: "not-connected" as ModuleStatus },
    { title: "Materials & Services", description: "Cost, standard price, member price, inventory and SOP mapping.", status: "prototype" as ModuleStatus, screen: "materials" as Screen },
    { title: "SOP Manager", description: "Reorder steps, set measurements, blockers and corrective items.", status: "prototype" as ModuleStatus, screen: "inspections" as Screen },
    { title: "Job Templates", description: "Preventive maintenance, no-cool and door-to-door jobs.", status: "not-connected" as ModuleStatus },
    { title: "Forms & Documents", description: "Customer approval, signatures, checklists and reports.", status: "not-connected" as ModuleStatus },
    { title: "Payment Settings", description: "Stripe checkout, deposits and recurring membership billing.", status: "not-connected" as ModuleStatus },
    { title: "Integrations", description: "ServiceM8, Stripe, QuickBooks, Twilio, email and AI.", status: "not-connected" as ModuleStatus },
  ];

  return (
    <div className="space-y-4">
      <PageHeader eyebrow="Account / Settings" title="Settings" description="The full settings structure is visible now. Amber sections are intentionally unconnected placeholders." action="Save changes" />
      <section className="overflow-hidden rounded-xl border border-black/10 bg-white shadow-sm">
        <div className="divide-y divide-black/8">
          {settings.map((item) => (
            <button key={item.title} type="button" onClick={() => item.screen && onNavigate(item.screen)} className="flex w-full items-center gap-4 p-4 text-left hover:bg-[#f7f8f7]">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#e8f0ec] text-sm font-bold text-[#0f5c5a]">{item.title.slice(0, 2).toUpperCase()}</span>
              <span className="min-w-0 flex-1"><span className="block font-semibold">{item.title}</span><span className="mt-0.5 block text-sm text-black/45">{item.description}</span></span>
              <StatusBadge status={item.status} compact />
              <span className="text-black/25">›</span>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
}

function ModulePlaceholder({ screen, onNavigate }: { screen: Screen; onNavigate: (screen: Screen) => void }) {
  const label = navigation.flatMap((group) => group.items).find((item) => item.id === screen)?.label ?? screen;
  return (
    <div className="mx-auto max-w-3xl rounded-xl border border-amber-200 bg-white p-8 text-center shadow-sm">
      <StatusBadge status="not-connected" />
      <h2 className="mt-4 text-2xl font-semibold">{label}</h2>
      <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-black/55">This module is present in the full operating shell so the navigation stays stable. It is not connected or operational yet.</p>
      <div className="mt-6 flex justify-center gap-2"><button type="button" onClick={() => onNavigate("dispatch")} className="rounded-lg bg-[#0f5c5a] px-4 py-2 text-sm font-semibold text-white">Return to Dispatch</button><button type="button" onClick={() => onNavigate("settings")} className="rounded-lg border border-black/10 px-4 py-2 text-sm font-semibold">Open Settings</button></div>
    </div>
  );
}

function MobileNavigation({ activeScreen, onNavigate }: { activeScreen: Screen; onNavigate: (screen: Screen) => void }) {
  const items: Array<{ id: Screen; label: string }> = [
    { id: "dispatch", label: "Home" },
    { id: "jobs", label: "Jobs" },
    { id: "inspections", label: "Inspect" },
    { id: "inventory", label: "Stock" },
    { id: "account", label: "More" },
  ];
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 grid grid-cols-5 border-t border-black/10 bg-white px-1 pb-[max(0.35rem,env(safe-area-inset-bottom))] pt-1 shadow-[0_-10px_30px_rgba(0,0,0,0.08)] lg:hidden">
      {items.map((item) => (
        <button key={item.id} type="button" onClick={() => onNavigate(item.id)} className={`rounded-lg px-1 py-2 text-[11px] font-semibold ${activeScreen === item.id ? "bg-[#e8f0ec] text-[#0f5c5a]" : "text-black/45"}`}>{item.label}</button>
      ))}
    </nav>
  );
}

function Metric({ title, value, note, alert = false }: { title: string; value: string; note: string; alert?: boolean }) {
  return (
    <div className={`rounded-xl border bg-white p-4 shadow-sm ${alert ? "border-[#e8b7a9]" : "border-black/10"}`}>
      <p className="text-xs font-semibold text-black/45">{title}</p>
      <p className={`mt-1 text-2xl font-bold ${alert ? "text-[#c84a2b]" : "text-[#17211f]"}`}>{value}</p>
      <p className="mt-1 text-[11px] text-black/35">{note}</p>
    </div>
  );
}

function JobColumn({ title, count, children }: { title: string; count: number; children: React.ReactNode }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between px-1"><p className="text-xs font-bold uppercase tracking-wide text-black/45">{title}</p><span className="rounded-full bg-white px-2 py-0.5 text-[10px] font-bold text-black/45 shadow-sm">{count}</span></div>
      <div className="space-y-2">{children}</div>
    </div>
  );
}

function JobCard({ job, selected, onSelect }: { job: (typeof jobs)[number]; selected: boolean; onSelect: () => void }) {
  return (
    <button type="button" onClick={onSelect} className={`w-full rounded-lg border bg-white p-3 text-left shadow-sm transition ${selected ? "border-[#0f5c5a] ring-2 ring-[#0f5c5a]/15" : "border-black/10 hover:border-black/25"}`}>
      <div className="flex items-start justify-between gap-2"><p className="text-xs font-bold text-[#0f5c5a]">{job.number}</p><span className="text-[10px] font-semibold text-black/35">{job.time}</span></div>
      <p className="mt-2 text-sm font-semibold">{job.customer}</p>
      <p className="mt-0.5 text-xs text-black/45">{job.city}</p>
      <p className="mt-3 rounded-md bg-[#f7f4ef] px-2 py-1.5 text-[11px] font-medium text-black/55">{job.type}</p>
    </button>
  );
}

function DetailRow({ label, value, warning = false }: { label: string; value: string; warning?: boolean }) {
  return <div className="flex items-start justify-between gap-4 border-b border-black/8 pb-3"><span className="text-black/45">{label}</span><span className={`text-right font-semibold ${warning ? "text-amber-700" : ""}`}>{value}</span></div>;
}

function PageHeader({ eyebrow, title, description, action }: { eyebrow: string; title: string; description: string; action: string }) {
  return (
    <div className="flex flex-col gap-3 rounded-xl border border-black/10 bg-white p-5 shadow-sm sm:flex-row sm:items-center">
      <div className="min-w-0 flex-1"><p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#0f5c5a]">{eyebrow}</p><h2 className="mt-1 text-2xl font-semibold">{title}</h2><p className="mt-1 max-w-3xl text-sm leading-6 text-black/50">{description}</p></div>
      <button type="button" className="self-start rounded-lg border border-black/10 bg-white px-4 py-2 text-sm font-semibold shadow-sm sm:self-center">{action}</button>
    </div>
  );
}

function StatusBadge({ status, compact = false }: { status: ModuleStatus; compact?: boolean }) {
  const meta = statusMeta[status];
  return <span className={`inline-flex rounded-full border font-bold ${meta.classes} ${compact ? "px-2 py-0.5 text-[9px]" : "px-2.5 py-1 text-[10px]"}`}>{meta.label}</span>;
}

function AccountCard({ title, description, status, action, onClick }: { title: string; description: string; status: ModuleStatus; action: string; onClick?: () => void }) {
  return (
    <div className="rounded-xl border border-black/10 bg-white p-5 shadow-sm"><StatusBadge status={status} /><h3 className="mt-3 text-lg font-semibold">{title}</h3><p className="mt-2 min-h-12 text-sm leading-6 text-black/50">{description}</p><button type="button" onClick={onClick} className="mt-4 text-sm font-semibold text-[#0f5c5a]">{action} →</button></div>
  );
}

function Field({ label, placeholder, disabled = false }: { label: string; placeholder: string; disabled?: boolean }) {
  return (
    <label className="block"><span className="mb-1.5 block text-xs font-semibold text-black/55">{label}</span><input disabled={disabled} placeholder={placeholder} className="w-full rounded-lg border border-black/10 bg-[#f7f8f7] px-3 py-2.5 text-sm outline-none placeholder:text-black/30 focus:border-[#0f5c5a] disabled:cursor-not-allowed disabled:bg-amber-50" /></label>
  );
}

function ResultButton({ active, onClick, tone, title, subtitle }: { active: boolean; onClick: () => void; tone: "green" | "orange" | "red"; title: string; subtitle: string }) {
  const tones = {
    green: active ? "border-emerald-500 bg-emerald-50 text-emerald-800" : "border-black/10 hover:border-emerald-400",
    orange: active ? "border-amber-500 bg-amber-50 text-amber-800" : "border-black/10 hover:border-amber-400",
    red: active ? "border-[#c84a2b] bg-[#fff0ec] text-[#9f351e]" : "border-black/10 hover:border-[#c84a2b]",
  };
  return <button type="button" onClick={onClick} className={`rounded-lg border p-3 text-left ${tones[tone]}`}><span className="block text-sm font-bold">{title}</span><span className="mt-0.5 block text-xs opacity-60">{subtitle}</span></button>;
}
