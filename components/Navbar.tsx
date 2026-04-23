import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "./LanguageSelector";
import { getTranslations } from 'next-intl/server';
import { createClient } from '@/utils/supabase/server';
import UserMenu from './UserMenu';

export default async function Navbar() {
  const t = await getTranslations('Navbar');
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  const navLinks = [
    { href: '#', label: t('buy'), active: true },
    { href: '#', label: t('rent'), active: false },
    { href: '#', label: t('sell'), active: false },
    { href: '#', label: t('saved'), active: false },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-[#19322F]/5 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo con imagen */}
          <Link 
            href="/" 
            className="flex-shrink-0 flex items-center gap-3 group cursor-pointer"
          >
            <div className="relative">
              {/* Efecto de brillo en hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#006655] to-[#19322F] rounded-xl blur-md opacity-40 group-hover:opacity-60 transition-opacity duration-300" />
              
              {/* Contenedor de la imagen */}
              <div className="relative w-9 h-9 lg:w-10 lg:h-10 rounded-xl overflow-hidden shadow-lg shadow-[#19322F]/20 group-hover:shadow-xl group-hover:shadow-[#19322F]/30 transition-all duration-300 group-hover:scale-105">
                <Image 
                  src="/logo451.png" 
                  alt="LuxeEstate Logo" 
                  fill
                  sizes="(max-width: 768px) 36px, 40px"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
            
            <span className="text-xl lg:text-2xl font-bold tracking-tight bg-gradient-to-r from-[#19322F] to-[#006655] bg-clip-text text-transparent">
              LuxeEstate
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`
                  relative px-4 py-2 text-sm font-medium transition-all duration-200 group
                  ${link.active 
                    ? 'text-[#006655]' 
                    : 'text-[#19322F]/60 hover:text-[#19322F]'
                  }
                `}
              >
                {link.label}
                {link.active && (
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 bg-gradient-to-r from-[#006655] to-[#19322F] rounded-full" />
                )}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#006655] to-[#19322F] rounded-full transition-all duration-300 group-hover:w-5" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-1 sm:gap-2">
            <LanguageSelector />
            
            {/* Search Button */}
            <button className="relative p-2 text-[#19322F]/70 hover:text-[#006655] transition-all duration-200 hover:bg-[#19322F]/5 rounded-full group">
              <span className="material-icons">search</span>
              <span className="absolute inset-0 rounded-full bg-[#006655]/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </button>
            
            {/* Notifications Button */}
            <button className="relative p-2 text-[#19322F]/70 hover:text-[#006655] transition-all duration-200 hover:bg-[#19322F]/5 rounded-full group">
              <span className="material-icons">notifications_none</span>
              <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-gradient-to-r from-red-500 to-rose-500 rounded-full ring-2 ring-white animate-pulse" />
              <span className="absolute inset-0 rounded-full bg-[#006655]/5 scale-0 group-hover:scale-100 transition-transform duration-300" />
            </button>
            
            {/* Divider & User Menu */}
            <div className="hidden sm:block w-px h-6 bg-[#19322F]/10 mx-1" />
            <div className="relative">
              <UserMenu user={user} />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <div className="md:hidden border-t border-[#19322F]/5 bg-white/90 backdrop-blur-xl">
        <div className="flex justify-around items-center px-2 py-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`
                flex-1 py-2 text-xs font-medium text-center transition-all duration-200
                ${link.active 
                  ? 'text-[#006655]' 
                  : 'text-[#19322F]/60 hover:text-[#19322F]'
                }
              `}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}