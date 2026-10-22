# Sistema visual y experiencia educativa

## Taller práctico: IA de cero a Agentes

**Estado:** especificación implementable para GitHub Pages  
**Alcance:** dirección visual, experiencia de aprendizaje, uso de marca, animaciones didácticas y control de calidad  
**Principio rector:** *antes de construir con IA, construimos sus cimientos*.

---

## 1. Resultado visual buscado

La web debe sentirse como una plataforma educativa corporativa internacional: clara, confiable, contemporánea y humana. No debe parecer una landing genérica de tecnología ni una colección de efectos morados.

La experiencia se organiza como una construcción que avanza en cuatro etapas:

1. **Cimientos — Configuración y fundamentos:** preparar el terreno antes de pedir resultados.
2. **Planos — Prompts:** describir con precisión qué se desea construir.
3. **Caja de herramientas — Skills:** convertir un buen método en una capacidad reutilizable.
4. **Equipo coordinado — Agentes y subagentes:** delegar trabajo con objetivos, límites y revisión.

Cada clase debe responder visualmente, antes de entrar a los detalles, estas cinco preguntas:

- ¿Qué voy a aprender?
- ¿Para qué me sirve?
- ¿Qué necesito antes de empezar?
- ¿Qué voy a practicar?
- ¿Qué me llevo al terminar?

### Criterio editorial

- **Hero y cierre:** negros, cinematográficos y de alto impacto.
- **Contenido de aprendizaje:** fondo blanco o marfil muy claro, lectura amplia y aireada.
- **Bloques demostrativos:** paneles oscuros puntuales para animaciones, terminales y comparaciones.
- **Color:** morado como jerarquía y acción, no como sustituto de estructura.
- **Orbit:** guía pedagógico con una función concreta; no adorno repetido en cada pantalla.

---

## 2. Activos auditados y autoridad de marca

### 2.1 Archivos disponibles en `assets/corporate_v3`

| Archivo | Dimensiones | Función recomendada |
|---|---:|---|
| `logo-ai-academy.png` | 1796 × 876 | Firma oficial en navegación oscura, hero y cierre |
| `clase-1-configuracion.png` | 1672 × 941 | Portada visual de la clase 1 |
| `clase-2-prompts.png` | 1672 × 941 | Portada visual de la clase 2 |
| `clase-3-skills.png` | 1672 × 941 | Portada visual de la clase 3 |
| `clase-4-agentes.png` | 1672 × 941 | Portada visual de la clase 4 |
| `orbit-presenta.png` | 685 × 1305 | Orbit presenta una idea, resumen o resultado |
| `orbit-senala.png` | 641 × 1265 | Orbit señala un paso, advertencia o acción |

### 2.2 Logo oficial

El hash SHA-256 de `assets/corporate_v3/logo-ai-academy.png` es:

`d170df592c697ae425f2b1255202ee4c1f0bca99680d2f6c0979f134e5aa1462`

Coincide exactamente con el activo canónico `logo-ai-academy-dark-surface.png` de la skill oficial de logos de Campuslands.

Reglas obligatorias:

- Usar el PNG completo. No redibujar, vectorizar, recolorear, recortar ni quitar el descriptor `BY campuslands gt`.
- El fondo negro es parte del archivo. Colocarlo sobre una región negra continua para que no parezca una tarjeta rectangular.
- Mantener `width` y `height` intrínsecos, `height:auto` y `object-fit:contain`.
- Ancho sugerido: **184 px en móvil** y **220 px en escritorio**; validar el descriptor al tamaño real.
- Reservar alrededor del logo un aire mínimo equivalente al **8 % de su ancho visible**, además de una distancia mínima al borde del **4 % del lado corto** del contenedor.
- No aplicar sombra, contorno, brillo, textura ni opacidad.
- No situarlo encima de texto, controles, caras, Orbit o zonas visualmente ruidosas.
- Texto alternativo cuando sea enlace: `AI Academy by Campuslands GT — Inicio`.

### 2.3 Uso correcto de Orbit

Orbit mantiene siempre:

- casco blanco redondeado y compacto;
- visor negro opaco con rostro de píxeles azul eléctrico;
- traje blanco acolchado con piezas azul marino;
- panel pectoral azul con dos lentes circulares, pantalla cuadrada y módulos canónicos;
- dos mangueras blancas y mochila blanca segmentada;
- bandera de Guatemala en el brazo superior izquierdo;
- personalidad cercana, optimista y orientada a enseñar.

Aplicación web:

- `orbit-presenta.png`: apertura del mapa de clases, resumen y entregables.
- `orbit-senala.png`: requisitos de clase 3, advertencias de privacidad o botón de “probar ejercicio”.
- Mostrar Orbit completo o con un recorte intencional que no destruya la lectura del casco, rostro o gesto.
- No espejar la imagen: hacerlo movería la bandera y alteraría su identidad.
- No superponer globos, íconos o texto sobre rostro, panel pectoral, manos o bandera.
- No crear un Orbit diferente para cada clase. Si se requieren nuevas poses, usar las referencias canónicas de giro 360°, detalles y poses.
- Si es decorativo y la misma información aparece en texto, `alt=""`. Si aporta significado: describir la acción, por ejemplo, `Orbit señala el requisito de suscripción para la clase 3`.

---

## 3. Paleta de color

### 3.1 Paleta confirmada de AI Academy

| Token | Hex | Uso |
|---|---|---|
| `--ai-void` | `#050507` | Hero, footer, escenario de animación y soporte del logo |
| `--ai-purple` | `#7A3CFF` | Identidad, progreso, indicadores y acentos |
| `--ai-glow` | `#B997FF` | Iluminación, fondos suaves y detalles secundarios |

Distribución de referencia para escenas de marca: **70 % Void Black, 20 % AI Purple, 10 % Glow**. En las páginas educativas se invierte la lógica: predomina el blanco y la paleta de IA aparece como acento.

### 3.2 Neutros y colores funcionales

Estos colores son soporte de interfaz, no nuevos colores de marca:

| Token | Hex | Uso |
|---|---|---|
| `--paper` | `#FFFFFF` | Fondo principal de lectura |
| `--paper-soft` | `#F7F5FC` | Alternancia de secciones y tarjetas |
| `--ink` | `#17131D` | Texto principal |
| `--ink-muted` | `#5E5668` | Texto secundario; nunca para datos esenciales si pierde contraste |
| `--line` | `#E5DFEC` | Bordes y separadores |
| `--purple-action` | `#5B21B6` | Botón o enlace sobre blanco cuando `#7A3CFF` no alcance contraste suficiente |
| `--success` | `#087A55` | Respuesta correcta o ejercicio terminado |
| `--warning` | `#9A5B00` | Requisito, precaución o dato por verificar |
| `--danger` | `#B42318` | Error o práctica insegura |
| `--info` | `#1769AA` | Nota informativa |

### 3.3 Reglas de contraste

- Texto normal: contraste mínimo **4.5:1**.
- Texto grande y elementos gráficos esenciales: mínimo **3:1**.
- Controles, bordes de campos y foco: mínimo **3:1** frente a colores adyacentes.
- `#B997FF` no se usa para texto pequeño sobre blanco.
- Blanco sobre `#7A3CFF` debe validarse; para botones sobre blanco se prefiere `#5B21B6`.
- Los estados siempre combinan **color + ícono + texto**.
- Ningún conocimiento se comunica solamente con brillo, tono o animación.

### 3.4 Tokens CSS sugeridos

```css
:root {
  --ai-void: #050507;
  --ai-purple: #7a3cff;
  --ai-glow: #b997ff;
  --paper: #ffffff;
  --paper-soft: #f7f5fc;
  --ink: #17131d;
  --ink-muted: #5e5668;
  --line: #e5dfec;
  --purple-action: #5b21b6;
  --success: #087a55;
  --warning: #9a5b00;
  --danger: #b42318;
  --info: #1769aa;
  --shadow-1: 0 1px 2px rgb(23 19 29 / 8%), 0 10px 30px rgb(23 19 29 / 7%);
  --shadow-2: 0 24px 60px rgb(5 5 7 / 18%);
}
```

---

## 4. Tipografía

### 4.1 Stack web seguro

No depender de Google Fonts para que GitHub Pages cargue rápido y funcione en redes educativas restringidas.

```css
--font-sans: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
             Helvetica, Arial, "Noto Sans", sans-serif;
--font-mono: ui-monospace, SFMono-Regular, Consolas, "Liberation Mono", monospace;
```

Si Campuslands entrega archivos licenciados de Poppins/Nutmeg, pueden alojarse localmente como mejora progresiva; la métrica y el diseño deben seguir funcionando con el stack anterior.

### 4.2 Escala fluida

| Rol | Tamaño recomendado | Peso | Interlineado |
|---|---|---:|---:|
| Hero | `clamp(2.4rem, 7vw, 5.8rem)` | 800 | 0.98 |
| H1 de clase | `clamp(2rem, 5vw, 4.2rem)` | 800 | 1.02 |
| H2 | `clamp(1.6rem, 3vw, 2.6rem)` | 750 | 1.10 |
| H3 | `clamp(1.2rem, 2vw, 1.55rem)` | 700 | 1.22 |
| Texto destacado | `clamp(1.1rem, 1.4vw, 1.3rem)` | 450 | 1.55 |
| Cuerpo | `clamp(1rem, 1vw, 1.125rem)` | 400 | 1.70 |
| Etiqueta | `0.82rem` | 700 | 1.20 |
| Código/comando | `0.95rem` | 500 | 1.55 |

Reglas:

- Ancho de lectura: **62–72 caracteres**.
- Párrafo máximo: 5–7 líneas antes de una pausa visual.
- No usar mayúsculas sostenidas en párrafos o botones largos.
- Subrayar enlaces en el contenido; no confiar solo en el morado.
- Los comandos, prompts y nombres de campos usan monoespaciada, nunca bloques de imagen.

---

## 5. Retícula y espacio

### 5.1 Contenedores

- `--content-max: 1200px` para mapas, tarjetas y animaciones.
- `--reading-max: 760px` para explicación continua.
- Márgenes laterales: `clamp(20px, 5vw, 80px)`.
- Secciones: `clamp(64px, 10vw, 128px)` verticales.
- Retícula de **12 columnas** en escritorio, **6** en tableta y **4** en móvil.
- Gutter: 24 px escritorio, 20 px tableta, 16 px móvil.

### 5.2 Ritmo de 8 puntos

Usar 4, 8, 12, 16, 24, 32, 48, 64, 96 y 128 px. No introducir valores arbitrarios salvo ajuste óptico documentado.

### 5.3 Forma

- Radio pequeño: 8 px para etiquetas y campos.
- Radio medio: 16 px para tarjetas.
- Radio grande: 28 px para escenas y resúmenes.
- Bordes: 1 px neutro. El morado brillante se reserva para foco o elemento activo.
- Sombras discretas en contenido; glow solo dentro de escenarios tecnológicos oscuros.
- Prohibir “glassmorphism” bajo texto largo: afecta lectura y se vuelve ruido.

### 5.4 Composición responsive

| Rango | Comportamiento |
|---|---|
| 320–599 px | Una columna, navegación compacta, ejercicios de ancho completo, imágenes 4:3 o 16:9, controles de 44 px mínimo |
| 600–899 px | Dos columnas cuando el contenido sea paralelo; texto primero en orden DOM |
| 900–1199 px | Retícula 8–12 columnas, índice lateral opcional |
| ≥1200 px | Contenido máximo 1200 px; no estirar texto ni imágenes indefinidamente |

---

## 6. Arquitectura visual de la web

### 6.1 Inicio

1. **Barra de navegación oscura** con logo oficial, “Ruta del taller”, clases 1–4 y botón “Comenzar”.
2. **Hero oscuro**: promesa, analogía de construcción y Orbit presentando; sin exceso de texto sobre la imagen.
3. **Resumen antes del contenido**: cuatro tarjetas numeradas con título, objetivo, práctica y entregable.
4. **Animación maestra de la construcción**: vista completa de las cuatro etapas.
5. **Cómo estudiar la web**: “Mira → entiende → prueba → comprueba → guarda”.
6. **Ruta de cuatro clases** con progreso visible.
7. **Requisitos**: desde la clase 3 se necesita una suscripción de IA de pago activa; mostrarlo también dentro de la clase 3.
8. **Cierre**: qué podrá hacer la persona al completar el taller.

### 6.2 Página de cada clase

1. **Cabecera de clase:** número grande, título, objetivo, valor, duración y requisito.
2. **Imagen de clase existente** en relación 16:9, con `aspect-ratio` reservado.
3. **Mapa de puntos:** enlaces internos a cada tema.
4. Por cada punto:
   - concepto en una frase;
   - definición sin tecnicismos innecesarios;
   - “por qué importa”;
   - visual o animación;
   - ejemplo resuelto;
   - ejercicio individual;
   - pasos exactos;
   - resultado esperado;
   - criterios para revisar;
   - respuesta orientativa plegable.
5. **Mini comprobación final** de 3–5 ítems.
6. **Entregable de la clase** con opción de copiar/descargar si la implementación lo admite.
7. **Siguiente clase:** conexión explícita con la metáfora de construcción.

### 6.3 Pie de página

- Fondo `#050507` continuo.
- Logo oficial completo.
- Navegación corta, aviso de actualización de herramientas y créditos.
- Nunca convertir el footer en una nueva portada ni duplicar el CTA principal varias veces.

---

## 7. Navegación y orientación

### 7.1 Navegación principal

- Escritorio: barra fija de 72–80 px; logo a la izquierda, ruta al centro, CTA a la derecha.
- Móvil: encabezado de 64–72 px, logo legible y botón de menú con nombre accesible.
- El menú móvil abre un panel, conserva el foco dentro y devuelve el foco al disparador al cerrar.
- Incluir enlace “Saltar al contenido” visible al recibir foco.

### 7.2 Progreso de aprendizaje

Componente `CourseProgress`:

- cuatro nodos numerados, nombre corto y estado;
- estados: `no iniciado`, `en curso`, `completado`;
- el estado no depende solo del color: número, ícono y texto;
- en móvil se convierte en lista vertical o selector, no una línea comprimida;
- persistencia local opcional con `localStorage`; la web funciona si está desactivado.

### 7.3 Índice de clase

- En escritorio puede ser `sticky`, con el tema actual indicado por texto + barra.
- En móvil se presenta como “En esta clase” desplegable.
- Todos los anchors reciben `scroll-margin-top` para no quedar ocultos por la barra fija.
- Los títulos visibles coinciden con el texto de los enlaces; evitar “ver más”.

---

## 8. Componentes

### 8.1 `ClassOverviewCard`

Contenido mínimo: `Clase 1`, título, objetivo en una línea, 3 temas clave, ejercicio principal y entregable. La tarjeta completa no debe ser un gran enlace ambiguo; usar un enlace o botón explícito.

Estados:

- reposo: fondo blanco, borde neutro;
- hover: elevar 2–4 px y acentuar borde, sin cambiar distribución;
- focus-visible: outline de 3 px + offset de 3 px;
- completado: check + texto `Completada`.

### 8.2 `LearningPoint`

Bloque repetible por tema:

- etiqueta `Punto 2.3`;
- título;
- definición;
- diagrama/animación;
- ejemplo;
- ejercicio;
- comprobación.

En móvil el orden siempre es explicación → visual → práctica. Nunca dejar el ejercicio antes de la definición por un cambio de columnas CSS.

### 8.3 `ExerciseCard`

Variantes: `Prueba ahora`, `Corrige`, `Compara`, `Construye`.

Anatomía:

1. objetivo de la práctica;
2. tiempo estimado;
3. material necesario;
4. pasos numerados;
5. ejemplo base;
6. campo o espacio de respuesta;
7. botón `Ver criterios de revisión`;
8. solución orientativa plegable.

No bloquear el aprendizaje si no hay JavaScript. La versión HTML debe conservar pasos, ejemplo y criterios.

### 8.4 `BeforeAfter`

Para comparar prompt débil/fuerte, skill improvisada/reutilizable o delegación ambigua/precisa:

- escritorio: dos paneles paralelos;
- móvil: secuencia vertical `Antes` → `Después`;
- no usar un deslizador obligatorio, porque oculta información y dificulta teclado;
- marcar diferencias con resaltado, texto y etiquetas.

### 8.5 `ConceptDiagram`

Diagramas como HTML/SVG semántico, no como capturas. Cada diagrama incluye:

- título visible;
- explicación de una frase;
- leyenda textual;
- versión lineal para lectores de pantalla;
- botón `Repetir animación` si tiene movimiento.

### 8.6 `Callout`

Cuatro tipos: `Idea clave`, `Ten cuidado`, `Requisito`, `Consejo de Orbit`. Ícono, título y texto; nunca depender del color. El callout de la clase 3 debe decir explícitamente que se requiere una suscripción de IA de pago activa para realizar la práctica prevista.

### 8.7 `CopyBlock`

Para prompts y comandos:

- texto real seleccionable;
- botón `Copiar` con confirmación textual de 2–3 segundos;
- no modificar el ancho al cambiar de estado;
- mensaje accesible con `aria-live="polite"`;
- wrap legible en móvil y scroll horizontal solo para código que no pueda partirse.

### 8.8 Botones y enlaces

- Altura mínima 44 px; separación mínima 8 px.
- Primario: fondo `--purple-action`, texto blanco.
- Secundario: blanco, borde `--purple-action`, texto oscuro.
- Terciario: enlace subrayado.
- Deshabilitado: solo cuando exista una razón funcional; explicar por qué.
- Estados obligatorios: hover, focus-visible, active, disabled, loading, success y error.

---

## 9. Sistema de estados

| Estado | Tratamiento | Mensaje esperado |
|---|---|---|
| Cargando | Skeleton discreto, sin parpadeo | `Cargando el recurso…` |
| Vacío | Ilustración mínima + explicación | `Aún no has guardado una respuesta` |
| Éxito | Ícono check + texto + verde funcional | `Ejercicio guardado` |
| Advertencia | Ícono + ámbar + acción concreta | `Verifica que no incluyas datos privados` |
| Error | Título directo + causa + solución | `No se pudo copiar. Selecciona el texto manualmente.` |
| Sin conexión | Contenido textual disponible | `La explicación sigue disponible; el video no se cargó.` |
| Completado | Check + texto + siguiente paso | `Clase completada. Continúa con Prompts.` |

Las respuestas automáticas nunca deben calificar como incorrecta una redacción válida solo por no coincidir literalmente. Preferir rúbricas y autoevaluación.

---

## 10. Sistema de ilustración e imagen

### 10.1 Dirección de arte

- Cinematografía tecnológica premium en fondos oscuros.
- Materiales físicos creíbles: vidrio, metal, tela técnica, luz volumétrica controlada.
- Morado y lavanda como iluminación, no neón omnipresente.
- Personas adultas diversas cuando aparezcan estudiantes; evitar estética de banco de imágenes posado.
- Interfaces conceptuales, no copias falsas de ChatGPT, Claude o Gemini.
- No generar logos, letras, nombres de herramientas ni texto dentro de imágenes; se componen como HTML.
- Los íconos deben ser simples, consistentes y comprensibles sin depender de tendencias de UI.

### 10.2 Tratamiento de imágenes existentes

- Las cuatro imágenes de clase funcionan como portadas y como `poster` de las animaciones relacionadas.
- Usar `<picture>` con AVIF/WebP derivados y PNG como respaldo; no reemplazar los originales.
- Mantener relación 1672:941 (~16:9) y `object-fit:cover` solo si el punto focal permanece visible.
- Definir `width` y `height` para evitar salto de layout.
- No colocar texto largo dentro de las imágenes; reservar zona HTML adyacente o superposición breve con gradiente suficientemente oscuro.
- Lazy-load debajo del primer viewport; el hero prioritario usa `fetchpriority="high"`.

### 10.3 Inventario exacto de imágenes que aportan valor

**Se reutilizan 7 activos existentes; no se generan duplicados:**

1. `logo-ai-academy.png` — firma oficial.
2. `orbit-presenta.png` — guía del resumen inicial.
3. `orbit-senala.png` — requisitos/advertencias.
4. `clase-1-configuracion.png` — portada Cimientos.
5. `clase-2-prompts.png` — portada Planos.
6. `clase-3-skills.png` — portada Caja de herramientas.
7. `clase-4-agentes.png` — portada Equipo coordinado.

**Se generan únicamente 5 imágenes nuevas con el generador de imágenes de ChatGPT:**

8. `hero-construccion-ia.webp` — Orbit frente a una construcción tecnológica en cuatro niveles claramente diferenciados: base, plano, herramientas y equipo. Formato 16:9 y versión 4:5. Sin texto ni logos.
9. `poster-cimientos.webp` — corte transversal limpio de una base con cuatro capas conceptuales; espacio para etiquetas HTML externas. Formato 16:9.
10. `poster-planos.webp` — plano arquitectónico que se transforma en una secuencia ordenada de bloques de intención, contexto, criterios y formato; sin letras dentro. Formato 16:9.
11. `poster-herramientas.webp` — caja abierta con módulos reutilizables visualmente distintos, uno seleccionado y aplicado a una tarea; sin íconos ambiguos ni texto. Formato 16:9.
12. `poster-equipo-agentes.webp` — coordinador central con dos subagentes especializados, entradas/salidas y revisión humana representadas por flujo claro; sin apariencia de vigilancia o militar. Formato 16:9.

No generar más escenas decorativas. Conceptos específicos como ROCAV, hooks/loops, privacidad, flujos de agente y rúbricas se explican mejor mediante diagramas SVG/HTML accesibles que mediante imágenes fotorrealistas.

### 10.4 Prompt visual base para las cinco nuevas imágenes

Mantener esta base y cambiar solo la acción descrita en el inventario:

> Ilustración cinematográfica educativa premium para AI Academy by Campuslands. Fondo Void Black #050507, luz secundaria AI Purple #7A3CFF y reflejos Glow #B997FF; materiales físicamente creíbles, composición limpia, profundidad controlada y lectura inmediata. ORBIT debe conservar exactamente su casco blanco redondeado, visor negro opaco, rostro LED azul eléctrico, traje blanco acolchado con piezas azul marino, panel pectoral canónico, dos mangueras blancas, mochila segmentada y bandera de Guatemala en el brazo izquierdo. La escena debe explicar [CONCEPTO] con una sola metáfora visual clara. Reservar espacio negativo para texto HTML. Sin palabras, letras, números, logos, marcas de plataformas, pantallas ilegibles, extremidades extra, estética militar, exceso de neón ni elementos decorativos sin función.

Antes de generar, adjuntar como referencias: fuente original de campaña + giro 360° + detalles de Orbit. El logo oficial se añade después de forma determinista; nunca se pide al generador.

---

## 11. Cuatro visuales animados con HyperFrames

Las animaciones no son “ambientación”. Cada una debe hacer visible un modelo mental que después se aplica en el ejercicio.

### Contrato común

- Duración: 9–14 segundos, una sola reproducción al entrar al 60 % del viewport.
- Botón visible: `Repetir explicación`.
- Controles: pausar/reanudar; no reproducir audio automáticamente.
- Texto y etiquetas en HTML sincronizado, no horneado en video.
- Animar `transform` y `opacity`; evitar cambios intensivos de layout.
- Nunca parallax agresivo, giros 3D rápidos, destellos o zoom continuo.
- Al terminar, sostener el estado final para que se pueda estudiar.
- Bajo `prefers-reduced-motion: reduce`, mostrar el póster final, todas las etiquetas y la explicación textual sin transición.
- Debajo de cada pieza: `Qué ocurrió` en 2–4 pasos y una versión lineal accesible.

### 11.1 Clase 1 — Cimientos

**Idea que enseña:** una IA potente da resultados frágiles si cuenta, privacidad, memoria/contexto e instrucciones no están preparados.

**Secuencia:**

1. Aparece un terreno inestable con una estructura inclinada.
2. Cuatro bloques encajan, uno a uno: `Cuenta y acceso`, `Privacidad`, `Configuración`, `Conceptos base`.
3. Cada bloque activa una comprobación breve.
4. La plataforma queda nivelada y aparece una estructura estable marcada `Listo para construir`.

**Interacción didáctica:** seleccionar un cimiento abre una explicación de una frase y un ejemplo. Si se quita un bloque, la estructura pierde estabilidad de forma leve, sin vibración molesta.

**Ejercicio vinculado:** checklist de configuración y decisión “¿dato público, interno, confidencial o sensible?”.

**Póster/fallback:** `poster-cimientos.webp`.

### 11.2 Clase 2 — Planos

**Idea que enseña:** un prompt es un plano verificable, no una frase mágica.

**Secuencia:**

1. Una petición ambigua crea una silueta borrosa de construcción.
2. Se despliega un plano con cinco módulos del método usado en el currículo —cada etiqueta proviene del contenido final, no se inventa aquí—.
3. Los módulos se conectan en orden; la silueta gana forma y medidas.
4. Se comparan resultado ambiguo y resultado verificable.

**Interacción didáctica:** arrastrar/ordenar módulos solo como mejora; ofrecer botones `Subir/Bajar` y una alternativa accesible de selección. Mostrar por qué cada módulo reduce ambigüedad.

**Ejercicio vinculado:** transformar una solicitud cotidiana en un prompt completo y evaluarlo con rúbrica.

**Póster/fallback:** `poster-planos.webp`.

### 11.3 Clase 3 — Caja de herramientas

**Idea que enseña:** una skill encapsula instrucciones, recursos y criterios para reutilizar una capacidad de forma consistente.

**Secuencia:**

1. Una tarea aparece frente a una caja vacía; cada intento manual produce variaciones.
2. Se arma una herramienta con piezas: `Propósito`, `Instrucciones`, `Recursos`, `Criterios`.
3. La herramienta se guarda con nombre y versión.
4. La misma herramienta resuelve tres entradas distintas conservando el método.

**Interacción didáctica:** activar/desactivar cada pieza y observar qué se pierde; no simular que una skill garantiza verdad o calidad absoluta.

**Requisito visible:** antes de la práctica, callout persistente: `Para esta clase necesitas una suscripción de IA de pago activa`.

**Ejercicio vinculado:** construir, probar y mejorar una skill pequeña.

**Póster/fallback:** `poster-herramientas.webp`.

### 11.4 Clase 4 — Equipo coordinado

**Idea que enseña:** un agente coordina pasos y herramientas; los subagentes tienen responsabilidades delimitadas y la persona revisa decisiones y resultados.

**Secuencia:**

1. Una meta entra al agente coordinador.
2. El coordinador divide el trabajo en dos contratos claros.
3. Dos subagentes trabajan en paralelo; cada uno devuelve evidencia y resultado.
4. El coordinador integra, verifica y lleva el resultado a una puerta de aprobación humana.
5. Si un subagente falla, el flujo se detiene en ese punto y muestra `Revisar`, no oculta el error.

**Interacción didáctica:** tocar cada nodo revela `Objetivo`, `Entrada`, `Límite`, `Salida` y `Criterio de éxito`. El flujo debe distinguir coordinador, subagentes, herramientas y ser humano.

**Ejercicio vinculado:** diseñar y ejecutar un agente sencillo con dos subagentes, contrato de delegación y revisión final.

**Póster/fallback:** `poster-equipo-agentes.webp`.

### 11.5 Animación maestra de inicio

Reutilizar los cuatro estados finales como una línea de construcción, no crear un quinto lenguaje visual. Al navegar o hacer scroll, se iluminan Cimientos → Planos → Herramientas → Equipo. La versión reducida muestra los cuatro estados simultáneamente.

---

## 12. Microinteracciones

### Permitidas

- Tarjeta: elevación de 2–4 px en 160–220 ms.
- Botón: compresión de escala hasta 0.98 durante `active`, nunca menos.
- Progreso: transición de ancho/posición de 240–320 ms.
- Acordeón: expansión breve con el contenido disponible inmediatamente para tecnologías de asistencia.
- Copiar: check y mensaje `Copiado` sin mover elementos.
- Anchor: scroll suave solo si el usuario no solicita movimiento reducido.
- Orbit: flotación máxima 4–6 px y muy lenta únicamente en hero; desactivada al reducir movimiento.

### No permitidas

- Cursor personalizado.
- Fondos de partículas detrás de texto largo.
- Texto que aparece letra por letra como requisito para leer.
- Carruseles automáticos.
- Elementos que sigan al cursor.
- Sonidos automáticos.
- Glow pulsante continuo en botones.
- Ocultar contenido hasta que termine una animación.

### Curvas

```css
--ease-out: cubic-bezier(.2, .8, .2, 1);
--ease-standard: cubic-bezier(.4, 0, .2, 1);
--dur-fast: 160ms;
--dur-normal: 240ms;
--dur-slow: 420ms;
```

---

## 13. Movimiento reducido y rendimiento

```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
  .hf-animation { display: none; }
  .hf-static-poster { display: block; }
}
```

- No descargar video/animación pesada cuando la preferencia es reducir movimiento si el póster basta.
- Presupuesto inicial sugerido: hero ≤ 350 KB WebP/AVIF; cada imagen de clase ≤ 250 KB; poster ≤ 180 KB; JavaScript propio inicial ≤ 150 KB comprimido.
- Cargar HyperFrames solo al acercarse al viewport.
- `content-visibility:auto` en secciones largas, con cuidado de no romper búsqueda o navegación interna.
- Evitar videos de fondo. Las animaciones didácticas deben ser cortas, discretas y controlables.
- Objetivos: LCP < 2.5 s, CLS < 0.1, INP < 200 ms en un móvil de gama media y red 4G razonable.

---

## 14. Accesibilidad y comprensión

- HTML semántico con un solo H1 por página y jerarquía sin saltos arbitrarios.
- Navegación completa por teclado; foco siempre visible.
- Objetivos táctiles mínimos 44 × 44 px.
- Zoom al 200 % sin pérdida de información ni scroll horizontal global.
- Imágenes didácticas con alt que explique su enseñanza, no sus colores.
- Imágenes decorativas con alt vacío.
- Animaciones con descripción textual y estado final accesible.
- Si existe audio o video narrado: subtítulos, transcripción y control de volumen.
- No usar temporizadores en ejercicios.
- Lenguaje directo, ejemplos cotidianos y definición previa de términos como modelo, contexto, token, hook, loop, skill, agente y subagente.
- Una acción principal por bloque. No competir con tres botones de igual jerarquía.
- Mantener siempre visible qué hacer después.

---

## 15. Modo aula y proyección

Para que el mismo material funcione con estudiantes y facilitador:

- Botón `Modo presentación` opcional: aumenta texto, reduce columnas y oculta controles secundarios.
- Cada punto tiene ancla copiable para proyectar directamente.
- Diagramas deben leerse a 1366 × 768 y a distancia; etiquetas principales ≥ 24 px en modo aula.
- Evitar detalles esenciales cerca del borde.
- Los ejercicios se mantienen individuales aunque el material se proyecte.
- Añadir `Imprimir / Guardar PDF` con estilos que oculten navegación, fondos pesados y controles redundantes.

---

## 16. Criterios de QA

### 16.1 Marca

- [ ] El logo usado tiene el hash canónico indicado.
- [ ] El logo conserva proporción, fondo negro, byline y aire.
- [ ] No existe logo generado, recortado, recoloreado ni con efectos.
- [ ] Orbit conserva casco, visor, rostro LED, panel, mangueras, mochila y bandera.
- [ ] Ningún Orbit está espejado, deformado o usado como decoración repetitiva.

### 16.2 Sistema visual

- [ ] Hero/footer oscuros y contenido principal claro.
- [ ] Paleta base limitada a `#050507`, `#7A3CFF`, `#B997FF` más neutros/estados funcionales.
- [ ] La jerarquía sigue funcionando en escala de grises.
- [ ] No hay párrafos sobre fondos fotográficos sin soporte de contraste.
- [ ] Cada clase tiene identidad visual, pero todas comparten retícula, componentes y ritmo.

### 16.3 Aprendizaje

- [ ] Antes de la clase aparece objetivo, valor, requisitos, práctica y entregable.
- [ ] Cada punto incluye explicación, ejemplo, ejercicio, pasos y criterio de revisión.
- [ ] La analogía de construcción es consistente y no reemplaza la definición técnica.
- [ ] Clase 3 muestra el requisito de suscripción de pago antes de la práctica.
- [ ] Clase 4 distingue agente, subagente, herramienta y aprobación humana.
- [ ] Ninguna animación es solo decorativa; todas se conectan con un ejercicio.

### 16.4 Accesibilidad

- [ ] Contraste verificado automáticamente y revisado visualmente.
- [ ] Navegación por teclado completa y orden de foco lógico.
- [ ] Skip link, landmarks y títulos de página únicos.
- [ ] Alt, transcript y fallback estático presentes.
- [ ] `prefers-reduced-motion` evita autoplay y descargas innecesarias.
- [ ] A 320 px y 200 % de zoom no hay pérdida ni scroll horizontal global.
- [ ] Mensajes de estado se anuncian sin robar foco.

### 16.5 Responsive y rendimiento

- [ ] Pruebas a 320, 375, 768, 1024, 1366 y 1920 px.
- [ ] Las imágenes tienen tamaño intrínseco y `aspect-ratio` reservado.
- [ ] Hero prioritario; imágenes inferiores con lazy load.
- [ ] HyperFrames carga bajo demanda y deja una imagen final estable.
- [ ] No hay reflow al copiar, completar o desplegar una respuesta.
- [ ] Presupuestos de peso y objetivos Core Web Vitals revisados en build de producción.

### 16.6 Contenido y confianza

- [ ] No se simulan interfaces oficiales ni capacidades no confirmadas.
- [ ] Las funciones cambiantes de ChatGPT, Claude y Gemini se presentan con fecha o aviso de vigencia.
- [ ] Privacidad y verificación humana aparecen antes de ejercicios con datos.
- [ ] Prompts/comandos son texto seleccionable, no texto dentro de imágenes.
- [ ] No hay afirmaciones de resultados garantizados.

---

## 17. Definición de terminado visual

El sistema se considera correctamente implementado cuando:

1. una persona puede entender la ruta completa en menos de dos minutos desde la portada;
2. cada clase se reconoce y se recorre sin perder el contexto de la construcción;
3. cada animación explica una relación concreta y ofrece una alternativa estática completa;
4. la identidad de AI Academy y Orbit coincide con los activos canónicos;
5. el material funciona en móvil, proyección, teclado, lector de pantalla y movimiento reducido;
6. lo visual facilita la práctica y no compite con ella.

