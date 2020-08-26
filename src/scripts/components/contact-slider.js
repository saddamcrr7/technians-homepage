import Swiper, {
  Navigation,
  Pagination
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination]);

const heroImagesSlider = new Swiper('.o-number__slider', {
  slidesPerView: '1',
  wrapperClass: 'o-number__slider-warapper',
  slideClass: 'o-number__slider-item',
  slideActiveClass: 'o-number__slider-item--active',
  navigation: {
    nextEl: '.o-number__slider-next',
    prevEl: '.o-number__slider-prev',
  },
  pagination: {
    el: '.o-number__slider-dots',
    clickable: true,
  },
})
