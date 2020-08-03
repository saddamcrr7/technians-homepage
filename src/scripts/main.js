import './components/navbar'
import './components/hero-slider'

const creativeCard1 = document.querySelector('.o-creative-studio__card--1')
const creativeCard2 = document.querySelector('.o-creative-studio__card--2')
const creativeCard3 = document.querySelector('.o-creative-studio__card--3')

creativeCard2.addEventListener('mouseover', (e) => {
  creativeCard1.style.transform = 'translateX(-57%)'
})
creativeCard2.addEventListener('mouseout', (e) => {
  creativeCard1.style.transform = 'translateX(0%)'
})

creativeCard3.addEventListener('mouseover', (e) => {
  creativeCard1.style.transform = 'translateX(-57%)'
  creativeCard2.style.transform = 'translateX(-136%)'
})

creativeCard3.addEventListener('mouseout', (e) => {
  creativeCard1.style.transform = 'translateX(0%)'
  creativeCard2.style.transform = 'translateX(-70%)'
})
