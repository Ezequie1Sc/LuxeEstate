-- Add status column to properties
create type property_status as enum ('Active', 'Pending', 'Sold');
alter table properties add column status property_status default 'Active' not null;

-- Randomly assign some statuses for variety in the dashboard
update properties set status = 'Pending' where random() > 0.8;
update properties set status = 'Sold' where random() > 0.9;
