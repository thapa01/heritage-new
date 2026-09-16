"use client";

import { useRef, useState, useTransition } from "react";
import { uploadGalleryItemAction } from "../_actions/gallery";

export default function UploadForm() {
  const [pending, startTransition] = useTransition();
  const [message, setMessage] = useState<
    { kind: "ok" | "err"; text: string } | null
  >(null);
  const [dragOver, setDragOver] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  function submit(fd: FormData) {
    setMessage(null);
    const file = fd.get("file");
    if (!(file instanceof File) || file.size === 0) {
      setMessage({ kind: "err", text: "Choose a file before uploading." });
      return;
    }
    startTransition(async () => {
      const result = await uploadGalleryItemAction(fd);
      if (result?.ok) {
        setMessage({ kind: "ok", text: "Uploaded." });
        formRef.current?.reset();
      } else {
        setMessage({ kind: "err", text: result?.error ?? "Upload failed." });
      }
    });
  }

  return (
    <form
      ref={formRef}
      className="rounded-3xl border border-[#ded6c8] bg-white p-6 shadow-[0_15px_50px_rgba(67,52,32,0.05)]"
      onSubmit={(e) => {
        e.preventDefault();
        submit(new FormData(e.currentTarget));
      }}
    >
      <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
        NEW UPLOAD
      </div>
      <h2 className="mt-2 font-serif text-xl text-[#302b25]">
        Add photo or video
      </h2>

      <div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto]">
        <label className="block">
          <span className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]">
            TITLE (OPTIONAL)
          </span>
          <input
            type="text"
            name="title"
            placeholder="e.g. Reception hall"
            className="mt-2 w-full border-b border-[#dcd5ca] bg-transparent px-0 py-3 text-sm outline-none focus:border-[#b89455]"
          />
        </label>
      </div>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          const dropped = e.dataTransfer.files?.[0];
          if (dropped && inputRef.current) {
            const dt = new DataTransfer();
            dt.items.add(dropped);
            inputRef.current.files = dt.files;
          }
        }}
        className={`mt-5 flex flex-col items-center justify-center rounded-2xl border-2 border-dashed p-8 text-center transition ${
          dragOver
            ? "border-[#b89455] bg-[#b89455]/10"
            : "border-[#ded6c8] bg-[#faf6ec]"
        }`}
      >
        <p className="text-sm text-[#6f675d]">
          Drag & drop an image or video here, or
        </p>
        <label className="mt-3 cursor-pointer rounded-full border border-[#b89455] px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-[#a77d3d] hover:bg-[#b89455] hover:text-white">
          CHOOSE FILE
          <input
            ref={inputRef}
            type="file"
            name="file"
            accept="image/*,video/*"
            className="hidden"
          />
        </label>
        <p className="mt-3 text-[10px] tracking-[0.2em] text-[#a49a8a]">
          IMAGES & VIDEOS SUPPORTED
        </p>
      </div>

      {message ? (
        <p
          className={`mt-5 rounded-xl border px-4 py-3 text-xs ${
            message.kind === "ok"
              ? "border-emerald-200 bg-emerald-50 text-emerald-700"
              : "border-red-200 bg-red-50 text-red-700"
          }`}
        >
          {message.text}
        </p>
      ) : null}

      <div className="mt-6 flex justify-end">
        <button
          type="submit"
          disabled={pending}
          className="rounded-full bg-[#b89455] px-6 py-3 text-[10px] font-semibold tracking-[0.2em] text-white transition hover:-translate-y-0.5 hover:bg-[#a98246] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {pending ? "UPLOADING…" : "UPLOAD →"}
        </button>
      </div>
    </form>
  );
}
