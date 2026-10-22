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
  "assets/images/01-cimientos-ia.png",
  "assets/images/02-planos-prompts.png",
  "assets/images/03-caja-skills.png",
  "assets/images/04-equipo-agentes.png",
  "assets/motion/construccion-aprendizaje.mp4",
];

const errors = [];
for (const relative of required) {
  const full = path.join(site, relative);
  if (!fs.existsSync(full) || fs.statSync(full).size === 0) errors.push(`Falta o está vacío: ${relative}`);
}

const dataFile = fs.readFileSync(path.join(site, "content/course-content.js"), "utf8");
const classCount = (dataFile.match(/"number":\d/g) || []).length;
const pointCount = (dataFile.match(/"markdown":"## Punto/g) || []).length;
if (classCount < 4) errors.push(`Se esperaban 4 clases; se detectaron ${classCount}.`);
if (pointCount !== 21) errors.push(`Se esperaban 21 puntos; se detectaron ${pointCount}.`);

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
console.log("Sitio validado: 4 clases, 21 puntos, recursos presentes y JavaScript correcto.");
