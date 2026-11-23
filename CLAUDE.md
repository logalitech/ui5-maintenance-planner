## Proyecto

Aplicación SAP Fiori elements "Planificación de avisos" (id sapui5.maintenanceplanner), plantilla List Report y Object Page para OData V4, en TypeScript, sobre el servicio RAP OData V4 con borrador del proyecto "Avisos de mantenimiento". La especificación está en docs/: lee docs/brief.md, docs/arquitectura.md, docs/servicio.md (apartado 13) y la historia que se te pida en docs/especificacion/ antes de cambiar nada.

## Guidelines for UI5

Use the `get_guidelines` tool of the UI5 MCP server to retrieve the latest coding standards and best practices for UI5 development. Antes de usar una API, una anotación o un ajuste del manifest.json de Fiori elements que no sea trivial, consúltalo con `get_api_reference` o en la documentación de SAPUI5: la versión del proyecto es la 1.148 y no se usan API obsoletas.

## Convenciones

- La interfaz se construye con anotaciones en webapp/annotations/annotation.xml, con el alias SAP__self para el espacio de nombres del servicio. No se modifican webapp/localService/ ni los metadatos del servicio.
- Los textos de las anotaciones se escriben con {@i18n>clave}. Las claves van en webapp/i18n/i18n.properties (inglés) y webapp/i18n/i18n_es.properties (español), con su comentario de tipo de texto (#XTIT, #XFLD, #XBUT, #XMSG, #YMSG).
- Los ID de las facetas son General, Execution, Tasks, Parts y Attachments, y no se cambian.
- La configuración de las páginas va en sap.ui5.routing.targets del manifest.json.
- El código propio solo va en webapp/ext/ y solo en las historias del Flexible Programming Model: TypeScript estricto, sin any, sin fetch ni XMLHttpRequest.
- No se modifican los ficheros de docs/, salvo docs/plan/, que escriben los agentes.

## Agentes

En .claude/agents/ hay cuatro agentes: planificador-ui5 (plan de una historia, sin tocar webapp/), desarrollador-ui5 (implementa el plan), probador-ui5 (prueba en el navegador) y revisor-ui5 (revisa convenciones y validaciones). Se usan en ese orden y nunca en paralelo.

## Comprobaciones obligatorias al terminar

npm run ts-typecheck, npm run lint y npx @ui5/linter, sin errores, y run_manifest_validation del servidor MCP de UI5 sobre webapp/manifest.json. No arranques ningún servidor salvo que la historia o el agente probador lo necesiten; en ese caso, usa un puerto libre a partir del 8140 y páralo al terminar.
