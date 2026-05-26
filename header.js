(function () {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const navItems = [
    { text: "HOME", href: "index.html" },
    { text: "ABOUT US", href: "aboutUs.html" },
    { text: "PRODUCT", href: "product.html" },
    { text: "PROJECT", href: "project.html" },
    { text: "CONTACT", href: "contact.html" },
  ];

  const navLinks = navItems
    .map((item) => {
      const activeClass = currentPage === item.href ? ' class="active"' : "";
      return `<a href="${item.href}"${activeClass}>${item.text}</a>`;
    })
    .join("");

  const headerHTML = `
  <header class="header">
    <div class="logo">
      <img src="picture/logo.png" alt="Logo Mitra Emas" class="logo-image">
      <div class="logo-text">
        <h1>Mitra Emas Indotama</h1>
        <p>solution power protect</p>
      </div>
    </div>

    <button class="menu-toggle" aria-label="Toggle menu">☰</button>

    <nav class="navbar">
      <div class="nav-header">
        <img src="picture/logo.png" alt="Logo Mitra Emas" class="drawer-logo">
      </div>
      ${navLinks}
    </nav>
  </header>`;

  const headerTarget = document.getElementById("site-header");
  if (headerTarget) {
    headerTarget.outerHTML = headerHTML;
  }
})();
