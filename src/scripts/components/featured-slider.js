import Swiper, {
  Navigation,
} from 'swiper';

// configure Swiper to use modules
Swiper.use([Navigation]);


let companysSlider = new Swiper('.o-featured-work__companys-slider', {
  // freeMode: true,
  wrapperClass: 'o-featured-work__companys-slider-wrapper',
  slideClass: 'o-featured-work__company',
  slideActiveClass: 'o-featured-work__company--active',
  centeredSlides: true,
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  loop: true,

})


if (window.innerWidth > 1026) {
  if(companysSlider.initialized) {
    companysSlider.destroy();
  }
}
