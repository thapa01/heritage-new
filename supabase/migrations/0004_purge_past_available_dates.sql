-- Keep available_dates clean: past rows are useless (public /availability
-- filters them, admin UI blocks them). Purge them from the table itself.
--
-- Layer 1: a nightly pg_cron job runs the purge autonomously.
-- Layer 2: the admin /admin/availability page performs the same purge
--   lazily on every load, so an admin visiting mid-day sees the fresh
--   state without waiting for the next cron tick.

create extension if not exists pg_cron;

-- If a job by this name already exists (e.g. re-running the migration
-- in a shadow DB), remove it first so cron.schedule doesn't collide.
-- cron.unschedule raises when the job doesn't exist, so swallow that.
do $$
begin
  perform cron.unschedule('purge-past-available-dates');
exception
  when others then null;
end $$;

select cron.schedule(
  'purge-past-available-dates',
  '5 0 * * *',
  $$delete from public.available_dates where date < current_date$$
);
