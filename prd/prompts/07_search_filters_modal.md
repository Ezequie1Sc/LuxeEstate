# Prompt: Implementación Estratégica del Modal de Filtros Avanzados (Search Filters)

Utiliza el agente conductor/principal para orquestar detalladamente la arquitectura e implementación del Modal de Filtros Avanzados del `HomeScreen` de **LUXU ESTATE**. Este modal (Next.js 16 + Supabase) es una pieza de ingeniería visual que debe transmitir orden absoluto, funcionando bajo estricta lógica relacional sin destruir la fluidez de lectura. Emplea proactivamente la skill `architecting-solutions` para alinear este requerimiento modal asegurando cohesión arquitectónica global sin introducir redundancias en los sistemas de caché ni bloquear la hidratación.

### 1. Geometría y Estabilidad de Interfaz (Crítico)
- **Contexto:** En experiencias de ultra-lujo, la interfaz nunca debe comportarse de forma aleatoria. Los elementos que "saltan" al renderizarse o colisionan, destruyen la percepción de calidad.
- **Acciones Requeridas:**
  - El Modal de filtros debe instanciarse estrictamente en una **única columna vertical centrada**, limitando su anchura (ej. `sm:max-w-[500px]`) para anular cualquier colisión visual entre sliders (precio) y toggles (amenidades).
  - Emplea "Simetría Perfecta": Fija rígidamente las alturas y anchos de los botones de interacción y elementos input para garantizar que nada se desajuste en pantallas menores.
- ** Skills/Herramientas Recomendadas:** `frontend-design`, `shadcn`.

### 2. Estética "Quiet Luxury" y UX
- **Contexto:** LUXU ESTATE exige interfaces pulcras, alejadas del estilo denso y comercial.
- **Acciones Requeridas:**
  - Sustituye tajantemente cualquier color nativo (rojos, azules por defecto) por la paleta semántica controlada de LUXU (`text-foreground`, `border-border`, `bg-popover`).
  - La relación de contraste se vigilará para asegurar total cumplimiento con la normativa WCAG 4.5:1 en ambos espectros (Dark / Light Mode).
- ** Skills/Herramientas Recomendadas:** `frontend-design`.

### 3. Capa de Datos, Escalabilidad y Rendimiento (Supabase)
- **Contexto:** Filtrar atributos (Ej: Pools, Elevators) en modelos relacionales mediante múltiples columnasbooleanas es sintaxis legacy y no escala.
- **Acciones Requeridas:**
  - Orquesta el rediseño para agrupar todas las características bajo una única gran columna de Supabase tipada obligatoriamente como `JSONB` (ej. `amenities`).
  - Instala en Supabase índices específicos (GIN) para permitir consultas hiperveloces.
  - La lógica de filtro (ej. `{ has_pool: true }`) **debe delegarse nativamente a la consulta Server-Side**. Queda terminalmente prohibido descargar arrays globales para aplicar `.filter()` localmente en el cliente React.
- ** Skills/Herramientas Recomendadas:** `supabase-postgres-best-practices`.

### 4. Validación Técnica Final y Caché
- **Contexto:** La experiencia SPA se rompe si los estados inyectan recargas forzadas del framework.
- **Acciones Requeridas:**
  - El Modal debe persistir su estado local intermedio, mutando silenciosamente la URL (usando `router.push()` con configuración para no destruir el scroll de página).
  - Cuando los filtros avanzados mutan el inventario a la vista, "Featured Collections" debe desvanecerse fluidamente utilizando CSS opacity/transform puro.
- ** Skills/Herramientas Recomendadas:** `vercel-react-best-practices`, `next-cache-components`.

### Entregables y Validación
- Estructura modal UI estable (máx 500px) validada estéticamente (Quiet Luxury).
- Refactorización a JSONB confirmada en base de datos e índices creados.
- Peticiones de fetch puras al DB Server-side con manejo de filtros complejos y optimización.
- Manejo de URL History silencioso y ocultamiento por CSS sin montajes abruptos.

> ** Alineamiento Maestro:** Todo el plan a ejecutar debe adherirse rigurosamente a `@.gemini/GEMINI.md`, respetando la paleta "Quiet Luxury" de `@.gemini/DESIGN.md` y la arquitectura estructurada de `@.gemini/ARCHITECTURE.md`. Se requiere invocar la skill `architecting-solutions` para validar transversalmente que el esquema de filtros en `JSONB` no cause deudas técnicas insalvables con otras pantallas relacionadas.

---
