-- Visitor analytics removed from the product.
-- Drop the two tables; cascade takes care of the page_views FK.
drop table if exists public.page_views cascade;
drop table if exists public.visitor_sessions cascade;
