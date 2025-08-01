
// GSAP Timeline Animation for the wrapper reveal
const tl = gsap.timeline();

// 1. Animate the wrapper from a specific point using scaling
tl.to(".wrapper-buil", {
    duration: 0.7,
    scaleX: 1,             // Expand the wrapper horizontally from 0 to full width
    ease: "power3.out",    // Ease animation to make it smooth
})

// 2. Reveal the image by animating the .image-reveal div
.to(".image-reveal-buil", {
    duration: 0.8,
    scaleX: 0,             // Scale the red reveal div horizontally to 0 to reveal the image
    transformOrigin: "left",
    ease: "power2.out"
});0



const revealWrapper = document.querySelector('.reveal-wrapper');
const textWrapper = document.querySelector('.text-wrapper');

// First animate the width of the reveal-wrapper to show the text
revealWrapper.style.width = "auto";  // Adjust width of the wrapper based on content

gsap.to(textWrapper, {
  duration: 1.5,          // Animation duration
  opacity: 1,             // Fade in
  x: 0,                   // Move to the right (from -100px to 0)
  ease: 'power2.out',     // Ease the animation
  delay: 0.5              // Delay before starting
});


const revealWrapper1 = document.querySelector('.reveal-wrapper1');
const textWrapper1 = document.querySelector('.text-wrapper1');

// First animate the width of the reveal-wrapper to show the text
revealWrapper1.style.width = "auto";  // Adjust width of the wrapper based on content

gsap.to(textWrapper1, {
  duration: 1.5,          // Animation duration
  opacity: 1,             // Fade in
  x: 0,                   // Move to the right (from -100px to 0)
  ease: 'power2.out',     // Ease the animation
  delay: 0.5              // Delay before starting
});

const revealWrapper5 = document.querySelector('.reveal-wrapper4');
const textWrapper5 = document.querySelector('.text-wrapper4');

// First animate the width of the reveal-wrapper to show the text
revealWrapper5.style.width = "auto";  // Adjust width of the wrapper based on content

gsap.to(textWrapper5, {
  duration: 1.5,          // Animation duration
  opacity: 1,             // Fade in
  x: 0,                   // Move to the right (from -100px to 0)
  ease: 'power2.out',     // Ease the animation
  delay: 0.5              // Delay before starting
});




// Function to start the animation
function animateKeyFacts() {
    // Ensure initial width is 0 to prevent flicker
    revealWrapperkey.style.width = "0";
  
    // Animate width of the reveal-wrapper-key for a smooth effect
    gsap.to(revealWrapperkey, {
             
      width: "auto",         // Target width to reveal text
 
    });
  
    // Animate the text itself
    gsap.to(textWrapperkey, {
      duration: 1.5,         // Animation duration for text
      opacity: 1,            // Fade in
      y: 0,                  // Slide into view
      ease: 'power2.out',    // Smooth easing
      delay: 0.5             // Delay to allow width expansion first
    });
  }
  
  // Check if elements exist before observing
  const revealWrapperkey = document.querySelector('.reveal-wrapper-key');
  const textWrapperkey = document.querySelector('.text-wrapper-key');
  
  if (revealWrapperkey && textWrapperkey) {
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start the animation when the section is visible
          animateKeyFacts();
          observer.unobserve(entry.target);  // Stop observing once the animation starts
        }
      });
    }, {
      threshold: 0.1  // Adjusted threshold for earlier detection
    });
  
    // Start observing the element
    observer.observe(revealWrapperkey);
  } else {
    console.error("Animation elements not found in DOM.");
  }




  // Function to start the animation
function animateSustainability() {
    // Ensure initial width is 0 to prevent flicker
    revealWrappersus.style.width = "0";
  
    // Animate width of the reveal-wrapper-key for a smooth effect
    gsap.to(revealWrappersus, {
      width: "auto",         // Target width to reveal text
    });
  
    // Animate the text itself
    gsap.to(textWrappersus, {
      duration: 1.5,         // Animation duration for text
      opacity: 1,            // Fade in
      y: 0,                  // Slide into view
      ease: 'power2.out',    // Smooth easing
      delay: 0.5             // Delay to allow width expansion first
    });
  }
  
  // Check if elements exist before observing
  const revealWrappersus = document.querySelector('.reveal-wrapper-sus');
  const textWrappersus = document.querySelector('.text-wrapper-sus');
  
  if (revealWrappersus && textWrappersus) {
    // Create an Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Start the animation when the section is visible
          animateSustainability();
          observer.unobserve(entry.target);  // Stop observing once the animation starts
        }
      });
    }, {
      threshold: 0.1  // Adjusted threshold for earlier detection
    });
  
    // Start observing the element
    observer.observe(revealWrappersus);
  } else {
    console.error("Animation elements not found in DOM.");
  }
  
























// // all red container image revel

//     // Register the ScrollTrigger plugin with GSAP
//     gsap.registerPlugin(ScrollTrigger);

    

//     // Reveal animation using GSAP and ScrollTrigger
//     gsap.to(".image-reveal-ma", {
//         scrollTrigger: {
//             trigger: ".image-wrapper-ma",     // Trigger the animation when the .image-wrapper is in view
//             start: "top center",           // Start animation when .image-wrapper reaches center of viewport
//             end: "top 100px",              // End animation 100px from the top of the viewport
//             scrub: true,                   // Smooth scroll-based animation
//             markers: true                  // Enable markers for debugging (remove when not needed)
//         },
//         x: "100%",                        // Move the red container out to the left
//         duration: 1,                       // Duration of the animation
//         ease: "power2.out"                 // Easing function for the animati

//     });


    

    

 // GSAP Timeline Animation for the wrapper reveal with ScrollTrigger
 const t1 = gsap.timeline({
    scrollTrigger: {
        trigger: ".mask-container", // Element that triggers the animation
        start: "top 50%",           // Animation starts when the top of the element reaches 80% from the top of the viewport
        end: "top 30%",          // Animation ends when the bottom of the element reaches 60% from the top of the viewport
        // markers: true,              // Enable markers to see trigger points for debugging (remove this after debugging)
        toggleActions: "play none none none" // Play the animation on scroll, no other actions (restart, reverse, pause)
    }
});

// 1. Animate the wrapper from a specific point using scaling
tl.to(".wrapper", {
    duration: 1.5,
    scaleX: 1,             // Expand the wrapper horizontally from 0 to full width
    ease: "power3.out",    // Ease animation to make it smooth
})

// 2. Reveal the image by animating the .image-reveal div
.to(".image-reveal", {
    duration: 1,
    scaleX: 0,             // Scale the red reveal div horizontally to 0 to reveal the image
    transformOrigin: "left",
    ease: "power2.out"
});




   // all red container image revel
   
   













  
 // Home page slider 1 //

// $(document).ready(function(){
//     $('.slider-1').slick({
//         dots: true,
//         infinite: true,
//         speed: 300,
//         autoplay: true,
//         arrows: false,
//         autoplaySpeed: 5000,
//         cssEase:"cubic-bezier(0.2, 0.4, 0.4, 0.9)",
//         swipeToSlide: true,
//         accessibility: true
//     });
// });
 // Home page slider 1 //















/* --------------------------------- multi slider carausal with text ---------------- */
/* --------------------------------- multi slider carausal with text ---------------- */


    
    $(document).ready(function(){
    var $slickElement = $('.slick-slider');

    $slickElement.on('init reInit afterChange', function(event, slick, currentSlide){
        var i = (currentSlide ? currentSlide : 0) + 1;
        $('#current-slide').text(i);
        $('#total-slides').text(slick.slideCount);
    });

    $slickElement.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev custom-prev-arrow"><img src="assets/images/btn-arrow-left.svg" alt="Left Arrow"></button>',
        nextArrow: '<button type="button" class="slick-next custom-next-arrow"><img src="assets/images/btn-arrow-right.svg" alt="Left Arrow"></button>'
    });
});



    /* --------------------------------- multi slider carausal with text ---------------- */
/* --------------------------------- multi slider carausal with text ---------------- */




// main body animation 



 


       
