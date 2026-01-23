export const initTabs = () => {
  const tabContainers = document.querySelectorAll(".corner__tabs");
  if (!tabContainers.length) return;

  tabContainers.forEach((container, index) => {
    if (!container) return;

    const tabs = container.querySelectorAll(".corner__tab");
    const contents = container.querySelectorAll(".corner__content");
    if (!tabs.length || !contents.length) return;

    // Find which tab/content was originally active
    let activeTabIndex = -1;
    let activeContentIndex = -1;
    
    tabs.forEach((tab, tIndex) => {
      if (tab.classList.contains("active")) {
        activeTabIndex = tIndex;
      }
    });
    
    contents.forEach((content, cIndex) => {
      if (content.classList.contains("active")) {
        activeContentIndex = cIndex;
      }
    });

    // Step 1: Assign unique IDs to contents and store original IDs
    contents.forEach((content, cIndex) => {
      const newId = `corner__tab-${index}-${cIndex}`;
      content.dataset.originalId = content.id || ""; // store original ID
      content.id = newId;
      // Hide all content initially
      content.style.display = "none";
      content.classList.remove("active");
    });

    // Step 2: Update tabs' data-target to match new content IDs
    tabs.forEach((tab, tIndex) => {
      if (!tab.dataset.target) return;
      const originalTarget = tab.dataset.target;
      const targetIndex = Array.from(contents).findIndex(
        c => c.dataset.originalId === originalTarget
      );
      if (targetIndex !== -1) {
        tab.dataset.target = `corner__tab-${index}-${targetIndex}`;
      }
    });

    // Step 3: Add click events
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetId = tab.dataset.target;
        if (!targetId) return;

        // Hide all contents and remove active class
        contents.forEach(content => {
          content.style.display = "none";
          content.classList.remove("active");
        });

        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));

        // Show target content and add active class
        const targetContent = container.querySelector("#" + targetId);
        if (targetContent) {
          targetContent.style.display = "block";
          targetContent.classList.add("active");
        }

        // Set active tab
        tab.classList.add("active");
      });
    });

    // Step 4: Activate the tab that was originally active, or first tab
    if (activeTabIndex !== -1 && tabs[activeTabIndex]) {
      tabs[activeTabIndex].click();
    } else if (tabs[0]) {
      tabs[0].click();
    }
  });
};

// Logo tab initialization - separate from corner__tabs
export const initLogoTabs = () => {
  const tabContainers = document.querySelectorAll(".logo-tab");
  if (!tabContainers.length) return;

  tabContainers.forEach((container, index) => {
    if (!container) return;

    const tabs = container.querySelectorAll(".logo-tab-button");
    const contents = container.querySelectorAll(".logo-tab-content");
    if (!tabs.length || !contents.length) return;

    // Find which tab/content was originally active
    let activeTabIndex = -1;
    
    tabs.forEach((tab, tIndex) => {
      if (tab.classList.contains("active")) {
        activeTabIndex = tIndex;
      }
    });

    // Step 1: Assign unique IDs to contents and store original IDs
    contents.forEach((content, cIndex) => {
      const newId = `logo-tab-${index}-${cIndex}`;
      content.dataset.originalId = content.id || "";
      content.id = newId;
      // Hide all content initially
      content.style.display = "none";
      content.classList.remove("active");
    });

    // Step 2: Update tabs' data-target to match new content IDs
    tabs.forEach((tab, tIndex) => {
      if (!tab.dataset.target) return;
      const originalTarget = tab.dataset.target;
      const targetIndex = Array.from(contents).findIndex(
        c => c.dataset.originalId === originalTarget
      );
      if (targetIndex !== -1) {
        tab.dataset.target = `logo-tab-${index}-${targetIndex}`;
      }
    });

    // Step 3: Add click events
    tabs.forEach(tab => {
      tab.addEventListener("click", () => {
        const targetId = tab.dataset.target;
        if (!targetId) return;

        // Hide all contents and remove active class
        contents.forEach(content => {
          content.style.display = "none";
          content.classList.remove("active");
        });

        // Remove active class from all tabs
        tabs.forEach(t => t.classList.remove("active"));

        // Show target content and add active class
        const targetContent = container.querySelector("#" + targetId);
        if (targetContent) {
          targetContent.style.display = "block";
          targetContent.classList.add("active");
        }

        // Set active tab
        tab.classList.add("active");
      });
    });

    // Step 4: Activate the tab that was originally active, or first tab
    if (activeTabIndex !== -1 && tabs[activeTabIndex]) {
      tabs[activeTabIndex].click();
    } else if (tabs[0]) {
      tabs[0].click();
    }
  });
};