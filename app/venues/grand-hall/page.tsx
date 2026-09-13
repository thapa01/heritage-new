"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const facilities = [
  {
    number: "01",
    title: "Large Capacity",
    description:
      "Spacious accommodation for large-scale celebrations and gatherings.",
  },
  {
    number: "02",
    title: "Air Conditioned",
    description:
      "A comfortable climate-controlled environment throughout the event.",
  },
  {
    number: "03",
    title: "Premium Bar",
    description:
      "A dedicated bar experience designed to complement your celebration.",
  },
  {
    number: "04",
    title: "Multiple Stages",
    description:
      "Flexible stage arrangements for performances, ceremonies and receptions.",
  },
  {
    number: "05",
    title: "VIP Lounge",
    description:
      "A private and comfortable space for VIP guests and special moments.",
  },
  {
    number: "06",
    title: "Grand Entrance",
    description:
      "A striking entrance experience that sets the tone for your celebration.",
  },
];

const gallery = [
  "/cot02.jpg",
  "/cot03.jpg",
  "/cot05.jpg",
];

const fadeUp: Variants = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const fadeScale: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.96,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.8,
    },
  },
};

export default function GrandHallPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ea] text-[#302b25]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-[75vh] items-end overflow-hidden bg-[#211d18] sm:min-h-[88vh]">

        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/boudha.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Dark cinematic overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17120e]/90 via-[#211b15]/55 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17120e]/85 via-transparent to-[#17120e]/10" />

        {/* Hero Content */}
        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-40 md:px-10 md:pb-28 lg:px-16">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >

            <div className="mb-6 flex items-center gap-3 text-[9px] font-semibold tracking-[0.35em] text-[#e3c38b] sm:mb-7 sm:gap-4 sm:text-[10px] sm:tracking-[0.45em]">
              <span className="h-px w-8 bg-[#d0a75f] sm:w-12" />
              SIGNATURE VENUE · 01
            </div>

            <h1 className="font-serif text-6xl leading-[0.92] tracking-[-0.02em] text-white xs:text-7xl sm:text-8xl sm:leading-[0.88] md:text-9xl lg:text-[120px]">
              Grand
              <span className="block italic text-[#dfbd7e]">
                Hall.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-sm leading-7 text-white/75 sm:mt-8 sm:leading-8 md:text-lg">
              A magnificent celebration space created for grand weddings,
              receptions, ceremonies and unforgettable occasions.
            </p>

            <div className="mt-7 flex flex-wrap gap-3 sm:mt-9 sm:gap-4">

              <Link
                href="/availability"
                className="rounded-full bg-[#d5aa62] px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-[#211b15] transition duration-300 hover:-translate-y-1 hover:bg-[#e4c27f] sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.18em]"
              >
                CHECK AVAILABILITY →
              </Link>

              <Link
                href="/availability/inquiry"
                className="rounded-full border border-white/35 bg-white/10 px-6 py-3.5 text-[11px] font-semibold tracking-[0.16em] text-white backdrop-blur-md transition duration-300 hover:border-[#e0bd7c] hover:bg-white/15 hover:text-[#e0bd7c] sm:px-7 sm:py-4 sm:text-xs sm:tracking-[0.18em]"
              >
                MAKE AN INQUIRY
              </Link>

            </div>

          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 1 }}
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-[9px] tracking-[0.35em] text-white/50 md:flex"
        >
          SCROLL
          <span className="h-px w-10 bg-white/30" />
        </motion.div>

      </section>


      {/* =====================================================
          VENUE OVERVIEW
      ===================================================== */}

      <section className="relative overflow-hidden px-5 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-center gap-12 sm:gap-14 lg:grid-cols-2 lg:gap-24">

            {/* Text */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >

              <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
                THE GRAND HALL
              </div>

              <h2 className="mt-6 font-serif text-4xl leading-[0.95] tracking-[-0.025em] text-[#302b25] sm:text-5xl md:text-7xl">
                Made for
                <span className="block italic text-[#b89455]">
                  grand occasions.
                </span>
              </h2>

              <p className="mt-6 max-w-xl text-sm leading-7 text-[#6f675d] sm:mt-8 sm:leading-8 md:text-base">
                Designed as a statement celebration space, Grand Hall brings
                together scale, comfort and an elegant atmosphere for events
                that deserve something extraordinary.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#6f675d] sm:leading-8 md:text-base">
                From weddings and receptions to large gatherings and special
                celebrations, the space can be arranged around the needs of
                your event.
              </p>

              <div className="mt-10 flex items-center gap-5">
                <div className="h-px w-14 bg-[#b89455]" />

                <span className="text-[10px] font-medium tracking-[0.3em] text-[#8b8174]">
                  BOUDHA HERITAGE
                </span>
              </div>

            </motion.div>


            {/* Capacity Card */}
            <motion.div
              variants={fadeScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative min-h-[360px] overflow-hidden rounded-[1.75rem] border border-[#ded5c7] bg-white shadow-[0_25px_80px_rgba(64,48,28,0.08)] sm:min-h-[430px] sm:rounded-[2rem]"
            >

              {/* Decorative circles */}
              <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89455]/10" />

              <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89455]/15" />

              <div className="absolute left-1/2 top-1/2 h-[170px] w-[170px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89455]/10" />

              {/* Corner details */}
              <div className="absolute left-8 top-8 h-10 w-10 border-l border-t border-[#b89455]/30" />

              <div className="absolute bottom-8 right-8 h-10 w-10 border-b border-r border-[#b89455]/30" />

              <div className="relative flex min-h-[360px] items-center justify-center sm:min-h-[430px]">

                <div className="text-center">

                  <div className="font-serif text-6xl tracking-[-0.04em] text-[#b89455] sm:text-7xl md:text-9xl">
                    2,000
                  </div>

                  <div className="mt-5 text-[10px] font-semibold tracking-[0.35em] text-[#8b8174]">
                    GUEST CAPACITY
                  </div>

                  <div className="mx-auto mt-7 h-px w-16 bg-[#b89455]" />

                  <div className="mt-5 text-xs tracking-[0.15em] text-[#8b8174]">
                    GRAND CELEBRATIONS
                  </div>

                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FACILITIES
      ===================================================== */}

      <section className="border-y border-[#ded5c7] bg-[#eee8dc] px-5 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10 max-w-3xl sm:mb-14"
          >

            <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
              FACILITIES
            </div>

            <h2 className="mt-5 font-serif text-4xl leading-[0.95] tracking-[-0.025em] text-[#302b25] sm:text-5xl md:text-7xl">
              Everything your
              <span className="block italic text-[#b89455]">
                celebration needs.
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-sm leading-7 text-[#6f675d]">
              Thoughtfully designed facilities to make large celebrations
              comfortable, memorable and effortless.
            </p>

          </motion.div>


          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">

            {facilities.map((facility, index) => (

              <motion.div
                key={facility.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group rounded-[1.5rem] border border-[#ded5c7] bg-white p-6 shadow-[0_15px_45px_rgba(64,48,28,0.04)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(64,48,28,0.09)] sm:p-8"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[#b89455]/40 text-xs font-medium text-[#b89455]">
                    {facility.number}
                  </div>

                  <div className="h-px w-12 bg-[#b89455]/20 transition-all duration-500 group-hover:w-20 group-hover:bg-[#b89455]/50" />

                </div>

                <h3 className="mt-6 font-serif text-xl text-[#302b25] sm:mt-8 sm:text-2xl md:text-3xl">
                  {facility.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#746b60]">
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

      <section className="bg-[#f7f3ea] px-5 py-16 sm:px-6 sm:py-24 md:py-32 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="mb-10 flex flex-col justify-between gap-6 sm:mb-14 md:flex-row md:items-end">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
                GRAND HALL GALLERY
              </div>

              <h2 className="mt-5 font-serif text-4xl leading-[0.95] tracking-[-0.025em] text-[#302b25] sm:text-5xl md:text-7xl">
                See the
                <span className="block italic text-[#b89455]">
                  space.
                </span>
              </h2>

            </motion.div>


            <Link
              href="/gallery"
              className="group flex items-center gap-3 text-xs font-semibold tracking-[0.18em] text-[#776d61] transition hover:text-[#b89455]"
            >
              VIEW FULL GALLERY

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Link>

          </div>


          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

            {gallery.map((image, index) => (

              <motion.div
                key={`${image}-${index}`}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-[#ded5c7] bg-white shadow-[0_15px_45px_rgba(64,48,28,0.05)]"
              >

                <img
                  src={image}
                  alt={`Grand Hall view ${index + 1}`}
                  className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60 transition duration-500 group-hover:opacity-80" />

                <div className="absolute bottom-5 left-5 text-[9px] font-medium tracking-[0.3em] text-white/85">
                  GRAND HALL · 0{index + 1}
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOOKING CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#2b241c] px-5 py-20 sm:px-6 sm:py-28 md:py-36 lg:px-16">

        {/* Decorative circles */}
        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-[#d0a75f]/10" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-[#d0a75f]/10" />

        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d0a75f]/5" />

        <div className="relative mx-auto max-w-4xl text-center">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >

            <div className="text-[10px] font-semibold tracking-[0.45em] text-[#d8b677]">
              PLAN YOUR EVENT
            </div>

            <h2 className="mt-6 font-serif text-4xl leading-[0.95] tracking-[-0.025em] text-white sm:text-5xl md:text-7xl lg:text-8xl">
              Your grand
              <span className="block italic text-[#dfbd7e]">
                celebration starts here.
              </span>
            </h2>

            <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/60">
              Tell us about your event and let our team help you plan an
              unforgettable celebration at Grand Hall.
            </p>

            <div className="mt-9 flex flex-wrap justify-center gap-4">

              <Link
                href="/availability"
                className="rounded-full bg-[#d5aa62] px-8 py-4 text-xs font-semibold tracking-[0.18em] text-[#211b15] transition duration-300 hover:-translate-y-1 hover:bg-[#e4c27f]"
              >
                CHECK AVAILABILITY
              </Link>

              <Link
                href="/availability/inquiry"
                className="rounded-full border border-white/25 px-8 py-4 text-xs font-semibold tracking-[0.18em] text-white/85 transition duration-300 hover:border-[#d5aa62] hover:text-[#d5aa62]"
              >
                MAKE AN INQUIRY
              </Link>

            </div>

          </motion.div>

        </div>

      </section>

    </main>
  );
}