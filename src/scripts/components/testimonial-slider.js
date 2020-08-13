import getStyle from '../util/getStyle'

import Swiper, {
  Pagination,
  EffectFade,
  Autoplay
} from 'swiper';
// configure Swiper to use modules
Swiper.use([Pagination, EffectFade, Autoplay]);

const authors = document.querySelectorAll('.c-testimonial-author')

const testimonialSlider = new Swiper('.o-testimonial__slider', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-testimonial__wrapper',
  slideClass: 'o-testimonial__item',
  slideActiveClass: 'o-testimonial__item--active',
  allowTouchMove: false,
  autoplay: false,

  breakpoints: {
    1024: {
      autoplay: true,
    },

  }
})

const testimoniaAuthorslSlider = new Swiper('.o-testimonial__authors-slider', {
  direction: 'horizontal',
  slidesPerView: 'auto',
  wrapperClass: 'o-testimonial__authors-slider-wrapper',
  slideClass: 'o-testimonial__authors',
  slideActiveClass: 'o-testimonial__authors--active',
  freeMode: true,
  autoplay: false,
  pagination: {
    el: '.o-testimonial__authors-slider-pagination',
    clickable: true,
  },

  breakpoints: {
    1024: {
      direction: 'vertical',
      slidesPerView: 1,
      freeMode: false,
      autoplay: {
        delay: 19000
      },
      allowTouchMove: false,
    },

  }
})

const p = document.querySelector('.o-testimonial__authors-slider')
testimonialSlider.on('slideChange', function () {
  authors.forEach(author => {
    author.classList.remove('is-active')
  })

  authors[testimonialSlider.activeIndex].classList.add('is-active')

});

authors.forEach((author, i) => {
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
