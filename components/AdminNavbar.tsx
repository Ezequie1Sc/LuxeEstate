import Link from 'next/link'
import Image from 'next/image'
import UserMenu from './UserMenu'

interface AdminNavbarProps {
  user: any
  activeTab: 'dashboard' | 'listings' | 'users' | 'inquiries'
}

export default function AdminNavbar({ user, activeTab }: AdminNavbarProps) {
  const navLinks = [
    { id: 'dashboard', label: 'Dashboard', href: '/admin' },
    { id: 'listings', label: 'Listings', href: '/admin/properties' },
    { id: 'users', label: 'Users', href: '/admin/users' },
    { id: 'inquiries', label: 'Inquiries', href: '/admin/inquiries' },
  ]

  return (
    <nav className="bg-white border-b border-[#19322F]/5 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16">
        <div className="flex items-center gap-12">
          <Link href="/" className="flex-shrink-0 flex items-center gap-2">
            <span className="material-symbols-outlined text-[#006655] text-2xl">apartment</span>
            <span className="font-bold text-lg text-[#19322F] tracking-tight">LuxeEstate</span>
          </Link>
          <div className="hidden md:flex space-x-8 h-16">
            {navLinks.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium transition-colors ${
                  activeTab === link.id
                    ? 'border-[#006655] text-[#006655]'
                    : 'border-transparent text-[#19322F]/60 hover:text-[#006655] hover:border-[#006655]/30'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-5">
          <button className="text-[#19322F]/60 hover:text-[#006655] transition-colors">
            <span className="material-symbols-outlined text-xl">search</span>
          </button>
          <button className="text-[#19322F]/60 hover:text-[#006655] transition-colors relative">
            <span className="material-symbols-outlined text-xl">notifications</span>
            <span className="absolute top-0 right-0 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-white"></span>
          </button>
          <div className="pl-2 border-l border-[#19322F]/10 ml-2">
            <UserMenu user={user} />
          </div>
        </div>
      </div>
    </nav>
  )
}
