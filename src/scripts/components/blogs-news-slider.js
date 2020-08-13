import Swiper, {
  Navigation,
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation]);

let  heroImagesSlider = new Swiper('.o-blogs-news__slider', {
    freeMode: true,
    wrapperClass: 'o-blogs-news__slider-wrapper',
    slideClass: 'o-blogs-news__slider-item',
    slideActiveClass: 'o-blogs-news__slider-item--active',
    navigation: {
      nextEl: '.o-blogs-news__slider-arrow--next',
      prevEl: '.o-blogs-news__slider-arrow--prev',
    },
    breakpoints: {
      375: {
        slidesPerView: 1.59,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2.5,
      },
      1024: {
        slidesPerView: 4,
      },
      1600: {
        slidesPerView: 3,
      },
    }
  })
