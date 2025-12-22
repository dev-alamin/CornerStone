document.addEventListener("DOMContentLoaded", function () {
  const track = document.querySelector(".corner-logo-slider-track");
  const items = track?.querySelectorAll(".corner-logo-slider-item");
  if (!track || !items?.length || !window.gsap) return;

  let animation;

  const measureOriginalWidth = () => {
    const itemsArr = Array.from(items);
    const half = Math.floor(itemsArr.length / 2) || itemsArr.length;
    const gap = parseFloat(getComputedStyle(track).gap || "0") || 0;

    let width = 0;
    for (let i = 0; i < half; i++) {
      width += itemsArr[i].getBoundingClientRect().width;
    }
    width += gap * Math.max(half - 1, 0);
    return width;
  };

  const startAnimation = () => {
    if (animation) animation.kill();
    const originalWidth = measureOriginalWidth();
    animation = gsap.fromTo(
      track,
      { x: 0 },
      {
        x: -originalWidth,
        duration: 30,
        ease: "none",
        repeat: -1,
      }
    );
  };

  const handleImages = () => {
    const images = track.querySelectorAll("img");
    if (!images.length) {
      startAnimation();
      return;
    }

    let loaded = 0;
    images.forEach((img) => {
      if (img.complete) {
        loaded += 1;
      } else {
        img.addEventListener("load", () => {
          loaded += 1;
          if (loaded === images.length) startAnimation();
        });
      }
    });
    if (loaded === images.length) startAnimation();
  };

  handleImages();
  window.addEventListener("resize", startAnimation);
});

