// import "../js/header.js";
import Alpine from 'alpinejs'
// import Swiper from 'swiper';
// import 'swiper/css';
// import gsap from "gsap";
import { initAccordion } from "./scripts/accordion.js";
import { initLogoSlider } from "./scripts/infiniteslider.js";
import { initTabs, initLogoTabs } from "./scripts/tab.js";


window.Alpine = Alpine
Alpine.start()

document.addEventListener("DOMContentLoaded", () => {
    initLogoSlider();
    initTabs();
    initLogoTabs();
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

// Pricing pageXOffset, Compare section 
gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.matchMedia({
    "(min-width: 1024px)": function () {
        let panels = document.querySelectorAll('.stack-panel');

        panels.forEach((panel, i) => {
            gsap.to(panel, {
                scrollTrigger: {
                    trigger: panel,
                    pin: true,           // Pins the card
                    pinSpacing: false,   // Allows next card to overlap
                    start: "top 20%",    // Adjust where it sticks
                    endTrigger: "#comparison-area",
                    end: "bottom 80%",
                    scrub: 1
                }
            });
        });
    }
});
