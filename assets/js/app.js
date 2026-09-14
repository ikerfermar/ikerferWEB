(() => {
  const appEl = document.getElementById("app");
  const breadcrumbEl = document.getElementById("breadcrumb");
  const toggleEl = document.getElementById("menu-toggle");

  const state = {
    structure: null,
    currentRoute: null,
    searchIndex: [],
    searchHydrated: false,
    searchPromise: null,
    sidebarOpen: false,
  };

  const BASE_TITLE = "Iker Fernández — Apuntes FP";

  /* ── Theme toggle ─────────────────────────────────────── */
  function initTheme() {
    const saved = localStorage.getItem("theme-choice");
    const theme = saved || "light";
    applyTheme(theme);
  }

  function applyTheme(theme) {
    if (theme === "light") {
      document.documentElement.setAttribute("data-theme", "light");
    } else {
      document.documentElement.setAttribute("data-theme", "dark");
    }
    document.getElementById("theme-color")?.setAttribute("content", theme === "light" ? "#ffffff" : "#090e16");
    const themeButton = document.getElementById("theme-toggle");
    themeButton.setAttribute("aria-label", theme === "light" ? "Cambiar a tema oscuro" : "Cambiar a tema claro");
    themeButton.setAttribute("aria-pressed", String(theme === "dark"));
    themeButton.title = themeButton.getAttribute("aria-label");
  }

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme");
    const theme = current === "light" ? "dark" : "light";
    localStorage.setItem("theme-choice", theme);
    applyTheme(theme);
  }

  document.getElementById("theme-toggle").addEventListener("click", toggleTheme);

  /* ── Helpers ─────────────────────────────────────────── */
  function markdownPath(cicloId, moduloId, tipo, temaId) {
    return `content/${cicloId}/${moduloId}/${tipo}/${temaId}.md`;
  }

  function parseHash() {
    const hash = window.location.hash || "#";
    const cleanHash = hash.startsWith("#") ? hash.slice(1) : hash;
    const segments = cleanHash.split("/").filter(Boolean);

    if (segments.length === 0) return { view: "home" };
    if (segments[0] === "sobre-mi" && segments.length === 1) return { view: "about" };
    if (segments[0] === "ciclo" && segments.length === 2)
      return { view: "cycle", cicloId: segments[1] };
    if (segments[0] === "ciclo" && segments[2] === "modulo" && segments.length === 4)
      return { view: "module", cicloId: segments[1], moduloId: segments[3], temaId: null };
    if (segments[0] === "ciclo" && segments[2] === "modulo" && ["contenido", "tema"].includes(segments[4]) && segments.length === 6)
      return { view: "module", cicloId: segments[1], moduloId: segments[3], temaId: segments[5] };
    return { view: "not-found" };
  }

  function findCycle(cicloId) {
    for (const familia of state.structure.familias) {
      const ciclo = familia.ciclos.find((item) => item.id === cicloId);
      if (ciclo) return { familia, ciclo };
    }
    return null;
  }

  function findModule(cicloId, moduloId) {
    const cycleMatch = findCycle(cicloId);
    if (!cycleMatch) return null;
    const modulo = cycleMatch.ciclo.modulos.find((item) => item.id === moduloId);
    if (!modulo) return null;
    return { ...cycleMatch, modulo };
  }

  function getWorkUnits(modulo) {
    return modulo.unidadesTrabajo || [];
  }

  function getModuleContents(modulo) {
    return getWorkUnits(modulo).flatMap((unidad) =>
      (unidad.contenidos || []).map((contenido) => ({
        ...contenido,
        unidadId: unidad.id,
        unidadCodigo: unidad.codigo,
        unidadNombre: unidad.nombre,
      }))
    );
  }

  function topicHref(cicloId, moduloId, temaId) {
    return `#ciclo/${cicloId}/modulo/${moduloId}/contenido/${temaId}`;
  }

  function normalizeSearchText(value) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  }

  function escapeHtml(value) {
    const el = document.createElement("div");
    el.textContent = String(value);
    return el.innerHTML;
  }

  function sanitizeHtml(html) {
    const template = document.createElement("template");
    template.innerHTML = html;
    template.content.querySelectorAll("script, iframe, object, embed, form, style").forEach((el) => el.remove());
    template.content.querySelectorAll("*").forEach((el) => {
      for (const attr of Array.from(el.attributes)) {
        const name = attr.name.toLowerCase();
        const value = attr.value.trim().toLowerCase();
        if (name.startsWith("on") || name === "srcdoc" || ((name === "href" || name === "src") && value.startsWith("javascript:"))) {
          el.removeAttribute(attr.name);
        }
      }
    });
    return template.innerHTML;
  }

  function updateBreadcrumb(route, entities) {
    const parts = route.view === "home"
      ? [`<span class="current" aria-current="page">Inicio</span>`]
      : [`<a href="#">Inicio</a>`];
    if (route.view === "about") {
      parts.push(`<span class="sep">›</span>`);
      parts.push(`<span class="current" aria-current="page">Sobre mí</span>`);
    }
    if (route.view === "cycle" || route.view === "module") {
      parts.push(`<span class="sep">›</span>`);
      if (route.view === "cycle") {
        parts.push(`<span class="current" aria-current="page">${entities.ciclo.nombre}</span>`);
      } else {
        parts.push(`<a href="#ciclo/${entities.ciclo.id}">${entities.ciclo.nombre}</a>`);
      }
    }
    if (route.view === "module") {
      parts.push(`<span class="sep">›</span>`);
      if (route.temaId && entities.tema) {
        parts.push(`<a href="#ciclo/${entities.ciclo.id}/modulo/${entities.modulo.id}">${entities.modulo.nombre}</a>`);
        parts.push(`<span class="sep">›</span>`);
        parts.push(`<span class="current" aria-current="page">${entities.tema.titulo}</span>`);
      } else {
        parts.push(`<span class="current" aria-current="page">${entities.modulo.nombre}</span>`);
      }
    }
    breadcrumbEl.innerHTML = parts.join("");
  }

  function setMenuToggleVisibility(visible) {
    toggleEl.classList.toggle("visible", visible);
    if (!visible) {
      state.sidebarOpen = false;
      document.body.classList.remove("sidebar-open");
    }
    toggleEl.setAttribute("aria-expanded", String(state.sidebarOpen));
  }

  function syncSidebarAccessibility(sidebar = appEl.querySelector(".page-sidebar")) {
    if (!sidebar) return;
    const hidden = window.innerWidth < 768 && !state.sidebarOpen;
    sidebar.inert = hidden;
    sidebar.setAttribute("aria-hidden", String(hidden));
  }

  function toggleSidebar() {
    if (!toggleEl.classList.contains("visible")) return;
    state.sidebarOpen = !state.sidebarOpen;
    document.body.classList.toggle("sidebar-open", state.sidebarOpen);
    const sidebar = appEl.querySelector(".page-sidebar");
    if (sidebar) sidebar.classList.toggle("open", state.sidebarOpen);
    syncSidebarAccessibility(sidebar);
    toggleEl.setAttribute("aria-expanded", String(state.sidebarOpen));
    if (state.sidebarOpen) sidebar?.querySelector("a")?.focus();
  }

  function closeSidebarOnMobile() {
    if (window.innerWidth < 768) {
      state.sidebarOpen = false;
      document.body.classList.remove("sidebar-open");
      const sidebar = appEl.querySelector(".page-sidebar");
      if (sidebar) sidebar.classList.remove("open");
      syncSidebarAccessibility(sidebar);
      toggleEl.setAttribute("aria-expanded", "false");
    }
  }

  function closeSidebarAndRestoreFocus() {
    if (!state.sidebarOpen) return;
    closeSidebarOnMobile();
    toggleEl.focus();
  }

  function trapSidebarFocus(event) {
    if (!state.sidebarOpen || event.key !== "Tab") return;
    const sidebar = appEl.querySelector(".page-sidebar");
    const focusable = [...(sidebar?.querySelectorAll("a[href]") || [])];
    if (!focusable.length) return;
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  /* ── Stats calculation ────────────────────────────────── */
  function calcStats() {
    let totalCiclos = 0, totalModulos = 0, totalUnidades = 0, totalDocumentos = 0;
    for (const familia of state.structure.familias) {
      totalCiclos += familia.ciclos.length;
      for (const ciclo of familia.ciclos) {
        totalModulos += ciclo.modulos.length;
        for (const modulo of ciclo.modulos) {
          totalUnidades += getWorkUnits(modulo).length;
          totalDocumentos += getModuleContents(modulo).length;
        }
      }
    }
    return { totalCiclos, totalModulos, totalUnidades, totalDocumentos };
  }

  /* ── Card factory ─────────────────────────────────────── */
  function createCard(href, eyebrow, title, meta) {
    return `
      <a class="nav-card" href="${href}">
        <span class="nav-card__eyebrow">${eyebrow}</span>
        <h3>${title}</h3>
        <p>${meta}</p>
        <span class="nav-card__arrow" aria-hidden="true">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <path d="M5 12h14M14 7l5 5-5 5" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </span>
      </a>
    `;
  }

  /* ── Code block enhancement ───────────────────────────── */
  function enhanceCodeBlocks(container) {
    container.querySelectorAll("pre").forEach((pre) => {
      if (pre.parentElement.classList.contains("code-block-wrapper")) return;
      const code = pre.querySelector("code");
      let lang = "código";
      if (code) {
        const cls = Array.from(code.classList).find((c) => c.startsWith("language-"));
        if (cls) lang = cls.replace("language-", "");
      }
      const wrapper = document.createElement("div");
      wrapper.className = "code-block-wrapper";
      const header = document.createElement("div");
      header.className = "code-block-header";
      header.innerHTML = `
        <span class="code-block-lang">${lang}</span>
        <button class="copy-btn" type="button" aria-label="Copiar código">
          <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <rect x="5" y="5" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1.5"/>
            <path d="M3 11V3a2 2 0 0 1 2-2h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
          </svg>
          Copiar
        </button>
      `;
      const btn = header.querySelector(".copy-btn");
      btn.addEventListener("click", () => {
        const text = pre.querySelector("code")?.innerText || pre.innerText;
        navigator.clipboard.writeText(text).then(() => {
          btn.classList.add("copied");
          btn.innerHTML = `
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <polyline points="2,8 6,12 14,4" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Copiado
          `;
          setTimeout(() => {
            btn.classList.remove("copied");
            btn.innerHTML = `
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <rect x="5" y="5" width="9" height="9" rx="2" stroke="currentColor" stroke-width="1.5"/>
                <path d="M3 11V3a2 2 0 0 1 2-2h8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              </svg>
              Copiar
            `;
          }, 2000);
        }).catch(() => {
          btn.textContent = "No se pudo copiar";
          setTimeout(() => { btn.textContent = "Copiar"; }, 2000);
        });
      });
      pre.parentNode.insertBefore(wrapper, pre);
      wrapper.appendChild(header);
      wrapper.appendChild(pre);
    });
  }

  /* ── Render: Home ─────────────────────────────────────── */
  function renderHome() {
    setMenuToggleVisibility(false);
    updateBreadcrumb({ view: "home" }, {});
    document.title = BASE_TITLE;

    const { totalCiclos, totalModulos, totalUnidades, totalDocumentos } = calcStats();

    const familiesMarkup = state.structure.familias.map((familia) => {
      const cyclesMarkup = familia.ciclos.map((ciclo) => {
        const unitCount = ciclo.modulos.reduce((sum, modulo) => sum + getWorkUnits(modulo).length, 0);
        const cycleMeta = ciclo.modulos.length
          ? `${ciclo.modulos.length} módulos · ${unitCount} UT`
          : "Contenido próximamente";
        return createCard(
          `#ciclo/${ciclo.id}`,
          ciclo.nivel || familia.nombre,
          ciclo.nombre,
          cycleMeta
        );
      }).join("");

      return `
        <section class="family-section family-${familia.id}">
          <div class="section-header">
            <span class="section-dot" aria-hidden="true"></span>
            <h2 class="section-title">${familia.nombre}</h2>
          </div>
          <div class="card-grid">${cyclesMarkup}</div>
        </section>
      `;
    }).join("");

    appEl.innerHTML = `
      <section class="page-home">
        <section class="hero">
          <p class="hero__eyebrow">Formación Profesional</p>
          <h1>Apuntes y Prácticas</h1>
          <div class="hero__stats">
            <div class="hero__stat">
              <span class="hero__stat-num">${totalCiclos}</span>
              <span class="hero__stat-label">${totalCiclos === 1 ? "Ciclo" : "Ciclos"}</span>
            </div>
            <div class="hero__stat">
              <span class="hero__stat-num">${totalModulos}</span>
              <span class="hero__stat-label">${totalModulos === 1 ? "Módulo" : "Módulos"}</span>
            </div>
            <div class="hero__stat">
              <span class="hero__stat-num">${totalUnidades}</span>
              <span class="hero__stat-label">${totalUnidades === 1 ? "UT" : "UT"}</span>
            </div>
          </div>
        </section>
        ${familiesMarkup}
        <section class="search-panel" aria-labelledby="search-title">
          <div class="search-panel__heading">
            <div>
              <p class="search-panel__eyebrow">Encuentra tus apuntes</p>
              <h2 id="search-title">Buscar en todas las unidades de trabajo</h2>
            </div>
            <span class="search-panel__count">${totalDocumentos} documentos</span>
          </div>
          <label class="search-box">
            <span class="visually-hidden">Buscar por título, módulo o contenido</span>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="currentColor" stroke-width="2"/>
              <path d="m20 20-4-4" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
            <input id="content-search" type="search" placeholder="Buscar por título, módulo o contenido…" autocomplete="off">
          </label>
          <div id="search-results" class="search-results" aria-live="polite"></div>
        </section>
      </section>
    `;

    const searchInput = document.getElementById("content-search");
    searchInput.addEventListener("focus", hydrateSearchIndex, { once: true });
    searchInput.addEventListener("input", () => renderSearchResults(searchInput.value));
  }

  /* ── Render: About ─────────────────────────────────────── */
  function renderAbout() {
    setMenuToggleVisibility(false);
    updateBreadcrumb({ view: "about" }, {});
    document.title = `Sobre mí — Iker Fernández`;

    appEl.innerHTML = `
      <section class="about-page">
        <header class="about-hero">
          <img class="about-portrait" src="assets/img/iker-fernandez.jpg" alt="Iker Fernández" width="210" height="260" decoding="async">
          <div>
            <p class="about-eyebrow">Sobre mí</p>
            <h1>Iker Fernández</h1>
            <p class="about-lead">Profesor de Educación Secundaria.</p>
          </div>
        </header>

        <section class="about-profile" aria-labelledby="trayectoria-title">
          <div>
            <p class="about-eyebrow">Trayectoria</p>
            <h2 id="trayectoria-title">Experiencia docente</h2>
          </div>
          <div class="about-profile__copy">
            <p>Llevo dos años dedicado a la docencia. Durante este tiempo he impartido clases tanto en Educación Secundaria Obligatoria como en Formación Profesional, dentro de la especialidad de Informática y especialmente en desarrollo web e inteligencia artificial.</p>
            <p>Ingeniero aeronáutico de formación, pero mis intereses abarcan la informática, la electrónica, los materiales y los procesos de fabricación, además de otros ámbitos relacionados con la ingeniería.</p>
          </div>
        </section>

        <section class="about-section" aria-labelledby="enfoque-title">
          <div class="about-heading">
            <p class="about-eyebrow">En el aula</p>
            <h2 id="enfoque-title">Mi enfoque docente</h2>
          </div>
          <div class="about-grid">
            <article>
              <span>01</span>
              <h3>Claridad y estructura</h3>
              <p>Mi forma de enseñar es directa, estructurada y organizada. Busco que cada concepto tenga un propósito claro dentro del conjunto.</p>
            </article>
            <article>
              <span>02</span>
              <h3>Aprendizaje continuo</h3>
              <p>Considero que el conocimiento nunca llega a completarse del todo, incluso cuando se alcanza un nivel experto en una materia.</p>
            </article>
            <article>
              <span>03</span>
              <h3>Autonomía práctica</h3>
              <p>Mi objetivo es que el alumnado pueda aplicar lo aprendido y desenvolverse por sí mismo cuando necesite utilizarlo en el futuro.</p>
            </article>
          </div>
        </section>

        <section class="about-purpose" aria-labelledby="web-title">
          <div class="about-heading">
            <p class="about-eyebrow">Este proyecto</p>
            <h2 id="web-title">Un recurso para el alumnado</h2>
          </div>
          <p>He creado esta web para reunir apuntes y prácticas en un espacio claro, ordenado y accesible. Su finalidad es complementar el trabajo del aula y facilitar que cada estudiante pueda consultar contenidos, resolver dudas y practicar de manera autónoma.</p>
        </section>

        <section class="about-contact" aria-labelledby="contact-title">
          <div>
            <p class="about-eyebrow">Contacto</p>
            <h2 id="contact-title">¿Tienes alguna duda sobre el material?</h2>
          </div>
          <a href="mailto:iker.fermar@educa.jcyl.es">iker.fermar@educa.jcyl.es</a>
        </section>
      </section>
    `;
  }

  function renderSearchResults(query) {
    const resultsEl = document.getElementById("search-results");
    const normalized = normalizeSearchText(query.trim());
    if (!normalized) {
      resultsEl.innerHTML = "";
      return;
    }
    const matches = state.searchIndex.filter((item) => item.searchable.includes(normalized)).slice(0, 12);
    if (!matches.length) {
      resultsEl.innerHTML = `<p class="search-empty">No hay resultados para “${escapeHtml(query.trim())}”.</p>`;
      return;
    }
    resultsEl.innerHTML = `
      <p class="search-summary">${matches.length}${matches.length === 12 ? "+" : ""} resultado${matches.length === 1 ? "" : "s"}</p>
      <ul>${matches.map((item) => `
        <li>
          <a href="${topicHref(item.cicloId, item.moduloId, item.temaId)}">
            <span class="search-result__title">${escapeHtml(item.titulo)}</span>
            <span class="search-result__path">${escapeHtml(item.ciclo)} · ${escapeHtml(item.modulo)} · ${escapeHtml(item.unidadCodigo)}</span>
          </a>
        </li>`).join("")}
      </ul>`;
  }

  /* ── Render: Cycle ────────────────────────────────────── */
  function renderCycle(cycleData) {
    const hasModules = cycleData.ciclo.modulos.length > 0;
    setMenuToggleVisibility(hasModules);
    updateBreadcrumb({ view: "cycle" }, cycleData);
    document.title = `${cycleData.ciclo.nombre} — Apuntes FP`;

    const sidebarLinks = cycleData.ciclo.modulos.map((modulo) => `
      <li>
        <a class="sidebar-link" href="#ciclo/${cycleData.ciclo.id}/modulo/${modulo.id}">
          ${modulo.codigo ? `<span class="sidebar-link__code">${modulo.codigo}</span>` : ""}
          <span>${modulo.nombre}</span>
        </a>
      </li>
    `).join("");

    const cardsMarkup = cycleData.ciclo.modulos.map((modulo) => {
      const unitCount = getWorkUnits(modulo).length;
      const documentCount = getModuleContents(modulo).length;
      return createCard(
        `#ciclo/${cycleData.ciclo.id}/modulo/${modulo.id}`,
        modulo.codigo ? `Módulo ${modulo.codigo}` : "Módulo profesional",
        modulo.nombre,
        `${unitCount} UT · ${documentCount} documentos`
      );
    }).join("");

    const moduleContent = cardsMarkup || `
      <div class="empty-state">
        <p class="empty-state__label">Próximamente</p>
        <h2>Contenido en preparación</h2>
        <p>Los módulos y apuntes de este ciclo se incorporarán más adelante.</p>
        <a href="#">Volver a todos los ciclos</a>
      </div>`;

    const cycle = cycleData.ciclo;
    const factsMarkup = [
      ["Título", cycle.titulacion],
      ["Código", cycle.codigo],
    ].filter(([, value]) => value).map(([label, value]) => `
      <div>
        <dt>${label}</dt>
        <dd>${escapeHtml(value)}</dd>
      </div>`).join("");

    const legislationMarkup = (cycle.legislacion || []).map((law) => `
      <li>
        <a href="${law.url}" target="_blank" rel="noopener noreferrer">
          <span class="legislation-item__meta">${escapeHtml(law.ambito)} · ${escapeHtml(law.tipo)}</span>
          <strong>${escapeHtml(law.nombre)}</strong>
          <span class="legislation-item__action">Consultar norma <span aria-hidden="true">↗</span><span class="visually-hidden"> (se abre en una pestaña nueva)</span></span>
        </a>
      </li>`).join("");

    const familiaId = cycleData.familia.id;

    appEl.innerHTML = `
      <div class="sidebar-overlay" id="sidebar-overlay"></div>
      <section class="page-shell ${hasModules ? "" : "page-shell--empty"} family-${familiaId}">
        ${hasModules ? `<nav class="page-sidebar ${state.sidebarOpen ? "open" : ""}" aria-label="Módulos del ciclo">
          <h2>${cycleData.ciclo.nombre}</h2>
          <ul class="sidebar-list">${sidebarLinks}</ul>
        </nav>` : ""}
        <section class="page-content">
          <div class="content-inner">
            <p class="content-kicker">${cycle.nivel || "Formación Profesional"}</p>
            <h1>${cycle.nombre}</h1>
            ${factsMarkup ? `<dl class="cycle-facts">${factsMarkup}</dl>` : ""}

            ${cycle.perfil ? `
              <section class="cycle-section cycle-profile" aria-labelledby="profile-title">
                <div class="cycle-section__heading">
                  <p class="content-kicker">El ciclo</p>
                  <h2 id="profile-title">Perfil profesional</h2>
                </div>
                <div>
                  <p>${escapeHtml(cycle.perfil)}</p>
                  ${cycle.fuentePerfil ? `<a class="official-source" href="${cycle.fuentePerfil}" target="_blank" rel="noopener noreferrer">Fuente: ficha oficial de Formación Profesional de Castilla y León <span aria-hidden="true">↗</span><span class="visually-hidden"> (se abre en una pestaña nueva)</span></a>` : ""}
                </div>
              </section>` : ""}

            <section class="cycle-section cycle-modules" aria-labelledby="modules-title">
              <div class="cycle-section__heading">
                <p class="content-kicker">Contenido</p>
                <h2 id="modules-title">Módulos profesionales disponibles</h2>
              </div>
              <p class="cycle-section__intro">${cycle.modulos.length ? "Selecciona un módulo para consultar sus unidades de trabajo, contenidos teóricos y prácticas." : "Este ciclo ya tiene su espacio preparado para añadir contenido."}</p>
              <div class="card-grid">${moduleContent}</div>
            </section>

            ${legislationMarkup ? `
              <section class="cycle-section cycle-legislation" aria-labelledby="legislation-title">
                <div class="cycle-section__heading">
                  <p class="content-kicker">Documentación oficial</p>
                  <h2 id="legislation-title">Legislación vigente</h2>
                </div>
                <ul class="legislation-list">${legislationMarkup}</ul>
              </section>` : ""}
          </div>
        </section>
      </section>
    `;

    document.getElementById("sidebar-overlay")?.addEventListener("click", closeSidebarAndRestoreFocus);
    syncSidebarAccessibility();
  }

  /* ── Render: Module sidebar ───────────────────────────── */
  async function loadModuleContent(ciclo, modulo, temaId) {
    const selectedTema = getModuleContents(modulo).find((contenido) => contenido.id === temaId);
    if (!selectedTema)
      return `<div class="error-box"><strong>Error:</strong> No se ha encontrado el contenido solicitado.</div>`;

    const response = await fetch(
      markdownPath(ciclo.id, modulo.id, selectedTema.tipo, selectedTema.id),
      { headers: { "Accept-Charset": "utf-8" } }
    );

    if (!response.ok)
      throw new Error("No se pudo cargar el archivo Markdown del tema seleccionado.");

    const buffer = await response.arrayBuffer();
    const markdown = new TextDecoder("utf-8").decode(buffer);
    return sanitizeHtml(marked.parse(markdown));
  }

  function renderModuleSidebar(ciclo, modulo, selectedTemaId) {
    const unidades = getWorkUnits(modulo);
    const selectedUnit = unidades.find((unidad) =>
      (unidad.contenidos || []).some((contenido) => contenido.id === selectedTemaId)
    );
    const selectedUnitIndex = selectedUnit ? unidades.indexOf(selectedUnit) : -1;
    const progressText = selectedUnitIndex >= 0
      ? `${selectedUnit.codigo || `UT ${selectedUnitIndex + 1}`} · unidad ${selectedUnitIndex + 1} de ${unidades.length}`
      : "";

    const renderButtons = (contenidos, tipo) =>
      contenidos.map((contenido) => `
        <li>
          <a
            class="theme-button ${tipo} ${contenido.id === selectedTemaId ? "active" : ""}"
            href="${topicHref(ciclo.id, modulo.id, contenido.id)}"
            data-content-id="${contenido.id}"
            ${contenido.id === selectedTemaId ? 'aria-current="page"' : ""}
          >${contenido.titulo}</a>
        </li>
      `).join("");

    const unitsMarkup = unidades.map((unidad, index) => {
      const contenidos = unidad.contenidos || [];
      const teoria = contenidos.filter((contenido) => contenido.tipo === "teoria");
      const practicas = contenidos.filter((contenido) => contenido.tipo === "practica");
      return `
        <section class="sidebar-group sidebar-unit">
          <p class="sidebar-label">${escapeHtml(unidad.codigo || `UT ${index + 1}`)}</p>
          <h3 class="sidebar-unit__title">${escapeHtml(unidad.nombre)}</h3>
          ${teoria.length ? `
            <p class="sidebar-content-kind">Teoría</p>
            <ul class="sidebar-list">${renderButtons(teoria, "teoria")}</ul>` : ""}
          ${practicas.length ? `
            <p class="sidebar-content-kind">Prácticas</p>
            <ul class="sidebar-list">${renderButtons(practicas, "practica")}</ul>` : ""}
        </section>`;
    }).join("");

    return `
      <nav class="page-sidebar ${state.sidebarOpen ? "open" : ""}" aria-label="Unidades de trabajo del módulo">
        <h2><a class="sidebar-module-home" href="#ciclo/${ciclo.id}/modulo/${modulo.id}" ${selectedTemaId ? "" : 'aria-current="page"'}>${modulo.nombre}</a></h2>
        ${unitsMarkup}
        ${progressText ? `<p class="sidebar-progress">${progressText}</p>` : ""}
      </nav>
    `;
  }

  function renderModuleOverview(moduleData) {
    const modulo = moduleData.modulo;
    const resultados = (modulo.resultadosAprendizaje || []).map((resultado, index) => `
      <li>
        <span>RA ${index + 1}</span>
        <p>${escapeHtml(resultado)}</p>
      </li>`).join("");

    const legislacion = (modulo.legislacion || []).map((law) => `
      <li>
        <a href="${law.url}" target="_blank" rel="noopener noreferrer">
          <span class="legislation-item__meta">${escapeHtml(law.ambito)} · ${escapeHtml(law.tipo)}</span>
          <strong>${escapeHtml(law.nombre)}</strong>
          <span class="legislation-item__action">Consultar norma <span aria-hidden="true">↗</span><span class="visually-hidden"> (se abre en una pestaña nueva)</span></span>
        </a>
      </li>`).join("");

    const programacion = modulo.programacion || {};
    const descarga = programacion.archivo
      ? `<a class="programming-download" href="${escapeHtml(programacion.archivo)}" download>Descargar programación de aula <span aria-hidden="true">↓</span></a>`
      : `<p class="programming-pending">Documento pendiente de publicación.</p>`;

    return `
      <div class="content-inner module-overview">
        <p class="content-kicker">Módulo profesional ${escapeHtml(modulo.codigo || "")}</p>
        <h1>${escapeHtml(modulo.nombre)}</h1>

        ${modulo.descripcion ? `
          <section class="cycle-section module-description" aria-labelledby="module-description-title">
            <div class="cycle-section__heading">
              <p class="content-kicker">El módulo</p>
              <h2 id="module-description-title">Descripción</h2>
            </div>
            <p>${escapeHtml(modulo.descripcion)}</p>
            ${modulo.fuenteDescripcion ? `<a class="official-source module-source" href="${escapeHtml(modulo.fuenteDescripcion)}" target="_blank" rel="noopener noreferrer">Fuente: currículo oficial del módulo <span aria-hidden="true">↗</span><span class="visually-hidden"> (se abre en una pestaña nueva)</span></a>` : ""}
          </section>` : ""}

        ${resultados ? `
          <section class="cycle-section module-results" aria-labelledby="module-results-title">
            <div class="cycle-section__heading">
              <p class="content-kicker">Currículo oficial</p>
              <h2 id="module-results-title">Resultados de aprendizaje</h2>
            </div>
            <ol class="learning-results">${resultados}</ol>
            ${modulo.fuenteResultados ? `<a class="official-source module-source" href="${escapeHtml(modulo.fuenteResultados)}" target="_blank" rel="noopener noreferrer">Fuente: resultados de aprendizaje del currículo oficial <span aria-hidden="true">↗</span><span class="visually-hidden"> (se abre en una pestaña nueva)</span></a>` : ""}
          </section>` : ""}

        ${legislacion ? `
          <section class="cycle-section module-legislation" aria-labelledby="module-legislation-title">
            <div class="cycle-section__heading">
              <p class="content-kicker">Documentación oficial</p>
              <h2 id="module-legislation-title">Legislación vigente</h2>
            </div>
            <ul class="legislation-list">${legislacion}</ul>
          </section>` : ""}

        <section class="cycle-section module-programming" aria-labelledby="module-programming-title">
          <div class="cycle-section__heading">
            <p class="content-kicker">Planificación docente</p>
            <h2 id="module-programming-title">Programación de aula</h2>
          </div>
          <div class="programming-card">
            <dl>
              <div><dt>Curso</dt><dd>${escapeHtml(programacion.curso || "Por indicar")}</dd></div>
              <div><dt>Centro</dt><dd>${escapeHtml(programacion.centro || "Por indicar")}</dd></div>
            </dl>
            ${descarga}
          </div>
        </section>
      </div>`;
  }

  async function renderModule(moduleData, requestedTemaId) {
    setMenuToggleVisibility(true);

    const selectedTema = requestedTemaId
      ? getModuleContents(moduleData.modulo).find((contenido) => contenido.id === requestedTemaId)
      : null;
    const selectedTemaId = selectedTema?.id || null;
    const familiaId = moduleData.familia.id;
    updateBreadcrumb({ view: "module", temaId: requestedTemaId }, { ...moduleData, tema: selectedTema });
    document.title = selectedTema
      ? `${selectedTema.titulo} — ${moduleData.modulo.nombre}`
      : `${moduleData.modulo.nombre} — Apuntes FP`;

    appEl.innerHTML = `
      <div class="sidebar-overlay" id="sidebar-overlay"></div>
      <section class="page-shell page-shell--module family-${familiaId}">
        ${renderModuleSidebar(moduleData.ciclo, moduleData.modulo, selectedTemaId)}
        <section class="page-content">
          ${selectedTema
            ? `<article class="markdown-body"><p>Cargando tema…</p></article>`
            : renderModuleOverview(moduleData)}
        </section>
      </section>
    `;

    document.getElementById("sidebar-overlay")?.addEventListener("click", closeSidebarAndRestoreFocus);
    syncSidebarAccessibility();

    if (!selectedTema) return;

    try {
      const html = await loadModuleContent(moduleData.ciclo, moduleData.modulo, selectedTemaId);
      const article = appEl.querySelector(".markdown-body");
      article.innerHTML = html;
      enhanceCodeBlocks(article);
    } catch (error) {
      const article = appEl.querySelector(".markdown-body");
      article.innerHTML = `<div class="error-box"><strong>Error:</strong> ${error.message}</div>`;
    }

  }

  /* ── Render: Not found ────────────────────────────────── */
  function renderNotFound() {
    setMenuToggleVisibility(false);
    updateBreadcrumb({ view: "home" }, {});
    document.title = `Página no encontrada — Apuntes FP`;
    appEl.innerHTML = `
      <section class="not-found">
        <h1>Página no encontrada</h1>
        <p>La ruta indicada no existe. <a href="#">Volver al inicio</a>.</p>
      </section>
    `;
  }

  /* ── Router ───────────────────────────────────────────── */
  async function renderRoute(moveFocus = false) {
    const route = parseHash();
    state.currentRoute = route;
    closeSidebarOnMobile();
    window.scrollTo(0, 0);

    if (route.view === "home") { renderHome(); }
    else if (route.view === "about") { renderAbout(); }
    else if (route.view === "cycle") {
      const cycleData = findCycle(route.cicloId);
      if (!cycleData) renderNotFound();
      else renderCycle(cycleData);
    }
    else if (route.view === "module") {
      const moduleData = findModule(route.cicloId, route.moduloId);
      if (!moduleData) renderNotFound();
      else if (route.temaId && !getModuleContents(moduleData.modulo).some((contenido) => contenido.id === route.temaId)) {
        renderNotFound();
      } else {
        await renderModule(moduleData, route.temaId);
      }
    } else renderNotFound();

    appEl.setAttribute("aria-busy", "false");
    if (moveFocus) appEl.focus({ preventScroll: true });
  }

  /* ── Init ─────────────────────────────────────────────── */
  async function init() {
    initTheme();
    try {
      const response = await fetch("data/structure.json");
      if (!response.ok) throw new Error("No se pudo leer data/structure.json");
      state.structure = await response.json();
      buildSearchMetadata();
      await renderRoute();
    } catch (error) {
      const openedAsFile = window.location.protocol === "file:";
      const message = openedAsFile
        ? "Chrome no permite cargar los archivos de contenido al abrir index.html directamente. Abre el proyecto mediante Live Server en Visual Studio Code."
        : error.message;
      appEl.innerHTML = `<section class="not-found"><div class="error-box"><strong>Error:</strong> ${escapeHtml(message)}</div></section>`;
      appEl.setAttribute("aria-busy", "false");
    }
  }

  function buildSearchMetadata() {
    const entries = [];
    for (const familia of state.structure.familias) {
      for (const ciclo of familia.ciclos) {
        for (const modulo of ciclo.modulos) {
          for (const contenido of getModuleContents(modulo)) {
            entries.push({ familia: familia.nombre, cicloId: ciclo.id, ciclo: ciclo.nombre, moduloId: modulo.id, modulo: modulo.nombre, temaId: contenido.id, titulo: contenido.titulo, tipo: contenido.tipo, unidadCodigo: contenido.unidadCodigo, unidadNombre: contenido.unidadNombre });
          }
        }
      }
    }
    state.searchIndex = entries.map((entry) => ({
      ...entry,
      searchable: normalizeSearchText(`${entry.familia} ${entry.ciclo} ${entry.modulo} ${entry.unidadCodigo} ${entry.unidadNombre} ${entry.titulo}`),
    }));
  }

  function hydrateSearchIndex() {
    if (state.searchHydrated) return Promise.resolve(state.searchIndex);
    if (state.searchPromise) return state.searchPromise;

    state.searchPromise = Promise.all(state.searchIndex.map(async (entry) => {
      let markdown = "";
      try {
        const response = await fetch(markdownPath(entry.cicloId, entry.moduloId, entry.tipo, entry.temaId));
        if (response.ok) markdown = await response.text();
      } catch (_) {
        // El buscador sigue funcionando por metadatos si un documento no está disponible.
      }
      return { ...entry, searchable: normalizeSearchText(`${entry.familia} ${entry.ciclo} ${entry.modulo} ${entry.unidadCodigo} ${entry.unidadNombre} ${entry.titulo} ${markdown}`) };
    })).then((entries) => {
      state.searchIndex = entries;
      state.searchHydrated = true;
      const input = document.getElementById("content-search");
      if (input?.value) renderSearchResults(input.value);
      return entries;
    });
    return state.searchPromise;
  }

  toggleEl.addEventListener("click", toggleSidebar);
  window.addEventListener("hashchange", () => renderRoute(true));
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape") closeSidebarAndRestoreFocus();
    else trapSidebarFocus(event);
  });
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      state.sidebarOpen = false;
      document.body.classList.remove("sidebar-open");
      toggleEl.setAttribute("aria-expanded", "false");
      appEl.querySelector(".page-sidebar")?.classList.remove("open");
      syncSidebarAccessibility();
    }
  });

  init();
})();
