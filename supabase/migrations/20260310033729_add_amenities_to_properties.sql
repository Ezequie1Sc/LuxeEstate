alter table properties add column amenities text[] default '{}';

-- Update existing properties with some random realistic amenities
update properties set amenities = array['Smart Home System', 'Swimming Pool', 'Central Heating & Cooling', 'Electric Vehicle Charging', 'Private Gym', 'Wine Cellar'] where random() > 0.5;
update properties set amenities = array['Swimming Pool', 'Wifi', 'Air Conditioning'] where amenities = '{}';
