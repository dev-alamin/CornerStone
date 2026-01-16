// Header scroll effect - change background and text color on scroll
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector("header");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");
  const loginButton = document.querySelector("header .flex.text-white a:first-child");
  const tryFreeButton = document.querySelector("header .flex.text-white a:last-child");
  const logo = document.querySelector("header .logo img");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuIcon = document.querySelector(".menu-icon");
  
  // Also get all links in the header button container
  const headerButtons = document.querySelectorAll("header .flex.text-white a");

  if (!header) return;

  // Mobile menu toggle functionality
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      // Toggle menu visibility
      const isHidden = navMenu.classList.contains("hidden");
      
      if (isHidden) {
        // Show menu
        navMenu.classList.remove("hidden");
        navMenu.style.display = "flex";
        menuToggle.classList.add("active");
      } else {
        // Hide menu
        navMenu.classList.add("hidden");
        navMenu.style.display = "";
        menuToggle.classList.remove("active");
      }
    });

    // Close menu when clicking outside (only on mobile)
    document.addEventListener("click", (e) => {
      if (window.innerWidth < 1200) {
        if (!navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
          navMenu.classList.add("hidden");
          navMenu.style.display = "";
          menuToggle.classList.remove("active");
        }
      }
    });

    // Handle window resize - show menu on desktop, hide on mobile
    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        if (window.innerWidth >= 1200) {
          // Desktop: show menu normally
          navMenu.classList.remove("hidden");
          navMenu.style.display = "";
          menuToggle.classList.remove("active");
        } else {
          // Mobile: hide menu if not active
          if (!menuToggle.classList.contains("active")) {
            navMenu.classList.add("hidden");
            navMenu.style.display = "";
          }
        }
      }, 100);
    });
  }

  // Function to handle scroll
  const handleScroll = () => {
    const scrollY = window.scrollY || window.pageYOffset;

    if (scrollY > 0) {
      // Scrolled - add white background and dark text
      header.style.backgroundColor = "#FFF";
      header.style.transition = "background-color 0.3s ease";

      // Change nav menu text color
      if (navMenu) {
        navMenu.classList.remove("text-white");
        navMenu.style.color = "#03000A";
      }

      // Change nav links text color
      navLinks.forEach((link) => {
        link.style.color = "#03000A";
      });

      // Update mobile menu background if visible
      if (navMenu && window.innerWidth < 1200 && !navMenu.classList.contains("hidden")) {
        navMenu.style.backgroundColor = "#FFF";
      }

      // Change all header button links text color
      headerButtons.forEach((button) => {
        button.style.color = "#03000A";
        button.style.transition = "color 0.3s ease";
      });

      // Change "Try for Free" button border color to match dark theme
      if (tryFreeButton) {
        tryFreeButton.style.borderColor = "#03000A";
      }

      // Invert logo color for white background
      if (logo) {
        logo.style.filter = "invert(1) brightness(0)";
        logo.style.transition = "filter 0.3s ease";
      }

      // Change menu toggle icon color
      if (menuIcon) {
        menuIcon.querySelectorAll("path").forEach((path) => {
          path.setAttribute("stroke", "#03000A");
        });
      }
    } else {
      // At top - remove background and revert to original colors
      header.style.backgroundColor = "transparent";

      // Revert nav menu text color
      if (navMenu) {
        navMenu.style.color = "";
        navMenu.classList.add("text-white");
      }

      // Revert nav links text color
      navLinks.forEach((link) => {
        link.style.color = "";
      });

      // Revert mobile menu background if visible
      if (navMenu && window.innerWidth < 1200 && !navMenu.classList.contains("hidden")) {
        navMenu.style.backgroundColor = "";
      }

      // Revert all header button links text color
      headerButtons.forEach((button) => {
        button.style.color = "";
      });

      // Revert "Try for Free" button border color
      if (tryFreeButton) {
        tryFreeButton.style.borderColor = "";
      }

      // Revert logo to original (white) color
      if (logo) {
        logo.style.filter = "";
      }

      // Revert menu toggle icon color to white
      if (menuIcon) {
        menuIcon.querySelectorAll("path").forEach((path) => {
          path.setAttribute("stroke", "white");
        });
      }
    }
  };

  // Initial check on page load
  handleScroll();

  // Listen for scroll events
  window.addEventListener("scroll", handleScroll);
});