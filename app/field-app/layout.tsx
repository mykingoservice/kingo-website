import type { Metadata, Viewport } from "next";

export const metadata: Metadata = {
  title: {
    default: "Kingo Dispatch",
    template: "%s | Kingo Dispatch",
  },
  description:
    "Kingo Services field operations, dispatch, inventory, inspections, sales, and technician workflows.",
  applicationName: "Kingo Dispatch",
  manifest: "/field-app/manifest.webmanifest",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#17211F",
};

export default function FieldAppLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
