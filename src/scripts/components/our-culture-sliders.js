import Swiper, {
  Controller,
  Autoplay,

} from 'swiper';
// configure Swiper to use modules
Swiper.use([Controller, , Autoplay]);
import {
  gsap
} from "gsap";

import {
  ScrollTrigger
} from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);


const slide1 = new Swiper('.o-our-culture__slider--1', {
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
})

const slide2 = new Swiper('.o-our-culture__slider--2', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
})
const slide3 = new Swiper('.o-our-culture__slider--3', {
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
})
const slide4 = new Swiper('.o-our-culture__slider--4', {
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
})

const slide6 = new Swiper('.o-our-culture__slider--6', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
})
const slide7 = new Swiper('.o-our-culture__slider--7', {
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
})

const slide8 = new Swiper('.o-our-culture__slider--8', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  speed: 1000,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    waitForTransition: false,
  },

  controller: {
    control: [slide1, slide2, slide3, slide4, slide6, slide7, slide8],
    by: 'container'
  },
})


gsap.utils.toArray('.o-our-culture__slider').forEach(slider => {
  gsap.from(slider, {
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
      trigger: slider,
      toggleActions: "restart none none none"
    }
  })
})


gsap.from('.o-our-culture__title-bg-inner', {
  width: 0,
  height: 0,
  rotation: 100,
  duration: 1,
  scrollTrigger: {
    trigger: '.o-our-culture__title',
    toggleActions: "restart none none none"
  }
})

gsap.fromTo('.o-our-culture__title-bg-inner', {
  rotation: 0
}, {
  rotation: 8,
  repeat: -1,
  yoyo: true,
  duration: 1,
  delay: 1,
  scrollTrigger: {
    trigger: '.o-our-culture__title',
    toggleActions: "restart none none none"
  }
})
