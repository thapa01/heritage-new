"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type MenuGroup = {
  name: string;
  choice?: string;
  items: string[];
};

type MenuSection = {
  number: string;
  title: string;
  choice?: string;
  items?: string[];
  groups?: MenuGroup[];
};

/* =========================================================
   GOLD MENU
========================================================= */

const goldSections: MenuSection[] = [
  {
    number: "01",
    title: "Soup",
    choice: "Choose any one",
    items: [
      "Hot and Sour Soup",
      "Cream of Mushroom Soup",
      "Tom Yum Soup (Veg / Non-Veg)",
      "Mix Veg Soup",
      "Green Peas Soup",
      "Veg Clear Soup",
      "Sweet Corn Soup",
    ],
  },

  {
    number: "02",
    title: "Salad",
    choice: "Includes 12 different varieties",
    items: [
      "Boudha Heritage Special Deluxe Salad Bar",
    ],
  },

  {
    number: "03",
    title: "Pickle",
    choice: "Includes 7 different varieties",
    items: [
      "Golveda",
      "Gundruk",
      "Aloo Matar Kerau",
      "Tahakali",
      "Lapsi",
      "Methi",
      "Mango",
    ],
  },

  {
    number: "04",
    title: "Veg Snacks",
    choice: "Choose any five",
    items: [
      "Golden Fried Potato",
      "Sesame Potato Wedges",
      "Aloo Jeera",
      "Roasted Baby Potato",
      "French Fries",
      "Crispy Potato",
      "Tandoori Aloo",
      "Mustang Aloo",
      "Aloo Tikki",
      "Aloo Stick",
      "Aloo Sadeko",
      "Tandoori Aloo",
      "Poleko Aloo",
      "Chips Chilly",
      "Potato Croquettes",
      "Baby Corn Tempura",
      "Crispy Corn",
      "Corn Sadeko",
      "Corn Pakoda",
      "Boiled Corn",
      "Corn Satay",
      "Spicy Veg Balls",
      "Veg Lolly",
      "Veg Wanton",
      "Veg Tikka",
      "Veg Tempura",
      "Veg Pakoda",
      "Mushroom Chilly",
      "Mushroom Choila",
      "Mushroom Sadeko",
      "Mushroom Deep Crispy",
      "Mushroom Tempura",
      "Tofu Tempura",
      "Tofu Hot Sauce",
      "Paneer Pakoda",
      "Paneer Chilly",
      "Paneer Tikka",
      "Bara (Mugi / Mass)",
      "Peanuts Sadeko",
      "Bhatmas Sadeko",
      "Hara Bara Kabab",
      "Grill Vegetable (Live)",
      "Onion Pakoda",
      "Onion Rings",
      "Cheese Potato",
      "Cheese Cherry Pineapple Stick",
      "Cheese Mushroom Balls",
      "Cheese Finger",
      "Brinjal Pakoda",
      "Cocktail Papad",
      "Veg Mo:Mo (Live / Fried / Kothey)",
    ],
  },

  {
    number: "05",
    title: "Non-Veg Snacks",
    choice: "Chicken / Fish / Buff / Bandel — Choose any three",
    groups: [
      {
        name: "Chicken Item",
        items: [
          "Chicken Mo:Mo (Live / Fried / Kothey)",
          "Chicken Chilly",
          "Chicken Choila",
          "Dragon Chicken",
          "Chicken Sadeko",
          "Chicken Tikka",
          "Chicken Meatball",
          "Timur Chicken",
          "Singaporean Chicken",
          "Chicken Kurkure",
          "Honey Glazed Chicken",
          "Chicken Masala Wings",
          "Chicken Fry (Nepali Style)",
          "Hot and Spicy Wings",
          "Chicken Shashlik",
          "Chicken Nuggets",
          "Chicken Sausage",
          "Boiled Chicken",
          "Chicken Wanton",
          "Chicken Satay",
        ],
      },

      {
        name: "Buff Item",
        items: [
          "Buff Mo:Mo (Live / Fried / Kothey)",
          "Buff (Choila / Sadeko)",
          "Buff Chilly",
          "Boiled Buff",
          "Buff Sukuti",
          "Buff Sausage",
          "Buff Meat Balls",
          "Buff Sekuwa",
          "Buff Shashlik",
        ],
      },

      {
        name: "Fish Item",
        items: [
          "Small Fish Fry",
          "Fish Finger",
          "Fish Tempura",
          "Fish Nuggets",
          "Sesame Fish",
          "Fish Amritsari",
          "Fish Fry (Basa)",
          "Dragon Fish",
        ],
      },

      {
        name: "Bandel Item",
        choice: "Choose any one",
        items: [
          "Steamed Bandel",
          "Boiled Bandel",
          "Bandel Chilly",
          "Bandel (Chilly / Sadeko)",
          "Timur Bandel",
          "Bandel Tawa",
          "Bandel Shashlik",
          "Pork Mo:Mo (Live / Fried / Kothey)",
        ],
      },
    ],
  },

  {
    number: "06",
    title: "Main Course",
    choice: "Premium Gold Menu Selection",
    groups: [
      {
        name: "Rice Specialities",
        choice: "Choose any one",
        items: [
          "Plain Steam Rice",
          "Butter Rice",
          "Jeera Rice",
          "Veg Biryani",
          "Pulao (Plain / Butter)",
          "Hira Motika Pulao",
          "Veg Fried Rice",
          "Kashmiri Pulao",
          "Lemon Rice",
          "Saffron Rice",
          "Jeera Pulao",
        ],
      },

      {
        name: "Roti / Naan",
        choice: "Choose any one",
        items: [
          "Plain Naan",
          "Jeera Naan",
          "Butter Naan",
          "Tandoori Naan",
          "Garlic Naan",
          "Paratha (Plain)",
          "Aloo Paratha",
          "Lachha Partha",
        ],
      },

      {
        name: "Noodles / Pasta",
        choice: "Choose any one",
        items: [
          "Chinese Hakka Noodles",
          "Chowmein (Veg / Non-Veg)",
          "Pasta (Carbonara / Bologonese)",
          "Mixed Macaroni (Veg / Non-Veg)",
          "Penne Pasta",
        ],
      },

      {
        name: "Daal & Beans",
        choice: "Choose any two",
        items: [
          "Punjabi Daal Tadka",
          "Jimbu Daal",
          "Lukla Daal",
          "Mixed Daal Fry",
          "Rajma Masala",
          "Mustang Daal",
          "Daal Makhani",
          "Daal Fry",
          "Chana Masala",
        ],
      },

      {
        name: "Mixed Veg",
        choice: "Choose any one",
        items: [
          "Mixed Veg Jalfrezi",
          "Mixed Veg Curry",
          "Gobi Mutter Capsicum",
          "Kashmiri Aloo Dum",
          "Stir Fried Seasonal Veg with Garlic",
          "Mixed Veg in Szechuan Style",
          "Thai Mixed Veg Curry",
          "Boudha Heritage Chef Special (Veg Tawa)",
          "Veg Manchurian",
          "Bhindi Masala",
          "Seasonal Veg",
          "Aloo Parwal",
        ],
      },

      {
        name: "Leafy Green",
        choice: "Choose any one",
        items: [
          "Seasonal Saag",
          "Mixed Saag",
          "Jhaneko Saag",
          "Palak Ko Saag",
          "Tori Ko Saag",
          "Bok Choy with Black Mushroom",
        ],
      },

      {
        name: "Tofu / Mushroom",
        choice: "Choose any one",
        items: [
          "Palak (Tofu / Mushroom)",
          "Butter Masala (Tofu / Mushroom)",
          "Curry (Tofu / Mushroom)",
          "Shahi (Tofu / Mushroom)",
          "Matar (Tofu / Mushroom)",
          "Kadai (Tofu / Mushroom)",
          "Korma (Tofu / Mushroom)",
        ],
      },

      {
        name: "Chicken / Fish Item",
        choice: "Choose any one",
        items: [
          "Fry (Chicken / Fish)",
          "Gravy (Chicken / Fish)",
          "Butter Masala (Chicken / Fish)",
          "Nepali-Style Curry (Chicken / Fish)",
          "Tawa (Chicken / Fish)",
          "Sesame (Chicken / Fish)",
          "Kadhai (Chicken / Fish)",
          "Cutlet (Chicken / Fish)",
        ],
      },

      {
        name: "Bandel Item",
        choice: "Choose any one",
        items: [
          "Bandel Purbeli Style Gravy",
          "Bandel Gravy",
          "Bandel Tawa",
        ],
      },

      {
        name: "Mutton Item",
        choice: "Choose any one",
        items: [
          "Mutton Rogan Josh",
          "Mutton Gravy",
          "Mutton Jhol",
          "Mutton Shahi Korma",
          "Boudha Heritage Special Mutton Kadai",
          "Mutton Kabab",
        ],
      },
    ],
  },

  {
    number: "07",
    title: "Dessert",
    choice: "Choose any four",
    items: [
      "Haluwa (Gajar / Suji / Mugi)",
      "Juju Dhau",
      "Fresh Cut Fruits",
      "Rasbhari / Lalmohan",
      "Bread Pudding",
      "Ice Cream",
      "Masala Kheer",
      "Jalebi (Live)",
      "Shewai Kheer",
      "Dudhbari",
    ],
  },
];

/* =========================================================
   ADDITIONAL MENU
========================================================= */

const additionalMenu = [
  {
    title: "Boudha Heritage Special Salad Bar",
    subtitle: "24 different varieties",
    price: "Rs. 300 per pax",
  },
  {
    title: "Boudha Heritage Special Cocktail Bar",
    subtitle: "4 different varieties",
    price: "Rs. 800 per pax",
  },
  {
    title: "Boudha Heritage Special Dessert Bar",
    subtitle: "18 different varieties",
    price: "Rs. 500 per pax",
  },
];

const specialItems = [
  ["Pani Puri", "Rs. 50 per pax"],
  ["Paan", "Rs. 50 per pax"],
  ["Chaat Station", "Rs. 100 per pax"],
  ["Assorted Pastries", "Rs. 80 per pax"],
  ["Swiss Roll", "Rs. 100 per pax"],
  ["Celebration Cake", "Rs. 1000 per pound"],
  ["Pasta / Spaghetti / Noodles (Live Station)", "Rs. 100 per pax"],
];

const bbqItems = [
  ["Whole Mutton BBQ", "Rs. 35000"],
  ["Mutton BBQ Per Pax", "Rs. 400"],
  ["Whole Bandel BBQ", "Rs. 55000"],
  ["Bandel BBQ Per Pax", "Rs. 300"],
  ["Whole Chicken BBQ", "Rs. 2000"],
  ["Chicken BBQ Per Pax", "Rs. 150"],
  ["Special Veg BBQ Per Pax", "Rs. 75"],
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

const services = [
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
  choice,
  items,
}: {
  title: string;
  choice?: string;
  items: string[];
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.55 }}
      className="rounded-[24px] border border-[#e4d7c2] bg-white p-6 shadow-[0_14px_40px_rgba(60,45,30,0.06)] transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_55px_rgba(60,45,30,0.10)] md:p-7"
    >
      <div className="mb-5 flex items-start gap-4 border-b border-[#eee6d9] pb-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#b18a4a] text-sm text-white shadow-sm">
          ✦
        </div>

        <div className="min-w-0">
          <h3 className="font-serif text-2xl font-semibold tracking-wide text-[#302a25]">
            {title}
          </h3>

          {choice && (
            <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#a8792d]">
              {choice}
            </p>
          )}
        </div>
      </div>

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
    </motion.article>
  );
}

/* =========================================================
   GROUP CARD
========================================================= */

function GroupCard({
  title,
  choice,
  items,
}: {
  title: string;
  choice?: string;
  items: string[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.5 }}
      className="rounded-[20px] border border-[#e5d8c3] bg-[#fcfaf6] p-5 transition duration-300 hover:-translate-y-0.5 hover:shadow-sm"
    >
      <div className="mb-4 border-b border-[#eee5d7] pb-3">
        <h4 className="font-serif text-xl font-semibold text-[#302a25]">
          {title}
        </h4>

        {choice && (
          <p className="mt-1 text-[9px] font-bold uppercase tracking-[0.16em] text-[#a8792d]">
            {choice}
          </p>
        )}
      </div>

      <ul className="grid gap-x-5 gap-y-1.5 sm:grid-cols-2">
        {items.map((item, index) => (
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
    </motion.div>
  );
}

/* =========================================================
   PRICE LIST
========================================================= */

function PriceList({
  title,
  items,
}: {
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
          ✦
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

export default function GoldMenuPage() {
  const basicSections = goldSections.slice(0, 4);
  const nonVegSection = goldSections[4];
  const mainCourseSection = goldSections[5];
  const dessertSection = goldSections[6];

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#302a25]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#dfd2bc] bg-[#fbfaf7] px-5 pb-14 pt-32 md:px-8 md:pb-16 md:pt-36">

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

            <h1 className="mt-6 font-serif text-5xl font-semibold tracking-wide text-[#29231e] md:text-7xl">
              Golden Menu
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[#6f665d] md:text-base">
              A premium selection of carefully curated dishes
              for memorable celebrations at Boudha Heritage.
            </p>

            {/* PRICE + PACKAGE */}
            <div className="mx-auto mt-8 flex max-w-xl flex-col items-center justify-center gap-4 sm:flex-row">

              <div className="rounded-full border border-[#d8c6a7] bg-white px-8 py-4 shadow-sm">
                <span className="block text-[9px] font-bold uppercase tracking-[0.25em] text-[#8b8177]">
                  RATE PER PERSON
                </span>

                <strong className="mt-1 block font-serif text-3xl text-[#a8792d]">
                  Rs. 2,775
                </strong>
              </div>

              <div className="rounded-full bg-[#b18a4a] px-8 py-4 text-white shadow-[0_10px_30px_rgba(120,90,35,0.18)]">
                <span className="block text-[9px] font-bold uppercase tracking-[0.25em] text-white/80">
                  GOLD PACKAGE
                </span>

                <strong className="mt-1 block text-2xl">
                  43 Items
                </strong>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          GOLD MENU
      ===================================================== */}

      <section className="px-5 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-7xl">

          {/* SECTION TITLE */}
          <div className="mb-10 text-center">
            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a8792d]">
              THE GOLD EXPERIENCE
            </p>

            <h2 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">
              Gold Menu
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#756c62]">
              A premium celebration package featuring an extensive
              selection of vegetarian and non-vegetarian dishes.
            </p>
          </div>

          {/* SOUP / SALAD / PICKLE / VEG SNACKS */}
          <div className="grid gap-6 md:grid-cols-2">
            {basicSections.map((section) => (
              <MenuCard
                key={section.number}
                title={section.title}
                choice={section.choice}
                items={section.items || []}
              />
            ))}
          </div>

          {/* =================================================
              NON VEG SNACKS
          ================================================= */}

          <div className="mt-8 rounded-[24px] border border-[#e4d7c2] bg-white p-6 shadow-[0_14px_40px_rgba(60,45,30,0.06)] md:p-8">

            <div className="mb-6 border-b border-[#eee5d7] pb-5 text-center">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a8792d]">
                {nonVegSection.choice}
              </p>

              <h2 className="mt-2 font-serif text-3xl font-semibold md:text-4xl">
                Non-Veg Snacks
              </h2>

            </div>

            <div className="grid gap-5 lg:grid-cols-2">
              {nonVegSection.groups?.map((group) => (
                <GroupCard
                  key={group.name}
                  title={group.name}
                  choice={group.choice}
                  items={group.items}
                />
              ))}
            </div>

          </div>

          {/* =================================================
              MAIN COURSE
          ================================================= */}

          <div className="mt-16 text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a8792d]">
              PREMIUM GOLD MENU SELECTION
            </p>

            <h2 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">
              Main Course
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#756c62]">
              A refined selection of rice, breads, noodles,
              vegetables and premium non-vegetarian preparations.
            </p>

          </div>

          {/* MAIN COURSE GROUPS */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {mainCourseSection.groups?.map((group) => (
              <GroupCard
                key={group.name}
                title={group.name}
                choice={group.choice}
                items={group.items}
              />
            ))}

          </div>

          {/* =================================================
              DESSERT
          ================================================= */}

          <div className="mt-8">

            <MenuCard
              title={dessertSection.title}
              choice={dessertSection.choice}
              items={dessertSection.items || []}
            />

          </div>

          {/* PACKAGE NOTE */}
          <div className="mt-8 rounded-[20px] border border-[#d8c39d] bg-[#f4ecdc] px-6 py-5 text-center">

            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6e5940]">
              GOLD MENU · 43 ITEMS · RS. 2,775 PER PAX
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

            <h2 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">
              Additional Menu
            </h2>

            <p className="mt-3 text-sm text-[#756c62]">
              Special additions available with additional charges.
            </p>

          </div>

          {/* THREE SPECIAL CARDS */}
          <div className="grid gap-5 md:grid-cols-3">

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
                  {item.subtitle}
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
              title="Special Items"
              items={specialItems}
            />

            <PriceList
              title="Live BBQ Station"
              items={bbqItems}
            />

          </div>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">

            <PriceList
              title="Special Mutton Items"
              items={muttonItems}
            />

            <PriceList
              title="Special Duck Items"
              items={duckItems}
            />

          </div>

          <div className="mx-auto mt-6 max-w-2xl">

            <PriceList
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

            <h2 className="mt-2 font-serif text-4xl font-semibold md:text-5xl">
              Additional Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#756c62]">
              Customize your Gold package with our additional services.
              Additional charges apply.
            </p>

          </div>

          {/* SERVICES */}
          <div className="mx-auto mt-10 grid max-w-4xl gap-3 sm:grid-cols-2">

            {services.map((service, index) => (
              <motion.div
                key={service}
                whileHover={{ y: -3 }}
                transition={{ duration: 0.2 }}
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
          <div className="mt-10 flex items-center justify-center gap-5 rounded-[20px] border border-[#d8c39d] bg-[#f4ecdc] px-6 py-6 text-center">

            <span className="text-[#b18a4a]">
              ✦
            </span>

            <p className="text-sm leading-6 text-[#6e6254]">
              Dressing Room & Refreshment Room provided{" "}
              <strong className="text-[#8e6727]">
                FREE OF COST
              </strong>
            </p>

            <span className="text-[#b18a4a]">
              ✦
            </span>

          </div>

          <p className="mt-12 text-center font-serif text-2xl italic text-[#594d40] md:text-3xl">
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
          Golden Menu
        </p>

        <p className="mt-2 text-xs text-white/60">
          Premium Celebration Package
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