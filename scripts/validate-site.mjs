import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const site = path.join(root, "site");
const required = [
  "index.html",
  "assets/css/styles.css",
  "assets/js/app.js",
  "content/course-content.js",
  "assets/images/logo-ai-academy.png",
  "assets/images/orbit-presenta.png",
  "content/explainers.js",
  "assets/images/01-cimientos-ia.jpg",
  "assets/images/02-planos-prompts.jpg",
  "assets/images/03-caja-skills.jpg",
  "assets/images/04-equipo-agentes.jpg",
  "assets/fonts/bricolage-grotesque-latin-wght-normal.woff2",
  "assets/fonts/figtree-latin-wght-normal.woff2",
  "assets/fonts/jetbrains-mono-latin-wght-normal.woff2",
  "assets/motion/recorrido-taller.mp4",
  "assets/motion/recorrido-taller.jpg",
];

for (let classNumber = 1; classNumber <= 4; classNumber += 1) {
  const pointTotal = classNumber === 4 ? 6 : 5;
  for (let pointNumber = 1; pointNumber <= pointTotal; pointNumber += 1) {
    const id = `c${classNumber}p${pointNumber}`;
    required.push(`assets/motion/points/${id}.mp4`);
    required.push(`assets/motion/points/posters/${id}.jpg`);
  }
}

const errors = [];
for (const relative of required) {
  const full = path.join(site, relative);
  if (!fs.existsSync(full) || fs.statSync(full).size === 0) errors.push(`Falta o está vacío: ${relative}`);
}

const load = (file) => { const sandbox = { window: {} }; new Function("window", fs.readFileSync(path.join(site, file), "utf8"))(sandbox.window); return sandbox.window; };
const { COURSE_CONTENT: course } = load("content/course-content.js");
const { EXPLAINERS: explainers = {} } = load("content/explainers.js");
const points = course.classes.flatMap((c) => c.points.map((p) => ({ id: `c${c.number}p${p.number}`, p })));
if (course.classes.length !== 4) errors.push(`Se esperaban 4 clases; se detectaron ${course.classes.length}.`);
if (points.length !== 21) errors.push(`Se esperaban 21 puntos; se detectaron ${points.length}.`);
for (const { id, p } of points) {
  if (!p.theory) errors.push(`${id}: falta la teoría.`);
  if (!p.exercise?.steps?.length) errors.push(`${id}: el ejercicio no tiene pasos.`);
  if (!explainers[id]) errors.push(`${id}: falta el explicador en content/explainers.js (node scripts/build-explainers.mjs).`);
  else if (explainers[id].steps.length < 3) errors.push(`${id}: el explicador tiene menos de 3 pasos.`);
}

try {
  execFileSync(process.execPath, ["--check", path.join(site, "assets/js/app.js")], { stdio: "pipe" });
  execFileSync(process.execPath, ["--check", path.join(site, "content/course-content.js")], { stdio: "pipe" });
} catch (error) {
  errors.push(`JavaScript inválido: ${error.stderr?.toString() || error.message}`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log("Sitio validado: 4 clases, 21 puntos con teoría y ejercicio, 21 explicadores con video y póster, y JavaScript correcto.");
