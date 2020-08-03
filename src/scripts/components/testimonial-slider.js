import Swiper, {
  Navigation,
  Pagination,
  Controller,
  EffectFade,
  Autoplay
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Navigation, Pagination, Controller, EffectFade, Autoplay]);

const authors = document.querySelectorAll('.c-testimonial-author')

const testimonialSlider = new Swiper('.o-testimonial__slider', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-testimonial__wrapper',
  slideClass: 'o-testimonial__item',
  slideActiveClass: 'o-testimonial__item--active',
  allowTouchMove: false,
  autoplay: true,
  pagination: {
    el: '.o-testimonial__slider-pagination',
    clickable: true,
  },
})

testimonialSlider.on('slideChange', function () {
  authors.forEach(author => {
    author.classList.remove('is-active')
  })

  authors[testimonialSlider.activeIndex].classList.add('is-active')
});

authors.forEach((author,i)  => {
  author.addEventListener('click', () => {
    authors.forEach(author => {
      author.classList.remove('is-active')
    })
    testimonialSlider.slideTo(i);
    authors[testimonialSlider.activeIndex].classList.add('is-active')
  })

  author.addEventListener('mouseenter', () => {
    testimonialSlider.autoplay.stop()
  })

  author.addEventListener('mouseleave', () => {
    testimonialSlider.autoplay.start()
  })
})
