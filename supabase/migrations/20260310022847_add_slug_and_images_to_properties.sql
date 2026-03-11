-- Add slug and images columns
alter table properties add column slug text unique;
alter table properties add column images text[] default '{}';
-- Generate slugs for existing properties based on title
update properties set slug = lower(replace(title, ' ', '-'));
-- Add some images to properties
update properties set images = array[image, 
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
  'https://images.unsplash.com/photo-1600607687940-c52af096999c?q=80&w=2070&auto=format&fit=crop'
];
-- Ensure slug is not null for future inserts
alter table properties alter column slug set not null;
