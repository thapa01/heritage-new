"use client";

import { motion } from "framer-motion";

export default function FloatingContact() {
  const phoneNumber = "9779703848334";

  const whatsappMessage = encodeURIComponent(
    "Hello Boudha Heritage, I would like to know more about your venue and booking options."
  );

  return (
    <div className="fixed bottom-6 right-5 z-[100] flex flex-col gap-3 md:bottom-7 md:right-7">

      {/* WhatsApp */}
      <motion.a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="group flex items-center justify-end gap-3"
        aria-label="Chat with Boudha Heritage on WhatsApp"
      >
        <span className="hidden rounded-full border border-[#ded5c7] bg-white px-4 py-2.5 text-xs font-medium tracking-wide text-[#51493f] shadow-lg md:block">
          WhatsApp Us
        </span>

        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_rgba(37,211,102,0.30)] transition duration-300 group-hover:shadow-[0_14px_35px_rgba(37,211,102,0.40)] md:h-16 md:w-16">

          <svg
            viewBox="0 0 24 24"
            className="h-7 w-7 fill-current md:h-8 md:w-8"
            aria-hidden="true"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.579-.487-.5-.67-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
            <path d="M20.52 3.449A11.82 11.82 0 0 0 12.084 0C5.566 0 .256 5.309.256 11.827c0 2.084.544 4.118 1.579 5.908L.168 23.994l6.403-1.68a11.83 11.83 0 0 0 5.508 1.402h.005c6.517 0 11.828-5.309 11.828-11.827a11.8 11.8 0 0 0-3.392-8.44zM12.084 21.65h-.004a9.82 9.82 0 0 1-5.007-1.37l-.359-.213-3.799.996 1.014-3.706-.233-.38a9.84 9.84 0 0 1-1.508-5.15c.002-5.675 4.62-10.29 10.3-10.29a10.24 10.24 0 0 1 7.292 3.023 10.24 10.24 0 0 1 3.019 7.297c-.003 5.676-4.621 10.293-10.715 10.293z" />
          </svg>

        </span>
      </motion.a>


      {/* Call */}
      <motion.a
        href={`tel:+${phoneNumber}`}
        initial={{ opacity: 0, scale: 0.8, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        whileHover={{ scale: 1.06, y: -2 }}
        whileTap={{ scale: 0.94 }}
        className="group flex items-center justify-end gap-3"
        aria-label="Call Boudha Heritage"
      >
        <span className="hidden rounded-full border border-[#ded5c7] bg-white px-4 py-2.5 text-xs font-medium tracking-wide text-[#51493f] shadow-lg md:block">
          Call Us
        </span>

        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#302b25] text-white shadow-[0_10px_30px_rgba(48,43,37,0.25)] transition duration-300 group-hover:bg-[#b89455] md:h-16 md:w-16">

          <svg
            viewBox="0 0 24 24"
            className="h-6 w-6 fill-none stroke-current stroke-[1.8] md:h-7 md:w-7"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8 9.73a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z"
            />
          </svg>

        </span>
      </motion.a>

    </div>
  );
}