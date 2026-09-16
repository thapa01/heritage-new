import { createClient } from "@/lib/supabase/server";
import GalleryView from "./GalleryView";

export const dynamic = "force-dynamic";

const BUCKET = "gallery";

export default async function GalleryPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from("gallery_items")
    .select("id, type, title, storage_path")
    .order("sort_order", { ascending: true })
    .order("created_at", { ascending: false });

  const items = (data ?? []).map((row) => ({
    type: row.type as "image" | "video",
    title: row.title as string | null,
    src: supabase.storage.from(BUCKET).getPublicUrl(row.storage_path).data
      .publicUrl,
  }));

  const videos = items.filter((i) => i.type === "video");
  const photos = items.filter((i) => i.type === "image");

  return <GalleryView videos={videos} photos={photos} />;
}
