import Alpine from 'alpinejs'
import { collapse } from '@alpinejs/collapse';
import {initGSAPAnimations} from './js/animation.js';

// import Swiper from 'swiper';
// import 'swiper/css';
// import 'swiper/css/navigation';

import { initAccordion } from "./scripts/accordion.js";
import { initLogoSlider } from "./scripts/infiniteslider.js";
import { initTabs, initLogoTabs } from "./scripts/tab.js";
// import CornerAnimation from './scripts/animation.js';


window.Alpine = Alpine;
Alpine.plugin(collapse);
Alpine.start();

document.addEventListener("DOMContentLoaded", () => {
    initGSAPAnimations();
    // initLogoSlider();
    // initTabs();
    initLogoTabs();
    // initAccordion();

    new Swiper('.tools-swiper', {
        loop: true,
        spaceBetween: 30,
        speed: 6000,
        freeMode: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
    });

    new Swiper('.corner-logo-slider', {
        loop: true,
        spaceBetween: 30,
        speed: 8000,
        freeMode: true,
        autoplay: {
            delay: 0,
            disableOnInteraction: false,
        },
        slidesPerView: 'auto',
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
        slidesPerView: 'auto',
    });
});

window.onload = function () {
    // Hide the preloader when the page has fully loaded
    const preloader = document.getElementById('preloader');
    if (!preloader) return;
    preloader.style.display = 'none';
};