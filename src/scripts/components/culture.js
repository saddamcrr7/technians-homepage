import Swiper from 'swiper'
import {
  gsap
} from "gsap";



var mX, mY, distance,
  $element = $('.o-culture__images-slider-item');

function calculateDistance(elem, mouseX, mouseY) {
  return {
    y: Math.floor(
      Math.sqrt(
        Math.pow(mouseY - (elem.offset().top + (elem.height() / 2)), 2)
      )
    ) - Math.round(elem.width() / 2),
    x: Math.floor(
      Math.sqrt(
        Math.pow(mouseX - (elem.offset().left + (elem.width() / 2)), 2)
      )
    ) - Math.round(elem.width() / 2),
  }
}


$element.each(function (i) {
  $(document).mousemove((e) => {
    mX = e.pageX;
    mY = e.pageY;
    let d = calculateDistance($(this), mX, mY)

    if (d.x < 0 && d.y < 0) {
      console.log(-d.y);
      gsap.from($(this), {
        rotate: 0,
        skewX: -(d.y / 100),
        duration: 5
      })
      $(this).mouseleave(() => {
        gsap.from($(this), {
          skewX: -7,
          skewY: 5,
          duration: 5
        })

      })
    }
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
