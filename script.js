gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  },
});

tl.to("#car", { left: "calc(99% - 400px)", duration: 10 }, 0);
tl.to("#trail", { width: "100%", duration: 10 }, 0);

tl.to(".letter", { 
  opacity: 1, 
  color: "#fff", 
  stagger: 0.5, 
  duration: 1 
}, 1);

tl.to(".box-primary", { opacity: 1, y: -20, duration: 2 }, 1)
  .to(".box-secondary", { opacity: 1, y: 20, duration: 2 }, 3)
  .to(".box-tertiary", { opacity: 1, y: -20, duration: 2 }, 5)
  .to(".box-quaternary", { opacity: 1, y: 20, duration: 2 }, 7);