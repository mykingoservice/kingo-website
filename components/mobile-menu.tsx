"use client";

import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const iconMap: Record<string, string> = {
  Home: "⌂",
  Services: "▦",
  "Emergency HVAC": "!",
  "Service Area": "⌖",
  Reviews: "★",
  Financing: "$",
  About: "i",
  Contact: "☎",
};

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export function MobileMenu({ items }: { items: NavItem[] }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const currentItem = items.find((item) => isActive(pathname, item.href));

  return (
    <>
      <button
        className="mobile-menu-button"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu-drawer"
        onClick={() => setOpen(true)}
      >
        <span aria-hidden="true">☰</span>
        <span>Menu</span>
      </button>

      {open ? (
        <div className="mobile-menu-overlay">
          <aside id="mobile-menu-drawer" className="mobile-menu-drawer">
            <div className="mobile-menu-appbar">
              <button type="button" onClick={() => router.back()} aria-label="Go back">
                ‹
              </button>
              <strong>{currentItem?.label ?? "Menu"}</strong>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close menu">
                ×
              </button>
            </div>

            <div className="mobile-menu-brand">
              <img
                className="mobile-menu-logo"
                src="/kingo-favicon.png"
                alt=""
                aria-hidden="true"
              />
              <div>
                <strong>Kingo Services</strong>
                <span>Heating and Cooling</span>
              </div>
            </div>

            <h2>Menu</h2>

            <nav className="mobile-menu-list" aria-label="Mobile navigation">
              {items.map((item) => {
                const active = isActive(pathname, item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={active ? "is-active" : undefined}
                    aria-current={active ? "page" : undefined}
                    onClick={() => setOpen(false)}
                  >
                    <span aria-hidden="true">{iconMap[item.label] ?? "•"}</span>
                    <strong>{item.label}</strong>
                  </Link>
                );
              })}
            </nav>
          </aside>
        </div>
      ) : null}
    </>
  );
}
