import { createClient } from "@/lib/supabase/server";
import AvailabilityCalendar from "./AvailabilityCalendar";

export const dynamic = "force-dynamic";

export default async function AdminAvailabilityPage() {
  const supabase = await createClient();

  // Lazy purge so the admin never sees stale past dates while waiting for
  // the nightly pg_cron job (migration 0004). Safe to run every load —
  // it's a small, indexed DELETE on the PK.
  const today = new Date().toISOString().slice(0, 10);
  const { error: purgeError } = await supabase
    .from("available_dates")
    .delete()
    .lt("date", today);

  const { data, error: fetchError } = await supabase
    .from("available_dates")
    .select("date")
    .order("date", { ascending: true });

  const error = fetchError ?? purgeError;

  const dates = (data ?? []).map((r) => r.date as string);

  return (
    <div>
      <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
        ADMIN
      </div>
      <h1 className="mt-3 font-serif text-3xl tracking-[-0.02em] text-[#302b25] sm:text-4xl">
        Availability
      </h1>
      <p className="mt-3 max-w-lg text-sm leading-6 text-[#756c60]">
        Click a date to toggle whether it&apos;s available for bookings on the
        public site.
      </p>

      {error ? (
        <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
          {error.message}
        </p>
      ) : null}

      <div className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
        <AvailabilityCalendar availableDates={dates} />

        <aside className="h-fit rounded-[2rem] border border-[#ded6c8] bg-[#eee8dc] p-6 sm:p-7 md:p-8">
          <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
            PUBLISHED DATES
          </div>
          <div className="mt-4 font-serif text-4xl text-[#302b25]">
            {dates.length}
          </div>
          <p className="mt-2 text-xs text-[#756c60]">
            currently live on the site.
          </p>

          <div className="mt-6 max-h-[420px] space-y-1 overflow-y-auto border-t border-[#d8cfc1] pt-4 text-sm text-[#4a443c]">
            {dates.length === 0 ? (
              <div className="text-xs text-[#8c806f]">No dates published yet.</div>
            ) : (
              dates.map((d) => (
                <div key={d} className="rounded-md px-2 py-1 hover:bg-white/50">
                  {new Date(`${d}T00:00:00`).toLocaleDateString("en-US", {
                    weekday: "short",
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </div>
              ))
            )}
          </div>
        </aside>
      </div>
    </div>
  );
}
