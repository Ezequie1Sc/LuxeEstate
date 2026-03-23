# Prompt: Orquestación y Construcción del Home Screen (Discover)

Utiliza el agente conductor/principal para orquestar una estrategia de implementación impecable para el **Home Screen (Discover)** de LUXU ESTATE. Esta interfaz de alta gama debe ser la encarnación perfecta del estándar "Quiet Luxury". El objetivo inicial de esta fase es construir un prototipo frontend de rendimiento absoluto utilizando datos maquetados (Mock Data), pero arquitectónicamente listo para ser integrado nativamente con Supabase bajo los estándares de Next.js 16 para Vercel (2026). Utiliza de forma global la skill `architecting-solutions` para asegurar que este andamiaje respete consistentemente el esquema global del proyecto.

### 1. Arquitectura Interfaz y Estética "Quiet Luxury"
- **Contexto:** La primera impresión de la plataforma debe ser fastuosa. No se tolerará el aspecto de plantillas genéricas o desalineaciones simétricas.
- **Acciones Requeridas:**
  - El diseño debe ser una réplica exacta de la imagen proporcionada en `@/prd/features/resources/home_discover_screen/screen.png`. Extrae y refina la base atómica inicial desde el código en `@/prd/features/resources/home_discover_screen/code.html`.
  - Antes de codificar jerarquías complejas, utiliza la CLI de `shadcn` para inicializar el ecosistema e instalar los componentes base. Configura tu Tailwind (modo claro) adhiriéndose férreamente a las variables documentadas en `@/prd/guidelines.md` y `@.gemini/DESIGN.md`.
- ** Skills/Herramientas Recomendadas:** `frontend-design`, `shadcn`.

### 2. Base de Datos Mock y Configuración de Medios
- **Contexto:** Las imágenes dinámicas en Next.js requieren configuración estricta para no disparar fallas en tiempo de ejecución de tipo `next/image`.
- **Acciones Requeridas:**
  - Genera un fichero JSON local con datos de prueba estructurados de al menos **25 propiedades inmobiliarias**. Debe contener URLs de dominios de alta calidad (como Unsplash).
  - Configura correctamente `next.config.ts`, inyectando el array de `remotePatterns` necesario (ej. `images.unsplash.com`) para permitir la optimización nativa.
- ** Skills/Herramientas Recomendadas:** `plan-writing`, referenciar `@.gemini/GEMINI.md`.

### 3. ⚡ Arquitectura Next.js 16 y Publicación en Vercel
- **Contexto:** El proyecto debe alinearse con la arquitectura cutting-edge de Vercel (2026), desestimando patrones legacy.
- **Acciones Requeridas:**
  - En `next.config.ts`, habilita el prerenderizado parcial (PPR) usando la bandera oficial `cacheComponents: true` (queda **estrictamente prohibido** utilizar propiedades obsoletas como `experimental.ppr`).
  - En la capa que consume el JSON maquetado, debes implementar la directiva de compilador `'use cache';`. Ésta debe declararse como un string literal en la cúspide del archivo o función asíncrona.
- ** Skills/Herramientas Recomendadas:** Servidor MCP `context7`, `next-cache-components`, `vercel-react-best-practices`.

###  Entregables y Validación
- Estructura planificada y verificada del archivo JSON de 25 propiedades mock.
- Confirmación de las librerías a usar, validadas mediante `context7`.
- Adiciones y directivas arquitectónicas exactas inyectadas en `next.config.ts` (PPR).
- Validación estricta del montaje del tema "Quiet Luxury" de shadcn sobre Tailwind 4.

> ** Alineamiento Maestro:** Todo el plan a ejecutar debe adherirse rigurosamente a `@.gemini/GEMINI.md`, respetando la paleta "Quiet Luxury" de `@.gemini/DESIGN.md` y la arquitectura estructurada de `@.gemini/ARCHITECTURE.md`. Se requiere invocar la skill `architecting-solutions` para asegurar que este andamiaje inicial asiente bases sólidas para las futuras migraciones a base de datos real.

---
