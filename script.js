AOS.init({
    duration: 1800,
    once: true
});

gsap.registerPlugin(ScrollTrigger);

gsap.to(".letreiro", {
    xPercent: -50,
    duration: 15,
    ease: "none",
    repeat: -1
});

const tl = gsap.timeline();

tl.to("#titulo", {
    scale: 1.2,
    duration: 1.5,
    ease: "power3.out"
})
.to(".hero-text", {
    opacity: 1,
    y: -10,
    duration: 0.8,
    stagger: 0.2
});

gsap.to(".obg1", {
    y: -40,
    x: 20,
    rotation: 180,
    duration: 3,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
});

gsap.to(".obg1", {
    x: -180,
    rotation: 360,
    ease: "none",
    scrollTrigger: {
        trigger: "#animacao",
        start: "top bottom",
        end: "bottom top",
        scrub: 1
    }
});

gsap.to(".obg2",{
    y:50,
    rotation: -180,
    duration:4,
    ease:"sine.inOut",
    repeat: -1,
    yoyo:true
})

gsap.to(".obg3",{
    x:-30,
    y: -30,
    rotation:360,
    
    duation:5,
    ease:"sine.inOut",
    repeat: -1,
    yoyo: true
})


gsap.to(".obg4",{
   y: -40,
    x: 20,
    rotation: 180,
    duration: 3,
    ease: "sine.inOut",
    repeat: -1,
    yoyo: true
})


gsap.from(".objeto-gsap", {
    scale: 0,
    opacity: 0,
    duration: 1,
    stagger: 0.2,
    ease: "back.out(1.7)",
    scrollTrigger: {
        trigger: "#animacao",
        start: "top 75%"
    }
});

gsap.to("#titulo",{
    scale: 3 ,
    opacity: 0 ,
    scrollTrigger:{
        trigger: ".hero",
        start: "top top",
        end: "+=1000",
        scrub: 1,
        pin: true
    }
})

gsap.fromTo(".texto",{
    xPercent: 50
},{
    xPercent: -100,
    scrollTrigger:{
        trigger:".texto",
        start:" top 60%",
        end: "bottom top",
        scrub:1


    }
}


)