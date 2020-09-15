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
console.log(date);

var currentYear = document.querySelector('.allrights');
currentYear.innerHTML = date;

var logoAni = gsap.from('.logo', {duration: 2.5, opacity: 0, scale:0.1, ease: 'back'})

//   gsap.registerPlugin(ScrollTrigger);












/// starting
let btn = document.querySelectorAll("button");
// const next = document.querySelector('.next');
let img = document.querySelector('.firstPic');
let btnArr = Array.from(btn);
let current = [];

// let imges = [
//   {'./images/mike8.JPG',
//   './images/mike3.JPG'
//   }
// ];
const reviews = {
  image1:[
    './images/mike2.JPG',
    './images/mike3.JPG',
    './images/mike4.JPG']
  }
    


let currentItem = 0;
btnArr.map((el) => {
   el.addEventListener('click', function() {
     if(hasClass(el, className = 'first')) {
      console.log('Yey!')
        const item = reviews.image1[currentItem];
        img.src = item;
        const next = document.querySelector('.next');
        next.addEventListener('click', function() {
          currentItem++;
          console.log('clicking next');
        if (currentItem > reviews.image1.length - 1) {
            currentItem = 0;
          }
          showPerson(currentItem);
        });
     } else if(hasClass(el, className = 'second')) {
       console.log('I am second');
     }
  });
});



  function showPerson(person) {
    const item = reviews.image1[person];
    img.src = item;
    return item;
   
  }

// let num = 0;
// function showImage(person) {
//   num++;
//   const item = img1[person];
  
//   console.log(item);
// }



// showImage(img1);















/// function that will find true or false
function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}


