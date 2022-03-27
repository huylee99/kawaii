/* SELECTORS */
const mobileNavBtn = document.querySelector('.mobileNav__icon');
const backdrop = document.querySelector('.mobileNav__backdrop');
const mobileNav = document.querySelector('.mobileNav__menu');

mobileNavBtn.addEventListener('click', function () {
  mobileNav.classList.add('mobileNav__menu--open');
  backdrop.classList.add('mobileNav__backdrop--open');
});

backdrop.addEventListener('click', function () {
  mobileNav.classList.remove('mobileNav__menu--open');
  backdrop.classList.remove('mobileNav__backdrop--open');
});
