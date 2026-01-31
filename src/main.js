import Alpine from 'alpinejs'
import { collapse } from '@alpinejs/collapse';
import { initGSAPAnimations } from './scripts/animation';

import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';

window.Alpine = Alpine;
Alpine.plugin(collapse);

Alpine.data('cornerStoneFaq', () => (
    {
        activeId: 1,
        items: [
            { id: 1, title: 'What is your refund policy?', content: 'We offer a 14-day money-back guarantee on all plans.' },
            { id: 2, title: 'How long does development take?', content: 'Typical delivery time is 7–10 business days.' },
            { id: 3, title: 'Do you support WordPress plugins?', content: 'Yes, we specialize in custom WordPress plugin development.' },
            { id: 4, title: 'Is support included?', content: 'Email and ticket support is included for all paid plans.' },
            { id: 5, title: 'Can I request custom features?', content: 'Absolutely. Custom features can be scoped and quoted.' },
            { id: 6, title: 'What payment methods do you accept?', content: 'We accept all major credit cards and PayPal.' },
            { id: 7, title: 'Do you offer discounts for non-profits?', content: 'Yes, we provide special pricing for non-profit organizations.' },
            { id: 8, title: 'How secure is my data?', content: 'We use industry-standard security measures to protect your data.' },
            { id: 9, title: 'Can I upgrade or downgrade my plan?', content: 'Yes, you can change your plan at any time from your account settings.' },
            { id: 10, title: 'Is there a free trial available?', content: 'Yes, we offer a 14-day free trial for the Pro plan.' }
        ],
        toggle(id) { this.activeId = this.activeId === id ? null : id },
        isOpen(id) { return this.activeId === id }
    }
));


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