# Point Explainers · IA de cero a Agentes

## Propósito

Veintiún explicadores "modo maestro", uno por punto del taller. Cada clip enseña el tema como en una pizarra: pregunta, analogía, diagrama paso a paso con rótulos y subtítulo, e idea clave. Quien vea solo el clip debe entender el contexto del tema.

## Sistema visual

- Fondo `#050507` con papel de planos (cuadrícula lavanda), porque todo el taller es una construcción.
- Morado `#7A3CFF` y lavanda `#B997FF` para la IA y la estructura.
- Color por clase: 1 `#45E0A8`, 2 `#5BDCFF`, 3 `#FFC45A`, 4 `#FF7AB6`.
- Estados: verde permitido, amarillo revisar, rojo bloqueado.
- Tipografía: Bricolage Grotesque (títulos), Figtree (lectura), JetBrains Mono (prompts). Archivos locales en `shared/fonts`.
- Orbit, el guía de AI Academy, presenta la pregunta y acompaña la pizarra.

## Formato

- 1920 × 1080, 30 fps, entre 38 y 44 s por punto, sin audio (el instructor narra en vivo).
- Un proyecto por escena en `scenes/<id>/` que comparte `shared/teacher.css` y `shared/teacher.js`.
- Guía completa de escritura: `AUTHORING.md`. Render y pósteres: `node render-all.mjs`.
