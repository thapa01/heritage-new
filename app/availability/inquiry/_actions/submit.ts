"use server";

import { createHash } from "node:crypto";
import { headers } from "next/headers";
import { createAdminClient } from "@/lib/supabase/admin";

export type InquiryFormState =
  | { status: "idle" }
  | { status: "success" }
  | { status: "error"; message: string };

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

function isValidIsoDate(s: string): boolean {
  if (!ISO_DATE.test(s)) return false;
  const [y, m, d] = s.split("-").map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d));
  return (
    dt.getUTCFullYear() === y &&
    dt.getUTCMonth() === m - 1 &&
    dt.getUTCDate() === d
  );
}

function hashIp(ipPrefix: string): string {
  // Salt with a per-deploy secret when available so the stored hash isn't
  // trivially reversible against the tiny space of possible /24 prefixes.
  const salt = process.env.IP_HASH_SALT ?? "boudha-heritage";
  return createHash("sha256").update(`${salt}:${ipPrefix}`).digest("hex");
}

export async function submitInquiryAction(
  _prev: InquiryFormState,
  formData: FormData
): Promise<InquiryFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const phone = String(formData.get("phone") ?? "").trim();
  const guestsRaw = String(formData.get("guests") ?? "").trim();
  const eventType = String(formData.get("eventType") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const eventDateRaw = String(formData.get("eventDate") ?? "").trim();

  if (!name || !phone) {
    return { status: "error", message: "Name and phone are required." };
  }

  const guests = guestsRaw ? Number.parseInt(guestsRaw, 10) : null;
  if (guestsRaw && (!Number.isFinite(guests) || (guests as number) < 1)) {
    return { status: "error", message: "Guests must be a positive number." };
  }

  let eventDate: string | null = null;
  if (eventDateRaw) {
    if (!isValidIsoDate(eventDateRaw)) {
      return {
        status: "error",
        message: "Selected date is invalid. Please pick a date from the calendar.",
      };
    }
    eventDate = eventDateRaw;
  }

  const headerList = await headers();
  const userAgent = headerList.get("user-agent")?.slice(0, 500) ?? null;
  const forwardedFor = headerList.get("x-forwarded-for") ?? "";
  const ip =
    forwardedFor.split(",")[0]?.trim() || headerList.get("x-real-ip") || "";
  const ipHash = ip
    ? hashIp(ip.includes(".") ? ip.split(".").slice(0, 3).join(".") : ip)
    : null;

  // Use service-role so RLS can lock out anonymous inserts entirely —
  // only this Server Action (running server-side) can write inquiries.
  const supabase = createAdminClient();
  const { error } = await supabase.from("inquiries").insert({
    name,
    phone,
    guests,
    event_type: eventType || null,
    event_date: eventDate,
    message: message || null,
    ip_hash: ipHash,
    user_agent: userAgent,
  });

  if (error) {
    return { status: "error", message: error.message };
  }

  void sendInquiryEmail({ name, phone, guests, eventType, eventDate, message });

  return { status: "success" };
}

async function sendInquiryEmail(payload: {
  name: string;
  phone: string;
  guests: number | null;
  eventType: string;
  eventDate: string | null;
  message: string;
}) {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.INQUIRY_NOTIFY_FROM;
  const to = process.env.INQUIRY_NOTIFY_TO;
  if (!apiKey || !from || !to) return;

  try {
    const { Resend } = await import("resend");
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      subject: `New inquiry from ${payload.name}`,
      text: [
        `Name: ${payload.name}`,
        `Phone: ${payload.phone}`,
        `Guests: ${payload.guests ?? "—"}`,
        `Event type: ${payload.eventType || "—"}`,
        `Event date: ${payload.eventDate ?? "—"}`,
        "",
        "Message:",
        payload.message || "—",
      ].join("\n"),
    });
  } catch (err) {
    console.error("[inquiry email]", err);
  }
}
