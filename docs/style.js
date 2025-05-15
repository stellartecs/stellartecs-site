document.addEventListener("DOMContentLoaded", () => {

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    });
  });
  document.querySelectorAll('.hidden').forEach(el => io.observe(el));

  document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const targetEl = document.querySelector(link.hash);
      if (!targetEl) return;

      e.preventDefault();
      targetEl.scrollIntoView({behavior: 'smooth'});

      setTimeout(() =>
        history.replaceState(null, '', location.pathname + location.search),
        50
      );
    });
  });

  const arrow = document.querySelector('.scroll-top-arrow');
  if (arrow) {
    arrow.addEventListener('click', e => {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    });
  }

  const navbar = document.querySelector('.navbar');
  function tintNavbar() {
    const scrolled = document.documentElement.scrollTop || document.body.scrollTop;
    navbar.style.backgroundColor = scrolled > 50 ? '#000' : 'transparent';
  }
  tintNavbar();
  window.addEventListener('scroll', tintNavbar);

});