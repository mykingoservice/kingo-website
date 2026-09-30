import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Kingo HVAC Video Pins",
  description:
    "Watch field-service videos from Kingo Services Heating and Cooling, with links to the relevant services and service areas.",
  alternates: {
    canonical: "https://www.mykingoservice.com/video-pins/",
  },
};

export default function VideoPinsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
        Kingo field videos
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        Video Pins
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
        See Kingo Services Heating and Cooling field work and explore the
        relevant service and local pages. A video is not assigned to a job
        number unless that connection has been verified.
      </p>

      <section className="mt-12 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <Image
          src="/images/video-pins/kingo-splendora-capacitor-thumbnail.jpg"
          alt="Kingo Services AC capacitor replacement video thumbnail for Splendora, Texas"
          width={1280}
          height={720}
          className="mb-7 h-auto w-full rounded-2xl"
        />
        <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
          Splendora, Texas
        </p>
        <h2 className="mt-3 text-2xl font-bold text-slate-950">
          AC capacitor replacement and tune-up
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          Field footage of outdoor AC inspection, capacitor replacement,
          refrigerant-line checks, and condenser-coil washing.
        </p>
        <Link
          href="/video-pins/splendora-ac-capacitor-replacement-and-tune-up/"
          className="mt-6 inline-block rounded-full bg-slate-950 px-6 py-3 font-semibold text-white hover:bg-slate-800"
        >
          Watch the Splendora Video Pin
        </Link>
      </section>
    </main>
  );
}
