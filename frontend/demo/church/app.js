"use strict";

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
const contactForm = document.getElementById("contactForm");
const formStatus = document.getElementById("formStatus");
const currentYear = document.getElementById("currentYear");

if (currentYear) {
  currentYear.textContent = String(new Date().getFullYear());
}

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
      menuToggle.textContent = "☰";
    });
  });
}

if (contactForm && formStatus) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!contactForm.reportValidity()) return;

    const data = new FormData(contactForm);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const enquiry = String(data.get("enquiry") || "").trim();
    const message = String(data.get("message") || "").trim();

    if (!name || !enquiry || !message) {
      formStatus.textContent = "Please complete all required fields.";
      return;
    }

    const whatsappMessage = [
      "Hello, Grace Community Church.",
      "",
      "Name: " + name,
      phone ? "Phone: " + phone : "",
      "Enquiry: " + enquiry,
      "Message: " + message,
      "",
      "This enquiry was prepared through a demonstration website."
    ].filter(Boolean).join("\n");

    const whatsappUrl =
      "https://wa.me/2349039522376?text=" +
      encodeURIComponent(whatsappMessage);

    formStatus.textContent =
      "A WhatsApp message is ready. Review the details before choosing to send it.";

    const openedWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!openedWindow) {
      formStatus.textContent +=
        " If WhatsApp did not open, allow pop-ups or use the WhatsApp link manually.";
    }
  });
}
