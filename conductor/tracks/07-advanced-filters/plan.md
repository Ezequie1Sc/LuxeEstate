# Track 07: Advanced Search Filters (Modal) - Implementation Plan

## Phase 1: Database Migration (JSONB & GIN Indices)
- [ ] Create a migration to change the `amenities` column from `text[]` to `jsonb`.
- [ ] Add GIN indices to the `amenities` column for optimized querying.
- [ ] Update seed data and existing records to populate the `amenities` JSONB structure.

## Phase 2: Refactor UI Components
- [ ] Implement the `FilterModal` component using `shadcn/ui` Dialog/Modal.
- [ ] Enforce a single-column layout (max-width `500px`) for visual stability.
- [ ] Apply "Quiet Luxury" styling and WCAG 4.5:1 contrast compliance.
- [ ] Add interaction elements: Price Range Sliders, Amenities Toggles (Pool, Gym, etc.), Bed/Bath counts.

## Phase 3: Implement Advanced Filter Logic
- [ ] Update `lib/data/search.ts` to include advanced filter parameters in the Supabase query.
- [ ] Leverage JSONB operators (like `@>`) for querying the `amenities` column server-side.
- [ ] Synchronize `FilterModal` state with URL Search Params (`router.push`).

## Phase 4: Refine UI Transitions
- [ ] Configure `router.push` to update the URL silently (preventing page scroll jumps).
- [ ] Ensure that `FeaturedCollections` on the Home Screen fades out smoothly when filters are active.
- [ ] Validate that the "Searching" state (skeletons) is correctly triggered.

## Phase 5: Testing & Verification
- [ ] Test the filtering logic with multiple simultaneous criteria (e.g., Price > $1M + Pool + 4 Beds).
- [ ] Verify that the database GIN indices are correctly utilized for performance.
- [ ] Perform UI stability checks (no layout shifts when opening/closing the modal).
