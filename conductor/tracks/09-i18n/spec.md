# Specification: Internationalization (i18n) Framework

## Overview
LUXU ESTATE requires a high-performance i18n/l10n infrastructure that supports multiple languages without sacrificing SEO, Partial Prerendering (PPR), or cache efficiency.

## Key Requirements

### 1. Routing & Middleware
- **Architecture:** URL prefix mandatory for all locales except default (e.g., `/es/luxury-villas`, `/luxury-villas` for EN).
- **Implementation:** Use a `proxy.ts` pattern to abstract middleware logic. `middleware.ts` should only consume exports from `proxy.ts`.
- **Exclusions:** Static assets (`.png`, `.svg`, `_next/static`) must be excluded from middleware interception.

### 2. Performance (PPR & Streaming)
- **Strategy:** Asynchronous JSON dictionary loading.
- **Rules:** Use `setRequestLocale` in Server Components. Avoid Client Providers for dictionary injection.
- **Streaming:** Ensure all client-side interactions with parametric mutations are wrapped in `<Suspense>`.

### 3. User Interface
- **Component:** Sophisticated Language Selector using `shadcn/ui`.
- **Constraint:** Avoid "Portals" for the selector; use absolute positioning with native collision handling.
- **Aesthetics:** Follow "Quiet Luxury" style (backdrop-blur, elegant spacing).

### 4. Message Management & Typing
- **Constraint:** No hardcoded HTML in JSON dictionaries.
- **Formatting:** Use structured interpolation (e.g., `t.rich` format).
- **Type Safety:** Immutable TypeScript interfaces for message keys to prevent build-time errors.

## Acceptance Criteria
- [ ] `proxy.ts` implemented and validated.
- [ ] SEO-friendly URL structure with language prefixes.
- [ ] PPR preserved across all main pages.
- [ ] Language Selector integrated and following design guidelines.
- [ ] Zero build warnings related to i18n during `npm run build`.
