/* ==========================================================================
   CASE-STUDY.JS — renders case-study.html?id=PROJECT_ID from PROJECTS
   in data.js. One template, reused for every project.
   ========================================================================== */

function paragraphs(text = "") {
  return text
    .split("\n\n")
    .map((p) => `<p>${p}</p>`)
    .join("");
}

const BLOCK_RENDERERS = {
  twoColText(b) {
    return `
      <div class="cs-block cs-two-col">
        <div><div class="idx">${b.index || ""}</div><h2>${b.heading}</h2></div>
        <div class="body">${paragraphs(b.body)}</div>
      </div>`;
  },
  image(b) {
    return `
      <div class="cs-block">
        <div class="cs-image"><img src="${b.src}" alt="${b.caption || ""}" loading="lazy"></div>
        ${b.caption ? `<div class="cs-caption">${b.caption}</div>` : ""}
      </div>`;
  },
  imageGrid(b) {
    const cols = b.cols || 2;
    return `
      <div class="cs-block">
        <div class="cs-image-grid" style="grid-template-columns:repeat(${cols},1fr)">
          ${b.images
            .map(
              (img) => `
            <div>
              <div class="cs-image"><img src="${img.src}" alt="${img.caption || ""}" loading="lazy"></div>
              ${img.caption ? `<div class="cs-caption">${img.caption}</div>` : ""}
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  },
  quote(b) {
    return `
      <div class="cs-block cs-quote">
        <blockquote>&ldquo;${b.text}&rdquo;</blockquote>
      </div>`;
  },
  statGrid(b) {
    return `
      <div class="cs-block">
        ${b.heading ? `<div class="cs-stats-head">${b.heading}</div>` : ""}
        <div class="cs-stat-grid">
          ${b.stats
            .map((s) => `<div class="cs-stat"><div class="val">${s.value}</div><div class="lab">${s.label}</div></div>`)
            .join("")}
        </div>
      </div>`;
  },
  personaGrid(b) {
    return `
      <div class="cs-block">
        ${b.heading ? `<div class="cs-persona-head">${b.heading}</div>` : ""}
        <div class="cs-persona-grid">
          ${b.people
            .map(
              (p) => `
            <div class="persona-card">
              <div class="name">${p.name}</div>
              <div class="role">${p.role}</div>
              <div class="bio">${p.bio}</div>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  },
  hmw(b) {
    return `
      <div class="cs-block cs-hmw">
        <h2>${b.heading}</h2>
        <ul>${b.items.map((i) => `<li>${i}</li>`).join("")}</ul>
      </div>`;
  },
  evolution(b) {
    return `
      <div class="cs-block cs-evolution">
        <h2>${b.heading}</h2>
        <div class="evo-stages">
          ${b.stages
            .map(
              (s, i) => `
            <div class="evo-stage">
              <div class="n">0${i + 1}</div>
              <div><div class="t">${s.title}</div><div class="b">${s.body}</div></div>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  },
  challenges(b) {
    return `
      <div class="cs-block cs-challenges">
        <h2>${b.heading}</h2>
        ${b.sub ? `<div class="sub3">${b.sub}</div>` : ""}
        <div class="chal-grid">
          ${b.items
            .map(
              (c, i) => `
            <div class="chal-card">
              <div class="n">Challenge 0${i + 1}</div>
              <div class="q">${c.q}</div>
              <div class="a">${c.a}</div>
            </div>`
            )
            .join("")}
        </div>
      </div>`;
  },
  calloutMedia(b) {
    return `
      <div class="cs-block">
        <div style="text-align:center;margin-bottom:40px;">
          ${b.eyebrow ? `<div class="eyebrow">${b.eyebrow}</div>` : ""}
          <h2 style="font-size:clamp(24px,5vw,44px);font-weight:900;text-transform:uppercase;margin-top:10px;">${b.heading}</h2>
        </div>
        <div class="cs-callouts">
          <div class="callout-col">
            ${b.left.map((c) => `<div class="callout"><div class="n">${c.n}</div><div class="b">${c.b}</div></div>`).join("")}
          </div>
          <div class="center-media"><img src="${b.media}" alt="${b.heading}" loading="lazy"></div>
          <div class="callout-col right">
            ${b.right.map((c) => `<div class="callout"><div class="n">${c.n}</div><div class="b">${c.b}</div></div>`).join("")}
          </div>
        </div>
      </div>`;
  },
};

function renderCaseStudy() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];
  const cs = project.caseStudy;

  document.title = `${project.title} — Case Study — ${SITE.name}`;

  const heroBg = document.getElementById("hero-bg-img");
  if (heroBg) heroBg.src = cs.heroImage;

  const indexLabel = document.getElementById("cs-index-label");
  if (indexLabel) {
    indexLabel.innerHTML = `<span style="color:var(--accent)">${cs.indexLabel}</span> <span style="color:var(--t-60)">— ${cs.tag.toUpperCase()}</span>`;
  }

  const title = document.getElementById("cs-title");
  if (title) title.textContent = project.title.toUpperCase();

  const tagline = document.getElementById("cs-tagline");
  if (tagline) tagline.textContent = cs.tagline;

  const meta = document.getElementById("cs-meta");
  if (meta) {
    meta.innerHTML = cs.meta
      .map((m) => `<div><span class="m-label">${m.label}</span><span class="m-val">${m.val}</span></div>`)
      .join("");
  }

  const blocksMount = document.getElementById("cs-blocks");
  if (blocksMount) {
    blocksMount.innerHTML = `<div class="wrap">${cs.blocks
      .map((b) => (BLOCK_RENDERERS[b.type] ? `<div class="reveal">${BLOCK_RENDERERS[b.type](b)}</div>` : ""))
      .join("")}</div>`;
  }

  // Next project — whichever one comes after this in PROJECTS (wraps around).
  const idx = PROJECTS.findIndex((p) => p.id === project.id);
  const next = PROJECTS[(idx + 1) % PROJECTS.length];
  const nextMount = document.getElementById("next-project");
  if (nextMount && next) {
    nextMount.innerHTML = `
      <div class="label">Next Project</div>
      <a href="case-study.html?id=${next.id}"><h3>${next.title}</h3></a>
      <a class="btn" href="case-study.html?id=${next.id}">View Case Study
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M7 17L17 7M17 7H8M17 7V16"/></svg>
      </a>
    `;
  }

  initReveal();
}

document.addEventListener("DOMContentLoaded", renderCaseStudy);
