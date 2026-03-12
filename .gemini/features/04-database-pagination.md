crea una nueva rama con el nombre feature/002-database-pagination
---

En tu asistente de gemini proporciona el siguiente prompt
Vamos a crear la base de datos en supabase, porfavor usa el MCP de Supabase que ya se encuentra configurado y crea las propiedades en la base de datos.
También debes implementar en el HomeScreen el mecanismo de páginación para las propiedades del lado del servidor usando las funciones de Next.js
---

Es necesario que implementemos las propiedades "Featured Collection", para ello necesitamos que se agregue un campo en la tabla de properties de la base de datos de supabase que nos permita indicar si una propiedad es marcada como "Featured".