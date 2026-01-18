import "../js/header.js";
import Alpine from 'alpinejs'
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

