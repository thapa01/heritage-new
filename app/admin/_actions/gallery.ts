"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";

const BUCKET = "gallery";

function slugify(name: string) {
  return name
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 40) || "file";
}

function extFromName(name: string) {
  const idx = name.lastIndexOf(".");
  if (idx === -1) return "";
  return name.slice(idx).toLowerCase();
}

export async function uploadGalleryItemAction(formData: FormData) {
  const file = formData.get("file") as File | null;
  const title = String(formData.get("title") ?? "").trim() || null;

  if (!file || file.size === 0) {
    return { ok: false as const, error: "No file selected." };
  }

  const mime = file.type;
  const type: "image" | "video" | null = mime.startsWith("image/")
    ? "image"
    : mime.startsWith("video/")
      ? "video"
      : null;
  if (!type) {
    return { ok: false as const, error: `Unsupported file type: ${mime}` };
  }

  const supabase = await createClient();
  const suffix = Math.random().toString(36).slice(2, 8);
  const stem = title ? slugify(title) : slugify(file.name);
  const key = `${type}s/${Date.now()}-${suffix}-${stem}${extFromName(file.name)}`;

  const bytes = new Uint8Array(await file.arrayBuffer());
  const { error: uploadErr } = await supabase.storage
    .from(BUCKET)
    .upload(key, bytes, {
      contentType: mime,
      cacheControl: "3600",
      upsert: false,
    });
  if (uploadErr) {
    return { ok: false as const, error: uploadErr.message };
  }

  const { error: insertErr } = await supabase.from("gallery_items").insert({
    type,
    title,
    storage_path: key,
  });
  if (insertErr) {
    await supabase.storage.from(BUCKET).remove([key]);
    return { ok: false as const, error: insertErr.message };
  }

  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
  return { ok: true as const };
}

export async function deleteGalleryItemAction(formData: FormData) {
  const id = String(formData.get("id") ?? "").trim();
  const path = String(formData.get("storage_path") ?? "").trim();
  if (!id || !path) return;

  const supabase = await createClient();
  await supabase.storage.from(BUCKET).remove([path]);
  await supabase.from("gallery_items").delete().eq("id", id);

  revalidatePath("/admin/gallery");
  revalidatePath("/gallery");
}
