import './components/navbar'
import './components/hero-slider'
import './components/testimonial-slider'
import './components/blogs-news-slider'
import './components/picks-slider'
import './components/featured-slider'
import './components/culture'
import './components/work-slider'
import './components/our-culture-sliders'
import './components/contact-slider'
import './components/check-box'
import './components/contact-us'

const creativeCard1 = document.querySelector('.o-creative-studio__card--1')
const creativeCard2 = document.querySelector('.o-creative-studio__card--2')
const creativeCard3 = document.querySelector('.o-creative-studio__card--3')

if(creativeCard1) {
  const creativeCard = (x) => {
    creativeCard2.addEventListener('mouseover', (e) => {
      if (x.matches) {
        creativeCard1.style.transform = 'translateX(-90%)'
      } else {
        creativeCard1.style.transform = 'translateX(-57%)'
      }
    })

    creativeCard2.addEventListener('mouseout', (e) => {
      creativeCard1.style.transform = 'translateX(0%)'
    })

    creativeCard3.addEventListener('mouseover', (e) => {
      if (x.matches) {
        creativeCard1.style.transform = 'translateX(-90%)'
        creativeCard2.style.transform = 'translateX(-220%)'
      } else {
        creativeCard1.style.transform = 'translateX(-57%)'
        creativeCard2.style.transform = 'translateX(-136%)'
      }
    })

    creativeCard3.addEventListener('mouseout', (e) => {
      creativeCard1.style.transform = 'translateX(0%)'
      if (x.matches) {
        creativeCard2.style.transform = 'translateX(-128%)'
      } else {
        creativeCard2.style.transform = 'translateX(-70%)'

      }
    })
  }


let x = window.matchMedia("(max-width: 765px)")
creativeCard(x)
x.addListener(creativeCard)

}


const creativeSction = document.querySelector('.o-creative-studio')

if(creativeSction) {
  window.addEventListener('scroll', () => {
    if (window.scrollY > (creativeSction.offsetTop - window.innerHeight) +
      200) {
      creativeSction.classList.add('is-scrolled')
    } else {
      creativeSction.classList.remove('is-scrolled')
    }
  })
}



const featuredCompanys = document.querySelectorAll('.o-featured-work__company')
const featuredImages = document.querySelectorAll('.o-featured-work__box-image')
const featureddetails = document.querySelectorAll('.o-featured-work__detail')

featuredCompanys.forEach((featuredCompany) => {
  featuredCompany.addEventListener('mouseenter', () => {
    let i = featuredCompany.dataset.index
    featuredImages.forEach(featuredImage => {
      featuredImage.style.opacity = '0'
      featuredImage.style.transform = ''
    })
    featureddetails.forEach(featureddetail => {
      featureddetail.style.opacity = '0'
    })
    featureddetails[i].style.opacity = '1'
    featuredImages[i].style.opacity = '1'
    featuredImages[i].style.transform = 'scale(1)'
  })
})


const scrollDownBtn = document.querySelector('.o-hero__scroll')

if(scrollDownBtn) {
  scrollDownBtn.addEventListener('click', () => {
    window.scrollTo(0, window.innerHeight)
  })
}

