(function () {
  "use strict";

  const WHATSAPP_NUMBER = "2349039522376";
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");
  const admissionsForm = document.getElementById("admissionsForm");
  const formStatus = document.getElementById("formStatus");
  const programmeSelect = document.getElementById("programme");

  document.getElementById("currentYear").textContent =
    String(new Date().getFullYear());

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function () {
      const isOpen = mainNav.classList.toggle("open");
      menuToggle.setAttribute("aria-expanded", String(isOpen));
      menuToggle.textContent = isOpen ? "Close" : "Menu";
    });

    mainNav.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        mainNav.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "Menu";
      });
    });
  }

  document.querySelectorAll("[data-programme]").forEach(function (link) {
    link.addEventListener("click", function () {
      const programme = link.getAttribute("data-programme");
      const matchingOption = Array.from(programmeSelect.options).find(
        function (option) { return option.value === programme || option.textContent === programme; }
      );
      if (matchingOption) programmeSelect.value = matchingOption.value;
    });
  });

  if (admissionsForm) {
    admissionsForm.addEventListener("submit", function (event) {
      event.preventDefault();
      formStatus.textContent = "";

      if (!admissionsForm.reportValidity()) return;

      const data = new FormData(admissionsForm);
      const parentName = String(data.get("parentName") || "").trim();
      const phone = String(data.get("phone") || "").trim();
      const programme = String(data.get("programme") || "").trim();
      const message = String(data.get("message") || "").trim();

      if (!parentName || !phone || !programme) {
        formStatus.textContent = "Please complete all required fields.";
        return;
      }

      const orderMessage = [
        "Hello, I am making a SCHOOL WEBSITE DEMO admissions enquiry.",
        "",
        "Parent/guardian: " + parentName,
        "Contact phone: " + phone,
        "Programme of interest: " + programme,
        message ? "Question: " + message : "",
        "",
        "This is an enquiry only. Please confirm actual school details and admissions directly."
      ].filter(Boolean).join("\n");

      const whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER +
        "?text=" + encodeURIComponent(orderMessage);

      formStatus.textContent =
        "Your message is prepared. WhatsApp will open in a new tab if available. Review the message before choosing to send it.";

      const popup = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
      if (!popup) {
        formStatus.textContent += " If it did not open, use the WhatsApp contact link in the Contact section.";
      }
    });
  }
})();
