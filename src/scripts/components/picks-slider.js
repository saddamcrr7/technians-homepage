import Swiper, {
  Navigation,
  Autoplay
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Autoplay]);

const heroImagesSlider = new Swiper('.o-picks__slider', {
  slidesPerView: 'auto',
  freeMode: true,
  spaceBetween: 15,
  wrapperClass: 'o-picks__slider-wrapper',
  slideClass: 'o-picks__slider-item',
  slideActiveClass: 'o-picks__slider-item--active',
  autoplay: true,
  navigation: {
    nextEl: '.o-picks__slider-arrow--next',
    prevEl: '.o-picks__slider-arrow--prev',
  },
})
