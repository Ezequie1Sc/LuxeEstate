# Track 04: Supabase Integration & Pagination - Implementation Plan

## Phase 1: Infrastructure & Security
- [ ] Verify Supabase environment variables in `.env.local` (ensure SSL and connection pooling).
- [ ] Confirm RLS policies on `properties` table for public `SELECT` access.
- [ ] Audit `lib/types.ts` to ensure strict mapping between PostgreSQL schema and frontend DTOs.

## Phase 2: Refactor Data Fetching (Next.js 16 Patterns)
- [ ] Implement a specialized data fetching layer in `lib/data/properties.ts` using `'use cache';`.
- [ ] Define granular `cacheTag` strategy based on `offset` and `filters`.
- [ ] Set `cacheLife` to balance performance and data freshness.
- [ ] Ensure "Safe-Data-Fetching" by keeping sensitive Supabase logic on the server.

## Phase 3: Implement 3x3 Grid & Pagination Logic
- [ ] Refactor `app/page.tsx` to move searchParams reading into a child component wrapped in `<Suspense>`.
- [ ] Standardize the property grid to exactly 9 items per page (3x3 layout).
- [ ] Implement `limit`/`offset` logic instead of the current `limit`-only approach.
- [ ] Update `components/Pagination.tsx` to support the 9-item page size and navigate via URL parameters.

## Phase 4: UI/UX & Design Alignment
- [ ] Ensure the "Featured Collections" section always shows exactly two properties.
- [ ] Maintain "Quiet Luxury" aesthetics in the pagination controls (minimalist, SF Pro Display).
- [ ] Verify that navigating pages provides an "instant" feel through PPR and Suspense.

## Phase 5: Validation
- [ ] Test pagination navigation with browser back/forward buttons.
- [ ] Verify that the root layout does not re-render or flicker during pagination.
- [ ] Confirm RLS security by attempting unauthorized writes via the Supabase client.
