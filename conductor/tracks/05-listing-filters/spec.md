# Track 05: Listing Type Filters (Sale/Rent) - Specification

## Goal
Implement a premium, high-performance "Sale / Rent" filtering system for the "New in Market" section, ensuring instant interaction and optimal server utilization.

## Requirements
- **UI/UX Design:**
    - Implement a minimalist *Toggle Group* or *Tabs* component (e.g., "For Sale" / "For Rent") integrated into the section header.
    - Provide immediate visual feedback using semantic colors: `bg-primary`, `text-primary-foreground` for active states.
    - Maintain WCAG 4.5:1 contrast for inactive states.
    - Design a sophisticated *Empty State* for categories with no results.
- **Data Layer (Supabase):**
    - Consume the `listing_type` column using a strict TypeScript Enum: `'sale' | 'rent'`.
    - Delegate all filtering to Supabase (`.eq('listing_type', type)`). **In-memory filtering is strictly prohibited.**
- **Next.js 16 Performance:**
    - Support filtering via URL Search Params (`?listing_type=rent`).
    - Use strict isolation for `searchParams` reading within a child component wrapped in `<Suspense>`.
    - Apply `'use cache';` with granular `cacheTag` parameterized by transaction type (`sale` or `rent`).
    - Implement strictly symmetrical Skeleton loaders for `PropertyCards` to manage loading latency.

## Success Criteria
- Responsive and stylized modern UI component (Tabs or Toggle).
- Data fetching function cleanly connected with Supabase restrictive clauses.
- URL-driven state management with hermetic isolation under Suspense.
- Verified pre-rendered build compatibility (no breaking changes to PPR).
