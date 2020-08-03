import Swiper, {
  Navigation,
  Pagination,
  Controller,
  EffectFade,
  Autoplay
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Controller, EffectFade, Autoplay]);

const testimonialSlider = new Swiper('.o-testimonial__slider', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-testimonial__wrapper',
  slideClass: 'o-testimonial__item',
  slideActiveClass: 'o-testimonial__item--active',
  // allowTouchMove: false
  pagination: {
    el: '.o-testimonial__slider-pagination',
    clickable: true,
  },
})
