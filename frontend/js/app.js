function openAssistant() {
    document.getElementById("assistant").style.display = "flex";
}

function closeAssistant() {
    document.getElementById("assistant").style.display = "none";
}

function addMessage(text, type) {
    const body = document.querySelector(".assistant-body");

    const message = document.createElement("div");
    message.className = "message " + type;
    message.textContent = text;

    body.appendChild(message);
    body.scrollTop = body.scrollHeight;
}

function getAssistantAnswer(question) {
    const q = question.toLowerCase();

    if (q.includes("hi") || q.includes("hello") || q.includes("hey")) {
        return "Hello! 👋 Welcome to PrimeGlow Beauty & Spa. How can I help you today?";
    }

    if (q.includes("price") || q.includes("cost") || q.includes("how much")) {
        return "Our services start from ₦10,000. Facial Treatment starts from ₦15,000, Hair Styling from ₦10,000 and Body Treatment from ₦20,000.";
    }

    if (q.includes("service") || q.includes("offer")) {
        return "We offer Facial Treatments, Hair Styling and Body Treatments. Which service would you like to know more about?";
    }

    if (q.includes("location") || q.includes("where") || q.includes("address")) {
        return "We're located in Abuja, Nigeria. 📍";
    }

    if (q.includes("open") || q.includes("hour") || q.includes("when")) {
        return "We're open Monday to Saturday, from 9:00 AM to 7:00 PM.";
    }

    if (q.includes("book") || q.includes("appointment")) {
        return "Absolutely! 📅 Scroll down to the booking section, choose your service, date and preferred time, then continue to WhatsApp.";
    }

    if (q.includes("facial")) {
        return "Our Facial Treatment starts from ₦15,000 and is designed to leave your skin refreshed and glowing.";
    }

    if (q.includes("hair")) {
        return "Our Hair Styling service starts from ₦10,000.";
    }

    if (q.includes("body")) {
        return "Our Body Treatment starts from ₦20,000 and focuses on relaxation and rejuvenation.";
    }

    if (q.includes("thank") || q.includes("thanks")) {
        return "You're very welcome! 💗 We look forward to seeing you at PrimeGlow.";
    }

    return "I'm here to help with PrimeGlow's services, prices, opening hours, location and appointments. What would you like to know?";
}

function askAssistant() {
    const input = document.getElementById("question");
    const question = input.value.trim();

    if (!question) return;

    addMessage(question, "user");

    input.value = "";

    setTimeout(function() {
        addMessage(getAssistantAnswer(question), "bot");
    }, 400);
}


document.addEventListener("DOMContentLoaded", function() {

    const bookingForm = document.getElementById("bookingForm");

    if (bookingForm) {
        bookingForm.addEventListener("submit", function(event) {

            event.preventDefault();

            const name = document.getElementById("name").value.trim();
            const phone = document.getElementById("phone").value.trim();
            const service = document.getElementById("service").value;
            const date = document.getElementById("date").value;
            const time = document.getElementById("time").value;
            const message = document.getElementById("message").value.trim();

            const whatsappNumber = "2349039522376";

            const whatsappMessage =
`Hello PrimeGlow! 👋

I would like to request an appointment.

Name: ${name}
Phone: ${phone}
Service: ${service}
Preferred Date: ${date}
Preferred Time: ${time}
Additional Message: ${message || "None"}

Please confirm my appointment. Thank you!`;

            const url =
                "https://wa.me/" +
                whatsappNumber +
                "?text=" +
                encodeURIComponent(whatsappMessage);

            window.open(url, "_blank");
        });
    }

});


function requestWebsite(websiteType) {

    const select = document.getElementById("websiteType");

    if (select) {
        select.value = websiteType;
    }

    const form = document.getElementById("request-form");

    if (form) {
        form.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}



document.addEventListener("DOMContentLoaded", function() {

    const requestForm =
        document.getElementById("websiteRequestForm");

    if (!requestForm) return;

    requestForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const websiteType =
            document.getElementById("websiteType").value;

        const name =
            document.getElementById("customerName").value.trim();

        const business =
            document.getElementById("businessName").value.trim();

        const budgetField =
            document.getElementById("projectBudget");

        const budget =
            budgetField ? budgetField.value : "";

        const phone =
            document.getElementById("customerPhone").value.trim();

        const message =
            document.getElementById("customerMessage").value.trim();

        const whatsappNumber = "2349039522376";

        const whatsappMessage =
`Hello PupaDigital! 👋

I would like to request a website.

Website Type:
${websiteType}

My Name:
${name}

Business Name:
${business}

Estimated Budget:
${budget || "Not decided yet"}

My Phone / WhatsApp:
${phone}

What I need:
${message || "I would like to discuss the website requirements with you."}

Please send me the available options and pricing.

Thank you.`;

        const url =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);

        window.open(url, "_blank");
    });

});

/* =========================================================
   PUPADIGITAL WEBSITE REQUEST SELECTOR
   ========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    const requestButtons = document.querySelectorAll(
        ".request-website-btn"
    );

    const websiteType = document.getElementById("websiteType");

    requestButtons.forEach(button => {

        button.addEventListener("click", () => {

            const selectedType =
                button.dataset.type?.trim().toLowerCase();

            if (!websiteType || !selectedType) return;

            for (const option of websiteType.options) {

                const optionText =
                    option.textContent.trim().toLowerCase();

                if (optionText === selectedType) {
                    websiteType.value = option.value;
                    break;
                }
            }

        });

    });

});

/* PUPADIGITAL STEP 9G.3 SIDEBAR JS */
(() => {
  const toggle = document.getElementById("sidebarToggle");
  const sidebar = document.getElementById("pupaSidebar");
  const backdrop = document.getElementById("sidebarBackdrop");
  const closeButton = document.getElementById("sidebarClose");

  if (!toggle || !sidebar || !backdrop || !closeButton) {
    console.warn("PupaDigital sidebar: required elements unavailable.");
    return;
  }

  let previousFocus = null;

  function openSidebar() {
    previousFocus = document.activeElement;
    sidebar.classList.add("is-open");
    backdrop.hidden = false;
    sidebar.setAttribute("aria-hidden", "false");
    sidebar.removeAttribute("inert");
    toggle.setAttribute("aria-expanded", "true");
    toggle.setAttribute("aria-label", "Close navigation menu");
    document.body.classList.add("sidebar-is-open");
    closeButton.focus();
  }

  function closeSidebar(restoreFocus = true) {
    sidebar.classList.remove("is-open");
    backdrop.hidden = true;
    sidebar.setAttribute("aria-hidden", "true");
    sidebar.setAttribute("inert", "");
    toggle.setAttribute("aria-expanded", "false");
    toggle.setAttribute("aria-label", "Open navigation menu");
    document.body.classList.remove("sidebar-is-open");

    if (restoreFocus && previousFocus && previousFocus.isConnected) {
      previousFocus.focus();
    } else if (restoreFocus) {
      toggle.focus();
    }
  }

  toggle.addEventListener("click", () => {
    if (toggle.getAttribute("aria-expanded") === "true") {
      closeSidebar();
    } else {
      openSidebar();
    }
  });

  closeButton.addEventListener("click", () => closeSidebar());
  backdrop.addEventListener("click", () => closeSidebar());

  sidebar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => closeSidebar(false));
  });

  document.addEventListener("keydown", (event) => {
    if (toggle.getAttribute("aria-expanded") !== "true") return;

    if (event.key === "Escape") {
      event.preventDefault();
      closeSidebar();
      return;
    }

    if (event.key === "Tab") {
      const focusable = [
        closeButton,
        ...sidebar.querySelectorAll('a[href], button:not([disabled])')
      ].filter((element) => !element.hasAttribute("disabled"));

      if (!focusable.length) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });
})();
/* END PUPADIGITAL STEP 9G.3 SIDEBAR JS */
