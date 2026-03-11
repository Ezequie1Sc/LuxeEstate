import { createClient } from '@/utils/supabase/server'
import { redirect } from 'next/navigation'
import AdminNavbar from '@/components/AdminNavbar'
import PropertyForm from '@/components/PropertyForm'

export default async function AddPropertyPage() {
  const supabase = await createClient()

  const { data: { user }, error: authError } = await supabase.auth.getUser()
  if (authError || !user) redirect('/login')

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .single()

  if (profile?.role !== 'Administrador') redirect('/')

  return (
    <div className="bg-[#EEF6F6] text-[#19322F] font-display min-h-screen flex flex-col antialiased">
      <AdminNavbar user={user} activeTab="listings" />

      <main className="flex-grow max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <header className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
          <div>
            <nav aria-label="Breadcrumb" className="flex mb-4">
              <ol className="flex items-center space-x-2 text-sm text-gray-500 font-medium">
                <li><a className="hover:text-[#006655] transition-colors" href="/admin/properties">Properties</a></li>
                <li><span className="material-icons text-xs text-gray-400">chevron_right</span></li>
                <li aria-current="page" className="text-[#19322F]">Add New</li>
              </ol>
            </nav>
            <h1 className="text-3xl md:text-4xl font-bold text-[#19322F] tracking-tight mb-2">Add New Property</h1>
            <p className="text-base text-gray-500 max-w-2xl font-normal">
              Fill in the details below to create a new listing. Fields marked with * are mandatory.
            </p>
          </div>
        </header>

        <PropertyForm />
      </main>

      <footer className="mt-auto border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm text-gray-400">© 2026 Luxe Estate Property Management. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
