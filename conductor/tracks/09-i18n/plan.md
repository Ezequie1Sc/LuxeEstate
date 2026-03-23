# Implementation Plan: Internationalization (i18n) Framework

## Phase 1: Infrastructure & Middleware
- [ ] Research `next-intl` configuration for Next.js 16 and PPR support.
- [ ] Create `proxy.ts` to handle locale negotiation and URL prefixing.
- [ ] Update `middleware.ts` to consume exports from `proxy.ts` and set proper matchers.
- [ ] Define supported locales: `en`, `es`, `fr`.

## Phase 2: Message Management
- [ ] Organize asynchronous JSON dictionaries in `messages/`.
- [ ] Implement `getRequestConfig` in `i18n/request.ts` to load dictionaries dynamically.
- [ ] Set up `setRequestLocale` in Server Components at layout and page levels.
- [ ] Configure `i18n/navigation.ts` for shared navigation utilities (Link, useRouter, etc.).

## Phase 3: UI & Components
- [ ] Create/Update `LanguageSelector.tsx` using `shadcn/ui` components.
- [ ] Integrate the selector in the `Navbar`.
- [ ] Ensure the selector uses absolute positioning and adheres to "Quiet Luxury" design.
- [ ] Implement `t.rich` formatting for complex translations.

## Phase 4: Validation & SEO
- [ ] Verify URL structure for all locales.
- [ ] Test PPR preservation by checking if pages stream correctly.
- [ ] Run `npm run build` and ensure no i18n-related warnings.
- [ ] Validate SEO tags and hreflang attributes.
