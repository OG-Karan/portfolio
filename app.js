const story = [
  {
    title: "Self-built founder mindset",
    copy:
      "Built By Krn is shaped by ownership, practical decisions, and the discipline to keep improving systems until they work in the real world."
  },
  {
    title: "Academic excellence",
    copy:
      "Competitive results and scholarship opportunities reflect a foundation of focus, speed, and structured preparation."
  },
  {
    title: "Business operations experience",
    copy:
      "Hands-on exposure to teams, clients, reporting, payroll, and daily execution turned business problems into product insight."
  },
  {
    title: "Security company operations",
    copy:
      "Security workflows revealed the need for better attendance, guard management, client visibility, and operational accountability."
  },
  {
    title: "SecurityOS vision",
    copy:
      "SecurityOS converts field operations into a white-label SaaS ecosystem for companies that need clarity and control."
  },
  {
    title: "AI-assisted product building",
    copy:
      "Modern AI workflows, documentation, testing, and deployment planning help move ideas from concept to usable software faster."
  }
];

const achievements = [
  ["JEE Mains", "97.81 percentile"],
  ["NDA", "Cleared"],
  ["HKUST", "Selected with 75% scholarship"],
  ["National Science Olympiad", "All Rajasthan Rank 23, Bikaner Rank 1"],
  ["International Mathematics Olympiad", "All Rajasthan Rank 81, Bikaner Rank 3"],
  ["SAT Score", "1530/1600"]
];

const projects = [
  {
    title: "SecurityOS Enterprise",
    copy:
      "White-label security operations SaaS with Admin Web, Client Portal, Guard App, Supervisor App, attendance, incidents, DAR, payroll, invoicing, analytics, tenant packages, and enterprise workflows.",
    tags: ["SaaS", "Security Operations", "Multi-tenant", "White-label", "Android Apps", "Admin Web", "Client Portal"]
  },
  {
    title: "Shree Bankey Bihari Security Services",
    copy:
      "A real security services company operated and improved through systems, workforce management, attendance, payroll, client workflows, and reporting.",
    tags: ["Operations", "Security Services", "Payroll", "Workforce", "Client Management"]
  },
  {
    title: "SBBS Digital Ecosystem",
    copy:
      "Public website, admin portal, client portal, download portal, API, and SecurityOS demo experience connected under the SBBS brand.",
    tags: ["Website", "Portals", "API", "Deployment", "Branding"]
  },
  {
    title: "AI + Codex Build Workflow",
    copy:
      "Structured product development using AI planning, Codex, GitHub, VS Code, documentation, testing, and deployment checklists.",
    tags: ["AI Workflow", "Codex", "GitHub", "Product Management", "QA"]
  },
  {
    title: "Future Ventures",
    copy:
      "Tourism, business automation, venture studio ideas, and future global SaaS products.",
    tags: ["Venture Studio", "Tourism", "Automation", "Global SaaS"]
  }
];

const skillGroups = [
  {
    title: "Founder & Business",
    items: [
      "Product Strategy",
      "Project Management",
      "Business Operations",
      "Client Handling",
      "Sales Strategy",
      "Execution Planning",
      "Documentation"
    ]
  },
  {
    title: "Technology & AI",
    items: [
      "ChatGPT",
      "Codex",
      "GitHub",
      "GitHub Desktop",
      "VS Code",
      "Vercel",
      "Supabase",
      "API Planning",
      "SaaS Architecture",
      "Web App Planning",
      "Android App Planning",
      "UI/UX Direction"
    ]
  },
  {
    title: "Security Operations",
    items: [
      "Guard Management",
      "Attendance Systems",
      "Payroll Workflows",
      "Client Portals",
      "Incident Reporting",
      "DAR Reports",
      "White-label SaaS",
      "Multi-tenant Systems",
      "Business Automation"
    ]
  }
];

const modules = [
  "Admin Web",
  "Client Portal",
  "Guard App",
  "Supervisor App",
  "Attendance",
  "Incidents",
  "DAR",
  "Payroll",
  "Invoices",
  "Analytics",
  "White Label",
  "Safe Demo"
];

const vision = [
  "SecurityOS",
  "AI Systems",
  "Business Automation",
  "Tourism Ventures",
  "Global SaaS",
  "Product Ecosystem"
];

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const create = (tag, className, html) => {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (html) node.innerHTML = html;
  return node;
};

const safeSetText = (selector, value) => {
  const node = document.querySelector(selector);
  if (node) node.textContent = value;
};

const closeIntro = ({ intro, introVideo }) => {
  if (!intro) return;

  intro.classList.add("is-exiting");
  document.body.classList.remove("intro-active");
  document.body.classList.add("site-ready");

  window.setTimeout(() => {
    if (introVideo) {
      introVideo.pause();
      introVideo.currentTime = 0;
    }

    intro.setAttribute("aria-hidden", "true");
    intro.style.display = "none";
  }, 850);
};

const initializeIntroExperience = () => {
  const intro = document.querySelector("[data-intro]");
  const introVideo = document.querySelector("[data-intro-video]");
  const enterButton = document.querySelector("[data-intro-enter]");
  const skipButton = document.querySelector("[data-intro-skip]");

  if (!intro) {
    document.body.classList.remove("intro-active");
    document.body.classList.add("site-ready");
    return;
  }

  if (!introVideo || !enterButton) {
    closeIntro({ intro, introVideo });
    return;
  }

  let introCompleted = false;

  const finishIntro = () => {
    if (introCompleted) return;
    introCompleted = true;
    window.setTimeout(() => closeIntro({ intro, introVideo }), 500);
  };

  introVideo.pause();
  introVideo.currentTime = 0;
  introVideo.muted = false;
  introVideo.volume = 1;

  enterButton.addEventListener("click", async () => {
    intro.classList.add("is-playing");
    enterButton.disabled = true;

    try {
      introVideo.muted = false;
      introVideo.volume = 1;
      await introVideo.play();
    } catch (error) {
      console.error("Intro video could not start:", error);
      enterButton.disabled = false;
      intro.classList.remove("is-playing");
      enterButton.textContent = "Tap To Start";
    }
  });

  skipButton?.addEventListener("click", () => {
    introCompleted = true;
    closeIntro({ intro, introVideo });
  });

  introVideo.addEventListener("ended", finishIntro);
};
const renderStory = () => {
  const root = document.querySelector("[data-story]");
  if (!root) return;

  story.forEach((item, index) => {
    root.append(
      create(
        "article",
        "story-card tilt-card",
        `<span>${String(index + 1).padStart(2, "0")}</span><h3>${item.title}</h3><p>${item.copy}</p>`
      )
    );
  });
};

const renderAchievements = () => {
  const root = document.querySelector("[data-achievements]");
  if (!root) return;

  achievements.forEach(([title, value]) => {
    root.append(create("article", "metric-card tilt-card", `<h3>${title}</h3><strong>${value}</strong>`));
  });
};

const renderProjects = () => {
  const root = document.querySelector("[data-projects]");
  if (!root) return;

  projects.forEach((project) => {
    const tags = project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("");

    root.append(
      create(
        "article",
        "project-card tilt-card",
        `<h3>${project.title}</h3><p>${project.copy}</p><div class="tags">${tags}</div>`
      )
    );
  });
};

const renderSkills = () => {
  const root = document.querySelector("[data-skills]");
  if (!root) return;

  skillGroups.forEach((group) => {
    const chips = group.items.map((skill) => `<span class="skill-chip">${skill}</span>`).join("");

    root.append(
      create(
        "article",
        "skill-group tilt-card",
        `<h3>${group.title}</h3><div class="skill-cloud">${chips}</div>`
      )
    );
  });
};

const renderModules = () => {
  const root = document.querySelector("[data-modules]");
  if (!root) return;

  modules.forEach((module) => {
    root.append(create("article", "module-card tilt-card", module));
  });
};

const renderVision = () => {
  const root = document.querySelector("[data-vision]");
  if (!root) return;

  vision.forEach((item, index) => {
    root.append(create("article", "vision-card tilt-card", `<span>0${index + 1}</span><h3>${item}</h3>`));
  });
};

const renderDynamicContent = () => {
  renderStory();
  renderAchievements();
  renderProjects();
  renderSkills();
  renderModules();
  renderVision();
};

const initializeNavbar = () => {
  const nav = document.querySelector("[data-nav]");
  const menuToggle = document.querySelector("[data-menu-toggle]");
  const menu = document.querySelector("[data-menu]");

  if (nav) {
    window.addEventListener(
      "scroll",
      () => {
        nav.classList.toggle("is-scrolled", window.scrollY > 24);
      },
      { passive: true }
    );
  }

  if (!menuToggle || !menu) return;

  menuToggle.addEventListener("click", () => {
    const open = menu.classList.toggle("is-open");

    document.body.classList.toggle("menu-open", open);
    menuToggle.setAttribute("aria-expanded", String(open));
    menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
  });

  menu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menu.classList.remove("is-open");
      document.body.classList.remove("menu-open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open menu");
    });
  });
};

const initializeScrollReveal = () => {
  const sections = document.querySelectorAll("[data-section]");

  if (!sections.length) return;

  if (reduceMotion || !("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("is-visible");
      });
    },
    { threshold: 0.12 }
  );

  sections.forEach((section) => observer.observe(section));
};

const initializeHeroImageFallback = () => {
  const heroImage = document.querySelector("[data-hero-image]");
  const heroImageWrap = document.querySelector("[data-hero-image-wrap]");

  if (!heroImage || !heroImageWrap) return;

  heroImage.addEventListener("error", () => {
    heroImageWrap.classList.add("hero-visual--fallback");
    heroImage.style.display = "none";
  });
};

const initializeParallax = () => {
  if (reduceMotion) return;

  const parallaxLayers = document.querySelectorAll(".parallax-layer");
  if (!parallaxLayers.length) return;

  window.addEventListener(
    "pointermove",
    (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      parallaxLayers.forEach((layer) => {
        const depth = Number(layer.dataset.depth || 0.05);
        layer.style.transform = `translate3d(${x * depth * 120}px, ${y * depth * 120}px, 0)`;
      });
    },
    { passive: true }
  );
};
const initializeTiltCards = () => {
  if (reduceMotion) return;

  const cards = document.querySelectorAll(".tilt-card");
  if (!cards.length) return;

  cards.forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const rect = card.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width - 0.5;
      const y = (event.clientY - rect.top) / rect.height - 0.5;

      card.style.transform = `perspective(1000px) rotateX(${-y * 5}deg) rotateY(${x * 7}deg) translateY(-2px)`;
    });

    card.addEventListener("pointerleave", () => {
      card.style.transform = "";
    });
  });
};

const initializeHeroImageMotion = () => {
  if (reduceMotion) return;

  const heroVisual = document.querySelector("[data-hero-image-wrap]");
  if (!heroVisual) return;

  window.addEventListener(
    "pointermove",
    (event) => {
      const x = event.clientX / window.innerWidth - 0.5;
      const y = event.clientY / window.innerHeight - 0.5;

      heroVisual.style.transform = `translate3d(${x * 16}px, ${y * 14}px, 0) rotateX(${-y * 2}deg) rotateY(${x * 3}deg)`;
    },
    { passive: true }
  );
};

const initializeApp = () => {
  safeSetText("[data-year]", new Date().getFullYear());

  initializeIntroExperience();
  renderDynamicContent();
  initializeNavbar();
  initializeScrollReveal();
  initializeHeroImageFallback();
  initializeParallax();
  initializeTiltCards();
  initializeHeroImageMotion();
};

document.addEventListener("DOMContentLoaded", initializeApp);