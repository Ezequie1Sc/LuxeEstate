
- permitir crear propiedades nuevas o editar la información de una propiedad que se tenga en la base de datos, la imagen de referencia para el formulario se especifica en la imagen @/.gemini/resources/add_edit_property_form/screen.png; tambien puedes utilizar como código base el contenido del archivo @/.gemini/resources/add_edit_property_form/code.html; recuerda que debes utilizar el MCP agent7 para validar el uso de las mejores prácticas de código y para lo componentes de la pantalla utiliza shadcn.

- Debes incluir la navegación desde el dashboard adminsitrativo a la pagina de edición o al presionar el boton nueva proiedad a la página de creación de nueva propiedad

- También debes implementar un bucket en supabase para la carga de las imágenes de las propiedades 

- Es fundamenteal que el diseño se alinee a los archivos @guidelines.md y @instructions.md para crear la página. recuerda consultar el archivo @best-practices.md para mantener las mejores prácticas para aplicaciones de real-estate.

- la estrategia de implementación debes validarla iutilizando skill-router y el mcp context7 para garantizar el uso de las herramientas adecuadas así como código actualizado.
---
He habilitado las políticas RSL para la tabla properties en Supabase, pero ahora no puedo acceder a las propiedades desde mi sitio. Necesito tu ayuda para configurar las políticas RSL correctamente para que mi sitio pueda consultar las propiedades guardadas en la base de datos.

Quiero que me ayudes a:
1. Revisar la configuración actual de las políticas RSL para la tabla properties.
2. Sugerir cambios específicos que permitan el acceso a las propiedades en función de los roles de usuario, como Administrador, Vendedor, Cliente, Agente Inmobiliario.
3. Proporcionar ejemplos de consultas o código que se pueda usar para verificar si las políticas están funcionando correctamente.
4. Asegurarte de que las políticas sean seguras y no expongan datos sensibles.

El resultado que espero es un conjunto de instrucciones claras que incluyan:
- Un resumen de las políticas RSL actuales y sus limitaciones.
- Las modificaciones recomendadas para garantizar el acceso adecuado.
- Ejemplos de consultas para probar el acceso a las propiedades.
- Buenas prácticas para mantener la seguridad de los datos en la configuración de políticas.

Con esta información, espero poder ajustar correctamente las políticas y acceder a los datos de propiedades desde mi sitio en LUXE ESTATE.

---
Analiza el proceso de upload de imagenes en el flujo de edición de una propiedad o creación de una nueva propiedad utilizando skill-router, debido a que al momento de intentar subir las imágenes de una propiedad debemos utilizar un bucket de Supabase, para ello debemos configurar un nuevo bucket en supabase, utiliza skill-router para determinar que skill de las que tengo instaladas es la mejor para realizar esta tarea, recuerda que tambien cuentas con el mcp de supabase configuado

---

We are currently working on the image upload process for editing or creating property listings using skill-router. The goal is to integrate a Supabase bucket for image storage, which requires configuring a new bucket in Supabase. We need to determine the most suitable skill from the ones we have installed for this task, as we also have the Supabase MCP configured.

I want you to analyze the image upload process within this context and identify the best skill to manage the integration with Supabase. 

I also want you to perform the following steps:
1. Review the skills currently installed in skill-router to identify those that could handle image uploads effectively.
2. Assess the requirements for configuring a new bucket in Supabase, including permissions and settings.
3. Provide a step-by-step guide on how to set up the new bucket in Supabase.
4. Detail how to connect the chosen skill to the Supabase bucket for seamless image uploads.
5. Include any potential challenges or considerations we should be aware of while integrating these systems.

The outcome I want here is a comprehensive report that includes:
• A list of the skills available in skill-router with a brief description of their capabilities related to image uploads.
• Clear instructions on how to configure the new Supabase bucket, including necessary settings.
• A summary of how to connect the selected skill to the Supabase bucket, along with any relevant code snippets or configuration examples.
• An outline of potential issues that could arise during the integration and suggested solutions.

This report will help our team at LUXU ESTATE ensure a smooth image upload process and enhance the property listing experience.