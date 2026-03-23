# Prompt: Integración de Autenticación Social (Google & GitHub) en LUXU ESTATE

Utiliza el agente conductor/principal para orquestar detalladamente el plan arquitectónico para implementar la autenticación social basada en Supabase para **LUXU ESTATE**. El objetivo es proporcionar una experiencia de inicio de sesión fluida, segura y visualmente integrada, alineada con el estándar "Quiet Luxury". Utiliza la skill `architecting-solutions` para asegurar que todo el flujo de autenticación, desde el ruteo hasta la gestión de perfiles, trabaje armónicamente con la infraestructura de Next.js 16.

### 1. Interfaz de Autenticación y Diseño Visual
- **Contexto:** La experiencia de acceso debe sentirse como una extensión natural de la plataforma, no como un componente externo.
- **Acciones Requeridas:**
  - Implementar la pantalla de autenticación basada en el diseño de `@/prd/features/resources/social_login_and_registration/screen.png`.
  - Utilizar el código base de `@/prd/features/resources/social_login_and_registration/code.html` para la implementación final.
  - El icono de la aplicación en esta pantalla debe ser idéntico al utilizado en el `Navbar` de la `HomeScreen`.
- **Skills/Herramientas Recomendadas:** `frontend-design`, `shadcn`, `mcp context7`.

### 2. Autenticación con Supabase (Google & GitHub)
- **Contexto:** El uso de proveedores OAuth requiere una gestión precisa de las respuestas para normalizar los datos de usuario en nuestra base de datos.
- **Acciones Requeridas:**
  - Configurar Google SignIn y GitHub SignIn utilizando los clientes de Supabase.
  - **REGLA CRÍTICA:** Verificar y normalizar las respuestas de ambos proveedores, ya que retornan diferentes nombres para campos como imagen de perfil, correo electrónico y nombre de usuario.
  - En el proceso de autenticación, **prohibir el uso de caché**; la validación debe realizarse siempre en fresco.
  - Configurar Google y GitHub para que, al cerrar sesión y volver a intentar iniciarla, se solicite explícitamente la selección de cuenta (Prompt selection), permitiendo cambiar de cuenta fácilmente.
- **Skills/Herramientas Recomendadas:** `skill-router`, `supabase-postgres-best-practices`.

### 3. Integración en el Navbar y Gestión de Sesión
- **Contexto:** La visibilidad del estado de autenticación y la facilidad para cerrar sesión son fundamentales para la UX.
- **Acciones Requeridas:**
  - Implementar la funcionalidad de cierre de sesión (`Sign Out`) accesible desde el `Navbar` cuando el usuario esté autenticado.
  - Mostrar el avatar del usuario en el `Navbar` si este proviene de Google o GitHub.
  - **CONFIGURACIÓN DE SEGURIDAD:** Autorizar explícitamente los dominios de imágenes de GitHub y Google en `next.config.ts` (remotePatterns) para permitir la visualización de los avatares.
- **Skills/Herramientas Recomendadas:** `next-best-practices`.

### Entregables y Validación
- Pantalla de Login funcional y estilizada según los recursos de diseño.
- Flujo de Auth (SignIn/SignUp/SignOut) validado con Supabase.
- Configuración de `next.config.ts` actualizada con los dominios de imágenes autorizados.
- Normalización de perfiles de usuario verificada para ambos proveedores OAuth.
- Sistema de cierre de sesión que garantiza la limpieza de la sesión y el re-prompt de selección de cuenta.

> ** Alineamiento Maestro:** Todo el plan a ejecutar debe adherirse rigurosamente a `@.gemini/GEMINI.md`, respetando la paleta "Quiet Luxury" de `@.gemini/DESIGN.md` y la arquitectura estructurada de `@.gemini/ARCHITECTURE.md`. Se requiere invocar la skill `architecting-solutions` para orquestar que este flujo modular transaccional garantice una migración suave entre fronteras territoriales globales sin colapsos estructurales.