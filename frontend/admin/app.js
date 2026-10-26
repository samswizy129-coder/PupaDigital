(() => {
  "use strict";
  const sidebar = document.getElementById("sidebar");
  const toggle = document.getElementById("menuToggle");
  const scrim = document.getElementById("mobileScrim");
  const title = document.getElementById("pageTitle");
  const search = document.getElementById("projectSearch");
  const grid = document.getElementById("projectGrid");
  const empty = document.getElementById("emptyState");

  function closeMenu() {
    sidebar.classList.remove("open");
    scrim.classList.remove("show");
    toggle.setAttribute("aria-expanded", "false");
  }
  toggle.addEventListener("click", () => {
    const open = sidebar.classList.toggle("open");
    scrim.classList.toggle("show", open);
    toggle.setAttribute("aria-expanded", String(open));
  });
  scrim.addEventListener("click", closeMenu);

  document.querySelectorAll(".nav-item[data-section]").forEach((link) => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-item").forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
      title.textContent = link.textContent.replace(/\s+/g, " ").trim();
      closeMenu();
    });
  });

  search.addEventListener("input", () => {
    const query = search.value.trim().toLowerCase();
    let visible = 0;
    grid.querySelectorAll(".project-card").forEach((card) => {
      const match = (card.dataset.name + " " + card.textContent).toLowerCase().includes(query);
      card.hidden = !match;
      if (match) visible += 1;
    });
    empty.hidden = visible !== 0;
  });

  document.getElementById("year").textContent = String(new Date().getFullYear());
})();