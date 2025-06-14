const toggle = document.getElementById('menuToggle');
const nav = document.getElementById('mainNav');
const body = document.body;

toggle.addEventListener('click', () => {
  toggle.classList.toggle('open');
  nav.classList.toggle('active');
  body.classList.toggle('menu-open');
});
