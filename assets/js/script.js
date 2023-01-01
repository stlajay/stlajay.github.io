// ********* NAVBAR SCRIPT ***********

const phoneMenu = document.querySelector('.phone_menu');
const menuLinks = document.querySelectorAll('.phone_nav');
const btn = document.querySelector('.navbar');

btn.addEventListener('click', () => {
  phoneMenu.classList.toggle('active');
  btn.classList.toggle('active');
});

menuLinks.forEach((link) => link.addEventListener('click', () => {
  phoneMenu.classList.remove('active');
  btn.classList.remove('active');
}));