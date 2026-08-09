/* ==========================================================================
   WORK.JS — renders work.html from PROJECTS in data.js
   ========================================================================== */

const FILTERS = ["All", "Product Design / UX", "Branding", "Illustrations"];

function projectCardHTML(project, i = 0) {
  return `
    <a class="project-card reveal ${project.tall ? "tall" : ""}" style="--reveal-delay:${(i % 4) * 0.06}s" href="case-study.html?id=${project.id}">
      <div class="thumb">
        <img src="${project.thumbnail}" alt="${project.title}" loading="lazy">
        <span class="badge">[${(project.badge || "Case Study").toUpperCase()}]</span>
      </div>
      <div class="info">
        <div class="info-text">
          <span class="eyebrow2">${project.eyebrow}</span>
          <h3 class="title2">${project.title}</h3>
          <p class="desc">${project.description}</p>
        </div>
        <span class="arrow">
          <svg viewBox="0 0 24 24" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
        </span>
      </div>
    </a>
  `;
}

function renderGrid(filter) {
  const grid = document.getElementById("project-grid");
  const list = filter === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === filter);
  grid.innerHTML = list.map((p, i) => projectCardHTML(p, i)).join("") || `<p class="sub">No projects in this category yet.</p>`;
  const count = document.getElementById("filter-count");
  if (count) count.textContent = `${list.length} PROJECT${list.length === 1 ? "" : "S"}`;
  initReveal();
}

function renderWork() {
  const carousel = document.getElementById("carousel-strip");
  if (carousel) {
    const items = PROJECTS.map(
      (p) => `
      <div class="carousel-item">
        <img src="${p.thumbnail}" alt="${p.title}" loading="lazy">
        <div class="ci-overlay">
          <span class="ci-eyebrow">${p.eyebrow}</span>
          <span class="ci-title">${p.title}</span>
        </div>
      </div>`
    ).join("");
    // Doubled so the marquee loop (translateX -50%) is seamless.
    carousel.innerHTML = items + items;
  }

  const pills = document.getElementById("filter-pills");
  if (pills) {
    pills.innerHTML = FILTERS.map(
      (f, i) => `<button class="filter-pill ${i === 0 ? "active" : ""}" data-filter="${f}">${f}</button>`
    ).join("");
    pills.addEventListener("click", (e) => {
      const btn = e.target.closest(".filter-pill");
      if (!btn) return;
      pills.querySelectorAll(".filter-pill").forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      renderGrid(btn.dataset.filter);
    });
  }

  renderGrid("All");
}

document.addEventListener("DOMContentLoaded", renderWork);
