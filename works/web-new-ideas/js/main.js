const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const menuItemArr = document.querySelectorAll('#showMobileMenu ul li a');

const showSubscribeModalArr = document.querySelectorAll('.showSubscribeModal')
const subscribeModal = document.getElementById('subscribe-modal');
const btnCloseModal = document.querySelector('.btnCloseModal')


// MOBILE MENU

hamburger.addEventListener('click', () => {
	menu.classList.add('mobileMenu');
});

menuItemArr.forEach(item => {
	item.addEventListener('click', () => {
		menu.classList.remove('mobileMenu');
	})
});



// SUBSCRIBE MODAL

showSubscribeModalArr.forEach(btn => {
	btn.addEventListener('click', () => {
		document.body.style.overflow = "hidden";
		subscribeModal.showModal();
	})
})

btnCloseModal.addEventListener('click', () => {
	document.body.style.overflow = "initial";
	subscribeModal.close();
})
