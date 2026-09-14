# Apuntes de Formación Profesional

Web estática de una sola página para organizar apuntes de Formación Profesional por familias, ciclos, módulos y unidades de trabajo con teoría y prácticas.

## Características

- Sin framework y sin build step.
- Sin dependencias locales.
- Carga dinámica de estructura y contenido con `fetch()`.
- Búsqueda por título, módulo y contenido de los apuntes.
- Enlaces directos a cada tema mediante rutas hash compartibles.
- Renderizado Markdown seguro en cliente con una versión fijada de `marked.js`.
- Tema claro y oscuro con diseño adaptable a móvil.
- Compatible con GitHub Pages usando rutas relativas.

## Estructura del proyecto

- `index.html`
- `assets/css/style.css`
- `assets/js/app.js`
- `data/structure.json`
- `content/[ciclo]/[modulo]/[tipo]/[tema].md`
- `AGENTS.md`

## Ejecutar en local

Por seguridad del navegador (CORS), `fetch()` no funciona correctamente abriendo `index.html` directamente con doble clic.

Opciones recomendadas:

1. Usar la extensión Live Server en Visual Studio Code.
2. O lanzar un servidor simple, por ejemplo con Python:

```bash
python -m http.server 5500
```

Luego abrir `http://localhost:5500`.

## Despliegue en GitHub Pages

1. Sube el repositorio a GitHub.
2. Ve a Settings > Pages.
3. En Build and deployment, selecciona:
   - Source: Deploy from a branch
   - Branch: `main` (root)
4. Guarda los cambios.
5. GitHub publicará la web en la URL de Pages del repositorio.

## Flujo de contenido

1. Editar `data/structure.json` para añadir familias, ciclos, módulos, unidades de trabajo o contenidos.
2. Crear el archivo Markdown en `content/[ciclo]/[modulo]/[tipo]/[id-contenido].md`.
3. La SPA lo detecta automáticamente en el menú lateral.
