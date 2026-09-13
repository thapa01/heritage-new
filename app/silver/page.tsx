"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type MenuGroup = {
  name: string;
  choice?: string;
  items: string[];
};

type MenuSection = {
  title: string;
  subtitle?: string;
  choice?: string;
  items?: string[];
  groups?: MenuGroup[];
};

/* =========================================================
   SILVER MENU
========================================================= */

const silverSections: MenuSection[] = [
  {
    title: "Soup",
    choice: "Choose any one",
    items: [
      "Veg Hot & Sour",
      "Veg Garlic Mushroom (Cream Soup)",
      "Veg Tom Yum",
      "Spinach Mushroom Soup",
      "Tomato Soup",
    ],
  },

  {
    title: "Salad",
    choice: "Includes 8 different varieties",
    items: ["Boudha Heritage Special Salad Bar"],
  },

  {
    title: "Pickle",
    choice: "All",
    items: [
      "Golveda",
      "Gundruk",
      "Aloo Mula",
      "Kerau Methi",
      "Mix Lapsi",
    ],
  },

  {
    title: "Veg Snacks",
    choice: "Choose any four",
    items: [
      "Tandoori Aloo",
      "Mustang Aloo",
      "Aloo Stick",
      "French Fries",
      "Crispy Potato",
      "Chips Chilly",
      "Aloo Jeera",
      "Sesame Potato Wedge",
      "Golden Fry Potato",
      "Grilled Pineapple Tandoori",
      "Veg Tempura",
      "Veg Pakoda",
      "Veg Wanton",
      "Veg Lolly",
      "Veg Spring Roll",
      "Veg Tikka",
      "Spicy Veg Ball",
      "Veg Mo:Mo (Live/Fried/Kothey)",
      "Tofu Chilly",
      "Tofu Hot Sauce",
      "Onion Rings",
      "Bhatmas Sadeko",
      "Peanuts Sadeko/Fry",
      "Prawn Crackers",
      "Boiled Corn",
      "Corn Satay",
      "Crispy Corn",
      "Mushroom Choila",
      "Mushroom Sadeko",
      "Cocktail Papad",
      "Veg Finger Chilly",
      "Potato Wedges",
      "Crispy Mushroom",
      "Onion Pakoda",
      "Mass Ko Bara",
      "Veg Munchurian (Dry)",
      "Poleko Aloo",
    ],
  },

  {
    title: "Non-Veg Snacks",
    subtitle: "Chicken / Fish / Buff / Bandel",
    choice: "Choose any two",
    groups: [
      {
        name: "Chicken Item",
        items: [
          "Chicken Lolly",
          "Chicken Tikka",
          "Chicken (Choila / Sadeko)",
          "Chicken Wanton",
          "Chicken Mo:Mo (Live/Fried/Kothey)",
          "Chicken Satay",
          "Chicken Sausage",
          "Chicken Shashlik Stick",
          "Chicken Cilly",
          "Timur Chicken",
          "Singaporean Chicken",
          "Boiled Chicken",
        ],
      },

      {
        name: "Fish Item",
        items: [
          "Fish Chilly",
          "Fish Nugget",
          "Small Fish Fry",
          "Fish Timur",
          "Fish Finger",
          "Fish Tikka",
          "Fish Tempura",
          "Fish Ball",
        ],
      },

      {
        name: "Buff Item",
        items: [
          "Buff (Choila/Sadeko)",
          "Buff Sekuwa",
          "Buff Sausage",
          "Boiled Buff",
          "Buff Meat Ball",
          "Buff Mo:Mo (Live/Fried/Kothey)",
          "Buff Saslik Stick",
          "Buff Chilly",
        ],
      },

      {
        name: "Bandel Item",
        choice: "Choose any one",
        items: [
          "Steam Bandel",
          "Bandel Timur",
          "Bandel (Choila/Sadeko)",
          "Boiled Bandel",
          "Bandel Saslik",
          "Bandel Chilly",
        ],
      },
    ],
  },
];

/* =========================================================
   MAIN COURSE
========================================================= */

const mainCourseGroups: MenuSection[] = [
  {
    title: "Rice Specialities",
    choice: "Choose any one",
    items: [
      "Plain Steam Rice",
      "Butter Rice",
      "Jeera Rice",
      "Veg Fried Rice",
      "Veg Biryani",
      "Plain Pulao",
      "Hira Motika Pulao",
      "Jeera Pulao",
      "Mutter Pulao",
    ],
  },

  {
    title: "Roti / Naan",
    choice: "Choose any one",
    items: [
      "Plain Naan",
      "Jeera Naan",
      "Butter Naan",
      "Tandoori Naan",
      "Garlic Naan",
      "Paratha (Plain)",
    ],
  },

  {
    title: "Noodles / Pasta",
    choice: "Choose any one",
    items: [
      "Chinese Hakka Noodles",
      "Pasta (White Sauce/Tomato Sauce)",
      "Penne Pasta (Veg/Chicken)",
      "Chowmein (Veg/Chicken)",
      "Mixed Macaroni (Veg/Non-Veg)",
    ],
  },

  {
    title: "Daal & Beans",
    choice: "Choose any one",
    items: [
      "Daal Makhani",
      "Panjabi Daal Tadka",
      "Daal Fry",
      "Mixed Daal Fry",
      "Rajma Masala",
      "Chana Masala",
    ],
  },

  {
    title: "Mixed Veg",
    choice: "Choose any one",
    items: [
      "Seasonal Veg",
      "Gobi Mutter Capsicum",
      "Stir-Fried Seasonal Veg (With Garlic)",
      "Mix Veg Jalfrezi",
      "Kashmiri Aloo Dum",
      "Mix Veg in Szechwan",
      "Mix Veg Curry",
      "Aloo Parwal",
    ],
  },

  {
    title: "Tofu / Mushroom",
    choice: "Choose any one",
    items: [
      "Palak (Tofu/Mushroom)",
      "Butter Masala (Tofu/Mushroom)",
      "Curry (Tofu/Mushroom)",
      "Mutter (Tofu/Mushroom)",
    ],
  },

  {
    title: "Leafy Green",
    choice: "Choose any one",
    items: [
      "Seasonal Saag",
      "Bok Choy (With Black Mushroom)",
      "Mix Saag",
      "Jhaneko Saag",
    ],
  },
];

/* =========================================================
   MAIN COURSE — NON VEG
========================================================= */

const mainCourseNonVeg: MenuSection = {
  title: "Main Course — Non-Veg",
  choice: "Chicken / Fish — Choose any one",
  groups: [
    {
      name: "Chicken / Fish",
      items: [
        "Fry (Chicken/Fish)",
        "Tawa (Chicken/Fish)",
        "Gravy (Chicken/Fish)",
        "Butter Masala (Chicken/Fish)",
        "Nepali Style Curry (Chicken/Fish)",
        "Seasame (Chicken/Fish)",
      ],
    },

    {
      name: "Mutton Item",
      choice: "Choose any one",
      items: [
        "Mutton Rogan Josh",
        "Boudha Heritage Special (Mutton Kadai)",
        "Mutton Jhol",
        "Mutton Gravy",
      ],
    },
  ],
};

/* =========================================================
   DESSERT
========================================================= */

const dessertItems = [
  "Juju Dhau",
  "Rasbari / LalMohan",
  "Fresh Cut Fruits",
  "Bread Pudding",
  "Ice Cream",
  "Mugi Ko Haluwa",
  "Gajar Ko Haluwa",
  "Suji Ko Haluwa",
  "Shewai Kheer",
  "Masala Kheer",
  "Jalebi (Live)",
];

/* =========================================================
   ADDITIONAL MENU
========================================================= */

const additionalMenu = [
  {
    title: "Boudha Heritage Special Salad Bar",
    detail: "24 different varieties",
    price: "Rs. 300 per pax",
  },
  {
    title: "Boudha Heritage Special Dessert Bar",
    detail: "18 different varieties",
    price: "Rs. 500 per pax",
  },
  {
    title: "Boudha Heritage Special Cocktail Bar",
    detail: "4 different varieties",
    price: "Rs. 800 per pax",
  },
];

const specialItems = [
  ["Pani Puri", "Rs. 50 per pax"],
  ["Paan", "Rs. 50 per pax"],
  ["Chaat Station", "Rs. 100 per pax"],
  ["Assorted Pastries", "Rs. 80 per pax"],
  ["Swiss Roll", "Rs. 100 per pax"],
  ["Celebration Cake", "Rs. 1000 per pound"],
  ["Pasta/Spaghetti/Noodles (Live Station)", "Rs. 100 per pax"],
];

const bbqItems = [
  ["Whole Mutton BBQ", "Rs. 35,000"],
  ["Mutton BBQ per pax", "Rs. 400"],
  ["Whole Bandel BBQ", "Rs. 55,000"],
  ["Bandel BBQ per pax", "Rs. 300"],
  ["Whole Chicken BBQ", "Rs. 2,000"],
  ["Chicken BBQ per pax", "Rs. 150"],
  ["Special Veg BBQ per pax", "Rs. 75"],
];

const muttonItems = [
  ["Mutton Mo:Mo", "Rs. 400 per pax"],
  ["Mutton Choila", "Rs. 400 per pax"],
  ["Mutton Taas", "Rs. 400 per pax"],
  ["Mutton Seek Kabab", "Rs. 400 per pax"],
  ["Mutton Sadeko", "Rs. 400 per pax"],
  ["Mutton Sekuwa", "Rs. 400 per pax"],
  ["Boiled Mutton", "Rs. 400 per pax"],
];

const duckItems = [
  ["Duck Choila", "Rs. 200 per pax"],
  ["Duck Szechuan Style", "Rs. 200 per pax"],
  ["Duck Crispy Fried", "Rs. 200 per pax"],
  ["Duck in Black Bean Sauce", "Rs. 200 per pax"],
];

const seafoodItems = [
  ["Golden Fried Prawn", "Rs. 600 per pax"],
  ["Seafood Combination", "Rs. 600 per pax"],
  ["Prawn Szechuan Style", "Rs. 600 per pax"],
  ["Grilled Prawn", "Rs. 600 per pax"],
  ["Prawn Masala", "Rs. 600 per pax"],
];

/* =========================================================
   ADDITIONAL SERVICES
========================================================= */

const additionalServices = [
  "Photography and Videography",
  "Wedding Planner",
  "Decoration",
  "Outdoor Catering",
  "Makeup / Bridal Package",
  "Dress Designer",
  "Vehicle Rent",
  "Live Music (Local Band / Renowned Artists)",
  "Band Baja / Panche Baja",
  "DJ Session",
  "All Kinds of Beverages at Best Rate",
];

/* =========================================================
   MENU CARD
========================================================= */

function MenuCard({
  title,
  subtitle,
  choice,
  items,
  groups,
}: {
  title: string;
  subtitle?: string;
  choice?: string;
  items?: string[];
  groups?: MenuGroup[];
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55 }}
      className="rounded-[24px] border border-[#e4d7c2] bg-white p-6 shadow-[0_14px_40px_rgba(60,45,30,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(60,45,30,0.10)] md:p-7"
    >
      {/* CARD HEADER */}
      <div className="mb-5 flex items-start gap-4 border-b border-[#eee6d9] pb-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b18a4a] text-sm text-white shadow-sm">
          ✦
        </div>

        <div className="min-w-0">
          <h3 className="font-serif text-2xl font-semibold tracking-wide text-[#302a25]">
            {title}
          </h3>

          {subtitle && (
            <p className="mt-1 text-xs text-[#756c62]">
              {subtitle}
            </p>
          )}

          {choice && (
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a8792d]">
              {choice}
            </p>
          )}
        </div>
      </div>

      {/* NORMAL ITEMS */}
      {items && (
        <ul className="grid gap-x-7 gap-y-2 sm:grid-cols-2">
          {items.map((item, index) => (
            <li
              key={`${item}-${index}`}
              className="flex items-start gap-2 text-[14px] leading-6 text-[#514940]"
            >
              <span className="mt-[8px] text-[7px] text-[#b18a4a]">
                ◆
              </span>

              <span>{item}</span>
            </li>
          ))}
        </ul>
      )}

      {/* GROUPED ITEMS */}
      {groups && (
        <div className="grid gap-5 md:grid-cols-2">
          {groups.map((group) => (
            <div
              key={group.name}
              className="rounded-[18px] bg-[#faf8f3] p-4"
            >
              <div className="mb-3 border-b border-[#e8dece] pb-3">
                <h4 className="font-serif text-lg font-semibold text-[#3c342d]">
                  {group.name}
                </h4>

                {group.choice && (
                  <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.12em] text-[#a8792d]">
                    {group.choice}
                  </p>
                )}
              </div>

              <ul className="space-y-1.5">
                {group.items.map((item, index) => (
                  <li
                    key={`${item}-${index}`}
                    className="flex items-start gap-2 text-[13px] leading-5 text-[#514940]"
                  >
                    <span className="mt-[7px] text-[6px] text-[#b18a4a]">
                      ◆
                    </span>

                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </motion.article>
  );
}

/* =========================================================
   PRICE LIST
========================================================= */

function PriceList({
  number,
  title,
  items,
}: {
  number: string;
  title: string;
  items: string[][];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55 }}
      className="rounded-[24px] border border-[#e4d7c2] bg-white p-6 shadow-[0_12px_35px_rgba(60,45,30,0.05)]"
    >
      <div className="mb-5 flex items-center gap-3 border-b border-[#eee5d7] pb-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#b18a4a] text-xs font-bold text-white">
          {number}
        </span>

        <h3 className="font-serif text-2xl font-semibold text-[#302a25]">
          {title}
        </h3>
      </div>

      <div>
        {items.map(([name, price], index) => (
          <div
            key={`${name}-${index}`}
            className="flex items-start justify-between gap-4 border-b border-[#f0e9df] py-2.5 last:border-0"
          >
            <span className="text-sm leading-5 text-[#514940]">
              {name}
            </span>

            <strong className="shrink-0 text-right text-xs font-bold text-[#a8792d]">
              {price}
            </strong>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

/* =========================================================
   PAGE
========================================================= */

export default function SilverMenuPage() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#302a25]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#dfd2bc] bg-[#fbfaf7] px-5 pb-12 pt-28 sm:pb-14 sm:pt-32 md:px-8 md:pb-16 md:pt-36">
        {/* BACKGROUND DECORATION */}
        <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full border-[18px] border-[#b18a4a]/10" />

        <div className="pointer-events-none absolute -right-28 -top-20 h-80 w-80 rounded-full border-[18px] border-[#b18a4a]/10" />

        <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full border border-[#b18a4a]/10" />

        <div className="relative mx-auto max-w-5xl">

          {/* BACK BUTTON */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#ded2c1] bg-white px-5 py-2.5 text-xs font-semibold text-[#5d544b] shadow-sm transition hover:border-[#b18a4a] hover:text-[#a8792d]"
            >
              ← Back to Home
            </Link>
          </div>

          {/* BRAND */}
          <div className="text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.45em] text-[#a8792d]">
              BOUDHA HERITAGE
            </p>

            <div className="mx-auto mt-4 flex max-w-xs items-center justify-center gap-3">
              <span className="h-px flex-1 bg-[#b18a4a]" />

              <span className="text-xl text-[#b18a4a]">
                ✦
              </span>

              <span className="h-px flex-1 bg-[#b18a4a]" />
            </div>

            <h1 className="mt-6 font-serif text-4xl font-semibold tracking-wide text-[#29231e] sm:text-5xl md:text-7xl">
              Silver Menu
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6f665d] sm:mt-5 md:text-base">
              An elegant selection of carefully curated dishes
              for memorable celebrations at Boudha Heritage.
            </p>

            {/* PRICE + PACKAGE */}
            <div className="mx-auto mt-7 flex max-w-xl flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">

              <div className="rounded-2xl border border-[#d8c6a7] bg-white px-6 py-4 shadow-sm sm:rounded-full sm:px-8">
                <span className="block text-[9px] font-bold uppercase tracking-[0.25em] text-[#8b8177]">
                  RATE PER PERSON
                </span>

                <strong className="mt-1 block font-serif text-2xl text-[#a8792d] sm:text-3xl">
                  Rs. 2,575
                </strong>
              </div>

              <div className="rounded-2xl bg-[#b18a4a] px-6 py-4 text-white shadow-[0_10px_30px_rgba(120,90,35,0.18)] sm:rounded-full sm:px-8">
                <span className="block text-[9px] font-bold uppercase tracking-[0.25em] text-white/80">
                  SILVER PACKAGE
                </span>

                <strong className="mt-1 block text-xl sm:text-2xl">
                  32 Items
                </strong>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          SILVER MENU
      ===================================================== */}

      <section className="px-5 py-14 md:px-8 md:py-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a8792d]">
              THE SILVER EXPERIENCE
            </p>

            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
              Silver Menu
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#756c62]">
              A carefully selected collection of dishes
              prepared for memorable celebrations.
            </p>
          </div>

          {/* FIRST SECTIONS */}
          <div className="grid gap-6 md:grid-cols-2">
            {silverSections.map((section) => (
              <MenuCard
                key={section.title}
                title={section.title}
                subtitle={section.subtitle}
                choice={section.choice}
                items={section.items}
                groups={section.groups}
              />
            ))}
          </div>

          {/* MAIN COURSE */}
          <div className="mt-16 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a8792d]">
              PREMIUM VEGETARIAN SELECTION
            </p>

            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
              Main Course
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#756c62]">
              Rice, roti, noodles, vegetables and other main-course
              selections arranged clearly by category.
            </p>
          </div>

          {/* MAIN COURSE GRID */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {mainCourseGroups.map((group) => (
              <MenuCard
                key={group.title}
                title={group.title}
                choice={group.choice}
                items={group.items}
              />
            ))}
          </div>

          {/* NON VEG */}
          <div className="mt-8">
            <MenuCard
              title={mainCourseNonVeg.title}
              choice={mainCourseNonVeg.choice}
              groups={mainCourseNonVeg.groups}
            />
          </div>

          {/* DESSERT */}
          <div className="mt-8">
            <MenuCard
              title="Dessert"
              choice="Choose any three"
              items={dessertItems}
            />
          </div>

          {/* PACKAGE NOTE */}
          <div className="mt-8 rounded-[20px] border border-[#d8c39d] bg-[#f4ecdc] px-6 py-5 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6e5940]">
              SILVER MENU · 32 ITEMS · RS. 2,575 PER PAX
            </p>
          </div>

        </div>
      </section>

      {/* =====================================================
          ADDITIONAL MENU
      ===================================================== */}

      <section className="border-y border-[#e0d3bd] bg-[#efe8dc] px-5 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a8792d]">
              ENHANCE YOUR CELEBRATION
            </p>

            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
              Additional Menu
            </h2>

            <p className="mt-3 text-sm text-[#756c62]">
              Special additions available with extra charges.
            </p>
          </div>

          {/* TOP CARDS */}
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {additionalMenu.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.25 }}
                className="rounded-[24px] bg-[#b18a4a] p-7 text-center text-white shadow-[0_15px_35px_rgba(100,75,30,0.12)]"
              >
                <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/30 text-lg">
                  ✦
                </div>

                <h3 className="mt-4 font-serif text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.15em] text-white/80">
                  {item.detail}
                </p>

                <div className="mx-auto mt-5 h-px w-16 bg-white/40" />

                <p className="mt-5 text-lg font-bold">
                  {item.price}
                </p>
              </motion.div>
            ))}
          </div>

          {/* PRICE LISTS */}
          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <PriceList
              number="01"
              title="Special Items"
              items={specialItems}
            />

            <PriceList
              number="02"
              title="Live BBQ Station"
              items={bbqItems}
            />
          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <PriceList
              number="03"
              title="Special Mutton Items"
              items={muttonItems}
            />

            <PriceList
              number="04"
              title="Special Duck Items"
              items={duckItems}
            />
          </div>

          <div className="mx-auto mt-6 max-w-3xl">
            <PriceList
              number="05"
              title="Special Seafood Items"
              items={seafoodItems}
            />
          </div>

        </div>
      </section>

      {/* =====================================================
          ADDITIONAL SERVICES
      ===================================================== */}

      <section className="relative overflow-hidden bg-[#faf8f3] px-5 py-14 md:px-8 md:py-20">

        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[25px] border-[#b18a4a]/5" />

        <div className="relative mx-auto max-w-5xl">

          <div className="text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a8792d]">
              COMPLETE YOUR CELEBRATION
            </p>

            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
              Additional Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#756c62]">
              Customize your celebration with our additional services.
            </p>
          </div>

          {/* SERVICES */}
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service}
                whileHover={{ y: -3 }}
                className="flex items-center gap-4 rounded-[18px] border border-[#e2d7c6] bg-white px-5 py-4 shadow-sm transition hover:shadow-md"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#b18a4a] text-xs font-bold text-white">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <p className="text-sm font-medium text-[#4d463f]">
                  {service}
                </p>

                <span className="ml-auto text-lg text-[#b18a4a]">
                  +
                </span>
              </motion.div>
            ))}
          </div>

          {/* FREE ROOM */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-[20px] border border-[#d8c39d] bg-[#f4ecdc] px-5 py-5 text-center sm:flex-row sm:gap-5 sm:px-6 sm:py-6">
            <span className="text-[#b18a4a]">✦</span>

            <p className="text-sm leading-6 text-[#6e6254]">
              Dressing Room &amp; Refreshment Room provided{" "}
              <strong className="text-[#8e6727]">
                FREE OF COST
              </strong>
            </p>

            <span className="hidden text-[#b18a4a] sm:inline">✦</span>
          </div>

          <p className="mt-10 text-center font-serif text-xl italic text-[#594d40] sm:mt-12 sm:text-2xl md:text-3xl">
            One-stop solution for your unforgettable celebrations.
          </p>

        </div>
      </section>

      {/* =====================================================
          FOOTER
      ===================================================== */}

      <footer className="border-t border-[#ded1bb] bg-[#302a25] px-5 py-10 text-center">

        <p className="font-serif text-2xl tracking-wide text-white">
          BOUDHA HERITAGE
        </p>

        <p className="mt-4 font-serif text-xl text-white/90">
          Silver Menu
        </p>

        <p className="mt-2 text-xs text-white/60">
          One-stop solution for your unforgettable celebrations.
        </p>

        <div className="mt-5 flex items-center justify-center gap-3 text-xs text-white/60">
          <Link
            href="/"
            className="transition hover:text-[#d2b26c]"
          >
            Home
          </Link>

          <span>•</span>

          <Link
            href="/#menus"
            className="transition hover:text-[#d2b26c]"
          >
            Menus
          </Link>

          <span>•</span>

          <Link
            href="/#contact"
            className="transition hover:text-[#d2b26c]"
          >
            Contact
          </Link>
        </div>

        <small className="mt-5 block text-[10px] text-white/40">
          © Boudha Heritage. All rights reserved.
        </small>

      </footer>

    </main>
  );
}