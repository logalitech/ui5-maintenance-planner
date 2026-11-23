# Planificación de avisos

Máster en Fiori SAPUI5 de Logali Tech, clase 10: aplicación SAP Fiori elements (List Report y Object Page para OData V4, en TypeScript) del proyecto "Avisos de mantenimiento". Es la bandeja del planificador y comparte servicio con la aplicación freestyle de la clase 9 (`logalitech/ui5-maintenance-requests`).

## Cómo empezar

```bash
git clone https://github.com/logalitech/ui5-maintenance-planner.git maintenance-planner
cd maintenance-planner
npm install
```

En la raíz del proyecto se crea el fichero `.env` con el usuario y la contraseña del servicio, que figuran en el documento 9.12 del aula virtual:

```text
FIORI_TOOLS_USER='<usuario>'
FIORI_TOOLS_PASSWORD='<contraseña>'
```

El fichero `.env` no se sube al repositorio: el `.gitignore` ya lo excluye.

```bash
npm start
```

La rama `main` es el punto de partida: la aplicación generada con SAP Fiori tools (historia HU-09), la especificación en `docs/` y los agentes en `.claude/agents/`. Cada historia se trabaja en una rama propia creada desde la anterior, por ejemplo `git switch -c hu-10-bandeja`.

## Ramas

| Rama | Historia | Contenido |
|---|---|---|
| `main` | HU-09 | Aplicación generada, especificación y agentes. Punto de partida |
| `10-hu10-bandeja` | HU-10 | Columnas, filtros, orden y criticidad de la bandeja |
| `11-hu11-detalle` | HU-11 | Cabecera, indicadores y secciones del detalle |
| `12-hu12-acciones` | HU-12 | Acciones de negocio con anotaciones, sin código |
| `13-hu13-vista-previa` | HU-13 | Vista previa de adjuntos con el Flexible Programming Model, hecha con cuatro agentes |
| `14-hu14-indicadores` | HU-14 | Página propia de indicadores (tarea) |

Para comparar el trabajo propio con la solución de una historia:

```bash
git diff --stat origin/11-hu11-detalle origin/12-hu12-acciones
```

## Documentación

| Fichero | Contenido |
|---|---|
| `docs/brief.md` | Resumen del proyecto y de la aplicación |
| `docs/arquitectura.md` | Páginas, capas de anotaciones y puntos de extensión |
| `docs/servicio.md` | Referencia del servicio OData V4 |
| `docs/adr/` | Decisiones de arquitectura |
| `docs/especificacion/` | Historias de usuario HU-09 a HU-14 |
| `CLAUDE.md` | Contexto y convenciones para el asistente |
| `.claude/agents/` | Agentes planificador, desarrollador, probador y revisor |

## Comandos

| Comando | Uso |
|---|---|
| `npm start` | Vista previa contra el servicio real |
| `npm run start-mock` | Vista previa con el servidor simulado |
| `npm run ts-typecheck` | Comprobación de tipos |
| `npm run lint` | Reglas de ESLint de SAP Fiori tools |
| `npx @ui5/linter` | Reglas del linter de UI5 |
