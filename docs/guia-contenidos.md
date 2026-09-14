# Guía de contenidos Markdown

Esta guía adapta a la web el estilo de los materiales LaTeX de referencia. Se aplica únicamente a los documentos de teoría y práctica; la interfaz general mantiene la tipografía y la escala de GitHub Primer.

## Criterios comunes

- Usa un tono técnico, claro, sobrio y dirigido a alumnado de Formación Profesional.
- Entra directamente en la materia. Evita introducciones genéricas, frases motivacionales, emojis y recursos infantiles.
- Explica principalmente mediante prosa. Reserva las listas para fases, requisitos, clasificaciones o comparaciones.
- Destaca en **negrita** la primera aparición de un término técnico y usa *cursiva* para extranjerismos cuando resulte natural.
- Relaciona los conceptos con situaciones profesionales, decisiones, métricas, costes, riesgos, mantenimiento, normativa o impacto.
- Evita afirmaciones absolutas: indica límites y condiciones cuando el resultado dependa del contexto.
- Utiliza párrafos relativamente breves y una jerarquía estable: `#` para el título, `##` para bloques principales, `###` para secciones y `####` solo si es imprescindible.
- Usa tablas únicamente cuando faciliten una comparación. Añade después un párrafo que interprete sus datos.
- Los bloques de código deben indicar el lenguaje, estar introducidos por una explicación y continuar con la conclusión que debe extraerse.
- Una URL de YouTube sola en su párrafo se transforma automáticamente en reproductor. No escribas un `iframe` en Markdown.
- Termina la teoría con `## Síntesis de la unidad`: un solo párrafo que conecte las ideas principales.

## Cabecera de teoría

```markdown
# Título de la unidad

**Nombre del módulo**\
Curso y ciclo formativo\
UTXX — RAX — trimestre o «Teoría»

---
```

Después de la cabecera, desarrolla el contenido con esta secuencia cuando sea apropiada:

1. fundamentos y definiciones en contexto;
2. clasificación, funcionamiento o proceso;
3. ejemplos razonados;
4. aplicación profesional;
5. normativa, estándares o referencias explicadas;
6. síntesis de la unidad.

Para destacar una conclusión o un caso, utiliza con moderación:

```markdown
> **Idea clave**
>
> Distinción o principio que el alumnado debe conservar.
```

```markdown
> **Ejemplo razonado**
>
> Situación concreta y explicación de por qué demuestra el concepto.
```

## Cabecera y estructura de práctica

```markdown
# Práctica X.X - Título

**Nombre del módulo**\
Curso y ciclo formativo\
UTXX — RAX — Práctica X.X — modalidad de trabajo

---

## Contexto y objetivos

Situación profesional que debe resolverse y finalidad de la tarea.

## 1. Primera fase

### 1.1. Objetivo

Resultado observable que debe alcanzarse.

### 1.2. Trabajo solicitado

1. Acción concreta.
2. Acción concreta.
3. Análisis o justificación.

### 1.3. Evidencia

Captura, tabla, fichero, cálculo, diagrama o texto que debe quedar en la entrega.

## Entregables

- **Entregable 1:** contenido y formato.
- **Entregable 2:** contenido y formato.

## Criterios de evaluación

| Criterio | Puntos | Indicadores de corrección |
|---|---:|---|
| Criterio 1 | X | Evidencia observable |
| **Total** | **10** | |

## Puntos clave de revisión

- **Requisito:** error frecuente o comprobación importante.
```

Las prácticas deben parecer encargos profesionales. Sus preguntas deben exigir aplicar, comparar, interpretar, justificar o decidir; las definiciones pertenecen a la teoría salvo cuando sean necesarias para justificar una decisión.

Nombra cada práctica con el número de la UT y su posición dentro de ella: `Práctica 1.1 - Título`, `Práctica 1.2 - Título`, `Práctica 2.1 - Título`, etc.

Las tablas con celdas vacías se conservan como espacios editables al descargar la práctica en Word. Diseña sus columnas pensando en la respuesta esperada y evita añadir columnas que el alumnado no necesite rellenar.

## Correspondencia con el diseño LaTeX

- Fuente de lectura: Computer Modern Serif, equivalente web de Latin Modern.
- Cuerpo: aproximadamente 17 px, con interlineado próximo a 1,7 para mantener una lectura cómoda en pantalla.
- Columna: anchura limitada y centrada, similar a una caja de texto de documento A4.
- Párrafos: justificados, sin división automática de palabras y con sangría de primera línea.
- Títulos: sin sangría, con separación vertical clara y sin ornamentación innecesaria.
- Código: tipografía monoespaciada, fondo gris claro, borde fino y ajuste horizontal seguro.
- Tablas: bordes discretos, cabecera diferenciada y desplazamiento horizontal en pantallas estrechas.

## Evita

- Repetir en el índice un título distinto del H1 del documento.
- Dejar tablas o código sin explicación.
- Enumerar legislación sin explicar su utilidad.
- Convertir toda la explicación en listas.
- Acumular avisos, recuadros o vídeos sin una finalidad didáctica concreta.
- Cerrar con fórmulas como «en resumen, hemos aprendido».
