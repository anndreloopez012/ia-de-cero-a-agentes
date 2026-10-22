# Taller Práctico: IA de cero a Agentes

Herramienta de trabajo de AI Academy by Campuslands para dar el taller en el aula: cuatro clases presenciales de cuatro horas que siguen la analogía de construcción (cimientos, planos, herramientas y equipo coordinado).

Sitio publicado: https://anndreloopez012.github.io/ia-de-cero-a-agentes/

## Qué trae

- **4 clases, 21 temas y 21 ejercicios**, con 50 % de teoría y 50 % de práctica.
- **Vista filtrable** desde la barra superior: *Todo*, *Solo teoría* o *Solo ejercicios* (teclas `1`, `2` y `3`). Se recuerda en el navegador.
- **Un video "modo maestro" por tema**, hecho con HyperFrames: plantea la pregunta, la explica con una analogía, arma el diagrama paso a paso con rótulos y cierra con la idea clave. El reproductor tiene capítulos (pregunta, analogía, cada paso e idea clave) y al lado muestra el texto de lo que explica el video.
- **Hojas de trabajo** para cada ejercicio: material del caso, pasos que se marcan, temporizador con la duración del ejercicio, ejemplo copiable, qué se entrega y cómo saber si se logró. Se pueden imprimir limpias.
- **Modo presentación** (`P`) para proyectar: video a pantalla completa y ejercicio con pasos grandes y temporizador (`T`). Respeta la vista elegida, así que se puede proyectar solo la teoría o solo los ejercicios.
- **Ruta de 240 minutos** de cada clase en una barra visual de teoría, práctica y pausas.
- **Búsqueda** (`/`) en temas, ejercicios y glosario; **glosario** lateral (`G`); **avance** por tema y por ejercicio guardado en el navegador.
- Tema claro y oscuro, diseño responsive, movimiento reducido y navegación por teclado (`?` muestra los atajos).

## Estructura

```
planning/CURRICULUM_SITE.md          fuente académica (única fuente del contenido)
scripts/build-content.mjs            currículo → site/content/course-content.js (teoría y ejercicio separados)
scripts/build-explainers.mjs         escenas → site/content/explainers.js (capítulos y texto de cada video)
scripts/validate-site.mjs            validación del sitio
site/                                sitio estático (index.html, assets/css, assets/js, assets/fonts)
motion/point-explainers/             los 21 videos "modo maestro" (un proyecto HyperFrames por escena)
motion/construction-journey/         animación del recorrido completo
```

## Trabajar localmente

```bash
npm run build:content
npm run serve
```

Abre http://localhost:8817. Después de editar `planning/CURRICULUM_SITE.md`, vuelve a correr `npm run build:content`.

## Videos de cada tema

Cada escena vive en `motion/point-explainers/scenes/<id>/index.html` y comparte el kit visual de `motion/point-explainers/shared/`. La guía para escribir o corregir una escena está en `motion/point-explainers/AUTHORING.md`.

```bash
cd motion/point-explainers
npm run check                 # revisa las 21 escenas
node render-all.mjs c2p3      # renderiza una escena
node render-all.mjs           # renderiza las 21, genera pósteres y actualiza los capítulos de la web
```

## Validación

```bash
npm run check
```

## GitHub Pages

El workflow `.github/workflows/pages.yml` publica la carpeta `site/` al hacer push a `main`.

## Identidad

Logotipo oficial de AI Academy by Campuslands y paleta institucional: negro `#050507`, morado `#7A3CFF` y lavanda `#B997FF`, con un color por clase (verde, celeste, ámbar y rosa). Tipografías locales: Bricolage Grotesque, Figtree y JetBrains Mono. Las ilustraciones de las clases y Orbit fueron creadas para este proyecto.
