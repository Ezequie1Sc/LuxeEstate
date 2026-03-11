-- Add description, year_built, and parking columns to properties table
ALTER TABLE public.properties 
ADD COLUMN IF NOT EXISTS description TEXT,
ADD COLUMN IF NOT EXISTS year_built INTEGER,
ADD COLUMN IF NOT EXISTS parking INTEGER;

-- Update category check constraint to include 'Commercial'
ALTER TABLE public.properties 
DROP CONSTRAINT IF EXISTS properties_category_check;

ALTER TABLE public.properties 
ADD CONSTRAINT properties_category_check 
CHECK (category = ANY (ARRAY['House'::text, 'Apartment'::text, 'Villa'::text, 'Penthouse'::text, 'Commercial'::text]));
;
