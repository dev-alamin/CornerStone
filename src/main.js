import "../js/header.js";
import { initAccordion } from "./scripts/accordion.js";
import { initLogoSlider } from "./scripts/infiniteslider.js";
import { initTabs } from "./scripts/tab.js";

document.addEventListener("DOMContentLoaded", () => {
  initLogoSlider();
  initTabs();
  initAccordion();
});

