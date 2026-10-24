/* IA de cero a Agentes · herramienta de trabajo del taller.
   Navegación por hash (#/clase/1/punto/2), vista filtrable (todo / solo teoría /
   solo ejercicios), videos con capítulos, hojas de trabajo con temporizador y
   modo presentación para proyectar en el aula. Sin dependencias. */
(() => {
  "use strict";

  const C = window.COURSE_CONTENT;
  const X = window.EXPLAINERS || {};
  // Cambia con cada render de los videos para que el navegador no muestre pósteres viejos.
  const MV = window.EXPLAINERS_VERSION ? `?v=${window.EXPLAINERS_VERSION}` : "";
  const $ = (sel, root = document) => root.querySelector(sel);
  const $$ = (sel, root = document) => [...root.querySelectorAll(sel)];
  const view = $("#vista");

  const CLASS_IMAGES = ["assets/images/01-cimientos-ia.jpg", "assets/images/02-planos-prompts.jpg", "assets/images/03-caja-skills.jpg", "assets/images/04-equipo-agentes.jpg"];
  const CLASS_ALTS = [
    "Cimientos digitales: privacidad, contexto, plataforma y control humano",
    "Planos por capas que convierten una idea en un resultado definido",
    "Caja de herramientas modular para construir una skill reutilizable",
    "Agente coordinador conectado a dos subagentes con controles humanos",
  ];
  const ANALOGY_TITLES = ["Primero se prepara el terreno", "Nadie construye sin planos", "Herramientas que se reutilizan", "Un equipo con reglas claras"];
  const MODES = ["todo", "teoria", "ejercicios"];
  const MODE_LABEL = { todo: "Todo", teoria: "Solo teoría", ejercicios: "Solo ejercicios" };

  /* ---------------- Almacenamiento seguro ---------------- */
  const store = {
    get(key, fallback) { try { const v = localStorage.getItem(key); return v === null ? fallback : JSON.parse(v); } catch (e) { return fallback; } },
    set(key, value) { try { localStorage.setItem(key, JSON.stringify(value)); } catch (e) { /* modo privado */ } },
    raw(key, value) { try { localStorage.setItem(key, value); } catch (e) {} },
  };
  const PROGRESS_KEY = "taller-progreso-v3";
  const progress = Object.assign({ th: {}, ex: {}, steps: {} }, store.get(PROGRESS_KEY, {}));
  // Migra el avance de la versión anterior (un solo "completado" por punto).
  store.get("ai-academy-course-progress-v2", []).forEach((old) => {
    const m = /^c(\d)-p(\d+)$/.exec(old);
    if (m) { const id = `c${m[1]}p${m[2]}`; progress.th[id] = true; progress.ex[id] = true; }
  });
  const saveProgress = () => store.set(PROGRESS_KEY, progress);

  /* ---------------- Utilidades ---------------- */
  const esc = (v = "") => String(v).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");
  const inline = (v = "") => esc(v)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[\s(])\*([^*\s][^*]*)\*/g, "$1<em>$2</em>")
    .replace(/\[([^\]]+)\]\((https?:[^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
  const cap = (v = "") => v.charAt(0).toUpperCase() + v.slice(1);
  const plain = (v = "") => v.replace(/[`*_>#|]/g, "").replace(/\s+/g, " ").trim();
  const fold = (v = "") => v.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  const icon = (name) => `<svg aria-hidden="true"><use href="#i-${name}"/></svg>`;
  const pid = (c, p) => `c${c}p${p}`;
  const pad = (n) => String(n).padStart(2, "0");
  const fmtTime = (s) => { s = Math.max(0, Math.round(s)); return `${Math.floor(s / 60)}:${pad(s % 60)}`; };
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function markdown(md = "") {
    const lines = md.replace(/\r/g, "").split("\n");
    const out = [];
    let i = 0;
    const isTable = (l, n = "") => /^\|/.test(l.trim()) && /^\|?\s*:?-+/.test(n.trim());
    const special = (l, n) => !l.trim() || /^#{1,4}\s/.test(l) || /^---+$/.test(l.trim()) || /^>\s?/.test(l.trim()) || /^[-*]\s+/.test(l.trim()) || /^\d+\.\s+/.test(l.trim()) || isTable(l, n);
    const lightClass = (item) => /^\*\*Verde/.test(item) ? ' class="light-g"' : /^\*\*Amarillo/.test(item) ? ' class="light-y"' : /^\*\*Rojo/.test(item) ? ' class="light-r"' : "";
    while (i < lines.length) {
      const t = lines[i].trim();
      const next = lines[i + 1] || "";
      if (!t) { i += 1; continue; }
      if (/^---+$/.test(t)) { out.push("<hr>"); i += 1; continue; }
      const h = t.match(/^(#{1,4})\s+(.+)$/);
      if (h) { const lvl = Math.max(3, h[1].length); out.push(`<h${lvl}>${inline(h[2])}</h${lvl}>`); i += 1; continue; }
      if (/^>\s?/.test(t)) {
        const parts = [];
        while (i < lines.length && /^>\s?/.test(lines[i].trim())) { parts.push(lines[i].trim().replace(/^>\s?/, "")); i += 1; }
        out.push(`<blockquote>${inline(parts.join(" "))}</blockquote>`);
        continue;
      }
      if (isTable(t, next)) {
        const rows = [];
        while (i < lines.length && /^\|/.test(lines[i].trim())) { rows.push(lines[i].trim().replace(/^\||\|$/g, "").split("|").map((c) => c.trim())); i += 1; }
        out.push(`<div class="table-wrap"><table><thead><tr>${rows[0].map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>${rows.slice(2).map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
        continue;
      }
      if (/^[-*]\s+/.test(t) || /^\d+\.\s+/.test(t)) {
        const ordered = /^\d+\./.test(t);
        const re = ordered ? /^\d+\.\s+/ : /^[-*]\s+/;
        const items = [];
        while (i < lines.length && re.test(lines[i].trim())) { items.push(lines[i].trim().replace(re, "")); i += 1; }
        const tag = ordered ? "ol" : "ul";
        out.push(`<${tag}>${items.map((it) => `<li${lightClass(it)}>${inline(it)}</li>`).join("")}</${tag}>`);
        continue;
      }
      const para = [t];
      i += 1;
      while (i < lines.length && !special(lines[i], lines[i + 1] || "")) { para.push(lines[i].trim()); i += 1; }
      out.push(`<p>${inline(para.join(" "))}</p>`);
    }
    return out.join("\n");
  }

  const toastEl = $("#toast");
  let toastTimer;
  function toast(msg) {
    toastEl.textContent = msg;
    toastEl.classList.add("is-on");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toastEl.classList.remove("is-on"), 2200);
  }

  /* ---------------- Modelo ---------------- */
  const classes = C.classes;
  const allPoints = classes.flatMap((c) => c.points.map((p) => ({ cls: c, point: p, id: pid(c.number, p.number) })));
  const findPoint = (c, p) => allPoints.find((x) => x.cls.number === c && x.point.number === p);
  const isDone = (id) => !!progress.th[id] && !!progress.ex[id];
  const totals = () => {
    const th = allPoints.filter((x) => progress.th[x.id]).length;
    const ex = allPoints.filter((x) => progress.ex[x.id]).length;
    return { th, ex, all: allPoints.length, pct: Math.round(((th + ex) / (allPoints.length * 2)) * 100) };
  };
  const mode = () => document.documentElement.dataset.mode || "todo";

  function explainer(id) {
    const e = X[id];
    if (!e) return null;
    const D = e.duration;
    const stepsStart = 15.2;
    const stepDur = (D - 6.6 - 0.4 - stepsStart) / e.steps.length;
    const chapters = [
      { label: "La pregunta", t: 0 },
      { label: "Analogía", t: 6.2 },
      ...e.steps.map((s, i) => ({ label: s.label, caption: s.caption, t: stepsStart + i * stepDur, step: i + 1 })),
      { label: "Idea clave", t: D - 6.6 },
    ];
    return { ...e, chapters };
  }

  /* ---------------- Índice lateral ---------------- */
  function renderRail(route) {
    const t = totals();
    $("#rail-progress").innerHTML = `
      <div class="rp-row"><div class="ring" style="--p:${t.pct}"><b>${t.pct}%</b></div>
      <div class="rp-text"><b>Tu avance en el taller</b><span>${t.th} de ${t.all} temas · ${t.ex} de ${t.all} ejercicios</span></div></div>
      <div class="rp-legend"><span><i style="background:var(--brand-2)"></i>Teoría</span><span><i style="background:var(--yellow)"></i>Ejercicio</span><span><i style="background:var(--green)"></i>Completo</span></div>`;
    $("#rail-nav").innerHTML = `
      <a class="rail-home" href="#/" ${route.name === "home" ? 'aria-current="page"' : ""}>${icon("home")}Inicio del taller</a>
      ${classes.map((c) => {
        const open = route.cls === c.number;
        const done = c.points.filter((p) => isDone(pid(c.number, p.number))).length;
        return `<div class="floor ${open ? "is-open" : ""}" data-cls="${c.number}">
          <a class="floor-head" href="#/clase/${c.number}" ${route.name === "class" && open ? 'aria-current="page"' : ""}>
            <span class="floor-num">${c.number}</span>
            <span class="floor-title"><b>${esc(c.name)}</b><small>${esc(c.subtitle)}</small></span>
            <span class="floor-bar" title="${done} de ${c.points.length} puntos completos"><i style="width:${(done / c.points.length) * 100}%"></i></span>
          </a>
          <ul class="floor-points">${c.points.map((p) => {
            const id = pid(c.number, p.number);
            const state = isDone(id) ? "is-complete" : (progress.th[id] || progress.ex[id]) ? "is-partial" : "";
            const current = route.name === "point" && route.cls === c.number && route.point === p.number;
            return `<li><a class="${state}" href="#/clase/${c.number}/punto/${p.number}" ${current ? 'aria-current="page"' : ""}><span class="pt-n">${c.number}.${p.number}</span><span class="pt-t">${esc(p.title)}</span></a></li>`;
          }).join("")}</ul>
        </div>`;
      }).join("")}`;
  }

  /* ---------------- Inicio ---------------- */
  function renderHome() {
    const t = totals();
    const facts = Object.fromEntries((C.intro.facts || []).map((f) => [f.label, f.body]));
    const resume = allPoints.find((x) => !isDone(x.id)) || allPoints[0];
    const started = t.th + t.ex > 0;
    return `<div class="view-inner">
      <section class="home-hero">
        <div class="reveal">
          <span class="eyebrow">Taller práctico · AI Academy by Campuslands</span>
          <h1 class="h-display">IA de cero a <em>Agentes</em></h1>
          <p class="lead">Aprender IA se parece a construir una casa: primero los cimientos, después los planos, luego las herramientas y al final un equipo que trabaja con reglas claras. Cada tema trae un video que lo explica y una hoja de trabajo para practicarlo.</p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#/clase/${resume.cls.number}/punto/${resume.point.number}">${icon("play")}${started ? `Continuar en ${resume.cls.number}.${resume.point.number}` : "Empezar por los cimientos"}</a>
            <a class="btn" href="#recorrido" data-scroll="recorrido">${icon("screen")}Ver el recorrido</a>
            <button class="btn" type="button" data-set-mode="ejercicios">${icon("pencil")}Ver solo los ejercicios</button>
          </div>
          <div class="hero-facts">
            <div class="fact"><b>4</b><span>clases de 4 h</span></div>
            <div class="fact"><b>21</b><span>temas con video</span></div>
            <div class="fact"><b>21</b><span>ejercicios guiados</span></div>
            <div class="fact"><b>50/50</b><span>teoría y práctica</span></div>
          </div>
        </div>
        <div class="building" aria-label="Las cuatro clases como pisos de un edificio">
          ${classes.map((c, i) => `<a class="storey" data-cls="${c.number}" href="#/clase/${c.number}">
            <img class="storey-img" src="${CLASS_IMAGES[i]}" alt="" loading="lazy" />
            <span><b>${c.number}. ${esc(c.name)}</b><small>${esc(c.subtitle)}</small></span>
            <span class="storey-n">${c.points.length} temas</span>
          </a>`).join("")}
          <img class="hero-orbit" src="assets/images/orbit-presenta.png" alt="" />
        </div>
      </section>

      ${C.intro.motto ? `<p class="motto reveal">“${esc(C.intro.motto).replace("como una casa", "<span>como una casa</span>")}”</p>` : ""}

      <section class="section">
        <div class="section-head"><div><span class="eyebrow">Cómo se aprende</span><h2 class="h-section">Un mismo ciclo en cada tema</h2><p class="lead">El video y la explicación cubren entender y ver; la hoja de trabajo cubre hacer, probar y explicar.</p></div></div>
        <ol class="loop">
          ${["Entender", "Ver", "Hacer", "Probar", "Explicar"].map((name, i) => {
            const text = (C.intro.method[i] || "").replace(/^\*\*[^*]+\*\*\s*/, "");
            const ex = i >= 2;
            return `<li class="reveal ${ex ? "is-ex" : "is-th"}"><span class="loop-n">${i + 1}</span><b>${name}</b><p>${inline(cap(text))}</p><small>${ex ? "Hoja de trabajo" : "Teoría y video"}</small></li>`;
          }).join("")}
        </ol>
      </section>

      <section class="section">
        <div class="section-head"><div><span class="eyebrow">Las cuatro clases</span><h2 class="h-section">Cada piso sostiene al siguiente</h2></div></div>
        <div class="class-cards">
          ${classes.map((c, i) => `<a class="class-card reveal" data-cls="${c.number}" href="#/clase/${c.number}">
            <figure><img src="${CLASS_IMAGES[i]}" alt="${esc(CLASS_ALTS[i])}" loading="lazy" /><span class="cc-badge">Clase ${c.number}</span></figure>
            <div class="cc-body"><h3>${esc(c.name)}</h3><p class="cc-sub">${esc(c.subtitle)}</p><p>${inline(c.ficha.question || "")}</p>
            <div class="cc-meta"><span class="chip accent">${icon("gift")}${inline(cap(c.takeaway.split(",")[0]))}</span><span class="chip">${icon("clock")}240 min</span></div></div>
          </a>`).join("")}
        </div>
      </section>

      <section class="section">
        <div class="journey">
          <video id="recorrido" controls playsinline preload="none" poster="assets/motion/recorrido-taller.jpg${MV}" aria-label="Recorrido animado por las cuatro clases y los 21 temas del taller"><source src="assets/motion/recorrido-taller.mp4${MV}" type="video/mp4" /></video>
          <div>
            <span class="eyebrow">Recorrido de la primera clase · 1 min 44 s</span>
            <h2 class="h-section">Los 4 pisos y los 21 temas en un vistazo</h2>
            <dl class="facts-list">
              ${["Metodología", "Público", "Plataformas", "Principio de seguridad"].filter((k) => facts[k]).map((k) => `<div><dt>${k}</dt><dd>${inline(cap(facts[k]))}</dd></div>`).join("")}
            </dl>
          </div>
        </div>
      </section>
      <footer class="home-foot"><img src="assets/images/logo-ai-academy.png" alt="AI Academy by Campuslands" width="200" height="98" loading="lazy" /><p>Material educativo del Taller Práctico: IA de cero a Agentes. Tu avance se guarda solo en este navegador.</p></footer>
    </div>`;
  }

  /* ---------------- Clase ---------------- */
  function routeBar(c) {
    const rows = c.route.map((r) => {
      const [a, b] = (r.time || "").split(/[–-]/).map(Number);
      return { ...r, min: (b - a) || 1, from: a, kind: /teor/i.test(r.type) ? "t" : /pausa/i.test(r.type) ? "x" : "p" };
    });
    return `<div class="route">
      <div class="route-bar" role="list">${rows.map((r, i) => `<button type="button" role="listitem" class="route-seg ${r.kind}" style="--min:${r.min}" data-i="${i}" aria-label="${esc(`${r.time} min · ${r.type}: ${plain(r.point)} — ${plain(r.result)}`)}"><span>${r.min >= 15 ? r.min + "′" : ""}</span></button>`).join("")}</div>
      <div class="route-scale"><span>0′</span><span>60′</span><span>120′</span><span>180′</span><span>240′</span></div>
      <p class="route-detail" id="route-detail">Toca un tramo para ver qué se hace en ese momento.</p>
      <div class="route-legend"><span><i style="background:#7a3cff"></i>Teoría</span><span><i style="background:var(--accent)"></i>Práctica individual</span><span><i style="background:var(--surface-3)"></i>Pausa</span>${c.balance ? `<span style="color:var(--text-3)">${inline(c.balance)}</span>` : ""}</div>
      <script type="application/json" id="route-data">${JSON.stringify(rows).replaceAll("<", "\\u003c")}</script>
    </div>`;
  }

  function pointTile(c, p) {
    const id = pid(c.number, p.number);
    const ex = p.exercise;
    return `<a class="point-tile reveal ${isDone(id) ? "is-complete" : ""}" href="#/clase/${c.number}/punto/${p.number}">
      <div class="pt-media"><img src="assets/motion/points/posters/${id}.jpg${MV}" alt="" loading="lazy" /><span class="pt-num">Punto ${c.number}.${p.number}</span><span class="pt-play">${icon("play")}</span><span class="pt-done" title="Completo">${icon("check")}</span></div>
      <div class="pt-body"><h3>${esc(p.title)}</h3>
        ${ex ? `<p class="pt-purpose">${inline(cap(ex.purpose))}<span>${ex.steps.length} pasos · evidencia y criterio de éxito</span></p>` : ""}
        <div class="pt-parts">
          <span class="pt-part th only-th ${progress.th[id] ? "is-done" : ""}">${icon("book")}Teoría con video<em>${X[id] ? Math.round(X[id].duration) + " s" : ""}</em><svg class="tick"><use href="#i-check"/></svg></span>
          ${ex ? `<span class="pt-part ex only-ex ${progress.ex[id] ? "is-done" : ""}">${icon("pencil")}${esc(ex.title)}<em>${ex.minutes ? ex.minutes + " min" : ""}</em><svg class="tick"><use href="#i-check"/></svg></span>` : ""}
        </div>
      </div></a>`;
  }

  function renderClass(n) {
    const c = classes.find((k) => k.number === n);
    if (!c) return notFound();
    const f = c.ficha;
    const exMinutes = c.points.reduce((s, p) => s + (p.exercise?.minutes || 0), 0);
    return `<div class="view-inner" data-cls="${c.number}">
      <nav class="crumbs" aria-label="Ruta"><a href="#/">Inicio</a>${icon("right")}<span>Clase ${c.number}</span></nav>
      <section class="class-hero">
        <img src="${CLASS_IMAGES[n - 1]}" alt="${esc(CLASS_ALTS[n - 1])}" />
        <div class="ch-copy">
          <span class="eyebrow">Clase ${c.number} de 4</span>
          <h1 class="h-display">${esc(c.name)}</h1>
          <p class="ch-sub">${esc(c.subtitle)}</p>
          ${f.question ? `<blockquote><small>Pregunta guía</small>${inline(f.question)}</blockquote>` : ""}
          <div class="ch-meta"><span class="chip">${icon("clock")}240 minutos</span><span class="chip">${icon("book")}${c.points.length} temas con video</span><span class="chip">${icon("pencil")}${c.points.length} ejercicios · ${exMinutes} min</span>${f.account ? `<span class="chip">${icon("lock")}${cap(plain(f.account).replace(/\.$/, ""))}</span>` : ""}</div>
        </div>
      </section>
      <div class="mode-banner th">${icon("book")}Estás viendo solo la teoría de esta clase.<button type="button" data-set-mode="todo">Ver todo</button></div>
      <div class="mode-banner ex">${icon("pencil")}Estás viendo solo los ejercicios: ${c.points.length} hojas de trabajo, ${exMinutes} minutos de práctica.<button type="button" data-set-mode="todo">Ver todo</button></div>
      <div class="ficha">
        <article class="reveal"><h3>${icon("target")}Objetivo</h3><p>${inline(cap(f.goal || ""))}</p></article>
        <article class="reveal"><h3>${icon("star")}Valor que te llevas</h3><p>${inline(cap(f.value || ""))}</p></article>
        <article class="reveal"><h3>${icon("gift")}Producto</h3><p>${inline(cap(f.product || ""))}</p></article>
      </div>
      ${c.requirement ? `<div class="alert">${icon("alert")}<div><b>Requisito obligatorio antes de llegar</b><p>${inline(c.requirement)}</p></div></div>` : ""}
      ${c.analogy ? `<div class="analogy only-th"><span class="an-icon">${icon("home")}</span><div><h3>${ANALOGY_TITLES[n - 1]}</h3><p>${inline(c.analogy)}</p></div></div>` : ""}

      <section class="section">
        <div class="section-head"><div><span class="eyebrow">Ruta de la clase</span><h2 class="h-section">Así se reparten los 240 minutos</h2></div></div>
        ${routeBar(c)}
      </section>

      <section class="section">
        <div class="section-head"><div><span class="eyebrow">Temas y ejercicios</span><h2 class="h-section">${{ todo: "Puntos de aprendizaje", teoria: "Temas de la clase", ejercicios: "Hojas de trabajo de la clase" }[mode()]}</h2></div>
          <button class="btn btn-sm" type="button" data-action="present-class" data-cls-n="${c.number}">${icon("screen")}Presentar esta clase</button></div>
        <div class="points-grid">${c.points.map((p) => pointTile(c, p)).join("")}</div>
      </section>

      ${c.closing ? `<div class="closing"><img src="assets/images/orbit-presenta.png" alt="" /><div><h3>¿Listo para subir al siguiente piso?</h3><p>${inline(c.closing)}</p>${n < 4 ? `<p style="margin-top:14px"><a class="btn btn-sm" href="#/clase/${n + 1}">Ir a la clase ${n + 1} ${icon("right")}</a></p>` : `<p style="margin-top:14px"><a class="btn btn-sm" href="#/entregables">Ver entregables y rúbrica ${icon("right")}</a></p>`}</div></div>` : ""}
    </div>`;
  }

  /* ---------------- Punto ---------------- */
  function playerMarkup(id, ex) {
    const chapters = ex ? ex.chapters : [];
    return `<div class="player" data-player="${id}">
      <video playsinline preload="metadata" poster="assets/motion/points/posters/${id}.jpg${MV}" aria-label="Explicación animada del tema"><source src="assets/motion/points/${id}.mp4${MV}" type="video/mp4" /></video>
      <button class="player-big" type="button" data-p="play" aria-label="Reproducir explicación">${icon("play")}</button>
      <div class="player-bar">
        <button type="button" data-p="toggle" aria-label="Reproducir o pausar">${icon("play")}</button>
        <button type="button" data-p="restart" aria-label="Volver al inicio">${icon("replay")}</button>
        <div class="scrub"><div class="scrub-track"><div class="scrub-fill"></div>${chapters.slice(1).map((ch) => `<span class="scrub-mark" data-t="${ch.t}"></span>`).join("")}</div><input type="range" min="0" max="1000" value="0" step="1" aria-label="Posición del video" /></div>
        <span class="player-time">0:00 / ${ex ? fmtTime(ex.duration) : "0:00"}</span>
        <button type="button" data-p="max" aria-label="Pantalla completa">${icon("max")}</button>
      </div>
      ${chapters.length ? `<div class="chapters" role="list">${chapters.map((ch, i) => `<button type="button" role="listitem" data-t="${ch.t}" data-ch="${i}"><i>${fmtTime(ch.t)}</i>${esc(ch.label)}</button>`).join("")}</div>` : ""}
    </div>`;
  }

  function sheetMarkup(c, p) {
    const ex = p.exercise;
    if (!ex) return "";
    const id = pid(c.number, p.number);
    const checked = new Set(progress.steps[id] || []);
    const done = !!progress.ex[id];
    return `<section class="sheet only-ex" id="ejercicio" aria-labelledby="sheet-title">
      <div class="part-label ex"><span class="pl-tag">${icon("pencil")}Practicar · hoja de trabajo</span></div>
      <div class="sheet-head">
        <div><h2 id="sheet-title">Ejercicio ${ex.number ?? p.number} · ${esc(ex.title)}</h2>${ex.purpose ? `<p class="sheet-purpose"><b>Para qué:</b> ${inline(cap(ex.purpose))}</p>` : ""}</div>
        ${timerMarkup(id, ex.minutes)}
      </div>
      ${flowMarkup(ex)}
      ${ex.context.length ? `<div class="sheet-block"><h3><span class="flow-n">1</span>${icon("file")}El caso</h3>${ex.context.map((b) => /^Pega en la IA/i.test(b.label)
        ? `<div class="case-card paste-card"><h4>${icon("copy")}Pega esto en la IA</h4><button class="copy-btn paste-copy" type="button" data-copy-raw="${esc(b.body)}">${icon("copy")}Copiar</button><pre class="paste-text">${esc(b.body)}</pre></div>`
        : `<div class="case-card">${b.label ? `<h4>${esc(b.label)}<span class="hint">Léelo · no lo pegues tal cual</span></h4>` : ""}<div class="md">${markdown(b.body)}</div></div>`).join("")}</div>` : ""}
      <div class="sheet-block">
        <div class="steps-head"><h3><span class="flow-n">2</span>${icon("flag")}Pasos</h3><span class="steps-count"><span class="bar"><i style="width:${(checked.size / ex.steps.length) * 100}%"></i></span><span data-steps-count>${checked.size} de ${ex.steps.length}</span></span></div>
        <ol class="steps">${ex.steps.map((s, i) => `<li><label><input type="checkbox" data-step="${i}" ${checked.has(i) ? "checked" : ""} /><span class="step-text">${inline(s)}</span><span class="step-box">${icon("check")}</span></label></li>`).join("")}</ol>
        ${ex.stepsNote ? `<div class="md steps-note">${markdown(ex.stepsNote)}</div>` : ""}
      </div>
      ${ex.examples.length ? `<div class="sheet-block"><h3><span class="flow-n">3</span>${icon("eye")}Así se ve un buen resultado</h3><p class="block-hint">Úsalo para comparar o si te trabas. No es lo que pegas al inicio.</p></div>` : ""}
      ${ex.examples.map((e) => `<div class="sheet-block"><div class="example"><h4>${esc(e.label)}</h4><button class="copy-btn" type="button" data-copy>${icon("copy")}Copiar ejemplo</button><div class="md">${markdown(cap(e.body))}</div></div></div>`).join("")}
      <div class="sheet-block"><h3><span class="flow-n">4</span>${icon("gift")}Entrega</h3></div>
      <div class="deliver">
        ${ex.evidence ? `<article class="ev"><h3>${icon("file")}Qué entregas</h3><p>${inline(cap(ex.evidence))}</p></article>` : ""}
        ${ex.success ? `<article class="ok"><h3>${icon("target")}Lo lograste si…</h3><p>${inline(ex.success)}</p></article>` : ""}
      </div>
      <div class="sheet-foot">
        <button class="btn btn-done ${done ? "is-done" : ""}" type="button" data-action="toggle-ex" aria-pressed="${done}">${icon("check")}${done ? "Ejercicio completado" : "Marcar ejercicio como completado"}</button>
        <span class="spacer"></span>
        <button class="btn btn-sm" type="button" data-action="reset-steps">${icon("reset")}Reiniciar pasos</button>
        <button class="btn btn-sm" type="button" data-action="print">${icon("printer")}Imprimir hoja</button>
      </div>
    </section>`;
  }

  // Ruta fija de cada hoja para que nadie se pierda: qué leer, qué pegar, qué hacer y qué entregar.
  function flowMarkup(ex) {
    const paste = ex.context.some((b) => /^Pega en la IA/i.test(b.label));
    const steps = [
      paste ? "Copia el texto morado y pégalo en tu IA" : "Lee el caso",
      "Sigue los pasos y márcalos",
      ex.examples.length ? "Compara con el ejemplo" : "Revisa tu resultado",
      "Entrega la evidencia",
    ];
    return `<ol class="sheet-flow" aria-label="Cómo hacer este ejercicio">${steps.map((t, i) => `<li><b>${i + 1}</b>${t}</li>`).join("")}</ol>`;
  }

  function timerMarkup(id, minutes) {
    if (!minutes) return "";
    const t = timers[id] || { total: minutes * 60, left: minutes * 60 };
    return `<div class="timer ${t.running ? "is-running" : ""} ${t.left <= 0 ? "is-over" : ""}" data-timer="${id}" data-total="${minutes * 60}">
      <div class="timer-ring" style="--p:${(t.left / t.total) * 100}">${icon("clock")}</div>
      <div class="timer-read"><b data-timer-read>${fmtTime(t.left)}</b><small>${minutes} min de práctica</small></div>
      <div class="timer-btns"><button type="button" data-timer-act="toggle" aria-label="Iniciar o pausar temporizador">${icon(t.running ? "pause" : "play")}</button><button type="button" data-timer-act="reset" aria-label="Reiniciar temporizador">${icon("reset")}</button></div>
    </div>`;
  }

  function renderPoint(n, m) {
    const found = findPoint(n, m);
    if (!found) return notFound();
    const { cls: c, point: p, id } = found;
    const ex = explainer(id);
    const idx = allPoints.indexOf(found);
    const prev = allPoints[idx - 1];
    const next = allPoints[idx + 1];
    const thDone = !!progress.th[id];
    return `<div class="view-inner" data-cls="${c.number}" data-point="${id}">
      <nav class="crumbs" aria-label="Ruta"><a href="#/">Inicio</a>${icon("right")}<a href="#/clase/${c.number}">Clase ${c.number} · ${esc(c.name)}</a>${icon("right")}<span>Punto ${p.number}</span></nav>
      <header class="point-head">
        <div class="point-badge"><small>Punto</small><b>${c.number}.${p.number}</b></div>
        <div><h1 class="h-display">${esc(p.title)}</h1>
          <div class="ph-sub"><span class="chip accent">Clase ${c.number} · ${esc(c.name)}</span>${ex ? `<span class="chip only-th">${icon("play")}Video de ${Math.round(ex.duration)} s</span>` : ""}${p.exercise?.minutes ? `<span class="chip only-ex">${icon("clock")}Ejercicio de ${p.exercise.minutes} min</span>` : ""}</div>
        </div>
      </header>
      <div class="jump">
        <a class="th" href="#teoria" data-scroll="teoria"><span class="jn">1</span><span>Entender<small>Video y explicación</small></span></a>
        <a class="ex" href="#ejercicio" data-scroll="ejercicio"><span class="jn">2</span><span>Practicar<small>${esc(p.exercise?.title || "Hoja de trabajo")}</small></span></a>
      </div>

      <section class="theory only-th" id="teoria" aria-labelledby="theory-title">
        <div class="part-label th"><span class="pl-tag">${icon("book")}Entender · teoría</span></div>
        ${playerMarkup(id, ex)}
        <div class="theory-grid">
          <div class="md" id="theory-title-wrap"><h3 id="theory-title" class="sr-only">Explicación</h3>${markdown(p.theory)}</div>
          ${ex ? `<aside class="watch-card"><h3>${icon("eye")}Qué explica el video</h3><p><b>${esc(ex.analogy.title)}.</b> ${plain(ex.analogy.text)}</p>
            <ol class="watch-steps">${ex.chapters.filter((ch) => ch.step).map((ch) => `<li><button type="button" data-t="${ch.t}" data-ch="${ex.chapters.indexOf(ch)}"><i>${ch.step}</i><span><b>${esc(ch.label)}</b>${plain(ch.caption)}</span></button></li>`).join("")}</ol>
            <div class="key-idea"><small>Idea clave</small>${plain(ex.takeaway.title)}</div></aside>` : p.visualIdea ? `<aside class="watch-card"><h3>${icon("eye")}Qué observar en el video</h3><p>${inline(p.visualIdea)}</p></aside>` : ""}
        </div>
        <div class="understood">
          <button class="btn ${thDone ? "is-done" : ""}" type="button" data-action="toggle-th" aria-pressed="${thDone}">${icon("check")}${thDone ? "Tema entendido" : "Marcar tema como entendido"}</button>
          <p>Úsalo para llevar tu avance; se guarda solo en este navegador.</p>
        </div>
      </section>

      ${sheetMarkup(c, p)}

      <nav class="pager" aria-label="Navegación entre puntos">
        ${prev ? `<a class="prev" href="#/clase/${prev.cls.number}/punto/${prev.point.number}"><small>${icon("left")}Anterior · ${prev.cls.number}.${prev.point.number}</small><b>${esc(prev.point.title)}</b></a>` : "<span></span>"}
        ${next ? `<a class="next" href="#/clase/${next.cls.number}/punto/${next.point.number}"><small>Siguiente · ${next.cls.number}.${next.point.number}${icon("right")}</small><b>${esc(next.point.title)}</b></a>` : `<a class="next" href="#/entregables"><small>Final del taller${icon("right")}</small><b>Entregables y rúbrica</b></a>`}
      </nav>
    </div>`;
  }

  /* ---------------- Entregables ---------------- */
  function renderExtras() {
    const e = C.extras;
    const rubric = e.rubric.filter((r) => !/total/i.test(r.criterion));
    const max = Math.max(...rubric.map((r) => Number(r.points) || 0));
    return `<div class="view-inner">
      <nav class="crumbs" aria-label="Ruta"><a href="#/">Inicio</a>${icon("right")}<span>Entregables y rúbrica</span></nav>
      <span class="eyebrow">Resultado final</span>
      <h1 class="h-display" style="font-size:clamp(38px,5vw,64px);margin:12px 0 10px">No sales con teoría: sales con un sistema</h1>
      <p class="lead">${inline(e.deliverablesNote)}</p>
      <section class="section"><div class="section-head"><div><span class="eyebrow">Lo que construyes</span><h2 class="h-section">${e.deliverables.length} entregables acumulados</h2></div></div>
        <ol class="deliverables">${e.deliverables.map((d) => `<li class="reveal">${inline(d)}</li>`).join("")}</ol></section>
      <section class="section"><div class="section-head"><div><span class="eyebrow">Evaluación</span><h2 class="h-section">Rúbrica del proyecto final · 100 puntos</h2></div></div>
        <div class="rubric">${rubric.map((r) => `<div class="rubric-row"><div><b>${inline(r.criterion)}</b><small>${inline(r.evidence)}</small></div><div class="rubric-bar"><i style="width:${(Number(r.points) / max) * 100}%"></i></div><strong>${esc(r.points)}</strong></div>`).join("")}</div>
        <div class="scale">${e.rubricScale.map((s) => { const [range, ...rest] = s.split(":"); return `<div><b>${esc(range)}</b>${inline(rest.join(":"))}</div>`; }).join("")}</div></section>
      <section class="section"><div class="section-head"><div><span class="eyebrow">Después del taller</span><h2 class="h-section">Plan de práctica de siete días</h2></div></div>
        <ol class="week">${e.practicePlan.map((d, i) => `<li><b>Día ${i + 1}</b>${inline(d)}</li>`).join("")}</ol></section>
      <section class="section"><div class="section-head"><div><span class="eyebrow">Vocabulario</span><h2 class="h-section">Glosario general</h2></div><button class="btn btn-sm" type="button" data-action="glossary">${icon("search")}Buscar término</button></div>
        <div class="md"><div class="table-wrap"><table><thead><tr><th>Término</th><th>Definición</th></tr></thead><tbody>${e.glossary.map((g) => `<tr><td><strong>${esc(g.term)}</strong></td><td>${inline(g.definition)}</td></tr>`).join("")}</tbody></table></div></div></section>
    </div>`;
  }

  const notFound = () => `<div class="view-inner"><h1 class="h-display">No encontramos esa página</h1><p class="lead">Vuelve al <a href="#/">inicio del taller</a>.</p></div>`;

  /* ---------------- Enrutador ---------------- */
  function parseRoute() {
    const h = decodeURIComponent(location.hash || "");
    let m;
    if ((m = /^#\/clase\/(\d)\/punto\/(\d+)/.exec(h))) return { name: "point", cls: +m[1], point: +m[2] };
    if ((m = /^#\/clase\/(\d)/.exec(h))) return { name: "class", cls: +m[1] };
    if ((m = /^#clase-(\d)/.exec(h))) return { name: "class", cls: +m[1] };
    if (/^#\/entregables/.test(h) || h === "#entregables") return { name: "extras" };
    return { name: "home" };
  }

  let route = parseRoute();
  function render() {
    stopTimers(false);
    route = parseRoute();
    const html = route.name === "point" ? renderPoint(route.cls, route.point) : route.name === "class" ? renderClass(route.cls) : route.name === "extras" ? renderExtras() : renderHome();
    view.innerHTML = html;
    renderRail(route);
    document.body.classList.remove("rail-open");
    $(".rail-scrim").hidden = true;
    const titles = { home: "Inicio", class: `Clase ${route.cls}`, point: `Punto ${route.cls}.${route.point}`, extras: "Entregables" };
    const p = route.name === "point" ? findPoint(route.cls, route.point) : null;
    document.title = `${p ? p.point.title : titles[route.name]} · IA de cero a Agentes`;
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    bindView();
    $(".floor-points a[aria-current]")?.scrollIntoView({ block: "nearest" });
    if (route.name === "point") store.raw("taller-ultimo", location.hash);
  }

  /* ---------------- Interacciones de la vista ---------------- */
  function bindView() {
    $$("[data-player]", view).forEach(bindPlayer);
    const data = $("#route-data", view);
    if (data) {
      const rows = JSON.parse(data.textContent);
      const detail = $("#route-detail", view);
      $$(".route-seg", view).forEach((seg) => {
        const show = () => { const r = rows[+seg.dataset.i]; detail.innerHTML = `<b>${esc(r.time)} min · ${esc(r.type)}</b> — ${inline(r.point)}${r.result && r.result !== "—" ? ` → ${inline(r.result)}` : ""}`; };
        seg.addEventListener("mouseenter", show);
        seg.addEventListener("focus", show);
        seg.addEventListener("click", show);
      });
    }
    const sheet = $(".sheet", view);
    if (sheet) bindSheet(sheet);
    $$("[data-scroll]", view).forEach((a) => a.addEventListener("click", (e) => {
      e.preventDefault();
      const target = document.getElementById(a.dataset.scroll);
      target?.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" });
      if (target?.tagName === "VIDEO") target.play().catch(() => {});
    }));
  }

  function bindPlayer(root) {
    const id = root.dataset.player;
    const video = $("video", root);
    const fill = $(".scrub-fill", root);
    const range = $(".scrub input", root);
    const time = $(".player-time", root);
    const toggleBtn = $('[data-p="toggle"]', root);
    const ex = explainer(id);
    const chapters = ex ? ex.chapters : [];
    const chapterBtns = $$(".chapters button", root);
    const watchBtns = $$(".watch-steps button", view);
    const play = () => video.play().catch(() => {});
    const toggle = () => (video.paused ? play() : video.pause());
    const seek = (t) => { video.currentTime = t; play(); };

    const placeMarks = () => {
      const d = video.duration || ex?.duration;
      if (!d) return;
      $$(".scrub-mark", root).forEach((mk) => { mk.style.left = `${(mk.dataset.t / d) * 100}%`; });
    };
    placeMarks();
    video.addEventListener("loadedmetadata", placeMarks);
    video.addEventListener("play", () => { root.classList.add("is-playing"); toggleBtn.innerHTML = icon("pause"); });
    video.addEventListener("pause", () => { root.classList.remove("is-playing"); toggleBtn.innerHTML = icon("play"); });
    video.addEventListener("ended", () => { root.classList.remove("is-playing"); toggleBtn.innerHTML = icon("play"); if (!progress.th[id]) toast("¿Quedó claro? Márcalo como entendido al final de la explicación."); });
    video.addEventListener("timeupdate", () => {
      const d = video.duration || 1;
      fill.style.width = `${(video.currentTime / d) * 100}%`;
      range.value = Math.round((video.currentTime / d) * 1000);
      time.textContent = `${fmtTime(video.currentTime)} / ${fmtTime(d)}`;
      let active = 0;
      chapters.forEach((ch, i) => { if (video.currentTime + 0.05 >= ch.t) active = i; });
      chapterBtns.forEach((b) => b.classList.toggle("is-active", +b.dataset.ch === active));
      watchBtns.forEach((b) => b.classList.toggle("is-active", +b.dataset.ch === active));
    });
    video.addEventListener("click", toggle);
    $('[data-p="play"]', root).addEventListener("click", play);
    toggleBtn.addEventListener("click", toggle);
    $('[data-p="restart"]', root).addEventListener("click", () => seek(0));
    $('[data-p="max"]', root).addEventListener("click", () => (root.requestFullscreen || root.webkitRequestFullscreen)?.call(root));
    range.addEventListener("input", () => { const d = video.duration || ex?.duration || 0; video.currentTime = (range.value / 1000) * d; });
    chapterBtns.forEach((b) => b.addEventListener("click", () => seek(+b.dataset.t)));
    watchBtns.forEach((b) => b.addEventListener("click", () => { seek(+b.dataset.t); root.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "center" }); }));
  }

  function bindSheet(sheet) {
    const id = view.querySelector("[data-point]").dataset.point;
    const boxes = $$("[data-step]", sheet);
    const count = $("[data-steps-count]", sheet);
    const bar = $(".steps-count .bar i", sheet);
    const sync = () => {
      const on = boxes.filter((b) => b.checked).map((b) => +b.dataset.step);
      progress.steps[id] = on;
      saveProgress();
      count.textContent = `${on.length} de ${boxes.length}`;
      bar.style.width = `${(on.length / boxes.length) * 100}%`;
      if (on.length === boxes.length && !progress.ex[id]) toast("¡Todos los pasos listos! Revisa la evidencia y marca el ejercicio.");
    };
    boxes.forEach((b) => b.addEventListener("change", sync));
    $('[data-action="reset-steps"]', sheet)?.addEventListener("click", () => { boxes.forEach((b) => { b.checked = false; }); sync(); });
    $$("[data-copy-raw]", sheet).forEach((btn) => btn.addEventListener("click", async () => {
      try { await navigator.clipboard.writeText(btn.dataset.copyRaw); toast("Texto copiado: pégalo en tu IA"); } catch (e) { toast("No se pudo copiar; selecciónalo manualmente"); }
    }));
    $$("[data-copy]", sheet).forEach((btn) => btn.addEventListener("click", async () => {
      const text = btn.parentElement.querySelector(".md").innerText.replace(/^[“"]|[”"]$/g, "");
      try { await navigator.clipboard.writeText(text); toast("Ejemplo copiado"); } catch (e) { toast("No se pudo copiar; selecciónalo manualmente"); }
    }));
    $('[data-action="print"]', sheet)?.addEventListener("click", () => {
      document.documentElement.dataset.print = "ex";
      window.print();
      setTimeout(() => delete document.documentElement.dataset.print, 500);
    });
    const timer = $("[data-timer]", sheet);
    if (timer) bindTimer(timer);
  }

  /* ---------------- Temporizador ---------------- */
  const timers = {};
  function timerState(id, total) { return (timers[id] ||= { total, left: total, running: false, handle: null, listeners: new Set() }); }
  function paintTimer(id) {
    const t = timers[id];
    t.listeners.forEach((fn) => fn(t));
  }
  function startStop(id) {
    const t = timers[id];
    if (!t) return;
    if (t.running) { clearInterval(t.handle); t.running = false; }
    else {
      if (t.left <= 0) t.left = t.total;
      t.running = true;
      const end = Date.now() + t.left * 1000;
      t.handle = setInterval(() => {
        t.left = Math.max(0, Math.round((end - Date.now()) / 1000));
        if (t.left <= 0) { clearInterval(t.handle); t.running = false; toast("Tiempo del ejercicio terminado"); }
        paintTimer(id);
      }, 250);
    }
    paintTimer(id);
  }
  function resetTimer(id) { const t = timers[id]; if (!t) return; clearInterval(t.handle); t.running = false; t.left = t.total; paintTimer(id); }
  function stopTimers(reset) { Object.keys(timers).forEach((id) => { timers[id].listeners.clear(); if (reset) resetTimer(id); }); }
  function bindTimer(el) {
    const id = el.dataset.timer;
    const t = timerState(id, +el.dataset.total);
    const read = $("[data-timer-read]", el);
    const ring = $(".timer-ring", el);
    const btn = $('[data-timer-act="toggle"]', el);
    const paint = (s) => {
      read.textContent = fmtTime(s.left);
      ring.style.setProperty("--p", (s.left / s.total) * 100);
      el.classList.toggle("is-running", s.running);
      el.classList.toggle("is-over", s.left <= 0);
      btn.innerHTML = icon(s.running ? "pause" : "play");
    };
    t.listeners.add(paint);
    paint(t);
    btn.addEventListener("click", () => startStop(id));
    $('[data-timer-act="reset"]', el).addEventListener("click", () => resetTimer(id));
  }

  /* ---------------- Vista: todo / teoría / ejercicios ---------------- */
  function setMode(next, announce = true) {
    if (!MODES.includes(next)) return;
    document.documentElement.dataset.mode = next;
    store.raw("taller-vista", next);
    $$(".mode-switch button").forEach((b) => b.setAttribute("aria-checked", String(b.dataset.mode === next)));
    if (announce) toast(`Vista: ${MODE_LABEL[next]}`);
    if (route.name === "class") render();
    if (route.name === "point" && next === "ejercicios") $(".sheet")?.scrollIntoView({ block: "start" });
  }

  /* ---------------- Búsqueda ---------------- */
  const index = [
    ...allPoints.map((x) => ({ kind: "th", title: x.point.title, text: plain(x.point.theory), where: `${x.cls.number}.${x.point.number}`, href: `#/clase/${x.cls.number}/punto/${x.point.number}` })),
    ...allPoints.filter((x) => x.point.exercise).map((x) => ({ kind: "ex", title: `Ejercicio · ${x.point.exercise.title}`, text: plain([x.point.exercise.purpose, ...x.point.exercise.steps].join(" ")), where: `${x.cls.number}.${x.point.number}`, href: `#/clase/${x.cls.number}/punto/${x.point.number}`, ex: true })),
    ...C.extras.glossary.map((g) => ({ kind: "gl", title: g.term, text: g.definition, where: "Glosario", term: g.term })),
  ].map((it) => ({ ...it, ft: fold(it.title), fx: fold(it.text) }));

  const palette = $("#palette");
  const pInput = $("#palette-input");
  const pResults = $("#palette-results");
  let pSel = 0;
  let pItems = [];
  function highlight(text, words) {
    let out = esc(text);
    words.forEach((w) => { if (w.length > 1) out = out.replace(new RegExp(`(${w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, "gi"), "<mark>$1</mark>"); });
    return out;
  }
  function snippet(text, word) {
    const i = fold(text).indexOf(word);
    if (i < 0) return text.slice(0, 120);
    const start = Math.max(0, i - 40);
    return (start ? "…" : "") + text.slice(start, start + 130);
  }
  function searchRender() {
    const q = fold(pInput.value.trim());
    const words = q.split(/\s+/).filter(Boolean);
    if (!words.length) {
      pItems = allPoints.slice(0, 0);
      pResults.innerHTML = `<div class="palette-group">Sugerencias</div>${["privacidad", "ROCAV", "skill", "guardrail", "subagente"].map((s) => `<button class="palette-item" type="button" data-suggest="${s}"><span class="pi-icon th">${icon("search")}</span><span><b>${s}</b></span></button>`).join("")}`;
      $$("[data-suggest]", pResults).forEach((b) => b.addEventListener("click", () => { pInput.value = b.dataset.suggest; searchRender(); pInput.focus(); }));
      return;
    }
    const scored = index.map((it) => {
      if (!words.every((w) => it.ft.includes(w) || it.fx.includes(w))) return null;
      const score = words.reduce((s, w) => s + (it.ft.includes(w) ? 10 : 0) + (it.ft.startsWith(w) ? 5 : 0) + (it.fx.includes(w) ? 1 : 0), 0) + (it.kind === "gl" ? 2 : 0);
      return { ...it, score };
    }).filter(Boolean).sort((a, b) => b.score - a.score).slice(0, 14);
    pItems = scored;
    pSel = 0;
    if (!scored.length) { pResults.innerHTML = `<p class="palette-empty">Sin resultados para “${esc(pInput.value)}”. Prueba con “prompt”, “privacidad”, “skill” o “agente”.</p>`; return; }
    const groups = { th: "Temas", ex: "Ejercicios", gl: "Glosario" };
    let html = "";
    let last = "";
    const ordered = ["th", "ex", "gl"].flatMap((k) => scored.filter((s) => s.kind === k));
    pItems = ordered;
    ordered.forEach((it, i) => {
      if (it.kind !== last) { html += `<div class="palette-group">${groups[it.kind]}</div>`; last = it.kind; }
      html += `<button class="palette-item" type="button" role="option" data-i="${i}" aria-selected="${i === 0}"><span class="pi-icon ${it.kind}">${icon(it.kind === "th" ? "book" : it.kind === "ex" ? "pencil" : "file")}</span><span><b>${highlight(it.title, words)}</b><small>${highlight(snippet(it.text, words[0]), words)}</small></span><span class="pi-where">${esc(it.where)}</span></button>`;
    });
    pResults.innerHTML = html;
    $$(".palette-item", pResults).forEach((b) => {
      b.addEventListener("click", () => choose(+b.dataset.i));
      b.addEventListener("mousemove", () => select(+b.dataset.i));
    });
  }
  function select(i) { pSel = i; $$(".palette-item[data-i]", pResults).forEach((b) => b.setAttribute("aria-selected", String(+b.dataset.i === i))); $(`.palette-item[data-i="${i}"]`, pResults)?.scrollIntoView({ block: "nearest" }); }
  function choose(i) {
    const it = pItems[i];
    if (!it) return;
    closePalette();
    if (it.kind === "gl") { openGlossary(it.term); return; }
    if (it.ex && mode() === "teoria") setMode("todo", false);
    if (!it.ex && mode() === "ejercicios") setMode("todo", false);
    if (location.hash === it.href) render(); else location.hash = it.href;
    if (it.ex) setTimeout(() => $(".sheet")?.scrollIntoView({ block: "start" }), 60);
  }
  let lastFocus = null;
  function openPalette() { lastFocus = document.activeElement; palette.hidden = false; pInput.value = ""; searchRender(); pInput.focus(); }
  function closePalette() { palette.hidden = true; lastFocus?.focus?.(); }
  pInput.addEventListener("input", searchRender);
  pInput.addEventListener("keydown", (e) => {
    if (e.key === "ArrowDown") { e.preventDefault(); select(Math.min(pItems.length - 1, pSel + 1)); }
    if (e.key === "ArrowUp") { e.preventDefault(); select(Math.max(0, pSel - 1)); }
    if (e.key === "Enter") { e.preventDefault(); choose(pSel); }
  });
  palette.addEventListener("click", (e) => { if (e.target === palette) closePalette(); });

  /* ---------------- Glosario ---------------- */
  const glossary = $("#glossary");
  const gInput = $("#glossary-input");
  function paintGlossary(filter = "") {
    const q = fold(filter.trim());
    const items = C.extras.glossary.filter((g) => !q || fold(g.term).includes(q) || fold(g.definition).includes(q));
    $("#glossary-list").innerHTML = items.length ? items.map((g) => `<dt>${esc(g.term)}</dt><dd>${inline(g.definition)}</dd>`).join("") : `<dd>No hay términos con “${esc(filter)}”.</dd>`;
  }
  function openGlossary(term = "") { glossary.hidden = false; gInput.value = term; paintGlossary(term); gInput.focus(); }
  function closeGlossary() { glossary.hidden = true; }
  gInput.addEventListener("input", () => paintGlossary(gInput.value));

  /* ---------------- Modo presentación ---------------- */
  const stage = $("#stage");
  let slides = [];
  let slideAt = 0;
  function buildSlides(clsNumber) {
    const m = mode();
    const pts = allPoints.filter((x) => !clsNumber || x.cls.number === clsNumber);
    return pts.flatMap((x) => [
      ...(m !== "ejercicios" ? [{ kind: "th", x }] : []),
      ...(m !== "teoria" && x.point.exercise ? [{ kind: "ex", x }] : []),
    ]);
  }
  function openStage(clsNumber, startId) {
    slides = buildSlides(clsNumber);
    slideAt = Math.max(0, slides.findIndex((s) => s.x.id === startId));
    stage.hidden = false;
    document.body.style.overflow = "hidden";
    paintStage();
    (stage.requestFullscreen || stage.webkitRequestFullscreen)?.call(stage)?.catch?.(() => {});
  }
  function closeStage() {
    stage.querySelector("video")?.pause();
    stage.hidden = true;
    stage.innerHTML = "";
    document.body.style.overflow = "";
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  }
  function paintStage() {
    const s = slides[slideAt];
    if (!s) return;
    const { x } = s;
    const ex = x.point.exercise;
    const body = s.kind === "th"
      ? `<div class="stage-video"><video controls playsinline autoplay preload="auto" poster="assets/motion/points/posters/${x.id}.jpg${MV}"><source src="assets/motion/points/${x.id}.mp4${MV}" type="video/mp4" /></video></div>`
      : `<div class="stage-ex">
          <div><span class="eyebrow" style="--accent:#f4c66b">Ejercicio ${ex.number ?? x.point.number} · ${ex.minutes || ""} min</span><h2>${esc(ex.title)}</h2>${ex.purpose ? `<p class="st-purpose">${inline(cap(ex.purpose))}</p>` : ""}<ol>${ex.steps.map((st) => `<li><span>${inline(st)}</span></li>`).join("")}</ol></div>
          <div class="stage-side">${ex.minutes ? `<div class="stage-timer" data-stage-timer="${x.id}"><b data-timer-read>${fmtTime(timerState(x.id, ex.minutes * 60).left)}</b><small>Tiempo de práctica · tecla T</small><div class="timer-btns"><button type="button" data-timer-act="toggle" aria-label="Iniciar o pausar">${icon("play")}</button><button type="button" data-timer-act="reset" aria-label="Reiniciar">${icon("reset")}</button></div></div>` : ""}
            ${ex.evidence ? `<div class="stage-card"><h4>Qué entregas</h4>${inline(cap(ex.evidence))}</div>` : ""}
            ${ex.success ? `<div class="stage-card ok"><h4>Lo lograste si…</h4>${inline(ex.success)}</div>` : ""}</div>
        </div>`;
    stage.dataset.cls = x.cls.number;
    stage.innerHTML = `
      <div class="stage-top"><span class="st-cls">Clase ${x.cls.number} · Punto ${x.point.number}</span><span class="st-title">${s.kind === "th" ? "Entender · " : "Practicar · "}${esc(x.point.title)}</span><span class="st-count">${slideAt + 1} / ${slides.length}</span><button type="button" data-stage="close" aria-label="Salir del modo presentación">${icon("x")}</button></div>
      <div class="stage-body">${body}</div>
      <div class="stage-nav"><button type="button" data-stage="prev">${icon("left")}Anterior</button><div class="stage-dots">${slides.map((sl, i) => `<i class="${sl.kind} ${i === slideAt ? "is-on" : ""}"></i>`).join("")}</div><button type="button" data-stage="next">Siguiente${icon("right")}</button></div>`;
    $('[data-stage="close"]', stage).addEventListener("click", closeStage);
    $('[data-stage="prev"]', stage).addEventListener("click", () => moveStage(-1));
    $('[data-stage="next"]', stage).addEventListener("click", () => moveStage(1));
    const st = $("[data-stage-timer]", stage);
    if (st) {
      const id = st.dataset.stageTimer;
      const t = timerState(id, ex.minutes * 60);
      const paint = (v) => { $("[data-timer-read]", st).textContent = fmtTime(v.left); st.classList.toggle("is-over", v.left <= 0); $('[data-timer-act="toggle"]', st).innerHTML = icon(v.running ? "pause" : "play"); };
      t.listeners.add(paint);
      paint(t);
      $('[data-timer-act="toggle"]', st).addEventListener("click", () => startStop(id));
      $('[data-timer-act="reset"]', st).addEventListener("click", () => resetTimer(id));
    }
  }
  function moveStage(d) {
    const next = slideAt + d;
    if (next < 0 || next >= slides.length) return;
    stage.querySelector("video")?.pause();
    slideAt = next;
    paintStage();
  }

  /* ---------------- Acciones globales ---------------- */
  document.addEventListener("click", (e) => {
    const modeBtn = e.target.closest(".mode-switch button, [data-set-mode]");
    if (modeBtn) {
      const next = modeBtn.dataset.mode || modeBtn.dataset.setMode;
      setMode(next);
      if (modeBtn.dataset.setMode === "ejercicios" && route.name === "home") location.hash = "#/clase/1";
      return;
    }
    const act = e.target.closest("[data-action]")?.dataset.action;
    if (!act) return;
    const pointEl = $("[data-point]", view);
    const id = pointEl?.dataset.point;
    switch (act) {
      case "search": openPalette(); break;
      case "glossary": openGlossary(); break;
      case "close-glossary": closeGlossary(); break;
      case "shortcuts": $("#shortcuts").hidden = false; $('#shortcuts [data-action="close-shortcuts"]').focus(); break;
      case "close-shortcuts": $("#shortcuts").hidden = true; break;
      case "theme": {
        const current = document.documentElement.dataset.theme || (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark");
        const next = current === "light" ? "dark" : "light";
        document.documentElement.dataset.theme = next;
        store.raw("taller-tema", next);
        break;
      }
      case "present": openStage(route.cls || null, id); break;
      case "present-class": openStage(+e.target.closest("[data-cls-n]").dataset.clsN, null); break;
      case "toggle-rail": case "close-rail": {
        const open = act === "toggle-rail" && !document.body.classList.contains("rail-open");
        document.body.classList.toggle("rail-open", open);
        $(".rail-scrim").hidden = !open;
        $(".rail-toggle").setAttribute("aria-expanded", String(open));
        break;
      }
      case "toggle-th": case "toggle-ex": {
        const bucket = act === "toggle-th" ? progress.th : progress.ex;
        bucket[id] = !bucket[id];
        if (!bucket[id]) delete bucket[id];
        saveProgress();
        const btn = e.target.closest("button");
        const done = !!bucket[id];
        btn.classList.toggle("is-done", done);
        btn.setAttribute("aria-pressed", String(done));
        btn.innerHTML = `${icon("check")}${act === "toggle-th" ? (done ? "Tema entendido" : "Marcar tema como entendido") : (done ? "Ejercicio completado" : "Marcar ejercicio como completado")}`;
        renderRail(route);
        if (done && isDone(id)) toast("Punto completo. ¡Un ladrillo más en la obra!");
        break;
      }
      default: break;
    }
  });

  document.addEventListener("keydown", (e) => {
    const typing = /INPUT|TEXTAREA|SELECT/.test(document.activeElement?.tagName) && document.activeElement.type !== "checkbox";
    if (e.key === "Escape") {
      if (!palette.hidden) closePalette();
      else if (!$("#shortcuts").hidden) $("#shortcuts").hidden = true;
      else if (!glossary.hidden) closeGlossary();
      else if (!stage.hidden) closeStage();
      else if (document.body.classList.contains("rail-open")) { document.body.classList.remove("rail-open"); $(".rail-scrim").hidden = true; }
      return;
    }
    if (typing || e.metaKey || e.ctrlKey || e.altKey) {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") { e.preventDefault(); openPalette(); }
      return;
    }
    if (!stage.hidden) {
      if (e.key === "ArrowRight" || e.key === "PageDown") { e.preventDefault(); moveStage(1); }
      if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); moveStage(-1); }
      if (e.key.toLowerCase() === "t") { const st = $("[data-stage-timer]", stage); if (st) startStop(st.dataset.stageTimer); }
      if (e.key === " ") { const v = $("video", stage); if (v) { e.preventDefault(); v.paused ? v.play().catch(() => {}) : v.pause(); } }
      return;
    }
    if (!palette.hidden || !glossary.hidden) return;
    if (e.key === "/") { e.preventDefault(); openPalette(); }
    else if (e.key === "?") $("#shortcuts").hidden = false;
    else if (["1", "2", "3"].includes(e.key)) setMode(MODES[+e.key - 1]);
    else if (e.key.toLowerCase() === "g") openGlossary();
    else if (e.key.toLowerCase() === "p") openStage(route.cls || null, $("[data-point]", view)?.dataset.point);
    else if (route.name === "point" && (e.key === "ArrowRight" || e.key === "ArrowLeft")) {
      const link = $(e.key === "ArrowRight" ? ".pager .next" : ".pager .prev", view);
      if (link?.href) location.hash = link.getAttribute("href");
    } else if (route.name === "point" && e.key === " " && !document.activeElement?.closest("button, a, label")) {
      const v = $(".player video", view);
      if (v && mode() !== "ejercicios") { e.preventDefault(); v.paused ? v.play().catch(() => {}) : v.pause(); }
    } else if (route.name === "point" && e.key.toLowerCase() === "t") {
      const t = $("[data-timer]", view);
      if (t) startStop(t.dataset.timer);
    }
  });

  document.addEventListener("fullscreenchange", () => { if (!document.fullscreenElement && !stage.hidden) { /* sigue en presentación sin pantalla completa */ } });

  /* ---------------- Inicio ---------------- */
  if (!C) { view.innerHTML = '<p class="view-loading">No se pudo cargar el contenido del taller.</p>'; return; }
  $$(".mode-switch button").forEach((b) => b.setAttribute("aria-checked", String(b.dataset.mode === mode())));
  window.addEventListener("hashchange", render);
  render();
})();
