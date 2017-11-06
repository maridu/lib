// Скрытие мобильного меню при клике на ссылку
var menuLinks = document.querySelectorAll('.nav__link');

for (var i = 0; i < menuLinks.length; i++) {
  var menuLink = menuLinks[i];
  var menuToggle = document.querySelector('#main-nav__toggle');
  menuLink.addEventListener('click', function() {
    menuToggle.checked = false;
  });
}


// Карусель на JS зацикленная (без анимации)

var list = document.querySelector('.carousel__list');
var slides = document.querySelectorAll('.carousel__item');

var indexOfFirst = 0;
var indexOfLast = slides.length - 1;

var firstSlide = slides[indexOfFirst];
var lastSlide = slides[indexOfLast];

var prevButton = document.querySelector('.prev');
var nextButton = document.querySelector('.next');

function scrollToPrev() {
  
  list.insertBefore(lastSlide, firstSlide);
    if (indexOfLast == 0) {
      indexOfLast = slides.length - 1;
    } else {
      indexOfLast -= 1;
    }
  lastSlide = slides[indexOfLast];
    if (indexOfFirst == 0) {
      indexOfFirst = slides.length - 1;
    } else {
      indexOfFirst -= 1;
    }
  firstSlide = slides[indexOfFirst];
}


function scrollToNext() {
  list.removeChild(firstSlide);
  list.appendChild(firstSlide);
  if (indexOfLast == slides.length - 1) {
      indexOfLast = 0;
    } else {
      indexOfLast += 1;
    }
  lastSlide = slides[indexOfLast];
    if (indexOfFirst == slides.length - 1) {
      indexOfFirst = 0;
    } else {
      indexOfFirst += 1;
    }
  firstSlide = slides[indexOfFirst];
}

prevButton.addEventListener('click', scrollToPrev);
nextButton.addEventListener('click', scrollToNext);