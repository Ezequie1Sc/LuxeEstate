# Prompt: Construcción Estratégica de la Pantalla de Detalle de Propiedad (Property Details Screen)

Utiliza el agente conductor/principal para orquestar detalladamente el plan arquitectónico, de datos y estético de la **Pantalla de Detalle de Propiedad** de **LUXU ESTATE** (Next.js 16 + Supabase). Esta interfaz debe ostentar el más absoluto grado de refinamiento visual bajo la doctrina "Quiet Luxury" garantizando un rendimiento sin demoras en el first-paint (PPR). Utiliza globalmente la skill `architecting-solutions` para asegurar una alineación arquitectónica unificada con los componentes y lógicas previamente implementados.

### 1. Fase de Arquitectura y Datos (Supabase + Postgres)
- **Contexto:** La vista de detalle expone un espectro masivo de información. Replicar estructuras redundantes hundirá el rendimiento de la consulta.
- **Acciones Requeridas:**
  - Configura y documenta la migración de Supabase en la tabla `properties`; **agregando la columna `slug`** (texto único para ruteo SEO impecable) y **eliminando la variable limitante `image_url`** por una columna `images` estructurada en arreglo nativo JSONB.
  - Genera 10 instancias mock profundas aseguradas bajo whitelist (`remotePatterns` en Next).
  - Incluye forzosamente datos geolocalizados matemáticos en Supabase (`lat`, `lng` numéricos) para preparar la inyección del mapa.
- ** Skills/Herramientas Recomendadas:** `supabase-postgres-best-practices`, `plan-writing`.

### 2. Fase de Referencia y Mapeo
- **Contexto:** La representación espacial interactiva es fundamental en Real Estate de gama alta.
- **Acciones Requeridas:**
  - Realiza una consulta directa al MCP `context7` para revisar las pautas actualizadas de hidratación para bibliotecas cartográficas en Next.js App Router (ej. Leaflet). 
  - Prohíbe formalmente cualquier importación estática del mapa. Exige inyecciones dinámicas (`const Library = dynamic(() => import(...), { ssr: false })`) para mutilar de raíz errores de desactualización de Window.
- ** Skills/Herramientas Recomendadas:** `context7` MCP, `next-best-practices`.

### 3. Fase de Interfaz y UX ("Quiet Luxury")
- **Contexto:** El usuario ingresa esperando sumergirse en una revista de lujo interactiva. Discrepancias pixel-level son veneno.
- **Acciones Requeridas:**
  - Obliga una implementación visual que encaje al 100% (Pixel-Perfect) con `@/prd/features/resources/property_details/screen.png` usando elementos predefinidos en `@/prd/features/resources/property_details/code.html`.
  - Exige "Simetría Perfecta": Todo elemento tipográfico y cada galería iterativa deben mantener centrado vertical estricto e instanciar heights invariables.
- ** Skills/Herramientas Recomendadas:** `frontend-design`, ref. explícita a `@.gemini/DESIGN.md`.

### 4. Fase de Optimización, Rendimiento y Caché
- **Contexto:** Las grandes vistas de datos consumen TTFB. Next.js 16 exige barreras de stream sofisticadas.
- **Acciones Requeridas:**
  - Instala estrictamente protecciones `<Suspense>` envolviendo nodos pesados independientes (como la galería de carrusel y el iFrame interactivo de Cartografía).
  - Exige la implementación visual de `Skeletons` sumamente pulidos que igualen geométricamente al componente pendiente, logrando que el PPR dibuje la capa base instantáneamente.
  - Implementa cláusulas explícitas `'use cache';` parametrizadas modularmente per id/slug.
- ** Skills/Herramientas Recomendadas:** `next-cache-components`, `vercel-react-best-practices`.

### Entregables y Validación
- Migración robusta JSONB / `slug` en Supabase y generación de data de prueba.
- Lectura correctiva e inyección vía import dinámico de componentes geográficos.
- Empuje estético inmaculado bajo shadcn garantizando simetría perfecta pixel-perfect.
- Despliegue seguro PPR / cache con Skeletons de alta fidelidad.

> ** Alineamiento Maestro:** Todo el plan a ejecutar debe adherirse rigurosamente a `@.gemini/GEMINI.md`, respetando la paleta "Quiet Luxury" de `@.gemini/DESIGN.md` y la arquitectura estructurada de `@.gemini/ARCHITECTURE.md`. Se requiere invocar la skill `architecting-solutions` para garantizar uniformidad en componentes reusables, previniendo duplicidad de dependencias estéticas con el HomeScreen previo.

---
