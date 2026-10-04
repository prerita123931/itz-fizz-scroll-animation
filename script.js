gsap.registerPlugin(ScrollTrigger);

window.addEventListener("load", () => {

    const car = document.getElementById("car");
    const trail = document.getElementById("trail");
    const letters = gsap.utils.toArray(".headline-letter");

    // -----------------------------
    // INTRO ANIMATION
    // -----------------------------

    const intro = gsap.timeline();

    intro.fromTo(
        ".headline-letter",
        {
            opacity: 0,
            y: -25
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.7,
            stagger: 0.05,
            ease: "power3.out"
        }
    );

    intro.fromTo(
        ".stat-card",
        {
            opacity: 0,
            y: 25
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            stagger: 0.15,
            ease: "power2.out"
        },
        "-=0.3"
    );


    // -----------------------------
    // CAR SCROLL ANIMATION
    // -----------------------------

    const carWidth = car.getBoundingClientRect().width;

    const maxX = window.innerWidth - carWidth;


    gsap.to(car, {
        x: maxX,
        ease: "none",

        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    });


    // -----------------------------
    // GREEN TRAIL
    // -----------------------------

    gsap.to(trail, {
        width: maxX + carWidth / 2,
        ease: "none",

        scrollTrigger: {
            trigger: ".hero-section",
            start: "top top",
            end: "bottom bottom",
            scrub: 1
        }
    });


    ScrollTrigger.refresh();
});