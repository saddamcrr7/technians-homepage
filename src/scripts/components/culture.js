import Swiper,{A11y} from 'swiper'
Swiper.use([A11y]);


var mX, mY, distance,
  $element = $('.o-culture__images-slider-item');

function calculateDistance(elem, mouseX, mouseY) {
  return Math.floor(Math.sqrt(Math.pow(mouseX - (elem.offset().left + (elem
    .width() / 2)), 2) + Math.pow(mouseY - (elem.offset().top + (elem
    .height() / 2)), 2)));
}



$element.each(function (i) {
  $(document).mousemove( (e)=> {
    mX = e.pageX;
    mY = e.pageY;
    let d = calculateDistance($(this), mX, mY)
    if(d < 300){
      console.log($(this));

    }
  });
});

const cultureSlider = new Swiper('.o-culture__images-slider', {
  wrapperClass: 'o-culture__images-slider-wrapper',
  slideClass: 'o-culture__images-slider-item',
  slidesPerView: 'auto',
  loop: true,
  freeMode: true,
  touchRatio: 0.7,
})
const images = document.querySelectorAll('.o-culture__image')

cultureSlider.on('touchMove', function (e) {
  let diff = -(cultureSlider.touches.diff / 6)
  images.forEach(image => {
    image.style.transform = `translateX(${diff}px)`
    image.style.transition = '0.3s cubic-bezier(0.63, 0.09, 0.58, 1.04) 0s'
  })
});


cultureSlider.on('touchEnd', function (e) {
  images.forEach(image => {
    image.style.transform = `translateX(0px)`

    image.style.transition = '2s cubic-bezier(0.63, 0.09, 0.58, 1.04) 0s'

  })
});
