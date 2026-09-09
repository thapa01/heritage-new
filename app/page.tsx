"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { useState } from "react";

const menus = [
  {
    name: "Silver Menu",
    price: "Rs. 2,575",
    subtitle: "32 Dishes",
    description:
      "A refined selection for elegant celebrations and memorable gatherings.",
    href: "/silver",
    image: "/silver01.png",
    position: "center",
    number: "01",
  },
  {
    name: "Gold Menu",
    price: "Rs. 2,775",
    subtitle: "43 Dishes",
    description:
      "A richer dining experience designed for meaningful celebrations.",
    href: "/gold",
    image: "/gold.png",
    position: "left",
    number: "02",
  },
  {
    name: "Diamond Menu",
    price: "Rs. 3,275",
    subtitle: "56 Dishes",
    description:
      "An exquisite dining experience created for grand occasions.",
    href: "/diamond",
    image: "/diamond.png",
    position: "right",
    number: "03",
  },
];

const venues = [
  {
    title: "Grand Hall",
    subtitle: "Grand · Elegant · Timeless",
    description:
      "A magnificent celebration space designed for large weddings, receptions and unforgettable occasions.",
    href: "/venues/grand-hall",
  },
  {
    title: "Courtyard",
    subtitle: "Open Air · Scenic · Versatile",
    description:
      "An atmospheric outdoor setting for intimate celebrations, gatherings and memorable evenings.",
    href: "/venues/courtyard",
  },
];

const galleryItems = [
  {
    type: "image",
    src: "/image/gallery/photo-1.jpg",
    title: "Heritage Moments",
  },
  {
    type: "video",
    src: "/video/gallery/eleena.mp4",
    title: "Celebration",
  },
  {
    type: "video",
    src: "/video/gallery/meet_geet.mp4",
    title: "Wedding Memories",
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


export default function Home() {
  const [isMuted, setIsMuted] = useState(true);

  const whatsappNumber = "9779703848334";

  const whatsappMessage = encodeURIComponent(
    "Hello Boudha Heritage, I would like to know more about your venue and booking options."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const googleMapsLink =
    "https://www.google.com/maps/search/?api=1&query=Boudha+Heritage+Banquet+Kathmandu";

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f3ea] text-[#27231e]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative min-h-screen overflow-hidden">

        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/boudha.mp4"
          autoPlay
          muted={isMuted}
          loop
          playsInline
        />

        <div className="absolute inset-0 bg-gradient-to-r from-[#17130f]/80 via-[#30271e]/35 to-transparent" />

        <div className="absolute inset-0 bg-gradient-to-t from-[#17130f]/65 via-transparent to-[#17130f]/10" />

        <div className="pointer-events-none absolute left-[8%] top-[25%] h-72 w-72 rounded-full bg-[#d6bd8d]/20 blur-[110px]" />

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pb-20 pt-32 lg:px-8">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >

            <div className="mb-7 flex items-center gap-4 text-[10px] font-medium tracking-[0.45em] text-[#ead6ad]">
              <span className="h-px w-12 bg-[#d6bd8d]" />
              BOUDHA · KATHMANDU · NEPAL
            </div>

            <h1 className="font-serif text-6xl leading-[0.92] tracking-[-0.025em] text-white sm:text-7xl md:text-8xl lg:text-[105px]">
              A Place Where

              <span className="block text-[#e2c78e]">
                Memories
              </span>

              <span className="block italic text-white">
                Live On.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-white/80 md:text-lg">
              Timeless spaces, authentic flavors and unforgettable
              celebrations in the heart of Boudha.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">

              <Link
                href="/availability"
                className="group rounded-full bg-[#d6bd8d] px-7 py-4 text-xs font-semibold tracking-[0.18em] text-[#27231e] shadow-lg shadow-black/10 transition duration-300 hover:-translate-y-1 hover:bg-[#ead6ad]"
              >
                CHECK AVAILABILITY

                <span className="ml-3 transition group-hover:translate-x-1">
                  →
                </span>
              </Link>

              <Link
                href="/venues/grand-hall"
                className="rounded-full border border-white/50 bg-white/10 px-7 py-4 text-xs font-semibold tracking-[0.18em] text-white backdrop-blur-md transition duration-300 hover:border-[#ead6ad] hover:bg-white/20 hover:text-[#ead6ad]"
              >
                EXPLORE VENUES
              </Link>

            </div>

            <div className="mt-14 grid max-w-2xl grid-cols-3 border-t border-white/25 pt-7">

              <div>
                <div className="font-serif text-3xl text-[#ead6ad]">
                  2,000
                </div>

                <div className="mt-2 text-[9px] tracking-[0.22em] text-white/65">
                  GUEST CAPACITY
                </div>
              </div>

              <div className="border-l border-white/20 pl-6">
                <div className="font-serif text-3xl text-[#ead6ad]">
                  02
                </div>

                <div className="mt-2 text-[9px] tracking-[0.22em] text-white/65">
                  SIGNATURE VENUES
                </div>
              </div>

              <div className="border-l border-white/20 pl-6">
                <div className="font-serif text-3xl text-[#ead6ad]">
                  03
                </div>

                <div className="mt-2 text-[9px] tracking-[0.22em] text-white/65">
                  MENU EXPERIENCES
                </div>
              </div>

            </div>

          </motion.div>

        </div>

        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[9px] tracking-[0.3em] text-white/70 md:flex">
          SCROLL
          <span className="h-10 w-px bg-white/40" />
        </div>

        <button
          type="button"
          onClick={() => setIsMuted(!isMuted)}
          className="absolute bottom-8 left-8 z-30 flex items-center gap-3 rounded-full border border-white/30 bg-black/20 px-5 py-3 text-[10px] tracking-[0.18em] text-white/90 backdrop-blur-md transition hover:border-[#ead6ad] hover:text-[#ead6ad]"
        >
          <span className="text-base">
            {isMuted ? "🔇" : "🔊"}
          </span>

          <span>
            {isMuted ? "SOUND OFF" : "SOUND ON"}
          </span>
        </button>

      </section>


      {/* =====================================================
          EXPERIENCE STRIP
      ===================================================== */}

      <section className="border-y border-[#d8cdbc] bg-[#eee8dc]">

        <div className="mx-auto grid max-w-7xl md:grid-cols-4">

          {[
            ["✦", "AUTHENTIC CUISINE", "Traditional flavors"],
            ["⌂", "ELEGANT VENUES", "For every celebration"],
            ["◇", "MEMORABLE MOMENTS", "Moments that last"],
            ["✧", "PRIME LOCATION", "In the heart of Boudha"],
          ].map(([icon, title, subtitle]) => (

            <div
              key={title}
              className="flex items-center gap-4 border-[#d8cdbc] px-6 py-7 md:border-r last:border-r-0"
            >

              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b89455]/40 bg-[#f7f3ea] text-[#b89455] shadow-sm">
                {icon}
              </div>

              <div>

                <div className="text-[10px] font-semibold tracking-[0.15em] text-[#39342d]">
                  {title}
                </div>

                <div className="mt-1 text-xs text-[#80776b]">
                  {subtitle}
                </div>

              </div>

            </div>

          ))}

        </div>

      </section>


      {/* =====================================================
          INTRO
      ===================================================== */}

      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        className="relative overflow-hidden bg-[#f7f3ea] px-6 py-28 md:py-36"
      >

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89455]/15" />

        <div className="relative mx-auto max-w-4xl text-center">

          <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
            THE BOUDHA EXPERIENCE
          </div>

          <h2 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.02em] text-[#2c2822] md:text-7xl">
            Where tradition meets

            <span className="block italic text-[#b89455]">
              modern celebration.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-[#756e64] md:text-lg">
            From intimate gatherings to grand celebrations,
            Boudha Heritage brings together elegant spaces,
            authentic hospitality and carefully crafted experiences.
          </p>

        </div>

      </motion.section>


      {/* =====================================================
          MENU
      ===================================================== */}

      <section
        id="menus"
        className="relative overflow-hidden bg-[#eee8dc] px-6 py-28 md:py-32"
      >

        <div className="pointer-events-none absolute right-[-200px] top-20 h-[600px] w-[600px] rounded-full border border-[#b89455]/15" />

        <div className="mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-14 flex flex-col justify-between gap-8 md:flex-row md:items-end"
          >

            <div>

              <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
                OUR MENU
              </div>

              <h2 className="mt-5 font-serif text-5xl leading-none tracking-[-0.02em] text-[#2c2822] md:text-7xl">
                A Taste of

                <span className="block italic text-[#b89455]">
                  Tradition.
                </span>
              </h2>

            </div>

            <p className="max-w-md text-sm leading-7 text-[#756e64]">
              From traditional Nepali flavors to curated celebration
              menus, each offering is designed to make your event special.
            </p>

          </motion.div>


          <div className="grid gap-5 md:grid-cols-3">

            {menus.map((menu, index) => (

              <motion.div
                key={menu.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.12 }}
              >

                <Link
                  href={menu.href}
                  className="group relative block h-[480px] overflow-hidden rounded-3xl border border-[#ddd2c1] bg-white shadow-[0_15px_50px_rgba(60,45,25,0.08)]"
                >

                  <img
                    src={menu.image}
                    alt={`${menu.name} traditional food`}
                    className="absolute inset-0 h-full w-full object-cover transition duration-1000 group-hover:scale-110"
                    style={{
                      objectPosition: menu.position,
                    }}
                  />

                  <div
                    className={`absolute inset-0 ${
                      index === 0
                        ? "bg-gradient-to-t from-[#19140e]/90 via-[#19140e]/30 to-transparent"
                        : index === 1
                        ? "bg-gradient-to-t from-[#261b0e]/90 via-[#261b0e]/25 to-transparent"
                        : "bg-gradient-to-t from-[#21140d]/90 via-[#21140d]/30 to-transparent"
                    }`}
                  />

                  <div className="absolute inset-0 bg-[#d6bd8d]/0 transition duration-700 group-hover:bg-[#d6bd8d]/10" />

                  <div className="absolute left-6 top-6 flex h-10 w-10 items-center justify-center rounded-full border border-white/40 bg-black/15 text-xs text-white backdrop-blur-md">
                    {menu.number}
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-7">

                    <div className="text-[9px] font-medium tracking-[0.3em] text-[#ead6ad]">
                      {menu.subtitle}
                    </div>

                    <h3 className="mt-3 font-serif text-4xl text-white">
                      {menu.name}
                    </h3>

                    <p className="mt-3 max-w-sm text-sm leading-6 text-white/75">
                      {menu.description}
                    </p>

                    <div className="mt-5 flex items-center justify-between border-t border-white/25 pt-5">

                      <div className="font-serif text-xl text-[#ead6ad]">
                        {menu.price}

                        <span className="ml-1 font-sans text-[9px] text-white/60">
                          / PERSON
                        </span>
                      </div>

                      <span className="text-xs tracking-[0.15em] text-white/80 transition group-hover:text-[#ead6ad]">
                        VIEW DETAILS →
                      </span>

                    </div>

                  </div>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          VENUES
      ===================================================== */}

      <section className="relative bg-[#f7f3ea] px-6 py-28 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
                OUR VENUES
              </div>

              <h2 className="mt-5 font-serif text-5xl tracking-[-0.02em] text-[#2c2822] md:text-7xl">
                Spaces for

                <span className="block italic text-[#b89455]">
                  every celebration.
                </span>
              </h2>

            </div>

            <Link
              href="/venues/grand-hall"
              className="text-xs tracking-[0.18em] text-[#6f675d] transition hover:text-[#b89455]"
            >
              EXPLORE ALL VENUES →
            </Link>

          </div>


          <div className="grid gap-6 md:grid-cols-2">

            {venues.map((venue, index) => (

              <motion.div
                key={venue.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.12,
                }}
              >

                <Link
                  href={venue.href}
                  className="group relative block min-h-[440px] overflow-hidden rounded-3xl border border-[#ddd2c1] bg-[#eee8dc] shadow-[0_15px_50px_rgba(60,45,25,0.06)]"
                >

                  <div className="absolute inset-0 bg-gradient-to-br from-[#e6dccb] via-[#f5f0e7] to-[#d9ccb8]" />

                  <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full border border-[#b89455]/20 transition duration-700 group-hover:scale-125" />

                  <div className="absolute bottom-[-100px] left-1/2 h-72 w-72 -translate-x-1/2 rounded-full border-[20px] border-[#b89455]/10" />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#b9a992]/60 via-transparent to-transparent" />

                  <div className="absolute bottom-0 left-0 right-0 p-8">

                    <div className="mb-3 text-[9px] tracking-[0.3em] text-[#b89455]">
                      0{index + 1}
                    </div>

                    <h3 className="font-serif text-4xl text-[#2c2822]">
                      {venue.title}
                    </h3>

                    <div className="mt-2 text-[9px] tracking-[0.18em] text-[#756e64]">
                      {venue.subtitle}
                    </div>

                    <p className="mt-5 max-w-sm text-sm leading-6 text-[#625b52]">
                      {venue.description}
                    </p>

                    <div className="mt-6 text-xs tracking-[0.15em] text-[#6f675d] transition group-hover:text-[#b89455]">
                      DISCOVER VENUE →
                    </div>

                  </div>

                </Link>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          BOOKING PROCEDURE
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#eee8dc] px-6 py-28 md:py-32">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89455]/15" />

        <div className="relative mx-auto max-w-7xl">

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >

            <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
              HOW IT WORKS
            </div>

            <h2 className="mt-5 font-serif text-5xl leading-tight tracking-[-0.02em] text-[#2c2822] md:text-7xl">
              Your celebration,

              <span className="block italic text-[#b89455]">
                made simple.
              </span>
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-[#756e64] md:text-base">
              From your first visit to the final confirmation, our team
              guides you through every step of creating your celebration
              at Boudha Heritage.
            </p>

          </motion.div>


          <div className="relative">

            <div className="absolute left-[10%] right-[10%] top-7 hidden h-px bg-gradient-to-r from-transparent via-[#b89455]/40 to-transparent md:block" />

            <div className="grid gap-10 md:grid-cols-5">

              {[
                {
                  number: "01",
                  title: "Visit",
                  description:
                    "Visit Boudha Heritage and discuss your celebration requirements with our team.",
                },
                {
                  number: "02",
                  title: "Venue Tour",
                  description:
                    "Explore the available celebration spaces and choose the setting that suits your event.",
                },
                {
                  number: "03",
                  title: "Food Tasting",
                  description:
                    "Experience the menu and taste the food before finalizing your celebration package.",
                },
                {
                  number: "04",
                  title: "Rates & Facilities",
                  description:
                    "Review the package rates, facilities and arrangements with our team.",
                },
                {
                  number: "05",
                  title: "Finalize & Confirm",
                  description:
                    "Finalize your requirements and confirm your booking with Boudha Heritage.",
                },
              ].map((step, index) => (

                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.1,
                  }}
                  className="relative text-center"
                >

                  <div className="relative z-10 mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-[#b89455]/50 bg-[#f7f3ea] font-serif text-sm text-[#b89455] shadow-sm transition duration-500 hover:scale-110 hover:border-[#b89455]">
                    {step.number}
                  </div>

                  <h3 className="mt-7 font-serif text-2xl text-[#2c2822]">
                    {step.title}
                  </h3>

                  <p className="mx-auto mt-4 max-w-[220px] text-xs leading-6 text-[#756e64]">
                    {step.description}
                  </p>

                </motion.div>

              ))}

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          GALLERY PREVIEW
      ===================================================== */}

      <section className="bg-[#f7f3ea] px-6 py-28 md:py-32">

        <div className="mx-auto max-w-7xl">

          <div className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">

            <div>

              <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
                MEMORIES AT HERITAGE
              </div>

              <h2 className="mt-5 font-serif text-5xl tracking-[-0.02em] text-[#2c2822] md:text-7xl">
                Moments

                <span className="block italic text-[#b89455]">
                  That Matter.
                </span>
              </h2>

            </div>

            <Link
              href="/gallery"
              className="rounded-full border border-[#cfc3b2] bg-[#fffdf8] px-6 py-3 text-[10px] tracking-[0.2em] text-[#6f675d] shadow-sm transition hover:border-[#b89455] hover:text-[#b89455]"
            >
              EXPLORE MORE →
            </Link>

          </div>


          <div className="grid gap-5 md:grid-cols-3">

            {galleryItems.map((item, index) => (

              <motion.div
                key={`${item.src}-${index}`}
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.1,
                }}
                className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-[#ddd2c1] bg-[#eee8dc] shadow-[0_15px_45px_rgba(60,45,25,0.07)]"
              >

                {item.type === "image" ? (

                  <img
                    src={item.src}
                    alt={item.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                ) : (

                  <video
                    src={item.src}
                    muted
                    loop
                    playsInline
                    autoPlay
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                )}

                <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/5 to-transparent" />

                {item.type === "video" && (

                  <div className="absolute left-1/2 top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/60 bg-black/20 text-white backdrop-blur transition group-hover:scale-110 group-hover:border-[#ead6ad]">
                    ▶
                  </div>

                )}

                <div className="absolute bottom-5 left-5 text-sm font-medium text-white">
                  {item.title}
                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          GET IN TOUCH
      ===================================================== */}

      <section
        id="contact"
        className="relative overflow-hidden border-y border-[#d8cdbc] bg-[#eee8dc] px-6 py-28 md:py-36 lg:px-16"
      >

        {/* Decorative background */}
        <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full border border-[#b89455]/15" />

        <div className="pointer-events-none absolute -left-40 bottom-0 h-[450px] w-[450px] rounded-full border border-[#b89455]/10" />

        <div className="relative mx-auto max-w-[1400px]">

          {/* Heading */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="mb-14 max-w-3xl"
          >

            <div className="text-[10px] font-semibold tracking-[0.45em] text-[#b89455]">
              GET IN TOUCH
            </div>

            <h2 className="mt-5 font-serif text-5xl leading-[0.95] tracking-[-0.025em] text-[#302b25] md:text-7xl">
              Let&apos;s plan

              <span className="block italic text-[#b89455]">
                something memorable.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-sm leading-8 text-[#6f675d] md:text-base">
              Whether you are planning a wedding, reception, corporate
              gathering or a special celebration, our team is here to help
              you create an unforgettable experience.
            </p>

          </motion.div>


          <div className="grid gap-7 lg:grid-cols-[0.9fr_1.1fr]">

            {/* Contact Information */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="rounded-[2rem] border border-[#d9cfbf] bg-[#fffdf8] p-7 shadow-[0_20px_60px_rgba(64,48,28,0.06)] md:p-9"
            >

              <div className="mb-8">

                <div className="text-[10px] font-semibold tracking-[0.35em] text-[#b89455]">
                  CONTACT DETAILS
                </div>

                <h3 className="mt-3 font-serif text-3xl text-[#302b25]">
                  We&apos;d love to hear from you.
                </h3>

              </div>


              {/* Address */}
              <a
                href={googleMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex gap-5 border-b border-[#e4dccf] py-6 first:pt-0"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b89455]/30 bg-[#f7f3ea] text-lg text-[#b89455]">
                  ⌖
                </div>

                <div>
                  <div className="text-[9px] font-semibold tracking-[0.25em] text-[#9a8f80]">
                    MEET US
                  </div>

                  <div className="mt-2 text-sm leading-6 text-[#4f483f] transition group-hover:text-[#b89455]">
                    P9C8+87 Kathmandu Boudha Rd,
                    <br />
                    Kathmandu 44600
                  </div>
                </div>

              </a>


              {/* Phone */}
              <a
                href="tel:+9779703848334"
                className="group flex gap-5 border-b border-[#e4dccf] py-6"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b89455]/30 bg-[#f7f3ea] text-lg text-[#b89455]">
                  ☎
                </div>

                <div>
                  <div className="text-[9px] font-semibold tracking-[0.25em] text-[#9a8f80]">
                    CALL US
                  </div>

                  <div className="mt-2 text-sm text-[#4f483f] transition group-hover:text-[#b89455]">
                    +977 9703848334
                  </div>
                </div>

              </a>


              {/* Email */}
              <a
                href="mailto:reception@boudhaheritage.com.np"
                className="group flex gap-5 border-b border-[#e4dccf] py-6"
              >

                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#b89455]/30 bg-[#f7f3ea] text-lg text-[#b89455]">
                  ✉
                </div>

                <div>
                  <div className="text-[9px] font-semibold tracking-[0.25em] text-[#9a8f80]">
                    EMAIL US
                  </div>

                  <div className="mt-2 break-all text-sm text-[#4f483f] transition group-hover:text-[#b89455]">
                    reception@boudhaheritage.com.np
                  </div>
                </div>

              </a>


              {/* Social */}
<div className="pt-7">
  <div className="mb-4 text-[9px] font-semibold tracking-[0.25em] text-[#9a8f80]">
    FOLLOW BOUDHA HERITAGE
  </div>

  <div className="flex items-center gap-4">

    {/* Instagram */}
    <a
      href="https://www.instagram.com/boudhaheritage?igsi=bG93Z2Uyc2Nub3B6"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Instagram"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d5cab9] bg-[#f7f3ea] text-[#50483e] transition-all duration-300 hover:-translate-y-1 hover:border-[#b89455] hover:bg-[#b89455] hover:text-white"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    </a>

    {/* Facebook */}
    <a
      href="https://www.facebook.com/share/1S1GxacSPs/?mibextid=wwXIfr"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Facebook"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d5cab9] bg-[#f7f3ea] text-[#50483e] transition-all duration-300 hover:-translate-y-1 hover:border-[#b89455] hover:bg-[#b89455] hover:text-white"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.67.33-1 1-1Z" />
      </svg>
    </a>

    {/* TikTok */}
    <a
      href="https://www.tiktok.com/@boudhaheritage?_r=1&_t=ZS-99QpihpnJ8C"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="TikTok"
      className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d5cab9] bg-[#f7f3ea] text-[#50483e] transition-all duration-300 hover:-translate-y-1 hover:border-[#b89455] hover:bg-[#b89455] hover:text-white"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-6 w-6"
        fill="currentColor"
      >
        <path d="M16.5 3c.4 2.1 1.7 3.5 3.5 3.8v3.2c-1.3 0-2.5-.4-3.5-1v6.2c0 4-2.8 6.8-6.7 6.8-3.2 0-5.8-2.3-5.8-5.4 0-3.3 2.7-5.7 6-5.7.5 0 1 .1 1.5.2v3.4c-.4-.2-.9-.3-1.4-.3-1.3 0-2.3.9-2.3 2.2 0 1.2 1 2.1 2.2 2.1 1.5 0 2.5-1.1 2.5-3V3h4Z" />
      </svg>
    </a>
  </div>
</div>

              {/* Main Buttons */}
              <div className="mt-8 flex flex-wrap gap-3">

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full bg-[#2c2822] px-6 py-3.5 text-[10px] font-semibold tracking-[0.18em] text-white transition duration-300 hover:-translate-y-1 hover:bg-[#b89455]"
                >
                  WHATSAPP US
                </a>

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#cfc3b2] px-6 py-3.5 text-[10px] font-semibold tracking-[0.18em] text-[#50483e] transition duration-300 hover:-translate-y-1 hover:border-[#b89455] hover:text-[#b89455]"
                >
                  VIEW MAP →
                </a>

              </div>

            </motion.div>


            {/* Google Maps */}
            <motion.div
              variants={fadeScale}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.15 }}
              className="relative min-h-[500px] overflow-hidden rounded-[2rem] border border-[#d9cfbf] bg-[#d9ccb8] shadow-[0_20px_60px_rgba(64,48,28,0.08)]"
            >

              <iframe
                title="Boudha Heritage Location"
                src="https://www.google.com/maps?q=Boudha%20Heritage%20Banquet%20Kathmandu&output=embed"
                className="absolute inset-0 h-full w-full border-0 grayscale-[0.15]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Map overlay card */}
              <div className="absolute bottom-5 left-5 right-5 rounded-2xl border border-white/40 bg-[#fffdf8]/95 p-5 shadow-xl backdrop-blur-md md:left-7 md:right-auto md:w-[330px]">

                <div className="text-[9px] font-semibold tracking-[0.3em] text-[#b89455]">
                  BOUDHA HERITAGE
                </div>

                <div className="mt-2 font-serif text-2xl text-[#302b25]">
                  Find us in Boudha.
                </div>

                <div className="mt-2 text-xs leading-5 text-[#6f675d]">
                  Kathmandu 44600, Nepal
                </div>

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex rounded-full bg-[#302b25] px-5 py-3 text-[9px] font-semibold tracking-[0.18em] text-white transition hover:bg-[#b89455]"
                >
                  OPEN GOOGLE MAPS →
                </a>

              </div>

            </motion.div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#d9ccb8] px-6 py-32">

        <div className="absolute inset-0 bg-gradient-to-br from-[#e9dfcf] via-[#d9ccb8] to-[#c6b59c]" />

        <div className="absolute inset-0 opacity-50">

          <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89455]/30" />

          <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#b89455]/20" />

        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative mx-auto max-w-4xl text-center"
        >

          <div className="text-[10px] font-semibold tracking-[0.45em] text-[#a27d3e]">
            YOUR NEXT CELEBRATION
          </div>

          <h2 className="mt-6 font-serif text-5xl leading-tight tracking-[-0.02em] text-[#2c2822] md:text-8xl">
            Let&apos;s Create

            <span className="block italic text-[#a27d3e]">
              Something Beautiful.
            </span>
          </h2>

          <p className="mx-auto mt-7 max-w-xl text-base leading-7 text-[#62594e]">
            Tell us about your celebration and let our team help
            you create an unforgettable experience.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">

            <Link
              href="/availability/inquiry"
              className="rounded-full bg-[#2c2822] px-8 py-4 text-xs font-semibold tracking-[0.18em] text-[#f7f3ea] shadow-lg transition hover:-translate-y-1 hover:bg-[#3b342b]"
            >
              MAKE AN INQUIRY →
            </Link>

            <Link
              href="/estimate"
              className="rounded-full border border-[#8f7b60] bg-white/20 px-8 py-4 text-xs font-semibold tracking-[0.18em] text-[#40382f] backdrop-blur transition hover:-translate-y-1 hover:border-[#a27d3e] hover:text-[#8f6933]"
            >
              ESTIMATE COST
            </Link>

          </div>

        </motion.div>

      </section>


      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-[#463d32] bg-[#29251f] px-6 py-14 text-[#f7f3ea] lg:px-16">

        <div className="mx-auto max-w-[1400px]">

          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

            {/* Brand */}
            <div>

              <div className="font-serif text-3xl tracking-[0.16em]">
                BOUDHA
              </div>

              <div className="mt-1 text-[8px] tracking-[0.5em] text-[#d6bd8d]">
                HERITAGE
              </div>

              <p className="mt-6 max-w-xs text-sm leading-7 text-white/50">
                A destination for elegant spaces, authentic hospitality and
                unforgettable celebrations in the heart of Boudha.
              </p>

            </div>


            {/* Explore */}
            <div>

              <div className="text-[9px] font-semibold tracking-[0.3em] text-[#d6bd8d]">
                EXPLORE
              </div>

              <div className="mt-5 flex flex-col gap-3">

                <Link
                  href="/"
                  className="text-sm text-white/55 transition hover:text-[#d6bd8d]"
                >
                  Home
                </Link>

                <Link
                  href="/about"
                  className="text-sm text-white/55 transition hover:text-[#d6bd8d]"
                >
                  About
                </Link>

                <Link
                  href="/gallery"
                  className="text-sm text-white/55 transition hover:text-[#d6bd8d]"
                >
                  Gallery
                </Link>

                <Link
                  href="/availability"
                  className="text-sm text-white/55 transition hover:text-[#d6bd8d]"
                >
                  Availability
                </Link>

                <Link
                  href="/estimate"
                  className="text-sm text-white/55 transition hover:text-[#d6bd8d]"
                >
                  Estimate Cost
                </Link>

              </div>

            </div>


            {/* Contact */}
            <div>

              <div className="text-[9px] font-semibold tracking-[0.3em] text-[#d6bd8d]">
                CONTACT
              </div>

              <div className="mt-5 flex flex-col gap-4">

                <a
                  href="tel:+9779703848334"
                  className="text-sm text-white/55 transition hover:text-[#d6bd8d]"
                >
                  +977 9703848334
                </a>

                <a
                  href="mailto:reception@boudhaheritage.com.np"
                  className="break-all text-sm text-white/55 transition hover:text-[#d6bd8d]"
                >
                  reception@boudhaheritage.com.np
                </a>

                <a
                  href={googleMapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm leading-6 text-white/55 transition hover:text-[#d6bd8d]"
                >
                  P9C8+87 Kathmandu Boudha Rd,
                  <br />
                  Kathmandu 44600
                </a>

              </div>

            </div>


            {/* Social */}
            <div>

              <div className="text-[9px] font-semibold tracking-[0.3em] text-[#d6bd8d]">
                FOLLOW US
              </div>

              <div className="mt-5 flex flex-wrap gap-3">

                <a
                  href="https://www.instagram.com/boudhaheritage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xs text-white/70 transition hover:border-[#d6bd8d] hover:text-[#d6bd8d]"
                  aria-label="Instagram"
                >
                  IG
                </a>

                <a
                  href="https://www.facebook.com/share/1S1GxacSPs/?mibextid=wwXIfr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xs text-white/70 transition hover:border-[#d6bd8d] hover:text-[#d6bd8d]"
                  aria-label="Facebook"
                >
                  FB
                </a>

                <a
                  href="https://www.tiktok.com/@boudhaheritage"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-xs text-white/70 transition hover:border-[#d6bd8d] hover:text-[#d6bd8d]"
                  aria-label="TikTok"
                >
                  TK
                </a>

              </div>

              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex rounded-full bg-[#d6bd8d] px-6 py-3 text-[9px] font-semibold tracking-[0.18em] text-[#29251f] transition hover:-translate-y-1 hover:bg-[#ead6ad]"
              >
                WHATSAPP US →
              </a>

            </div>

          </div>


          {/* Bottom */}
          <div className="mt-14 flex flex-col justify-between gap-4 border-t border-white/10 pt-7 text-[10px] text-white/35 md:flex-row">

            <div>
              © 2026 Boudha Heritage. All rights reserved.
            </div>

            <div>
              Boudha · Kathmandu · Nepal
            </div>
            <div className="mt-5 text-center text-[10px] tracking-[0.18em] text-white/35">
  Designed & Developed by Abhishek & Saurabh
</div>

          </div>

        </div>

      </footer>

    </main>
  );
}