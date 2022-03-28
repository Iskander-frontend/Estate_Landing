var swiper = new Swiper(".mySwiper", {
    mousewheel: true,
    autoHeight: true,
    slidesPerView: 1,
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        768: {
            slidesPerView: 2,
        }
    }
});

let menuBtn = document.querySelector('.hamburger');
let menu = document.querySelector('.header__menu');
let body = document.querySelector('body');

menuBtn.addEventListener('click', function(){
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    body.classList.toggle('active');
})