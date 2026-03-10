'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onShowResults: (filters: any) => void;
}

const AMENITIES_OPTIONS = [
  { id: 'pool', label: 'Swimming Pool', icon: 'pool' },
  { id: 'gym', label: 'Gym', icon: 'fitness_center' },
  { id: 'wifi', label: 'High-speed Wifi', icon: 'wifi' },
  { id: 'parking', label: 'Parking', icon: 'local_parking' },
  { id: 'ac', label: 'Air Conditioning', icon: 'ac_unit' },
  { id: 'patio', label: 'Patio / Terrace', icon: 'deck' },
];

export default function FilterModal({ isOpen, onClose, onShowResults }: FilterModalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [location, setLocation] = useState(searchParams.get('location') || '');
  const [minPrice, setMinPrice] = useState(searchParams.get('minPrice') || '');
  const [maxPrice, setMaxPrice] = useState(searchParams.get('maxPrice') || '');
  const [propertyType, setPropertyType] = useState(searchParams.get('propertyType') || 'Any Type');
  const [beds, setBeds] = useState(parseInt(searchParams.get('beds') || '0'));
  const [baths, setBaths] = useState(parseInt(searchParams.get('baths') || '0'));
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>(
    searchParams.get('amenities')?.split(',') || []
  );

  if (!isOpen) return null;

  const handleClearAll = () => {
    setLocation('');
    setMinPrice('');
    setMaxPrice('');
    setPropertyType('Any Type');
    setBeds(0);
    setBaths(0);
    setSelectedAmenities([]);
  };

  const handleApply = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (location) params.set('location', location); else params.delete('location');
    if (minPrice) params.set('minPrice', minPrice); else params.delete('minPrice');
    if (maxPrice) params.set('maxPrice', maxPrice); else params.delete('maxPrice');
    if (propertyType !== 'Any Type') params.set('propertyType', propertyType); else params.delete('propertyType');
    if (beds > 0) params.set('beds', beds.toString()); else params.delete('beds');
    if (baths > 0) params.set('baths', baths.toString()); else params.delete('baths');
    if (selectedAmenities.length > 0) params.set('amenities', selectedAmenities.join(',')); else params.delete('amenities');
    
    // Reset limit when applying new filters
    params.delete('limit');

    router.push(`/?${params.toString()}`, { scroll: false });
    onClose();
  };

  const toggleAmenity = (id: string) => {
    setSelectedAmenities(prev => 
      prev.includes(id) ? prev.filter(a => a !== id) : [...prev, id]
    );
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-nordic/40 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
      />
      
      {/* Modal Container */}
      <div className="relative z-10 w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <header className="px-8 py-6 border-b border-nordic/5 flex justify-between items-center bg-white sticky top-0 z-30">
          <h1 className="text-2xl font-semibold tracking-tight text-nordic">Filters</h1>
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-clear-day transition-colors text-nordic/40 hover:text-nordic"
          >
            <span className="material-icons">close</span>
          </button>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto hide-scroll p-8 space-y-10">
          {/* Location */}
          <section>
            <label className="block text-xs font-semibold text-nordic/40 uppercase tracking-wider mb-3">Location</label>
            <div className="relative group">
              <span className="material-icons absolute left-4 top-3.5 text-nordic/30 group-focus-within:text-mosque transition-colors">location_on</span>
              <input 
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-clear-day border-none rounded-xl text-nordic placeholder-nordic/30 focus:ring-2 focus:ring-mosque focus:bg-white transition-all shadow-sm" 
                placeholder="City, neighborhood, or address" 
              />
            </div>
          </section>

          {/* Price Range */}
          <section>
            <div className="flex justify-between items-end mb-4">
              <label className="block text-xs font-semibold text-nordic/40 uppercase tracking-wider">Price Range</label>
              {(minPrice || maxPrice) && (
                <span className="text-sm font-medium text-mosque">
                  {minPrice ? `$${parseInt(minPrice).toLocaleString()}` : '$0'} – {maxPrice ? `$${parseInt(maxPrice).toLocaleString()}` : 'Any'}
                </span>
              )}
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-clear-day p-3 rounded-xl border border-transparent focus-within:ring-2 focus-within:ring-mosque/20 transition-all">
                <label className="block text-[10px] text-nordic/40 uppercase font-medium mb-1">Min Price</label>
                <div className="flex items-center">
                  <span className="text-nordic/30 mr-1">$</span>
                  <input 
                    type="number"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full bg-transparent border-0 p-0 text-nordic font-medium focus:ring-0 text-sm" 
                    placeholder="0"
                  />
                </div>
              </div>
              <div className="bg-clear-day p-3 rounded-xl border border-transparent focus-within:ring-2 focus-within:ring-mosque/20 transition-all">
                <label className="block text-[10px] text-nordic/40 uppercase font-medium mb-1">Max Price</label>
                <div className="flex items-center">
                  <span className="text-nordic/30 mr-1">$</span>
                  <input 
                    type="number"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full bg-transparent border-0 p-0 text-nordic font-medium focus:ring-0 text-sm" 
                    placeholder="Any"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Property Details */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="block text-xs font-semibold text-nordic/40 uppercase tracking-wider">Property Type</label>
              <div className="relative">
                <select 
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="w-full bg-clear-day border-none rounded-xl py-3 pl-4 pr-10 text-nordic appearance-none focus:ring-2 focus:ring-mosque cursor-pointer"
                >
                  <option>Any Type</option>
                  <option>House</option>
                  <option>Apartment</option>
                  <option>Villa</option>
                  <option>Penthouse</option>
                </select>
                <span className="material-icons absolute right-3 top-3 text-nordic/30 pointer-events-none">expand_more</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Beds */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-nordic">Bedrooms</span>
                <div className="flex items-center space-x-3 bg-clear-day rounded-full p-1">
                  <button 
                    onClick={() => setBeds(Math.max(0, beds - 1))}
                    className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-nordic/40 hover:text-mosque transition-colors"
                  >
                    <span className="material-icons text-base">remove</span>
                  </button>
                  <span className="text-sm font-semibold w-6 text-center">{beds === 0 ? 'Any' : `${beds}+`}</span>
                  <button 
                    onClick={() => setBeds(beds + 1)}
                    className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-mosque hover:bg-mosque hover:text-white transition-colors"
                  >
                    <span className="material-icons text-base">add</span>
                  </button>
                </div>
              </div>
              {/* Baths */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-nordic">Bathrooms</span>
                <div className="flex items-center space-x-3 bg-clear-day rounded-full p-1">
                  <button 
                    onClick={() => setBaths(Math.max(0, baths - 1))}
                    className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-nordic/40 hover:text-mosque transition-colors"
                  >
                    <span className="material-icons text-base">remove</span>
                  </button>
                  <span className="text-sm font-semibold w-6 text-center">{baths === 0 ? 'Any' : `${baths}+`}</span>
                  <button 
                    onClick={() => setBaths(baths + 1)}
                    className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center text-mosque hover:bg-mosque hover:text-white transition-colors"
                  >
                    <span className="material-icons text-base">add</span>
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Amenities */}
          <section>
            <label className="block text-xs font-semibold text-nordic/40 uppercase tracking-wider mb-4">Amenities & Features</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {AMENITIES_OPTIONS.map((option) => {
                const isSelected = selectedAmenities.includes(option.id);
                return (
                  <button
                    key={option.id}
                    onClick={() => toggleAmenity(option.id)}
                    className={`px-4 py-3 rounded-xl border text-sm font-medium flex items-center justify-center gap-2 transition-all ${
                      isSelected 
                        ? 'border-mosque bg-mosque/5 text-mosque' 
                        : 'border-nordic/5 bg-white text-nordic/60 hover:border-nordic/20'
                    }`}
                  >
                    <span className={`material-icons text-lg ${isSelected ? 'text-mosque' : 'text-nordic/30'}`}>{option.icon}</span>
                    {option.label}
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-nordic/5 px-8 py-6 sticky bottom-0 z-30 flex items-center justify-between">
          <button 
            onClick={handleClearAll}
            className="text-sm font-medium text-nordic/40 hover:text-nordic transition-colors underline decoration-nordic/10 underline-offset-4"
          >
            Clear all filters
          </button>
          <button 
            onClick={handleApply}
            className="bg-mosque hover:bg-mosque/90 text-white px-8 py-3 rounded-xl font-medium shadow-lg shadow-mosque/20 transition-all flex items-center gap-2 transform active:scale-95"
          >
            Show Properties
            <span className="material-icons text-sm">arrow_forward</span>
          </button>
        </footer>
      </div>
    </div>
  );
}
