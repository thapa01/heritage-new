import { createClient } from "@supabase/supabase-js";

// Service-role client for server-only writes that bypass RLS
// (visitor tracking API route, admin bulk ops). Never import from
// client components.
export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    { auth: { persistSession: false, autoRefreshToken: false } }
  );
}
