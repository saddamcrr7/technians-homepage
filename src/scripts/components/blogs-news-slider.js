import Swiper, {
  Navigation,
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation]);

let heroImagesSlider


const breakpoint = window.matchMedia('(max-width:768px)');

const breakpointChecker = function () {
  if (breakpoint.matches === true) {
    if (heroImagesSlider !== undefined) heroImagesSlider.destroy(true, true);
    return;
  } else if (breakpoint.matches === false) {
    return enableSwiper();
  }
};

const enableSwiper = function () {
  heroImagesSlider = new Swiper('.o-blogs-news__slider', {
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
};

breakpoint.addListener(breakpointChecker);


breakpointChecker();
