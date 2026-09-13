"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type MenuCardProps = {
  title: string;
  choice?: string;
  items: string[];
};

type Group = {
  name: string;
  choice?: string;
  items: string[];
};

/* =========================================================
   DIAMOND MENU
========================================================= */

const diamondSections = [
  {
    number: "01",
    title: "Soup",
    choice: "Choose any one",
    items: [
      "Veg Clear Soup",
      "Mix Veg Soup",
      "Sweet Corn Soup",
      "Cream of Mushroom Soup",
      "Green Peas Soup",
      "Hot & Sour Soup",
      "Chef Special Soup",
      "Tom Yum Soup (Veg / Non-Veg)",
      "Carrot Soup",
      "Tomato Soup",
      "Haddi Ko Soup",
      "Chicken Soup",
      "Mulligatawny Soup",
    ],
  },

  {
    number: "02",
    title: "Salad",
    choice: "Deluxe includes 15 different varieties",
    items: [
      "Boudha Heritage Special Deluxe Salad Bar",
    ],
  },

  {
    number: "03",
    title: "Pickle",
    choice: "Deluxe includes 7 different varieties",
    items: [
      "Golveda",
      "Gundruk",
      "Aloo Matar Kerau",
      "Lapsi",
      "Methi",
      "Tahakal",
      "Mango",
    ],
  },

  {
    number: "04",
    title: "Veg Snacks",
    choice: "Choose any seven",
    items: [
      "Golden Fried Potato",
      "French Fries",
      "Tandoori Aloo",
      "Mustang Aloo",
      "Sesame Potato Wedges",
      "Crispy Potato",
      "Aloo Tikki",
      "Aloo Stick",
      "Aloo Jeera",
      "Aloo Sadeko",
      "Chips Chilly",
      "Potato Croquettes",
      "Roasted Baby Potato",
      "Cheese Pakoda",
      "Crumbed Fried Potato",
      "Honey Potato",
      "Boiled Corn",
      "Crispy Corn",
      "Corn Satay",
      "Corn Sadeko",
      "Corn Pakoda",
      "Baby Corn Tempura",
      "Twakka Tukka Corn",
      "Veg Pakoda",
      "Brinjal Pakoda",
      "Onion Pakoda",
      "Mushroom Chilly",
      "Mushroom Choila / Sadeko",
      "Mushroom Cheese Balls",
      "Crunchy Fried Mushroom",
      "Mushroom Salt & Pepper",
      "Mushroom Tempura",
      "Cheese Balls",
      "Cheese Finger / Kurkure",
      "Cheese Cherry Pineapple Stick",
      "Hara Bara Kabab",
      "Onion Rings",
      "Veg Finger Chilly",
      "Tofu Hot Sauce",
      "Tofu Timur",
      "Tofu Chilly",
      "Paneer Pakoda",
      "Paneer Chilly / Tawa",
      "Paneer Tikka / Satay",
      "Paneer BBQ",
      "Bara (Mugi / Mass)",
      "Grill Vegetable",
      "Peanuts Sadeko",
      "Bhatmas Sadeko",
      "Veg Manchurian (Dry)",
      "Cocktail Papad",
    ],
  },
];

/* =========================================================
   NON VEG SNACKS
========================================================= */

const nonVegSnackGroups: Group[] = [
  {
    name: "Chicken Item",
    items: [
      "Chicken Mo:Mo (Live / Fried / Kothey)",
      "Chicken Chilly",
      "Chicken Choila / Sadeko",
      "Chicken Tikka",
      "Boiled Chicken",
      "Chicken Sausages (Boiled / Fried / Chilly / Grilled)",
      "Dragon Chicken",
      "Singaporean Chicken",
      "Chicken Shashlik",
      "Chicken Wanton",
      "Chicken Sausage",
      "Timur Chicken",
      "Honey Glazed Chicken",
      "Chicken Masala Wings",
      "Chicken Fry (Nepali Style)",
      "Hot and Spicy Wings",
      "Chicken Kurkure",
      "Chicken Meatball",
      "Chicken Lolly",
      "Chicken Tandoori",
      "Chicken K.F.C",
      "Chicken Satay",
      "Chicken Nuggets",
    ],
  },

  {
    name: "Fish Item",
    items: [
      "Small Fish Fry",
      "Fish Finger",
      "Fish Tempura",
      "Fish Ball",
      "Fish Nuggets",
      "Fish Chilly",
      "Fish Mongolian",
      "Fish Singaporean",
      "Fish Amritsari",
      "Fish Fry (Basa)",
      "Dragon Fish",
      "Fish Tikka",
      "Timur Fish",
      "Sesame Fish",
    ],
  },

  {
    name: "Buff Item",
    items: [
      "Buff Mo:Mo (Live / Fried / Kothey)",
      "Buff Chilly",
      "Buff Choila",
      "Buff Sadeko",
      "Shredded Buff with Bell Pepper (Live)",
      "Roasted Buff with Hot Chilly Bean Sauce",
      "Buff Sausage",
      "Buff Meat Balls",
      "Buff Sekuwa",
      "Buff Shashlik",
      "Buff Sukuti",
      "Buff Seekh Kabab",
    ],
  },

  {
    name: "Bandel Item",
    choice: "Choose any two",
    items: [
      "Steamed / Boiled Bandel",
      "Bandel Chilly",
      "Roasted Bandel",
      "Bandel Sadeko",
      "Timur Bandel",
      "Bandel Tawa",
      "Bandel Choila",
      "Sausage Bacon Roll",
    ],
  },

  {
    name: "Pork Item",
    items: [
      "Pork Mo:Mo (Live / Fried / Kothey)",
      "Pork Sausages (Boiled / Fried / Chilly / Grilled)",
    ],
  },
];

/* =========================================================
   MAIN COURSE
========================================================= */

const mainCourseGroups: Group[] = [
  {
    name: "Rice Specialities",
    choice: "Choose any two",
    items: [
      "Plain Steam Rice",
      "Butter Rice",
      "Jeera Rice",
      "Lemon Rice",
      "Saffron Rice",
      "Veg Fried Rice",
      "Veg Biryani",
      "Navratan Pulao",
      "Pulao (Plain / Butter)",
      "Jeera Pulao",
      "Hira Motika Pulao",
      "Kashmiri Pulao",
    ],
  },

  {
    name: "Roti / Naan",
    choice: "Choose any two",
    items: [
      "Plain Naan",
      "Jeera Naan",
      "Butter Naan",
      "Tandoori Naan",
      "Rumali Roti",
      "Kodo Ko Roti",
      "Garlic Naan",
      "Paratha (Plain)",
      "Aloo Paratha",
      "Lachha Partha",
      "Fapar Ko Roti",
    ],
  },

  {
    name: "Noodles / Pasta",
    choice: "Choose any two",
    items: [
      "Chinese Hakka Noodles",
      "Penne Pasta",
      "Mixed Macaroni (Veg / Non-Veg)",
      "Spaghetti (Carbonara / Bologonese)",
      "Chowmein (Veg / Non-Veg)",
      "Pasta (Carbonara / Bologonese)",
      "Pad Thai (Thai Rice Noodles)",
    ],
  },

  {
    name: "Daal & Beans",
    choice: "Choose any two",
    items: [
      "Daal Makhani",
      "Daal Fry",
      "Punjabi Daal Tadka",
      "Jimbu Daal",
      "Rajma Masala",
      "Chana Masala",
      "Lukla Daal",
      "Mixed Daal Fry",
      "Mustang Daal",
      "Thakali Daal",
    ],
  },

  {
    name: "Mixed Veg",
    choice: "Choose any two",
    items: [
      "Chana Masala",
      "Seasonal Veg",
      "Mixed Veg Jalfrezi",
      "Mixed Veg Curry",
      "Gobi Matar Capsicum",
      "Kashmiri Aloo Dum",
      "Stir Fried Seasonal Veg with Garlic",
      "Mixed Veg in Szechuan Style",
      "Veg Manchurian",
      "Bhindi Masala",
      "Sweet & Sour Veg",
      "Thai Mixed Veg Curry",
      "Boudha Heritage Chef Special (Veg Tawa)",
      "Aloo Parwal",
      "Saute Mixed Veg",
      "Corn Palak",
    ],
  },

  {
    name: "Leafy Green",
    choice: "Choose any one",
    items: [
      "Seasonal Saag",
      "Jhaneko Saag",
      "Bok Choy with Black Mushroom",
      "Palak Ko Saag",
      "Tori Ko Saag",
      "Mixed Saag",
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
      "Mutter (Tofu / Mushroom)",
      "Kadai (Tofu / Mushroom)",
      "Korma (Tofu / Mushroom)",
    ],
  },

  {
    name: "Paneer",
    choice: "Choose any one",
    items: [
      "Paneer Butter Masala",
      "Shahi Paneer",
      "Mutter Paneer",
      "Paneer Roll",
      "Paneer Kadai",
      "Palak Paneer",
      "Hot Garlic Paneer",
      "Paneer Malai Kofta",
      "Paneer Korma",
    ],
  },
];

const mainCourseNonVeg: Group[] = [
  {
    name: "Chicken / Fish Item",
    choice: "Chicken / Fish / Bandel — Choose any two",
    items: [
      "Fry (Chicken / Fish)",
      "Gravy (Chicken / Fish)",
      "Butter Masala (Chicken / Fish)",
      "Nepali-Style Curry (Chicken / Fish)",
      "Tawa (Chicken / Fish)",
      "Sesame (Chicken / Fish)",
      "Kadai (Chicken / Fish)",
      "Cutlet (Chicken / Fish)",
    ],
  },

  {
    name: "Bandel Item",
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
      "Boudha Heritage Special Mutton (Kadhai)",
      "Mutton Rogan Josh",
      "Mutton Gravy",
      "Mutton Jhol",
      "Mutton Shahi Korma",
      "Mutton Kabab",
      "Mutton Pakku",
      "Mutton Hariyali",
    ],
  },
];

/* =========================================================
   DESSERT
========================================================= */

const dessertItems = [
  "Haluwa (Gajar / Suji / Mugi)",
  "Juju Dhau",
  "Jalebi (Live)",
  "Fresh Cut Fruits",
  "Rasbhari / LalMohan",
  "Ice Cream",
  "Masala Kheer",
  "Bread Pudding",
  "Shewai Kheer",
  "Dudhbari",
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
  ["Duck Choiila", "Rs. 200 per pax"],
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
}: MenuCardProps) {
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
      transition={{ duration: 0.5 }}
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

export default function DiamondMenu() {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#302a25]">

      {/* =====================================================
          HERO
      ===================================================== */}

      <section className="relative overflow-hidden border-b border-[#dfd2bc] bg-[#fbfaf7] px-5 pb-12 pt-28 sm:pb-14 sm:pt-32 md:px-8 md:pb-16 md:pt-36">

        <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full border-[18px] border-[#b18a4a]/10" />

        <div className="pointer-events-none absolute -right-28 -top-20 h-80 w-80 rounded-full border-[18px] border-[#b18a4a]/10" />

        <div className="pointer-events-none absolute bottom-[-180px] left-1/2 h-96 w-96 -translate-x-1/2 rounded-full border border-[#b18a4a]/10" />

        <div className="relative mx-auto max-w-5xl">

          {/* BACK */}
          <div className="mb-10">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-full border border-[#ded2c1] bg-white px-5 py-2.5 text-xs font-semibold text-[#5d544b] shadow-sm transition hover:border-[#b18a4a] hover:text-[#a8792d]"
            >
              ← Back to Home
            </Link>
          </div>

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
              Diamond Menu
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-[#6f665d] sm:mt-5 md:text-base">
              Our most extensive celebration menu, carefully curated
              for unforgettable occasions at Boudha Heritage.
            </p>

            {/* PRICE */}
            <div className="mx-auto mt-7 flex max-w-xl flex-col items-stretch justify-center gap-3 sm:mt-8 sm:flex-row sm:items-center sm:gap-4">

              <div className="rounded-2xl border border-[#d8c6a7] bg-white px-6 py-4 shadow-sm sm:rounded-full sm:px-8">
                <span className="block text-[9px] font-bold uppercase tracking-[0.25em] text-[#8b8177]">
                  RATE PER PERSON
                </span>

                <strong className="mt-1 block font-serif text-2xl text-[#a8792d] sm:text-3xl">
                  Rs. 3,275
                </strong>
              </div>

              <div className="rounded-2xl bg-[#b18a4a] px-6 py-4 text-white shadow-[0_10px_30px_rgba(120,90,35,0.18)] sm:rounded-full sm:px-8">
                <span className="block text-[9px] font-bold uppercase tracking-[0.25em] text-white/80">
                  DIAMOND PACKAGE
                </span>

                <strong className="mt-1 block text-xl sm:text-2xl">
                  56 Items
                </strong>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          DIAMOND MENU
      ===================================================== */}

      <section className="px-5 py-14 md:px-8 md:py-18">

        <div className="mx-auto max-w-7xl">

          <div className="mb-10 text-center">

            <p className="text-[10px] font-bold uppercase tracking-[0.35em] text-[#a8792d]">
              THE DIAMOND EXPERIENCE
            </p>

            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
              Diamond Menu
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#756c62]">
              A complete premium selection of soups, salads,
              snacks, main course and desserts.
            </p>

          </div>

          {/* FIRST FOUR */}
          <div className="grid gap-6 md:grid-cols-2">

            {diamondSections.map((section) => (
              <MenuCard
                key={section.number}
                title={section.title}
                choice={section.choice}
                items={section.items}
              />
            ))}

          </div>

          {/* =================================================
              NON VEG SNACKS
          ================================================= */}

          <div className="mt-8 rounded-[24px] border border-[#e4d7c2] bg-white p-6 shadow-[0_14px_40px_rgba(60,45,30,0.06)] md:p-8">

            <div className="mb-6 border-b border-[#eee5d7] pb-5 text-center">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a8792d]">
                PREMIUM NON-VEG SELECTION
              </p>

              <h2 className="mt-2 font-serif text-2xl font-semibold sm:text-3xl md:text-4xl">
                Non-Veg Snacks
              </h2>

              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#8b8177]">
                CHOOSE ANY THREE
              </p>

            </div>

            <div className="grid gap-5 lg:grid-cols-2">

              {nonVegSnackGroups.map((group) => (
                <MenuCard
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
              PREMIUM SELECTION
            </p>

            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
              Main Course
            </h2>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-[#756c62]">
              Carefully arranged into individual categories for
              an easy and elegant menu experience.
            </p>

          </div>

          {/* VEGETARIAN */}
          <div className="mt-8 grid gap-6 md:grid-cols-2">

            {mainCourseGroups.map((group) => (
              <MenuCard
                key={group.name}
                title={group.name}
                choice={group.choice}
                items={group.items}
              />
            ))}

          </div>

          {/* MAIN COURSE NON VEG */}
          <div className="mt-8 rounded-[24px] border border-[#e4d7c2] bg-white p-6 shadow-[0_14px_40px_rgba(60,45,30,0.06)] md:p-8">

            <div className="mb-6 border-b border-[#eee5d7] pb-5 text-center">

              <p className="text-[9px] font-bold uppercase tracking-[0.3em] text-[#a8792d]">
                PREMIUM NON-VEG SELECTION
              </p>

              <h3 className="mt-2 font-serif text-3xl font-semibold">
                Main Course — Non-Veg
              </h3>

            </div>

            <div className="grid gap-5 lg:grid-cols-2">

              {mainCourseNonVeg.map((group) => (
                <MenuCard
                  key={group.name}
                  title={group.name}
                  choice={group.choice}
                  items={group.items}
                />
              ))}

            </div>

          </div>

          {/* DESSERT */}
          <div className="mt-8">

            <MenuCard
              title="Dessert"
              choice="Choose any five"
              items={dessertItems}
            />

          </div>

          {/* PACKAGE INFO */}
          <div className="mt-8 rounded-[20px] border border-[#d8c39d] bg-[#f4ecdc] px-6 py-5 text-center">

            <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6e5940]">
              DIAMOND MENU · 56 ITEMS · RS. 3,275 PER PAX
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
              Special additions available with additional charges.
            </p>

          </div>

          {/* THREE CARDS */}
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

            <h2 className="mt-2 font-serif text-3xl font-semibold sm:text-4xl md:text-5xl">
              Additional Services
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-[#756c62]">
              Customize your Diamond package with our
              additional services. Additional charges apply.
            </p>

          </div>

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

          {/* NOTE */}
          <div className="mt-10 flex flex-col items-center justify-center gap-3 rounded-[20px] border border-[#d8c39d] bg-[#f4ecdc] px-5 py-5 text-center sm:flex-row sm:gap-5 sm:px-6 sm:py-6">

            <span className="text-[#b18a4a]">
              ✦
            </span>

            <p className="text-sm leading-6 text-[#6e6254]">
              Dressing Room &amp; Refreshment Room provided{" "}
              <strong className="text-[#8e6727]">
                FREE OF COST
              </strong>
            </p>

            <span className="hidden text-[#b18a4a] sm:inline">
              ✦
            </span>

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

        <div className="flex justify-center">

          <img
            src="/boudha-logo.png"
            alt="Boudha Heritage"
            className="h-12 w-auto object-contain brightness-0 invert"
          />

        </div>

        <p className="mt-3 text-[10px] font-bold uppercase tracking-[0.35em] text-[#d2b26c]">
          DIAMOND MENU
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
            href="/availability"
            className="transition hover:text-[#d2b26c]"
          >
            Availability
          </Link>

        </div>

        <small className="mt-5 block text-[10px] text-white/40">
          © Boudha Heritage. All rights reserved.
        </small>

      </footer>

    </main>
  );
}