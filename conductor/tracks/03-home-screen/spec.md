# Track 03: Home Screen (Discover) - Specification

## Goal
Implement a visually stunning, high-performance Home Screen for LUXU ESTATE following "Quiet Luxury" standards and Next.js 16 / React 19 architecture.

## Requirements
- **Design:** Exact replication of `prd/features/resources/home_discover_screen/screen.png`. Refine base from `code.html`.
- **UI Framework:** Initialize and use `shadcn/ui` with Tailwind CSS 4. Adhere to "Quiet Luxury" palette (Nordic, Mosque, Clear Day, Hint of Green).
- **Data:** Local JSON file with 25 properties using high-quality Unsplash URLs.
- **Media Optimization:** Configure `remotePatterns` in `next.config.ts` for `images.unsplash.com`.
- **Architecture:** 
    - Enable PPR using `cacheComponents: true` in `next.config.ts`.
    - Implement `'use cache';` directive in the data consumption layer.
    - Component functional approach using React Server Components by default.
- **Typography:** Mandatory use of SF Pro Display.

## Technical Details
- **Next.js Version:** 16 (App Router).
- **React Version:** 19.
- **Styling:** Tailwind CSS 4.
- **Components:** shadcn/ui.

## Deliverables
- Planned and verified JSON file with 25 mock properties.
- Validated library list through `context7`.
- `next.config.ts` updated with PPR and `remotePatterns`.
- Completed Home Screen UI following "Quiet Luxury" theme.
