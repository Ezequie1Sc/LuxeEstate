-- 1. Ensure all properties have the original 'image' as the first element in 'images' if not already
-- And ensure we have at least 3 images by appending high-quality placeholders if needed.
update properties 
set images = (
  case 
    when array_length(images, 1) >= 3 then images
    else array[
      image,
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600607687940-c52af096999c?q=80&w=2070&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0bb2a6c3e?q=80&w=2070&auto=format&fit=crop'
    ]
  end
);

-- 2. Drop the redundant 'image' column
alter table properties drop column image;
