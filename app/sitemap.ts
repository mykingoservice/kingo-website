import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://www.mykingoservice.com";

// Public canonical pages only. Legacy Job Post Pin routes redirect to Completed Job Pins.
// The owner alert setup page is intentionally noindex and excluded.
const paths = [
  "/",
  "/about/",
  "/completed-job-pins/",
  "/completed-job-pins/installed-turbo-200-capacitor-splendora-texas/",
  "/completed-job-pins/job-2020/",
  "/completed-job-pins/job-2312-sugar-land-extra-room-airflow/",
  "/completed-job-pins/job-2322-splendora-lennox-capacitor-replacement/",
  "/completed-job-pins/job-2333-pearland-carrier-capacitor-replacement/",
  "/connect/",
  "/consumer-awareness/contractor-added-airflow-to-room-correctly/",
  "/contact/",
  "/content-post-pin/this-room-needed-more-air/",
  "/emergency-hvac/",
  "/faq/",
  "/financing/",
  "/hvac-how-to/",
  "/hvac-how-to/ac-capacitor-replacement-pearland-texas/",
  "/hvac-how-to/hot-room-houston-space-saving-duct-transition/",
  "/hvac-how-to/how-to-add-airflow-to-an-extra-room/",
  "/reviews/",
  "/reviews/job-2020-elizabeth-md-carrier-condenser/",
  "/service-area/",
  "/service-area/cleveland/",
  "/service-area/conroe/",
  "/service-area/cypress/",
  "/service-area/houston/",
  "/service-area/humble/",
  "/service-area/katy/",
  "/service-area/montgomery/",
  "/service-area/new-caney/",
  "/service-area/pearland/",
  "/service-area/porter/",
  "/service-area/splendora/",
  "/service-area/spring/",
  "/service-area/sugar-land/",
  "/service-area/the-woodlands/",
  "/services/",
  "/services/ac-installation/",
  "/services/ac-repair/",
  "/services/commercial-hvac/",
  "/services/heating-installation/",
  "/services/heating-repair/",
  "/services/hvac-maintenance/",
  "/shorts/this-room-needed-more-air/",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return paths.map((path) => ({ url: new URL(path, siteUrl).toString() }));
}
