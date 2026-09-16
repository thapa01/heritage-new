import type { Metadata } from "next";
import "./globals.css";
import PublicChrome from "./components/PublicChrome";

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
        <PublicChrome>{children}</PublicChrome>
      </body>
    </html>
  );
}