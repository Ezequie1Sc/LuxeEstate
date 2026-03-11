'use client'

import { useRouter, useSearchParams } from 'next/navigation'

interface PaginationProps {
  currentPage: number
  totalPages: number
  totalResults: number
  pageSize: number
}

export default function Pagination({ currentPage, totalPages, totalResults, pageSize }: PaginationProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  const handlePageChange = (page: number) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set('page', page.toString())
    router.push(`/admin/properties?${params.toString()}`)
  }

  const start = (currentPage - 1) * pageSize + 1
  const end = Math.min(currentPage * pageSize, totalResults)

  return (
    <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
      <div className="text-sm text-gray-500">
        Showing <span className="font-medium text-[#19322F]">{start}</span> to <span className="font-medium text-[#19322F]">{end}</span> of <span className="font-medium text-[#19322F]">{totalResults}</span> results
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage <= 1}
          className="px-3 py-1 text-sm border border-gray-200 rounded-md text-gray-600 hover:bg-white disabled:opacity-50 transition-colors"
        >
          Previous
        </button>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage >= totalPages}
          className="px-3 py-1 text-sm border border-gray-200 rounded-md text-gray-600 hover:bg-white disabled:opacity-50 transition-colors"
        >
          Next
        </button>
      </div>
    </div>
  )
}
