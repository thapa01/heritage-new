"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function InquiryPage() {
  const searchParams = useSearchParams();
  const selectedDate = searchParams.get("date");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");
  const [eventType, setEventType] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      name,
      phone,
      guests,
      eventType,
      selectedDate,
      message,
    });

    alert("Inquiry submitted successfully!");
  };

  const formattedDate = selectedDate
    ? new Date(`${selectedDate}T00:00:00`).toLocaleDateString(
        "en-US",
        {
          day: "numeric",
          month: "long",
          year: "numeric",
        }
      )
    : "Date not selected";

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#2c2822]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden px-6 pb-16 pt-36 md:pb-20 md:pt-44">

        <div className="pointer-events-none absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#c59a52]/10 blur-[130px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative mx-auto max-w-4xl text-center"
        >

          <div className="flex items-center justify-center gap-4 text-[10px] font-semibold tracking-[0.45em] text-[#a77d3d]">
            <span className="h-px w-12 bg-[#b89455]" />

            EVENT INQUIRY

            <span className="h-px w-12 bg-[#b89455]" />
          </div>

          <h1 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.03em] md:text-7xl lg:text-8xl">
            Let's plan your
            <span className="block italic text-[#b89455]">
              celebration.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-[#6f675d] md:text-base">
            Tell us a little about your event and our team will
            help you create a memorable experience at Boudha
            Heritage.
          </p>

        </motion.div>

      </section>


      {/* =====================================================
          FORM SECTION
      ===================================================== */}

      <section className="px-6 pb-28 md:pb-36">

        <div className="mx-auto max-w-6xl">

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid gap-8 lg:grid-cols-[300px_1fr]"
          >

            {/* =================================================
                SELECTED DATE CARD
            ================================================= */}

            <div className="h-fit rounded-[2rem] border border-[#ded6c8] bg-[#eee8dc] p-7 shadow-[0_25px_80px_rgba(67,52,32,0.05)] md:p-8">

              <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
                YOUR DATE
              </div>

              <div className="mt-6 font-serif text-3xl leading-tight tracking-[-0.02em] text-[#302b25]">
                {formattedDate}
              </div>

              <div className="mt-6 h-px bg-[#d8cfc1]" />

              <p className="mt-5 text-xs leading-6 text-[#756c60]">
                Your selected date is currently available.
                Complete the form to send your event inquiry.
              </p>

              <Link
                href="/availability"
                className="mt-7 inline-flex items-center gap-2 text-[10px] font-semibold tracking-[0.18em] text-[#8c806f] transition hover:text-[#a77d3d]"
              >
                ← CHANGE DATE
              </Link>

            </div>


            {/* =================================================
                FORM CARD
            ================================================= */}

            <div className="rounded-[2rem] border border-[#ded6c8] bg-white p-7 shadow-[0_25px_80px_rgba(67,52,32,0.07)] md:p-10">

              <form onSubmit={handleSubmit}>

                {/* FORM FIELDS */}

                <div className="grid gap-8 md:grid-cols-2">

                  {/* NAME */}

                  <div>
                    <label className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]">
                      FULL NAME
                    </label>

                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Enter your name"
                      required
                      className="mt-3 w-full border-b border-[#dcd5ca] bg-transparent px-0 py-4 text-sm text-[#302b25] outline-none placeholder:text-[#b5ada2] transition focus:border-[#b89455]"
                    />
                  </div>


                  {/* PHONE */}

                  <div>
                    <label className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]">
                      PHONE NUMBER
                    </label>

                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="Enter your phone number"
                      required
                      className="mt-3 w-full border-b border-[#dcd5ca] bg-transparent px-0 py-4 text-sm text-[#302b25] outline-none placeholder:text-[#b5ada2] transition focus:border-[#b89455]"
                    />
                  </div>


                  {/* GUESTS */}

                  <div>
                    <label className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]">
                      NUMBER OF GUESTS
                    </label>

                    <input
                      type="number"
                      min="1"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                      placeholder="e.g. 200"
                      required
                      className="mt-3 w-full border-b border-[#dcd5ca] bg-transparent px-0 py-4 text-sm text-[#302b25] outline-none placeholder:text-[#b5ada2] transition focus:border-[#b89455]"
                    />
                  </div>


                  {/* EVENT TYPE */}

                  <div>
                    <label className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]">
                      EVENT TYPE
                    </label>

                    <select
                      value={eventType}
                      onChange={(e) => setEventType(e.target.value)}
                      required
                      className="mt-3 w-full border-b border-[#dcd5ca] bg-white px-0 py-4 text-sm text-[#302b25] outline-none transition focus:border-[#b89455]"
                    >
                      <option value="" disabled>
                        Select event type
                      </option>

                      <option value="Wedding">
                        Wedding
                      </option>

                      <option value="Reception">
                        Reception
                      </option>

                      <option value="Birthday">
                        Birthday
                      </option>

                      <option value="Corporate">
                        Corporate Event
                      </option>

                      <option value="Party">
                        Party
                      </option>

                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>

                </div>


                {/* =================================================
                    MESSAGE
                ================================================= */}

                <div className="mt-9">

                  <label className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]">
                    MESSAGE
                  </label>

                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Tell us about your celebration..."
                    rows={5}
                    className="mt-3 w-full resize-none rounded-2xl border border-[#e1dbd1] bg-[#faf8f4] p-5 text-sm leading-6 text-[#302b25] outline-none placeholder:text-[#b5ada2] transition focus:border-[#b89455] focus:bg-white"
                  />

                </div>


                {/* =================================================
                    SUBMIT
                ================================================= */}

                <div className="mt-8 flex flex-col items-start justify-between gap-5 border-t border-[#e8e1d6] pt-7 sm:flex-row sm:items-center">

                  <div className="max-w-xs text-xs leading-5 text-[#999084]">
                    We'll get back to you regarding your event.
                  </div>

                  <button
                    type="submit"
                    className="w-full rounded-full bg-[#b89455] px-8 py-4 text-xs font-semibold tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(184,148,85,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a98246] sm:w-auto"
                  >
                    SEND INQUIRY →
                  </button>

                </div>

              </form>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}