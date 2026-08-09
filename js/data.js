/* ==========================================================================
   DATA.JS — EVERYTHING ON THE SITE LIVES HERE.
   Change text by editing the quoted strings. Change images by editing the
   "images/xxx.jpg" paths (put your new file in the images/ folder first).
   See README.md for a full walkthrough.
   ========================================================================== */

/* ---------------------------------------------------------------------- */
/* SITE — global settings used on every page                              */
/* ---------------------------------------------------------------------- */
const SITE = {
  name: "Karan Panda",
  shortName: "KP.",
  role: "Product Designer",
  email: "kcreate.work@gmail.com",
  resumeFile: "assets/resume.pdf",
  copyrightName: "KARAN PANDA",

  nav: [
    { label: "Home", href: "index.html" },
    { label: "Work", href: "work.html" },
    { label: "About", href: "about.html" },
    { label: "Resume", href: "assets/resume.pdf", external: true, icon: true },
  ],

  // Social links shown in the footer. Swap "#" for your real profile URLs.
  links: {
    linkedin: "#",
    behance: "https://www.behance.net/kcreate",
    readcv: "#",
  },

  footerTagline: "Progress Over Perfection.",
};

/* ---------------------------------------------------------------------- */
/* HOME PAGE                                                              */
/* ---------------------------------------------------------------------- */
const HOME = {
  kicker: "Hi, I'm",
  heroName: "KARAN",
  heroTagline: "aspiring **Product Designer** with a background in **Communication Design**",
  heroCta: "Explore Work",

  // Order here controls the order of the featured rows on the homepage.
  // Use a project's "id" from the PROJECTS list below.
  featuredProjectIds: ["panda-print", "student-budget", "chilika-dairy", "last-benthrite"],

  ctaHeading: "Interested in **seeing more?**",
  ctaButton: "Explore All Works",

  archiveHeading: "Archive",
  archiveTag: "Blogs",
  archive: [
    { title: "Process of Portfolio Building", tag: "[GEN]", image: "images/archive-portfolio.jpg", href: "#" },
    { title: "Pattachitra Painting", tag: "[PHOTO]", image: "images/archive-pattachitra.jpg", href: "#" },
    // No image yet for this one — renders as an empty placeholder tile
    // (a bordered circle) instead of a photo. Add an "image" field here
    // whenever you have real artwork for it, and it'll switch to a photo.
    { title: "System Thinking", tag: "[ID]", placeholder: true, href: "#" },
  ],
};

/* ---------------------------------------------------------------------- */
/* ABOUT PAGE                                                             */
/* ---------------------------------------------------------------------- */
const ABOUT = {
  eyebrow: "About Me",
  heading: "Products are only one part of who I am.",
  sub: "Everything outside design shapes how I think inside design.",
  portrait: "images/portrait.jpg",
  resumeBtn: "Download Resume ↗",

  lift: {
    heading: "I lift every day",
    body: "Home workouts keep me physically fit, mentally active, and ready for the creative challenges of every day.",
  },

  games: {
    eyebrow: "My Favorite Games",
    heading: "When I unplug, I play.",
    body: "Games inspire how I think about interaction, feedback, progression and emotion.",
    mobileLabel: "Most played on mobile",
    mobile: [
      { name: "Clash Royale", sub: "Supercell · Strategy & Tactics", icon: "images/game-icon-1.jpg" },
      { name: "Clash of Clans", sub: "Supercell · Strategy & Tactics", icon: "images/game-icon-2.jpg" },
    ],
    // Cover art for third-party games is copyrighted, so these use plain
    // placeholder covers instead of real box art. Swap in your own
    // screenshots any time — see the README for how.
    favorites: [
      { title: "Mortal Kombat 1", cover: "images/game-cover-1.jpg" },
      { title: "Marvel's Spider-Man", cover: "images/game-cover-2.jpg" },
    ],
  },

  art: {
    eyebrow: "Art",
    heading: "I draw at, leisure.",
    body: "No user flows, no constraints — just shape, colour and story.",
    pieces: [
      { image: "images/art-wanderer.jpg", caption: "The Wanderer — Vector Serigraph, 2026" },
      { image: "images/art-solitary-drift.jpg", caption: "Solitary Drift — Digital Painting, 2025" },
      { image: "images/art-whispers.jpg", caption: "Whispers — Digital Painting, 2025" },
      { image: "images/art-panda-bloom.jpg", caption: "Organic Alignment — Vector Serigraph, 2026" },
    ],
  },

  honors: {
    eyebrow: "Industry Recognition",
    heading: "Honors & Credentials",
    items: [
      {
        title: "Google UX Design Certificate",
        body: "Completed Google's UX Design program, covering UX research, wireframing, prototyping, and design thinking.",
      },
      {
        title: "Top 10 Finalist — Graphic Design (2023)",
        body: "Recognized among India's Top 10 participants in the National Graphic Design competition.",
      },
      {
        title: "Fine Arts & Painting",
        body: "Awarded across multiple district and national-level painting competitions, building a strong foundation in visual storytelling and artistic expression.",
      },
      {
        title: "Industry Mentor Recognition",
        body: "Recognized by an industry mentor for excellent punctuality, integrity, and strong teamwork during a publishing-design internship.",
      },
    ],
  },

  resumeCtaText: "Looking for a more detailed CV layout?",
  resumeCtaBtn: "Download Full Resume (PDF)",
};

/* ---------------------------------------------------------------------- */
/* PROJECTS — the Work grid + every case study.                          */
/* Add a project: copy a whole { ... } block, give it a new unique "id",  */
/* and add that id to HOME.featuredProjectIds if you want it on the      */
/* homepage too. Remove a project: delete its whole block. Reorder:       */
/* cut/paste blocks up or down.                                          */
/* ---------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "student-budget",
    title: "Student Budget",
    category: "Product Design / UX", // controls which filter pill it appears under
    badge: "Case Study",
    eyebrow: "Financial Wellness App",
    description: "Designed an intuitive budget tracking system improving student financial adherence by 65% through behavioral UX patterns.",
    thumbnail: "images/proj-student-budget.jpg",
    year: "2025",
    tall: false,
    // Shown in the homepage featured row only.
    homeOutcome: { label: "Outcome", stat: "92%", text: "of test users felt more in control of their finances after two weeks of use." },
    caseStudy: {
      tag: "Case Study",
      indexLabel: "[01]",
      tagline: "An adaptive budgeting app built around irregular student income, not against it.",
      heroImage: "images/proj-student-budget.jpg",
      meta: [
        { label: "Role", val: "Product Designer" },
        { label: "Tools", val: "Figma, Google Sheets" },
        { label: "Duration", val: "3 Weeks" },
        { label: "Platform", val: "iOS & Android" },
      ],
      blocks: [
        {
          type: "twoColText",
          index: "01 / Context",
          heading: "Overview",
          body: "Student Budget (in-app name: Panda) started with a simple observation — every budgeting app I tried assumed a steady paycheck. Students don't have that. Income arrives in bursts: a part-time shift, an allowance transfer, financial aid. Spending has to stretch unevenly across the month.\n\nI set out to design a budgeting experience built around that irregularity instead of fighting it.",
        },
        {
          type: "statGrid",
          heading: "Key Insights",
          stats: [
            { value: "75%", label: "of students had no consistent budgeting method" },
            { value: "25%", label: "said their current app felt built for them" },
            { value: "66%", label: "wanted shared or group expense splitting" },
            { value: "3.6/5", label: "average satisfaction with existing tools" },
          ],
        },
        {
          type: "hmw",
          heading: "Understanding the Problem",
          items: [
            "Adaptive rolling balances — the budget recalculates around irregular income instead of resetting on a fixed date.",
            "Micro-incentive badges — small, non-naggy rewards for staying within a category.",
            "Seamless group bill-splitting — splitting a grocery run or rent with roommates in two taps, not a spreadsheet.",
          ],
        },
        {
          type: "personaGrid",
          heading: "Meet the Users",
          people: [
            { name: "Ananya Rao", role: "Design Student", bio: "Freelances between classes; income lands in unpredictable chunks. Wants to see, at a glance, what's actually safe to spend." },
            { name: "Priya Nair", role: "Part-time Barista & Student", bio: "Paid weekly, spends daily. Wants the app to keep up with her pace instead of asking her to plan a month ahead." },
            { name: "Suresh Patel", role: "Postgraduate, Scholarship-funded", bio: "Budgets around a single lump sum each semester and needs to see it stretched across 16 weeks at a glance." },
          ],
        },
        {
          type: "hmw",
          heading: "How Might We",
          items: [
            "How might we design a budget that adapts to income instead of assuming it?",
            "How might we make saving feel rewarding without being preachy?",
            "How might we make splitting shared costs painless enough that people actually do it?",
          ],
        },
        {
          type: "evolution",
          heading: "Design Evolution",
          stages: [
            { title: "Monochrome Wireframe", body: "Structure first — information hierarchy tested before a single colour was chosen." },
            { title: "Mid-Fidelity Dark UI", body: "Introduced the dark theme and the rolling-balance visualisation, tested with 6 students." },
            { title: "High-Fidelity UI", body: "Refined the type scale and contrast, and added the group bill-split flow." },
            { title: "Editorial Polish", body: "Final pass on spacing, iconography and micro-copy for a calmer, less 'financial app' tone." },
          ],
        },
        {
          type: "statGrid",
          heading: "Measurable Improvement in Financial Habits",
          stats: [
            { value: "+65%", label: "adherence to weekly budget" },
            { value: "14d", label: "average time to build a saving habit" },
            { value: "92%", label: "felt more in control after two weeks" },
            { value: "2.4x", label: "more likely to split a shared bill in-app" },
          ],
        },
        {
          type: "quote",
          text: "The biggest opportunity wasn't adding features — it was removing friction.",
        },
      ],
    },
  },

  {
    id: "panda-print",
    title: "Panda Print",
    category: "Product Design / UX",
    badge: "Case Study",
    eyebrow: "Printing Service Platform",
    description: "Streamlined the printing process, reducing user errors by 40% and increasing task completion speed across all user cohorts.",
    thumbnail: "images/proj-panda-print.jpg",
    year: "2025",
    tall: false,
    homeOutcome: { label: "Outcome", stat: null, text: "Designed a seamless mobile experience that simplifies document printing for students." },
    caseStudy: {
      tag: "Case Study",
      indexLabel: "[02]",
      tagline: "Simplifying campus printing through one connected platform.",
      heroImage: "images/proj-panda-print.jpg",
      meta: [
        { label: "Role", val: "Product Designer" },
        { label: "Tools", val: "Figma" },
        { label: "Duration", val: "2 Weeks" },
        { label: "Platform", val: "Mobile App" },
      ],
      blocks: [
        {
          type: "twoColText",
          index: "01 / Context",
          heading: "Overview",
          body: "Panda Print is the companion app to Student Budget — a print-on-campus service that lets students send a document from their phone and collect it from the nearest kiosk, instead of emailing themselves a PDF and hunting for a working printer.",
        },
        {
          type: "hmw",
          heading: "What It Does",
          items: [
            "Upload once, print anywhere on campus.",
            "Real-time queue status per kiosk, so students pick the shortest line.",
            "Pay-per-page balance synced with the Panda wallet — no separate top-up.",
          ],
        },
        {
          type: "statGrid",
          heading: "Outcome",
          stats: [
            { value: "40%", label: "fewer user errors during printing" },
            { value: "↑", label: "faster task completion across all cohorts" },
          ],
        },
        {
          type: "quote",
          text: "Printing shouldn't be the hardest part of turning in an assignment.",
        },
      ],
    },
  },

  {
    id: "cavendish-learning",
    title: "Cavendish Learning",
    category: "Branding",
    badge: "Branding",
    eyebrow: "Botanical Architecture Identity",
    description: "Identity for sustainable architecture and botanical arts, blending nature with structure through considered typographic systems.",
    thumbnail: "images/proj-cavendish-learning.jpg",
    year: "2025",
    tall: true,
    caseStudy: {
      tag: "Branding",
      indexLabel: "[03]",
      tagline: "An identity that reads as architectural on a building and warm on a page.",
      heroImage: "images/proj-cavendish-learning.jpg",
      meta: [
        { label: "Role", val: "Brand Designer" },
        { label: "Tools", val: "Illustrator, Figma" },
        { label: "Duration", val: "2 Weeks" },
        { label: "Deliverables", val: "Logo, Type System, Signage" },
      ],
      blocks: [
        {
          type: "twoColText",
          index: "01 / Context",
          heading: "Overview",
          body: "Cavendish Learning needed an identity that could sit comfortably on both a campus building and a botany field guide. The brief called for something architectural — considered, structural — while staying warm enough for an education brand working with young students.",
        },
        {
          type: "image",
          src: "images/proj-cavendish-learning.jpg",
          caption: "Facade study — the typographic system borrows its rhythm from the building's own repeated vertical lines.",
        },
        {
          type: "quote",
          text: "Structure and nature aren't opposites — they're the same idea at different scales.",
        },
      ],
    },
  },

  {
    id: "chilika-dairy",
    title: "Chilika Dairy",
    category: "Branding",
    badge: "Branding",
    eyebrow: "Artisanal Brand Identity",
    description: "Complete brand identity for an artisanal dairy, capturing heritage and craft through restrained visual language.",
    thumbnail: "images/proj-chilika-dairy.jpg",
    year: "2025",
    tall: true,
    homeOutcome: { label: "Description", stat: null, text: "A contemporary dairy identity inspired by the culture and heritage of Manikpatna." },
    // Shown on the homepage instead of a single feat-media image — a tall
    // product shot beside two stacked brand-mark tiles.
    mediaGroup: ["images/chilika-dairy-product.jpg", "images/chilika-dairy-mark.jpg", "images/chilika-dairy-lockup.jpg"],
    caseStudy: {
      tag: "Branding",
      indexLabel: "[04]",
      tagline: "A contemporary dairy identity inspired by the culture and heritage of Manikpatna.",
      heroImage: "images/chilika-dairy-product.jpg",
      meta: [
        { label: "Role", val: "Brand Designer" },
        { label: "Tools", val: "Illustrator, Photoshop" },
        { label: "Duration", val: "2 Weeks" },
        { label: "Deliverables", val: "Logo, Packaging, Guidelines" },
      ],
      blocks: [
        {
          type: "twoColText",
          index: "01 / Context",
          heading: "Overview",
          body: "Chilika Dairy needed a contemporary identity that still felt rooted in Manikpatna, the coastal town its dahi and milk products come from. The brief was to modernise the brand without losing the handmade, local character of the product.",
        },
        {
          type: "image",
          src: "images/chilika-dairy-product.jpg",
          caption: "Manikpatna Dahi — packaging design",
        },
        {
          type: "imageGrid",
          cols: 2,
          images: [
            { src: "images/chilika-dairy-mark.jpg", caption: "Brand mark — a stylised fishtail nodding to the Chilika lagoon" },
            { src: "images/chilika-dairy-lockup.jpg", caption: "Primary logo lockup" },
          ],
        },
        {
          type: "twoColText",
          index: "02 / Approach",
          heading: "The Mark",
          body: "The mark takes its shape from a fish's tail — a quiet nod to the lagoon the dairy is named after — paired with a rounded, confident wordmark that reads well at kiosk scale and on a milk carton alike.",
        },
        {
          type: "quote",
          text: "Heritage doesn't have to mean dated.",
        },
      ],
    },
  },

  {
    id: "last-benthrite",
    title: "The Last Benthrite",
    category: "Illustrations",
    badge: "Illustration",
    eyebrow: "Game Illustration Series",
    description: "A series of expressive character illustrations for an indie narrative game, balancing darkness with stylized clarity.",
    thumbnail: "images/proj-last-benthrite.jpg",
    year: "2026",
    tall: true,
    caseStudy: {
      tag: "Product Design Case Study",
      indexLabel: "[01]",
      tagline: "A three-week game jam prototype built around the theme \u201cTo the Top.\u201d",
      heroImage: "images/last-benthrite-banner.jpg",
      // Controls which part of heroImage stays visible when the image is
      // cropped to fit its frame (CSS background-position). First value is
      // horizontal, second vertical (0%/top = top edge, 100%/bottom = bottom
      // edge). Try "center top", "center 30%", "left center", etc.
      heroImagePosition: "center top",
      meta: [
        { label: "Role", val: "Visual Designer & Illustrator" },
        { label: "Tools", val: "Procreate and Adobe" },
        { label: "Duration", val: "3 Weeks" },
        { label: "Constraints", val: "Game Competition Rules, Software-Centric" },
      ],
      blocks: [
        {
          type: "twoColText",
          index: "01 / Context",
          heading: "Overview",
          body: "The Last Benthrite was created during a three-week game jam built around the theme \u201cTo the Top.\u201d The challenge was to transform a simple idea into a complete playable prototype within seven days.\n\nRather than aiming for a feature-rich game, the focus was on designing a clear gameplay loop supported by a cohesive visual language — an opportunity to explore game art production, rapid decision-making, and designing under strict time constraints.",
        },
        {
          type: "twoColText",
          index: "02 / Research & Iteration",
          heading: "Exploring the Prompt: \u201cTo the Top\u201d",
          body: "After the theme announcement, we brainstormed several interpretations — vertical platformers, progression systems, player motivation — before narrowing in on a concept that could realistically be built within the jam's timeline.",
        },
        {
          type: "evolution",
          heading: "Concept Exploration",
          stages: [
            { title: "Concept 1 — Vertical Climber", body: "A straightforward vertical platformer where the player continually rises through generated terrain. Focus was on movement and pacing between platforms." },
            { title: "Concept 2 — Growth Loop", body: "Combined the climb-upward theme with a resource-gathering progression system. Cut for scope — too many systems for a one-week build." },
            { title: "Concept 3 — Depth Reveal", body: "An escalating vertical space where each screen reveals more of the world above. This became the final direction — simplest to build and clearest to read." },
          ],
        },
        {
          type: "twoColText",
          index: "03 / World",
          heading: "Building the World",
          body: "The Last Benthrite lives in the murky waters beneath Manikpatna, in a bioluminescent cave system inhabited by soft, anxious creatures that evolved to be small and unthreatening. Every design decision — palette, silhouette, animation timing — was built to reinforce a slightly nervous, slightly hopeful creature climbing toward a light it's never seen.",
        },
        {
          type: "imageGrid",
          cols: 2,
          images: [
            { src: "images/benthrite-portrait.jpg", caption: "Early character exploration" },
            { src: "images/benthrite-final-reveal.jpg", caption: "Final hero character" },
          ],
        },
        {
          type: "challenges",
          heading: "Visual Challenges",
          sub: "Key design questions that needed solving",
          items: [
            { q: "How do you maintain readability in a dark underwater environment?", a: "The background is inherently dark. The character and interactive elements must pop without breaking atmosphere." },
            { q: "How do you create depth without reducing gameplay clarity?", a: "Parallax layers and atmospheric perspective must enhance, not obscure, the play space." },
            { q: "How do platforms communicate their behaviour visually?", a: "Static, moving, and breakable platforms must be distinguishable at a glance through shape and material alone." },
            { q: "How do you build a consistent UI in one week?", a: "The interface must feel like part of the game world, not a generic overlay." },
            { q: "How do power-ups communicate their effect before use?", a: "Each ability must be visually self-explanatory — icon, colour, and shape working together." },
          ],
        },
        {
          type: "twoColText",
          index: "04 / Cast",
          heading: "Character Design",
          body: "The goal was a cast of distinct characters with a consistent, whimsical visual language. AI ideation tools are phenomenal at generating breathtaking standalone images, but they struggle with stylistic continuity, scale consistency, and clean vector translation across a cast.\n\nThe real creative challenge was building a structured workflow: using AI purely as a rapid ideation engine, then actively dismantling and rebuilding those concepts by hand to inject actual personality and precise design control.",
        },
        {
          type: "imageGrid",
          cols: 3,
          images: [
            { src: "images/benthrite-character-1.jpg", caption: "" },
            { src: "images/benthrite-character-2.jpg", caption: "" },
            { src: "images/benthrite-character-3.jpg", caption: "" },
          ],
        },
        {
          type: "calloutMedia",
          eyebrow: "The Hero Revealed",
          heading: "Final Character Design",
          media: "images/benthrite-final-reveal.jpg",
          left: [
            { n: "01. Silhouette", b: "Rounded silhouette — non-threatening, approachable." },
            { n: "02. Form", b: "Compact body — emphasises vulnerability and smallness." },
          ],
          right: [
            { n: "03. Emotion", b: "Oversized eyes — the primary emotional communicator." },
            { n: "04. Contrast", b: "Purple hue — distinct from the blue world, immediately identifiable." },
          ],
        },
        {
          type: "quote",
          text: "The character had to feel like it desperately wants to be brave, and hasn't quite gotten there yet.",
        },
      ],
    },
  },

  {
    id: "ai-story-explorations",
    title: "AI Story Explorations",
    category: "Illustrations",
    badge: "Illustration",
    eyebrow: "Editorial Illustration",
    description: "Generative editorial illustration exploring myth and form through layered textures and symbolic iconography.",
    thumbnail: "images/proj-ai-story.jpg",
    year: "2025",
    tall: true,
    caseStudy: {
      tag: "Illustration",
      indexLabel: "[05]",
      tagline: "Using generative tools as a starting point, never the finished piece.",
      heroImage: "images/proj-ai-story.jpg",
      meta: [
        { label: "Role", val: "Illustrator" },
        { label: "Tools", val: "Midjourney, Photoshop" },
        { label: "Type", val: "Personal Project" },
      ],
      blocks: [
        {
          type: "twoColText",
          index: "01 / Context",
          heading: "Overview",
          body: "A personal series exploring how generative tools can be used as a starting point for editorial illustration rather than a finished output — layering hand-adjusted textures and symbolic iconography over AI-assisted first drafts to explore myth and form.",
        },
        {
          type: "image",
          src: "images/proj-ai-story.jpg",
          caption: "Study in form and repetition",
        },
        {
          type: "quote",
          text: "The interesting part was never the first draft — it was everything I changed about it.",
        },
      ],
    },
  },

  {
    id: "verse-quarterly",
    title: "Verse Quarterly",
    category: "Illustrations",
    badge: "Publication",
    eyebrow: "Literary Publication",
    description: "Art direction and layout design for a quarterly literary journal, balancing long-form content with editorial restraint.",
    thumbnail: "images/proj-verse-quarterly.jpg",
    year: "2025",
    tall: true,
    caseStudy: {
      tag: "Publication",
      indexLabel: "[06]",
      tagline: "A layout system built to make forty pages of poetry feel like a quick read.",
      heroImage: "images/proj-verse-quarterly.jpg",
      meta: [
        { label: "Role", val: "Art Director" },
        { label: "Tools", val: "InDesign" },
        { label: "Type", val: "Quarterly Publication" },
      ],
      blocks: [
        {
          type: "twoColText",
          index: "01 / Context",
          heading: "Overview",
          body: "Art direction and layout design for a quarterly literary journal. The brief asked for a system that could hold long-form poetry and prose without ever feeling like a wall of text — generous margins, a restrained type scale, and enough editorial rhythm to make forty pages feel like a quick read.",
        },
        {
          type: "image",
          src: "images/proj-verse-quarterly.jpg",
          caption: "Editorial spread study",
        },
        {
          type: "quote",
          text: "Good editorial design disappears — you only notice it when it's missing.",
        },
      ],
    },
  },

  {
    id: "urban-rhythm",
    title: "Urban Rhythm",
    category: "Illustrations",
    badge: "Publication",
    eyebrow: "Photography Zine",
    description: "A self-published photography zine documenting urban movement, designed to feel raw yet considered on every spread.",
    thumbnail: "images/proj-urban-rhythm.jpg",
    year: "2025",
    tall: true,
    caseStudy: {
      tag: "Publication",
      indexLabel: "[07]",
      tagline: "Notating the small choreography of a city in motion.",
      heroImage: "images/proj-urban-rhythm.jpg",
      meta: [
        { label: "Role", val: "Designer & Photographer" },
        { label: "Tools", val: "InDesign, Lightroom" },
        { label: "Type", val: "Self-Published Zine" },
      ],
      blocks: [
        {
          type: "twoColText",
          index: "01 / Context",
          heading: "Overview",
          body: "A self-published photography zine documenting movement through the city — commuters, traffic, construction, the small choreography of urban life. Designed to feel raw and unpolished on the page while staying considered in its sequencing.",
        },
        {
          type: "image",
          src: "images/proj-urban-rhythm.jpg",
          caption: "Spread study — Urban Rhythm",
        },
        {
          type: "quote",
          text: "Every city has a rhythm. This zine is just me trying to notate it.",
        },
      ],
    },
  },
];

/* ---------------------------------------------------------------------- */
/* CASE STUDY BLOCK REFERENCE — copy/paste into any project's             */
/* caseStudy.blocks array and edit.                                       */
/* ---------------------------------------------------------------------- */
// { type: "twoColText", index: "01 / Context", heading: "Overview", body: "Paragraph one.\n\nParagraph two." }
// { type: "image", src: "images/x.jpg", caption: "Optional caption" }
// { type: "imageGrid", cols: 2, images: [{ src: "images/a.jpg", caption: "" }, { src: "images/b.jpg" }] }
// { type: "quote", text: "A short pull-quote." }
// { type: "statGrid", heading: "Optional heading", stats: [{ value: "65%", label: "Improvement" }] }
// { type: "personaGrid", heading: "Meet our users", people: [{ name: "Ananya Rao", role: "Design Student", bio: "..." }] }
// { type: "hmw", heading: "HMW", items: ["How might we...", "How might we..."] }
// { type: "evolution", heading: "Design Evolution", stages: [{ title: "Wireframe", body: "..." }] }
// { type: "challenges", heading: "Visual Challenges", sub: "optional sub", items: [{ q: "Question?", a: "Answer." }] }
// { type: "calloutMedia", eyebrow: "", heading: "", media: "images/x.jpg", left: [{n,b}], right: [{n,b}] }
