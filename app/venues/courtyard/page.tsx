"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const facilities = [
  {
    number: "01",
    title: "Open-Air Setting",
    description:
      "A beautiful outdoor environment for celebrations, gatherings and memorable evenings.",
  },
  {
    number: "02",
    title: "Flexible Layout",
    description:
      "A versatile space that can be arranged according to the style and requirements of your event.",
  },
  {
    number: "03",
    title: "Elegant Ambience",
    description:
      "Warm lighting, heritage-inspired surroundings and an atmosphere designed for special occasions.",
  },
  {
    number: "04",
    title: "Dining Experience",
    description:
      "A comfortable setting for dining, celebrations and intimate social gatherings.",
  },
  {
    number: "05",
    title: "Event Friendly",
    description:
      "Suitable for receptions, parties, ceremonies and a variety of private events.",
  },
  {
    number: "06",
    title: "Beautiful Evenings",
    description:
      "An atmospheric outdoor setting that becomes especially memorable after sunset.",
  },
];

const gallery = [
  "/image/gallery/photo-1.jpg",
  "/image/gallery/photo-1.jpg",
  "/image/gallery/photo-1.jpg",
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};

export default function CourtyardPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ea] text-[#2c2822]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-[75vh] items-center overflow-hidden sm:min-h-[80vh]">

        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/boudha.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Hero overlays */}

        <div className="absolute inset-0 bg-gradient-to-r from-[#17120d]/90 via-[#17120d]/60 to-[#17120d]/20" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#f7f3ea] via-transparent to-black/20" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 py-28 sm:px-6 sm:py-32 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-4xl"
          >

            <div className="mb-6 flex items-center gap-3 text-[9px] font-semibold tracking-[0.35em] text-[#e1c48c] sm:mb-7 sm:gap-4 sm:text-[10px] sm:tracking-[0.45em]">
              <span className="h-px w-8 bg-[#d6bd8d] sm:w-12" />
              SIGNATURE VENUE · 02
            </div>

            <h1 className="font-serif text-[44px] leading-[0.95] text-white xs:text-5xl sm:text-6xl sm:leading-[0.9] md:text-8xl lg:text-[110px]">

              The

              <span className="block italic text-[#e0c18a]">
                Courtyard.
              </span>

            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:mt-8 sm:text-base sm:leading-8 md:text-lg">
              An elegant open-air setting created for intimate celebrations,
              beautiful gatherings and unforgettable evenings.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">

              <Link
                href="/availability"
                className="rounded-full bg-[#b89455] px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(184,148,85,0.2)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a98246] sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.18em]"
              >
                CHECK AVAILABILITY →
              </Link>

              <Link
                href="/availability/inquiry"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-white backdrop-blur-md transition hover:border-[#d6bd8d] hover:text-[#e0c18a] sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.18em]"
              >
                MAKE AN INQUIRY
              </Link>

            </div>

          </motion.div>

        </div>

      </section>


      {/* =====================================================
          OVERVIEW
      ===================================================== */}

      <section className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 md:py-36">

        <div className="mx-auto max-w-7xl">

          <div className="grid items-center gap-12 sm:gap-16 md:grid-cols-2">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >

              <div className="text-[10px] font-semibold tracking-[0.45em] text-[#a77d3d]">
                THE COURTYARD
              </div>

              <h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#302b25] sm:text-5xl md:text-7xl">

                Where celebrations

                <span className="block italic text-[#b89455]">
                  meet the open sky.
                </span>

              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#6f675d] sm:mt-7 md:text-base">
                The Courtyard offers a relaxed yet sophisticated setting for
                celebrations that call for something more intimate and
                atmospheric.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#6f675d] md:text-base">
                From private gatherings and receptions to evening celebrations,
                the space can be transformed to match the mood of your event.
              </p>

            </motion.div>


            {/* Capacity Card */}

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative flex min-h-[340px] items-center justify-center overflow-hidden rounded-[1.75rem] border border-[#ded6c8] bg-[#eee8dc] shadow-[0_25px_80px_rgba(67,52,32,0.06)] sm:min-h-[420px] sm:rounded-[2rem]"
            >

              <div className="absolute h-[280px] w-[280px] rounded-full border border-[#b89455]/15 sm:h-[360px] sm:w-[360px]" />

              <div className="absolute h-[200px] w-[200px] rounded-full border border-[#b89455]/15 sm:h-[260px] sm:w-[260px]" />

              <div className="relative text-center">

                <div className="font-serif text-6xl tracking-[-0.04em] text-[#b89455] sm:text-7xl md:text-9xl">
                  500
                </div>

                <div className="mt-4 text-[10px] font-semibold tracking-[0.35em] text-[#958b7e]">
                  GUEST CAPACITY
                </div>

                <div className="mx-auto mt-6 h-px w-16 bg-[#b89455]/50" />

                <div className="mt-5 text-xs tracking-[0.15em] text-[#8f867a]">
                  INTIMATE CELEBRATIONS
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section className="border-y border-[#ded6c8] bg-[#eee8dc] px-5 py-20 sm:px-6 sm:py-28 md:py-32">

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 sm:mb-14"
          >

            <div className="text-[10px] font-semibold tracking-[0.45em] text-[#a77d3d]">
              COURTYARD FEATURES
            </div>

            <h2 className="mt-5 font-serif text-4xl tracking-[-0.03em] text-[#302b25] sm:text-5xl md:text-7xl">

              Designed for

              <span className="block italic text-[#b89455]">
                memorable moments.
              </span>

            </h2>

          </motion.div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {facilities.map((facility, index) => (

              <motion.div
                key={facility.number}
                initial={{
                  opacity: 0,
                  y: 30,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group rounded-[1.5rem] border border-[#ded6c8] bg-white p-6 shadow-[0_18px_55px_rgba(67,52,32,0.045)] transition-all duration-500 hover:-translate-y-1 hover:border-[#b89455]/50 hover:shadow-[0_25px_65px_rgba(67,52,32,0.08)] sm:rounded-[1.75rem] sm:p-8"
              >

                <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b89455]/35 text-xs font-medium text-[#a77d3d]">
                  {facility.number}
                </div>

                <h3 className="mt-6 font-serif text-xl tracking-[-0.02em] text-[#302b25] sm:mt-7 sm:text-2xl">
                  {facility.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#7d7468]">
                  {facility.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY
      ===================================================== */}

      <section className="bg-[#f7f3ea] px-5 py-20 sm:px-6 sm:py-28 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">

            <div>

              <div className="text-[10px] font-semibold tracking-[0.45em] text-[#a77d3d]">
                COURTYARD GALLERY
              </div>

              <h2 className="mt-5 font-serif text-4xl tracking-[-0.03em] text-[#302b25] sm:text-5xl md:text-7xl">

                Experience the

                <span className="block italic text-[#b89455]">
                  atmosphere.
                </span>

              </h2>

            </div>

            <Link
              href="/gallery"
              className="text-xs font-semibold tracking-[0.18em] text-[#8c806f] transition hover:text-[#a77d3d]"
            >
              VIEW FULL GALLERY →
            </Link>

          </div>


          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

            {gallery.map((image, index) => (

              <motion.div
                key={`${image}-${index}`}
                initial={{
                  opacity: 0,
                  scale: 0.96,
                }}
                whileInView={{
                  opacity: 1,
                  scale: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group aspect-[4/3] overflow-hidden rounded-[1.75rem] border border-[#ded6c8] bg-[#eee8dc] shadow-[0_18px_55px_rgba(67,52,32,0.05)]"
              >

                <img
                  src={image}
                  alt={`Courtyard view ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden px-5 py-20 sm:px-6 sm:py-28 md:py-32">

        <div className="absolute inset-0 bg-[#eee8dc]" />

        <div className="absolute right-[-150px] top-[-180px] h-[500px] w-[500px] rounded-full border border-[#b89455]/15" />

        <div className="absolute left-[-120px] bottom-[-200px] h-[450px] w-[450px] rounded-full border border-[#b89455]/10" />

        <div className="relative mx-auto max-w-4xl text-center">

          <div className="text-[10px] font-semibold tracking-[0.45em] text-[#a77d3d]">
            PLAN YOUR CELEBRATION
          </div>

          <h2 className="mt-6 font-serif text-4xl leading-tight tracking-[-0.03em] text-[#302b25] sm:text-5xl md:text-7xl lg:text-8xl">

            Make it

            <span className="block italic text-[#b89455]">
              unforgettable.
            </span>

          </h2>

          <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-[#756c60] sm:mt-7">
            Tell us about your celebration and let our team help you create
            a beautiful experience at the Courtyard.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3 sm:mt-9 sm:gap-4">

            <Link
              href="/availability"
              className="rounded-full bg-[#b89455] px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-white shadow-[0_10px_30px_rgba(184,148,85,0.18)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#a98246] sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.18em]"
            >
              CHECK AVAILABILITY
            </Link>

            <Link
              href="/availability/inquiry"
              className="rounded-full border border-[#cfc5b6] bg-white/60 px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-[#756c60] transition-all duration-300 hover:-translate-y-1 hover:border-[#b89455] hover:text-[#a77d3d] sm:px-8 sm:py-4 sm:text-xs sm:tracking-[0.18em]"
            >
              MAKE AN INQUIRY
            </Link>

          </div>

        </div>

      </section>

    </main>
  );
}