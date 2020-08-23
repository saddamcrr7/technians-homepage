import Swiper, {
  Controller,
  Autoplay,

} from 'swiper';
// configure Swiper to use modules
Swiper.use([Controller, , Autoplay]);


const slide1 = new Swiper('.o-our-culture__slider--1', {
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})

const slide2 = new Swiper('.o-our-culture__slider--2', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})
const slide3 = new Swiper('.o-our-culture__slider--3', {
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})
const slide4 = new Swiper('.o-our-culture__slider--4', {
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})

const slide6 = new Swiper('.o-our-culture__slider--6', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})
const slide7 = new Swiper('.o-our-culture__slider--7', {
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,
})

const slide8 = new Swiper('.o-our-culture__slider--8', {
  direction: 'vertical',
  slidesPerView: 1,
  wrapperClass: 'o-our-culture__slider-wrapper',
  slideClass: 'o-our-culture__slider-item',
  slideActiveClass: 'o-our-culture__slider-item--active',
  allowTouchMove: false,
  loop: true,

  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },

  controller: {
    control: [slide1, slide2, slide3, slide4, slide6, slide7, slide8],
    by: 'container'
  },
})




  const controller = new ScrollMagic.Controller()

  const t1 = new TimelineMax()

  t1.from('.o-our-culture__slider--1', 0.5, {
    opacity: 0,
    y: 50
  })


  new ScrollMagic.Scene({
    triggerElement: ".o-our-culture__slider--1",
    triggerHook: 'onEnter', offset: 203
  }).setTween(t1).addTo(controller);

  const t2 = new TimelineMax()

  t2.from('.o-our-culture__slider--2', 0.5, {
    opacity: 0,
    y: 50
  })


  new ScrollMagic.Scene({
    triggerElement: ".o-our-culture__slider--2",
    triggerHook: 'onEnter', offset: 203
  }).setTween(t2).addTo(controller);

  const t3 = new TimelineMax()

  t3.from('.o-our-culture__slider--3', 0.5, {
    opacity: 0,
    y: 50
  }, 0.2)


  new ScrollMagic.Scene({
    triggerElement: ".o-our-culture__slider--3",
    triggerHook: 'onEnter', offset: 203
  },).setTween(t3).addTo(controller);


  const t4 = new TimelineMax()

  t4.from('.o-our-culture__slider--4', 0.5, {
    opacity: 0,
    y: 50
  }, 0.4)


  new ScrollMagic.Scene({
    triggerElement: ".o-our-culture__slider--4",
    triggerHook: 'onEnter', offset: 203
  }).setTween(t4).addTo(controller);


  const t6 = new TimelineMax()

  t6.from('.o-our-culture__slider--6', 0.5, {
    opacity: 0,
    y: 50
  })


  new ScrollMagic.Scene({
    triggerElement: ".o-our-culture__slider--6",
    triggerHook: 'onEnter', offset: 203
  }).setTween(t6).addTo(controller);


  const t7 = new TimelineMax()

  t7.from('.o-our-culture__slider--7', 0.5, {
    opacity: 0,
    y: 50
  })


  new ScrollMagic.Scene({
    triggerElement: ".o-our-culture__slider--7",
    triggerHook: 'onEnter', offset: 203
  }).setTween(t7).addTo(controller);


  const t8 = new TimelineMax()

  t8.from('.o-our-culture__slider--8', 0.5, {
    opacity: 0,
    y: 50
  },0.2)


  new ScrollMagic.Scene({
    triggerElement: ".o-our-culture__slider--8",
    triggerHook: 'onEnter', offset: 203
  }).setTween(t8).addTo(controller);



  const t9 = new TimelineMax()

  t9.from('.o-our-culture__title-bg-inner', 0.5, {
    width: 0,
    height: 0,
    rotation: 200
  })



  new ScrollMagic.Scene({
    triggerElement: ".o-our-culture__title",
    triggerHook: 'onEnter', offset: 250
  }).setTween(t9).addTo(controller);


  const t10 = new TimelineMax()

  t10.to('.o-our-culture__title-bg-inner', 1, {rotation: 8, repeat: -1, yoyo: true, ease: Linear.easeInOut}, 0.55)

  new ScrollMagic.Scene({
    triggerElement: ".o-our-culture__title",
    triggerHook: 'onEnter', offset: 250
  }).setTween(t10).addTo(controller);
