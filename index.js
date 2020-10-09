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
image.forEach(function(img) {
  img.addEventListener('mouseover', function() {
      img.childNodes[1].classList.add('img-darken');
  });
  img.addEventListener('mouseout', function() {
      img.childNodes[1].classList.remove('img-darken');
  });
});

///////////////////////// Footer rights ///////////
var date = new Date().getFullYear();
var currentYear = document.querySelector('.allrights');
currentYear.innerHTML = date;
var logoAni = gsap.from('.logo', {duration: 2.5, opacity: 0, scale:0.1, ease: 'back'})
//   gsap.registerPlugin(ScrollTrigger);

// if items not showing then show else remove
$(document).on('click','.navbar-collapse',function(e) {
  if( $(e.target).is('a:not(".dropdown-toggle")') ) {
      $(this).collapse('hide');
  }
});

$('.carousel').carousel({
  interval: 9000
})