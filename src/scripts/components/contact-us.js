import Range from './range'

const pgItems = document.querySelectorAll('.o-steps__pagination-item')
const steps = document.querySelectorAll('.o-step')


if (pgItems.length) {
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
      helps.forEach(item => {
        item.classList.remove('is-active')
      })
      help.classList.add('is-active')

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

  arr.forEach((num, i) => {
    setpElms[num].style.display = 'block'
    if(i == 0) return
    const title = setpElms[num].querySelector('.o-step__title')
    const count = setpElms[num].querySelector('.o-step__count')
    title.innerHTML = `Step ${i}`
    count.innerHTML = `${i} / ${arr.length - 1}`
  })

  steps[arr[1]].scrollIntoView()
}
