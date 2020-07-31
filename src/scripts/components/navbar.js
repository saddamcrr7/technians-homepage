import HasClass from '../util/has-class'
import getStyle from '../util/getStyle'

const navbarElm = document.querySelector('.c-navbar')
const toggler = navbarElm.querySelector('.c-navbar__toggler')
const menu = navbarElm.querySelector('.c-navbar__menu')
const menucontainer = navbarElm.querySelector('.c-navbar__menu-container')
const mainContainer = document.querySelector('.o-main__container')

toggler.addEventListener('click', () => {
  const menucontainerWidth = getStyle(menucontainer).width
  if (!HasClass(navbarElm, 'is-active')) {
    navbarElm.classList.add('is-active')
    menu.style.width = menucontainerWidth
    mainContainer.style.transform = `scaleX(.5)`
    mainContainer.style.filter = 'blur(20px)'
  } else {
    navbarElm.classList.remove('is-active')
    menu.style.width = 0
    mainContainer.style.transform = `scaleX(1)`
    mainContainer.style.filter = 'blur(0)'
  }
})


const menuItems = menu.querySelectorAll('.c-navbar__item')
const menuImages = navbarElm.querySelectorAll('.c-navbar__image')
const menuItemBg = menu.querySelector('.c-navbar__item-bg')

menuItems.forEach((menuItem , i) => {
  menuItem.addEventListener('mouseenter', () => {
    menuItemBg.style.opacity = '1'
    menuImages[i].style.opacity = '1'
    if (i == 0) {
      menuItemBg.style.top = `${20}px`
    }else if(i == 1) {
      menuItemBg.style.top = `${108}px`
    }
    else if(i == 2) {
      menuItemBg.style.top = `${190}px`
    }
    else if(i == 3) {
      menuItemBg.style.top = `${280}px`
    }
    else if(i == 4) {
      menuItemBg.style.top = `${360}px`
    }
    else if(i == 5) {
      menuItemBg.style.top = `${445}px`
    }
    else if(i == 6) {
      menuItemBg.style.top = `${530}px`
    }
  })

  menuItem.addEventListener('mouseleave', () => {
    menuImages.forEach(menuImage => {
      menuImage.style.opacity = '0'
    })
    menuItemBg.style.opacity = '0'
  })
})
