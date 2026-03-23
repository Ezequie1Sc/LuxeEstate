# Track 08: Property Details Screen - Plan

## Phase 1: Database & Data Preparation
- [ ] Create a Supabase migration to add `slug`, `lat`, and `lng` columns, and replace `image_url` with an `images` JSONB array column in the `properties` table.
- [ ] Generate 10 high-quality mock properties with realistic descriptions, coordinates, and multiple image URLs.
- [ ] Update `next.config.ts` to whitelist image source domains.

## Phase 2: Page Implementation & Routing
- [ ] Create the dynamic route `app/property/[slug]/page.tsx`.
- [ ] Fetch property data using the slug on the server.
- [ ] Implement the layout and structural components following the "Quiet Luxury" aesthetic (pixel-perfect symmetry).

## Phase 3: Interactive Components
- [ ] Implement a premium image gallery component (Carousel).
- [ ] Create a dynamically imported `PropertyDetailsMap` component using Leaflet to display the property's location.
- [ ] Ensure all interactive components are wrapped in `<Suspense>` with high-fidelity skeletons.

## Phase 4: Performance & Caching
- [ ] Configure PPR and streaming boundaries for optimal LCP.
- [ ] Implement `'use cache';` for property data fetching with revalidation strategies.

## Phase 5: Validation
- [ ] Verify the UI matches the design mocks perfectly (Pixel-Perfect).
- [ ] Test map hydration and image gallery responsiveness.
- [ ] Audit performance metrics and ensure TTFB and LCP are within acceptable limits for a luxury platform.
