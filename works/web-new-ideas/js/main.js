const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const cerrarMenuMovil = document.querySelector('.cerrarMenuMovil');
const btn = document.querySelector('.btn');

hamburger.addEventListener('click', () => {
	menu.classList.add('menuMovil');
	cerrarMenuMovil.style.display = 'inherit';
	btn.style.display = 'inherit';
})

cerrarMenuMovil.addEventListener('click', () => {
	menu.classList.remove('menuMovil');
	menu.classList.add('menu');
	cerrarMenuMovil.style.display = 'none';
	btn.style.display = 'none';
})
