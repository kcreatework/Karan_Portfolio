/* ==========================================================================
   MAIN.JS — shared nav + footer, rendered on every page.
   You shouldn't need to edit this file — edit js/data.js instead.
   ========================================================================== */

/** Turns **bold** markup into <span class="accent">bold</span>. */
function mdAccent(str = "") {
  return str.replace(/\*\*(.+?)\*\*/g, '<span class="accent">$1</span>');
}

/** Escapes nothing fancy — content is trusted (it's your own data.js). */
function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function currentPage() {
  const path = window.location.pathname.split("/").pop() || "index.html";
  return path;
}

function renderNav() {
  const mount = document.getElementById("site-nav");
  if (!mount) return;
  const page = currentPage();

  const links = SITE.nav
    .map((item) => {
      const href = item.external ? SITE.resumeFile : item.href;
      const isActive = !item.external && href === page;
      const target = item.external ? ' target="_blank" rel="noopener"' : "";
      const icon = item.icon ? ' <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v13m0 0l-5-5m5 5l5-5M5 21h14"/></svg>' : "";
      return `<li><a href="${href}" class="${isActive ? "active" : ""}"${target}>${item.label}${icon}</a></li>`;
    })
    .join("");

  mount.innerHTML = `
    <div class="nav-inner">
      <a href="index.html" class="nav-logo">${SITE.shortName}</a>
      <ul class="nav-links">${links}</ul>
      <div class="nav-cta">
        <a href="mailto:${SITE.email}" class="btn btn-accent">Mail Me</a>
      </div>
      <button class="nav-toggle" aria-label="Toggle menu">
        <span></span><span></span><span></span>
      </button>
    </div>
  `;

  const toggle = mount.querySelector(".nav-toggle");
  toggle.addEventListener("click", () => mount.classList.toggle("open"));

  const onScroll = () => mount.classList.toggle("is-scrolled", window.scrollY > 8);
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
}

function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;

  mount.innerHTML = `
    <div class="footer-inner">
      <div class="footer-top">
        <h2 class="footer-heading">GET IN<br><span class="accent">TOUCH</span></h2>
        <div class="footer-socials">
          <div class="label">Connect Directly</div>
          <a href="${SITE.links.linkedin}" target="_blank" rel="noopener">LinkedIn</a>
          <a href="${SITE.links.behance}" target="_blank" rel="noopener">Behance</a>
          <a href="${SITE.links.readcv}" target="_blank" rel="noopener">Read.cv</a>
        </div>
      </div>
      <div class="footer-mail">
        <div class="label">Mail me at-</div>
        <a href="mailto:${SITE.email}">${SITE.email} ↗</a>
      </div>
      <div class="footer-bottom">
        <span class="muted-label">© 2025 ${SITE.copyrightName}</span>
        <span class="muted-label">${SITE.footerTagline}</span>
        <button class="back-to-top" onclick="window.scrollTo({top:0,behavior:'smooth'})">
          <span class="dot"></span>Back to Top
        </button>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();

  // Wire up every resume link/button on the page (About page has two).
  document.querySelectorAll('a[href="#resume"], #resume-btn, #resume-cta-btn').forEach((a) => {
    a.href = SITE.resumeFile;
  });
});

/**
 * Subtle "fade + rise" reveal on scroll, applied to any element with the
 * .reveal class. Call this again after any page script injects new HTML
 * (e.g. at the end of a render function) so newly-added elements get
 * picked up. Elements animate once, the first time they enter view.
 */
function initReveal(root = document) {
  const els = root.querySelectorAll(".reveal:not(.reveal-ready)");
  if (!els.length) return;

  if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    els.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );

  els.forEach((el) => {
    el.classList.add("reveal-ready");
    io.observe(el);
  });
}
window.initReveal = initReveal;
