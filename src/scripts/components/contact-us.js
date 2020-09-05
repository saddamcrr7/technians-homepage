import Range from './range'

const steps = document.querySelectorAll('.o-step')
const pg = document.querySelector('.o-steps__pagination')


if (steps.length) {

  const helps = document.querySelectorAll('.o-step__help')

  helps.forEach(help => {
    help.addEventListener('click', () => {
      helps.forEach(item => {
        item.classList.remove('is-active')
      })
      help.classList.add('is-active')
      pg.classList.add('is-active')

      if (help.dataset.type == 'seals') {
        stepControler([0, 1, 2, 4, 5, 6, 7])
      }
      if (help.dataset.type == 'career') {
        stepControler([0, 2, 3, 4, 6, 7])
      }
      if (help.dataset.type == 'freelancer') {
        stepControler([0, 2, 3, 4, 6, 7])
      }
      if (help.dataset.type == 'guest') {
        stepControler([0, 2, 4, 6, 7])
      }
      if (help.dataset.type == 'partnership') {
        stepControler([0, 2, 4, 6, 7])
      }
      if (help.dataset.type == 'other') {
        stepControler([0, 2, 4, 6, 7])
      }
      if (help.dataset.type == 'webmaster') {
        stepControler([0, 2, 4, 6, 7])
      }
      if (help.dataset.type == 'feedback') {
        stepControler([0, 1, 2, 4, 6, 7])
      }
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
      types.forEach(item => {
        item.classList.remove('is-active')
      })
      type.classList.add('is-active')
    })
  })

  const budgetElm = document.querySelector('.c-range--budget')

  const budgetValueElm = budgetElm.querySelector('.c-range__value')
  const budgetRange = new Range('.c-range--budget', {
    range: {
      'min': [5, 15],
      'max': 100
    }
  }, () => {
    if (budgetRange.activeValue != undefined) {
      budgetValueElm.innerHTML =
        `$${budgetRange.activeValue[0]}k - ${budgetRange.activeValue[1]}k`
    }
  })


  const timeElm = document.querySelector('.c-range--time')
  const timeValueElm = timeElm.querySelector('.c-range__value')
  const timeRange = new Range('.c-range--time', {
    start: [5, 15],
    range: {
      'min': 1,
      'max': 50
    }
  }, () => {
    if (timeRange.activeValue != undefined) {
      timeValueElm.innerHTML = `${timeRange.activeValue} weeks`
    }
  })

}

function stepControler(arr) {
  const setpElms = document.querySelectorAll('.o-step')
  setpElms.forEach(setpElm => {
    setpElm.style.display = 'none'
  })

  const stis = pg.querySelectorAll('.o-steps__pagination-item')
  if (stis) {
    stis.forEach(sti => {
      sti.remove()
    })
  }

  const stepArr = []

  arr.forEach((num, i) => {
    setpElms[num].style.display = 'block'
    if (i == 0) return
    const title = setpElms[num].querySelector('.o-step__title')
    const count = setpElms[num].querySelector('.o-step__count')
    title.innerHTML = `Step ${i}`
    count.innerHTML = `${i} / ${arr.length - 1}`

    const pgItem = document.createElement('div')
    pgItem.classList.add('o-steps__pagination-item')
    pgItem.innerHTML = `${i}`
    pgItem.addEventListener('click', () => {
      setpElms[num].scrollIntoView()
    })
    pg.appendChild(pgItem)
    stepArr.push(setpElms[num])
  })

  const pgiAfter = pg.querySelectorAll('.o-steps__pagination-item')

  steps[arr[1]].scrollIntoView()

  window.addEventListener('scroll', (e) => {
    stepArr.forEach((stp, i) => {
      if (window.scrollY > stp.offsetTop - 50) {
        pgiAfter.forEach(item => item.classList.remove('is-active'))
        pgiAfter[i].classList.add('is-active')
      }
    })

    if (window.scrollY > stepArr[0].offsetTop - 50) {
      pg.classList.add('is-active')
    } else {
      pg.classList.remove('is-active')
    }

  })

}
