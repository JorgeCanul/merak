


$(function() {
  var scroll = $(document).scrollTop();
  var navHeight = $('vav').outerHeight();
  $(window).scroll(function() {
      var scrolled = $(document).scrollTop();
      if(scrolled > 20) {
          $('nav').addClass('nav-border');
      } else {
          $('nav').removeClass('nav-border');
      }
    //   if(scrolled > scroll) {
    //       $('nav').addClass('sticky');
    //       console.log('scrolling');
    //   } else {
    //       $('nav').removeClass('sticky');
    //   }
      scroll = $(document).scrollTop();
  })
})

window.onscroll = function() {myFunction()};

var navbar = document.querySelector("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}


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

let logoAni = gsap.from('.logo', {duration: 2.5, opacity: 0, scale:0.1, ease: 'back'})

//   gsap.registerPlugin(ScrollTrigger);
