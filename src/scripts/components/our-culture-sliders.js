import Swiper, {
  Controller,
  Autoplay
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Controller, , Autoplay]);


const slide1 = new Swiper('.o-our-culture__slider--1', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})

const slide2 = new Swiper('.o-our-culture__slider--2', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})
const slide3 = new Swiper('.o-our-culture__slider--3', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})
const slide4 = new Swiper('.o-our-culture__slider--4', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})
const slide5 = new Swiper('.o-our-culture__slider--5', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})
const slide6 = new Swiper('.o-our-culture__slider--6', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})
const slide7 = new Swiper('.o-our-culture__slider--7', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})

const slide8 = new Swiper('.o-our-culture__slider--8', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  controller: {
    control: [slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8],
    by: 'container'
  },
})
