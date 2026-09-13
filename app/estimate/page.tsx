"use client";

import { useState } from "react";
import Link from "next/link";

const menus = [
  {
    name: "Silver Menu",
    price: 2575,
    dishes: "32 Dishes",
  },
  {
    name: "Gold Menu",
    price: 2775,
    dishes: "43 Dishes",
  },
  {
    name: "Diamond Menu",
    price: 3275,
    dishes: "56 Dishes",
  },
];

export default function EstimatePage() {
  const [selectedMenu, setSelectedMenu] = useState("Silver Menu");
  const [guests, setGuests] = useState(100);
  const [venue, setVenue] = useState("Grand Hall");

  const menu =
    menus.find((item) => item.name === selectedMenu) || menus[0];

  const estimatedCost = menu.price * guests;

  return (
    <main className="min-h-screen bg-[#f7f3ea] px-5 pb-20 pt-28 text-[#2c2822] sm:px-6 sm:pb-28 sm:pt-36 md:pt-44">
      <div className="mx-auto max-w-6xl">

        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">

          <div className="flex items-center justify-center gap-3 text-[9px] font-semibold tracking-[0.35em] text-[#a77d3d] sm:gap-4 sm:text-[10px] sm:tracking-[0.45em]">
            <span className="h-px w-8 bg-[#b89455] sm:w-12" />

            PLAN YOUR CELEBRATION

            <span className="h-px w-8 bg-[#b89455] sm:w-12" />
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl md:text-7xl">
            Estimate Your
            <span className="block italic text-[#b89455]">
              Celebration Cost
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#6f675d] sm:mt-7 md:text-base">
            Select your menu package, number of guests and venue
            to get an estimated cost for your celebration.
          </p>

        </div>


        {/* =====================================================
            MAIN CONTENT
        ===================================================== */}

        <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1.35fr_0.8fr]">

          {/* =================================================
              LEFT — OPTIONS
          ================================================= */}

          <div className="rounded-[1.5rem] border border-[#ded6c8] bg-white p-5 shadow-[0_25px_80px_rgba(67,52,32,0.07)] sm:rounded-[2rem] sm:p-7 md:p-10">

            {/* MENU */}

            <div>

              <p className="mb-5 text-[10px] font-semibold tracking-[0.35em] text-[#a77d3d]">
                01 — SELECT MENU
              </p>

              <div className="grid gap-3 sm:gap-4 md:grid-cols-3">

                {menus.map((item) => {
                  const active = selectedMenu === item.name;

                  return (
                    <button
                      key={item.name}
                      type="button"
                      onClick={() => setSelectedMenu(item.name)}
                      className={`
                        rounded-2xl border p-5 text-left
                        transition-all duration-300
                        ${
                          active
                            ? "border-[#b89455] bg-[#b89455]/10 shadow-[0_10px_30px_rgba(184,148,85,0.08)]"
                            : "border-[#e1dbd1] bg-[#faf8f4] hover:-translate-y-1 hover:border-[#c8b99f] hover:bg-white"
                        }
                      `}
                    >

                      <div className="font-serif text-xl tracking-[-0.02em] text-[#302b25]">
                        {item.name}
                      </div>

                      <div className="mt-2 text-xs text-[#958b7e]">
                        {item.dishes}
                      </div>

                      <div className="mt-5 text-sm font-medium text-[#a77d3d]">
                        Rs. {item.price.toLocaleString()}
                        <span className="text-[#aaa095]">
                          {" "}
                          / person
                        </span>
                      </div>

                    </button>
                  );
                })}

              </div>
            </div>


            {/* =================================================
                GUEST COUNT
            ================================================= */}

            <div className="mt-12">

              <p className="mb-5 text-[10px] font-semibold tracking-[0.35em] text-[#a77d3d]">
                02 — NUMBER OF GUESTS
              </p>

              <div className="flex items-center gap-5">

                {/* MINUS */}

                <button
                  type="button"
                  onClick={() =>
                    setGuests((value) => Math.max(1, value - 1))
                  }
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#dcd4c8] text-xl text-[#756c60] transition hover:border-[#b89455] hover:bg-[#b89455]/5 hover:text-[#a77d3d]"
                >
                  −
                </button>


                {/* EDITABLE INPUT */}

                <div className="min-w-0 flex-1 text-center">

                  <input
                    type="number"
                    min={1}
                    value={guests}
                    onChange={(e) => {
                      const value = e.target.value;

                      if (value === "") {
                        setGuests(0);
                      } else {
                        setGuests(Number(value));
                      }
                    }}
                    onBlur={() => {
                      if (!guests || guests < 1 || isNaN(guests)) {
                        setGuests(1);
                      }
                    }}
                    className="w-full bg-transparent text-center font-serif text-4xl text-[#302b25] outline-none"
                  />

                  <div className="mt-1 text-[10px] font-medium tracking-[0.25em] text-[#aaa095]">
                    GUESTS
                  </div>

                </div>


                {/* PLUS */}

                <button
                  type="button"
                  onClick={() =>
                    setGuests((value) => Math.max(1, value + 1))
                  }
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-[#dcd4c8] text-xl text-[#756c60] transition hover:border-[#b89455] hover:bg-[#b89455]/5 hover:text-[#a77d3d]"
                >
                  +
                </button>

              </div>

            </div>


            {/* =================================================
                VENUE
            ================================================= */}

            <div className="mt-12">

              <p className="mb-5 text-[10px] font-semibold tracking-[0.35em] text-[#a77d3d]">
                03 — SELECT VENUE
              </p>

              <select
                value={venue}
                onChange={(e) => setVenue(e.target.value)}
                className="w-full rounded-2xl border border-[#ddd5c9] bg-[#faf8f4] px-5 py-4 text-sm text-[#302b25] outline-none transition focus:border-[#b89455] focus:bg-white"
              >
                <option>Grand Hall</option>
                <option>Courtyard</option>
              </select>

            </div>

          </div>


          {/* =================================================
              RIGHT — ESTIMATE
          ================================================= */}

          <div className="relative overflow-hidden rounded-[1.5rem] border border-[#ded6c8] bg-[#eee8dc] p-6 shadow-[0_25px_80px_rgba(67,52,32,0.06)] sm:rounded-[2rem] sm:p-8 md:p-10">

            {/* Decorative circles */}

            <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full border border-[#b89455]/15" />

            <div className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full border border-[#b89455]/10" />


            <p className="relative text-[10px] font-semibold tracking-[0.35em] text-[#a77d3d]">
              YOUR ESTIMATE
            </p>

            <h2 className="relative mt-5 font-serif text-2xl tracking-[-0.02em] text-[#302b25] sm:text-3xl">
              Celebration Summary
            </h2>


            {/* SUMMARY */}

            <div className="relative mt-10 space-y-5 border-y border-[#d8cfc1] py-7">

              <div className="flex justify-between gap-4">
                <span className="text-sm text-[#8d8377]">
                  Menu
                </span>

                <span className="text-right text-sm font-medium text-[#302b25]">
                  {selectedMenu}
                </span>
              </div>


              <div className="flex justify-between gap-4">
                <span className="text-sm text-[#8d8377]">
                  Price / Person
                </span>

                <span className="text-right text-sm font-medium text-[#302b25]">
                  Rs. {menu.price.toLocaleString()}
                </span>
              </div>


              <div className="flex justify-between gap-4">
                <span className="text-sm text-[#8d8377]">
                  Guests
                </span>

                <span className="text-right text-sm font-medium text-[#302b25]">
                  {guests}
                </span>
              </div>


              <div className="flex justify-between gap-4">
                <span className="text-sm text-[#8d8377]">
                  Venue
                </span>

                <span className="text-right text-sm font-medium text-[#302b25]">
                  {venue}
                </span>
              </div>

            </div>


            {/* =================================================
                TOTAL
            ================================================= */}

            <div className="relative mt-8">

              <p className="text-[10px] font-semibold tracking-[0.3em] text-[#999084]">
                ESTIMATED FOOD COST
              </p>

              <div className="mt-3 break-words font-serif text-3xl tracking-[-0.02em] text-[#a77d3d] sm:text-4xl">
                Rs. {estimatedCost.toLocaleString()}
              </div>

              <p className="mt-3 text-xs leading-6 text-[#8c8276]">
                This is an estimated food cost based on the selected
                package and guest count. Final pricing may vary based
                on your event requirements and facilities.
              </p>

            </div>


            {/* =================================================
                INQUIRY BUTTON
            ================================================= */}

            <Link
              href="/availability/inquiry"
              className="relative mt-8 block rounded-full bg-[#b89455] px-6 py-4 text-center text-[10px] font-semibold tracking-[0.25em] text-white shadow-[0_10px_30px_rgba(184,148,85,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a98246]"
            >
              SEND AN INQUIRY →
            </Link>

          </div>

        </div>

      </div>
    </main>
  );
}