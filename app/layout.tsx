import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import FloatingContact from "./components/FloatingContact";

export const metadata: Metadata = {
  title: "Heritage | Where Heritage Meets Celebration",
  description:
    "Experience timeless architecture, elegant spaces and unforgettable celebrations at Heritage.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-[#f7f3ea] text-[#302b25] antialiased">
        <Navbar />
        {children}
        <FloatingContact />
      </body>
    </html>
  );
}