import { createClient } from "@/lib/supabase/server";
import UploadForm from "./UploadForm";
import { deleteGalleryItemAction } from "../_actions/gallery";

export const dynamic = "force-dynamic";

const BUCKET = "gallery";

export default async function AdminGalleryPage() {
  const supabase = await createClient();
  const { data, error } = await supabase
    .from("gallery_items")
    .select("id, type, title, storage_path, created_at")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const items = (data ?? []).map((row) => ({
    ...row,
    publicUrl: supabase.storage.from(BUCKET).getPublicUrl(row.storage_path).data
      .publicUrl,
  }));

  return (
    <div>
      <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
        ADMIN
      </div>
      <h1 className="mt-3 font-serif text-3xl tracking-[-0.02em] text-[#302b25] sm:text-4xl">
        Gallery
      </h1>
      <p className="mt-3 max-w-lg text-sm leading-6 text-[#756c60]">
        Upload photos and videos that appear on the public gallery page.
      </p>

      <div className="mt-8">
        <UploadForm />
      </div>

      {error ? (
        <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
          {error.message}
        </p>
      ) : null}

      <h2 className="mt-12 font-serif text-2xl text-[#302b25]">
        Current items ({items.length})
      </h2>

      {items.length === 0 ? (
        <div className="mt-4 rounded-3xl border border-dashed border-[#ded6c8] bg-white/60 p-10 text-center text-sm text-[#8c806f]">
          No gallery items yet. Upload one above.
        </div>
      ) : (
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <div
              key={item.id}
              className="overflow-hidden rounded-3xl border border-[#ded6c8] bg-white shadow-[0_10px_40px_rgba(67,52,32,0.04)]"
            >
              <div className="relative aspect-[4/3] bg-[#eee8dc]">
                {item.type === "video" ? (
                  <video
                    src={item.publicUrl}
                    className="h-full w-full object-cover"
                    muted
                    playsInline
                    controls
                    preload="metadata"
                  />
                ) : (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={item.publicUrl}
                    alt={item.title ?? ""}
                    className="h-full w-full object-cover"
                  />
                )}
                <span className="absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-0.5 text-[9px] font-semibold uppercase tracking-[0.2em] text-white">
                  {item.type}
                </span>
              </div>
              <div className="flex items-center justify-between gap-3 px-4 py-3">
                <div className="min-w-0">
                  <div className="truncate font-serif text-base text-[#302b25]">
                    {item.title ?? "—"}
                  </div>
                  <div className="text-[10px] text-[#8c806f]">
                    {new Date(item.created_at).toLocaleDateString()}
                  </div>
                </div>
                <form action={deleteGalleryItemAction}>
                  <input type="hidden" name="id" value={item.id} />
                  <input
                    type="hidden"
                    name="storage_path"
                    value={item.storage_path}
                  />
                  <button
                    type="submit"
                    className="rounded-full border border-red-200 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-red-600 transition hover:bg-red-50"
                  >
                    Delete
                  </button>
                </form>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
