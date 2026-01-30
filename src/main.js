import Alpine from 'alpinejs'
import { collapse } from '@alpinejs/collapse';
import { initGSAPAnimations } from './scripts/animation';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

window.Alpine = Alpine;
Alpine.plugin(collapse);
Alpine.start();

document.addEventListener("DOMContentLoaded", () => {
    initGSAPAnimations();

    new Swiper('.tools-swiper', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });

    new Swiper('.corner-logo-slider', {
        slidesPerView: 'auto',
        spaceBetween: 30,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });


    new Swiper('.tools-swiper-reverse', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        freemode: true,
        centeredSlides: true,
        loop: true,
        speed: 6000,
        allowTouchMove: false,
        autoplay: {
            delay: 1,
            disableOnInteraction: true,
        },
    });
});

window.onload = function () {
    // Hide the preloader when the page has fully loaded
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    preloader.style.display = 'none';
};