'use client';

import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const AMENITIES_OPTIONS = [
  { id: 'pool', label: 'Swimming Pool', icon: 'pool' },
  { id: 'gym', label: 'Gym', icon: 'fitness_center' },
  { id: 'parking', label: 'Parking', icon: 'local_parking' },
  { id: 'ac', label: 'Air Conditioning', icon: 'ac_unit' },
  { id: 'wifi', label: 'High-speed Wifi', icon: 'wifi' },
  { id: 'patio', label: 'Patio / Terrace', icon: 'deck' },
];

const PROPERTY_TYPES = ['Any Type', 'House', 'Apartment', 'Villa', 'Penthouse'];
const SLIDER_MAX = 5000000;
const STEP = 50000;

export default function FilterModal({ isOpen, onClose }: FilterModalProps) {
  const router = useRouter();
  const searchParams = useSearchParams();

  // State initialization with numerical defaults
  const [location, setLocation] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(SLIDER_MAX);
  const [propertyType, setPropertyType] = useState('Any Type');
  const [beds, setBeds] = useState(0);
  const [baths, setBaths] = useState(0);
  const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

  // Sync state with URL when modal opens
  useEffect(() => {
    if (isOpen) {
      setLocation(searchParams.get('location') || '');
      setMinPrice(parseInt(searchParams.get('minPrice') || '0'));
      const urlMax = searchParams.get('maxPrice');
      setMaxPrice(urlMax ? parseInt(urlMax) : SLIDER_MAX);
      setPropertyType(searchParams.get('propertyType') || 'Any Type');
      setBeds(parseInt(searchParams.get('beds') || '0'));
      setBaths(parseInt(searchParams.get('baths') || '0'));
      setSelectedAmenities(searchParams.get('amenities')?.split(',').filter(Boolean) || []);
    }
  }, [isOpen, searchParams]);

  if (!isOpen) return null;

  const handleClearAll = () => {
    setLocation('');
    setMinPrice(0);
    setMaxPrice(SLIDER_MAX);
    setPropertyType('Any Type');
    setBeds(0);
    setBaths(0);
    setSelectedAmenities([]);
  };

  const handleApply = () => {
    const params = new URLSearchParams(searchParams.toString());
    
    if (location) params.set('location', location); else params.delete('location');
    if (minPrice > 0) params.set('minPrice', minPrice.toString()); else params.delete('minPrice');
    if (maxPrice < SLIDER_MAX) params.set('maxPrice', maxPrice.toString()); else params.delete('maxPrice');
    if (propertyType !== 'Any Type') params.set('propertyType', propertyType); else params.delete('propertyType');
    if (beds > 0) params.set('beds', beds.toString()); else params.delete('beds');
    if (baths > 0) params.set('baths', baths.toString()); else params.delete('baths');
    if (selectedAmenities.length > 0) params.set('amenities', selectedAmenities.join(',')); else params.delete('amenities');
    
    params.delete('limit');
    router.push(`/?${params.toString()}`, { scroll: false });
    onClose();
  };

  const formatPriceAbbr = (val: number) => {
    if (val >= 1000000) return `$${(val / 1000000).toFixed(1)}M`;
    if (val >= 1000) return `$${(val / 1000).toFixed(0)}k`;
    return `$${val}`;
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" onClick={onClose} />
      
      {/* Custom Slider Styles */}
      <style jsx global>{`
        .range-slider-input {
          position: absolute;
          width: 100%;
          height: 0;
          -webkit-appearance: none;
          appearance: none;
          background: transparent;
          pointer-events: none;
          outline: none;
          z-index: 10;
        }
        .range-slider-input::-webkit-slider-thumb {
          -webkit-appearance: none;
          appearance: none;
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: white;
          border: 2px solid #006655;
          cursor: pointer;
          pointer-events: auto;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .range-slider-input::-moz-range-thumb {
          height: 24px;
          width: 24px;
          border-radius: 50%;
          background: white;
          border: 2px solid #006655;
          cursor: pointer;
          pointer-events: auto;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }
        .select-clean {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
      `}</style>

      {/* Main Modal Container */}
      <main className="relative z-20 w-full max-w-2xl bg-white rounded-xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <header className="px-8 py-6 border-b border-gray-100 flex justify-between items-center bg-white sticky top-0 z-30">
          <h1 className="text-2xl font-semibold tracking-tight text-nordic">Filters</h1>
          <button onClick={onClose} className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500">
            <span className="material-icons">close</span>
          </button>
        </header>

        {/* Scrollable Content */}
        <div className="flex-1 overflow-y-auto no-scrollbar p-8 space-y-12">
          
          {/* Section 1: Location */}
          <section>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Location</label>
            <div className="relative group">
              <span className="material-icons absolute left-4 top-3.5 text-gray-400 group-focus-within:text-mosque transition-colors">location_on</span>
              <input 
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-clear-day border-0 rounded-lg text-nordic placeholder-gray-400 focus:ring-2 focus:ring-mosque focus:bg-white transition-all shadow-sm font-medium" 
                placeholder="City, neighborhood, or address" 
              />
            </div>
          </section>

          {/* Section 2: Price Range */}
          <section className="space-y-6">
            <div className="flex justify-between items-end">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Price Range</label>
              <span className="text-sm font-medium text-mosque">
                {formatPriceAbbr(minPrice)} – {maxPrice >= SLIDER_MAX ? `$${(SLIDER_MAX/1000000)}M+` : formatPriceAbbr(maxPrice)}
              </span>
            </div>
            
            <div className="relative h-12 flex items-center px-2">
              <div className="absolute w-full h-1 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-mosque"
                  style={{ 
                    marginLeft: `${(minPrice / SLIDER_MAX) * 100}%`, 
                    width: `${((maxPrice - minPrice) / SLIDER_MAX) * 100}%` 
                  }}
                />
              </div>
              <input 
                type="range" min="0" max={SLIDER_MAX} step={STEP} value={minPrice}
                onChange={(e) => setMinPrice(Math.min(parseInt(e.target.value), maxPrice - STEP))}
                className="range-slider-input"
              />
              <input 
                type="range" min="0" max={SLIDER_MAX} step={STEP} value={maxPrice}
                onChange={(e) => setMaxPrice(Math.max(parseInt(e.target.value), minPrice + STEP))}
                className="range-slider-input"
              />
            </div>

            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="bg-clear-day p-4 rounded-xl border border-transparent text-center">
                <label className="block text-[10px] text-gray-500 uppercase font-medium mb-1">Min Price</label>
                <div className="flex items-center justify-center text-nordic font-bold text-sm">
                  <span className="text-gray-400 mr-1">$</span>
                  <span>{minPrice.toLocaleString()}</span>
                </div>
              </div>
              <div className="bg-clear-day p-4 rounded-xl border border-transparent text-center">
                <label className="block text-[10px] text-gray-500 uppercase font-medium mb-1">Max Price</label>
                <div className="flex items-center justify-center text-nordic font-bold text-sm">
                  <span className="text-gray-400 mr-1">$</span>
                  <span>{maxPrice.toLocaleString()}{maxPrice >= SLIDER_MAX ? '+' : ''}</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Property Type & Rooms (Uniform Vertical Stack) */}
          <section className="space-y-10 pt-8 border-t border-gray-100">
            {/* Property Type */}
            <div className="space-y-4">
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider">Property Type</label>
              <div className="relative">
                <select 
                  value={propertyType}
                  onChange={(e) => setPropertyType(e.target.value)}
                  className="select-clean w-full bg-clear-day border-0 rounded-lg py-4 pl-4 pr-10 text-nordic focus:ring-2 focus:ring-mosque cursor-pointer font-bold text-sm shadow-sm"
                >
                  {PROPERTY_TYPES.map(type => <option key={type} value={type}>{type}</option>)}
                </select>
                <span className="material-icons absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none text-xl">expand_more</span>
              </div>
            </div>

            {/* Bedrooms Row */}
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-nordic">Bedrooms</span>
              <div className="flex items-center space-x-3 bg-clear-day rounded-full p-1 border border-nordic/5 shadow-inner">
                <button onClick={() => setBeds(Math.max(0, beds - 1))} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-mosque active:scale-90 transition-all">
                  <span className="material-icons text-base">remove</span>
                </button>
                <span className="text-sm font-bold w-6 text-center text-nordic">{beds}+</span>
                <button onClick={() => setBeds(beds + 1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-mosque hover:bg-mosque hover:text-white active:scale-90 transition-all">
                  <span className="material-icons text-base">add</span>
                </button>
              </div>
            </div>

            {/* Bathrooms Row */}
            <div className="flex justify-between items-center">
              <span className="text-sm font-semibold text-nordic">Bathrooms</span>
              <div className="flex items-center space-x-3 bg-clear-day rounded-full p-1 border border-nordic/5 shadow-inner">
                <button onClick={() => setBaths(Math.max(0, baths - 1))} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-gray-500 hover:text-mosque active:scale-90 transition-all">
                  <span className="material-icons text-base">remove</span>
                </button>
                <span className="text-sm font-bold w-6 text-center text-nordic">{baths}+</span>
                <button onClick={() => setBaths(baths + 1)} className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-mosque hover:bg-mosque hover:text-white active:scale-90 transition-all">
                  <span className="material-icons text-base">add</span>
                </button>
              </div>
            </div>
          </section>

          {/* Section 4: Amenities */}
          <section className="pt-4">
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-4">Amenities & Features</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {AMENITIES_OPTIONS.map((option) => {
                const isSelected = selectedAmenities.includes(option.id);
                return (
                  <button
                    key={option.id}
                    onClick={() => setSelectedAmenities(prev => isSelected ? prev.filter(a => a !== option.id) : [...prev, option.id])}
                    className={`h-full px-4 py-3 rounded-xl border text-sm font-bold flex items-center justify-center gap-2 transition-all relative ${
                      isSelected 
                        ? 'border-mosque bg-mosque/5 text-mosque' 
                        : 'border-gray-200 bg-white text-gray-600 hover:border-gray-300 shadow-sm'
                    }`}
                  >
                    <span className={`material-icons text-lg ${isSelected ? 'text-mosque' : 'text-gray-400'}`}>{option.icon}</span>
                    <span className="text-xs">{option.label}</span>
                    {isSelected && <div className="absolute top-2 right-2 w-2 h-2 bg-mosque rounded-full"></div>}
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* Footer */}
        <footer className="bg-white border-t border-gray-100 px-8 py-6 sticky bottom-0 z-30 flex items-center justify-between">
          <button onClick={handleClearAll} className="text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors underline decoration-gray-300 underline-offset-4">
            Clear all filters
          </button>
          <button 
            onClick={handleApply}
            className="bg-mosque hover:bg-mosque/90 text-white px-8 py-3 rounded-lg font-bold shadow-lg shadow-mosque/30 transition-all flex items-center gap-2 transform active:scale-95"
          >
            Show Properties
            <span className="material-icons text-sm">arrow_forward</span>
          </button>
        </footer>
      </main>
    </div>
  );
}
