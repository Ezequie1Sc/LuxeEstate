# Prompt: Implementación Estratégica del Grid de Búsqueda y Filtros Home

Utiliza el agente conductor/principal para orquestar un plan riguroso que implemente el motor de búsqueda dinámico y la cuadrícula de resultados central en el `HomeScreen` de **LUXU ESTATE** (Next.js 16 + Supabase). Esta no es una simple barra de búsqueda; es el núcleo navegacional primario de la experiencia "Quiet Luxury", garantizando transiciones inmaculadas y respuesta instantánea. Utiliza la skill `architecting-solutions` para cerciorarte de que la máquina de estados definida actúe armónicamente en sintonía con las arquitecturas construidas en fases previas.

### 1. Arquitectura de Estados y Control de Flujo
- **Contexto:** Una experiencia premium no deja al usuario nunca en periodos de incertidumbre o carga blanca. Las transiciones entre buscar y ver resultados deben ser absolutamente predecibles.
- **Acciones Requeridas:**
  - Documentar e implementar estrictamente los 4 estados principales de visualización: `idle` (reposo/colecciones nativas del home), `searching` (fase de carga de la red), `empty` (cero resultados, desplegando un fallback sofisticado con call-to-actions), y `results` (grilla popular renderizada).
  - La URL debe gobernar silenciosamente este flujo; persistiendo el string manipulado como query genérico (`?q=...&category=...`) y desencadenando actualizaciones reactivas inmediatas solo mediante "ENTER" o cambio de pestaña categórica.
- ** Skills/Herramientas Recomendadas:** `plan-writing`, `frontend-design`.

### 2. ⚡ Aislamiento de PPR y Rendimiento
- **Contexto:** En Next.js 16, usar ganchos (hooks) expuestos al cliente con contextos de URL arruina globalmente el pre-renderizado estático. LUXU no sacrificará su TTFB.
- **Acciones Requeridas:**
  - Está **terminantemente prohibido** acceder a `searchParams` nativamente en el `page.tsx` estructural para no dinamitar la página entera.
  - La lógica paramétrica y el consumo fetch profundo se deben recluir fuertemente en componentes internos menores (ej. `<SearchResultsGrid />`), encapsulados por un recubrimiento protector irrompible de `<Suspense>`.
  - El componente de esqueleto expuesto por Suspense debe respetar exactamente las proporciones asimétricas/simétricas del `PropertyCard` configurando rigurosamente un layout 3x3 fijo visualmente.
- ** Skills/Herramientas Recomendadas:** `vercel-react-best-practices`, `next-cache-components`, `next-best-practices`.

### 3. Optimización de Consultas y Caché
- **Contexto:** El indexado y búsqueda de texto en base de datos debe ser resistente, con sus respuestas altamente cacheadas para dominar un mercado ultrarrápido sin colisionar datos.
- **Acciones Requeridas:**
  - Dispara en Supabase modificadores de compatibilidad cruzada (`ilike` u operadores Full Text Search elementales) referenciando rígidamente `title` y `location` permitiendo case-insensitive matching.
  - Inyecta sistemáticamente `'use cache';` configurando jerárquicamente ciclos perentorios usando variables nativas permitidas como `cacheLife`.
  - Instancia inequívocamente la clave de guardado `cacheTag` uniendo los literales del query inyectado de búsqueda explícito previniendo corrupciones fantasmas.
- ** Skills/Herramientas Recomendadas:** `supabase-postgres-best-practices`, `next-cache-components`.

### 4. Integridad Estética y Dark Mode
- **Contexto:** Las transiciones de color forzadas fatigan al usuario. La elegancia reside en un tema dinámicamente tolerante regido por estricta semántica técnica.
- **Acciones Requeridas:**
  - Limita tajantemente el espectro de color inyectado a CSS nativo Tailwind gobernado libremente por nombres representativos (`text-foreground`, `bg-card`). Obliga combinaciones aseguradas para superar normativas de contraste 4.5:1.
  - Aplica clases dinámicas fluidas para ocultar progresivamente, vía opacidad y transiciones (`transform/scale`), la galería `FeaturedCollections` en lugar de extinguir repentinamente un nodo DOM invocando validaciones booleanas destructivas (`&&`).
- ** Skills/Herramientas Recomendadas:** `frontend-design`, seguimiento estricto de `@.gemini/DESIGN.md`.

### Entregables y Validación
- Máquina de estados visual claramente separada (idle, searching, results, empty).
- Componente de URL mutante bajo contención estricta de barrera Suspense.
- Directivas completas `cacheTag` y queries `ilike` integradas limpiamente.
- Ocultamiento elegante de las colecciones sin parpadeos, usando css.

> ** Alineamiento Maestro:** Todo el plan a ejecutar debe adherirse rigurosamente a `@.gemini/GEMINI.md`, respetando la paleta "Quiet Luxury" de `@.gemini/DESIGN.md` y la arquitectura estructurada de `@.gemini/ARCHITECTURE.md`. Se requiere invocar la skill `architecting-solutions` para asegurar una orquestación cohesiva y sin bloqueos de ruteo transversales.

