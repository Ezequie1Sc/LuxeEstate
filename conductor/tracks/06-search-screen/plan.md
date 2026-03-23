# Track 06: Search Engine & Home Filters - Implementation Plan

## Phase 1: Planning & Architecture (architecting-solutions)
- [ ] Define the exact search parameter structure: `q`, `category`, `listing_type`, `offset`.
- [ ] Validate the interaction flow between the `HomeFilters` (Search Bar) and the `SearchResultsGrid`.
- [ ] Ensure that the `page.tsx` for the home screen remains as a "shell" for PPR.

## Phase 2: Refactor Home Screen for PPR
- [ ] Remove `searchParams` reading from `app/page.tsx` to maintain static shell.
- [ ] Create `components/SearchResultsGrid.tsx` to handle its own `searchParams` consumption.
- [ ] Wrap `SearchResultsGrid` in a `<Suspense>` boundary in `app/page.tsx`.
- [ ] Update `FeaturedCollections` to reactively fade out when a search is active using CSS classes.

## Phase 3: Implement Dynamic Fetching & Caching
- [ ] Develop `lib/data/search.ts` with `'use cache';` directive and `cacheTag` strategy.
- [ ] Implement Supabase `ilike` queries for `title` and `location`.
- [ ] Integrate transaction type and category filters into the primary search query.
- [ ] Configure `cacheLife` based on the dynamic nature of properties.

## Phase 4: Develop Visual States & Skeletons
- [ ] Implement the `idle` state (showing featured collections and standard grid).
- [ ] Implement the `searching` state with a 3x3 symmetrical skeleton of `PropertyCards`.
- [ ] Implement the `empty` state with a sophisticated fallback message and CTAs.
- [ ] Implement the `results` state (the core property grid).

## Phase 5: Testing & Validation
- [ ] Verify URL parameter persistence and reactive updates.
- [ ] Validate "ENTER" and tab-based triggering of searches.
- [ ] Ensure WCAG 4.5:1 contrast compliance in all states.
- [ ] Audit performance metrics and PPR status using Next.js devtools.
