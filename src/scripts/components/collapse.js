import HasClass from '../util/has-class'

const collpaseElms = document.querySelectorAll('.c-collapse')

collpaseElms.forEach(collpaseElm => {
  const toggler = collpaseElm.querySelector('.c-collapse__icon')
  const body = collpaseElm.querySelector('.c-collapse__body')
  const inner = collpaseElm.querySelector('.c-collapse__texts')

  if (HasClass(collpaseElm, 'is-active')) {
    body.style.height = `${inner.offsetHeight}px`
  }

  toggler.addEventListener('click', () => {
    if (HasClass(collpaseElm, 'is-active')) {
      collpaseElm.classList.remove('is-active')
      body.style.height = '0px'
    } else {
      collpaseElm.classList.add('is-active')
      body.style.height = `${inner.offsetHeight}px`
    }
  })

})
