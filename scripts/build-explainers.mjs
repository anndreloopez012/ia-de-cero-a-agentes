// Extrae de cada escena de HyperFrames (motion/point-explainers/scenes/<id>/index.html)
// lo que el video explica: duración, analogía, pasos con su subtítulo e idea clave.
// La web lo usa para los capítulos del reproductor y como texto equivalente del video.
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const scenesDir = path.join(root, "motion", "point-explainers", "scenes");
const outputPath = path.join(root, "site", "content", "explainers.js");

// Objeto que acepta cualquier llamada o propiedad: sustituye a gsap, document y al timeline.
const sink = () => new Proxy(function () {}, { get: (_, key) => (key === Symbol.toPrimitive ? () => 0 : sink()), apply: () => sink(), set: () => true });
const strip = (html = "") => html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

const result = {};
for (const id of fs.readdirSync(scenesDir).filter((d) => /^c\dp\d+$/.test(d)).sort()) {
  const file = path.join(scenesDir, id, "index.html");
  if (!fs.existsSync(file)) continue;
  const html = fs.readFileSync(file, "utf8");
  const duration = Number(html.match(/data-composition-id="[^"]+"[^>]*data-duration="([\d.]+)"/)?.[1] ?? html.match(/data-duration="([\d.]+)"/)?.[1]);
  const script = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)].map((m) => m[1]).find((s) => s.includes("Teacher.setup("));
  if (!script) { console.warn(`Sin Teacher.setup en ${id}`); continue; }
  let cfg = null;
  const context = { window: { __timelines: {} }, gsap: sink(), document: sink(), console };
  context.window.Teacher = { setup(c) { cfg = c; return new Proxy({}, { get: (_, key) => (key === "stepAt" || key === "analogyAt" ? () => 0 : sink()) }) }, icon: () => "" };
  context.Teacher = context.window.Teacher;
  try { vm.runInNewContext(script, context, { timeout: 2000 }); } catch (error) { if (!cfg) { console.warn(`No se pudo leer ${id}: ${error.message}`); continue; } }
  result[id] = {
    duration,
    title: strip(cfg.title),
    question: strip(cfg.question),
    analogy: { title: strip(cfg.analogy?.title), text: strip(cfg.analogy?.text) },
    steps: (cfg.steps || []).map((s) => ({ label: strip(s.label), caption: strip(s.caption) })),
    takeaway: { title: strip(cfg.takeaway?.title), text: strip(cfg.takeaway?.text) },
  };
}

// La versión depende de las fechas de los videos: si se vuelven a renderizar, cambia.
const pointsDir = path.join(root, "site", "assets", "motion", "points");
const version = Object.keys(result).reduce((max, id) => {
  const file = path.join(pointsDir, `${id}.mp4`);
  return fs.existsSync(file) ? Math.max(max, Math.floor(fs.statSync(file).mtimeMs / 1000)) : max;
}, 0).toString(36);
fs.writeFileSync(outputPath, `window.EXPLAINERS_VERSION = "${version}";\nwindow.EXPLAINERS = ${JSON.stringify(result)};\n`, "utf8");
console.log(`Explicadores leídos: ${Object.keys(result).length} → ${path.relative(root, outputPath)}`);
