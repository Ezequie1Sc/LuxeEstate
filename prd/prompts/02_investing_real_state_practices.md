# Prompt: Investigación y Documentación de Mejores Prácticas (Real Estate App)

Utiliza el agente conductor/principal para orquestar una investigación y consolidación de conocimientos técnicos de vanguardia. El objetivo es crear la "Biblia de Desarrollo" (`best-practices.md`) específica para aplicaciones inmobiliarias críticas y de ultra-lujo como **LUXU ESTATE**, construidas sobre el moderno stack tecnológico: **Next.js 16**, **Supabase** y **Vercel** (estándares 2026). Utiliza la skill `architecting-solutions` para asegurar que este documento se alinee con las fases posteriores del proyecto.

### 1. 🔍 Investigación de Vanguardia y Estrategia
- **Contexto:** El ecosistema Serverless (Vercel) y las bases de datos de borde (Supabase) cambian muy rápido. Las prácticas obsoletas introducen latencia inaceptable para un mercado de lujo.
- **Acciones Requeridas:**
  - Utiliza búsquedas en internet en fuentes formales (Documentación oficial, blogs de Vercel/Supabase, casos de estudio SaaS) para recopilar los últimos paradigmas sobre renderizado híbrido (PPR), caché agresivo y optimización de base de datos relacional orientada al frontend web.
  - Filtra y traduce esta teoría directamente a casos de uso aplicables a LUXU ESTATE (por ejemplo: cómo cachear galerías de propiedades, indexación de búsquedas geolocalizadas rápidas, etc.).
- **💡 Skills/Herramientas Recomendadas:** Servidor MCP `search_web`, `skill-router`.

### 2. 📝 Orquestación de la Documentación (best-practices.md)
- **Contexto:** La documentación pobremente formateada no se lee. Requerimos estructuración técnica de nivel FAANG.
- **Acciones Requeridas:**
  - Crea y redacta el archivo `@/prd/features/best-practices.md`. Configura al inicio la descripción y luego segrega los puntos en categorías rígidas: *Rendimiento (Next.js/Vercel)*, *Capa de Datos (Supabase)*, y *Estética UI (Quiet Luxury)*.
  - Utiliza viñetas (bullet points) concretas. Cada recomendación debe tener "El Qué", "El Por Qué" y "Cómo se ve en LUXU ESTATE".
- **💡 Skills/Herramientas Recomendadas:** `documentation-engineer`, `next-best-practices`, `vercel-react-best-practices`.

### 3. 🔗 Integración del Conocimiento en el Core
- **Contexto:** Una guía de mejores prácticas que está escondida no aporta valor. Debe ser la primera referencia antes de que el equipo escriba código.
- **Acciones Requeridas:**
  - Inyecta una referencia jerárquica obligatoria dentro del archivo maestro `@.gemini/GEMINI.md`. Esta adición debe incluir una breve descripción declarativa de `@/prd/features/best-practices.md` e instruir explícitamente a toda inteligencia artificial futura sobre cuándo y cómo debe consumirse dicho documento.
- **💡 Skills/Herramientas Recomendadas:** `plan-writing`.

### 🎯 Entregables y Validación
- Un archivo `@/prd/features/best-practices.md` minuciosamente organizado, conteniendo recomendaciones tácticas accionables.
- Un bloque exclusivo dentro de `best-practices.md` dedicado a "Ideas de Mejora Base para LUXU ESTATE".
- La inserción precisa en el archivo maestro `@.gemini/GEMINI.md`.

> **🔗 Alineamiento Maestro:** Todo el plan a ejecutar debe adherirse rigurosamente a `@.gemini/GEMINI.md`, respetando la paleta "Quiet Luxury" de `@.gemini/DESIGN.md` y la arquitectura estructurada de `@.gemini/ARCHITECTURE.md`. Se requiere invocar la skill `architecting-solutions` para asegurar que este paso complemente holísticamente el desarrollo global de la plataforma.

