const pgItems = document.querySelectorAll('.o-steps__pagination-item')
const steps = document.querySelectorAll('.o-step')
const stepP = document.querySelector('.o-steps')
const pg = document.querySelector('.o-steps__pagination')


pgItems.forEach((pgItem, i) => {
  pgItem.addEventListener('click', () => {
    steps[i].scrollIntoView()
  })
})

window.addEventListener('scroll', (e) => {
  steps.forEach((step, i) => {
    if (window.scrollY > step.offsetTop - 50) {
      pgItems.forEach(item => item.classList.remove(
        'is-active'))
      pgItems[i].classList.add('is-active')
    }
  })

  if (window.scrollY > stepP.offsetTop) {
    pg.classList.add('is-active')
  } else {
    pg.classList.remove('is-active')
  }
})



const helps = document.querySelectorAll('.o-step__help')

helps.forEach(help => {
  help.addEventListener('click', () => {
    steps[1].scrollIntoView()
    helps.forEach(item => {
      item.classList.remove('is-active')
    })
    help.classList.add('is-active')
  })
})


const times = document.querySelectorAll('.o-step__time')

times.forEach(time => {
  time.addEventListener('click', () => {
    steps[4].scrollIntoView()
    times.forEach(item => {
      item.classList.remove('is-active')
    })
    time.classList.add('is-active')
  })
})


const types = document.querySelectorAll('.o-step__type')

types.forEach(type => {
  type.addEventListener('click', () => {
    steps[6].scrollIntoView()
    types.forEach(item => {
      item.classList.remove('is-active')
    })
    type.classList.add('is-active')
  })
})
