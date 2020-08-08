import HasClass from '../util/has-class'
import getStyle from '../util/getStyle'

const navbar = (X) => {
  const body = document.querySelector('body')
  const navbarElm = document.querySelector('.c-navbar')
  const toggler = navbarElm.querySelector('.c-navbar__toggler')
  const menu = navbarElm.querySelector('.c-navbar__menu')
  const menucontainer = navbarElm.querySelector('.c-navbar__menu-container')
  const mainContainer = document.querySelector('.o-main__container')
  const footerBg = document.querySelector('.o-footer__bg')

  toggler.addEventListener('click', () => {

    let Y = 1 / 100 * window.scrollY

    if (Y > 100) {
      Y = 100
    }

    const menucontainerWidth = getStyle(menucontainer).width
    const menucontainerHeight = getStyle(menucontainer).height
    if (!HasClass(navbarElm, 'is-active')) {
      navbarElm.classList.add('is-active')

      body.classList.add('is-nav-open')

      if (x.matches) {
        menu.style.height = menucontainerHeight
      } else {
        menu.style.width = menucontainerWidth
        mainContainer.style.transform = `scale(.5)`
        footerBg.style.transform = `scale(.5)`
        mainContainer.style.filter = 'blur(6px)'
        footerBg.style.filter = 'blur(6px)'
        mainContainer.style.transformOrigin = `100% ${Y}%`
      }

    } else {
      navbarElm.classList.remove('is-active')
      body.classList.remove('is-nav-open')

      if (x.matches) {
        menu.style.height = 0
      } else {
        menu.style.width = 0
        mainContainer.style.transform = `scale(1)`
        mainContainer.style.filter = 'blur(0)'
        footerBg.style.transform = `scale(1)`
        footerBg.style.filter = 'blur(0)'
      }
    }
  })


  const menuItems = menu.querySelectorAll('.c-navbar__item')
  const menuImages = navbarElm.querySelectorAll('.c-navbar__image')
  const menuItemBg = menu.querySelector('.c-navbar__item-bg')


  if (!x.matches) {
    menuItems.forEach((menuItem, i) => {
      menuItem.addEventListener('mouseenter', () => {
        menuItemBg.style.opacity = '1'
        menuImages[i].style.opacity = '1'
        if (i == 0) {
          menuItemBg.style.top = `${20}px`
        } else if (i == 1) {
          menuItemBg.style.top = `${108}px`
        } else if (i == 2) {
          menuItemBg.style.top = `${190}px`
        } else if (i == 3) {
          menuItemBg.style.top = `${280}px`
        } else if (i == 4) {
          menuItemBg.style.top = `${360}px`
        } else if (i == 5) {
          menuItemBg.style.top = `${445}px`
        } else if (i == 6) {
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
  }

  window.addEventListener('scroll', (e) => {
    if (window.scrollY > 10) {
      navbarElm.classList.add('is-scrolled')
    } else {
      navbarElm.classList.remove('is-scrolled')
    }
  })

}

let x = window.matchMedia("(max-width: 1024px)")
navbar(x)
x.addListener(navbar)
