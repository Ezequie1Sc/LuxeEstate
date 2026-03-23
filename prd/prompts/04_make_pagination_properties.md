# Prompt: Implementación Dinámica Supabase & Paginación (Property Grid)
## Supabase Integration & Advanced Property Pagination
Objective
Evolucionar la gestión de datos de LUXU ESTATE de un estado estático (Mock) a un backend dinámico en Supabase, implementando un sistema de paginación de alto rendimiento, seguridad RLS y optimización de caché avanzada en Next.js 16.

Requirements
Infrastructure & Security:

Configuración de pool de conexiones mediante variables de entorno en .env.local.

Implementación de Row Level Security (RLS) en Supabase: Acceso público de solo lectura (SELECT).

Data Migration & Typing:

Mapeo de interfaces de dominio (DTOs) estrictas entre PostgreSQL y React.

Script de migración automatizado para ingestar mock_properties.json a Supabase (evitando duplicados y con SSL).

Business Logic:

Selección dinámica de exactamente dos (2) propiedades como "Featured Collections".

Grilla geométrica fija de 9 propiedades por página (3x3) mediante limit/offset.

Performance & Cache (PPR):

Aislamiento de Suspense: Delegar la lectura de searchParams exclusivamente a componentes internos envueltos en <Suspense>.

Uso de la directiva 'use cache'; con etiquetas granulares (cacheTag) basadas en el offset.

Architecture & Design
Data Layer: React Server Components (RSC) para fetch directo.

Next.js 16: Uso de Partial Prerendering (PPR) y cacheLife definido para evitar "stale data".

Patterns: Implementación de "Safe-Data-Fetching" para evitar la exposición de credenciales del lado del cliente.

Skills Requeridas: architecting-solutions, supabase-postgres-best-practices, next-cache-components, typescript-advanced-types.

Success Criteria
Migración exitosa verificada en el dashboard de Supabase.

Cero fallas de SSR al navegar entre páginas (Paginación instantánea).

Seguridad RLS validada (intentos de UPDATE/DELETE públicos deben fallar).

Cumplimiento de la regla crítica: El layout raíz no debe verse afectado por los parámetros de búsqueda de la paginación.