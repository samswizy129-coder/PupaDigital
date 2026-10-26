"use strict";

(() => {
  const WHATSAPP_NUMBER = "2349039522376";

  // Illustrative demonstration rooms; not a live inventory or rate feed.
  const rooms = [
    {
      id: "PH-101", name: "Classic Comfort Room", category: "room",
      label: "HOTEL ROOM", price: 45000, capacity: 2,
      description: "A calm, welcoming room for a short city break or business visit.",
      amenities: ["Queen bed", "Wi-Fi", "Work desk"],
      image: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "PH-102", name: "Deluxe Garden Room", category: "room",
      label: "HOTEL ROOM", price: 65000, capacity: 2,
      description: "Extra space and a restful atmosphere for a comfortable stay.",
      amenities: ["King bed", "Seating", "Wi-Fi"],
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "PH-201", name: "Junior Haven Suite", category: "suite",
      label: "SUITE", price: 85000, capacity: 2,
      description: "A generous suite with space to relax after a busy day.",
      amenities: ["King bed", "Lounge area", "Wi-Fi"],
      image: "https://images.unsplash.com/photo-1591088398332-8a7791972843?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "PH-202", name: "Executive Signature Suite", category: "suite",
      label: "SUITE", price: 120000, capacity: 3,
      description: "An elevated sample suite for longer visits and special occasions.",
      amenities: ["King bed", "Lounge", "Work space"],
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "PH-301", name: "One-Bedroom Apartment", category: "apartment",
      label: "SERVICED APARTMENT", price: 95000, capacity: 3,
      description: "Independent living space for guests who prefer room to settle in.",
      amenities: ["Bedroom", "Kitchenette", "Living area"],
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80"
    },
    {
      id: "PH-302", name: "Two-Bedroom Residence", category: "apartment",
      label: "SERVICED APARTMENT", price: 160000, capacity: 5,
      description: "A larger sample residence for families, colleagues or extended stays.",
      amenities: ["2 bedrooms", "Kitchen", "Living area"],
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80"
    }
  ];

  const roomGrid = document.getElementById("roomGrid");
  const resultsCount = document.getElementById("resultsCount");
  const roomChoice = document.getElementById("roomChoice");
  const bookingForm = document.getElementById("bookingForm");
  const formStatus = document.getElementById("formStatus");
  const checkIn = document.getElementById("checkIn");
  const checkOut = document.getElementById("checkOut");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined) element.textContent = text;
    return element;
  }

  function formatNaira(amount) {
    return "₦" + amount.toLocaleString("en-NG");
  }

  function populateRoomChoices() {
    rooms.forEach((room) => {
      const option = document.createElement("option");
      option.value = room.id;
      option.textContent = room.name + " — " + formatNaira(room.price) + "/night (sample)";
      roomChoice.appendChild(option);
    });
  }

  function createRoomCard(room) {
    const article = makeElement("article", "room-card");
    const photo = makeElement("div", "room-photo");
    photo.style.backgroundImage = 'url("' + room.image.replace(/["\\\n\r]/g, "") + '")';
    photo.setAttribute("role", "img");
    photo.setAttribute("aria-label", "Illustrative photo of " + room.name);

    photo.appendChild(makeElement("span", "room-tag", room.label + " · DEMO"));
    article.appendChild(photo);

    const body = makeElement("div", "room-body");
    body.appendChild(makeElement("p", "room-category", room.id));
    body.appendChild(makeElement("h3", "", room.name));
    body.appendChild(makeElement("p", "room-description", room.description));

    const amenities = makeElement("div", "room-amenities");
    room.amenities.forEach((item) => amenities.appendChild(makeElement("span", "", item)));
    body.appendChild(amenities);

    const bottom = makeElement("div", "room-bottom");
    const price = makeElement("div", "room-price");
    price.appendChild(makeElement("small", "", "Illustrative rate · per night"));
    price.appendChild(makeElement("strong", "", formatNaira(room.price)));
    bottom.appendChild(price);

    const enquire = makeElement("a", "room-enquire", "Enquire ↗");
    enquire.href = "#booking";
    enquire.setAttribute("aria-label", "Enquire about " + room.name);
    enquire.addEventListener("click", () => {
      roomChoice.value = room.id;
    });
    bottom.appendChild(enquire);
    body.appendChild(bottom);
    article.appendChild(body);

    return article;
  }

  function renderRooms(category) {
    const visibleRooms = category === "all"
      ? rooms
      : rooms.filter((room) => room.category === category);

    roomGrid.replaceChildren();
    visibleRooms.forEach((room) => roomGrid.appendChild(createRoomCard(room)));
    resultsCount.textContent = visibleRooms.length +
      (visibleRooms.length === 1 ? " sample room category" : " sample room categories");
  }

  function setMinimumDates() {
    const today = new Date();
    const localToday = [
      today.getFullYear(),
      String(today.getMonth() + 1).padStart(2, "0"),
      String(today.getDate()).padStart(2, "0")
    ].join("-");

    checkIn.min = localToday;
    checkOut.min = checkIn.value && checkIn.value >= localToday
      ? checkIn.value
      : localToday;
  }

  function showStatus(message, isError) {
    formStatus.textContent = message;
    formStatus.classList.toggle("error", Boolean(isError));
  }

  document.querySelectorAll(".filter-button").forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelectorAll(".filter-button").forEach((item) => {
        const active = item === button;
        item.classList.toggle("active", active);
        item.setAttribute("aria-pressed", String(active));
      });
      renderRooms(button.dataset.filter);
    });
  });

  checkIn.addEventListener("change", () => {
    checkOut.min = checkIn.value;
    if (checkOut.value && checkOut.value <= checkIn.value) {
      checkOut.value = "";
    }
  });

  checkOut.addEventListener("change", () => {
    if (checkIn.value && checkOut.value && checkOut.value <= checkIn.value) {
      showStatus("Check-out must be later than check-in.", true);
      checkOut.value = "";
    } else {
      showStatus("", false);
    }
  });

  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showStatus("", false);

    if (!bookingForm.reportValidity()) return;

    const start = new Date(checkIn.value + "T00:00:00");
    const end = new Date(checkOut.value + "T00:00:00");
    const now = new Date();
    now.setHours(0, 0, 0, 0);

    if (Number.isNaN(start.getTime()) || Number.isNaN(end.getTime())) {
      showStatus("Please enter valid check-in and check-out dates.", true);
      return;
    }
    if (start < now) {
      showStatus("Check-in cannot be in the past.", true);
      return;
    }
    if (end <= start) {
      showStatus("Check-out must be at least one day after check-in.", true);
      return;
    }

    const selectedRoom = rooms.find((room) => room.id === roomChoice.value);
    if (!selectedRoom) {
      showStatus("Please choose a room category.", true);
      roomChoice.focus();
      return;
    }

    const guestName = document.getElementById("guestName").value.trim();
    const guestPhone = document.getElementById("guestPhone").value.trim();
    const guestCount = document.getElementById("guestCount").value;
    const specialRequest = document.getElementById("specialRequest").value.trim();

    const message = [
      "Hello Palm Haven Suites, I would like to enquire about a booking.",
      "",
      "Name: " + guestName,
      "Contact phone: " + guestPhone,
      "Preferred room: " + selectedRoom.name,
      "Check-in: " + checkIn.value,
      "Check-out: " + checkOut.value,
      "Guests: " + guestCount,
      "Illustrative nightly rate shown: " + formatNaira(selectedRoom.price),
      "Please confirm the actual rate and availability.",
      specialRequest ? "Special requests: " + specialRequest : "",
      "",
      "I understand this is an enquiry and not a confirmed reservation."
    ].filter(Boolean).join("\n");

    const whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER +
      "?text=" + encodeURIComponent(message);

    showStatus("Opening WhatsApp with your prepared enquiry. Review it and press Send only if you want to contact this number.", false);

    const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!newWindow) {
      showStatus("If WhatsApp did not open, use this link to continue: " + whatsappUrl, false);
    }
  });

  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.getElementById("currentYear").textContent = String(new Date().getFullYear());

  populateRoomChoices();
  renderRooms("all");
  setMinimumDates();
})();
