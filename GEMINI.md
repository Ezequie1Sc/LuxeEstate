# Luxe Estate - Project Overview

Luxe Estate is a high-performance, responsive real estate platform built with **Next.js 16** and **React 19**, leveraging modern architectural patterns and a premium design aesthetic.

> [!IMPORTANT]
> Siempre debes utilizar **`skill-router`** para validar cuáles son las mejores habilidades (skills) para ayudarnos en la tarea que se solicite.

## 🛠 Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Library:** [React 19](https://react.dev/)
- **Backend-as-a-Service:** [Supabase](https://supabase.com/) (Auth, Database, Storage)
- **Internationalization:** [next-intl](https://next-intl-docs.vercel.app/) (Multi-language support)
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Maps:** [React Leaflet](https://react-leaflet.js.org/)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Linting:** [ESLint](https://eslint.org/)

## 🎨 Design System

### Paleta de Colores
Debes usar exactamente estos valores para mantener la consistencia visual:

- **Nordic (#19322F):** Color principal oscuro. Usado en Headers, navegación y texto principal.
- **Mosque (#006655):** Color primario de acción. Usado en botones primarios y acentos interactivos.
- **Clear Day (#EEF6F6):** Fondo general de la aplicación.
- **Hint of Green (#D9ECC8):** Fondo suave usado en tarjetas destacadas y highlights.

### Tipografía
- **SF Pro Display:** Uso obligatorio para todos los elementos de la interfaz.

### Iconografía
- Google Material Icons / Material Symbols Outlined.

## 💅 Development Conventions

### Principios de Desarrollo
- **Reutilización:** Prioriza siempre la creación de componentes reutilizables para elementos recurrentes (tarjetas, inputs, botones).
- **Framework UI:** Prioriza el uso de componentes de **shadcn/ui**.
- **Arquitectura:** Organización **Feature First** utilizando la metodología **Feature Driven Development (FDD)**.
- **Validación:** Antes de instalar cualquier librería o realizar configuraciones mayores, consulta primero.

### Patrones de Código
- **Componentes:** Componentes funcionales con React Server Components (RSC) por defecto. Usa `"use client"` solo cuando sea estrictamente necesario para interactividad.
- **Next.js 16:** Uso de `proxy.ts` en lugar de `middleware.ts` para lógica a nivel de red (ej. actualizaciones de sesión de auth).
- **Supabase:** Usa `createClient` desde `@/utils/supabase/`. Definiciones de tipos centralizadas en `lib/types.ts`.
- **Internacionalización:** Uso de `useTranslations` de `next-intl`. Mensajes almacenados en `messages/*.json`.

## 📂 Key Project Structure

- `app/`: Next.js App Router (Routes, Layouts).
  - `admin/`: Panel de administración.
  - `property/`: Páginas de detalle de propiedades.
- `components/`: Componentes UI reutilizables.
- `lib/`: Lógica de dominio, constantes y tipos compartidos (`types.ts`).
- `messages/`: Archivos de traducción (en.json, es.json, fr.json).
- `supabase/`: Migraciones y configuración local de Supabase.
- `utils/`: Utilidades y factoría del cliente Supabase.
- `proxy.ts`: Implementación del proxy de Next.js 16.

## 🤖 Skills & Agent Capabilities

Para optimizar el desarrollo, el agente tiene acceso a las siguientes habilidades. Usa `skill-router` para decidir cuál aplicar.

### Infraestructura y Frontend
- **`next-best-practices`**: Úsalo para optimizar el App Router, manejar APIs asíncronas y definir límites de RSC.
- **`vercel-react-best-practices`**: Úsalo para eliminar "waterfalls" de datos y optimizar el rendimiento de carga.
- **`typescript-advanced-types`**: Úsalo para implementar patrones complejos de tipado y genéricos robustos.

### Base de Datos y Backend
- **`supabase-postgres-best-practices`**: Úsalo para optimizar queries, diseñar esquemas y configurar RLS.
- **`postgresql-optimization`**: Úsalo para análisis avanzado de rendimiento y optimización de índices.
- **`sql-optimization`**: Úsalo para reescribir consultas lentas usando `EXPLAIN ANALYZE`.

### UI/UX y Diseño
- **`shadcn`**: Úsalo para implementar componentes de la librería shadcn/ui correctamente.
- **`frontend-design`**: Úsalo para generar interfaces de alta calidad con tipografía y movimiento intencional.
- **`web-design-reviewer`**: Úsalo para analizar y mejorar la accesibilidad y coherencia visual.
- **`canvas-design`**: Úsalo para crear prototipos rápidos y mockups interactivos.
- **`excalidraw-diagram-generator`**: Úsalo para visualizar arquitecturas y flujos de datos.

### Metodología y Flujo de Trabajo
- **`brainstorming`**: Úsalo para explorar ideas antes de implementar.
- **`writing-plans`**: Úsalo para redactar planes técnicos detallados.
- **`executing-plans`**: Úsalo para seguir especificaciones y validar planes de acción.
- **`verification-before-completion`**: Úsalo para validar criterios de aceptación antes de finalizar.
- **`systematic-debugging`**: Úsalo para diagnosticar errores de forma metódica.
- **`subagent-driven-development`**: Úsalo para delegar tareas a sub-agentes expertos.

### Git y Calidad
- **`git-commit`** / **`conventional-commit`**: Úsalo para mantener un historial de commits claro y estandarizado.
- **`git-flow-branch-creator`**: Úsalo para seguir la convención de ramas feature/hotfix.
- **`refactor`**: Úsalo para mejorar la legibilidad del código sin cambiar su comportamiento.
- **`test-driven-development`**: Úsalo para el ciclo Red-Green-Refactor.

### Documentación
- **`prd`**: Úsalo para generar documentos de requisitos de producto.
- **`documentation-writer`**: Úsalo para redactar guías técnicas y documentación de API.
- **`documentation-engineer`**: Úsalo para organizar sistemas complejos de conocimiento técnico.

## 🔌 MCP Ecosystem

El proyecto utiliza los siguientes servidores MCP para interactuar con herramientas externas:

- **Supabase MCP**: Para gestión de base de datos, migraciones y ejecución de SQL.
- **Context7 MCP**: Para validar el uso de librerías y consultar documentación actualizada en tiempo real.

## 📝 Current Progress & Roadmap

- [x] Configure Supabase Database & Auth (Google Login).
- [x] Implement Home Screen with Property Listing.
- [x] Implement Multi-language Support (EN, ES, FR).
- [x] Build Admin Properties Dashboard.
- [x] Build Add/Edit Property Form with image upload and map preview.
- [ ] Implement Advanced Search & Filters across all views.
- [ ] Implement Admin User Management Directory.
- [ ] Implement Property detail screen.
- [ ] Integrate Real-time Notifications for property inquiries.
