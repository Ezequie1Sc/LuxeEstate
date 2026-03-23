# Product Features Description: LUXE Real Estate

This document provides a detailed breakdown of the functionalities implemented in the **LUXE Real Estate** platform, derived from the design resources and technical base.

---

## 1. Authentication & User Identity

### 1.1 Social Login and Registration
- **Providers**: Seamless integration with **Google** and **GitHub** for OAuth-based authentication.
- **Visuals**: A clean, minimalist login interface with a blur-background aesthetic, prioritizing ease of access.
- **Call to Action**: Direct "Continue with..." buttons and a clear path for new users to sign up.

### 1.2 User Profile Management
- **Dashboard Overview**: A central hub showing user activity stats (Number of Saved Properties, Scheduled Visits, and Properties Sold/Bought).
- **Tabbed Interface**:
    - **Saved Properties**: Grid view of all favorited listings.
    - **Scheduled Visits**: Timeline or list of upcoming property tours with agent information and "Get Directions" actions.
    - **Preferences & Settings**: Management of account details (email) and notification toggles (e.g., New Property Alerts).
- **Quick Profile**: Avatar-based quick menu in the Navbar for fast navigation.

---

## 2. Public Property Discovery

### 2.1 Home Screen (Discover)
- **Sanctuary Search**: High-impact hero section with a primary search bar for city, neighborhood, or address.
- **Category Navigation**: Fast filtering chips for property types (All, House, Apartment, Villa, Penthouse).
- **Curated Collections**: "Featured Collections" section showcasing exclusive, high-value properties.
- **Market Activity**: "New in Market" grid highlighting the latest listings with real-time status (FOR SALE / FOR RENT).

### 2.2 Advanced Search & Filtering
- **Modal-Based Filters**: A comprehensive overlay for precise property hunting.
- **Filter Criteria**:
    - **Location**: Specificity by city or neighborhood.
    - **Price Range**: Interactive dual-handle slider for minimum and maximum budget.
    - **Property Type**: Dropdown selection for architectural styles.
    - **Room Counts**: Incremental counter controls for Bedrooms and Bathrooms.
    - **Amenities & Features**: Toggle chips for luxury extras (Swimming Pool, Gym, Parking, AC, Wifi, Patio).

### 2.3 Favorites & Saved Homes
- **Persistence**: Ability to save properties across sessions.
- **Management**: A dedicated view to sort (by Date Added, Price, etc.) and view saved listings in grid or list formats.
- **Direct Interaction**: "Book Visit" triggers directly from the favorites card.

---

## 3. Property Interaction & Booking

### 3.1 Property Details Screen
- **Visual Gallery**: High-resolution image carousel with a "View All Photos" grid mode.
- **Key Information**: Prominent display of Price, Location, and Agent Profile.
- **Feature Matrix**: Quick-glance icons for Square Meters, Bedrooms, Bathrooms, and Garage capacity.
- **Amenities List**: Verified list of property highlights.
- **Mortgage Calculator**: Embedded tool for estimating monthly payments based on a 20% down payment.
- **Integrated Map**: Mini-map preview showing the exact property location.

### 3.2 Schedule a Visit (Booking System)
- **Interactive Calendar**: Visual date picker for selecting tour dates.
- **Time Slot Selection**: Grid of available morning and afternoon slots.
- **Agent Communication**: Optional text area for users to leave specific questions or requests for the hosting agent.
- **Verification**: Clear "Confirm Visit" workflow with property summary.

---

## 4. Administrative & Agent Tools

### 4.1 Property Management Dashboard
- **Portfolio Overview**: High-level stats showing Total Listings, Active Properties, and Pending Sales.
- **Listing Management Table**: 
    - Detailed list view with thumbnails, price, and status (Active, Pending, Sold).
    - Quick actions for **Edit** and **Delete**.
- **Real-time Status**: Color-coded badges for listing visibility and transaction stage.

### 4.2 Add/Edit Property Form
- **Basic Info**: Mandatory fields for Title, Price, Status, and Type.
- **Rich Description**: Text editor for detailed property marketing copy.
- **Media Gallery**: Drag-and-drop upload zone for property images with a "Main Image" designation system.
- **Geographic Data**: Address input with an integrated Map Preview for location accuracy.
- **Structural Details**: Detailed inputs for Area, Year Built, and incrementals for rooms.
- **Amenities Selection**: Checklist for standardized property features.

### 4.3 Admin User Directory
- **Access Control**: Tools for managing agency members (Agents, Brokers, Admins).
- **Performance Tracking**: User cards displaying the number of active properties and Year-To-Date (YTD) sales.
- **Role Management**: Dropdown system to "Change Role" or "Suspend User" immediately.
- **Directory Filters**: Quick tabs to view members by role or search by name/email.
