const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const closeMobileMenu = document.querySelector('.closeMobileMenu');

hamburger.addEventListener('click', () => {
	menu.classList.toggle('mobileMenu');
	closeMobileMenu.classList.remove('d-none');
});

closeMobileMenu.addEventListener('click', () => {
	// No uso toggle por problemas de renderizado
	menu.classList.remove('mobileMenu');
	menu.classList.add('menu');
	closeMobileMenu.classList.add('d-none');
})