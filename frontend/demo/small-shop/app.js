"use strict";

(() => {
  const WHATSAPP_NUMBER = "2349039522376";

  // Demonstration products only. No real inventory or live stock connection.
  const products = [
    {
      id: "PM-001", name: "Everyday Water Bottle", category: "home",
      categoryName: "Home & Living", price: 6500,
      description: "A reusable bottle for everyday routines.",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "PM-002", name: "Cotton Cushion Set", category: "home",
      categoryName: "Home & Living", price: 12500,
      description: "A simple touch for a cosy living space.",
      image: "https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "PM-003", name: "Classic Everyday Backpack", category: "fashion",
      categoryName: "Fashion", price: 18000,
      description: "A versatile bag for work, school or travel.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "PM-004", name: "Minimal Wristwatch", category: "fashion",
      categoryName: "Fashion", price: 22000,
      description: "A clean, simple accessory for daily wear.",
      image: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "PM-005", name: "Wireless Headphones", category: "electronics",
      categoryName: "Electronics", price: 35000,
      description: "A sample audio accessory for music and calls.",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "PM-006", name: "Portable Speaker", category: "electronics",
      categoryName: "Electronics", price: 28000,
      description: "Compact sound for home or outings.",
      image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "PM-007", name: "Daily Care Essentials", category: "beauty",
      categoryName: "Beauty & Care", price: 9500,
      description: "A sample set for a simple personal-care routine.",
      image: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "PM-008", name: "Body Care Set", category: "beauty",
      categoryName: "Beauty & Care", price: 14500,
      description: "Everyday care products in a convenient set.",
      image: "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "PM-009", name: "Coffee & Breakfast Pack", category: "food",
      categoryName: "Food & Drinks", price: 8000,
      description: "An illustrative pantry pack for your morning routine.",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "PM-010", name: "Tea Selection Box", category: "food",
      categoryName: "Food & Drinks", price: 5500,
      description: "A sample selection for a relaxing tea break.",
      image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "PM-011", name: "Desk Organiser", category: "home",
      categoryName: "Home & Living", price: 7500,
      description: "Keep everyday desk essentials in order.",
      image: "https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&w=800&q=80"
    },
    {
      id: "PM-012", name: "Travel Pouch", category: "fashion",
      categoryName: "Fashion", price: 6000,
      description: "A handy pouch for small travel essentials.",
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?auto=format&fit=crop&w=800&q=80"
    }
  ];

  // Cart is kept in memory for this demo; it is not a payment or stock system.
  const cart = new Map();

  const productGrid = document.getElementById("productGrid");
  const productCount = document.getElementById("productCount");
  const searchInput = document.getElementById("searchInput");
  const categoryFilter = document.getElementById("categoryFilter");
  const cartCount = document.getElementById("cartCount");
  const cartItems = document.getElementById("cartItems");
  const summaryItems = document.getElementById("summaryItems");
  const cartSubtotal = document.getElementById("cartSubtotal");
  const cartStatus = document.getElementById("cartStatus");
  const checkoutButton = document.getElementById("checkoutButton");
  const clearCartButton = document.getElementById("clearCartButton");
  const menuToggle = document.getElementById("menuToggle");
  const mainNav = document.getElementById("mainNav");

  function element(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }

  function formatNaira(value) {
    return "₦" + value.toLocaleString("en-NG");
  }

  function safeImageUrl(url) {
    // Product images are fixed HTTPS URLs defined in this local catalogue.
    return url.replace(/["\\\n\r]/g, "");
  }

  function addProductCard(product) {
    const card = element("article", "product-card");

    const image = element("div", "product-image");
    image.style.backgroundImage = 'url("' + safeImageUrl(product.image) + '")';
    image.setAttribute("role", "img");
    image.setAttribute("aria-label", "Illustrative product photo: " + product.name);
    image.appendChild(element("span", "product-category-tag", product.categoryName));
    card.appendChild(image);

    const body = element("div", "product-body");
    body.appendChild(element("h3", "", product.name));
    body.appendChild(element("p", "product-description", product.description));

    const price = element("p", "product-price");
    price.appendChild(document.createTextNode(formatNaira(product.price) + " "));
    price.appendChild(element("small", "", "sample price"));
    body.appendChild(price);

    const button = element("button", "add-button", "＋ Add to cart");
    button.type = "button";
    button.setAttribute("aria-label", "Add " + product.name + " to cart");
    button.addEventListener("click", () => {
      addToCart(product.id, 1);
      setCartStatus(product.name + " added to your cart.", false);
    });
    body.appendChild(button);

    card.appendChild(body);
    return card;
  }

  function renderProducts() {
    const query = searchInput.value.trim().toLowerCase();
    const category = categoryFilter.value;

    const visible = products.filter((product) => {
      const matchesCategory = category === "all" || product.category === category;
      const searchable = [
        product.name, product.categoryName, product.description, product.id
      ].join(" ").toLowerCase();
      return matchesCategory && searchable.includes(query);
    });

    productGrid.replaceChildren();
    if (visible.length === 0) {
      productGrid.appendChild(element(
        "p", "empty-cart", "No sample products match your search. Try another term or category."
      ));
    } else {
      visible.forEach((product) => productGrid.appendChild(addProductCard(product)));
    }

    productCount.textContent = visible.length +
      (visible.length === 1 ? " sample product" : " sample products");
  }

  function addToCart(productId, amount) {
    const product = products.find((item) => item.id === productId);
    if (!product) return;

    const current = cart.get(productId) || 0;
    const next = current + amount;
    if (next <= 0) cart.delete(productId);
    else if (next <= 99) cart.set(productId, next);

    renderCart();
  }

  function renderCart() {
    cartItems.replaceChildren();

    let itemCount = 0;
    let subtotal = 0;

    cart.forEach((quantity, productId) => {
      const product = products.find((item) => item.id === productId);
      if (!product) return;

      itemCount += quantity;
      subtotal += product.price * quantity;

      const row = element("article", "cart-row");
      const thumb = element("div", "cart-thumb");
      thumb.style.backgroundImage = 'url("' + safeImageUrl(product.image) + '")';
      thumb.setAttribute("role", "img");
      thumb.setAttribute("aria-label", product.name + " illustrative thumbnail");
      row.appendChild(thumb);

      const info = element("div", "cart-item-info");
      info.appendChild(element("h3", "", product.name));
      info.appendChild(element("p", "", formatNaira(product.price) + " each · sample price"));

      const controls = element("div", "quantity-controls");
      const decrease = element("button", "", "−");
      decrease.type = "button";
      decrease.setAttribute("aria-label", "Decrease " + product.name + " quantity");
      decrease.addEventListener("click", () => addToCart(productId, -1));

      const quantityLabel = element("span", "", String(quantity));
      quantityLabel.setAttribute("aria-label", "Quantity " + quantity);

      const increase = element("button", "", "+");
      increase.type = "button";
      increase.setAttribute("aria-label", "Increase " + product.name + " quantity");
      increase.addEventListener("click", () => {
        if ((cart.get(productId) || 0) >= 99) {
          setCartStatus("Maximum demo quantity is 99 per product.", true);
          return;
        }
        addToCart(productId, 1);
      });

      controls.append(decrease, quantityLabel, increase);
      info.appendChild(controls);

      const remove = element("button", "remove-item", "Remove item");
      remove.type = "button";
      remove.addEventListener("click", () => {
        cart.delete(productId);
        renderCart();
        setCartStatus(product.name + " removed from your cart.", false);
      });
      info.appendChild(remove);
      row.appendChild(info);

      row.appendChild(element("div", "cart-line-total", formatNaira(product.price * quantity)));
      cartItems.appendChild(row);
    });

    if (cart.size === 0) {
      cartItems.appendChild(element(
        "p", "empty-cart", "Your cart is empty. Explore the products above to get started."
      ));
    }

    cartCount.textContent = String(itemCount);
    summaryItems.textContent = String(itemCount);
    cartSubtotal.textContent = formatNaira(subtotal);
    checkoutButton.disabled = cart.size === 0;
    checkoutButton.setAttribute("aria-disabled", String(cart.size === 0));
  }

  function setCartStatus(message, isError) {
    cartStatus.textContent = message;
    cartStatus.classList.toggle("error", Boolean(isError));
  }

  searchInput.addEventListener("input", renderProducts);
  categoryFilter.addEventListener("change", renderProducts);

  checkoutButton.addEventListener("click", () => {
    if (cart.size === 0) {
      setCartStatus("Add at least one product before preparing an order.", true);
      return;
    }

    const lines = [];
    let subtotal = 0;

    cart.forEach((quantity, productId) => {
      const product = products.find((item) => item.id === productId);
      if (!product) return;
      const lineTotal = product.price * quantity;
      subtotal += lineTotal;
      lines.push(
        "- " + product.name + " (sample ID " + product.id + ") × " +
        quantity + " = " + formatNaira(lineTotal)
      );
    });

    const message = [
      "Hello PupaMart, I would like to enquire about these sample products:",
      "",
      ...lines,
      "",
      "Illustrative subtotal: " + formatNaira(subtotal),
      "Please confirm actual prices, stock availability and delivery fees.",
      "",
      "I understand this is an order enquiry, not a confirmed or paid order."
    ].join("\n");

    const whatsappUrl = "https://wa.me/" + WHATSAPP_NUMBER +
      "?text=" + encodeURIComponent(message);

    setCartStatus(
      "Your order message is prepared. WhatsApp will open if available; review the message and press Send yourself.",
      false
    );

    const newWindow = window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    if (!newWindow) {
      setCartStatus("Pop-up blocked. Open this WhatsApp link to review your order: " + whatsappUrl, false);
    }
  });

  clearCartButton.addEventListener("click", () => {
    if (cart.size === 0) {
      setCartStatus("Your cart is already empty.", false);
      return;
    }
    cart.clear();
    renderCart();
    setCartStatus("Cart cleared.", false);
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

  renderProducts();
  renderCart();
})();
