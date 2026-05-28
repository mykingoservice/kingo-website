import Link from "next/link";

export const metadata = {
  title: "This Room Needed More Air | Kingo Services Heating and Cooling",
  description:
    "A short HVAC airflow post from Kingo Services Heating and Cooling showing how small airflow issues can make one room uncomfortable.",
};

export default function ThisRoomNeededMoreAirPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <section className="rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-red-700">
          Short Post Pin 📍™
        </p>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-neutral-950">
          This room needed more air
        </h1>

        <p className="mb-6 text-lg leading-8 text-neutral-700">
          Small airflow problems can make one room feel uncomfortable even when
          the HVAC system is running. Kingo Services Heating and Cooling helps
          homeowners improve airflow, cooling, and comfort across the Houston
          area.
        </p>

        <div className="mb-8 rounded-xl bg-neutral-100 p-6">
          <h2 className="mb-2 text-xl font-semibold text-neutral-950">
            What this short is about
          </h2>
          <p className="leading-7 text-neutral-700">
            This short highlights a simple but important HVAC comfort issue:
            when a room does not receive enough air, the whole home can feel
            uneven. Better airflow can help the room breathe and make the space
            more comfortable.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <Link
            href="/services/ac-repair"
            className="rounded-xl bg-neutral-950 px-5 py-4 text-center font-semibold text-white"
          >
            AC Repair Services
          </Link>

          <Link
            href="/hvac-how-to/how-to-add-airflow-to-an-extra-room"
            className="rounded-xl border border-neutral-300 px-5 py-4 text-center font-semibold text-neutral-950"
          >
            Learn About Adding Airflow
          </Link>
        </div>
      </section>
    </main>
  );
}
