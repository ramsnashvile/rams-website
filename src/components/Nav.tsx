"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Logo } from "@/components/Logo";
import {
  isNavActive,
  isNavGroupActive,
  mainNav,
  type NavLink,
} from "@/data/navigation";

function NavDropdown({
  item,
  pathname,
  mobile,
  onNavigate,
}: {
  item: { label: string; children: NavLink[] };
  pathname: string;
  mobile?: boolean;
  onNavigate?: () => void;
}) {
  const [open, setOpen] = useState(false);
  const active = isNavGroupActive(pathname, item.children);

  if (mobile) {
    return (
      <li>
        <p className="px-3 py-2 text-xs font-bold uppercase tracking-wider text-saffron">
          {item.label}
        </p>
        <ul className="ml-2 space-y-1">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className="block min-h-[44px] rounded-lg px-3 py-3 hover:bg-white/10"
                onClick={onNavigate}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      </li>
    );
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        className={`flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition ${
          active
            ? "bg-saffron/25 text-white"
            : "text-parchment/90 hover:bg-white/10"
        }`}
        aria-expanded={open}
        aria-haspopup="true"
      >
        {item.label}
        <span className="text-xs" aria-hidden>
          ▾
        </span>
      </button>
      {open && (
        <ul className="absolute left-0 top-full z-50 min-w-[220px] rounded-lg border border-amber/30 bg-maroon-deep py-2 shadow-xl">
          {item.children.map((child) => (
            <li key={child.href}>
              <Link
                href={child.href}
                className={`block px-4 py-2.5 text-sm transition hover:bg-white/10 ${
                  isNavActive(pathname, child.href) ? "bg-saffron/20 font-semibold" : ""
                }`}
              >
                {child.label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber/40 bg-maroon-deep/95 text-parchment backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 md:px-6">
        <Logo onClick={closeMenu} />

        <nav className="hidden items-center gap-0.5 xl:flex" aria-label="Main">
          {mainNav.map((item) => {
            if ("children" in item) {
              return (
                <NavDropdown
                  key={item.label}
                  item={item}
                  pathname={pathname}
                />
              );
            }
            const active = isNavActive(pathname, item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`rounded-md px-3 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-saffron/25 text-white"
                    : "text-parchment/90 hover:bg-white/10"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="/rsvp" className="btn-saffron hidden text-sm sm:inline-flex">
            RSVP Now →
          </Link>
          <button
            type="button"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-lg border border-parchment/30 xl:hidden"
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="text-xl">{menuOpen ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          className="border-t border-parchment/20 bg-maroon-deep px-4 py-4 xl:hidden"
          aria-label="Mobile"
        >
          <ul className="flex flex-col gap-1">
            {mainNav.map((item) => {
              if ("children" in item) {
                return (
                  <NavDropdown
                    key={item.label}
                    item={item}
                    pathname={pathname}
                    mobile
                    onNavigate={closeMenu}
                  />
                );
              }
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="block min-h-[44px] rounded-lg px-3 py-3 font-medium hover:bg-white/10"
                    onClick={closeMenu}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link href="/rsvp" className="btn-saffron w-full" onClick={closeMenu}>
                RSVP Now →
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
