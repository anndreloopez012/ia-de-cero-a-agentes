# Plan técnico — Web «IA de cero a Agentes» en GitHub Pages

## 1. Resultado esperado

Construir un sitio educativo estático, multipágina, rápido y accesible para acompañar las cuatro clases del taller. La experiencia debe funcionar en celular, tableta y computadora, con o sin JavaScript, y publicarse en GitHub Pages sin depender de un servidor, una base de datos o un framework pesado.

El sitio tendrá cinco entradas principales:

1. Inicio: resumen visual de las cuatro clases y analogía central de la construcción.
2. Clase 1: cimientos — configuración y fundamentos.
3. Clase 2: planos — prompts y comunicación precisa.
4. Clase 3: herramientas — skills, flujos y requisito de IA de pago activa.
5. Clase 4: construcción autónoma — agentes y subagentes.

Cada tema de cada clase debe incluir, como mínimo:

- explicación en lenguaje sencillo;
- definición de palabras clave;
- recurso visual o demostración;
- ejemplo resuelto;
- ejercicio individual paso a paso;
- resultado esperado o lista de comprobación;
- control para marcar el tema como completado.

La analogía narrativa debe mantenerse en todo el producto:

```text
Cimientos → Planos → Herramientas → Construcción autónoma
Clase 1      Clase 2    Clase 3       Clase 4
```

## 2. Decisión de arquitectura

### Solución recomendada: HTML multipágina, CSS y JavaScript nativo

Se recomienda una arquitectura **buildless**: HTML semántico, una hoja de estilos compartida y módulos JavaScript pequeños. Los archivos públicos vivirán exclusivamente en `site/` y GitHub Pages publicará esa carpeta como artefacto.

Razones:

- GitHub Pages sirve archivos estáticos de forma excelente.
- No hay rutas de servidor que puedan devolver un error 404.
- Las páginas se pueden abrir y leer aunque falle JavaScript.
- La URL del repositorio puede ser un subdirectorio, por ejemplo `https://organizacion.github.io/ia-de-cero-a-agentes/`, sin depender de una configuración especial.
- El material es principalmente educativo y editorial; React, Astro u otro framework no aportan una ventaja proporcional en esta primera versión.
- El mantenimiento posterior puede realizarlo una persona con conocimientos básicos de HTML.

### Reglas de rutas

Las cinco páginas HTML se mantendrán en el primer nivel de `site/`. Todos los enlaces y recursos usarán rutas relativas, nunca rutas que comiencen con `/`.

Correcto:

```html
<a href="clase-1.html">Ir a la clase 1</a>
<img src="assets/images/clase-1/cimientos.webp" alt="...">
```

Incorrecto para una página de proyecto de GitHub Pages:

```html
<a href="/clase-1.html">Ir a la clase 1</a>
<img src="/assets/images/clase-1/cimientos.webp" alt="...">
```

No se usará `<base href="/">`, enrutamiento SPA, `history.pushState` ni enlaces que dependan del dominio raíz.

## 3. Estructura propuesta del repositorio

```text
ia-de-cero-a-agentes/
├─ .github/
│  └─ workflows/
│     └─ pages.yml
├─ planning/
│  ├─ TECHNICAL_PLAN.md
│  ├─ CONTENT_INVENTORY.md
│  └─ ASSET_MANIFEST.md
├─ motion/
│  ├─ README.md
│  ├─ clase-1-cimientos/
│  ├─ clase-2-prompts/
│  ├─ clase-3-skills/
│  └─ clase-4-agentes/
├─ scripts/
│  ├─ serve.mjs
│  └─ validate-site.mjs
├─ site/
│  ├─ index.html
│  ├─ clase-1.html
│  ├─ clase-2.html
│  ├─ clase-3.html
│  ├─ clase-4.html
│  ├─ 404.html
│  ├─ manifest.webmanifest
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ assets/
│     ├─ css/
│     │  ├─ tokens.css
│     │  ├─ base.css
│     │  ├─ components.css
│     │  ├─ pages.css
│     │  └─ print.css
│     ├─ js/
│     │  ├─ app.js
│     │  ├─ progress.js
│     │  ├─ copy.js
│     │  └─ motion-preferences.js
│     ├─ images/
│     │  ├─ brand/
│     │  ├─ home/
│     │  ├─ clase-1/
│     │  ├─ clase-2/
│     │  ├─ clase-3/
│     │  └─ clase-4/
│     ├─ video/
│     │  ├─ clase-1/
│     │  ├─ clase-2/
│     │  ├─ clase-3/
│     │  └─ clase-4/
│     ├─ captions/
│     ├─ icons/
│     └─ fonts/
├─ tests/
│  └─ smoke-checklist.md
├─ .editorconfig
├─ .gitignore
├─ LICENSE
├─ package.json
└─ README.md
```

### Qué se publica y qué no

- GitHub Pages recibe únicamente `site/`.
- Los proyectos fuente de HyperFrames se conservan en `motion/` para que las animaciones sean reproducibles, pero `node_modules/`, capturas intermedias y renders de prueba no se versionan.
- Los videos finales optimizados, sus pósteres y subtítulos sí se copian a `site/assets/`.
- `planning/`, `tests/` y `scripts/` permanecen en el repositorio para mantenimiento, pero no forman parte del sitio público.

## 4. Modelo de navegación

### Navegación global

Todas las páginas deben incluir:

- enlace «Saltar al contenido» como primer elemento enfocable;
- logotipo que regresa al inicio;
- enlaces Inicio, Clase 1, Clase 2, Clase 3 y Clase 4;
- indicador global de avance;
- botón de menú accesible en pantallas pequeñas;
- pie con navegación anterior/siguiente y créditos institucionales.

El elemento de la clase actual debe indicar `aria-current="page"`.

### Navegación dentro de una clase

Cada clase tendrá:

1. objetivo de aprendizaje;
2. «qué te llevas hoy»;
3. mapa de temas con enlaces a anclas;
4. temas en orden pedagógico;
5. práctica integradora de cierre;
6. comprobación personal;
7. siguiente clase.

Los identificadores serán estables y legibles, por ejemplo:

```text
#c1-configuracion-chatgpt
#c1-configuracion-claude
#c1-configuracion-gemini
#c2-estructura-prompt
#c4-subagentes
```

No se usará un carrusel para esconder contenido esencial. El alumno siempre podrá recorrer el material de arriba abajo y usar el índice para saltar a un tema.

## 5. Patrones de componentes accesibles

Los componentes serán patrones HTML/CSS reutilizables, no componentes de framework.

| Patrón | Uso | Contrato de accesibilidad |
|---|---|---|
| `topic-card` | Unidad temática | Encabezado real (`h2`/`h3`), ID único y control de completado asociado con `label`. |
| `foundation-step` | Analogía de construcción | Texto equivalente visible; la ilustración no comunica información exclusiva. |
| `term-card` | Definición de palabra clave | `<dfn>` para el término y explicación en lenguaje común. |
| `example-block` | Ejemplo resuelto | Etiqueta «Ejemplo», no depender solo de color. |
| `exercise-lab` | Ejercicio individual | Objetivo, materiales, pasos numerados, ejemplo base, criterio de éxito y tiempo estimado. |
| `callout` | Importante, cuidado, requisito | Icono + título textual; no depender solo de color. |
| `prompt-box` | Prompt listo para practicar | `<pre><code>`, botón copiar, confirmación mediante `aria-live="polite"`. |
| `media-explainer` | Imagen o animación | Pie, alternativa textual, transcripción y controles nativos. |
| `checkpoint` | Marcar aprendizaje | Casilla nativa, estado guardado localmente y foco visible. |
| `details` | Ejemplo ampliado/solución | `<details><summary>` nativos; la información indispensable queda fuera del colapsable. |

Requisitos transversales:

- orden de encabezados sin saltos arbitrarios;
- foco visible de alto contraste;
- controles táctiles de al menos 44 × 44 px;
- contraste mínimo WCAG AA;
- teclado completo sin trampas de foco;
- nada importante se activa solo al pasar el cursor;
- texto base de 16 px o más y líneas de 60–75 caracteres;
- `lang="es-GT"` en cada documento;
- animaciones reducidas o desactivadas bajo `prefers-reduced-motion: reduce`.

## 6. Progreso local del alumno

### Alcance

El avance se guardará en `localStorage`. No habrá cuentas, analítica personal ni envío de respuestas a un servidor. Solo se guardarán identificadores de temas completados y una fecha local de actualización.

Clave:

```text
ia0a.progress.v1
```

Esquema:

```json
{
  "version": 1,
  "updatedAt": "2026-10-24T15:30:00.000Z",
  "completed": {
    "c1.t01": true,
    "c1.t02": true,
    "c2.t01": false
  }
}
```

### Comportamiento

- Cada tema tendrá un `data-topic-id` estable como `c1.t01`.
- Al cargar una página, `progress.js` restaura las casillas.
- Al cambiar una casilla, se guarda el nuevo estado y se recalcula el porcentaje por clase y total.
- El inicio muestra progreso de las cuatro clases.
- Un botón «Reiniciar mi progreso» pide confirmación antes de borrar la clave.
- El código maneja `localStorage` dentro de `try/catch`; si el navegador lo bloquea, el curso sigue siendo legible y el control muestra un aviso no invasivo.
- No se guardarán nombres, correos, prompts, respuestas a ejercicios ni información sensible.
- La interfaz no anunciará el estado restaurado al cargar; `aria-live` se reservará para cambios hechos por el usuario.

### Evolución

Si cambia el inventario de temas, se aumenta la versión de esquema. La migración debe conservar IDs existentes y descartar solo IDs obsoletos. Nunca se reutiliza un ID para otro tema.

## 7. Imágenes generadas y recursos visuales

### Flujo de imágenes

Las imágenes creadas con el generador de ChatGPT entran como archivos fuente de alta resolución y luego se preparan para web:

1. conservar el original fuera de `site/` o en una carpeta de fuente claramente separada;
2. eliminar metadatos innecesarios;
3. exportar AVIF y WebP; mantener PNG solo cuando se necesite transparencia o detalle gráfico;
4. generar tamaños de 480, 960 y 1440 px cuando el recurso sea protagonista;
5. registrar archivo, tema, prompt/fuente, texto alternativo y licencia/uso en `planning/ASSET_MANIFEST.md`;
6. colocar únicamente derivados optimizados en `site/assets/images/`.

Patrón recomendado:

```html
<picture>
  <source
    type="image/avif"
    srcset="assets/images/clase-1/cimientos-480.avif 480w,
            assets/images/clase-1/cimientos-960.avif 960w,
            assets/images/clase-1/cimientos-1440.avif 1440w">
  <source
    type="image/webp"
    srcset="assets/images/clase-1/cimientos-480.webp 480w,
            assets/images/clase-1/cimientos-960.webp 960w,
            assets/images/clase-1/cimientos-1440.webp 1440w">
  <img
    src="assets/images/clase-1/cimientos-960.webp"
    width="960"
    height="640"
    loading="lazy"
    decoding="async"
    alt="Una estructura tecnológica construida sobre cuatro cimientos: contexto, objetivo, instrucciones y verificación.">
</picture>
```

Reglas:

- El recurso principal del inicio puede usar `fetchpriority="high"`; el resto usa carga diferida.
- Siempre se declaran `width` y `height` para evitar saltos de diseño.
- No se incrusta texto extenso dentro de una imagen. El texto educativo vive en HTML.
- Una imagen decorativa usa `alt=""`; una imagen instructiva recibe un texto alternativo que explique la idea, no solo su apariencia.
- Los nombres de archivo usan minúsculas, guiones y palabras descriptivas.

### Presupuesto inicial

- imagen de portada: máximo recomendado 350 KB;
- imagen educativa: máximo recomendado 250 KB;
- icono: SVG propio o institucional, sin fuentes de iconos externas;
- peso inicial de una página sin video: objetivo menor a 1.5 MB.

## 8. Animaciones HyperFrames en la web

### Estrategia de publicación

HyperFrames se usa para producir explicaciones animadas reproducibles. GitHub Pages servirá **renders finales**, no el editor ni una composición que requiera Node.js en el navegador.

Por cada pieza relevante se conservará:

```text
motion/clase-X-nombre/              # proyecto fuente HyperFrames
site/assets/video/clase-X/nombre.mp4
site/assets/video/clase-X/nombre.webm
site/assets/video/clase-X/nombre-poster.webp
site/assets/captions/nombre.es.vtt
```

Las piezas prioritarias son:

1. recorrido general: cimientos → planos → herramientas → agentes;
2. clase 1: cómo la configuración afecta las respuestas;
3. clase 2: anatomía visual de un prompt;
4. clase 3: una skill como procedimiento reutilizable;
5. clase 4: agente principal que delega en subagentes y verifica resultados.

No es necesario renderizar un video por cada párrafo. Cada animación debe resolver una idea que sea más clara en movimiento; diagramas e ilustraciones estáticas cubren el resto.

### Formato y límites

- relación recomendada: 16:9, 1920 × 1080;
- fotogramas: 30 fps, salvo necesidad específica;
- MP4 H.264 para compatibilidad general;
- WebM para navegadores que lo aprovechen;
- audio solo cuando aporte instrucción; toda narración tendrá subtítulos y transcripción;
- pieza corta: 8–25 segundos;
- objetivo de peso: menos de 8 MB por video y menos de 20 MB de video solicitado inicialmente por página;
- archivos individuales menores de 25 MB para evitar problemas operativos; no usar Git LFS en la primera versión.

### Inserción accesible

```html
<figure class="media-explainer">
  <video
    controls
    playsinline
    preload="metadata"
    poster="assets/video/clase-2/anatomia-prompt-poster.webp">
    <source src="assets/video/clase-2/anatomia-prompt.webm" type="video/webm">
    <source src="assets/video/clase-2/anatomia-prompt.mp4" type="video/mp4">
    <track
      kind="captions"
      srclang="es"
      label="Español"
      src="assets/captions/anatomia-prompt.es.vtt"
      default>
  </video>
  <figcaption>Anatomía de un prompt: objetivo, contexto, instrucciones, formato y verificación.</figcaption>
</figure>
```

Reglas:

- No reproducir automáticamente videos con sonido.
- Evitar reproducción automática en móvil; si se usa un bucle puramente decorativo debe ser `muted`, `playsinline` y tener alternativa estática.
- Ofrecer transcripción debajo del video dentro de `<details>`.
- El póster debe comunicar la idea principal cuando el video no cargue.
- Respetar `prefers-reduced-motion`; las microanimaciones CSS se desactivan y el alumno puede usar el póster o los controles del video.
- Los renders se generan antes de publicar; el workflow de Pages no instalará ni renderizará HyperFrames.

## 9. JavaScript: alcance y módulos

El sitio no debe depender de JavaScript para mostrar el contenido. Los módulos aportarán mejoras progresivas:

- `app.js`: menú móvil, año del pie y activación general;
- `progress.js`: estado local y porcentajes;
- `copy.js`: copiar prompts o plantillas con mensajes accesibles;
- `motion-preferences.js`: pausa o reemplazo de elementos decorativos si el usuario reduce movimiento.

Restricciones:

- sin bibliotecas externas desde CDN;
- sin secretos, tokens ni llamadas privadas;
- sin `innerHTML` con contenido del usuario;
- controles nativos siempre que existan (`details`, `button`, `progress`, `video`);
- los errores de una mejora no bloquean el resto de la página.

## 10. Sistema visual técnico

Los tokens oficiales se centralizan en `tokens.css`; nunca se dispersan códigos de color arbitrarios por las páginas.

```css
:root {
  --color-ink: /* valor aprobado de Campuslands */;
  --color-surface: #ffffff;
  --color-brand-primary: /* valor aprobado */;
  --color-brand-secondary: /* valor aprobado */;
  --color-ai-accent: /* valor aprobado para AI Academy */;
  --color-focus: /* valor aprobado con contraste AA */;
  --font-display: /* tipografía de marca con fallback */;
  --font-body: /* tipografía legible con fallback */;
  --space-1: .25rem;
  --space-2: .5rem;
  --space-3: .75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --radius-card: 1rem;
  --shadow-card: 0 .75rem 2rem rgb(0 0 0 / .10);
}
```

Los valores de marca, variantes del logotipo y márgenes de seguridad deben venir del agente/guía oficial de Campuslands. Se evitará reinterpretar el logotipo o escribir «Campuslands» como sustituto gráfico.

El contenido debe conservar contraste y jerarquía aunque se impriman las páginas. `print.css` ocultará navegación y controles, expandirá soluciones útiles y mostrará las URLs de recursos externos.

## 11. SEO y metadatos

Cada página tendrá:

- `<title>` único;
- descripción de 140–160 caracteres escrita para la clase;
- URL canónica absoluta una vez conocido propietario y repositorio;
- Open Graph (`og:title`, `og:description`, `og:image`, `og:url`, `og:type`);
- Twitter Card equivalente;
- iconos y color de tema;
- un único `h1` descriptivo;
- datos estructurados JSON-LD `Course` en el inicio y `LearningResource` o `CourseInstance` cuando corresponda, solo con datos confirmados;
- enlaces anterior/siguiente visibles, sin depender de etiquetas SEO obsoletas.

Archivos globales:

- `sitemap.xml` con las cinco URLs finales;
- `robots.txt` que permita rastreo e indique el sitemap;
- `404.html` con enlaces relativos al inicio y a las cuatro clases;
- imagen social de 1200 × 630 px, optimizada y alojada en el mismo sitio.

No se inventarán testimonios, cifras de éxito, acreditaciones ni calificaciones. La fecha, duración, modalidad y requisitos del taller deben provenir del contenido confirmado.

## 12. PWA: recomendación

### Primera versión

Incluir `manifest.webmanifest` con nombre, nombre corto, iconos, color y `display: standalone`. Esto permite una base instalable sin alterar el flujo de publicación.

### Servicio sin conexión

Dejar el service worker para una segunda iteración, cuando el contenido esté estable. Un cacheo prematuro puede mostrar materiales antiguos después de una actualización de clase.

Si se añade:

- usar estrategia cache-first solo para recursos versionados;
- network-first para HTML;
- mostrar un aviso de actualización;
- calcular el alcance con rutas relativas al subdirectorio del repositorio;
- versionar el nombre del caché;
- nunca cachear recursos externos opacos sin necesidad.

## 13. Verificación automatizada

`scripts/validate-site.mjs` debe funcionar con Node.js estándar, sin instalar dependencias, y fallar con código distinto de cero cuando encuentre:

- un enlace o recurso local inexistente;
- una URL interna que comienza con `/`;
- IDs duplicados en una página;
- una imagen sin `alt`, `width` o `height`;
- un video sin póster;
- un HTML sin `lang`, `title`, descripción o `h1`;
- una clase sin enlaces a inicio, clase anterior/siguiente cuando aplique;
- un `data-topic-id` duplicado;
- falta de cualquiera de las cinco páginas obligatorias;
- referencias desde `sitemap.xml` que no correspondan con páginas publicadas.

Comando:

```powershell
node scripts/validate-site.mjs
```

## 14. Pruebas de experiencia

### Matriz mínima

| Área | Verificación |
|---|---|
| Rutas | Abrir inicio y las cuatro clases desde una URL con subdirectorio. |
| Navegación | Recorrer todo solo con teclado; verificar foco y `aria-current`. |
| Responsivo | 360, 768, 1024 y 1440 px. |
| Progreso | Marcar temas, recargar, cambiar de clase y reiniciar. |
| Sin JavaScript | Todo el contenido, ejercicios e imágenes principales siguen visibles. |
| Movimiento reducido | Microanimaciones se eliminan y no hay destellos o desplazamientos innecesarios. |
| Video | MP4 de respaldo, subtítulos, transcripción, póster y controles. |
| Rendimiento | Sin saltos de diseño, imágenes diferidas y videos con `preload="metadata"`. |
| Impresión | Cada clase es legible y no imprime menús o fondos innecesarios. |
| Navegadores | Chrome, Edge, Firefox y Safari móvil cuando haya dispositivo disponible. |

### Objetivos Lighthouse

- Accesibilidad: 95 o más.
- SEO: 95 o más.
- Buenas prácticas: 95 o más.
- Rendimiento: 90 o más en móvil para páginas sin reproducir video.

Estos valores son metas de calidad, no afirmaciones comerciales. Cualquier excepción se documenta antes de publicar.

### Servidor local

El repositorio incluirá un servidor de desarrollo con módulos estándar de Node para no depender de instalaciones globales:

```powershell
npm run dev
```

Debe servir `site/` en `http://localhost:4173/`, bloquear recorridos fuera de esa carpeta y asignar MIME correctos para HTML, CSS, JS, imágenes, MP4, WebM, VTT y manifest.

Alternativa ya disponible en este equipo:

```powershell
python -m http.server 4173 --directory site
```

## 15. Workflow de GitHub Pages

Archivo `.github/workflows/pages.yml`:

```yaml
name: Publicar GitHub Pages

on:
  push:
    branches: [main]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: pages
  cancel-in-progress: true

jobs:
  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    steps:
      - name: Descargar repositorio
        uses: actions/checkout@v4

      - name: Preparar Node.js
        uses: actions/setup-node@v4
        with:
          node-version: 22

      - name: Validar sitio
        run: node scripts/validate-site.mjs

      - name: Configurar Pages
        uses: actions/configure-pages@v5

      - name: Preparar artefacto
        uses: actions/upload-pages-artifact@v3
        with:
          path: site

      - name: Publicar
        id: deployment
        uses: actions/deploy-pages@v4
```

La publicación no renderiza HyperFrames ni transforma imágenes. Esos recursos deben estar aprobados y optimizados antes del commit; así el despliegue permanece corto y determinista.

## 16. Comandos de preparación y publicación

### Estado comprobado en este equipo

```text
Git: 2.54.0
GitHub CLI: 2.97.0
Node.js: 26.3.0
npm: 11.16.0
Python: 3.12 disponible
Repositorio local actual: todavía no inicializado
GitHub CLI: cuenta detectada, pero token vencido/inválido
HyperFrames: no hay ejecutable global; usar npx y el proyecto fijará su versión
```

### Paso 1 — reautenticar GitHub CLI

Este paso requiere interacción de la persona propietaria de la cuenta:

```powershell
gh auth login -h github.com -w
gh auth status
```

No se debe crear el repositorio hasta que `gh auth status` confirme una sesión válida y se confirme la organización o cuenta propietaria.

### Paso 2 — inicializar el repositorio local

Ejecutar desde la carpeta raíz final del proyecto, no desde la carpeta general del chat:

```powershell
git init -b main
git add .
git commit -m "feat: crear material web IA de cero a Agentes"
```

### Paso 3 — crear y subir el repositorio

Nombre sugerido:

```text
ia-de-cero-a-agentes
```

Comando, después de confirmar propietario y visibilidad:

```powershell
gh repo create ia-de-cero-a-agentes --public --source . --remote origin --push
```

Si el material debe ser privado, hay que comprobar que el plan de GitHub de la cuenta permita Pages para repositorios privados antes de usar `--private`.

### Paso 4 — habilitar Pages con GitHub Actions

Obtener primero el repositorio real:

```powershell
$repoIa = gh repo view --json nameWithOwner -q .nameWithOwner
gh api --method POST "repos/$repoIa/pages" -f build_type=workflow
```

Si Pages ya estaba habilitado y la API indica conflicto, actualizar la configuración:

```powershell
gh api --method PUT "repos/$repoIa/pages" -f build_type=workflow
```

### Paso 5 — validar y observar la publicación

```powershell
node scripts/validate-site.mjs
git status
git push origin main
gh run list --workflow pages.yml --limit 1
gh run watch
```

La URL final esperada tendrá esta forma:

```text
https://PROPIETARIO.github.io/ia-de-cero-a-agentes/
```

La URL literal debe tomarse de la salida exitosa del job `deploy`; no debe adivinarse.

## 17. Riesgos y mitigaciones

| Riesgo | Impacto | Mitigación |
|---|---|---|
| Token de `gh` vencido | No se puede crear el repositorio ni publicar. | Reautenticar y confirmar propietario antes de cualquier escritura remota. |
| Rutas absolutas | Recursos rotos en la URL con subdirectorio. | Rutas relativas y validador que rechaza `href/src="/..."`. |
| Videos muy pesados | Carga lenta y alto consumo de datos. | Límites por archivo, WebM + MP4, póster, `preload="metadata"` y una animación con propósito por concepto. |
| Texto dentro de imágenes | Mala accesibilidad y difícil actualización. | Texto educativo en HTML; imagen como apoyo. |
| JavaScript bloqueado | Pérdida de contenido o navegación. | Mejora progresiva; JS solo para progreso, copia y menú. |
| Progreso perdido | El alumno cambia de dispositivo o borra datos. | Explicar que el avance es local; no prometer sincronización. |
| Service worker obsoleto | El alumno ve una versión antigua. | No incluirlo en V1; versionar caché y usar network-first para HTML si se añade. |
| Inconsistencia de marca | Apariencia no institucional. | Tokens únicos y uso de archivos oficiales verificados por la guía Campuslands. |
| Diploma, fechas o requisitos incorrectos | Confusión comercial o académica. | Mantener hechos en un inventario de contenido aprobado y no inventar datos. |
| Repositorio excesivamente grande | Clonado y Pages lentos. | No versionar fuentes innecesarias, renders de prueba ni `node_modules`; revisar peso antes del commit. |
| Animación sin alternativa | Exclusión de usuarios o fallo en red lenta. | Póster, texto equivalente, subtítulos y transcripción. |
| Dependencia de CDN | Falla en aula o red restringida. | Recursos esenciales alojados en el repositorio. |

## 18. Checklist de terminado

### Contenido y estructura

- [ ] El inicio resume claramente las cuatro clases antes de entrar al contenido.
- [ ] La analogía de cimientos, planos, herramientas y construcción autónoma se mantiene de principio a fin.
- [ ] Cada punto incluye teoría, ejemplo y ejercicio individual.
- [ ] Cada clase muestra objetivo, valor que se lleva el alumno y práctica de cierre.
- [ ] Clase 3 muestra claramente el requisito de una IA de pago activa.
- [ ] Clase 4 explica agentes y subagentes con un ejercicio aplicable.

### Marca y medios

- [ ] Logotipos oficiales, sin deformación ni reconstrucción.
- [ ] Paleta y tipografías aprobadas centralizadas en `tokens.css`.
- [ ] Imágenes generadas optimizadas y registradas en el manifiesto.
- [ ] Toda imagen instructiva tiene alternativa textual útil.
- [ ] Cada video tiene MP4, WebM, póster, subtítulos y transcripción.
- [ ] Ningún recurso individual supera el límite acordado.

### Experiencia y accesibilidad

- [ ] Navegación completa con teclado.
- [ ] Foco visible y contraste WCAG AA.
- [ ] Diseño verificado en móvil, tableta y escritorio.
- [ ] El sitio sigue siendo útil sin JavaScript.
- [ ] `prefers-reduced-motion` funciona.
- [ ] El progreso se restaura, calcula y reinicia correctamente.
- [ ] No se recopilan datos personales.

### Calidad y publicación

- [ ] `node scripts/validate-site.mjs` termina correctamente.
- [ ] No existen rutas internas que comiencen con `/`.
- [ ] Los cinco HTML, 404, sitemap y robots están presentes.
- [ ] Metadatos únicos y URL canónica final en cada página.
- [ ] Pruebas manuales completadas según `tests/smoke-checklist.md`.
- [ ] Lighthouse alcanza las metas o las excepciones quedan documentadas.
- [ ] `gh auth status` es válido.
- [ ] Repositorio remoto confirmado con el propietario correcto.
- [ ] Workflow Pages finaliza en verde.
- [ ] URL desplegada abierta y revisada desde un navegador sin sesión iniciada.

## 19. Orden recomendado de ejecución

1. Aprobar inventario curricular y nombres estables de temas.
2. Aprobar sistema visual, paleta, logos y tipografías oficiales.
3. Crear la estructura `site/`, tokens, navegación y componentes base.
4. Integrar el inicio y las cuatro clases con HTML semántico.
5. Generar y optimizar imágenes definitivas.
6. Producir renders HyperFrames priorizados, subtítulos y pósteres.
7. Añadir progreso local, copia de prompts y menú móvil.
8. Crear validadores, 404, SEO, sitemap y manifest.
9. Ejecutar pruebas automáticas y manuales.
10. Reautenticar GitHub CLI, crear el repositorio y publicar.
11. Revisar la URL real de Pages y corregir cualquier ruta o recurso.

Esta secuencia evita que animaciones o imágenes se produzcan antes de estabilizar la estructura del curso y mantiene la publicación como el último paso verificable.
