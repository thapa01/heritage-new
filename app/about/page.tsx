"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const highlights = [
  {
    number: "01",
    title: "A Grand Setting",
    description:
      "A sophisticated celebration destination designed for memorable gatherings in the heart of Boudha.",
  },
  {
    number: "02",
    title: "Authentic Hospitality",
    description:
      "Thoughtful service, elegant surroundings and a welcoming experience for every celebration.",
  },
  {
    number: "03",
    title: "Celebration Dining",
    description:
      "Curated menu experiences created to complement weddings, receptions and special occasions.",
  },
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
      ease: "easeOut",
    },
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f7f3ea] text-[#302b25]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative flex min-h-[82vh] items-end overflow-hidden bg-[#211d18]">

        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/boudha.mp4"
          autoPlay
          muted
          loop
          playsInline
        />

        {/* Cinematic overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#17120e]/90 via-[#211b15]/55 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17120e]/85 via-transparent to-[#17120e]/10" />

        <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 pb-20 pt-40 md:px-10 md:pb-28 lg:px-16">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-5xl"
          >

            <div className="mb-7 flex items-center gap-4 text-[10px] font-semibold tracking-[0.45em] text-[#e3c38b]">
              <span className="h-px w-12 bg-[#d0a75f]" />
              ABOUT BOUDHA HERITAGE
            </div>

            <h1 className="font-serif text-6xl leading-[0.88] tracking-[-0.03em] text-white sm:text-7xl md:text-8xl lg:text-[110px]">
              Where every
              <span className="block text-[#dfbd7e]">
                celebration
              </span>
              <span className="block italic">
                becomes a memory.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-sm leading-8 text-white/75 md:text-lg">
              Boudha Heritage is a celebration destination in Kathmandu,
              bringing together elegant spaces, authentic hospitality and
              memorable dining experiences.
            </p>

          </motion.div>

        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 right-8 hidden items-center gap-3 text-[9px] tracking-[0.35em] text-white/50 md:flex"
        >
          SCROLL
          <span className="h-px w-10 bg-white/30" />
        </motion.div>

      </section>


      {/* =====================================================
          INTRODUCTION
      ===================================================== */}

      <section className="relative overflow-hidden px-6 py-28 md:py-36 lg:px-16">

        {/* Decorative circle */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[620px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89455]/10" />

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[440px] w-[440px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89455]/10" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="relative mx-auto max-w-4xl text-center"
        >

          <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
            THE HERITAGE EXPERIENCE
          </div>

          <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.025em] text-[#302b25] md:text-7xl">
            More than a venue.
            <span className="block italic text-[#b89455]">
              A place to celebrate.
            </span>
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-8 text-[#6f675d] md:text-lg">
            From intimate gatherings to grand celebrations, Boudha Heritage
            offers a distinctive setting where timeless surroundings,
            hospitality and celebration come together.
          </p>

          <div className="mx-auto mt-10 flex items-center justify-center gap-4">
            <span className="h-px w-12 bg-[#b89455]/50" />
            <span className="text-[9px] font-medium tracking-[0.35em] text-[#9a8f80]">
              KATHMANDU · BOUDHA
            </span>
            <span className="h-px w-12 bg-[#b89455]/50" />
          </div>

        </motion.div>

      </section>


      {/* =====================================================
          HIGHLIGHTS
      ===================================================== */}

      <section className="border-y border-[#ded5c7] bg-[#eee8dc] px-6 py-24 md:py-32 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14"
          >

            <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
              WHAT DEFINES US
            </div>

            <h2 className="mt-5 max-w-3xl font-serif text-5xl leading-[0.95] tracking-[-0.025em] text-[#302b25] md:text-7xl">
              Designed around
              <span className="block italic text-[#b89455]">
                your celebration.
              </span>
            </h2>

          </motion.div>


          <div className="grid gap-5 md:grid-cols-3">

            {highlights.map((item, index) => (

              <motion.div
                key={item.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group rounded-[1.5rem] border border-[#ded5c7] bg-white p-8 shadow-[0_15px_45px_rgba(64,48,28,0.04)] transition duration-500 hover:-translate-y-2 hover:shadow-[0_25px_60px_rgba(64,48,28,0.09)]"
              >

                <div className="flex items-center justify-between">

                  <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#b89455]/40 font-serif text-sm text-[#b89455]">
                    {item.number}
                  </div>

                  <div className="h-px w-10 bg-[#b89455]/20 transition-all duration-500 group-hover:w-20 group-hover:bg-[#b89455]/50" />

                </div>

                <h3 className="mt-8 font-serif text-3xl text-[#302b25]">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-[#746b60]">
                  {item.description}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR APPROACH
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#f7f3ea] px-6 py-28 md:py-36 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">

            {/* Left Content */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
            >

              <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
                OUR APPROACH
              </div>

              <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.025em] text-[#302b25] md:text-7xl">
                Every detail
                <span className="block italic text-[#b89455]">
                  has a purpose.
                </span>
              </h2>

              <p className="mt-8 max-w-xl text-sm leading-8 text-[#6f675d] md:text-base">
                A memorable celebration is created through more than just a
                beautiful space. It is the atmosphere, the hospitality, the
                dining and the moments shared with the people who matter.
              </p>

              <p className="mt-5 max-w-xl text-sm leading-8 text-[#6f675d] md:text-base">
                At Boudha Heritage, each element comes together to create a
                celebration experience that feels effortless, elegant and
                memorable.
              </p>

              <Link
                href="/venues/grand-hall"
                className="group mt-9 inline-flex items-center gap-3 rounded-full border border-[#cbbda9] bg-white px-7 py-4 text-xs font-semibold tracking-[0.18em] text-[#4b443c] shadow-[0_10px_30px_rgba(64,48,28,0.04)] transition duration-300 hover:-translate-y-1 hover:border-[#b89455] hover:text-[#b89455]"
              >
                EXPLORE GRAND HALL
                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </Link>

            </motion.div>


            {/* Right Feature Card */}
            <motion.div
              variants={fadeScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.2 }}
              className="relative min-h-[430px] overflow-hidden rounded-[2rem] border border-[#ded5c7] bg-white shadow-[0_25px_80px_rgba(64,48,28,0.08)]"
            >

              {/* Decorative circles */}
              <div className="absolute left-1/2 top-1/2 h-[390px] w-[390px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89455]/10" />

              <div className="absolute left-1/2 top-1/2 h-[285px] w-[285px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89455]/15" />

              <div className="absolute left-1/2 top-1/2 h-[175px] w-[175px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89455]/10" />

              {/* Corner details */}
              <div className="absolute left-8 top-8 h-10 w-10 border-l border-t border-[#b89455]/30" />

              <div className="absolute bottom-8 right-8 h-10 w-10 border-b border-r border-[#b89455]/30" />

              <div className="relative flex min-h-[430px] items-center justify-center">

                <div className="text-center">

                  <div className="font-serif text-7xl tracking-[-0.04em] text-[#b89455] md:text-9xl">
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
          EXPERIENCE
      ===================================================== */}

      <section className="border-y border-[#ded5c7] bg-[#eee8dc] px-6 py-24 md:py-32 lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">

            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >

              <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
                THE EXPERIENCE
              </div>

              <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.025em] text-[#302b25] md:text-7xl">
                A destination
                <span className="block italic text-[#b89455]">
                  for moments.
                </span>
              </h2>

            </motion.div>


            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >

              <p className="text-base leading-8 text-[#6f675d] md:text-lg">
                Whether it is a wedding, reception, ceremony or a special
                gathering, Boudha Heritage provides a setting designed to make
                the occasion feel truly significant.
              </p>

              <p className="text-sm leading-8 text-[#746b60] md:text-base">
                From the first arrival to the final moment of the celebration,
                the experience is shaped around comfort, elegance and the
                people you bring together.
              </p>

              <div className="grid gap-4 pt-4 sm:grid-cols-2">

                <div className="rounded-2xl border border-[#d9cfbf] bg-white p-6">
                  <div className="font-serif text-3xl text-[#b89455]">
                    Grand
                  </div>

                  <div className="mt-2 text-[10px] font-semibold tracking-[0.25em] text-[#8b8174]">
                    CELEBRATIONS
                  </div>
                </div>

                <div className="rounded-2xl border border-[#d9cfbf] bg-white p-6">
                  <div className="font-serif text-3xl text-[#b89455]">
                    Timeless
                  </div>

                  <div className="mt-2 text-[10px] font-semibold tracking-[0.25em] text-[#8b8174]">
                    MEMORIES
                  </div>
                </div>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#2b241c] px-6 py-28 md:py-36 lg:px-16">

        {/* Decorative circles */}
        <div className="absolute -right-32 -top-32 h-[450px] w-[450px] rounded-full border border-[#d0a75f]/10" />

        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full border border-[#d0a75f]/10" />

        <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#d0a75f]/5" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl text-center"
        >

          <div className="text-[10px] font-semibold tracking-[0.45em] text-[#d8b677]">
            YOUR CELEBRATION AWAITS
          </div>

          <h2 className="mt-6 font-serif text-5xl leading-[0.95] tracking-[-0.025em] text-white md:text-8xl">
            Let's create
            <span className="block italic text-[#dfbd7e]">
              something beautiful.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-sm leading-7 text-white/60">
            Tell us about your event and let our team help you plan an
            unforgettable celebration at Boudha Heritage.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              href="/availability/inquiry"
              className="rounded-full bg-[#d5aa62] px-8 py-4 text-xs font-semibold tracking-[0.18em] text-[#211b15] transition duration-300 hover:-translate-y-1 hover:bg-[#e4c27f]"
            >
              MAKE AN INQUIRY →
            </Link>

            <Link
              href="/availability"
              className="rounded-full border border-white/25 px-8 py-4 text-xs font-semibold tracking-[0.18em] text-white/85 transition duration-300 hover:border-[#d5aa62] hover:text-[#d5aa62]"
            >
              CHECK AVAILABILITY
            </Link>

          </div>

        </motion.div>

      </section>

    </main>
  );
}