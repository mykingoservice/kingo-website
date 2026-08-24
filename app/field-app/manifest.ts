import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kingo Dispatch",
    short_name: "Dispatch",
    description:
      "Kingo Services dispatch, field operations, inspections, inventory, and sales app.",
    start_url: "/field-app",
    scope: "/field-app",
    display: "standalone",
    orientation: "any",
    background_color: "#F7F4EF",
    theme_color: "#17211F",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
