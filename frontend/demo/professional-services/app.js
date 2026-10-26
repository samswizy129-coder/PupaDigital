"use strict";

(() => {
  const WHATSAPP_NUMBER = "2349039522376";

  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const contactForm = document.getElementById("contactForm");
  const formStatus = document.getElementById("formStatus");
  const serviceSelect = document.getElementById("service");

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", () => {
      const isOpen = mainNav.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute(
        "aria-label",
        isOpen ? "Close navigation" : "Open navigation"
      );
      menuToggle.textContent = isOpen ? "×" : "☰";
    });

    mainNav.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        mainNav.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
      });
    });
  }

  document.querySelectorAll("[data-service]").forEach((link) => {
    link.addEventListener("click", () => {
      const requestedService = link.getAttribute("data-service");
      if (serviceSelect && requestedService) {
        const option = Array.from(serviceSelect.options).find(
          (item) => item.value === requestedService ||
            item.textContent.trim() === requestedService
        );
        if (option) serviceSelect.value = option.value;
      }
    });
  });

  if (contactForm) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!contactForm.checkValidity()) {
        contactForm.reportValidity();
        return;
      }

      const fullName = document.getElementById("fullName").value.trim();
      const email = document.getElementById("email").value.trim();
      const service = serviceSelect.value;
      const message = document.getElementById("message").value.trim();

      if (!fullName || !service || !message) {
        formStatus.textContent = "Please complete all required fields.";
        return;
      }

      const whatsappMessage = [
        "Hello Apex Professional Solutions,",
        "",
        "I would like to make a professional services enquiry.",
        "Name: " + fullName,
        email ? "Email: " + email : "",
        "Service: " + service,
        "Enquiry: " + message,
        "",
        "I understand this is a demo website enquiry."
      ].filter(Boolean).join("\n");

      const whatsappUrl =
        "https://wa.me/" + WHATSAPP_NUMBER +
        "?text=" + encodeURIComponent(whatsappMessage);

      formStatus.textContent =
        "WhatsApp will open with your prepared enquiry. Review the details and send it yourself.";

      const openedWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!openedWindow) {
        formStatus.innerHTML =
          'Pop-up blocked. <a href="' + whatsappUrl +
          '" target="_blank" rel="noopener noreferrer">Open your prepared WhatsApp enquiry</a>.';
      }
    });
  }

  const currentYear = document.getElementById("currentYear");
  if (currentYear) currentYear.textContent = String(new Date().getFullYear());
})();
