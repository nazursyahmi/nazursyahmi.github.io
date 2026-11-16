document.documentElement.classList.add("js");

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  const toggleIcon = navToggle.querySelector("i");

  const setMenuState = (isOpen) => {
    navLinks.classList.toggle("is-open", isOpen);
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");

    if (toggleIcon) {
      toggleIcon.classList.toggle("bi-list", !isOpen);
      toggleIcon.classList.toggle("bi-x-lg", isOpen);
    }
  };

  navToggle.addEventListener("click", () => {
    setMenuState(!navLinks.classList.contains("is-open"));
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      setMenuState(false);
      if (link.hash && link.pathname === window.location.pathname) {
        const section = document.getElementById(link.hash.slice(1));
        if (section) {
          section.setAttribute("tabindex", "-1");
          section.focus({ preventScroll: true });
        }
      }
    });
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navLinks.classList.contains("is-open")) {
      setMenuState(false);
      navToggle.focus();
    }
  });
}

// Follow the homepage sections in document order, including manual scrolling.
if (document.body.classList.contains("onepage-home") && navLinks) {
  const sectionLinks = Array.from(navLinks.querySelectorAll('a[href^="#"]'));
  const sections = sectionLinks.map((link) => document.getElementById(link.hash.slice(1))).filter(Boolean);
  const updateCurrentSection = () => {
    const offset = document.querySelector(".site-nav").getBoundingClientRect().bottom + 24;
    const ordered = sections.slice().sort((a, b) => a.offsetTop - b.offsetTop);
    let current = ordered[0];
    ordered.forEach((section) => {
      if (section.getBoundingClientRect().top <= offset) current = section;
    });
    if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight - 2) {
      current = ordered[ordered.length - 1];
    }
    sectionLinks.forEach((link) => {
      const active = current && link.hash === `#${current.id}`;
      link.classList.toggle("active", Boolean(active));
      if (active) link.setAttribute("aria-current", "location");
      else link.removeAttribute("aria-current");
    });
  };
  let scheduled = false;
  window.addEventListener("scroll", () => {
    if (!scheduled) {
      scheduled = true;
      window.requestAnimationFrame(() => { updateCurrentSection(); scheduled = false; });
    }
  }, { passive: true });
  window.addEventListener("resize", updateCurrentSection);
  updateCurrentSection();
}

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 45, 240)}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("in-view"));
}
