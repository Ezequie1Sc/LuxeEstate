## Instala las siguientes skills de manera local para guiar tu proyecto
### skill-router
npx skills add https://github.com/charon-fan/agent-playbook --skill skill-router

### Quick Guide: skill-router en LUXE ESTATE
  El skill-router es tu "punto de entrada" cuando no estás seguro de qué herramienta es la mejor para una tarea específica.


  1. ¿Cuándo usarla?
  Úsala siempre que tengas un objetivo claro pero no sepas por dónde empezar o qué skill específica invocar. Es ideal para:
   * Planificar nuevas funcionalidades complejas.
   * Resolver bugs difíciles de rastrear.
   * Optimizar el rendimiento o la seguridad.

  2. Escenarios Comunes y Prompts
  ┌──────────────────┬──────────────────────────────────────┬────────────────────────────────────────────────────────────┐
  │ Escenario        │ Ejemplo de Prompt                    │ Qué hace el Router                                         │
  ├──────────────────┼──────────────────────────────────────┼────────────────────────────────────────────────────────────┤
  │ Nueva            │ "Quiero implementar un sistema de    │ Te sugerirá usar architecting-solutions para el diseño,    │
  │ Funcionalidad    │ reseñas para las propiedades. Usa el │ luego supabase-postgres-best-practices para la DB y shadcn │
  │                  │ skill-router para guiarme."          │ para la UI.                                                │
  │ Duda de          │ "¿Cómo puedo hacer que mi formulario │ Te redirigirá a la skill frontend-design para aplicar      │
  │ Estilo/UI        │ de login se vea más premium?         │ principios estéticos avanzados.                            │
  │                  │ Consulta al skill-router."           │                                                            │
  │ Error en Base de │ "Mis políticas RLS están fallando.   │ Detectará la intención y activará automáticamente          │
  │ Datos            │ ¿Qué skill me ayuda?"                │ supabase-postgres-best-practices.                          │
  │ Refactorización  │ "Este componente de mapa es muy      │ Te recomendará refactoring-specialist o                    │
  │                  │ grande, quiero mejorarlo."           │ typescript-advanced-types si detecta problemas de tipado.  │
  └──────────────────┴──────────────────────────────────────┴────────────────────────────────────────────────────────────┘

  3. Cómo invocarla
  No necesitas comandos especiales, simplemente menciona frases como:
   * "Usa el skill-router para decidir cómo abordar este problema..."
   * "¿Qué skill de las que tengo instaladas es mejor para [tarea]?"
   * "Ayúdame a planificar [funcionalidad] usando el router."


  Beneficio para tu Stack (Next.js + Supabase + Shadcn)
  Al tener tantas herramientas a tu disposición (frontend-design, shadcn, typescript-advanced-types,
  supabase-postgres-best-practices), el skill-router evita que pierdas tiempo decidiendo cuál usar. Yo analizaré tu stack y el
  router me dirá, por ejemplo: "Para esta tabla de Supabase, usa primero las best-practices de Postgres y luego diseña la UI
  con shadcn".


  Nota: Como ya tengo registradas tus skills actuales, el router tiene visibilidad completa de todo tu "arsenal" de
  desarrollo.

### skill-registry
npx skills add https://github.com/phar-dev/phardev.dot --skill skill-registry

###  Quick Guide: Using skill-registry in your Project
  The skill-registry acts as a central directory for all the specialized capabilities (skills) you add to LUXE ESTATE.


  1. What does it do?
  It maintains a file at .agents/skills/skill-registry/assets/registry.json that stores the names and descriptions of your
  project's skills. This is especially useful as the project grows and you add more automation or design patterns.

  2. Common Scenarios

  A. Registering a New Skill:
  After creating a new custom skill (e.g., for specific business logic), you use this to add it to the tracking list.
   * Workflow: I will automatically run a command to update the JSON registry whenever we finish setting up a new skill.


  B. Searching for Existing Skills:
  If you're not sure if a certain capability has already been "taught" to the agents in this project.
   * Prompt Example: "¿Qué skills tenemos registradas para manejo de imágenes?" or "Busca en el skill-registry si hay algo
     relacionado con validación de formularios."


  C. Maintenance:
  It helps me (and other agents) understand the full "toolbox" available in your workspace without having to scan every folder
  manually.


  3. Integration with skill-creator
  This skill works best alongside skill-creator. The typical loop is:
   1. Create: We use skill-creator to define a new rule-set (like ui-ux-pro-max).
   2. Register: We use skill-registry to log that skill so it's permanently tracked in the project metadata.


  Why is this useful for LUXE ESTATE?
  As we add more complex features (like real-time notifications or advanced search filters), we can create specialized
  "skills" for them. The skill-registry ensures that these patterns are documented and that any future AI agent working on
  this project knows exactly what tools are at its disposal.


  Note: I will manage the JSON file using jq commands in the background, so you don't need to worry about the formatting. Just
  ask me to "usar el skill-registry para [buscar/registrar] una skill".

### typescript
npx skills add https://github.com/wshobson/agents --skill typescript-advanced-types

#### Configura el skill

  Quick Guide: Using typescript-advanced-types in LUXE ESTATE

  Here are the most common scenarios where you can use this skill to improve your code:


  1. Creating Type-Safe API Clients
  When fetching data from Supabase, you can use advanced generics to ensure your components know exactly what they're
  receiving.
   * Scenario: You want a generic function to fetch any table from Supabase with full type safety.
   * Prompt Example: "Usa la skill typescript-advanced-types para crear un hook genérico useSupabaseQuery<T> que infiera
     automáticamente los tipos de retorno basados en el esquema de la tabla de Supabase."


  2. Refining Component Props with Discriminated Unions
  Perfect for UI components that change behavior based on a "status" or "mode."
   * Scenario: A PropertyCard that can be in "Loading," "Error," or "Success" state.
   * Prompt Example: "Usa la skill typescript-advanced-types para definir los Props de un componente PropertyStatus. Quiero
     usar Discriminated Unions para que si el status es 'error', el objeto de props obligatoriamente pida un errorMessage:
     string."


  3. Transforming Types with Mapped Types
  Useful when you have a base Property type but need variations (e.g., all fields optional for a filter form, or all fields
  readonly).
   * Scenario: Creating a "Partial" or "DeepReadonly" version of your properties for specific admin views.
   * Prompt Example: "Usa typescript-advanced-types para crear un tipo DeepPartial<Property> que haga que todas las
     propiedades, incluyendo las anidadas como amenities, sean opcionales para usar en mi FilterModal."


  4. Pattern Matching with Template Literal Types
  Great for creating strictly typed string sets, like CSS class combinations or dynamic route paths.
   * Scenario: Creating a type for dynamic routes like /property/[slug].
   * Prompt Example: "Genera un tipo para las rutas de mi aplicación usando Template Literal Types, de modo que solo permita
     rutas válidas que empiecen por /admin/ o /property/."


  Key Concepts Now Available to Me:
   * Generics (<T>): Flexible, reusable code.
   * Conditional Types (T extends U ? X : Y): Types that react to logic.
   * Mapped Types: Transforming one type into another (e.g., Readonly<T>).
   * Template Literals: String-based logic in types (e.g., on${Capitalize<Event>}).


  To use it, just mention "usa la skill typescript-advanced-types" when asking me to write or refactor code that involves
  complex data structures or requires high type safety. I'll automatically apply these patterns to make your code more robust
  and self-documenting.

## next-best-practices
  npx skills add https://github.com/vercel-labs/next-skills --skill next-best-practices

### next-best-practices
npx skills add https://github.com/vercel-labs/next-skills --skill next-best-practices

### Quick Guide 
next-best-practices en tu Proyecto


  Esta herramienta asegura que el código de Next.js sea performante, accesible y siga las convenciones oficiales de Vercel.


  1. ¿Cuándo usarla?
  Invocala siempre que estés trabajando en la estructura de rutas, manejo de datos o componentes que utilicen APIs de Next.js.

  2. Escenarios Comunes y Prompts



  ┌───────────────┬────────────────────────────────────────────┬────────────────────────────────────────────────────────┐
  │ Escenario de  │ Ejemplo de Prompt                          │ Qué aporta la Skill                                    │
  │ Real Estate   │                                            │                                                        │
  ├───────────────┼────────────────────────────────────────────┼────────────────────────────────────────────────────────┤
  │ Carga de      │ "Usa next-best-practices para optimizar la │ Implementará patrones para evitar "data waterfalls",   │
  │ Propiedades   │ carga de datos en la página de detalles de │ usará Suspense correctamente y decidirá entre Server   │
  │               │ propiedad."                                │ Components o Client Components.                        │
  │ Manejo de     │ "Necesito renderizar la galería de la      │ Configurará next/image con los atributos sizes         │
  │ Imágenes      │ propiedad. Aplica next-best-practices para │ correctos, prioridad de carga para la imagen principal │
  │               │ las imágenes."                             │ (LCP) y placeholders de carga.                         │
  │ SEO y Redes   │ "Genera los metadatos dinámicos para cada  │ Configurará generateMetadata de forma óptima para que  │
  │ Sociales      │ propiedad usando la skill."                │ cada casa tenga su propio título, descripción y tags   │
  │               │                                            │ de OpenGraph para compartir en redes.                  │
  │ Manejo de     │ "Crea una página de 'Propiedad no          │ Implementará not-found.tsx y error.tsx de forma que    │
  │ Errores       │ encontrada' siguiendo las best practices." │ los errores no rompan toda la aplicación y se manejen  │
  │               │                                            │ con elegancia.                                         │
  │ Migración v16 │ "Revisa si mi proxy (middleware) cumple    │ Validará el cambio de middleware.ts a proxy.ts y el    │
  │               │ con las convenciones de Next.js 16."       │ uso de las nuevas APIs asíncronas de cookies() y       │
  │               │                                            │ params.                                                │
  └───────────────┴────────────────────────────────────────────┴────────────────────────────────────────────────────────┘



  3. Beneficios Técnicos para tu Stack
   * RSC Boundaries: Evita que el cliente descargue JavaScript innecesario separando correctamente el código del servidor y
     del cliente.
   * Async Patterns: Asegura que el manejo de searchParams (filtros) y cookies (auth) se haga de forma asíncrona como exige
     Next.js 15+.
   * Hydration Errors: Ayuda a prevenir y debugear esos molestos errores donde el HTML del servidor no coincide con el del
     cliente (común al usar fechas o APIs del navegador).


  Cómo invocarla
  No necesitas comandos extra, solo dime: "Usa la skill next-best-practices para [tu tarea]". Yo consultaré sus reglas
  internas para asegurarme de que cada línea de código sea "Vercel-certified".
---
### vercel-react-best-practices
npx skills add https://github.com/vercel-labs/agent-skills --skill vercel-react-best-practices

### next-cache-components
npx skills add https://github.com/vercel-labs/next-skills --skill next-cache-components

---
### Supabase
npx skills add https://github.com/supabase/agent-skills --skill supabase-postgres-best-practices

### Quick Guide
Quick Guide: Using supabase-postgres-best-practices


  This skill is essential for ensuring your database is fast, secure, and scalable. Use it in these common scenarios:


  1. Optimizing Query Performance
  When a page is loading slowly or you're writing complex queries.
   * Prompt Example: "Usa la skill supabase-postgres-best-practices para revisar mi consulta de búsqueda de propiedades. ¿Me
     faltan índices o debería usar un índice compuesto?"


  2. Designing Secure RLS Policies
  When configuring access rules to ensure they are both secure and performant.
   * Prompt Example: "Usa la skill supabase-postgres-best-practices para auditar mis políticas RLS en la tabla properties.
     Asegúrate de que no causen problemas de rendimiento al escalar."


  3. Data Modeling & Schema Design
  When adding new tables or modifying existing ones.
   * Prompt Example: "Voy a añadir una tabla para inquiries. Usa la skill supabase-postgres-best-practices para sugerir los
     tipos de datos más eficientes y las claves foráneas necesarias."


  4. Handling High Concurrency
  When building features like a bidding system or real-time updates where multiple users might update the same data.
   * Prompt Example: "Usa la skill supabase-postgres-best-practices para sugerir una estrategia de bloqueo (locking) segura
     para mi sistema de reservas de visitas."


  Key Categories Available:
   * Query Performance: Indexing strategies, avoiding SELECT *, etc.
   * Security & RLS: Best practices for Row-Level Security.
   * Schema Design: Primary keys, foreign keys, and naming conventions (lowercase).
   * Connection Management: Connection pooling and limits.
   * Data Access: Batch inserts, upserts, and efficient pagination.


  Necessary Configuration
  No extra software configuration is needed to use the knowledge of this skill. However, to apply the suggestions effectively:
   1. Supabase CLI: Ensure you continue using the CLI (npx supabase) for migrations so changes are tracked.
   2. Environment Variables: Keep your NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY updated in your .env file
      (which I will never print or log).


  To use it, simply mention "usa la skill supabase-postgres-best-practices" before any database-related request.


### shadcn
npx skills add https://github.com/shadcn/ui --skill shadcn

#### Configurar el skill y los componenetes
 1. Initial Setup (One-time)
  First, you need to initialize shadcn in your project to create the components.json configuration file and setup the utility
  functions.
   * Command: npx shadcn@latest init
   * Choices: Select "New York" style (classic) and "Slate" or "Zinc" as the base color. Ensure it detects your
     app/globals.css and tailwind.config.mjs.


  2. Adding Components
  shadcn/ui is not an npm package you install once; you add only the components you need. They will be placed in
  components/ui/.
   * Command: npx shadcn@latest add [component]
   * Examples:
       * npx shadcn@latest add button
       * npx shadcn@latest add dialog (Great for your filters!)
       * npx shadcn@latest add table (Perfect for the properties dashboard)

### 