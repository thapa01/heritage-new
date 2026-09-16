"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const weekDays = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function formatDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

export default function AvailabilityView({
  availableDates,
  initialYear,
  initialMonth,
}: {
  availableDates: string[];
  initialYear: number;
  initialMonth: number;
}) {
  const router = useRouter();

  const [currentDate, setCurrentDate] = useState(
    new Date(initialYear, initialMonth, 1)
  );
  const [selectedDate, setSelectedDate] = useState("");

  const availableSet = new Set(availableDates);
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const calendarDays: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) calendarDays.push(null);
  for (let day = 1; day <= daysInMonth; day++) calendarDays.push(day);

  const previousMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const handleDateClick = (day: number) => {
    const dateString = formatDate(new Date(year, month, day));
    if (!availableSet.has(dateString)) return;
    setSelectedDate(dateString);
  };

  const continueToInquiry = () => {
    if (!selectedDate) return;
    router.push(`/availability/inquiry?date=${selectedDate}`);
  };

  const formattedSelectedDate = selectedDate
    ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "";

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#2c2822]">
      <section className="relative overflow-hidden px-5 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-36 md:pb-20 md:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c59a52]/10 blur-[130px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-3 text-[9px] font-semibold tracking-[0.35em] text-[#a77d3d] sm:gap-4 sm:text-[10px] sm:tracking-[0.45em]">
            <span className="h-px w-8 bg-[#b89455] sm:w-12" />
            AVAILABILITY
            <span className="h-px w-8 bg-[#b89455] sm:w-12" />
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl md:text-7xl lg:text-8xl">
            Find your
            <span className="block italic text-[#b89455]">perfect date.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#6f675d] sm:mt-7 md:text-base">
            Check our calendar and choose an available date for your celebration
            at Boudha Heritage.
          </p>
        </motion.div>
      </section>

      <section className="px-5 pb-20 sm:px-6 sm:pb-28 md:pb-36">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:gap-8 lg:grid-cols-[1fr_330px]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="rounded-[1.5rem] border border-[#ded6c8] bg-white p-4 shadow-[0_25px_80px_rgba(67,52,32,0.07)] sm:rounded-[2rem] sm:p-6 md:p-10"
            >
              <div className="flex items-center justify-between border-b border-[#e8e1d6] pb-5 sm:pb-7">
                <button
                  type="button"
                  onClick={previousMonth}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd3c3] text-[#766d61] transition hover:border-[#b89455] hover:bg-[#b89455]/5 hover:text-[#a77d3d] sm:h-11 sm:w-11"
                >
                  ←
                </button>

                <div className="text-center">
                  <div className="font-serif text-2xl tracking-[-0.02em] text-[#302b25] sm:text-3xl">
                    {monthNames[month]}
                  </div>
                  <div className="mt-1 text-[10px] font-medium tracking-[0.3em] text-[#9a9185]">
                    {year}
                  </div>
                </div>

                <button
                  type="button"
                  onClick={nextMonth}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd3c3] text-[#766d61] transition hover:border-[#b89455] hover:bg-[#b89455]/5 hover:text-[#a77d3d] sm:h-11 sm:w-11"
                >
                  →
                </button>
              </div>

              <div className="mt-6 grid grid-cols-7 sm:mt-8">
                {weekDays.map((day) => (
                  <div
                    key={day}
                    className="pb-3 text-center text-[8px] font-semibold tracking-[0.12em] text-[#aaa196] sm:pb-4 sm:text-[9px] sm:tracking-[0.15em]"
                  >
                    {day}
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-7 gap-y-2 sm:gap-y-3">
                {calendarDays.map((day, index) => {
                  if (day === null) {
                    return <div key={`empty-${index}`} className="h-10 sm:h-12" />;
                  }

                  const dateString = formatDate(new Date(year, month, day));
                  const isAvailable = availableSet.has(dateString);
                  const isSelected = selectedDate === dateString;

                  return (
                    <button
                      key={dateString}
                      type="button"
                      disabled={!isAvailable}
                      onClick={() => handleDateClick(day)}
                      className={`
                        mx-auto flex h-9 w-9 items-center justify-center
                        rounded-full text-xs transition-all duration-300
                        sm:h-12 sm:w-12 sm:text-sm
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

              <div className="mt-6 border-t border-[#e8e1d6] pt-5 sm:mt-8 sm:pt-6">
                <p className="text-center text-xs leading-6 text-[#999084]">
                  Select a highlighted date to continue with your event inquiry.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="rounded-[1.5rem] border border-[#ded6c8] bg-[#eee8dc] p-6 shadow-[0_25px_80px_rgba(67,52,32,0.05)] sm:rounded-[2rem] sm:p-7 md:p-8"
            >
              <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
                PLAN YOUR EVENT
              </div>

              <h2 className="mt-5 font-serif text-2xl leading-tight tracking-[-0.02em] text-[#302b25] sm:text-3xl">
                Choose an
                <span className="block italic text-[#b89455]">available date.</span>
              </h2>

              <p className="mt-5 text-sm leading-7 text-[#756c60]">
                Available dates are highlighted in gold. Select a date to continue
                with your event inquiry.
              </p>

              <div className="mt-8 space-y-4 border-t border-[#d8cfc1] pt-7">
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[#b89455]" />
                  <span className="text-xs text-[#756c60]">Available</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[#d6d0c6]" />
                  <span className="text-xs text-[#9b9286]">Unavailable</span>
                </div>
              </div>

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
                Your selected date will be carried forward to the inquiry form.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
