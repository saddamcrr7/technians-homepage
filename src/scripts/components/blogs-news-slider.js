import Swiper, {
  Navigation,
  Autoplay
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Autoplay]);

const heroImagesSlider = new Swiper('.o-blogs-news__slider', {
  slidesPerView: 3,
  freeMode: true,
  wrapperClass: 'o-blogs-news__slider-wrapper',
  slideClass: 'o-blogs-news__slider-item',
  slideActiveClass: 'o-blogs-news__slider-item--active',
  navigation: {
    nextEl: '.o-blogs-news__slider-arrow--next',
    prevEl: '.o-blogs-news__slider-arrow--prev',
  },
})
