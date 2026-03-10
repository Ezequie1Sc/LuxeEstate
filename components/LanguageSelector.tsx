'use client';

import { useRouter } from 'next/navigation';
import { useLocale } from 'next-intl';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇺🇸' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
];

export default function LanguageSelector() {
  const router = useRouter();
  const locale = useLocale();

  const handleLanguageChange = (newLocale: string) => {
    // Set the cookie for next-intl to pick up on the server
    document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
    
    // Refresh the current route to reload data with new locale
    router.refresh();
  };

  return (
    <div className="relative group">
      <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-nordic/5 transition-colors border border-nordic/10 bg-white shadow-sm">
        <span className="text-lg">{LANGUAGES.find(l => l.code === locale)?.flag || '🌐'}</span>
        <span className="text-xs font-bold text-nordic uppercase tracking-wider hidden sm:inline">
          {locale}
        </span>
        <span className="material-icons text-sm text-nordic/40">expand_more</span>
      </button>
      
      <div className="absolute right-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-nordic/5 py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-[70] transform origin-top-right group-hover:scale-100 scale-95">
        {LANGUAGES.map((lang) => (
          <button
            key={lang.code}
            onClick={() => handleLanguageChange(lang.code)}
            className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors hover:bg-mosque/5 ${
              locale === lang.code ? 'text-mosque font-bold bg-mosque/5' : 'text-nordic/70'
            }`}
          >
            <span className="text-base">{lang.flag}</span>
            <span>{lang.label}</span>
            {locale === lang.code && (
              <span className="material-icons text-sm ml-auto">check</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
