 GET /property/the-glass-pavilion 500 in 16ms (compile: 8ms, render: 8ms)
 GET /?limit=16 200 in 914ms (compile: 12ms, render: 902ms)
 GET /?limit=12 200 in 909ms (compile: 23ms, render: 886ms)
 GET /?limit=8 200 in 447ms (compile: 3ms, render: 443ms)
 GET / 200 in 368ms (compile: 6ms, render: 361ms)
 GET / 200 in 433ms (compile: 4ms, render: 429ms)
 GET / 200 in 451ms (compile: 11ms, render: 440ms)
✓ Compiled in 231ms
 GET / 200 in 374ms (compile: 15ms, render: 359ms)
⨯ ReferenceError: PropertyMap is not defined
    at PropertyDetailsPage (app/property/[slug]/page.tsx:122:19)
  120 |               {/* Map Component */}
  121 |               <div className="bg-white p-2 rounded-xl shadow-sm border border-mosque/5 h-64 overflow-hidden">
> 122 |                  <PropertyMap location={property.location} />
      |                   ^
  123 |               </div>
  124 |             </div>
  125 |           </div> {
  digest: '3132091843'
}
 GET /property/the-glass-pavilion 200 in 926ms (compile: 632ms, render: 294ms)
