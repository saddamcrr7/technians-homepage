import getStyle from '../util/getStyle'

import Swiper, {
  Pagination,
  EffectFade,
  Autoplay
} from 'swiper';
// configure Swiper to use modules
Swiper.use([ Pagination, EffectFade, Autoplay]);

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

const p = document.querySelector('.o-testimonial__authors')

testimonialSlider.on('slideChange', function () {
  authors.forEach(author => {
    author.classList.remove('is-active')
  })

  authors[testimonialSlider.activeIndex].classList.add('is-active')
  let authorWidth = getStyle(authors[testimonialSlider.activeIndex]).width.replace(/[^0-9\.]+/g,"")
  p.scrollTo(testimonialSlider.activeIndex * Number(authorWidth) + 40 ,0)
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
