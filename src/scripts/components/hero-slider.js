import Swiper, {
  Navigation,
  Pagination,
  Controller,
  EffectFade,
  Autoplay
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Controller, EffectFade, Autoplay]);

const nextsliderElm = document.querySelector('.c-next-slider')
const imageSliderElm = document.querySelector('.c-iamges-slider')
const projectSliderElm = document.querySelector('.c-project-slider')
const progressLine = document.querySelector('.c-progress-slider__line')


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

const heroProgressSlider = new Swiper('.c-progress-slider__container', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'c-progress-slider__wrapper',
  slideClass: 'c-progress-slider__item',
  slideActiveClass: 'c-progress-slider__item--active',
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
  autoplay: {
    delay: 3000,
  },

  controller: {
    control: [heroNextSlider, heroCountSlider, heroProjectSlider,
      heroProgressSlider
    ],
    by: 'container'
  },
})

heroImagesSlider.on('slideChange', (e) => {
  progressLine.classList.remove('is-active')
  if (!heroImagesSlider.autoplay.running) return
  setTimeout(() => {
    progressLine.classList.add('is-active')
  }, 10)
})


window.addEventListener('load', (e) => {
  progressLine.classList.add('is-active')
})

nextsliderElm.addEventListener('click', (e) => {
  heroImagesSlider.slideNext()
})

imageSliderElm.addEventListener('mouseenter', () => {
  heroImagesSlider.autoplay.stop()
  progressLine.classList.remove('is-active')
})

imageSliderElm.addEventListener('mouseleave', () => {
  heroImagesSlider.autoplay.start()
  progressLine.classList.add('is-active')
})

nextsliderElm.addEventListener('mouseenter', () => {
  heroImagesSlider.autoplay.stop()
  progressLine.classList.remove('is-active')
})

nextsliderElm.addEventListener('mouseleave', () => {
  heroImagesSlider.autoplay.start()
  progressLine.classList.add('is-active')
})

projectSliderElm.addEventListener('mouseenter', () => {
  heroImagesSlider.autoplay.stop()
  progressLine.classList.remove('is-active')
})

projectSliderElm.addEventListener('mouseleave', () => {
  heroImagesSlider.autoplay.start()
  progressLine.classList.add('is-active')
})
