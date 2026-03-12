Ahora continuaremos con la construcción del dashboard administrativo, para ello vamos a integrar la funcionalidad que corresponde al Dashboard de propiedades que permita:
- Visualizar todos las propiedades que actualmente se encuentran en la base de datos, el diseño del dashboard debe ser igual al que se especifica en la imagen @/.gemini/resources/property_management_dashboard/screen.png; puedes utilizar como código base el contenido del archivo @/.gemini/resources/property_management_dashboard/code.html; recuerda que debes utilizar el MCP agent7 para validar el uso de las mejores prácticas de código.

- Los usuarios con rol administrador, Vendedor y Agente inmobiliario son los únicos que pueden acceder a la pantalla de dashboard de propiedades

- Es fundamenteal que el diseño se alinee a los archivos @guidelines.md y @instructions.md para crear la página. recuerda consultar el archivo @best-practices.md para mantener las mejores prácticas para aplicaciones de real-estate.

- Asegurate que el navbar funcione de igual manera al navbar que se tiene para el dashboard de usuarios en @/app/admin/users/page.tsx, debes incluir la navegación al nuevo dashboard de propiedades.

- Es importante que implementes un mecanismo de paginación para las propiedades con el objetivo de evitar que se carguen todas las propiedades de manera inicial, un número de propiedades adecuado por página es 10; para ello puedes utilizar el mcp context7 para validar la mejor estrategia al momento de realizar esta tarea.

- Tambien debes implementar el mecanismo de filtros de búsqueda, como lo hemos implementado en el HomeScreen (@/app/page.tsx) que inoca al componente modal @FilterModal.tsx

---

We are currently developing an administrative dashboard for property management. This dashboard needs to integrate a feature that allows users to view all properties stored in our database. To achieve this, we will base the design on the specifications found in the image located at @/.gemini/resources/property_management_dashboard/screen.png. You can use the code from the file @/.gemini/resources/property_management_dashboard/code.html as a foundation. It is crucial to validate the code against best practices using the MCP agent7.

I want you to create the dashboard with the following requirements:

1. Ensure the design aligns with the guidelines in @guidelines.md and @instructions.md.
2. Refer to @best-practices.md to implement best practices for real estate applications.
3. Make sure the navigation bar functions the same as the one in the user dashboard at @/app/admin/users/page.tsx, and include navigation to the new property dashboard.
4. Implement pagination for the properties to limit the initial load to 10 properties per page. Use the mcp context7 for optimal pagination strategies.
5. Incorporate a search filter mechanism, similar to the one in the HomeScreen found at @/app/page.tsx, which calls the @FilterModal.tsx component.

The outcome I want here is a fully functional property management dashboard that includes:

- A user-friendly interface displaying properties in line with the specified design.
- The navigation bar that mirrors the user dashboard, with proper links.
- Pagination that effectively limits the display to 10 properties at a time.
- A working search filter that allows users to easily find properties.

This dashboard should be ready for testing and align with all mentioned guidelines and best practices.