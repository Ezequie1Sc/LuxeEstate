# Track 04: Supabase Integration & Pagination - Specification

## Goal
Evolve LUXU ESTATE to a dynamic Supabase backend with advanced pagination and secure, high-performance data fetching.

## Requirements
- **Infrastructure:**
    - Configure Supabase environment variables in `.env.local`.
    - Implement Row Level Security (RLS) on the `properties` table (Public SELECT access only).
- **Data Migration:**
    - Automate migration of `mock-properties.json` to Supabase.
    - Prevent duplicates and use SSL for the migration script.
    - Ensure strict TypeScript DTOs between PostgreSQL and React.
- **Business Logic:**
    - Select exactly two properties as "Featured Collections".
    - Fixed grid of 9 properties per page (3x3) using `limit`/`offset`.
- **Performance & Cache:**
    - Wrap `searchParams` reading in `<Suspense>` for independent hydration.
    - Use `'use cache';` with granular `cacheTag` based on the `offset`.
    - Set `cacheLife` to avoid stale data while maintaining speed.
- **Architecture:**
    - Use React Server Components (RSC) for direct fetching.
    - Enable Partial Prerendering (PPR) as per project standards.
    - Implement "Safe-Data-Fetching" to protect backend credentials.

## Success Criteria
- Successful data migration verified on Supabase dashboard.
- Zero SSR failures during pagination navigation (instant response).
- Validated RLS (public UPDATE/DELETE attempts must fail).
- Root layout remains unaffected by pagination `searchParams`.
