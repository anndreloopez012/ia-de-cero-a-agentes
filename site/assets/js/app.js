(() => {
  "use strict";

  const content = window.COURSE_CONTENT;
  const classImages = [
    "assets/images/01-cimientos-ia.png",
    "assets/images/02-planos-prompts.png",
    "assets/images/03-caja-skills.png",
    "assets/images/04-equipo-agentes.png",
  ];
  const classAlts = [
    "Cimientos digitales: privacidad, contexto, plataforma y control humano",
    "Planos por capas que convierten una idea en un resultado definido",
    "Caja de herramientas modular para construir una skill reutilizable",
    "Agente coordinador conectado a dos subagentes con controles humanos",
  ];
  const storageKey = "ai-academy-course-progress-v2";
  let completed = new Set(JSON.parse(localStorage.getItem(storageKey) || "[]"));

  const escapeHtml = (value) => value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");

  const inline = (value) => escapeHtml(value)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>')
    .replace(/ {2}$/g, "<br>");

  function markdownToHtml(markdown) {
    const lines = markdown.replace(/\r/g, "").split("\n");
    const html = [];
    let index = 0;

    const isSpecial = (line, next = "") => (
      !line.trim() || /^#{1,4}\s/.test(line) || /^---+$/.test(line.trim()) || /^>\s?/.test(line) || /^[-*]\s+/.test(line) || /^\d+\.\s+/.test(line) || (/^\|/.test(line.trim()) && /^\|?\s*:?-+/.test(next.trim()))
    );

    while (index < lines.length) {
      const line = lines[index];
      const trimmed = line.trim();
      const next = lines[index + 1] || "";
      if (!trimmed) { index += 1; continue; }
      if (/^---+$/.test(trimmed)) { html.push("<hr>"); index += 1; continue; }

      const heading = trimmed.match(/^(#{1,4})\s+(.+)$/);
      if (heading) {
        const level = heading[1].length;
        const text = inline(heading[2]);
        const plain = heading[2].replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "").toLowerCase();
        html.push(`<h${level} id="${plain}">${text}</h${level}>`);
        index += 1;
        continue;
      }

      if (/^>\s?/.test(trimmed)) {
        const parts = [];
        while (index < lines.length && /^>\s?/.test(lines[index].trim())) {
          parts.push(lines[index].trim().replace(/^>\s?/, ""));
          index += 1;
        }
        html.push(`<blockquote>${inline(parts.join(" "))}</blockquote>`);
        continue;
      }

      if (/^\|/.test(trimmed) && /^\|?\s*:?-+/.test(next.trim())) {
        const rows = [];
        while (index < lines.length && /^\|/.test(lines[index].trim())) {
          rows.push(lines[index].trim().replace(/^\||\|$/g, "").split("|").map((cell) => cell.trim()));
          index += 1;
        }
        const headers = rows[0];
        const body = rows.slice(2);
        html.push(`<div class="table-wrap"><table><thead><tr>${headers.map((cell) => `<th>${inline(cell)}</th>`).join("")}</tr></thead><tbody>${body.map((row) => `<tr>${row.map((cell) => `<td>${inline(cell)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`);
        continue;
      }

      if (/^[-*]\s+/.test(trimmed)) {
        const items = [];
        while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
          items.push(lines[index].trim().replace(/^[-*]\s+/, ""));
          index += 1;
        }
        html.push(`<ul>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ul>`);
        continue;
      }

      if (/^\d+\.\s+/.test(trimmed)) {
        const items = [];
        while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
          items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
          index += 1;
        }
        html.push(`<ol>${items.map((item) => `<li>${inline(item)}</li>`).join("")}</ol>`);
        continue;
      }

      const paragraph = [trimmed];
      index += 1;
      while (index < lines.length && !isSpecial(lines[index], lines[index + 1] || "")) {
        paragraph.push(lines[index].trim());
        index += 1;
      }
      html.push(`<p>${inline(paragraph.join(" "))}</p>`);
    }
    return html.join("\n");
  }

  function extractClassTitle(title) {
    return title.replace(/^.+?:\s*/, "").replace(/\b\w/g, (char) => char.toUpperCase());
  }

  function renderCourse() {
    const root = document.querySelector("#course-root");
    if (!content || !root) {
      if (root) root.innerHTML = '<p class="search-empty">No se pudo cargar el contenido del curso.</p>';
      return;
    }

    root.innerHTML = content.classes.map((classItem, classIndex) => {
      const points = classItem.points.map((point) => {
        const id = `c${classItem.number}-p${point.number}`;
        const isComplete = completed.has(id);
        return `
          <details class="topic-card ${isComplete ? "is-complete" : ""}" data-point-id="${id}" data-search="${escapeHtml((point.title + " " + point.markdown).toLowerCase())}">
            <summary><span class="topic-index">${isComplete ? "✓" : String(point.number).padStart(2, "0")}</span><span class="topic-title">${inline(point.title)}</span><span class="chevron" aria-hidden="true">+</span></summary>
            <div class="topic-content class-markdown">${markdownToHtml(point.markdown)}<button class="complete-button" type="button" aria-pressed="${isComplete}">${isComplete ? "Punto completado ✓" : "Marcar como completado"}</button></div>
          </details>`;
      }).join("");

      return `
        <article class="class-panel ${classIndex === 0 ? "active" : ""}" id="clase-${classItem.number}" data-class="${classItem.number}">
          <div class="class-intro-card">
            <div class="class-markdown">${markdownToHtml(classItem.intro)}</div>
            <div>
              <div class="class-intro-media"><img src="${classImages[classIndex]}" alt="${classAlts[classIndex]}"></div>
              ${classItem.number === 3 ? '<p class="class-notice"><b>Requisito para esta clase:</b> tener activa una suscripción de pago en ChatGPT, Claude o Gemini.</p>' : ""}
            </div>
          </div>
          <div class="points-heading"><h3>Puntos de aprendizaje</h3><span>${classItem.points.length} ejercicios individuales</span></div>
          <div class="topic-list">${points}</div>
          <div class="class-closing class-markdown">${markdownToHtml(classItem.closing)}</div>
        </article>`;
    }).join("");

    document.querySelectorAll(".exercise-title").forEach(() => {});
    document.querySelectorAll(".topic-content h3").forEach((heading) => {
      if (/ejercicio individual/i.test(heading.textContent)) heading.classList.add("exercise-title");
    });
    bindCourseControls();
    updateProgress();
  }

  function renderExtras() {
    const root = document.querySelector("#extras-root");
    if (!root || !content?.extras) return;
    const sections = content.extras.split(/(?=^# )/gm).filter(Boolean);
    root.innerHTML = sections.map((section, index) => {
      const title = section.match(/^#\s+(.+)$/m)?.[1] || `Material adicional ${index + 1}`;
      return `<details ${index === 0 ? "open" : ""}><summary>${inline(title)}</summary><div class="extras-content">${markdownToHtml(section.replace(/^#\s+.+$/m, ""))}</div></details>`;
    }).join("");
  }

  function bindCourseControls() {
    document.querySelectorAll(".complete-button").forEach((button) => {
      button.addEventListener("click", (event) => {
        const card = event.currentTarget.closest(".topic-card");
        const id = card.dataset.pointId;
        if (completed.has(id)) completed.delete(id); else completed.add(id);
        localStorage.setItem(storageKey, JSON.stringify([...completed]));
        const done = completed.has(id);
        card.classList.toggle("is-complete", done);
        button.setAttribute("aria-pressed", String(done));
        button.textContent = done ? "Punto completado ✓" : "Marcar como completado";
        card.querySelector(".topic-index").textContent = done ? "✓" : id.split("p")[1].padStart(2, "0");
        updateProgress();
      });
    });
  }

  function updateProgress() {
    const total = content?.classes.reduce((sum, classItem) => sum + classItem.points.length, 0) || 21;
    const count = [...completed].filter((id) => /^c\d-p\d+$/.test(id)).length;
    const percent = Math.min(100, Math.round((count / total) * 100));
    const label = document.querySelector("#progress-label");
    const bar = document.querySelector("#course-progress-bar");
    if (label) label.textContent = `${count} de ${total} puntos`;
    if (bar) bar.style.width = `${percent}%`;
  }

  function showClass(targetId, shouldScroll = false) {
    document.querySelectorAll(".class-panel").forEach((panel) => panel.classList.toggle("active", panel.id === targetId));
    document.querySelectorAll(".class-tabs button").forEach((button) => button.classList.toggle("active", button.dataset.target === targetId));
    if (shouldScroll) document.querySelector("#clases")?.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function setupNavigation() {
    document.querySelectorAll(".class-tabs button").forEach((button) => button.addEventListener("click", () => showClass(button.dataset.target)));
    document.querySelectorAll('a[href^="#clase-"]').forEach((link) => link.addEventListener("click", (event) => {
      event.preventDefault();
      showClass(link.getAttribute("href").slice(1), true);
    }));

    const menuButton = document.querySelector(".menu-button");
    const mobileNav = document.querySelector("#mobile-nav");
    menuButton?.addEventListener("click", () => {
      const open = menuButton.getAttribute("aria-expanded") === "true";
      menuButton.setAttribute("aria-expanded", String(!open));
      mobileNav.hidden = open;
    });
    mobileNav?.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
      mobileNav.hidden = true;
      menuButton.setAttribute("aria-expanded", "false");
    }));
  }

  function setupSearch() {
    const input = document.querySelector("#course-search");
    input?.addEventListener("input", () => {
      const query = input.value.trim().toLowerCase();
      let matches = 0;
      document.querySelectorAll(".topic-card").forEach((card) => {
        const visible = !query || card.dataset.search.includes(query);
        card.hidden = !visible;
        if (visible) {
          matches += 1;
          if (query) card.open = true;
        }
      });
      document.querySelectorAll(".class-panel").forEach((panel) => {
        if (query) panel.classList.toggle("active", panel.querySelectorAll(".topic-card:not([hidden])").length > 0);
      });
      document.querySelector(".search-empty")?.remove();
      if (query && matches === 0) {
        document.querySelector("#course-root").insertAdjacentHTML("beforeend", '<p class="search-empty">No encontramos ese término. Prueba con “prompt”, “privacidad”, “skill” o “agente”.</p>');
      }
      if (!query) showClass(document.querySelector(".class-tabs button.active")?.dataset.target || "clase-1");
    });
  }

  function setupGlobalControls() {
    let allOpen = false;
    document.querySelector("#expand-all")?.addEventListener("click", (event) => {
      allOpen = !allOpen;
      document.querySelectorAll(".topic-card:not([hidden])").forEach((item) => { item.open = allOpen; });
      event.currentTarget.textContent = allOpen ? "Cerrar todo" : "Abrir todo";
    });
    document.querySelector("#reset-progress")?.addEventListener("click", () => {
      if (!window.confirm("¿Quieres borrar el avance guardado en este dispositivo?")) return;
      completed = new Set();
      localStorage.removeItem(storageKey);
      document.querySelectorAll(".topic-card").forEach((card) => {
        card.classList.remove("is-complete");
        card.querySelector(".complete-button").setAttribute("aria-pressed", "false");
        card.querySelector(".complete-button").textContent = "Marcar como completado";
        card.querySelector(".topic-index").textContent = card.dataset.pointId.split("p")[1].padStart(2, "0");
      });
      updateProgress();
    });
  }

  function setupScrollEffects() {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const reveals = document.querySelectorAll(".reveal");
    if (reduced || !("IntersectionObserver" in window)) reveals.forEach((item) => item.classList.add("is-visible"));
    else {
      const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
        if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
      }), { threshold: .12 });
      reveals.forEach((item) => observer.observe(item));
    }

    const progress = document.querySelector("#reading-progress-bar");
    window.addEventListener("scroll", () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = `${max > 0 ? (window.scrollY / max) * 100 : 0}%`;
    }, { passive: true });
  }

  renderCourse();
  renderExtras();
  setupNavigation();
  setupSearch();
  setupGlobalControls();
  setupScrollEffects();
})();
