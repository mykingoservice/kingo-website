import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const DISPATCH_HOSTS = new Set([
  "dispatch.kingodigital.com",
  "www.dispatch.kingodigital.com",
]);

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "")
    .split(":")[0]
    .toLowerCase();
  const pathname = request.nextUrl.pathname;

  const isDispatchHost =
    DISPATCH_HOSTS.has(host) || host === "dispatch.localhost";

  if (!isDispatchHost) {
    return NextResponse.next();
  }

  if (
    pathname.startsWith("/field-app") ||
    pathname.startsWith("/api/") ||
    pathname.startsWith("/_next/") ||
    pathname === "/favicon.ico" ||
    pathname === "/icon.png" ||
    pathname === "/apple-icon.png" ||
    pathname === "/robots.txt" ||
    pathname === "/sitemap.xml"
  ) {
    return NextResponse.next();
  }

  const url = request.nextUrl.clone();
  url.pathname = "/field-app";
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};
