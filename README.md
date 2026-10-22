# Taller Práctico: IA de cero a Agentes

Sitio educativo de AI Academy by Campuslands para acompañar cuatro clases presenciales de cuatro horas. Presenta la malla completa mediante la analogía de construcción: cimientos, planos, herramientas y equipo coordinado.

## Contenido

- 4 clases y 16 horas de formación.
- 21 puntos de aprendizaje.
- 21 ejercicios individuales detallados.
- 50 % teoría y 50 % práctica.
- Configuración de ChatGPT, Claude y Gemini.
- Prompts ROCAV, skills, agentes y subagentes.
- Progreso guardado localmente en el navegador.
- Una animación general y 21 microanimaciones conceptuales creadas con HyperFrames, una por cada punto y sin texto dentro del video.
- Diseño responsive y soporte para movimiento reducido.

## Trabajar localmente

```bash
npm run build:content
npm run serve
```

La fuente académica es `planning/CURRICULUM_SITE.md`. Después de editarla, `npm run build:content` reconstruye `site/content/course-content.js`.

## Validación

```bash
npm run check
```

La composición animada está en `motion/construction-journey`. Para revisarla y renderizarla:

```bash
cd motion/construction-journey
npm run check
npm run render
```

Los 21 explicadores visuales están en `motion/point-explainers`. Se generan por lote con una variable de escena y se cargan en la web únicamente cuando el punto entra en pantalla:

```bash
cd motion/point-explainers
npm run check
npx --yes hyperframes@0.8.185 render --batch batch.json --output "../../site/assets/motion/points/{scene}.mp4" --strict-variables
```

## GitHub Pages

El workflow `.github/workflows/pages.yml` publica la carpeta `site/` al hacer push a `main`. En el repositorio de GitHub se debe seleccionar **Settings → Pages → Source: GitHub Actions** una sola vez.

## Identidad

Se utiliza el logotipo oficial de AI Academy by Campuslands y la paleta institucional para IA: negro `#050507`, morado `#7A3CFF` y lavanda `#B997FF`. Las cuatro ilustraciones conceptuales fueron generadas específicamente para este proyecto.
