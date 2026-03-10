'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import FilterModal from './FilterModal';
import { useTranslations } from 'next-intl';

export default function HomeFilters() {
  const t = useTranslations('Filters');
  const tHero = useTranslations('Hero');
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [query, setQuery] = useState(searchParams.get('query') || '');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query) params.set('query', query); else params.delete('query');
    params.delete('limit'); // Reset pagination
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const categories = [
    { id: 'House', label: t('house') },
    { id: 'Apartment', label: t('apartment') },
    { id: 'Villa', label: t('villa') },
    { id: 'Penthouse', label: t('penthouse') },
  ];

  return (
    <div className="space-y-8">
      <form onSubmit={handleSearch} className="relative group max-w-2xl mx-auto">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
          <span className="material-icons text-nordic/40 text-2xl group-focus-within:text-mosque transition-colors">search</span>
        </div>
        <input 
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="block w-full pl-12 pr-4 py-4 rounded-xl border-none bg-white text-nordic shadow-soft placeholder-nordic/40 focus:ring-2 focus:ring-mosque focus:bg-white transition-all text-lg font-medium" 
          placeholder={tHero('search_placeholder')} 
        />
        <button type="submit" className="absolute inset-y-2 right-2 px-6 bg-mosque hover:bg-mosque/90 text-white font-medium rounded-lg transition-colors flex items-center justify-center shadow-lg shadow-mosque/20">
          {tHero('search_button')}
        </button>
      </form>

      <div className="flex items-center justify-center gap-3 overflow-x-auto hide-scroll py-2 px-4 -mx-4">
        <button 
          onClick={() => router.push('/', { scroll: false })}
          className={`whitespace-nowrap px-5 py-2 rounded-full text-sm font-medium transition-transform hover:-translate-y-0.5 shadow-lg shadow-nordic/10 ${!searchParams.get('propertyType') ? 'bg-nordic text-white' : 'bg-white text-nordic/60 border border-nordic/5'}`}
        >
          {t('all')}
        </button>
        {categories.map((cat) => (
          <button 
            key={cat.id} 
            onClick={() => {
              const params = new URLSearchParams(searchParams.toString());
              params.set('propertyType', cat.id);
              params.delete('limit');
              router.push(`/?${params.toString()}`, { scroll: false });
            }}
            className={`whitespace-nowrap px-5 py-2 rounded-full border text-sm font-medium transition-all hover:bg-mosque/5 ${searchParams.get('propertyType') === cat.id ? 'bg-mosque/10 border-mosque text-mosque' : 'bg-white border-nordic/5 text-nordic/60 hover:text-nordic hover:border-mosque/50'}`}
          >
            {cat.label}
          </button>
        ))}
        <div className="w-px h-6 bg-nordic/10 mx-2"></div>
        <button 
          onClick={() => setIsModalOpen(true)}
          className="whitespace-nowrap flex items-center gap-1 px-4 py-2 rounded-full text-nordic font-medium text-sm hover:bg-black/5 transition-colors"
        >
          <span className="material-icons text-base">tune</span> {t('more_filters')}
          {searchParams.toString() && searchParams.get('limit') === null && (
            <span className="flex h-2 w-2 rounded-full bg-mosque"></span>
          )}
        </button>
      </div>

      <FilterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
}
