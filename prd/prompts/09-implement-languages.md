# Prompt: Implementación Estratégica de i18n/l10n en Next.js 16

Utiliza el agente conductor/principal para orquestar detalladamente el plan arquitectónico para implementar una infraestructura de internacionalización (i18n) y localización (l10n) completa para **LUXU ESTATE** (Next.js 16 + Turbopack). El objetivo es desplegar múltiples idiomas sin sacrificar en absoluto el PPR, el SEO, las reglas de caché agresivo ni el principio visual de "Quiet Luxury". Utiliza la skill `architecting-solutions` para asegurar que todo el andamiaje del sistema de diccionarios trabaje armónicamente con las métricas exigidas.

### 1. Middleware y Ruteo (Nueva Convención proxy.ts)
- **Contexto:** Next.js moderno (en entornos Turbopack + Vercel) aconseja abstraer la lógica masiva del archivo `middleware.ts` nativo. LUXU requiere URLs limpias, totalmente indexables y SEO-Friendly para asegurar el posicionamiento del real estate, sin destellos del layout (FOUC).
- **Acciones Requeridas:**
  - Instaurar una arquitectura con prefijo de URL de manera obligatoria para todos los locales excepto el default (ej: `/es/luxury-villas`, pero `/luxury-villas` para inglés).
  - **REGLA ESTRICTA:** Implementar toda la captura y negociación (negotiation) de locales en un nuevo archivo `src/middleware/proxy.ts`. Dentro de este `proxy.ts` se generarán exportaciones nominales directas. El archivo `src/middleware.ts` base quedará exclusivamente consumiendo estas exportaciones importándolas directamente desde `proxy.ts`, minimizando el bundling global en tiempo de ejecución.
  - Asegurar la inyección estricta del `matcher` en `middleware.ts` restringiendo expresamente la interceptación nociva sobre rutas estáticas inmutables, pre-builds y extensiones conocidas (`.png`, `.svg`, `_next/static`).
- ** Skills/Herramientas Recomendadas:** `next-best-practices`, `i18n-frontend-implementer`.

### 2. ⚡ Integración con PPR (Partial Prerendering) y Streaming
- **Contexto:** Las estrategias arcaicas de inyección de diccionarios anulan rutinariamente el pre-renderizado (PPR), bloqueando el First Byte (TTFB). LUXU debe ser instantáneo sin importar el territorio.
- **Acciones Requeridas:**
  - Estructurar jerárquicamente diccionarios asíncronos JSON.
  - **REGLA CRÍTICA:** Toda la inyección de idioma se hará bajo el marco oficial mandatorio usando explícitamente `setRequestLocale` e interacciones profundas de `server-only` para componentes de servidor, sin propagar deshidrataciones perjudiciales (Provider blobs) al cliente.
  - Cualquier componente de cliente que interactúe nativamente con mutaciones paramétricas debe obligatoriamente anidarse profunda y seguramente tras murallas reactivas explícitas de `<Suspense>`.
- ** Skills/Herramientas Recomendadas:** `next-cache-components`, `vercel-react-best-practices`.

### 3. Interfaz de Usuario: Selector de Idioma Robusto
- **Contexto:** En la experiencia "Quiet Luxury", un elemento parpadeante o de interacción torpe destruye la credibilidad. Un modal superpuesto o selector errático arruina el scroll o interrumpe asincronías inyectadas.
- **Acciones Requeridas:**
  - Implementar un Selector de Idioma sofisticado bajo las restricciones visuales estrictas marcadas por `shadcn`.
  - **PROHIBIDO:** Se prohíbe el uso de montajes con APIs inestables nativas tipo "Portals" para este selector. La jerarquía Z será resuelta estrictamente empleando maquetación nativa de colisiones (absolutos).
  - Utilizar obligatoriamente la utilería base y estilos semánticos (`bg-background/80`, `backdrop-blur`) asegurando elegancia y simetría geométrica irrefutable.
- ** Skills/Herramientas Recomendadas:** `frontend-design`, `shadcn`.

### 4. Gestión Estructurada de Mensajes y Tipado (Rich Text)
- **Contexto:** Interpolaciones inseguras o la escritura de estructuras complejas (etiquetas bold `<b/>`, links en mitad de frases) arruinan el DOM en React y causan XSS o Hydration errors brutales en Next 16.
- **Acciones Requeridas:**
  - Prohibir directamente la inclusión arbitraria de HTML puro hardcodeado interactuando agresivamente con strings interpolados estáticos en el JSON.
  - Declarar un sistema estandarizado capaz de manejar interpolación estructurada de fragmentos tipográficos (conocido habitualmente como `t.rich` format abstraction).
  - Diseñar interfaces de TypeScript inmutables (Intellisense) donde acceder a claves incorrectas detone inmediatamente errores categóricos pre-build en consola.
- ** Skills/Herramientas Recomendadas:** `typescript-advanced-types`.

### Entregables y Validación
- Aprovisionamiento del proxy nativo de intermediación validado evitando que el `middleware.ts` estalle o se sobrecargue.
- Mecanismo en pre-builds probando 0 advertencias bajo el comando riguroso nativo: `npm run build`.
- Sistema de traducciones asíncronas preservando íntegramente el layout de esqueleto PPR a lo largo de las páginas principales.
- Implementación de un validador incondicional (script shell o lint) que asegure que el selector flotante no rompe las barreras semánticas o la indexación.

> ** Alineamiento Maestro:** Todo el plan a ejecutar debe adherirse rigurosamente a `@.gemini/GEMINI.md`, respetando la paleta "Quiet Luxury" de `@.gemini/DESIGN.md` y la arquitectura estructurada de `@.gemini/ARCHITECTURE.md`. Se requiere invocar la skill `architecting-solutions` para orquestar que este flujo modular transaccional garantice una migración suave entre fronteras territoriales globales sin colapsos estructurales.
