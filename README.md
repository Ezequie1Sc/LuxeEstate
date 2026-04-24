# LUXE Estate 🏰

High-performance, responsive real estate platform built with **Next.js 16** and **React 19**, leveraging modern architectural patterns and a premium "Quiet Luxury" design aesthetic.

**[🔗 Live Demo](https://javerage-luxe-estate.vercel.app)**

## 🌟 Overview

Luxe Estate is a premium platform for real estate agencies, offering an immersive browsing experience for high-end properties. It combines cutting-edge web technologies with a sophisticated UI to serve both home seekers and agency administrators. s

> [!IMPORTANT]
> This project follows the **Feature Driven Development (FDD)** methodology and adheres to strict design guidelines for visual consistency.

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack)
- **Library:** [React 19](https://react.dev/)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) & [shadcn/ui](https://ui.shadcn.com/)
- **Backend:** [Supabase](https://supabase.com/) (Auth, Database, Storage)
- **i18n:** [next-intl](https://next-intl-docs.vercel.app/) (EN, ES, FR)
- **Maps:** [React Leaflet](https://react-leaflet.js.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)

## ✨ Key Features

### 🔍 Discovery & Search
- **Sanctuary Search:** High-impact hero section with primary search by location.
- **Advanced Filtering:** Precise property hunting by price range, room counts, and luxury amenities.
- **Curated Collections:** Highlighting exclusive, high-value properties.

### 👤 User Experience
- **Social Auth:** Seamless login via **Google** and **GitHub**.
- **Personal Dashboard:** Manage saved properties, scheduled visits, and account preferences.
- **Multilingual:** Full support for English, Spanish, and French.

### 🛡 Administrative Portal
- **Property Management:** Full CRUD operations with rich text descriptions and drag-and-drop media galleries.
- **Admin Directory:** Member access control, role management, and performance tracking.
- **Real-time Analytics:** Tracking listing performance and customer inquiries.

## 🚀 Getting Started

### Prerequisites
- Node.js 20+ 
- Supabase account and project

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/luxe-estate.git
   cd luxe-estate
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure environment variables:
   Copy `.env.template` to `.env` and fill in your Supabase credentials.

4. Run the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) to see the result.

## 📐 Architecture

The project uses a **Feature First** organization:
- `app/`: Routing and layouts.
- `components/`: Reusable UI components (atomic design).
- `lib/`: Domain logic, shared constants, and type definitions.
- `messages/`: i18n dictionary files.
- `supabase/`: Migrations and local database configuration.
- `utils/`: Core utilities and Supabase client factory.

---
© 2026 Luxe Estate Inc. Designed for modern agencies.
