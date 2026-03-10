-- 1. Ensure all categories strictly match the chips: 'House', 'Apartment', 'Villa', 'Penthouse'
update properties set category = 'Apartment' where title ilike '%Apartment%' or title ilike '%Studio%' or title ilike '%Loft%' or title ilike '%Condo%';
update properties set category = 'Villa' where title ilike '%Villa%';
update properties set category = 'Penthouse' where title ilike '%Penthouse%';
update properties set category = 'House' where title ilike '%House%' or title ilike '%Home%' or title ilike '%Cottage%' or title ilike '%Cabin%' or title ilike '%Townhouse%';

-- 2. Set a default for any that don't match (though my seed data should cover it)
update properties set category = 'House' where category not in ('House', 'Apartment', 'Villa', 'Penthouse');

-- 3. Add a check constraint to prevent future invalid values
alter table properties add constraint check_category_values check (category in ('House', 'Apartment', 'Villa', 'Penthouse'));
