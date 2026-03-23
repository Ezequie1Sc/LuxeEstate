# Product Guide: LUXU Real Estate

## 1. Vision & Goals
LUXU Real Estate is a premium platform for a real estate agency offering properties for rent and sale. The platform aims to deliver a highly visual, premium browsing experience (Premium UX/UI) that caters to a broad market of premium buyers and standard home seekers, focusing primarily on luxury villas and estates.

## 2. Target Audience
- **Public Users:** A broad market encompassing both standard home seekers and buyers interested in high-end properties.
- **Internal Users:** Agency administrators and employees who require robust management tools.

## 3. Core Features
### Public Portal
- **Property Discovery:** An accessible, visually appealing interface for anyone to browse available properties for rent or sale.
- **Premium UX/UI:** An intuitive, high-quality user experience designed to showcase luxury real estate beautifully.

### Administrative Portal
- **Secure Access:** Restricted access via Google or GitHub SSO authentication.
- **Property Management:** Complete CRUD operations for property listings, including image uploads to a Supabase storage bucket.
- **User Management:** Tools to manage agent access and permissions.
- **Analytics & Leads:** Tracking and insights for property views and customer inquiries.

## 4. Technical Integration Notes
- **Database:** Supabase PostgreSQL for structured data (properties, users).
- **Storage:** Supabase Storage Buckets for managing high-quality property images.
- **Authentication:** OAuth integration (Google, GitHub) for the admin portal.