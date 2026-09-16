import { createClient } from "@/lib/supabase/server";
import AvailabilityView from "./AvailabilityView";

export const dynamic = "force-dynamic";

export default async function AvailabilityPage() {
  const supabase = await createClient();
  const today = new Date().toISOString().slice(0, 10);
  const { data } = await supabase
    .from("available_dates")
    .select("date")
    .gte("date", today)
    .order("date", { ascending: true });

  const dates = (data ?? []).map((r) => r.date as string);

  // Land on the earliest published month if any, otherwise the current one.
  const first = dates[0];
  const initial = first ? new Date(`${first}T00:00:00`) : new Date();

  return (
    <AvailabilityView
      availableDates={dates}
      initialYear={initial.getFullYear()}
      initialMonth={initial.getMonth()}
    />
  );
}
