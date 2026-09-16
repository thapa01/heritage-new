-- Lock down direct anonymous inserts on inquiries.
-- The public inquiry form submits through a Next.js Server Action that
-- uses the service-role key (see app/availability/inquiry/_actions/submit.ts),
-- so the anon-key REST path no longer needs INSERT permission and dropping
-- it prevents drive-by spam using the public anon key.
drop policy if exists "inquiries: public insert" on public.inquiries;
