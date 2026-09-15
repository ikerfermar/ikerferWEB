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

## Imágenes en teoría y práctica

- Guarda las figuras del módulo en `content/[ciclo]/[modulo]/img/`. Desde un Markdown de `teoria/` o `practica/`, usa una ruta como `../img/asg.svg`; la web la resuelve respecto al archivo Markdown también en GitHub Pages.
- Prioriza fotografías e infografías útiles publicadas por fuentes identificables, con permisos de uso comprobados. Crea esquemas propios solo cuando un recurso existente no permita explicar bien el concepto. Evita fotografías decorativas, iconos repetidos o imágenes que dupliquen el texto.
- Cada imagen necesita un texto alternativo que explique su función. Si es un gráfico, indica además la unidad, el periodo, el ámbito y la fuente de los datos.
- Incluye un pie visible cuando haya una fuente, una fecha o una interpretación que el alumnado deba recordar. Puedes utilizar `figure`, `img` y `figcaption` en el Markdown; la web conserva estas etiquetas.
- Si la figura se ha creado para el proyecto, no añadas «esquema propio» ni «elaboración propia» al pie: describe únicamente lo que ayuda a interpretar. Conserva siempre la atribución y licencia de recursos externos.
- No subas páginas escaneadas, imágenes de libros o fotografías ajenas sin comprobar los permisos de uso. Un enlace a la fuente original es preferible a reproducir material protegido.
- Para fotos compartidas por portada, tarjetas y cabeceras, usa `assets/img/` y declara una única `imagen` en el ciclo o módulo. En los Markdown de sostenibilidad, la ruta relativa hasta esta carpeta es `../../../../assets/img/nombre.jpg`.
- Declara autor, enlace al archivo original y licencia en `imagenCredito` para fotografías de ciclos y módulos. En teoría y prácticas, añade esa atribución junto a la imagen y un pie que indique qué ilustra; una fotografía ilustrativa nunca sustituye los datos y fuentes del caso.

Ejemplo:

```html
<figure>
  <img src="../img/asg.svg" alt="Tres dimensiones ASG conectadas con un mismo proceso empresarial">
  <figcaption>Los aspectos ambientales, sociales y de gobernanza pueden coincidir en una decisión.</figcaption>
</figure>
```

## Cabecera de teoría

La cabecera identifica el documento y el módulo sin repetir UT ni RA; esa relación se establece en el índice y en el desarrollo del contenido.

```markdown
# Título de la unidad

**Nombre del módulo**\
Curso y ciclo formativo

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

Mantén también esta cabecera breve. No añadas UT, RA ni modalidad de trabajo como una tercera línea de metadatos.

```markdown
# Práctica X.X - Título

**Nombre del módulo**\
Curso y ciclo formativo

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

### 1.3. Entrega

Captura, tabla, fichero, cálculo, diagrama o texto que debe quedar en la entrega. Si se pide una justificación o una respuesta extensa, indica un rango concreto de palabras.

## Entregas

- **Entrega 1:** contenido y formato.
- **Entrega 2:** contenido y formato.

## Criterios de evaluación

| Criterio | Puntos | Indicadores de corrección |
|---|---:|---|
| Criterio 1 | X | Aspecto observable |
| **Total** | **10** | |

## Puntos clave de revisión

- **Requisito:** error frecuente o comprobación importante.
```

Las prácticas deben parecer encargos profesionales. Sus preguntas deben exigir aplicar, comparar, interpretar, justificar o decidir; las definiciones pertenecen a la teoría salvo cuando sean necesarias para justificar una decisión.

Nombra cada práctica con el número de la UT y su posición dentro de ella: `Práctica 1.1 - Título`, `Práctica 1.2 - Título`, `Práctica 2.1 - Título`, etc.

Si una tarea forma parte de un proyecto integrador y se presenta como tal al alumnado, puede titularse `Proyecto: Título` en lugar de llevar número de práctica. Mantén idénticos el título del índice y el H1 del Markdown.

Si una práctica ofrece descarga Word, pon un título `####` inmediatamente antes de cada tabla o campo de respuesta en sus secciones `### X.X. Entrega`. El Word recoge únicamente esos títulos, las tablas vacías y espacios para redactar; **no incluye** contexto, instrucciones, fuentes, imágenes ni rúbrica. Diseña las columnas pensando en la respuesta esperada y evita añadir columnas que el alumnado no necesite rellenar. Si una tarea requiere una memoria propia, prescinde de tablas para completar y marca `"descargarWord": false` en `structure.json`.

Incluye en la rúbrica criterios de presentación gráfica y redacción, además de los criterios de contenido. Da rangos de palabras a cada justificación y apartado de la entrega, y aclara si referencias y títulos cuentan en el cómputo. No fijes de forma general una única sesión o tamaño de grupo en la cabecera del enunciado: cada docente puede adaptar la duración y la organización.

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
