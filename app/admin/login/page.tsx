import { signInAction } from "../_actions/auth";

type SearchParams = Promise<{ error?: string; redirect?: string }>;

export default async function AdminLoginPage({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const { error, redirect } = await searchParams;

  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#2c2822] flex items-center justify-center px-5 py-20">
      <div className="w-full max-w-md rounded-[2rem] border border-[#ded6c8] bg-white p-8 shadow-[0_25px_80px_rgba(67,52,32,0.07)] sm:p-10">
        <div className="text-[10px] font-semibold tracking-[0.4em] text-[#a77d3d]">
          BOUDHA HERITAGE
        </div>
        <h1 className="mt-4 font-serif text-3xl leading-tight tracking-[-0.02em] text-[#302b25] sm:text-4xl">
          Admin sign in
        </h1>
        <p className="mt-3 text-sm leading-6 text-[#756c60]">
          Sign in with your admin email and password.
        </p>

        <form action={signInAction} className="mt-8 space-y-6">
          <input type="hidden" name="redirect" value={redirect ?? "/admin"} />

          <div>
            <label
              htmlFor="email"
              className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]"
            >
              EMAIL
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="mt-3 w-full border-b border-[#dcd5ca] bg-transparent px-0 py-3 text-sm text-[#302b25] outline-none placeholder:text-[#b5ada2] transition focus:border-[#b89455]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-[10px] font-semibold tracking-[0.2em] text-[#8f867a]"
            >
              PASSWORD
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              className="mt-3 w-full border-b border-[#dcd5ca] bg-transparent px-0 py-3 text-sm text-[#302b25] outline-none placeholder:text-[#b5ada2] transition focus:border-[#b89455]"
              placeholder="••••••••"
            />
          </div>

          {error ? (
            <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-xs text-red-700">
              {error}
            </p>
          ) : null}

          <button
            type="submit"
            className="w-full rounded-full bg-[#b89455] px-6 py-4 text-xs font-semibold tracking-[0.18em] text-white shadow-[0_10px_30px_rgba(184,148,85,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#a98246]"
          >
            SIGN IN →
          </button>
        </form>
      </div>
    </main>
  );
}
