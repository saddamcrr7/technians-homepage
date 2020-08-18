import Swiper from 'swiper'
import {
  gsap
} from "gsap";



var mX, mY, distance,
  $element = $('.o-culture__images-slider-item');

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem
    .width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem
    .height() / 2)), 2)));
}



$element.each(function (i) {
  $(document).mousemove((e) => {
    mX = e.pageX;
    mY = e.pageY;
    let d = calculateDistance($(this), mX, mY)
    // gsap.to($(this), {skewX :-(d / 100) * 7, skewY : (d / 100) * 4, duration: 1})
  });
});

const cultureSlider = new Swiper('.o-culture__images-slider', {
  wrapperClass: 'o-culture__images-slider-wrapper',
  slideClass: 'o-culture__images-slider-item',
  slidesPerView: 'auto',
  speed: 5000,
  freeMode: true,
  loop: true,
  touchRatio: 1.5
})
const images = document.querySelectorAll('.o-culture__image')

cultureSlider.on('touchMove', function (e) {
  let diff = -(cultureSlider.touches.diff / 5)
  images.forEach(image => {
    gsap.to(image, {
      x: diff,
      duration: 1
    })
  })
});

cultureSlider.on('touchEnd', function (e) {
  images.forEach(image => {
    gsap.to(image, {
      x: 0,
      duration: 5
    })
  })
});
