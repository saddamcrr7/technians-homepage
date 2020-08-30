import Swiper, {
  Controller,
  Autoplay,
  Pagination
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Controller, Pagination , Autoplay]);
const progressLine = document.querySelector('.c-progress-slider__line')

const workprogressslide = new Swiper(
  '.o-work__progress-slider .c-progress-slider__container', {
    direction: 'vertical',
    slidesPerView: 1,
    wrapperClass: 'c-progress-slider__wrapper',
    slideClass: 'c-progress-slider__item',
    slideActiveClass: 'c-progress-slider__item--active',
    allowTouchMove: false,
    loop: true,
  })


const workImageSlider = new Swiper('.o-work__image-slider', {
  slidesPerView: 1,
  wrapperClass: 'o-work__image-slider-wrapper',
  slideClass: 'o-work__image-slider-item',
  slideActiveClass: 'o-work__image-slider-item--active',
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  controller: {
    control: [workprogressslide],
    by: 'container'
  },
})

if (workImageSlider.initialized) {
  progressLine.classList.add('is-active')
}

workImageSlider.on('slideChange', (e) => {
  progressLine.classList.remove('is-active')
  setTimeout(() => {
    progressLine.classList.add('is-active')
  }, 20)
})

const cardsSlider =  new Swiper('.o-work__cards', {
  wrapperClass: 'o-work__cards-wrapper',
  slideClass: 'c-work-card',
  slideActiveClass: 'c-work-card--active',
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.o-work__cards-pagination',
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
    },
  }
})
