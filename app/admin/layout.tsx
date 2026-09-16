import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { signOutAction } from "./_actions/auth";

const NAV = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/inquiries", label: "Inquiries" },
  { href: "/admin/availability", label: "Availability" },
  { href: "/admin/gallery", label: "Gallery" },
];

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  // Unauthenticated (login page) — render without the admin shell.
  // Middleware guarantees any non-login /admin/* route has a user.
  if (!user) {
    return <>{children}</>;
  }

  return (
    <div className="min-h-screen bg-[#f7f3ea] text-[#2c2822]">
      <div className="mx-auto flex min-h-screen max-w-[1400px] flex-col lg:flex-row">
        <aside className="border-b border-[#e5ddce] bg-white/70 backdrop-blur lg:w-64 lg:border-b-0 lg:border-r">
          <div className="flex items-center justify-between gap-3 px-6 py-6 lg:block">
            <div>
              <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
                BOUDHA HERITAGE
              </div>
              <div className="mt-1 font-serif text-lg text-[#302b25]">Admin</div>
            </div>
            <form action={signOutAction} className="lg:hidden">
              <button
                type="submit"
                aria-label={`Sign out ${user.email ?? ""}`}
                className="rounded-full border border-[#ded6c8] px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-[#8c806f] transition hover:border-[#b89455] hover:text-[#a77d3d]"
              >
                SIGN OUT
              </button>
            </form>
          </div>

          <nav className="flex gap-1 overflow-x-auto px-4 pb-4 lg:mt-4 lg:flex-col lg:gap-1 lg:overflow-visible lg:px-3 lg:pb-6">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="whitespace-nowrap rounded-full px-4 py-2 text-xs font-semibold tracking-[0.14em] text-[#6f675d] transition hover:bg-[#b89455]/10 hover:text-[#a77d3d] lg:rounded-xl lg:px-4 lg:py-2.5"
              >
                {item.label.toUpperCase()}
              </Link>
            ))}
          </nav>

          <div className="hidden border-t border-[#eee6d6] px-4 py-4 lg:block">
            <div className="text-[10px] tracking-[0.2em] text-[#a49a8a]">
              SIGNED IN AS
            </div>
            <div className="mt-1 truncate text-xs text-[#6f675d]">
              {user?.email ?? "—"}
            </div>
            <form action={signOutAction} className="mt-3">
              <button
                type="submit"
                className="w-full rounded-full border border-[#ded6c8] px-4 py-2 text-[10px] font-semibold tracking-[0.2em] text-[#8c806f] transition hover:border-[#b89455] hover:text-[#a77d3d]"
              >
                SIGN OUT
              </button>
            </form>
          </div>
        </aside>

        <main className="flex-1 px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-12">
          {children}
        </main>
      </div>
    </div>
  );
}
