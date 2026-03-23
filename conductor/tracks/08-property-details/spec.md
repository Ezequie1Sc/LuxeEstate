# Track 08: Property Details Screen - Specification

## Goal
Implement a pixel-perfect, high-performance property details screen using Next.js 16 (App Router) and Supabase. The screen must embody the "Quiet Luxury" aesthetic and leverage Partial Prerendering (PPR) for instant initial paint.

## Requirements

### 1. Data Layer & Supabase
- **Table `properties` Updates:**
  - Add a unique `slug` column (Text) for SEO-friendly routing.
  - Replace the `image_url` column with an `images` JSONB array column for multiple high-resolution images.
  - Add numerical `lat` and `lng` columns for precise map positioning.
- **Mock Data:**
  - Generate 10 detailed property instances.
  - Ensure image URLs are whitelisted in `next.config.ts` (using `remotePatterns`).

### 2. Map Integration
- **Hydration:** Use dynamic imports for Leaflet components to avoid SSR/window-related errors.
  - Example: `const Map = dynamic(() => import('@/components/PropertyDetailsMap'), { ssr: false })`.
- **Functionality:** Display property location based on `lat` and `lng`.

### 3. Interface & UX (Quiet Luxury)
- **Pixel-Perfect Implementation:** Match `@/prd/resources/property_details_screen/screen.png` using `@/prd/resources/property_details_screen/code.html` as a reference.
- **Symmetry & Typography:** Strict vertical centering and invariant heights for galleries and text elements.
- **Design:** Follow the Nordic (#19322F), Mosque (#006655), Clear Day (#EEF6F6), and Hint of Green (#D9ECC8) palette defined in `GEMINI.md`.

### 4. Performance & Caching
- **Streaming & PPR:** Use `<Suspense>` boundaries around heavy components (Carousel, Map).
- **Skeletons:** Implement high-fidelity Skeletons that match the geometry of the components.
- **Caching:** Implement `'use cache';` with modular parameterization (by id/slug).

## Source Files
- `prd/prompts/08-property-detail-screen.md`
- `prd/resources/property_details_screen/code.html`
- `prd/resources/property_details_screen/screen.png`
- `GEMINI.md`

## Output Format
- `app/property/[slug]/page.tsx` (RSC)
- `components/PropertyDetailsMap.tsx` (Client Component)
- `components/ui/skeleton.tsx` (Shadcn UI)
- Supabase migrations in `supabase/migrations/`
