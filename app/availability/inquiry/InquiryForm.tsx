"use client";

import { useActionState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  submitInquiryAction,
  type InquiryFormState,
} from "./_actions/submit";

const INITIAL_STATE: InquiryFormState = { status: "idle" };

export default function InquiryPage() {
  const searchParams = useSearchParams();
  const selectedDate = searchParams.get("date");

  const [state, formAction, pending] = useActionState(
    submitInquiryAction,
    INITIAL_STATE
  );

  useEffect(() => {
    if (state.status === "success") {
      const form = document.getElementById("inquiry-form") as HTMLFormElement | null;
      form?.reset();
    }
  }, [state]);

  const formattedDate = selectedDate
    ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString("en-US", {
        day: "numeric",
        month: "long",
        year: "numeric",
      })
    : "Date not selected";

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#2c2822]">
      <section className="relative overflow-hidden px-5 pb-12 pt-28 sm:px-6 sm:pb-16 sm:pt-36 md:pb-20 md:pt-44">
        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c59a52]/10 blur-[130px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl text-center"
        >
          <div className="flex items-center justify-center gap-3 text-[9px] font-semibold tracking-[0.35em] text-[#a77d3d] sm:gap-4 sm:text-[10px] sm:tracking-[0.45em]">
            <span className="h-px w-8 bg-[#b89455] sm:w-12" />
            EVENT INQUIRY
            <span className="h-px w-8 bg-[#b89455] sm:w-12" />
          </div>

          <h1 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] sm:text-5xl md:text-7xl lg:text-8xl">
            Let&apos;s plan your
            <span className="block italic text-[#b89455]">celebration.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#6f675d] sm:mt-7 md:text-base">
            Tell us a little about your event and our team will help you create
            a memorable experience at Boudha Heritage.
          </p>
        </motion.div>
      </section>

      <section className="px-5 pb-20 sm:px-6 sm:pb-28 md:pb-36">
        <div className="mx-auto max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid gap-6 sm:gap-8 lg:grid-cols-[300px_1fr]"
          >
            <div className="h-fit rounded-[1.5rem] border border-[#ded6c8] bg-[#eee8dc] p-6 shadow-[0_25px_80px_rgba(67,52,32,0.05)] sm:rounded-[2rem] sm:p-7 md:p-8">
              <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
                YOUR DATE
              </div>
              <div className="mt-5 font-serif text-2xl leading-tight tracking-[-0.02em] text-[#302b25] sm:mt-6 sm:text-3xl">
                {formattedDate}
              </div>
              <div className="mt-6 h-px bg-[#d8cfc1]" />
              <p className="mt-5 text-xs leading-6 text-[#756c60]">
                Your selected date is currently available. Complete the form to
                send your event inquiry.
              </p>
              <Link
                href="/availability"
                className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-[#8c806f] transition hover:text-[#a77d3d]"
              >
                ← CHANGE DATE
              </Link>
            </div>

            <div className="rounded-[1.5rem] border border-[#ded6c8] bg-white p-6 shadow-[0_25px_80px_rgba(67,52,32,0.07)] sm:rounded-[2rem] sm:p-7 md:p-10">
              {state.status === "success" ? (
                <div className="flex flex-col items-start gap-4 py-6">
                  <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
                    THANK YOU
                  </div>
                  <h2 className="font-serif text-3xl leading-tight tracking-[-0.02em] text-[#302b25]">
                    Your inquiry has been received.
                  </h2>
                  <p className="max-w-md text-sm leading-6 text-[#756c60]">
                    Our team will get back to you shortly regarding your event.
                  </p>
                  <Link
                    href="/"
                    className="mt-2 rounded-full bg-[#b89455] px-6 py-3 text-xs font-semibold tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(184,148,85,0.2)] transition hover:-translate-y-0.5 hover:bg-[#a98246]"
                  >
                    RETURN HOME →
                  </Link>
                </div>
              ) : (
                <form id="inquiry-form" action={formAction}>
                  <input type="hidden" name="eventDate" value={selectedDate ?? ""} />

                  <div className="grid gap-6 sm:gap-8 md:grid-cols-2">
                    <div>
                      <label className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        required
                        className="mt-3 w-full border-b border-[#dcd5ca] bg-transparent px-0 py-4 text-sm text-[#302b25] outline-none placeholder:text-[#b5ada2] transition focus:border-[#b89455]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]">
                        PHONE NUMBER
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Enter your phone number"
                        required
                        className="mt-3 w-full border-b border-[#dcd5ca] bg-transparent px-0 py-4 text-sm text-[#302b25] outline-none placeholder:text-[#b5ada2] transition focus:border-[#b89455]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]">
                        NUMBER OF GUESTS
                      </label>
                      <input
                        type="number"
                        name="guests"
                        min="1"
                        placeholder="e.g. 200"
                        className="mt-3 w-full border-b border-[#dcd5ca] bg-transparent px-0 py-4 text-sm text-[#302b25] outline-none placeholder:text-[#b5ada2] transition focus:border-[#b89455]"
                      />
                    </div>

                    <div>
                      <label className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]">
                        EVENT TYPE
                      </label>
                      <select
                        name="eventType"
                        defaultValue=""
                        className="mt-3 w-full border-b border-[#dcd5ca] bg-white px-0 py-4 text-sm text-[#302b25] outline-none transition focus:border-[#b89455]"
                      >
                        <option value="" disabled>
                          Select event type
                        </option>
                        <option value="Wedding">Wedding</option>
                        <option value="Reception">Reception</option>
                        <option value="Birthday">Birthday</option>
                        <option value="Corporate">Corporate Event</option>
                        <option value="Party">Party</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="mt-9">
                    <label className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]">
                      MESSAGE
                    </label>
                    <textarea
                      name="message"
                      placeholder="Tell us about your celebration..."
                      rows={5}
                      className="mt-3 w-full resize-none rounded-2xl border border-[#e1dbd1] bg-[#faf8f4] p-5 text-sm leading-6 text-[#302b25] outline-none placeholder:text-[#b5ada2] transition focus:border-[#b89455] focus:bg-white"
                    />
                  </div>

                  {state.status === "error" ? (
                    <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
                      {state.message}
                    </p>
                  ) : null}

                  <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-[#e8e1d6] pt-7 sm:flex-row sm:items-center">
                    <div className="max-w-xs text-xs leading-5 text-[#999084]">
                      We&apos;ll get back to you regarding your event.
                    </div>

                    <button
                      type="submit"
                      disabled={pending}
                      className="w-full rounded-full bg-[#b89455] px-8 py-4 text-xs font-semibold tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(184,148,85,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a98246] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
                    >
                      {pending ? "SENDING…" : "SEND INQUIRY →"}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
