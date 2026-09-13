"use client";

import { motion } from "framer-motion";

const videos = [
  {
    title: "Eleena",
    src: "/video/gallery/eleena.mp4",
  },
  {
    title: "Meet Geet",
    src: "/video/gallery/meet_geet.mp4",
  },
  {
    title: "Heritage Moments",
    src: "/video/gallery/video-1.mp4",
  },
  {
    title: "Celebration",
    src: "/video/gallery/video-2.mp4",
  },
  {
    title: "Grand Hall",
    src: "/video/gallery/video-3.mp4",
  },
  {
    title: "Wedding Celebration",
    src: "/video/gallery/weeding_cel.mp4",
  },
];

const photos = [
  {
    title: "Boudha Heritage",
    src: "/image/gallery/photo-1.jpg",
  },
];

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#211f1b]">

      {/* HERO */}
      <section className="relative overflow-hidden px-5 pb-10 pt-28 sm:px-6 sm:pb-12 sm:pt-32 md:px-10 md:pb-16 md:pt-36 lg:px-16">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              radial-gradient(
                circle at 15% 20%,
                rgba(177,145,88,0.10),
                transparent 28%
              ),
              radial-gradient(
                circle at 85% 10%,
                rgba(177,145,88,0.08),
                transparent 25%
              ),
              linear-gradient(
                rgba(120,100,70,0.025) 1px,
                transparent 1px
              ),
              linear-gradient(
                90deg,
                rgba(120,100,70,0.025) 1px,
                transparent 1px
              )
            `,
            backgroundSize: "auto, auto, 42px 42px, 42px 42px",
          }}
        />

        <div className="pointer-events-none absolute -right-8 top-14 select-none font-serif text-[140px] leading-none text-[#a18758]/[0.045] sm:-right-16 sm:top-16 sm:text-[220px] md:text-[360px]">
          BH
        </div>

        <div className="relative mx-auto max-w-[1500px]">

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-3"
          >
            <span className="h-px w-9 bg-[#a18758]" />

            <p className="text-[10px] uppercase tracking-[0.35em] text-[#a18758]">
              Boudha Heritage
            </p>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.08 }}
            className="max-w-4xl font-serif text-4xl leading-[1.02] tracking-[-0.03em] sm:text-5xl sm:leading-[0.98] md:text-6xl lg:text-7xl"
          >
            A heritage of moments,
            <br />
            <span className="text-[#a18758]">
              beautifully remembered.
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.18 }}
            className="mt-5 max-w-xl text-sm leading-7 text-[#211f1b]/55 md:text-base"
          >
            Explore celebrations, gatherings and memorable moments
            captured at Boudha Heritage.
          </motion.p>

        </div>
      </section>

      {/* VIDEOS */}
      <section className="relative px-5 pb-16 sm:px-6 sm:pb-20 md:px-10 lg:px-16">
        <div className="mx-auto max-w-[1500px]">

          <div className="mb-7 flex items-end justify-between border-b border-[#211f1b]/10 pb-4">

            <div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#a18758]">
                Gallery
              </p>

              <h2 className="font-serif text-3xl md:text-4xl">
                Videos
              </h2>
            </div>

            <p className="hidden text-[10px] uppercase tracking-[0.2em] text-[#211f1b]/35 md:block">
              Hover to preview
            </p>

          </div>

          {/* ALL VIDEOS */}
          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">

            {videos.map((video, index) => (
              <motion.div
                key={video.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.05,
                }}
                className="group overflow-hidden rounded-[24px] bg-white shadow-[0_14px_45px_rgba(40,32,20,0.08)]"
              >

                {/* VIDEO FRAME */}
                <div className="relative aspect-[9/16] overflow-hidden bg-[#eee8dc]">

                  <video
                    src={video.src}
                    className="h-full w-full object-contain"
                    muted
                    loop
                    playsInline
                    controls
                    preload="metadata"
                    onMouseEnter={(e) => {
                      e.currentTarget.play().catch(() => {});
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.pause();
                    }}
                  />

                </div>

                {/* VIDEO TITLE */}
                <div className="flex items-center justify-between px-5 py-4">

                  <h3 className="font-serif text-lg">
                    {video.title}
                  </h3>

                  <span className="text-[9px] uppercase tracking-[0.2em] text-[#a18758]">
                    Video
                  </span>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* PHOTOS */}
      <section className="border-t border-[#211f1b]/10 px-5 py-16 sm:px-6 sm:py-20 md:px-10 lg:px-16">

        <div className="mx-auto max-w-[1500px]">

          <div className="mb-7 flex items-end justify-between border-b border-[#211f1b]/10 pb-4">

            <div>
              <p className="mb-1 text-[10px] uppercase tracking-[0.3em] text-[#a18758]">
                Visuals
              </p>

              <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl">
                Photos
              </h2>
            </div>

            <p className="hidden text-[10px] uppercase tracking-[0.2em] text-[#211f1b]/35 md:block">
              Boudha Heritage
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">

            {photos.map((photo, index) => (
              <motion.div
                key={photo.src}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.08,
                }}
                className="group overflow-hidden rounded-[26px] bg-white shadow-[0_16px_50px_rgba(40,32,20,0.09)]"
              >

                <div className="relative aspect-[4/3] overflow-hidden">

                  <img
                    src={photo.src}
                    alt={photo.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                  />

                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  <div className="pointer-events-none absolute bottom-5 left-5">

                    <p className="text-[9px] uppercase tracking-[0.22em] text-white/70">
                      Boudha Heritage
                    </p>

                    <h3 className="mt-1 font-serif text-xl text-white">
                      {photo.title}
                    </h3>

                  </div>

                </div>

              </motion.div>
            ))}

          </div>
        </div>
      </section>

      {/* ENDING */}
      <section className="px-5 pb-16 pt-2 text-center sm:px-6 sm:pb-20 md:px-10 lg:px-16">

        <div className="mx-auto max-w-2xl border-t border-[#211f1b]/10 pt-10 sm:pt-12">

          <p className="text-[10px] uppercase tracking-[0.3em] text-[#a18758]">
            Boudha Heritage
          </p>

          <h2 className="mt-4 font-serif text-xl leading-tight text-[#211f1b]/75 sm:text-2xl md:text-3xl">
            Beautiful moments deserve
            <br />
            <span className="text-[#a18758]">
              to be remembered.
            </span>
          </h2>

        </div>

      </section>

    </main>
  );
}