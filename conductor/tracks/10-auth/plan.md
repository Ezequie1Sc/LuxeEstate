# Implementation Plan: Authentication (Google & GitHub) Integration

## Phase 1: Supabase & OAuth Configuration
- [ ] Set up Google and GitHub OAuth applications in their respective developer consoles.
- [ ] Configure Supabase Authentication settings with client IDs and secrets.
- [ ] Configure `next.config.ts` to allow remote images from `lh3.googleusercontent.com` and `avatars.githubusercontent.com`.

## Phase 2: UI Implementation
- [ ] Create the Login Screen (`app/login/page.tsx`) following the design resources.
- [ ] Implement the auth buttons (Google/GitHub) with the "Quiet Luxury" style.
- [ ] Ensure the app icon is correctly imported and displayed.

## Phase 3: Auth Logic & Normalization
- [ ] Implement `signInWithGoogle` and `signInWithGitHub` actions.
- [ ] Use `prompt: 'select_account'` for both providers in the OAuth options.
- [ ] Implement user metadata normalization to handle differences between Google and GitHub field names.
- [ ] Ensure the auth validation bypasses cache for fresh results.

## Phase 4: Integration & Session
- [ ] Update `Navbar.tsx` and `UserMenu.tsx` to display the user's avatar when authenticated.
- [ ] Implement the "Sign Out" functionality in the `UserMenu`.
- [ ] Create a `UserContext` or use Supabase's `auth.onAuthStateChange` to manage session state globally.

## Phase 5: Validation
- [ ] Test login/logout flows for both providers.
- [ ] Verify profile data (name, email, avatar) is correctly saved/displayed.
- [ ] Ensure account selection prompt appears correctly after logout.
- [ ] Validate UI responsiveness and adherence to design guidelines.
