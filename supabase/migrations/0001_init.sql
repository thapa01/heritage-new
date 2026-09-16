-- Boudha Heritage — initial schema
-- Tables, RLS policies, storage bucket, and gallery-storage policies.

-- =============================================================
-- available_dates: admin publishes which dates are available.
-- =============================================================
create table if not exists public.available_dates (
  date       date primary key,
  note       text,
  created_at timestamptz not null default now()
);

alter table public.available_dates enable row level security;

create policy "available_dates: public read"
  on public.available_dates for select
  to anon, authenticated
  using (true);

create policy "available_dates: authenticated write"
  on public.available_dates for all
  to authenticated
  using (true) with check (true);


-- =============================================================
-- inquiries: submitted from the public inquiry form.
-- =============================================================
create type public.inquiry_status as enum ('new', 'read', 'replied', 'archived');

create table if not exists public.inquiries (
  id          uuid primary key default gen_random_uuid(),
  name        text not null,
  phone       text not null,
  guests      integer,
  event_type  text,
  event_date  date,
  message     text,
  status      public.inquiry_status not null default 'new',
  ip_hash     text,
  user_agent  text,
  created_at  timestamptz not null default now()
);

create index inquiries_created_at_idx on public.inquiries (created_at desc);
create index inquiries_status_idx on public.inquiries (status);

alter table public.inquiries enable row level security;

-- Public can insert (from the site's Server Action). No public read.
create policy "inquiries: public insert"
  on public.inquiries for insert
  to anon
  with check (true);

create policy "inquiries: authenticated full"
  on public.inquiries for all
  to authenticated
  using (true) with check (true);


-- =============================================================
-- gallery_items: photos/videos shown on the public gallery.
-- =============================================================
create type public.gallery_type as enum ('image', 'video');

create table if not exists public.gallery_items (
  id           uuid primary key default gen_random_uuid(),
  type         public.gallery_type not null,
  title        text,
  storage_path text not null,
  sort_order   integer not null default 0,
  created_at   timestamptz not null default now()
);

create index gallery_items_sort_idx on public.gallery_items (sort_order asc, created_at desc);

alter table public.gallery_items enable row level security;

create policy "gallery_items: public read"
  on public.gallery_items for select
  to anon, authenticated
  using (true);

create policy "gallery_items: authenticated write"
  on public.gallery_items for all
  to authenticated
  using (true) with check (true);


-- =============================================================
-- visitor_sessions + page_views: anonymous analytics.
-- Public cannot access directly. Writes go through service-role
-- via /api/track. Only authenticated (admin) can read.
-- =============================================================
create table if not exists public.visitor_sessions (
  session_id  text primary key,
  first_seen  timestamptz not null default now(),
  last_seen   timestamptz not null default now(),
  user_agent  text,
  ip_prefix   text,
  referrer    text
);

create table if not exists public.page_views (
  id         uuid primary key default gen_random_uuid(),
  session_id text not null references public.visitor_sessions(session_id) on delete cascade,
  path       text not null,
  referrer   text,
  viewed_at  timestamptz not null default now()
);

create index page_views_viewed_at_idx on public.page_views (viewed_at desc);
create index page_views_session_id_idx on public.page_views (session_id);
create index page_views_path_idx on public.page_views (path);

alter table public.visitor_sessions enable row level security;
alter table public.page_views enable row level security;

create policy "visitor_sessions: authenticated read"
  on public.visitor_sessions for select
  to authenticated
  using (true);

create policy "page_views: authenticated read"
  on public.page_views for select
  to authenticated
  using (true);


-- =============================================================
-- Storage bucket for gallery media.
-- Public read; authenticated (admin) can upload/delete.
-- =============================================================
insert into storage.buckets (id, name, public)
values ('gallery', 'gallery', true)
on conflict (id) do nothing;

create policy "gallery bucket: public read"
  on storage.objects for select
  to anon, authenticated
  using (bucket_id = 'gallery');

create policy "gallery bucket: authenticated insert"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'gallery');

create policy "gallery bucket: authenticated update"
  on storage.objects for update
  to authenticated
  using (bucket_id = 'gallery')
  with check (bucket_id = 'gallery');

create policy "gallery bucket: authenticated delete"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'gallery');
