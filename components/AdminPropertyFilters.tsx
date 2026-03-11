'use client'

import { useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { useTranslations } from 'next-intl'
import FilterModal from './FilterModal'

export default function AdminPropertyFilters() {
  const t = useTranslations('Admin.properties')
  const [isFilterModalOpen, setIsFilterModalOpen] = useState(false)
  const router = useRouter()
  const searchParams = useSearchParams()
  const [searchQuery, setSearchQuery] = useState(searchParams.get('q') || '')

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams(searchParams.toString())
    if (searchQuery) {
      params.set('q', searchQuery)
    } else {
      params.delete('q')
    }
    params.delete('page')
    router.push(`/admin/properties?${params.toString()}`)
  }

  return (
    <>
      <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
        <form onSubmit={handleSearch} className="relative group w-full md:w-80">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <span className="material-icons text-[#19322F]/40 group-focus-within:text-[#006655] text-xl">search</span>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="block w-full pl-10 pr-3 py-2.5 border-none rounded-lg bg-white text-[#19322F] shadow-sm placeholder-[#19322F]/30 focus:ring-2 focus:ring-[#006655] focus:bg-white transition-all text-sm"
            placeholder="Search by title or location..."
          />
        </form>
        <div className="flex gap-2">
          <button
            onClick={() => setIsFilterModalOpen(true)}
            className="bg-white border border-gray-200 text-[#19322F] hover:bg-gray-50 px-4 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-sm inline-flex items-center gap-2"
          >
            <span className="material-icons text-base">filter_list</span>
            {t('filter')}
          </button>
          <button 
            onClick={() => router.push('/admin/properties/add')}
            className="bg-[#006655] hover:bg-[#005544] text-white px-5 py-2.5 rounded-lg text-sm font-medium shadow-md shadow-[#006655]/20 transition-all transform hover:-translate-y-0.5 inline-flex items-center gap-2 whitespace-nowrap"
          >
            <span className="material-icons text-base">add</span>
            {t('add_new')}
          </button>
        </div>
      </div>

      <FilterModal
        isOpen={isFilterModalOpen}
        onClose={() => setIsFilterModalOpen(false)}
      />
    </>
  )
}
