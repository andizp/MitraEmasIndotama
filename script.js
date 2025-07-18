const btn = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.navbar');

  btn.addEventListener('click', e => {
    e.stopPropagation();
    nav.classList.toggle('open');
  });

  // klik di mana saja tutup drawer jika terbuka
  document.addEventListener('click', e => {
    if (nav.classList.contains('open')) {
      // kalau klik bukan di nav atau tombol, tutup
      if (!nav.contains(e.target) && !btn.contains(e.target)) {
        nav.classList.remove('open');
      }
    }
  });