export const initAccordion = () => {
  const accordionContainers = document.querySelectorAll(".corner__accordion");
  if (!accordionContainers.length) return;

  accordionContainers.forEach((container) => {
    const items = container.querySelectorAll(".corner__accordion-item");
    if (!items.length) return;

    items.forEach((item) => {
      const header = item.querySelector(".corner__accordion-header");
      const content = item.querySelector(".corner__accordion-content");
      const iconOpen = item.querySelector(".accordion-icon-open");
      const iconClose = item.querySelector(".accordion-icon-close");
      const iconSingle = item.querySelector(".corner__accordion-icon svg");

      if (!header || !content) return;

      // Set initial state - all closed by default
      content.style.maxHeight = "0";
      content.style.opacity = "0";
      item.classList.remove("active");
      
      // Handle new icon structure (two icons)
      if (iconOpen && iconClose) {
        iconOpen.style.display = "block";
        iconClose.style.display = "none";
      }
      // Handle old icon structure (single icon)
      else if (iconSingle) {
        iconSingle.style.transform = "rotate(0deg)";
      }

      header.addEventListener("click", () => {
        const isActive = item.classList.contains("active");

        // Close all items
        items.forEach((otherItem) => {
          const otherContent = otherItem.querySelector(".corner__accordion-content");
          const otherIconOpen = otherItem.querySelector(".accordion-icon-open");
          const otherIconClose = otherItem.querySelector(".accordion-icon-close");
          const otherIconSingle = otherItem.querySelector(".corner__accordion-icon svg");
          
          if (otherItem !== item) {
            otherItem.classList.remove("active");
            if (otherContent) {
              otherContent.style.maxHeight = "0";
              otherContent.style.opacity = "0";
            }
            // Reset icons for other items
            if (otherIconOpen) otherIconOpen.style.display = "block";
            if (otherIconClose) otherIconClose.style.display = "none";
            if (otherIconSingle) otherIconSingle.style.transform = "rotate(0deg)";
          }
        });

        // Toggle current item
        if (isActive) {
          // Close
          item.classList.remove("active");
          content.style.maxHeight = "0";
          content.style.opacity = "0";
          
          if (iconOpen && iconClose) {
            // New icon structure
            iconOpen.style.display = "block";
            iconClose.style.display = "none";
          } else if (iconSingle) {
            // Old icon structure
            iconSingle.style.transform = "rotate(0deg)";
          }
        } else {
          // Open
          item.classList.add("active");
          content.style.maxHeight = content.scrollHeight + "px";
          content.style.opacity = "1";
          
          if (iconOpen && iconClose) {
            // New icon structure
            iconOpen.style.display = "none";
            iconClose.style.display = "block";
          } else if (iconSingle) {
            // Old icon structure
            iconSingle.style.transform = "rotate(180deg)";
          }
        }
      });
    });
  });
};

