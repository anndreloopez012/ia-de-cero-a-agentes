// Convierte planning/CURRICULUM_SITE.md en datos estructurados para la web.
// Cada punto se separa en dos partes: la teoría (contexto) y el ejercicio,
// para que la interfaz pueda filtrar "solo teoría" o "solo ejercicios".
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const sourcePath = path.join(root, "planning", "CURRICULUM_SITE.md");
const outputDir = path.join(root, "site", "content");
const outputPath = path.join(outputDir, "course-content.js");
const source = fs.readFileSync(sourcePath, "utf8").replace(/\r\n/g, "\n");

const clean = (text) => text.replace(/[ \t]+$/gm, "").replace(/\n---\s*$/, "").trim();

// Divide un bloque en secciones "## Título" (o el nivel indicado).
function sections(markdown, level) {
  const marker = "#".repeat(level);
  const regex = new RegExp(`^${marker} (.+)$`, "gm");
  const found = [...markdown.matchAll(regex)];
  return found.map((match, i) => ({
    title: match[1].trim(),
    body: clean(markdown.slice(match.index + match[0].length, i < found.length - 1 ? found[i + 1].index : markdown.length)),
  }));
}

// Lee pares "**Etiqueta:** valor" en orden; el texto que sigue pertenece a la última etiqueta.
function labelledBlocks(markdown) {
  const blocks = [];
  let current = { label: "", body: [] };
  for (const line of markdown.split("\n")) {
    const match = line.match(/^\*\*([^*]+):\*\*\s*(.*)$/);
    if (match) {
      if (current.label || current.body.join("").trim()) blocks.push(current);
      current = { label: match[1].trim(), body: match[2] ? [match[2]] : [] };
    } else {
      current.body.push(line);
    }
  }
  if (current.label || current.body.join("").trim()) blocks.push(current);
  return blocks.map((block) => ({ label: block.label, body: clean(block.body.join("\n")) }));
}

function listItems(markdown) {
  return [...markdown.matchAll(/^\s*(?:\d+\.|[-*])\s+(.+)$/gm)].map((m) => m[1].trim());
}

function minutes(text = "") {
  const match = text.match(/(\d+)\s*minutos?/);
  return match ? Number(match[1]) : null;
}

function parseTable(markdown) {
  const lines = markdown.split("\n").filter((line) => /^\|/.test(line.trim()));
  if (lines.length < 2) return [];
  const rows = lines.map((line) => line.trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()));
  const [header, , ...body] = rows;
  return body.map((row) => Object.fromEntries(header.map((key, i) => [key, row[i] ?? ""])));
}

function parseExercise(heading, body) {
  const titleMatch = heading.match(/^Ejercicio individual (\d+)\s+—\s+(.+)$/);
  const exercise = {
    number: titleMatch ? Number(titleMatch[1]) : null,
    title: titleMatch ? titleMatch[2].trim() : heading,
    purpose: "",
    duration: "",
    minutes: null,
    context: [],
    steps: [],
    stepsNote: "",
    examples: [],
    evidence: "",
    success: "",
  };
  for (const block of labelledBlocks(body)) {
    const label = block.label;
    if (!label) { if (block.body) exercise.context.push({ label: "", body: block.body }); continue; }
    if (/^Propósito/i.test(label)) exercise.purpose = block.body;
    else if (/^Duración/i.test(label)) { exercise.duration = block.body; exercise.minutes = minutes(block.body); }
    else if (/^Pasos/i.test(label)) {
      exercise.steps = listItems(block.body);
      exercise.stepsNote = clean(block.body.split("\n").filter((line) => !/^\s*(?:\d+\.|[-*])\s+/.test(line)).join("\n"));
    } else if (/^Ejemplo/i.test(label)) exercise.examples.push({ label, body: block.body });
    else if (/^Evidencia/i.test(label)) exercise.evidence = block.body;
    else if (/^Criterio de éxito/i.test(label)) exercise.success = block.body;
    else exercise.context.push({ label, body: block.body });
  }
  return exercise;
}

function parsePoint(title, body, number) {
  const exerciseIndex = body.search(/^### Ejercicio individual/m);
  let theory = exerciseIndex > -1 ? body.slice(0, exerciseIndex) : body;
  const exerciseMd = exerciseIndex > -1 ? body.slice(exerciseIndex) : "";
  let visualIdea = "";
  theory = theory.replace(/^\*\*Idea visual para la web:\*\*\s*(.+)$/m, (_, text) => { visualIdea = text.trim(); return ""; });
  theory = clean(theory.replace(/^### Explicación sencilla\s*\n/m, ""));
  const exerciseHeading = exerciseMd.match(/^### (.+)$/m)?.[1] ?? "";
  const exerciseBody = exerciseMd.replace(/^### .+$/m, "");
  return {
    number,
    title,
    theory,
    visualIdea,
    exercise: exerciseMd ? parseExercise(exerciseHeading.trim(), clean(exerciseBody)) : null,
  };
}

const sentenceCase = (text) => (text.charAt(0) + text.slice(1).toLowerCase()).replace(/\brocav\b/g, "ROCAV");

const classStarts = [...source.matchAll(/^# CLASE (\d) — (.+)$/gm)].map((match) => ({ number: Number(match[1]), title: match[2].trim(), index: match.index }));
const extrasIndex = source.indexOf("# Entregables acumulados del taller");
const notesIndex = source.indexOf("# Notas de integración para la web");

const overviewMd = source.slice(0, classStarts[0].index);
const overviewParts = Object.fromEntries(sections(overviewMd, 3).map((s) => [s.title, s.body]));

const classes = classStarts.map((item, idx) => {
  const end = idx < classStarts.length - 1 ? classStarts[idx + 1].index : extrasIndex;
  const markdown = source.slice(item.index, end).replace(/^# .+$/m, "");
  const parts = sections(markdown, 2);
  const get = (re) => parts.find((p) => re.test(p.title))?.body ?? "";

  const ficha = {};
  for (const block of labelledBlocks(get(/^Ficha de la clase/))) {
    if (/Pregunta guía/i.test(block.label)) ficha.question = block.body;
    else if (/^Objetivo/i.test(block.label)) ficha.goal = block.body;
    else if (/Valor/i.test(block.label)) ficha.value = block.body;
    else if (/Producto/i.test(block.label)) ficha.product = block.body;
    else if (/Cuenta/i.test(block.label)) ficha.account = block.body;
  }
  const route = get(/^Ruta de 240 minutos/);
  const summaryKey = Object.keys(overviewParts).find((key) => key.startsWith(`Clase ${item.number} `));
  const summary = overviewParts[summaryKey] ?? "";

  const points = parts.filter((p) => /^Punto \d+\./.test(p.title)).map((p) => {
    const match = p.title.match(/^Punto (\d+)\.\s+(.+)$/);
    return parsePoint(match[2].trim(), p.body, Number(match[1]));
  });

  const [name, subtitle = ""] = item.title.split(":").map((s) => s.trim());
  return {
    number: item.number,
    name: sentenceCase(name),
    subtitle: sentenceCase(subtitle),
    summary: clean(summary.replace(/^\*\*Se lleva:\*\*.*$/m, "")),
    takeaway: summary.match(/^\*\*Se lleva:\*\*\s*(.+)$/m)?.[1]?.trim() ?? "",
    ficha,
    requirement: get(/^Requisito/),
    analogy: get(/^Analogía/),
    route: parseTable(route).map((row) => ({ time: row["Tiempo"], type: row["Tipo"], point: row["Punto"], result: row["Resultado"] })),
    balance: route.match(/^\*\*Comprobación del balance:\*\*\s*(.+)$/m)?.[1]?.trim() ?? "",
    points,
    closing: get(/^Cierre de la clase/),
  };
});

const extrasMd = source.slice(extrasIndex, notesIndex);
const extraParts = Object.fromEntries(sections(extrasMd, 1).map((s) => [s.title, s.body]));
const deliverablesMd = extraParts["Entregables acumulados del taller"] ?? "";
const [deliverablesList, rubricMd = ""] = deliverablesMd.split(/^## Rúbrica del proyecto final.*$/m);

const payload = {
  version: 3,
  generatedFrom: "planning/CURRICULUM_SITE.md",
  intro: {
    facts: labelledBlocks(sections(overviewMd, 2)[0]?.body ?? "").filter((b) => b.label && b.label !== "Estado").map((b) => ({ label: b.label, body: b.body.split(/\n\s*\n/)[0].trim() })),
    motto: overviewMd.match(/^>\s*(.+)$/m)?.[1]?.trim() ?? "",
    house: parseTable(overviewParts["La casa completa"] ?? "").map((row) => ({ stage: row["Etapa de construcción"], question: row["Pregunta que resuelve"], product: row["Producto visible"] })),
    method: listItems(sections(overviewMd, 2).find((s) => /Cómo se aprende/.test(s.title))?.body ?? ""),
  },
  classes,
  extras: {
    deliverables: listItems(deliverablesList),
    deliverablesNote: clean(deliverablesList.split("\n").filter((line) => line.trim() && !/^\s*\d+\./.test(line)).join("\n")),
    rubric: parseTable(rubricMd).map((row) => ({ criterion: row["Criterio"], points: row["Puntos"], evidence: row["Evidencia observable"] })),
    rubricScale: listItems(rubricMd.split("**Interpretación:**")[1] ?? ""),
    practicePlan: listItems(extraParts["Plan de práctica de siete días"] ?? ""),
    glossary: parseTable(extraParts["Glosario general"] ?? "").map((row) => ({ term: row["Término"], definition: row["Definición clara"] })),
  },
};

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, `window.COURSE_CONTENT = ${JSON.stringify(payload)};\n`, "utf8");
const pointCount = classes.reduce((sum, c) => sum + c.points.length, 0);
const exerciseCount = classes.reduce((sum, c) => sum + c.points.filter((p) => p.exercise?.steps.length).length, 0);
console.log(`Contenido generado: ${path.relative(root, outputPath)}`);
console.log(`${classes.length} clases · ${pointCount} puntos · ${exerciseCount} ejercicios con pasos · ${payload.extras.glossary.length} términos`);
