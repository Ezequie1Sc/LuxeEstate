alter table properties add column category text default 'House';

update properties set category = 'Apartment' where title ilike '%Apartment%' or title ilike '%Studio%' or title ilike '%Loft%';
update properties set category = 'Villa' where title ilike '%Villa%';
update properties set category = 'Penthouse' where title ilike '%Penthouse%';
update properties set category = 'House' where title ilike '%House%' or title ilike '%Home%' or title ilike '%Cottage%' or title ilike '%Cabin%';
