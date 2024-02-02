gsap.to(".hero-img", { 
    duration: 1.5,
        y: -20,
        repeat: -1,
        yoyo: true
    });

gsap.to(".particle-purple", { 
        duration: gsap.utils.random(1.5,3),
            y: gsap.utils.random(-70, 20),
            x: gsap.utils.random(-70, 20),
            scale: gsap.utils.random(0.2, 2),
            repeat: -1,
            yoyo: true
    });

gsap.to(".particle-blue", { 
        duration: gsap.utils.random(1.5,3),
            y: gsap.utils.random(-70, 20),
            x: gsap.utils.random(-70, 20),
            scale: gsap.utils.random(0.2, 2),
            repeat: -1,
            yoyo: true
});

gsap.to(".particle-pink", { 
    duration: gsap.utils.random(1.5,3),
        y: gsap.utils.random(-70, 20),
        x: gsap.utils.random(-70, 20),
        scale: gsap.utils.random(0.2, 2),
        repeat: -1,
        yoyo: true
});