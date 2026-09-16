"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

function isIsoDate(s: string) {
  return /^\d{4}-\d{2}-\d{2}$/.test(s);
}

export async function toggleAvailableDateAction(formData: FormData) {
  const date = String(formData.get("date") ?? "").trim();
  const action = String(formData.get("action") ?? "").trim();
  if (!isIsoDate(date)) return;

  const supabase = await createClient();

  if (action === "remove") {
    await supabase.from("available_dates").delete().eq("date", date);
  } else {
    // Defense in depth — the UI also blocks this, but never let a past
    // date get published as bookable.
    const today = new Date().toISOString().slice(0, 10);
    if (date < today) return;
    await supabase
      .from("available_dates")
      .upsert({ date }, { onConflict: "date" });
  }

  revalidatePath("/admin/availability");
  revalidatePath("/availability");
}
