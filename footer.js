(function () {
  const footerHTML = `
  <footer class="custom-footer">
    <div class="footer-content">
      <div class="footer-section brand">
        <div class="brand-text">
          <h3 class="company-name">Mitra Emas Indotama</h3>
          <p class="slogan">solusion power protect</p>
          <p class="desc">Menjadi mitra andal untuk<br>keandalan energi industri Anda</p>
        </div>
      </div>

      <div class="footer-section nav">
        <h4 class="section-title">Navigasi</h4>
        <ul>
          <li><a href="aboutUs.html">PERUSAHAAN KAMI</a></li>
          <li><a href="product.html">PRODUK</a></li>
          <li><a href="project.html">PROJECT</a></li>
          <li><a href="contact.html">CONTACT</a></li>
        </ul>
      </div>

      <div class="footer-section contact">
        <h4 class="section-title">Kontak</h4>
        <p>Jl. Contoh No.123, Pekanbaru – Riau</p>
        <p>📞 +62 761 123 456</p>
        <p>📧 info@mitraemasindotama.co.id</p>
      </div>
    </div>

    <div class="footer-bottom">
      <hr />
      <p>&copy; 2025 PT. Mitra Emas Indotama. All rights reserved.</p>
    </div>
  </footer>`;

  const footerTarget = document.getElementById("site-footer");
  if (footerTarget) {
    footerTarget.outerHTML = footerHTML;
  }
})();
