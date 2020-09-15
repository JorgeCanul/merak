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
const next1 = document.querySelector('.next1');
const next2 = document.querySelector('.next2');
const next3 = document.querySelector('.next3');
const next4 = document.querySelector('.next4');
const next5 = document.querySelector('.next5');
const next6 = document.querySelector('.next6');
const next7 = document.querySelector('.next7');
const next8 = document.querySelector('.next8');

// let btnClose1 = document.querySelector('.close1');
let btnArr = Array.from(btn);

let img1 = document.querySelector('.firstPic');
let img2 = document.querySelector('.secondPic');
let img3 = document.querySelector('.thirdPic');
let img4 = document.querySelector('.fourthPic');
let img5 = document.querySelector('.fivePic');
let img6 = document.querySelector('.sixPic');
let img7 = document.querySelector('.sevenPic');
let img8 = document.querySelector('.eigthPic');


const pictues1 = {
  image1:[
    './images/mike2.JPG', 
    './images/mike3.JPG',
    './images/mike4.JPG']
  }

  const pictues2 = {
    image2:[
      './images/mike10.JPG'
      ]
  }


  const pictues3 = {
    image3:[
      './images/mike4.JPG'
      ]
  }

  const pictues4 = {
    image4:[
      './images/mike5.JPG'
      ]
  }

  const pictues5 = {
    image5:[
      './images/mike6.JPG'
     ]
  }

  const pictues6 = {
    image6:[
      './images/mike7.JPG'
      ]
  }

  const pictues7 = {
    image7:[
      './images/mike8.JPG'
      ]
  }
      
  const pictues8 = {
    image8:[
      './images/mike12.JPG'
      ]
  }

 
    
let currentItem = 0;

const item1 = pictues1.image1[currentItem];
const item2 = pictues2.image2[currentItem];
const item3 = pictues3.image3[currentItem];
const item4 = pictues4.image4[currentItem];
const item5 = pictues5.image5[currentItem];
const item6 = pictues6.image6[currentItem];
const item7 = pictues7.image7[currentItem];
const item8 = pictues8.image8[currentItem];

btnArr.map((el) => {
   el.addEventListener('click', function() {
     if(hasClass(el, className = 'first')) {
        img1.src = item1;
     } else if(hasClass(el, className = 'second')) {
       img2.src = item2;
     } else if (hasClass(el, className = 'three')) {
      img3.src = item3;
     } else if (hasClass(el, className = 'four')) {
      img4.src = item4;
     } else if (hasClass(el , className = 'five')) {
      img5.src = item5;
     } else if (hasClass(el , className = 'six')) {
      img6.src = item6;
     } else if (hasClass(el , className = 'seven')) {
      img7.src = item7;
     } else if (hasClass(el, className = 'eight')) {
      img8.src = item8;
     }
  });
});

//// 1 ////
next1.addEventListener('click', function() {
  currentItem++;
  if(hasClass(img1, 'first')) {
    if (currentItem > pictues1.image1.length - 1) {
      currentItem = 0;
    }
    showItem1(currentItem);
  } 
});

//// 2 ////
next2.addEventListener('click', function() {
  currentItem++;
  if(hasClass(img2, 'second')) {
    if (currentItem > pictues2.image2.length - 1) {
      currentItem = 0;
    }
    showItem2(currentItem)
  } 
})

//// 3 ////
next3.addEventListener('click', function() {
  currentItem++;
  if(hasClass(img3, 'three')) {
    if (currentItem > pictues3.image3.length - 1) {
      currentItem = 0;
    }
    showItem3(currentItem)
  } 
})

//// 4 ////
next4.addEventListener('click', function() {
  currentItem++;
  if(hasClass(img4, 'four')) {
    if (currentItem > pictues4.image4.length - 1) {
      currentItem = 0;
    }
    showItem4(currentItem)
  } 
})

//// 5 ////
next5.addEventListener('click', function() {
  currentItem++;
  if(hasClass(img5, 'five')) {
    if (currentItem > pictues5.image5.length - 1) {
      currentItem = 0;
    }
    showItem5(currentItem)
  } 
})


//// 6 ////
next6.addEventListener('click', function() {
  currentItem++;
  if(hasClass(img6, 'six')) {
    if (currentItem > pictues6.image6.length - 1) {
      currentItem = 0;
    }
    showItem6(currentItem)
  } 
})

//// 7 ////
next7.addEventListener('click', function() {
  currentItem++;
  if(hasClass(img7, 'seven')) {
    if (currentItem > pictues7.image7.length - 1) {
      currentItem = 0;
    }
    showItem7(currentItem)
  } 
})

//// 8 ////
next8.addEventListener('click', function() {
  currentItem++;
  if(hasClass(img8, 'eight')) {
    if (currentItem > pictues8.image8.length - 1) {
      currentItem = 0;
    }
    showItem8(currentItem)
  } 
})

////// 1 //////////
  function showItem1(items) {
    let item1 = pictues1.image1[items];
    if(hasClass(img1, 'first') ) {
      img1.src = item1;
    } 
  }

  ////// 2 //////////
  function showItem2(items) {
    let item2 = pictues2.image2[items];
     if (hasClass(img2, 'second') ) {
      img2.src = item2;
    }
  }

  ////// 3 //////////
  function showItem3(items) {
    let item3 = pictues3.image3[items];
     if (hasClass(img3, 'three') ) {
      img3.src = item3;
    }
  }

  ////// 4 //////////
  function showItem4(items) {
    let item4 = pictues4.image4[items];
     if (hasClass(img4, 'four') ) {
      img4.src = item4;
    }
  }
   ////// 5 //////////
   function showItem5(items) {
    let item5 = pictues5.image5[items];
     if (hasClass(img5, 'five') ) {
      img5.src = item5;
    }
  }
  ////// 6 //////////
  function showItem6(items) {
    let item6 = pictues6.image6[items];
     if (hasClass(img6, 'six') ) {
      img6.src = item6;
    }
  }

  ////// 7 //////////
  function showItem7(items) {
    let item7 = pictues7.image7[items];
     if (hasClass(img7, 'seven') ) {
      img7.src = item7;
    }
  }

  ////// 8 //////////
  function showItem8(items) {
    let item8 = pictues8.image8[items];
     if (hasClass(img8, 'eight') ) {
      img8.src = item8;
    }
  }


function hasClass(element, className) {
  return (' ' + element.className + ' ').indexOf(' ' + className+ ' ') > -1;
}


////// Close btn //////
// btnClose1.addEventListener('click', function() {
//   if(hasClass(img1, 'first')) {
//     img1.src = item1;
//     console.log('CLosed one');
//   }
// });