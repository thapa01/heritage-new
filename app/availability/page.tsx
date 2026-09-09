"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

// Temporary demo availability.
// Later this will come from the Admin Panel / Supabase.
const availableDates = [
  "2026-09-12",
  "2026-09-15",
  "2026-09-18",
  "2026-09-20",
  "2026-09-24",
  "2026-09-27",
  "2026-09-30",
];

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

export default function AvailabilityPage() {
  const router = useRouter();

  const [currentDate, setCurrentDate] = useState(
    new Date(2026, 8, 1)
  );

  const [selectedDate, setSelectedDate] = useState("");

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays: (number | null)[] = [];

  for (let i = 0; i < firstDay; i++) {
    calendarDays.push(null);
  }

  for (let day = 1; day <= daysInMonth; day++) {
    calendarDays.push(day);
  }

  const previousMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1));
  };

  const nextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1));
  };

  const handleDateClick = (day: number) => {
    const date = new Date(year, month, day);
    const dateString = formatDate(date);

    if (!availableDates.includes(dateString)) {
      return;
    }

    setSelectedDate(dateString);
  };

  const continueToInquiry = () => {
    if (!selectedDate) return;

    router.push(`/availability/inquiry?date=${selectedDate}`);
  };

  const formattedSelectedDate = selectedDate
    ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString(
        "en-US",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )
    : "";

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#2c2822]">
      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:pb-20 md:pt-44">
        {/* Soft background glow */}
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c59a52]/10 blur-[130px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-4 text-[10px] font-semibold tracking-[0.45em] text-[#a77d3d]">
            <span className="h-px w-12 bg-[#b89455]" />

            AVAILABILITY

            <span className="h-px w-12 bg-[#b89455]" />
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.03em] md:text-7xl lg:text-8xl">
            Find your
            <span className="block italic text-[#b89455]">
              perfect date.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#6f675d] md:text-base">
            Check our calendar and choose an available date for
            your celebration at Boudha Heritage.
          </p>
        </motion.div>
      </section>

      {/* =====================================================
          CALENDAR SECTION
      ===================================================== */}

      <section className="px-6 pb-28 md:pb-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-[1fr_330px]">

            {/* =================================================
                CALENDAR CARD
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-[2rem] border border-[#ded6c8] bg-white p-6 shadow-[0_25px_80px_rgba(67,52,32,0.07)] md:p-10"
            >
              {/* Calendar Header */}

              <div className="flex items-center justify-between border-b border-[#e8e1d6] pb-7">
                <button
                  type="button"
                  onClick={previousMonth}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd3c3] text-[#766d61] transition hover:border-[#b89455] hover:bg-[#b89455]/5 hover:text-[#a77d3d]"
                >
                  ←
                </button>

                <div className="text-center">
                  <div className="font-serif text-3xl tracking-[-0.02em] text-[#302b25]">
                    {monthNames[month]}
                  </div>

                  <div className="mt-1 text-[10px] font-medium tracking-[0.3em] text-[#9a9185]">
                    {year}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={nextMonth}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#ddd3c3] text-[#766d61] transition hover:border-[#b89455] hover:bg-[#b89455]/5 hover:text-[#a77d3d]"
                >
                  →
                </button>
              </div>

              {/* Week Days */}

              <div className="mt-8 grid grid-cols-7">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="pb-4 text-center text-[9px] font-semibold tracking-[0.15em] text-[#aaa196]"
                  >
                    {day}
                  </div>
                ))}
              </div>

              {/* Calendar Dates */}

              <div className="grid grid-cols-7 gap-y-3">
                {calendarDays.map((day, index) => {
                  if (day === null) {
                    return (
                      <div
                        key={`empty-${index}`}
                        className="h-12"
                      />
                    );
                  }

                  const date = new Date(year, month, day);
                  const dateString = formatDate(date);

                  const isAvailable =
                    availableDates.includes(dateString);

                  const isSelected =
                    selectedDate === dateString;

                  return (
                    <button
                      key={dateString}
                      type="button"
                      disabled={!isAvailable}
                      onClick={() => handleDateClick(day)}
                      className={`
                        mx-auto flex h-12 w-12 items-center justify-center
                        rounded-full text-sm transition-all duration-300
                        ${
                          isSelected
                            ? "bg-[#b89455] font-semibold text-white shadow-[0_8px_25px_rgba(184,148,85,0.28)]"
                            : isAvailable
                              ? "border border-[#b89455]/35 bg-[#b89455]/5 text-[#a77d3d] hover:-translate-y-1 hover:border-[#b89455] hover:bg-[#b89455]/10 hover:shadow-[0_8px_20px_rgba(184,148,85,0.12)]"
                              : "cursor-not-allowed text-[#d8d2c8]"
                        }
                      `}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>

              {/* Calendar Bottom Note */}

              <div className="mt-8 border-t border-[#e8e1d6] pt-6">
                <p className="text-center text-xs leading-6 text-[#999084]">
                  Select a highlighted date to continue with your
                  event inquiry.
                </p>
              </div>
            </motion.div>

            {/* =================================================
                INFORMATION CARD
            ================================================= */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="rounded-[2rem] border border-[#ded6c8] bg-[#eee8dc] p-7 shadow-[0_25px_80px_rgba(67,52,32,0.05)] md:p-8"
            >
              <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
                PLAN YOUR EVENT
              </div>

              <h2 className="mt-5 font-serif text-3xl leading-tight tracking-[-0.02em] text-[#302b25]">
                Choose an
                <span className="block italic text-[#b89455]">
                  available date.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#756c60]">
                Available dates are highlighted in gold. Select a
                date to continue with your event inquiry.
              </p>

              {/* Legend */}

              <div className="mt-8 space-y-4 border-t border-[#d8cfc1] pt-7">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[#b89455]" />

                  <span className="text-xs text-[#756c60]">
                    Available
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[#d6d0c6]" />

                  <span className="text-xs text-[#9b9286]">
                    Unavailable
                  </span>
                </div>
              </div>

              {/* Selected Date */}

              {selectedDate && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 rounded-2xl border border-[#b89455]/25 bg-white/60 p-5"
                >
                  <div className="text-[9px] font-semibold tracking-[0.25em] text-[#9a9185]">
                    SELECTED DATE
                  </div>

                  <div className="mt-2 font-serif text-xl text-[#a77d3d]">
                    {formattedSelectedDate}
                  </div>
                </motion.div>
              )}

              {/* Continue Button */}

              <button
                type="button"
                disabled={!selectedDate}
                onClick={continueToInquiry}
                className={`
                  mt-7 w-full rounded-full px-6 py-4
                  text-xs font-semibold tracking-[0.18em]
                  transition-all duration-300
                  ${
                    selectedDate
                      ? "bg-[#b89455] text-white shadow-[0_10px_30px_rgba(184,148,85,0.2)] hover:-translate-y-1 hover:bg-[#a98246]"
                      : "cursor-not-allowed bg-[#ddd7cd] text-[#a9a196]"
                  }
                `}
              >
                CONTINUE →
              </button>

              <p className="mt-4 text-center text-[10px] leading-5 text-[#91887c]">
                Your selected date will be carried forward to the
                inquiry form.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}