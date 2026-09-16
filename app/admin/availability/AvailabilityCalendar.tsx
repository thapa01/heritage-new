"use client";

import { useState, useTransition } from "react";
import { toggleAvailableDateAction } from "../_actions/availability";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];
const WEEK_DAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];

function fmt(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export default function AvailabilityCalendar({
  availableDates,
}: {
  availableDates: string[];
}) {
  const today = new Date();
  const todayStr = fmt(today);
  const [cursor, setCursor] = useState(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [pending, startTransition] = useTransition();
  const [pendingDate, setPendingDate] = useState<string | null>(null);

  const y = cursor.getFullYear();
  const m = cursor.getMonth();
  const firstDay = new Date(y, m, 1).getDay();
  const daysInMonth = new Date(y, m + 1, 0).getDate();

  const cells: (number | null)[] = [];
  for (let i = 0; i < firstDay; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  const available = new Set(availableDates);

  function toggle(day: number, dateStr: string) {
    if (dateStr < todayStr) return;
    const isAvailable = available.has(dateStr);
    const fd = new FormData();
    fd.set("date", dateStr);
    fd.set("action", isAvailable ? "remove" : "add");
    setPendingDate(dateStr);
    startTransition(async () => {
      await toggleAvailableDateAction(fd);
      setPendingDate(null);
    });
  }

  return (
    <div className="rounded-[2rem] border border-[#ded6c8] bg-white p-6 shadow-[0_15px_50px_rgba(67,52,32,0.05)] sm:p-8 md:p-10">
      <div className="flex items-center justify-between border-b border-[#e8e1d6] pb-5 sm:pb-7">
        <button
          type="button"
          onClick={() => setCursor(new Date(y, m - 1, 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd3c3] text-[#766d61] transition hover:border-[#b89455] hover:text-[#a77d3d]"
        >
          ←
        </button>
        <div className="text-center">
          <div className="font-serif text-2xl tracking-[-0.02em] text-[#302b25] sm:text-3xl">
            {MONTH_NAMES[m]}
          </div>
          <div className="mt-1 text-[10px] font-medium tracking-[0.3em] text-[#9a9185]">
            {y}
          </div>
        </div>
        <button
          type="button"
          onClick={() => setCursor(new Date(y, m + 1, 1))}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-[#ddd3c3] text-[#766d61] transition hover:border-[#b89455] hover:text-[#a77d3d]"
        >
          →
        </button>
      </div>

      <div className="mt-6 grid grid-cols-7 sm:mt-8">
        {WEEK_DAYS.map((d) => (
          <div
            key={d}
            className="pb-3 text-center text-[8px] font-semibold tracking-[0.12em] text-[#aaa196] sm:pb-4 sm:text-[9px] sm:tracking-[0.15em]"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-y-2 sm:gap-y-3">
        {cells.map((day, i) => {
          if (day === null) return <div key={`e-${i}`} className="h-10 sm:h-12" />;
          const dateStr = fmt(new Date(y, m, day));
          const isAvailable = available.has(dateStr);
          const isPast = dateStr < todayStr;
          const isPending = pendingDate === dateStr && pending;

          return (
            <button
              key={dateStr}
              type="button"
              disabled={isPast || isPending}
              onClick={() => toggle(day, dateStr)}
              title={isPast ? "Past dates cannot be marked available" : undefined}
              className={`
                mx-auto flex h-9 w-9 items-center justify-center rounded-full text-xs transition-all duration-200
                sm:h-12 sm:w-12 sm:text-sm
                ${
                  isPast
                    ? "cursor-not-allowed text-[#d8d2c8] line-through decoration-[#e6dfd2]"
                    : isAvailable
                      ? "bg-[#b89455] font-semibold text-white shadow-[0_8px_25px_rgba(184,148,85,0.28)] hover:bg-[#a98246]"
                      : "border border-[#e6dfd2] text-[#6f675d] hover:border-[#b89455] hover:text-[#a77d3d]"
                }
                ${isPending ? "opacity-40" : ""}
              `}
            >
              {day}
            </button>
          );
        })}
      </div>

      <div className="mt-6 border-t border-[#e8e1d6] pt-5 text-center text-xs text-[#999084] sm:mt-8 sm:pt-6">
        Click any future date to toggle availability. Past dates are read-only
        and are never shown on the public site.
      </div>
    </div>
  );
}
