"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import FloatingContact from "./FloatingContact";

// Navbar + WhatsApp/call FAB belong to the public marketing site only.
// The admin panel has its own shell (see app/admin/layout.tsx).
export default function PublicChrome({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const hide = pathname?.startsWith("/admin");
  return (
    <>
      {!hide && <Navbar />}
      {children}
      {!hide && <FloatingContact />}
    </>
  );
}
