import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const sourcePath = path.join(root, "planning", "CURRICULUM_SITE.md");
const outputDir = path.join(root, "site", "content");
const outputPath = path.join(outputDir, "course-content.js");
const source = fs.readFileSync(sourcePath, "utf8").replace(/\r\n/g, "\n");

const classStarts = [...source.matchAll(/^# CLASE (\d) — (.+)$/gm)].map((match) => ({
  number: Number(match[1]),
  title: match[2].trim(),
  index: match.index,
}));
const extrasIndex = source.indexOf("# Entregables acumulados del taller");

const classes = classStarts.map((item, idx) => {
  const end = idx < classStarts.length - 1 ? classStarts[idx + 1].index : extrasIndex;
  const markdown = source.slice(item.index, end).trim();
  const pointMatches = [...markdown.matchAll(/^## Punto (\d+)\. (.+)$/gm)];
  const firstPoint = pointMatches[0]?.index ?? markdown.length;
  const closingIndex = markdown.indexOf("\n## Cierre de la clase");
  const intro = markdown.slice(0, firstPoint).trim();
  const points = pointMatches.map((match, pointIdx) => {
    const start = match.index;
    const nextStart = pointIdx < pointMatches.length - 1 ? pointMatches[pointIdx + 1].index : (closingIndex > -1 ? closingIndex : markdown.length);
    return {
      number: Number(match[1]),
      title: match[2].trim(),
      markdown: markdown.slice(start, nextStart).trim(),
    };
  });
  const closing = closingIndex > -1 ? markdown.slice(closingIndex).trim() : "";
  return { number: item.number, title: item.title, intro, points, closing };
});

const payload = {
  version: 2,
  generatedFrom: "planning/CURRICULUM_SITE.md",
  overview: source.slice(0, classStarts[0].index).trim(),
  classes,
  extras: source.slice(extrasIndex, source.indexOf("# Notas de integración para la web")).trim(),
};

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, `window.COURSE_CONTENT = ${JSON.stringify(payload)};\n`, "utf8");
console.log(`Contenido generado: ${outputPath}`);
console.log(`${classes.length} clases · ${classes.reduce((sum, item) => sum + item.points.length, 0)} puntos prácticos`);
