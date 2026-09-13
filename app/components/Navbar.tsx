"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [venueOpen, setVenueOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileVenueOpen, setMobileVenueOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const hamburgerRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!mobileOpen) return;

    const original = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const menu = menuRef.current;
    const focusables = menu
      ? Array.from(
          menu.querySelectorAll<HTMLElement>(
            'a[href], button:not([disabled])'
          )
        )
      : [];
    focusables[0]?.focus();

    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key !== "Tab" || focusables.length === 0) return;
      const first = focusables[0];
      const last = focusables[focusables.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKey);
    return () => {
      document.body.style.overflow = original;
      document.removeEventListener("keydown", handleKey);
      hamburgerRef.current?.focus();
    };
  }, [mobileOpen]);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-10 lg:px-16">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-lg tracking-[0.24em] text-white sm:text-xl sm:tracking-[0.28em]"
          onClick={() => setMobileOpen(false)}
        >
          HERITAGE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-black/20 px-8 py-3 backdrop-blur-xl lg:flex">

          <Link
            href="/"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-white/70 transition hover:text-white"
          >
            About
          </Link>

          <Link
            href="/#menus"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Menu
          </Link>

          <div className="relative">
            <button
              type="button"
              onClick={() => setVenueOpen(!venueOpen)}
              className="flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
            >
              Venues
              <span className="text-xs">⌄</span>
            </button>

            {venueOpen && (
              <div className="absolute left-1/2 top-10 w-52 -translate-x-1/2 rounded-2xl border border-white/10 bg-[#171512]/95 p-2 shadow-2xl backdrop-blur-xl">
                <Link
                  href="/venues/grand-hall"
                  className="block rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setVenueOpen(false)}
                >
                  Grand Hall
                </Link>

                <Link
                  href="/venues/courtyard"
                  className="block rounded-xl px-4 py-3 text-sm text-white/70 transition hover:bg-white/5 hover:text-white"
                  onClick={() => setVenueOpen(false)}
                >
                  Courtyard
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Gallery
          </Link>
        </div>

        {/* Right side: Desktop CTAs + Mobile hamburger */}
        <div className="flex items-center gap-2 sm:gap-3">

          {/* Desktop CTAs — hidden on mobile/tablet */}
          <Link
            href="/availability"
            className="hidden rounded-full border border-[#d6bd8d]/40 bg-[#d6bd8d]/10 px-5 py-2.5 text-sm text-[#d6bd8d] backdrop-blur-md transition hover:bg-[#d6bd8d]/20 lg:block"
          >
            Availability
          </Link>

          <Link
            href="/estimate"
            className="hidden rounded-full border border-[#d6bd8d]/40 bg-[#d6bd8d]/10 px-5 py-2.5 text-sm text-[#d6bd8d] backdrop-blur-md transition hover:bg-[#d6bd8d]/20 lg:block"
          >
            Estimate Cost
          </Link>

          {/* Mobile hamburger — visible below lg */}
          <button
            ref={hamburgerRef}
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-black/25 text-white backdrop-blur-md transition hover:border-[#d6bd8d]/60 hover:text-[#d6bd8d] lg:hidden"
          >
            <span className="relative block h-4 w-5">
              <span
                className={`absolute left-0 top-0 h-[2px] w-full origin-center bg-current transition-all duration-300 ${
                  mobileOpen ? "translate-y-[7px] rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] h-[2px] w-full bg-current transition-all duration-200 ${
                  mobileOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-[2px] w-full origin-center bg-current transition-all duration-300 ${
                  mobileOpen ? "-translate-y-[7px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu"
        ref={menuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Site navigation"
        inert={!mobileOpen}
        className={`fixed inset-0 z-40 bg-[#17130f]/98 backdrop-blur-xl transition-all duration-300 lg:hidden ${
          mobileOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileOpen(false)}
      >
        <div
          className="mx-auto flex h-full max-w-md flex-col overflow-y-auto px-6 pb-10 pt-24"
          onClick={(e) => e.stopPropagation()}
        >
          <nav className="flex flex-col gap-1">
            <Link
              href="/"
              className="border-b border-white/10 py-5 text-base text-white/85 transition hover:text-[#d6bd8d]"
              onClick={() => setMobileOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/about"
              className="border-b border-white/10 py-5 text-base text-white/85 transition hover:text-[#d6bd8d]"
              onClick={() => setMobileOpen(false)}
            >
              About
            </Link>

            <Link
              href="/#menus"
              className="border-b border-white/10 py-5 text-base text-white/85 transition hover:text-[#d6bd8d]"
              onClick={() => setMobileOpen(false)}
            >
              Menu
            </Link>

            <div className="border-b border-white/10">
              <button
                type="button"
                onClick={() => setMobileVenueOpen((v) => !v)}
                className="flex w-full items-center justify-between py-5 text-base text-white/85 transition hover:text-[#d6bd8d]"
                aria-expanded={mobileVenueOpen}
              >
                <span>Venues</span>
                <span
                  className={`text-xs transition-transform duration-300 ${
                    mobileVenueOpen ? "rotate-180" : ""
                  }`}
                >
                  ⌄
                </span>
              </button>

              <div
                className={`grid transition-all duration-300 ${
                  mobileVenueOpen
                    ? "grid-rows-[1fr] pb-4 opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <Link
                    href="/venues/grand-hall"
                    className="block py-3 pl-4 text-sm text-white/65 transition hover:text-[#d6bd8d]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Grand Hall
                  </Link>
                  <Link
                    href="/venues/courtyard"
                    className="block py-3 pl-4 text-sm text-white/65 transition hover:text-[#d6bd8d]"
                    onClick={() => setMobileOpen(false)}
                  >
                    Courtyard
                  </Link>
                </div>
              </div>
            </div>

            <Link
              href="/gallery"
              className="border-b border-white/10 py-5 text-base text-white/85 transition hover:text-[#d6bd8d]"
              onClick={() => setMobileOpen(false)}
            >
              Gallery
            </Link>
          </nav>

          <div className="mt-8 flex flex-col gap-3">
            <Link
              href="/availability"
              className="rounded-full border border-[#d6bd8d]/40 bg-[#d6bd8d]/10 px-6 py-4 text-center text-sm font-semibold tracking-[0.12em] text-[#d6bd8d] backdrop-blur-md transition hover:bg-[#d6bd8d]/20"
              onClick={() => setMobileOpen(false)}
            >
              CHECK AVAILABILITY
            </Link>

            <Link
              href="/estimate"
              className="rounded-full border border-[#d6bd8d]/40 bg-[#d6bd8d]/10 px-6 py-4 text-center text-sm font-semibold tracking-[0.12em] text-[#d6bd8d] backdrop-blur-md transition hover:bg-[#d6bd8d]/20"
              onClick={() => setMobileOpen(false)}
            >
              ESTIMATE COST
            </Link>
          </div>

          <div className="mt-auto pt-10 text-center">
            <p className="text-[10px] tracking-[0.35em] text-white/40">
              BOUDHA · KATHMANDU · NEPAL
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
