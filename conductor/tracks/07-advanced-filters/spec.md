# Track 07: Advanced Search Filters (Modal) - Specification

## Goal
Implement a visually stable, high-performance Advanced Filters Modal using Next.js 16 and Supabase JSONB querying.

## Requirements
- **UI Geometry & Aesthetics:**
    - Modal structure: Single vertical column, centered, max-width `500px`.
    - "Perfect Symmetry": Fixed heights/widths for buttons and inputs.
    - Follow "Quiet Luxury" palette: `text-nordic`, `bg-clear-day`, `border-border`.
    - Full compliance with WCAG 4.5:1 contrast in Light/Dark modes.
- **Database & Query Performance (Supabase):**
    - **Refactor:** Migrate the `amenities` column from `text[]` to `jsonb`.
    - Install specific GIN indices for hyper-fast JSONB queries.
    - Delegate filter logic to the server side (`.containedBy` or JSONB operators). **Prohibited:** Client-side `.filter()`.
- **Navigation & State:**
    - Maintain local intermediate state in the modal.
    - Mutate the URL (`?amenities=...&price_min=...`) without triggering a full page scroll/reset.
    - Fade out `FeaturedCollections` using CSS `opacity/transform` during active filtering.

## Success Criteria
- Stable UI structure (max 500px) that adheres to "Quiet Luxury" aesthetics.
- Verified database migration to JSONB with functioning GIN indices.
- Efficient server-side data fetching with complex filter conditions.
- Smooth URL-based state updates and flicker-free transitions between view states.
