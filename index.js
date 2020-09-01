  $(function() {
    var scroll = $(document).scrollTop();
    // var navHeight = $('.navigation').outerHeight();
    $(window).scroll(function() {
        var scrolled = $(document).scrollTop();
        if(scrolled > 20) {
            $('nav').addClass('nav-border');
        } else {
            $('nav').removeClass('nav-border');
        }
        if(scrolled > scroll) {
            $('.navigation').removeClass('sticky');
        } else {
            $('.navigation').addClass('sticky');
        }
        scroll = $(document).scrollTop();
    })
})
// nav-border




// let border = document.querySelectorAll('nav');
// console.log(border);
// document.addEventListener("scroll", e => {
//     var scrolled = document.scrollingElement.scrollTop;
//     if (scrolled === 1) {
//         document.querySelector('nav').classList.remove('nav-border');
        
//     } else {
//         document.querySelector('nav').classList.add('nav-border');
//     }
//   });

const image = document.querySelectorAll('.portofolio-item-wrapper');

image.forEach(img => {
    img.addEventListener('mouseover', () => {
        img.childNodes[1].classList.add('img-darken');
    });
    img.addEventListener('mouseout', () => {
        img.childNodes[1].classList.remove('img-darken');
    });
});

  ///////////////////////// Footer rights ///////////
  let date = new Date().getFullYear();
  console.log(date);
  
  let currentYear = document.querySelector('.allrights');
  currentYear.innerHTML = date;

  gsap.from('.logo', {duration: 2.5, opacity: 0, scale:0.1, ease: 'back'})

//   gsap.registerPlugin(ScrollTrigger);

  gsap.to(".social-items li ion-icon", {
    duration: 1, 
    backgroundColor: "black", 
    padding: "10px",
    color: "white",
    borderRadius: "50%",
   
     scale:1, // make it bigger or smaller
     translate: -100,
     y:10,
    //  x:0,
    //  duration: 1008,
     opacity:10,
    scrollTrigger: {
      trigger: ".social-items li ion-icon",
      start: "95px bottom",
      end: "bottom",
      scrub: true,
      markers: false, /// will show markers on the UI, good for debbug
      id: "scrub",
      ease: "power2"
      
      
    //   scale: 1,opacity:-10,y:250,
    //   opacity: 0, scale:0.1, ease: 'back'
    }
    
//   ease: "none"
    
    
  });

//   gsap.from(".social-items li", 1, {scale: 0,opacity:0,y:100})