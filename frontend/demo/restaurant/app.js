"use strict";

(() => {
  const WHATSAPP_NUMBER = "2349039522376";

  const menuToggle = document.getElementById("menuToggle");
  const navigation = document.getElementById("navigation");

  if (menuToggle && navigation) {
    menuToggle.addEventListener("click", () => {
      const isOpen = navigation.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
      menuToggle.textContent = isOpen ? "✕" : "☰";
    });

    navigation.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        navigation.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Open navigation");
        menuToggle.textContent = "☰";
      });
    });
  }

  const filterButtons = document.querySelectorAll("[data-filter]");
  const foodCards = document.querySelectorAll(".food-card[data-category]");

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const filter = button.dataset.filter || "all";

      filterButtons.forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });

      foodCards.forEach((card) => {
        card.hidden = filter !== "all" && card.dataset.category !== filter;
      });
    });
  });

  const messageField = document.getElementById("enquiryMessage");
  const enquiryType = document.getElementById("enquiryType");
  const feedback = document.getElementById("formFeedback");

  document.querySelectorAll(".order-item").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.dataset.item || "a menu item";
      if (messageField) {
        messageField.value = `Hello, I would like to enquire about ${item}. Please confirm the current availability and price.`;
      }
      if (enquiryType) enquiryType.value = "Food order";
      document.getElementById("order")?.scrollIntoView({ behavior: "smooth" });
      if (feedback) feedback.textContent = `Enquiry prepared for ${item}. Please review the form.`;
    });
  });

  const form = document.getElementById("orderForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      if (!form.reportValidity()) return;

      const name = document.getElementById("customerName").value.trim();
      const type = enquiryType.value;
      const message = messageField.value.trim();

      if (name.length < 2) {
        if (feedback) feedback.textContent = "Please enter your name.";
        return;
      }

      const text = [
        "Hello! I am enquiring through the Ember & Oak restaurant website demo.",
        "",
        `Name: ${name}`,
        `Enquiry: ${type}`,
        message ? `Message: ${message}` : "",
        "",
        "Please confirm details, availability and prices. I understand this is an enquiry, not a confirmed order or reservation."
      ].filter(Boolean).join("\n");

      const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

      if (feedback) {
        feedback.textContent = "Opening WhatsApp with your enquiry. Review the message before sending.";
      }

      const opened = window.open(url, "_blank", "noopener,noreferrer");

      if (!opened) window.location.href = url;
    });
  }
})();
