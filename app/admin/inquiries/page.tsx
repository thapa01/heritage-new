import { createClient } from "@/lib/supabase/server";
import {
  updateInquiryStatusAction,
  deleteInquiryAction,
} from "../_actions/inquiries";

export const dynamic = "force-dynamic";

type Status = "new" | "read" | "replied" | "archived";
const STATUSES: Status[] = ["new", "read", "replied", "archived"];

const STATUS_STYLE: Record<Status, string> = {
  new: "bg-[#b89455]/15 text-[#a77d3d] border-[#b89455]/40",
  read: "bg-blue-50 text-blue-700 border-blue-200",
  replied: "bg-emerald-50 text-emerald-700 border-emerald-200",
  archived: "bg-neutral-100 text-neutral-500 border-neutral-200",
};

type SearchParams = Promise<{ status?: string }>;

export default async function InquiriesPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { status } = await searchParams;
  const filter = STATUSES.includes(status as Status) ? (status as Status) : null;

  const supabase = await createClient();
  let query = supabase
    .from("inquiries")
    .select("id, name, phone, guests, event_type, event_date, message, status, created_at")
    .order("created_at", { ascending: false });
  if (filter) query = query.eq("status", filter);

  const { data: inquiries, error } = await query;

  return (
    <div>
      <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
        ADMIN
      </div>
      <h1 className="mt-3 font-serif text-3xl tracking-[-0.02em] text-[#302b25] sm:text-4xl">
        Inquiries
      </h1>
      <p className="mt-3 text-sm text-[#756c60]">
        Every inquiry submitted through the site.
      </p>

      <div className="mt-8 flex flex-wrap gap-2">
        <FilterLink label="All" href="/admin/inquiries" active={!filter} />
        {STATUSES.map((s) => (
          <FilterLink
            key={s}
            label={s}
            href={`/admin/inquiries?status=${s}`}
            active={filter === s}
          />
        ))}
      </div>

      {error ? (
        <p className="mt-8 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
          {error.message}
        </p>
      ) : null}

      <div className="mt-8 space-y-4">
        {(inquiries ?? []).length === 0 ? (
          <div className="rounded-3xl border border-dashed border-[#ded6c8] bg-white/60 p-10 text-center text-sm text-[#8c806f]">
            No inquiries {filter ? `with status "${filter}"` : "yet"}.
          </div>
        ) : (
          (inquiries ?? []).map((inq) => (
            <article
              key={inq.id}
              className="rounded-3xl border border-[#ded6c8] bg-white p-6 shadow-[0_10px_40px_rgba(67,52,32,0.04)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3">
                    <h2 className="font-serif text-xl text-[#302b25]">
                      {inq.name}
                    </h2>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.2em] ${STATUS_STYLE[inq.status as Status]}`}
                    >
                      {inq.status}
                    </span>
                  </div>
                  <div className="mt-1 text-xs text-[#8c806f]">
                    {new Date(inq.created_at).toLocaleString()}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {STATUSES.filter((s) => s !== inq.status).map((s) => (
                    <form key={s} action={updateInquiryStatusAction}>
                      <input type="hidden" name="id" value={inq.id} />
                      <input type="hidden" name="status" value={s} />
                      <button
                        type="submit"
                        className="rounded-full border border-[#ded6c8] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#756c60] transition hover:border-[#b89455] hover:text-[#a77d3d]"
                      >
                        Mark {s}
                      </button>
                    </form>
                  ))}
                  <form action={deleteInquiryAction}>
                    <input type="hidden" name="id" value={inq.id} />
                    <button
                      type="submit"
                      className="rounded-full border border-red-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-600 transition hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>

              <dl className="mt-5 grid gap-4 text-sm sm:grid-cols-2 lg:grid-cols-4">
                <Field label="Phone" value={inq.phone} />
                <Field label="Guests" value={inq.guests?.toString() ?? "—"} />
                <Field label="Event type" value={inq.event_type ?? "—"} />
                <Field
                  label="Event date"
                  value={
                    inq.event_date
                      ? new Date(`${inq.event_date}T00:00:00`).toLocaleDateString()
                      : "—"
                  }
                />
              </dl>

              {inq.message ? (
                <div className="mt-5 rounded-2xl bg-[#faf6ec] p-4 text-sm leading-6 text-[#4a443c]">
                  {inq.message}
                </div>
              ) : null}
            </article>
          ))
        )}
      </div>
    </div>
  );
}

function FilterLink({
  label,
  href,
  active,
}: {
  label: string;
  href: string;
  active: boolean;
}) {
  return (
    <a
      href={href}
      className={`rounded-full border px-4 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] transition ${
        active
          ? "border-[#b89455] bg-[#b89455] text-white"
          : "border-[#ded6c8] bg-white text-[#756c60] hover:border-[#b89455] hover:text-[#a77d3d]"
      }`}
    >
      {label}
    </a>
  );
}

function Field({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-[10px] font-semibold tracking-[0.2em] text-[#a49a8a]">
        {label.toUpperCase()}
      </div>
      <div className="mt-1 text-sm text-[#302b25]">{value}</div>
    </div>
  );
}
