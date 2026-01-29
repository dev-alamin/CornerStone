import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitText from 'gsap/SplitText';
import { ScrollSmoother } from "gsap/ScrollSmoother";

gsap.config({
    nullTargetWarn: false,
});

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

export const initGSAPAnimations = () => {

    ScrollSmoother.create({
        wrapper: "#smooth-wrapper",
        content: "#smooth-content",
        smooth: 1.5,               // How long it takes to "catch up" to your scroll
        effects: true,             // Allows data-speed="1.2" on HTML elements
        smoothTouch: 0.1,           // Adds a tiny bit of smoothing to mobile touch
        normalizeScroll: false,
        ignoreMobileResize: true,
    });

    // 1. Hero Content Entrance with ScrollTrigger
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".corner-hero-content", // The main container for your hero
            start: "top 80%",               // Start when the top of hero is 80% from the top
            toggleActions: "restart none restart reset", // Restarts when coming back from the top
        },
        defaults: { ease: "power3.out", duration: 1 }
    });

    tl.from(".corner__hero-top-title", { opacity: 0, y: 20, delay: 0.2 })
        .from(".corner__hero-title", { opacity: 0, y: 30 }, "-=0.7")
        .from(".corner-hero-content p", { opacity: 0, y: 20 }, "-=0.7")
        .from(".corner__hero-buttons", { opacity: 0, y: 20 }, "-=0.7");

    // 2. The "Dashboard Reveal" Scroll Effect
    // This makes the feature image grow as the user scrolls into it
    gsap.fromTo(".feature-image-container",
        {
            y: 100,
            scale: 0.8,
            opacity: 0.4
        },
        {
            y: 0,
            scale: 1,
            opacity: 1,
            scrollTrigger: {
                trigger: ".feature-image-container",
                start: "top 80%", // Starts when the top of the image hits 90% of viewport
                end: "top 30%",   // Finishes when it hits the middle
                scrub: 1,         // Smoothly ties animation to scroll speed
            }
        }
    );

    // Fade in Author slightly after
    // Target the reveal-item classes inside your content box
    gsap.from(".corner__testimonial-content-box .reveal-item", {
        scrollTrigger: {
            trigger: ".corner__testimonial-content-box",
            start: "top 80%", // Starts when the box enters view
        },
        opacity: 0,
        y: 40,             // Slides up 40px
        duration: 1.2,     // Slow reveal
        stagger: 0.3,      // Quote first, then Sophia Lee
        ease: "power2.out"
    });

    // 2. Text Reveal on Page Load
    const heroTl = gsap.timeline({ delay: 0.5 });

    heroTl.from(".hero-star-reveal span", {
        y: 20,
        opacity: 0,
        stagger: 0.1,
        ease: "back.out(1.7)"
    })
        .from(".hero-quote-reveal", {
            y: 50,
            opacity: 0,
            skewY: 3,
            duration: 1.2,
            ease: "power4.out"
        }, "-=0.5")
        .to(".hero-author-reveal", {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power2.out"
        }, "-=0.8");

    // Trusted by team section animations


    // --- 1. GLOBAL HEADINGS (.reveal-type) ---
    const headings = document.querySelectorAll('.reveal-type');
    headings.forEach((heading) => {
        // 1. Split text into characters and lines
        // Wrapping in lines helps handle responsive wraps correctly
        const split = new SplitText(heading, {
            type: 'lines, chars',
            linesClass: 'overflow-hidden' // Ensures characters are "masked" by their line
        });

        // 2. The Animation
        gsap.from(split.chars, {
            scrollTrigger: {
                trigger: heading,
                start: 'top 90%', // Starts when heading is 85% from top of viewport
                end: 'bottom center',
                toggleActions: 'restart none restart none',
            },
            y: 100,              // Slide up from 100px
            opacity: 0,          // Fade in
            rotateX: -45,        // Subtle 3D tilt for a premium feel
            stagger: 0.01,       // Speed between letters
            duration: 1.2,       // Total time for each letter
            ease: 'power4.out',  // High-end smooth deceleration
            onComplete: () => {
                // Revert splitting to keep the DOM clean/accessible after animation
                // split.revert(); 
            }
        });
    });

    // --- 2. GLOBAL STAGGERED GRIDS (.reveal-grid) ---
    const grids = document.querySelectorAll('.reveal-grid');
    grids.forEach((grid) => {
        gsap.from(grid.querySelectorAll('.reveal-card'), {
            y: 60,
            opacity: 0,
            duration: 1.2,
            stagger: 0.25,
            ease: "power3.out",
            scrollTrigger: {
                trigger: grid,
                start: "top 80%",
                toggleActions: "restart none restart none"
            }
        });
    });

    // --- 3. GLOBAL COUNTER-UP (.counter-up) ---
    const counters = document.querySelectorAll('.counter-up');
    counters.forEach((counter) => {
        const targetValue = parseFloat(counter.innerText);
        const suffix = counter.innerText.replace(/[0-9.]/g, ''); // Extract %, +, M, etc.

        // Reset text to 0 initially
        counter.innerText = "0" + suffix;

        gsap.to(counter, {
            innerText: targetValue,
            duration: 2,
            snap: { innerText: 1 }, // Steps by 1 (or 0.1 for decimals)
            ease: "power2.out",
            scrollTrigger: {
                trigger: counter,
                start: "top 90%",
                toggleActions: "restart none restart none",
            },
            onUpdate: function () {
                // Keep the suffix (%, M, +) during the count
                counter.innerText = Math.ceil(this.targets()[0].innerText) + suffix;
            }
        });
    });

    // --- 4. GLOBAL BUTTON REVEAL (.reveal-button) ---
    const buttons = document.querySelectorAll('.reveal-button');
    buttons.forEach((btn) => {
        gsap.from(btn, {
            y: 30,              // Rise up from below
            opacity: 0,
            scale: 0.8,         // Start slightly smaller
            duration: 2,
            ease: "back.out(1.7)", // The "Spring" effect
            scrollTrigger: {
                trigger: btn,
                start: "top 95%", // Trigger as soon as it nears the screen
                toggleActions: "restart none restart none"
            }
        });
    });

    // --- 5. FAQ LIST ITEMS (.reveal-faq-list .faq-item) ---
    gsap.from(".reveal-faq-list .faq-item", {
        y: 30,
        opacity: 0,
        stagger: 0.1,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".reveal-faq-list",
            start: "top 85%",
            toggleActions: "restart none restart none"
        }
    });

    // --- 6. GLOBAL IMAGE REVEAL & MAGNETIC TILT ---

    // 1. Entrance Reveal for all images
    const imageReveals = document.querySelectorAll('.corner__image-reveal');
    imageReveals.forEach((reveal) => {
        const img = reveal.querySelector('img');
        if (!img) return;

        gsap.from(img, {
            scale: 1.3,
            duration: 2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: reveal,
                start: "top 90%",
                toggleActions: "restart none restart none"
            }
        });
    });

    // 2. Magnetic Tilt for all cards
    const magneticCards = document.querySelectorAll('.corner__image-magnetic-animation');
    magneticCards.forEach((card) => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Calculate tilt based on mouse position
            const xPercent = (x / rect.width - 0.5) * 20; // Max tilt 20deg
            const yPercent = (y / rect.height - 0.5) * -20;

            gsap.to(card, {
                rotationY: xPercent,
                rotationX: yPercent,
                perspective: 1000,
                transformPerspective: 1000,
                ease: "power2.out",
                duration: 0.5
            });
        });

        card.addEventListener('mouseleave', () => {
            // Snap back to original position with an elastic bounce
            gsap.to(card, {
                rotationY: 0,
                rotationX: 0,
                ease: "elastic.out(1, 0.3)",
                duration: 1.5
            });
        });
    });

    // List item anim 
    const lists = document.querySelectorAll('.reveal-list');

    lists.forEach((list) => {
        const items = list.querySelectorAll('li');
        
        gsap.from(items, {
            scrollTrigger: {
                trigger: list,
                start: "top 85%", // Starts when the list is 85% from the top
                toggleActions: "restart none restart none"
            },
            y: 30,
            opacity: 0,
            blur: 10,
            stagger: 0.25, // Delay between each item
            duration: 1,
            ease: "expo.out",
            clearProps: "all" // Cleans up styles after animation
        });
        
        // Bonus: Animate the dots separately for a "Pop" effect
        const dots = list.querySelectorAll('span:first-child');
        gsap.from(dots, {
            scrollTrigger: { trigger: list, start: "top 85%" },
            scale: 0,
            rotation: 90,
            stagger: 0.15,
            duration: 0.6,
            ease: "back.out(2)"
        });
    });

    gsap.fromTo(".footer-logo img",
        { clipPath: "inset(100% 0% 0% 0%)", scale: 1.2 },
        {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            duration: 1.5,
            ease: "power4.out",
            scrollTrigger: {
                trigger: ".footer-logo",
                start: "top 90%",
                end: "bottom bottom",
                scrub: 1
            }
        }
    );

    // Stack Card Anim 
    // 3. Find all stacking wrappers on the page
        const wrappers = document.querySelectorAll('.gsap-pin-wrapper');

        wrappers.forEach((wrapper) => {
            const panels = wrapper.querySelectorAll('.gsap-pin-panel');
            
            ScrollTrigger.matchMedia({
                "(min-width: 1024px)": function() {
                    panels.forEach((panel) => {
                        ScrollTrigger.create({
                            trigger: panel,
                            start: "top 22%", // Adjust based on your header height
                            endTrigger: wrapper,
                            end: "bottom 85%",
                            pin: true,
                            pinSpacing: false,
                            scrub: true,
                            invalidateOnRefresh: true
                        });
                    });
                }
            });
        });
}