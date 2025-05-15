 const nav = document.getElementById('mainNav');

 function tint() {
 	nav.classList.toggle('scrolled', window.scrollY > 50);
 }
 tint();
 window.addEventListener('scroll', tint);
 new Swiper('.swiper', {
 	loop: true,
 	autoplay: {
 		delay: 6500
 	},
 	pagination: {
 		el: '.swiper-pagination',
 		clickable: true
 	},
 	navigation: {
 		nextEl: '.swiper-button-next',
 		prevEl: '.swiper-button-prev'
 	},
 	effect: 'fade',
 	speed: 900
 });