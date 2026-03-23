# Specification: Authentication (Google & GitHub) Integration

## Overview
Implement a high-end social authentication system for LUXU ESTATE using Supabase, supporting Google and GitHub providers with normalized user profiles and fresh validation.

## Key Requirements

### 1. Interface & Design
- **Visuals:** Follow the design provided in `@/prd/features/resources/social_login_and_registration/screen.png`.
- **Codebase:** Refine and implement from `@/prd/features/resources/social_login_and_registration/code.html`.
- **Iconography:** Use the Navbar icon from the `HomeScreen` in the login screen.
- **Aesthetics:** Maintain "Quiet Luxury" standards (simplicity, elegance, refined UI).

### 2. Authentication Flow (OAuth)
- **Providers:** Google SignIn and GitHub SignIn via Supabase.
- **Normalization:** Mandatory verification and normalization of user metadata (name, email, avatar URL) since providers use different field names.
- **Validation:** Always perform fresh validation; **no caching allowed** during the auth process.
- **Re-authentication:** Configure OAuth providers to always show the account selection prompt (prompt: select_account) to ensure easy account switching.

### 3. Session Management & Navbar
- **Sign Out:** Feature a clear "Sign Out" option in the Navbar for authenticated users.
- **Profile:** Display the user's avatar from Google/GitHub in the Navbar.
- **Image Security:** Update `next.config.ts` (remotePatterns) to authorize GitHub and Google image domains.

## Acceptance Criteria
- [ ] Login Screen implemented and pixel-perfect.
- [ ] Successful SignIn/SignUp flow for both Google and GitHub.
- [ ] User profile data normalized across providers.
- [ ] Avatar displayed correctly in the Navbar with authorized domains.
- [ ] Sign Out cleans session and triggers account selection on next login.
