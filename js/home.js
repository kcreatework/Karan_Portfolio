/* ==========================================================================
   HOME.JS — renders index.html from HOME + PROJECTS in data.js
   ========================================================================== */

function findProject(id) {
  return PROJECTS.find((p) => p.id === id);
}

function renderFeaturedRow(project, index, isBanner) {
  const idxLabel = `[0${index + 1}]`;
  const cs = project.caseStudy;

  if (isBanner) {
    return `
      <div class="feat-banner">
        <div class="feat-banner-top">
          <span class="tag">${project.badge || "Case Study"}</span>
          <span class="rule"></span>
          <span class="year">${project.year}</span>
          <span style="margin-left:auto" class="year">Case Study — ${idxLabel}</span>
        </div>
        <div class="feat-banner-media" style="background-image:url('${cs.heroImage}'); background-position: ${cs.heroImagePosition || "center"};">
          <div class="feat-banner-content">
            <h3>${project.title.toUpperCase()}</h3>
            <a class="btn" href="case-study.html?id=${project.id}">View Case Study
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
            </a>
          </div>
        </div>
        <div class="feat-banner-meta">
          ${cs.meta.slice(0, 4).map((m) => `<div><span class="label">${m.label}</span><span class="val">${m.val}</span></div>`).join("")}
        </div>
      </div>
    `;
  }

  const outcome = project.homeOutcome || { label: "Outcome", stat: null, text: project.description };

  const media = project.mediaGroup
    ? `<div class="feat-media-group">
        <div class="g-tall"><img src="${project.mediaGroup[0]}" alt="${project.title}" loading="lazy"></div>
        <div class="g-stack">
          <div><img src="${project.mediaGroup[1]}" alt="${project.title} mark" loading="lazy"></div>
          <div><img src="${project.mediaGroup[2]}" alt="${project.title} lockup" loading="lazy"></div>
        </div>
      </div>`
    : `<div class="feat-media"><img src="${project.thumbnail}" alt="${project.title}" loading="lazy"></div>`;

  return `
    <div class="feat-row ${index % 2 === 1 ? "reverse" : ""}">
      ${media}
      <div>
        <div class="feat-tagrow">
          <span class="idx">${idxLabel}</span>
          <span class="rule"></span>
          <span class="tag">${project.badge || "Case Study"}</span>
        </div>
        <h3 class="feat-title">${project.title}</h3>
        <div class="feat-outcome">
          <span class="label">${outcome.label}</span>
          <p>${outcome.stat ? `<span class="stat">${outcome.stat}</span>` : ""}${outcome.text}</p>
        </div>
        <a class="btn" href="case-study.html?id=${project.id}">View Case Study
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
        </a>
      </div>
    </div>
  `;
}

function renderHome() {
  const heroName = document.getElementById("hero-name");
  const heroTagline = document.getElementById("hero-tagline");
  const heroCta = document.getElementById("hero-cta");
  if (heroName) heroName.textContent = HOME.heroName;
  if (heroTagline) heroTagline.innerHTML = mdAccent(HOME.heroTagline.toUpperCase());
  if (heroCta) heroCta.textContent = HOME.heroCta;

  const rows = document.getElementById("featured-rows");
  if (rows) {
    rows.innerHTML = HOME.featuredProjectIds
      .map((id, i) => {
        const project = findProject(id);
        if (!project) return "";
        const isBanner = i === HOME.featuredProjectIds.length - 1 && HOME.featuredProjectIds.length > 2;
        return `<div class="reveal" style="--reveal-delay:${Math.min(i, 3) * 0.06}s">${renderFeaturedRow(project, i, isBanner)}</div>`;
      })
      .join("");
  }

  const ctaHeading = document.getElementById("cta-heading");
  const ctaBtn = document.getElementById("cta-btn");
  if (ctaHeading) ctaHeading.innerHTML = mdAccent(HOME.ctaHeading.toUpperCase());
  if (ctaBtn) ctaBtn.textContent = HOME.ctaButton;

  const archiveHeading = document.getElementById("archive-heading");
  const archiveGrid = document.getElementById("archive-grid");
  if (archiveHeading) archiveHeading.textContent = HOME.archiveHeading;
  const archiveTagEl = document.querySelector(".archive-strip .archive-head .tag");
  if (!archiveTagEl && archiveHeading) {
    archiveHeading.insertAdjacentHTML("beforebegin", "");
  }
  if (archiveGrid) {
    archiveGrid.innerHTML = HOME.archive
      .map(
        (a, i) => `
        <a class="archive-item reveal" style="--reveal-delay:${i * 0.08}s" href="${a.href}">
          <div class="thumb">${
            a.placeholder
              ? `<div class="thumb-placeholder"><span></span></div>`
              : `<img src="${a.image}" alt="${a.title}" loading="lazy">`
          }</div>
          <div class="meta"><span class="t">${a.title}</span><span class="k">${a.tag}</span></div>
        </a>
      `
      )
      .join("");
  }

  // Wrap the archive heading + tag in a flex head row to match the design.
  const archiveSection = document.querySelector(".archive-strip .wrap") || document.querySelector(".archive-strip");
  if (archiveHeading && !archiveHeading.closest(".archive-head")) {
    const head = document.createElement("div");
    head.className = "archive-head";
    archiveHeading.parentNode.insertBefore(head, archiveHeading);
    head.appendChild(archiveHeading);
    const tagSpan = document.createElement("span");
    tagSpan.className = "tag";
    tagSpan.textContent = HOME.archiveTag;
    head.appendChild(tagSpan);
  }

  initReveal();
}

document.addEventListener("DOMContentLoaded", renderHome);
