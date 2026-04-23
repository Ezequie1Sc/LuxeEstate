'use client';

import { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const LANGUAGES = [
  { code: 'en', label: 'EN', flag: '🇺🇸', fullName: 'English' },
  { code: 'es', label: 'ES', flag: '🇪🇸', fullName: 'Español' },
  { code: 'fr', label: 'FR', flag: '🇫🇷', fullName: 'Français' },
];

export default function LanguageSelector() {
  const router = useRouter();
  const locale = useLocale();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = LANGUAGES.find(l => l.code === locale) || LANGUAGES[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    router.refresh();
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1.5 p-2 rounded-lg hover:bg-[#19322F]/5 transition-colors"
      >
        <span className="text-lg">{currentLanguage.flag}</span>
        <span className="hidden sm:inline text-xs font-medium text-[#19322F]/70">
          {currentLanguage.label}
        </span>
        <span className={`material-icons text-sm text-[#19322F]/40 transition-transform ${isOpen ? 'rotate-180' : ''}`}>
          expand_more
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-1 w-36 bg-white rounded-lg shadow-lg border border-[#19322F]/10 py-1 z-[70]">
          {LANGUAGES.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`
                w-full flex items-center gap-2 px-3 py-2 text-sm
                ${locale === lang.code ? 'bg-[#006655]/10 text-[#006655] font-medium' : 'hover:bg-gray-50'}
              `}
            >
              <span>{lang.flag}</span>
              <span>{lang.fullName}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}