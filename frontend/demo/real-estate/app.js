"use strict";

(() => {
    const WHATSAPP_NUMBER = "2349039522376";

    // All properties below are illustrative demonstration data.
    // They are not verified listings or live offers.
    const properties = [
        {
            id: "HE-001",
            title: "The Garden Residence",
            location: "Abuja",
            area: "Gwarinpa, Abuja",
            type: "House",
            purpose: "Sale",
            price: 85000000,
            priceLabel: "₦85,000,000",
            period: "",
            bedrooms: 4,
            bathrooms: 4,
            areaLabel: "4 bedrooms",
            description: "A spacious family-home concept with a bright living area.",
            details: "Illustrative listing. Confirm the actual address, ownership, title documents, condition, price and availability independently.",
            image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80"
        },
        {
            id: "HE-002",
            title: "The Parkview Apartment",
            location: "Lagos",
            area: "Lekki, Lagos",
            type: "Apartment",
            purpose: "Rent",
            price: 6500000,
            priceLabel: "₦6,500,000",
            period: "/ year",
            bedrooms: 3,
            bathrooms: 3,
            areaLabel: "3 bedrooms",
            description: "A contemporary apartment concept with a relaxed interior.",
            details: "Illustrative annual rent only. Confirm rent, service charges, agency fees, tenancy terms and property availability.",
            image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
        },
        {
            id: "HE-003",
            title: "Oakview Family Home",
            location: "Port Harcourt",
            area: "Peter Odili Road, Port Harcourt",
            type: "House",
            purpose: "Sale",
            price: 72000000,
            priceLabel: "₦72,000,000",
            period: "",
            bedrooms: 4,
            bathrooms: 4,
            areaLabel: "4 bedrooms",
            description: "A modern family-home concept with generous living space.",
            details: "Illustrative property concept. Verify the location, building condition, title and every associated cost before proceeding.",
            image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80"
        },
        {
            id: "HE-004",
            title: "The City Nest",
            location: "Abuja",
            area: "Jabi, Abuja",
            type: "Apartment",
            purpose: "Rent",
            price: 4500000,
            priceLabel: "₦4,500,000",
            period: "/ year",
            bedrooms: 2,
            bathrooms: 2,
            areaLabel: "2 bedrooms",
            description: "A compact apartment concept for convenient city living.",
            details: "Illustrative annual rent only. Ask for a complete fee breakdown and independently verify the landlord or authorised agent.",
            image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
        },
        {
            id: "HE-005",
            title: "Palm Grove Plot",
            location: "Lagos",
            area: "Ibeju-Lekki, Lagos",
            type: "Land",
            purpose: "Sale",
            price: 18000000,
            priceLabel: "₦18,000,000",
            period: "",
            bedrooms: 0,
            bathrooms: 0,
            areaLabel: "Land",
            description: "A sample land listing concept for a future building project.",
            details: "Illustrative land listing. Confirm survey coordinates, title, boundaries, permitted use, encumbrances and planning restrictions with qualified professionals.",
            image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80"
        },
        {
            id: "HE-006",
            title: "Riverside City Apartment",
            location: "Port Harcourt",
            area: "Old GRA, Port Harcourt",
            type: "Apartment",
            purpose: "Rent",
            price: 3800000,
            priceLabel: "₦3,800,000",
            period: "/ year",
            bedrooms: 2,
            bathrooms: 2,
            areaLabel: "2 bedrooms",
            description: "A comfortable apartment concept with a clean, modern style.",
            details: "Illustrative annual rent only. Confirm the exact location, property condition, fees, rental terms and current availability.",
            image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
        }
    ];

    // Haven Estates multi-photo gallery.
    // These are illustrative demonstration photos, not verified listings.
    const propertyGalleryImages = {
        "HE-001": [
            properties[0].image,
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80"
        ],
        "HE-002": [
            properties[1].image,
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80"
        ],
        "HE-003": [
            properties[2].image,
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80"
        ],
        "HE-004": [
            properties[3].image,
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=900&q=80"
        ],
        "HE-005": [
            properties[4].image,
            "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?auto=format&fit=crop&w=900&q=80"
        ],
        "HE-006": [
            properties[5].image,
            "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=900&q=80",
            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=900&q=80"
        ]
    };

    const propertyGrid = document.getElementById("propertyGrid");
    const resultsCount = document.getElementById("resultsCount");
    const searchForm = document.getElementById("propertySearch");
    const locationFilter = document.getElementById("locationFilter");
    const typeFilter = document.getElementById("typeFilter");
    const purposeFilter = document.getElementById("purposeFilter");
    const resetFilters = document.getElementById("resetFilters");
    const enquiryForm = document.getElementById("propertyEnquiryForm");
    const enquiryProperty = document.getElementById("enquiryProperty");
    const formStatus = document.getElementById("formStatus");
    const menuToggle = document.getElementById("menuToggle");
    const mainNav = document.getElementById("mainNav");

    if (
        !propertyGrid ||
        !resultsCount ||
        !searchForm ||
        !locationFilter ||
        !typeFilter ||
        !purposeFilter ||
        !resetFilters ||
        !enquiryForm ||
        !enquiryProperty ||
        !formStatus
    ) {
        console.error("Haven Estates: one or more required HTML elements are missing.");
        return;
    }

    const moneyFormatter = new Intl.NumberFormat("en-NG", {
        style: "currency",
        currency: "NGN",
        maximumFractionDigits: 0
    });

    function makeElement(tag, className, text) {
        const element = document.createElement(tag);

        if (className) {
            element.className = className;
        }

        if (text !== undefined) {
            element.textContent = text;
        }

        return element;
    }

    function getFilteredProperties() {
        const location = locationFilter.value;
        const type = typeFilter.value;
        const purpose = purposeFilter.value;

        return properties.filter((property) => {
            return (
                (!location || property.location === location) &&
                (!type || property.type === type) &&
                (!purpose || property.purpose === purpose)
            );
        });
    }

    function addPropertyOptions() {
        properties.forEach((property) => {
            const option = document.createElement("option");
            option.value = property.id;
            option.textContent =
                property.title + " — " + property.area + " (illustrative)";
            enquiryProperty.appendChild(option);
        });
    }

    function createPropertyCard(property) {
        const card = makeElement("article", "property-card");
        const photo = makeElement("div", "property-photo");
        photo.setAttribute("role", "group");
        photo.setAttribute("aria-label", "Illustrative photo gallery: " + property.title);

        const galleryImages = propertyGalleryImages[property.id] || [property.image];
        let photoIndex = 0;

        function showGalleryPhoto() {
            const safeUrl = galleryImages[photoIndex].replace(/["\\\n\r]/g, "");
            photo.style.backgroundImage = 'url("' + safeUrl + '")';
            photoCounter.textContent = (photoIndex + 1) + " / " + galleryImages.length;
            photo.setAttribute(
                "aria-label",
                "Illustrative photo " + (photoIndex + 1) + " of " +
                    galleryImages.length + ": " + property.title
            );
        }

        const galleryControls = makeElement("div", "property-gallery-controls");
        const previousPhoto = makeElement("button", "property-gallery-button", "‹");
        previousPhoto.type = "button";
        previousPhoto.setAttribute("aria-label", "Previous photo of " + property.title);

        const nextPhoto = makeElement("button", "property-gallery-button", "›");
        nextPhoto.type = "button";
        nextPhoto.setAttribute("aria-label", "Next photo of " + property.title);

        const photoCounter = makeElement("span", "property-gallery-counter", "");
        photoCounter.setAttribute("aria-live", "polite");
        photoCounter.setAttribute("aria-atomic", "true");

        previousPhoto.addEventListener("click", () => {
            photoIndex = (photoIndex - 1 + galleryImages.length) % galleryImages.length;
            showGalleryPhoto();
        });

        nextPhoto.addEventListener("click", () => {
            photoIndex = (photoIndex + 1) % galleryImages.length;
            showGalleryPhoto();
        });

        galleryControls.appendChild(previousPhoto);
        galleryControls.appendChild(nextPhoto);
        photo.appendChild(galleryControls);
        photo.appendChild(photoCounter);
        showGalleryPhoto();

        const badge = makeElement(
            "span",
            "property-badge",
            property.purpose === "Rent" ? "For rent · Demo" : "For sale · Demo"
        );
        photo.appendChild(badge);
        card.appendChild(photo);

        const body = makeElement("div", "property-card-body");

        body.appendChild(makeElement("p", "property-location", property.area));
        body.appendChild(makeElement("h3", "", property.title));
        body.appendChild(makeElement("p", "property-description", property.description));

        const features = makeElement("div", "property-features");
        features.appendChild(makeElement("span", "", property.type));

        if (property.bedrooms > 0) {
            features.appendChild(makeElement("span", "", "🛏 " + property.bedrooms + " beds"));
            features.appendChild(makeElement("span", "", "🚿 " + property.bathrooms + " baths"));
        } else {
            features.appendChild(makeElement("span", "", "Illustrative land listing"));
        }

        body.appendChild(features);
        body.appendChild(makeElement("p", "property-price-label", "Illustrative price"));

        const price = makeElement("p", "property-price", property.priceLabel);
        if (property.period) {
            price.appendChild(makeElement("small", "", " " + property.period));
        }
        body.appendChild(price);

        const actions = makeElement("div", "property-actions");

        const detailsButton = makeElement("button", "property-details-button", "View details");
        detailsButton.type = "button";
        detailsButton.setAttribute("aria-expanded", "false");

        const extra = makeElement("div", "property-extra", property.details);
        extra.hidden = true;

        detailsButton.addEventListener("click", () => {
            const isExpanded = detailsButton.getAttribute("aria-expanded") === "true";
            detailsButton.setAttribute("aria-expanded", String(!isExpanded));
            detailsButton.textContent = isExpanded ? "View details" : "Hide details";
            extra.hidden = isExpanded;
        });

        const enquireButton = makeElement("a", "property-enquire-button", "Enquire ↗");
        enquireButton.href = "#contact";
        enquireButton.setAttribute(
            "aria-label",
            "Enquire about " + property.title
        );

        enquireButton.addEventListener("click", () => {
            enquiryProperty.value = property.id;
            formStatus.textContent =
                "Selected " + property.title + ". Complete the form to prepare your enquiry.";
        });

        actions.appendChild(detailsButton);
        actions.appendChild(enquireButton);
        body.appendChild(actions);
        body.appendChild(extra);
        card.appendChild(body);

        return card;
    }

    function renderProperties(list) {
        propertyGrid.replaceChildren();

        if (list.length === 0) {
            propertyGrid.appendChild(
                makeElement(
                    "p",
                    "empty-results",
                    "No sample properties match those filters. Try another location or reset the filters."
                )
            );
        } else {
            list.forEach((property) => {
                propertyGrid.appendChild(createPropertyCard(property));
            });
        }

        resultsCount.textContent =
            list.length + (list.length === 1
                ? " illustrative property found"
                : " illustrative properties found");
    }

    function applyFilters(event) {
        if (event) {
            event.preventDefault();
        }

        renderProperties(getFilteredProperties());
    }

    searchForm.addEventListener("submit", applyFilters);

    [locationFilter, typeFilter, purposeFilter].forEach((select) => {
        select.addEventListener("change", applyFilters);
    });

    resetFilters.addEventListener("click", () => {
        locationFilter.value = "";
        typeFilter.value = "";
        purposeFilter.value = "";
        renderProperties(properties);
    });

    enquiryForm.addEventListener("submit", (event) => {
        event.preventDefault();
        formStatus.textContent = "";

        if (!enquiryForm.reportValidity()) {
            return;
        }

        const name = document.getElementById("customerName").value.trim();
        const phone = document.getElementById("customerPhone").value.trim();
        const needs = document.getElementById("enquiryNeeds").value.trim();
        const selectedId = enquiryProperty.value;
        const selectedProperty = properties.find((property) => property.id === selectedId);

        if (!name || !phone) {
            formStatus.textContent = "Please enter your name and phone number.";
            return;
        }

        const messageLines = [
            "Hello Haven Estates / PupaDigital,",
            "",
            "I would like to make a property enquiry.",
            "Name: " + name,
            "Phone: " + phone,
            "Property: " + (
                selectedProperty
                    ? selectedProperty.title + " — " + selectedProperty.area
                    : "Please help me find a suitable property"
            ),
            "Note: This enquiry came from a demonstration website. Please confirm whether any real listing is available and verified."
        ];

        if (needs) {
            messageLines.push("Requirements: " + needs);
        }

        messageLines.push("", "Please share the relevant details. Thank you.");

        const whatsappUrl =
            "https://wa.me/" +
            WHATSAPP_NUMBER +
            "?text=" +
            encodeURIComponent(messageLines.join("\n"));

        // Open a prepared message only. The user must review and press Send in WhatsApp.
        const openedWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");

        if (!openedWindow) {
            formStatus.textContent =
                "Your browser blocked the WhatsApp window. Please allow pop-ups for this page and try again, or use a WhatsApp link on a property card.";
            return;
        }

        formStatus.textContent =
            "WhatsApp was opened with a prepared message. Review the details and press Send in WhatsApp.";
    });

    if (menuToggle && mainNav) {
        menuToggle.addEventListener("click", () => {
            const isOpen = mainNav.classList.toggle("is-open");
            menuToggle.setAttribute("aria-expanded", String(isOpen));
            menuToggle.textContent = isOpen ? "Close menu" : "Menu";
        });

        mainNav.querySelectorAll("a").forEach((link) => {
            link.addEventListener("click", () => {
                mainNav.classList.remove("is-open");
                menuToggle.setAttribute("aria-expanded", "false");
                menuToggle.textContent = "Menu";
            });
        });
    }

    addPropertyOptions();
    renderProperties(properties);

    console.info("Haven Estates demo initialized with " + properties.length + " illustrative properties.");
})();
