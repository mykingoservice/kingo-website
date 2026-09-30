import type { Metadata } from "next";
import Link from "next/link";
import { BOOKING_URL, PHONE_HREF } from "@/app/cta-links";
import { GoogleAnalytics } from "@/app/connect/google-analytics";
import { TrackedLink } from "@/app/connect/tracked-link";

const videoId = "PI6QYkWjHmg";
const videoUrl = `https://www.youtube.com/watch?v=${videoId}`;
const embedUrl = `https://www.youtube-nocookie.com/embed/${videoId}`;
const shortId = "oq6PvqrRmZg";
const shortUrl = `https://www.youtube.com/shorts/${shortId}`;
const shortEmbedUrl = `https://www.youtube-nocookie.com/embed/${shortId}`;
const thumbnailUrl =
  "https://www.mykingoservice.com/images/video-pins/kingo-splendora-capacitor-thumbnail.jpg";
const videoDescription =
  "Kingo Services Heating and Cooling field footage of outdoor AC capacitor replacement and tune-up work in Splendora, Texas.";
const configuredMeasurementId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
const GA_MEASUREMENT_ID =
  configuredMeasurementId && /^G-[A-Z0-9]+$/.test(configuredMeasurementId)
    ? configuredMeasurementId
    : undefined;

const videoStructuredData = {
  "@context": "https://schema.org",
  "@type": "VideoObject",
  name: "AC Capacitor Replacement & Tune-Up in Splendora, TX | Kingo Services",
  description: videoDescription,
  thumbnailUrl,
  uploadDate: "2026-09-30T08:39:02-07:00",
  embedUrl,
  publisher: {
    "@type": "Organization",
    name: "Kingo Services Heating and Cooling",
    url: "https://www.mykingoservice.com/",
  },
};

export const metadata: Metadata = {
  title: "Splendora AC Capacitor Replacement and Tune-Up Video",
  description:
    "Watch Kingo Services Heating and Cooling field footage of AC capacitor replacement and tune-up work in Splendora, Texas.",
  alternates: {
    canonical:
      "https://www.mykingoservice.com/video-pins/splendora-ac-capacitor-replacement-and-tune-up/",
  },
  openGraph: {
    title: "AC Capacitor Replacement and Tune-Up in Splendora",
    description: videoDescription,
    images: [{ url: thumbnailUrl, width: 1280, height: 720 }],
    type: "video.other",
  },
};

export default function SplendoraCapacitorVideoPinPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-16">
      <GoogleAnalytics measurementId={GA_MEASUREMENT_ID} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(videoStructuredData) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-600">
        <Link href="/video-pins/" className="underline hover:text-slate-950">
          Video Pins
        </Link>
        <span aria-hidden="true"> / </span>
        <span>Splendora AC capacitor replacement and tune-up</span>
      </nav>

      <p className="mt-8 text-sm font-semibold uppercase tracking-[0.25em] text-slate-500">
        Kingo field video · Splendora, Texas
      </p>
      <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl">
        AC capacitor replacement and tune-up in Splendora
      </h1>
      <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
        This Kingo Services Heating and Cooling video documents outdoor AC
        inspection, capacitor replacement, refrigerant-line checks, and
        condenser-coil washing. It is field footage, not an electrical repair
        tutorial.
      </p>

      <div className="mt-10 aspect-video overflow-hidden rounded-3xl bg-slate-950 shadow-lg">
        <iframe
          className="h-full w-full"
          src={embedUrl}
          title="Kingo Services AC capacitor replacement and tune-up in Splendora, Texas"
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
      <p className="mt-4 text-sm text-slate-600">
        <TrackedLink
          actionName="splendora_capacitor_video_pin_youtube"
          eventName="video_pin_youtube"
          href={videoUrl}
          className="underline hover:text-slate-950"
        >
          Watch this video on the Kingo YouTube channel
        </TrackedLink>
      </p>

      <section className="mt-16" aria-labelledby="splendora-short-heading">
        <h2
          id="splendora-short-heading"
          className="text-3xl font-bold text-slate-950"
        >
          A quick look at the work
        </h2>
        <p className="mt-4 max-w-3xl text-slate-700">
          This Kingo Short highlights power checks, capacitor service, and
          outdoor-unit checks from the full Splendora video above.
        </p>
        <div className="mt-6 aspect-[9/16] max-w-sm overflow-hidden rounded-3xl bg-slate-950 shadow-lg">
          <iframe
            className="h-full w-full"
            src={shortEmbedUrl}
            title="Kingo Services Splendora AC capacitor replacement and tune-up Short"
            loading="lazy"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        </div>
        <p className="mt-4 text-sm text-slate-600">
          <TrackedLink
            actionName="splendora_capacitor_video_pin_short"
            eventName="video_pin_short"
            href={shortUrl}
            className="underline hover:text-slate-950"
          >
            Watch the Short on the Kingo YouTube channel
          </TrackedLink>
        </p>
      </section>

      <section className="mt-16 grid gap-6 md:grid-cols-3">
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Related AC service</h2>
          <p className="mt-3 text-slate-700">
            Need help with a cooling problem? See how Kingo handles AC repair
            requests and service intake.
          </p>
          <Link
            href="/services/ac-repair/"
            className="mt-5 inline-block font-semibold text-blue-800 underline"
          >
            Explore AC repair
          </Link>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">HVAC maintenance</h2>
          <p className="mt-3 text-slate-700">
            See Kingo maintenance service for seasonal system checks and
            cooling concerns.
          </p>
          <Link
            href="/services/hvac-maintenance/"
            className="mt-5 inline-block font-semibold text-blue-800 underline"
          >
            Explore HVAC maintenance
          </Link>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-950">Splendora service area</h2>
          <p className="mt-3 text-slate-700">
            Learn about Kingo heating and cooling service for Splendora and
            nearby properties.
          </p>
          <Link
            href="/service-area/splendora/"
            className="mt-5 inline-block font-semibold text-blue-800 underline"
          >
            Explore Splendora service
          </Link>
        </div>
      </section>

      <section className="mt-16 rounded-3xl bg-slate-950 p-8 text-white">
        <h2 className="text-3xl font-bold">Need AC service?</h2>
        <p className="mt-4 max-w-3xl text-slate-300">
          Tell Kingo what your system is doing and where service is needed.
        </p>
        <div className="mt-7 flex flex-col gap-3 sm:flex-row">
          <TrackedLink
            actionName="splendora_capacitor_video_pin_call"
            eventName="video_pin_call"
            href={PHONE_HREF}
            className="rounded-full bg-white px-6 py-3 text-center font-semibold text-slate-950 hover:bg-slate-100"
            style={{ color: "#0f172a" }}
          >
            Call Kingo
          </TrackedLink>
          <TrackedLink
            actionName="splendora_capacitor_video_pin_booking"
            eventName="video_pin_book_service"
            href={BOOKING_URL}
            className="rounded-full border border-white/30 px-6 py-3 text-center font-semibold text-white hover:bg-white/10"
          >
            Request service
          </TrackedLink>
        </div>
      </section>
    </main>
  );
}
