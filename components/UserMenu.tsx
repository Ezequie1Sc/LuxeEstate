'use client'

import { createClient } from '@/utils/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function UserMenu({ user }: { user: any }) {
  const [isOpen, setIsOpen] = useState(false)
  const supabase = createClient()
  const router = useRouter()

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.refresh()
    setIsOpen(false)
  }

  if (!user) {
    return (
      <Link
        href="/login"
        className="px-5 py-2.5 bg-[#006655] text-white text-sm font-semibold rounded-lg hover:bg-[#004d40] transition-all shadow-md shadow-[#006655]/10 hover:shadow-lg active:scale-95"
      >
        Sign In
      </Link>
    )
  }

  const avatarUrl = user.user_metadata?.avatar_url || user.user_metadata?.picture
  const fullName = user.user_metadata?.full_name || user.email

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 p-1 rounded-full hover:bg-[#006655]/5 transition-all ring-2 ring-transparent hover:ring-[#006655]/20"
      >
        <div className="w-9 h-9 rounded-full bg-gray-200 overflow-hidden border border-[#19322F]/10">
          {avatarUrl ? (
            <Image
              src={avatarUrl}
              alt={fullName}
              width={36}
              height={36}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-[#006655] text-white text-sm font-bold">
              {fullName?.charAt(0).toUpperCase()}
            </div>
          )}
        </div>
      </button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          ></div>
          <div className="absolute right-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-[#19322F]/5 py-2 z-20 animate-in fade-in zoom-in duration-200 origin-top-right">
            <div className="px-4 py-3 border-b border-[#19322F]/5">
              <p className="text-sm font-bold text-[#19322F] truncate">{fullName}</p>
              <p className="text-xs text-[#19322F]/50 truncate">{user.email}</p>
            </div>
            
            <div className="py-1">
              <Link
                href="/profile"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#19322F]/70 hover:bg-[#006655]/5 hover:text-[#006655] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="material-icons text-[18px]">person_outline</span>
                Profile Settings
              </Link>
              <Link
                href="/saved"
                className="flex items-center gap-3 px-4 py-2.5 text-sm text-[#19322F]/70 hover:bg-[#006655]/5 hover:text-[#006655] transition-colors"
                onClick={() => setIsOpen(false)}
              >
                <span className="material-icons text-[18px]">favorite_border</span>
                Saved Homes
              </Link>
            </div>
            
            <div className="py-1 border-t border-[#19322F]/5">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-red-600 hover:bg-red-50 transition-colors"
              >
                <span className="material-icons text-[18px]">logout</span>
                Sign Out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  )
}
