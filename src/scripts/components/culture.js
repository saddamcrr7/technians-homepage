import Swiper from 'swiper'
import {
  gsap
} from "gsap";



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
