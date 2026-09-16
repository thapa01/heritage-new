import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export const dynamic = "force-dynamic";

export default async function AdminDashboardPage() {
  const supabase = await createClient();

  const [inquiriesRes, newInquiriesRes, availableRes, galleryRes] =
    await Promise.all([
      supabase.from("inquiries").select("*", { count: "exact", head: true }),
      supabase
        .from("inquiries")
        .select("*", { count: "exact", head: true })
        .eq("status", "new"),
      supabase
        .from("available_dates")
        .select("*", { count: "exact", head: true }),
      supabase
        .from("gallery_items")
        .select("*", { count: "exact", head: true }),
    ]);

  const results = [inquiriesRes, newInquiriesRes, availableRes, galleryRes];
  const errors = results
    .map((r) => r.error?.message)
    .filter((m): m is string => Boolean(m));

  const num = (r: (typeof results)[number]) =>
    r.error ? null : (r.count ?? 0);

  const cards = [
    {
      label: "Total inquiries",
      value: num(inquiriesRes),
      href: "/admin/inquiries",
      hint:
        newInquiriesRes.error
          ? "Could not load unread count"
          : `${newInquiriesRes.count ?? 0} unread`,
    },
    {
      label: "Available dates",
      value: num(availableRes),
      href: "/admin/availability",
      hint: "Published to site",
    },
    {
      label: "Gallery items",
      value: num(galleryRes),
      href: "/admin/gallery",
      hint: "Photos + videos",
    },
  ];

  return (
    <div>
      <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
        ADMIN
      </div>
      <h1 className="mt-3 font-serif text-3xl tracking-[-0.02em] text-[#302b25] sm:text-4xl">
        Dashboard
      </h1>
      <p className="mt-3 max-w-lg text-sm leading-6 text-[#756c60]">
        A quick summary of your site. Use the menu to manage inquiries,
        availability, gallery and visitors.
      </p>

      {errors.length > 0 ? (
        <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
          Some counts could not be loaded: {errors.join("; ")}
        </p>
      ) : null}

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((c) => (
          <Link
            key={c.label}
            href={c.href}
            className="group rounded-3xl border border-[#ded6c8] bg-white p-6 shadow-[0_15px_50px_rgba(67,52,32,0.05)] transition hover:-translate-y-0.5 hover:border-[#b89455]/60"
          >
            <div className="text-[10px] font-semibold tracking-[0.25em] text-[#a49a8a]">
              {c.label.toUpperCase()}
            </div>
            <div className="mt-3 font-serif text-5xl text-[#302b25]">
              {c.value ?? "—"}
            </div>
            <div className="mt-2 text-xs text-[#756c60]">{c.hint}</div>
            <div className="mt-6 text-[10px] font-semibold tracking-[0.2em] text-[#a77d3d] transition group-hover:text-[#8c6a30]">
              OPEN →
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
