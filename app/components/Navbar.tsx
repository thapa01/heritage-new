"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [venueOpen, setVenueOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full">
      <nav className="mx-auto flex max-w-[1600px] items-center justify-between px-6 py-5 md:px-10 lg:px-16">

        {/* Logo */}
        <Link
          href="/"
          className="font-serif text-xl tracking-[0.28em] text-white"
        >
          HERITAGE
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 rounded-full border border-white/10 bg-black/20 px-8 py-3 backdrop-blur-xl lg:flex">

          {/* Home */}
          <Link
            href="/"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Home
          </Link>

          {/* About */}
          <Link
            href="/about"
            className="text-sm text-white/70 transition hover:text-white"
          >
            About
          </Link>

          {/* Menu */}
          <Link
            href="/#menus"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Menu
          </Link>

          {/* Venues */}
          <div className="relative">
            <button
              type="button"
              onClick={() => {
                setVenueOpen(!venueOpen);
                setMenuOpen(false);
              }}
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

          {/* Gallery */}
          <Link
            href="/gallery"
            className="text-sm text-white/70 transition hover:text-white"
          >
            Gallery
          </Link>

        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">

          {/* Availability */}
          <Link
            href="/availability"
            className="hidden rounded-full border border-[#d6bd8d]/40 bg-[#d6bd8d]/10 px-5 py-2.5 text-sm text-[#d6bd8d] backdrop-blur-md transition hover:bg-[#d6bd8d]/20 md:block"
          >
            Availability
          </Link>

          {/* Estimate Cost */}
          <Link
            href="/estimate"
            className="hidden rounded-full border border-[#d6bd8d]/40 bg-[#d6bd8d]/10 px-5 py-2.5 text-sm text-[#d6bd8d] backdrop-blur-md transition hover:bg-[#d6bd8d]/20 md:block"
          >
            Estimate Cost
          </Link>

        </div>

      </nav>
    </header>
  );
}