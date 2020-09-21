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

///////////////////////////////////////////////////////
const dataController = (function() {
  function Image(id, image) {
    this.id = id;
    this.image = image;
  }

  let data = {
    idOne:{
      img1: './images/mike2.JPG',
    },
    idTwo: {
      img2: './images/mike10.JPG'
    }
  }


  return {
    getItem: function(id) {
      let img;
      if(id === 'first') {
        img = data.idOne.img1;
      } else if (id === 'second') {
        img = data.idTwo.img2;
      }
      // data.allItems.push(newItem);
      return img;
    },

    getItems: function() {
      return {
        imag1: data.idOne.img1,
        imag2: data.idTwo.img2
      }
    },

    testing: function() {
      return data;
    }
  }
})();

///////////////////////////////////////////////////////
const itemController = (function() {
  let DomStrings = {
    // generalItem: '.first',
    container: '.popOut'
  }

  return {
    addItemUi: function(obj) {
      let element, html, newHtml;
      element = DomStrings.container;
      html = `<div class="modal fade" id="first" tabindex="-1" role="dialog" aria-labelledby="myModalLabel"aria-hidden="true">\n\
      <div class="modal-dialog cascading-modal" role="document">\n\
        <!--Content-->\n\
        <div class="modal-content">\n\
          <!--Header-->\n\
          <div class="modal-header light-blue darken-3 white-text">\n\
            <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>\n\
          </div>\n\
          <!--Body-->\n\
          <div class="modal-body mb-0 text-center">\n\
                 <img src="${obj.imag1}"  class="card-img-top firstPic first" alt="...">\n\
             <div class="mt-2" aria-label="Page navigation example">\n\
                 <ul class="pagination center">\n\
                   <li class="page-item">\n\
                     <a class="page-link prev" aria-label="Previous">\n\
                       <span aria-hidden="true">&laquo;</span>\n\
                     </a>\n\
                   </li>\n\
                   <li class="page-item">  \n\
                     <a class="page-link next1"  aria-label="Next">\n\
                       <span aria-hidden="true">&raquo;</span>\n\
                     </a>\n\
                   </li>\n\
                 </ul>\n\
               </div>\n\
                <!-- <hr> -->\n\
                <div class="survey-footer clearfix">\n\
                    <!-- <i class="fa fa-paper-plane ml-1"></i> -->\n\
                </div>\n\
          </div>\n\
        </div>\n\
      </div>\n\
      </div>`;
      document.querySelector(element).insertAdjacentHTML('beforeend', html);
    },

    getDOMPublic: function() {
      return DomStrings;
    }
  }

})();

///////////////////////////////////////////////////////
const mainController = (function(dataCtrl, itemCtrl) {

  function addEventListeners() {
   let btn =  document.querySelectorAll('button');
   let arrBtn = Array.from(btn);
   arrBtn.forEach(el => {
    el.addEventListener('click', function(e) {
      let id;
      if(e.path[2].classList[0] === 'first') {
        id = 'first';
        dataCtrl.getItem(id);
      } else if(e.path[2].classList[0] === 'second') {
        id = 'second';
        dataCtrl.getItem(id);
      }
      addItem();
    })
   });
   
  }

  function addItem() {
    let images = dataCtrl.getItems();
    itemCtrl.addItemUi(images);

  }
  return {
    init: function() {
      addEventListeners();
    }
  }
})(dataController, itemController);
mainController.init();