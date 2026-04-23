'use client';

import { useState, useEffect } from 'react';
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
  const [isFocused, setIsFocused] = useState(false);

  const activeCategory = searchParams.get('propertyType');
  const hasActiveFilters = searchParams.toString() && !searchParams.has('limit');

  // Efecto de typing en placeholder
  useEffect(() => {
    setQuery(searchParams.get('query') || '');
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams(searchParams.toString());
    if (query) params.set('query', query); 
    else params.delete('query');
    params.delete('limit');
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const handleCategoryClick = (categoryId: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (categoryId) params.set('propertyType', categoryId);
    else params.delete('propertyType');
    params.delete('limit');
    router.push(`/?${params.toString()}`, { scroll: false });
  };

  const categories = [
    { id: 'House', label: t('house'), icon: 'home', color: '#006655' },
    { id: 'Apartment', label: t('apartment'), icon: 'apartment', color: '#19322F' },
    { id: 'Villa', label: t('villa'), icon: 'villa', color: '#2D4A3E' },
    { id: 'Penthouse', label: t('penthouse'), icon: 'roofing', color: '#3A5A7A' },
  ];

  return (
    <div className="space-y-6 lg:space-y-8">
      {/* Barra de búsqueda mejorada */}
      <form onSubmit={handleSearch} className="relative max-w-3xl mx-auto">
        <div className={`
          relative flex items-center
          bg-white rounded-2xl
          shadow-lg hover:shadow-xl
          border-2 transition-all duration-300
          ${isFocused 
            ? 'border-[#006655] shadow-[#006655]/10 shadow-xl' 
            : 'border-transparent shadow-gray-200/50'
          }
        `}>
          {/* Ícono de búsqueda animado */}
          <div className="absolute left-4 flex items-center pointer-events-none">
            <span className={`
              material-icons text-2xl transition-all duration-300
              ${isFocused || query ? 'text-[#006655] scale-110' : 'text-[#19322F]/40'}
            `}>
              {isFocused ? 'travel_explore' : 'search'}
            </span>
          </div>

          {/* Input */}
          <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={`
              w-full pl-14 pr-28 py-4 lg:py-5
              bg-transparent
              text-[#19322F] text-base lg:text-lg font-medium
              placeholder:text-[#19322F]/30
              focus:outline-none
              transition-all duration-300
            `}
            placeholder={isFocused ? '¿Qué propiedad buscas?' : tHero('search_placeholder')}
          />

          {/* Botón de búsqueda */}
          <div className="absolute right-2 flex items-center gap-2">
            {query && (
              <button
                type="button"
                onClick={() => {
                  setQuery('');
                  const params = new URLSearchParams(searchParams.toString());
                  params.delete('query');
                  router.push(`/?${params.toString()}`, { scroll: false });
                }}
                className="p-2 text-[#19322F]/40 hover:text-[#19322F]/70 transition-colors"
              >
                <span className="material-icons text-xl">close</span>
              </button>
            )}
            <button 
              type="submit" 
              className={`
                px-5 lg:px-6 py-2 lg:py-2.5
                bg-gradient-to-r from-[#006655] to-[#19322F]
                hover:from-[#007766] hover:to-[#2A4A3E]
                text-white font-medium
                rounded-xl
                shadow-lg shadow-[#006655]/20 hover:shadow-xl hover:shadow-[#006655]/30
                transition-all duration-300
                flex items-center gap-2
                group
                ${query ? 'scale-105' : ''}
              `}
            >
              <span className="hidden sm:inline">{tHero('search_button')}</span>
              <span className="material-icons text-xl group-hover:translate-x-0.5 transition-transform">
                arrow_forward
              </span>
            </button>
          </div>
        </div>

        {/* Sugerencias rápidas */}
        {isFocused && !query && (
          <div className="absolute top-full left-0 right-0 mt-2 p-2 bg-white rounded-xl shadow-lg border border-[#19322F]/5 z-30 animate-fadeIn">
            <p className="text-xs text-[#19322F]/40 uppercase tracking-wider px-3 py-1">
              Búsquedas populares
            </p>
            {['Piscina', 'Garaje', 'Vista al mar', 'Jardín'].map((term) => (
              <button
                key={term}
                type="button"
                onClick={() => setQuery(term)}
                className="w-full flex items-center gap-2 px-3 py-2 text-sm text-[#19322F]/70 hover:bg-[#006655]/5 hover:text-[#006655] rounded-lg transition-colors text-left"
              >
                <span className="material-icons text-base">trending_up</span>
                {term}
              </button>
            ))}
          </div>
        )}
      </form>

      {/* Categorías y filtros */}
      <div className="relative">
        <div className="flex items-center gap-2 overflow-x-auto hide-scrollbar pb-2 px-1">
          {/* Botón "Todos" */}
          <button 
            onClick={() => handleCategoryClick(null)}
            className={`
              group relative flex-shrink-0
              px-5 py-2.5 rounded-xl
              text-sm font-medium
              transition-all duration-300
              ${!activeCategory 
                ? 'bg-gradient-to-r from-[#006655] to-[#19322F] text-white shadow-lg shadow-[#006655]/20' 
                : 'bg-white text-[#19322F]/60 hover:text-[#19322F] border border-[#19322F]/10 hover:border-[#19322F]/20 hover:shadow-md'
              }
            `}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span className="material-icons text-base">grid_view</span>
              {t('all')}
            </span>
            {!activeCategory && (
              <span className="absolute inset-0 rounded-xl bg-white/20 animate-pulse" />
            )}
          </button>

          {/* Categorías */}
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button 
                key={cat.id} 
                onClick={() => handleCategoryClick(cat.id)}
                className={`
                  group relative flex-shrink-0
                  px-5 py-2.5 rounded-xl
                  text-sm font-medium
                  transition-all duration-300
                  ${isActive 
                    ? 'text-white shadow-lg'
                    : 'bg-white text-[#19322F]/60 hover:text-[#19322F] border border-[#19322F]/10 hover:border-[#19322F]/20 hover:shadow-md'
                  }
                `}
                style={isActive ? { 
                  background: `linear-gradient(135deg, ${cat.color}, ${cat.color}dd)` 
                } : {}}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="material-icons text-base">{cat.icon}</span>
                  {cat.label}
                </span>
                {isActive && (
                  <span className="absolute inset-0 rounded-xl bg-white/10" />
                )}
                <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-current rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            );
          })}

          {/* Separador */}
          <div className="w-px h-8 bg-gradient-to-b from-transparent via-[#19322F]/20 to-transparent mx-1" />

          {/* Botón de filtros */}
          <button 
            onClick={() => setIsModalOpen(true)}
            className={`
              group relative flex-shrink-0
              flex items-center gap-2
              px-5 py-2.5 rounded-xl
              text-sm font-medium
              bg-white hover:bg-[#19322F]/5
              text-[#19322F]
              border border-[#19322F]/10 hover:border-[#006655]/30
              shadow-sm hover:shadow-md
              transition-all duration-300
            `}
          >
            <span className={`
              material-icons text-lg transition-transform duration-300
              ${hasActiveFilters ? 'text-[#006655]' : 'text-[#19322F]/60'}
              group-hover:rotate-180
            `}>
              tune
            </span>
            <span className={hasActiveFilters ? 'text-[#006655] font-semibold' : ''}>
              {t('more_filters')}
            </span>
            
            {/* Indicador de filtros activos */}
            {hasActiveFilters && (
              <>
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-[#006655] to-[#19322F] rounded-full ring-2 ring-white animate-pulse" />
                <span className="absolute -top-1 -right-1 w-3 h-3 bg-[#006655] rounded-full ring-2 ring-white animate-ping opacity-75" />
              </>
            )}
          </button>
        </div>

        {/* Gradiente de desvanecimiento lateral */}
        <div className="absolute right-0 top-0 bottom-0 w-12 bg-gradient-to-l from-white via-white to-transparent pointer-events-none lg:hidden" />
      </div>

      {/* Filtros activos */}
      {hasActiveFilters && (
        <div className="flex items-center gap-2 flex-wrap animate-fadeIn">
          <span className="text-xs text-[#19322F]/40 uppercase tracking-wider">
            Filtros activos:
          </span>
          {searchParams.get('minPrice') && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#006655]/5 text-[#006655] text-xs rounded-full">
              Min ${Number(searchParams.get('minPrice')).toLocaleString()}
              <button 
                onClick={() => {
                  const params = new URLSearchParams(searchParams.toString());
                  params.delete('minPrice');
                  router.push(`/?${params.toString()}`, { scroll: false });
                }}
                className="hover:text-[#19322F]"
              >
                <span className="material-icons text-sm">close</span>
              </button>
            </span>
          )}
          {searchParams.get('maxPrice') && (
            <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#006655]/5 text-[#006655] text-xs rounded-full">
              Max ${Number(searchParams.get('maxPrice')).toLocaleString()}
              <button 
                onClick={() => {
                  const params = new URLSearchParams(searchParams.toString());
                  params.delete('maxPrice');
                  router.push(`/?${params.toString()}`, { scroll: false });
                }}
                className="hover:text-[#19322F]"
              >
                <span className="material-icons text-sm">close</span>
              </button>
            </span>
          )}
          <button 
            onClick={() => router.push('/', { scroll: false })}
            className="text-xs text-[#19322F]/50 hover:text-[#19322F] underline"
          >
            Limpiar todos
          </button>
        </div>
      )}

      {/* Estilos de animación */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      <FilterModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </div>
  );
};