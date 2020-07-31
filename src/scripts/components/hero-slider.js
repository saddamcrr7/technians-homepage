import Swiper, {
  Navigation,
  Pagination,
  Controller,
  EffectFade,
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Controller, EffectFade]);

const heroNextSlider = new Swiper('.c-next-slider', {
  slidesPerView: 1,
  wrapperClass: 'c-next-slider__wrapper',
  slideClass: 'c-next-slider__item',
  slideActiveClass: 'c-next-slider__item--active',
  loop: true,
  allowTouchMove: false
})

const heroCountSlider = new Swiper('.c-count-slider', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'c-count-slider__wrapper',
  slideClass: 'c-count-slider__item',
  slideActiveClass: 'c-count-slider__item--active',
  loop: true,
  allowTouchMove: false
})

const heroProjectSlider = new Swiper('.c-project-slider', {
  fadeEffect: {
    crossFade: true
  },
  spaceBetween: 30,
  effect: 'fade',
  wrapperClass: 'c-project-slider__wrapper',
  slideClass: 'c-project-slider__item',
  slideActiveClass: 'c-project-slider__item--active',
  loop: true,
  allowTouchMove: false,
})

const heroImagesSlider = new Swiper('.c-iamges-slider', {
  slidesPerView: 1,
  wrapperClass: 'c-iamges-slider__wrapper',
  slideClass: 'c-iamges-slider__item',
  slideActiveClass: 'c-iamges-slider__item--active',
  loop: true,

  controller: {
    control: [heroNextSlider, heroCountSlider, heroProjectSlider],
    by: 'container'
  },
})
