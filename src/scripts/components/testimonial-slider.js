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
  autoplay: true,
})

const testimoniaAuthorslSlider = new Swiper('.o-testimonial__authors-slider', {
  slidesPerView: 'auto',
  centeredSlides: true,
  slideToClickedSlide: true,
  direction: 'horizontal',
  wrapperClass: 'o-testimonial__authors-slider-wrapper',
  slideClass: 'o-testimonial__authors',
  slideActiveClass: 'o-testimonial__authors--active',

  pagination: {
    el: '.o-testimonial__authors-slider-pagination',
    clickable: true,
  },
  breakpoints: {
    1024: {
      direction: 'vertical',
      allowTouchMove: false,
      slidesPerView: 1,
      autoplay: {
        delay: 10000,
      },
    },
  }
})



if (window.innerWidth < 1024) {
  testimoniaAuthorslSlider.removeAllSlides()

  authors.forEach((author, i) => {
    const div = document.createElement('div')
    div.classList.add('o-testimonial__authors')
    div.appendChild(author)
    testimoniaAuthorslSlider.appendSlide(div)
  })

  setTimeout(() => {
    testimoniaAuthorslSlider.update();
  }, 500)
}


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
