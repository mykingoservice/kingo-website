import Link from "next/link";

export default function ThisRoomNeededMoreAirPage() {
  return (
    <main className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-4 text-sm font-semibold uppercase tracking-wide text-neutral-500">
        Content Post Pin 📍™ / Video Post Pin 📍™
      </p>

      <h1 className="text-4xl font-bold tracking-tight">
        This room needed more air
      </h1>

      <p className="mt-6 max-w-2xl text-lg text-neutral-700">
        One airflow issue can make an entire room uncomfortable even when the AC
        is running. This post connects the long-form video, short-form clips,
        and website proof into one Content Post Pin 📍™ asset.
      </p>

      <section className="mt-10 overflow-hidden rounded-2xl border bg-black shadow-sm">
        <div className="aspect-video w-full">
          <iframe
            className="h-full w-full"
            src="https://www.youtube.com/embed/t8sI-eGkF9s"
            title="This room needed more air"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      </section>

      <section className="mt-10 grid gap-4 md:grid-cols-2">
        <a className="rounded-2xl border p-5 shadow-sm transition hover:shadow-md" href="https://youtube.com/shorts/IGV6hmO6PHY" target="_blank" rel="noreferrer">
          <h2 className="font-semibold">YouTube Short</h2>
          <p className="mt-2 text-sm text-neutral-600">View the short-form version.</p>
        </a>

        <a className="rounded-2xl border p-5 shadow-sm transition hover:shadow-md" href="https://www.instagram.com/reel/DYxExHYOo4o/?igsh=MmdkdHgzcjRvYnlv" target="_blank" rel="noreferrer">
          <h2 className="font-semibold">Instagram Reel</h2>
          <p className="mt-2 text-sm text-neutral-600">View the Instagram post.</p>
        </a>

        <a className="rounded-2xl border p-5 shadow-sm transition hover:shadow-md" href="https://www.tiktok.com/t/ZP8pnS763/" target="_blank" rel="noreferrer">
          <h2 className="font-semibold">TikTok</h2>
          <p className="mt-2 text-sm text-neutral-600">View the TikTok post.</p>
        </a>

        <a className="rounded-2xl border p-5 shadow-sm transition hover:shadow-md" href="https://youtu.be/t8sI-eGkF9s" target="_blank" rel="noreferrer">
          <h2 className="font-semibold">Full YouTube Video</h2>
          <p className="mt-2 text-sm text-neutral-600">Watch the full breakdown.</p>
        </a>
      </section>

      <section className="mt-12 rounded-2xl border bg-neutral-50 p-6">
        <h2 className="text-2xl font-bold">Airflow problems in Houston homes</h2>
        <p className="mt-4 text-neutral-700">
          Uneven cooling, weak airflow, and uncomfortable rooms can come from
          duct issues, blocked returns, poor balancing, dirty filters, equipment
          problems, or layout issues inside the home.
        </p>
        <p className="mt-4 text-neutral-700">
          Kingo Services Heating and Cooling helps homeowners across the Houston
          area improve comfort, airflow, and AC performance.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            className="rounded-full border-2 border-black bg-white px-6 py-3 text-sm font-bold text-black shadow-sm transition hover:bg-black hover:text-white"
            href="/contact"
          >
            Fix My Airflow
          </Link>
          <Link
            className="rounded-full border-2 border-black bg-transparent px-6 py-3 text-sm font-bold text-black transition hover:bg-black hover:text-white"
            href="/services"
          >
            View HVAC Services
          </Link>
        </div>
      </section>
    </main>
  );
}
