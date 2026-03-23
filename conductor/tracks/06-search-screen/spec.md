# Track 06: Search Engine & Home Filters - Specification

## Goal
Implement a dynamic, URL-driven search engine and results grid for the Home Screen that maintains high performance and "Quiet Luxury" aesthetics.

## Requirements
- **State Management & UI Flow:**
    - Define and implement 4 visual states: `idle`, `searching`, `empty`, and `results`.
    - URL persistence for search queries (`?q=...&category=...`).
    - Trigger search updates via "ENTER" key or category tab changes only.
    - Implement elegant CSS-based transitions (opacity, scale) for hiding/showing `FeaturedCollections`.
- **Performance & PPR (Next.js 16):**
    - **Prohibited:** Directly accessing `searchParams` in the structural `page.tsx` (to avoid breaking PPR).
    - Recluse parameter logic and deep fetching inside a `<SearchResultsGrid />` component.
    - Encapsulate `<SearchResultsGrid />` with `<Suspense>` and a 3x3 fixed layout skeleton.
- **Data & Caching (Supabase):**
    - Use case-insensitive matching (`ilike` or Full Text Search) for `title` and `location`.
    - Inject `'use cache';` with a hierarchical `cacheTag` derived from the explicit query string.
    - Configure `cacheLife` for optimal response times.
- **Aesthetic Integrity:**
    - Strict adherence to Tailwind semantic colors (`text-nordic`, `bg-clear-day`).
    - High contrast ratio compliance (4.5:1).
    - Sophisticated fallback for the `empty` state with clear call-to-actions.

## Success Criteria
- Distinct visual states (idle, searching, results, empty) successfully implemented.
- URL parameters correctly govern the UI state within Suspense isolation.
- Integrated `cacheTag` and `ilike` queries without "ghost" corruptions.
- Fluid, flicker-free transitions between featured content and search results.
