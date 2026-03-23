# Track 05: Listing Type Filters (Sale/Rent) - Implementation Plan

## Phase 1: Database & Type Safety
- [ ] Verify `listing_type` column in the Supabase `properties` table.
- [ ] Update `lib/types.ts` to include the strict `ListingType` enum: `'sale' | 'rent'`.
- [ ] Ensure the Supabase client handles this type correctly in queries.

## Phase 2: Refactor Data Fetching Layer
- [ ] Update `lib/data/properties.ts` (or the `getNewInMarketProperties` function) to support the `listing_type` filter.
- [ ] Implement `'use cache';` logic with a `cacheTag` specific to the `listing_type`.
- [ ] Validate that fetching is always server-side and uses `.eq('listing_type', type)`.

## Phase 3: Develop UI Filter Component
- [ ] Create a `ListingTypeToggle` component using `shadcn/ui` Tabs or ToggleGroup.
- [ ] Apply "Quiet Luxury" styling (Nordic/Mosque colors, SF Pro font).
- [ ] Implement URL-driven state management for the toggle (syncing with `listing_type` search param).

## Phase 4: Implement Suspense & Skeletons
- [ ] Wrap the `New in Market` property grid in `<Suspense>`.
- [ ] Create high-fidelity Skeleton loaders for `PropertyCards`.
- [ ] Ensure that clicking the filter only triggers a granular re-render of the grid section.

## Phase 5: Refinement & Validation
- [ ] Implement and style the "Empty State" component for categories with no active listings.
- [ ] Perform cross-browser testing of the filter transitions.
- [ ] Verify that PPR is still active and optimized for this section.
