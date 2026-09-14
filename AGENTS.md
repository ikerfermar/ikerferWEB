# AGENTS.md — Instrucciones para agentes IA

Este documento define cómo añadir y modificar contenido en este proyecto.
Léelo completo antes de hacer cualquier cambio.

## Qué hace este proyecto

Web estática desplegada en GitHub Pages para organizar apuntes de FP.
Una sola página (SPA) sin framework. Sin build step. Sin dependencias locales.

## Cómo añadir una Unidad de Trabajo

### 1. Edita `data/structure.json`

Localiza el módulo correspondiente y añade un objeto al array `unidadesTrabajo`:

{
  "id": "ut-03",
  "codigo": "UT 3",
  "nombre": "Título de la unidad",
  "contenidos": [
    {
      "id": "teoria-03",
      "titulo": "Contenido teórico",
      "tipo": "teoria"
    },
    {
      "id": "practica-03",
      "titulo": "Actividad práctica",
      "tipo": "practica"
    }
  ]
}

El `id` de cada UT y de cada contenido debe ser único dentro del módulo. Usa kebab-case sin espacios ni tildes.

### 2. Crea el archivo Markdown

La ruta del archivo sigue siempre este patrón:

content/[id-ciclo]/[id-modulo]/[tipo]/[id-contenido].md

Ejemplo:
content/instalaciones-telecomunicaciones/sostenibilidad-aplicada-sistema-productivo/teoria/teoria-03.md

### 3. Formato del Markdown

Empieza siempre con un H1 con el título del contenido:

# Título del contenido

El resto es Markdown estándar: párrafos, listas, bloques de código, tablas, imágenes.
Para imágenes, súbelas a content/[ciclo]/[modulo]/img/ y referéncialas con ruta relativa.

## Cómo añadir un módulo nuevo

1. Añade el objeto del módulo en `structure.json` dentro del ciclo correspondiente.
2. Incluye `codigo`, `descripcion`, `fuenteDescripcion`, `resultadosAprendizaje`, `fuenteResultados`, `legislacion` y `programacion`.
3. En `programacion`, indica `curso`, `centro` y la ruta local `archivo`. Si el PDF aún no existe, deja `archivo` vacío para que la web no genere un enlace roto.
4. Guarda las programaciones en `content/[ciclo]/[modulo]/programacion/`.
5. Crea la carpeta `content/[ciclo]/[modulo]/teoria/` y `content/[ciclo]/[modulo]/practica/`.
6. Añade al menos una Unidad de Trabajo siguiendo las instrucciones anteriores.

Ejemplo de los metadatos propios de un módulo:

{
  "codigo": "0000",
  "descripcion": "Descripción didáctica y profesional del módulo.",
  "fuenteDescripcion": "https://...",
  "resultadosAprendizaje": ["Primer resultado de aprendizaje."],
  "fuenteResultados": "https://...",
  "legislacion": [
    {
      "ambito": "Estatal",
      "tipo": "Currículo básico",
      "nombre": "Nombre de la norma",
      "url": "https://..."
    }
  ],
  "programacion": {
    "curso": "2026/2027",
    "centro": "Nombre del centro",
    "archivo": "content/ciclo/modulo/programacion/programacion.pdf"
  }
}

## Cómo añadir un ciclo nuevo

1. Añade el objeto del ciclo en `structure.json` dentro de la familia correspondiente.
2. Sigue el mismo proceso que para módulos.

## Cómo añadir una familia profesional nueva

1. Añade el objeto de familia en el array raíz `familias` de `structure.json`.
2. Sigue el mismo proceso que para ciclos.

## Lo que NO debes tocar nunca

- index.html
- assets/css/style.css
- assets/js/app.js

Estos archivos solo se modifican si hay un bug o una mejora de funcionalidad explícita.
El contenido se gestiona únicamente a través de structure.json y archivos Markdown.

## Convenciones de nombrado

- IDs en kebab-case: "redes-locales", "ut-01", "teoria-01", "practica-03"
- Sin tildes ni caracteres especiales en IDs ni nombres de archivo
- Títulos con tildes y formato natural en el campo "titulo" del JSON
- Los ciclos pueden incluir el campo `nivel` y los módulos el campo `codigo` para mostrarlos en la interfaz

## Estilo editorial

- El contenido se dirige principalmente al alumnado de Formación Profesional.
- Usa un tono profesional, claro, directo y didáctico.
- La interfaz general usa la pila tipográfica de sistema y la escala de tamaños de GitHub Primer: 16 px para el cuerpo, 20 px para títulos intermedios y 32 px para títulos principales.
- El espaciado de interfaz sigue la retícula de GitHub Primer: 4, 8, 16, 24 y 32 px como pasos principales, con una densidad compacta y controles de al menos 32 px.
- Los contenidos de teoría y práctica conservan Computer Modern como fuente de lectura; el código usa una pila monoespaciada de sistema.
- Los párrafos descriptivos o explicativos se muestran justificados y con sangría de primera línea.
- Evita sangrar títulos, etiquetas, listas, tablas, bloques de código y textos breves de interfaz.
