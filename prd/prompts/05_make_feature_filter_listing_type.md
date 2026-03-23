# Prompt: Implementación Estratégica del Filtro "New in Market" (Listing Type)

Utiliza el agente conductor/principal para orquestar y ejecutar un plan arquitectónico y visual que implemente el mecanismo de filtrado "Sale / Rent" en la sección **"New in Market"** del `HomeScreen`. Esta funcionalidad debe estar a la altura de la experiencia "Quiet Luxury" de **LUXU ESTATE**, proveyendo interacciones instantáneas y cuidando la fluidez sin estresar inútilmente al servidor. Utiliza la skill `architecting-solutions` para asegurar congruencia, dictaminando cómo este pequeño filtro sienta las bases para filtros multivariables posteriores.

### 1. Interfaz de Usuario y Experiencia (UI/UX)
- **Contexto:** El usuario debe poder alternar entre propiedades en venta y renta de forma inmaculada. Debemos evitar controles genéricos (como dropdowns pesados) que rompan la estética premium.
- **Acciones Requeridas:**
  - Implementar un selector tipo *Toggle Group* o *Tabs* minimalistas (ej. "For Sale" / "For Rent") integrado elegantemente en el header de la sección "New in Market".
  - Los cambios de estado deben poseer retroalimentación visual inmediata. Utilizar colores semánticos (`bg-primary`, `text-primary-foreground`) para el estado activo y mantener alto contraste (WCAG 4.5:1) en estados inactivos.
  - Diseñar un *Empty State* elegante en el extremo caso de que una subcategoría quede vacía de listados.
- ** Skills/Herramientas Recomendadas:** `frontend-design`, `shadcn`.

### 2. Capa de Datos y Modelado (Supabase)
- **Contexto:** La base de datos siempre debe ser la única y definitiva fuente de verdad. El filtro asienta todo su peso sobre la columna `listing_type`.
- **Acciones Requeridas:**
  - Asegurar que la columna `listing_type` en Supabase se consuma tipada como un Enum estricto literal en el cliente de TypeScript (ej. `'sale' | 'rent'`).
  - La función de acceso a datos (`fetch`) debe realizar la cláusula de filtro delegada directamente en Supabase (`.eq('listing_type', type)`). **Prohibido** extraer los datos masivamente en bloque para luego filtrarlos en memoria con JavaScript.
- ** Skills/Herramientas Recomendadas:** `supabase-postgres-best-practices`, `typescript-advanced-types`.

### 3. Rendimiento, PPR y Sincronización (Next.js 16)
- **Contexto:** El salto entre sub-categorías no debe detonar recargas de página ni anular el renderizado estático híbrido (PPR) habilitado activamente en la base de LUXU.
- **Acciones Requeridas:**
  - Si decides apoyar el filtro en Search Params (`?listing_type=rent`), la lectura mutante de la URL **debe aislarse estrictamente** dentro de un componente hijo encapsulado en barreras `<Suspense>`.
  - Aplica la directiva de compilador `'use cache';` parametrizando con un `cacheTag` granular que incorpore el tipo de transacción para que ambas listas ("For Sale" y "For Rent") se guarden de forma autónoma, impidiendo mezclas en SSR.
  - Provocar la renderización paralela de Skeletons geométricamente simétricos idénticos a las `PropertyCards` de forma estricta durante la latencia eventual de la consulta.
- ** Skills/Herramientas Recomendadas:** `vercel-react-best-practices`, `next-cache-components`.

### Entregables y Validación
- Componente de UI moderno (Tabs o Toggle) perfectamente responsivo y estilizado.
- Función de Data Fetching conectada limpiamente con cláusulas restrictivas de Supabase.
- Manejo de estado URL/Componente con aislamiento hermético bajo Suspense y directivas de caché.
- Componentes unificados y funcionales sin romper compilaciones pre-renderizadas.

> ** Alineamiento Maestro:** Todo el plan a ejecutar debe adherirse rigurosamente a `@.gemini/GEMINI.md`, respetando la paleta "Quiet Luxury" de `@.gemini/DESIGN.md` y la arquitectura estructurada de `@.gemini/ARCHITECTURE.md`. Se requiere invocar la skill `architecting-solutions` para corroborar que la decisión entre estado local vs URL params beneficie a la evolución natural de la App.

