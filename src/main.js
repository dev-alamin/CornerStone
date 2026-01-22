import "../js/header.js";
import Alpine from 'alpinejs'
// import Swiper from 'swiper';
// import 'swiper/css';
import { initAccordion } from "./scripts/accordion.js";
import { initLogoSlider } from "./scripts/infiniteslider.js";
import { initTabs } from "./scripts/tab.js";

 
window.Alpine = Alpine
Alpine.start()

document.addEventListener("DOMContentLoaded", () => {
  initLogoSlider();
  initTabs();
  initAccordion();
});

new Swiper('.tools-swiper', {
    loop: true,
    spaceBetween: 30,
    speed: 6000,
    freeMode: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
     slidesPerView: 6,
});

new Swiper('.tools-swiper-reverse', {
    loop: true,
    spaceBetween: 30,
    speed: 6000,
    freeMode: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
     slidesPerView: 7,
});
