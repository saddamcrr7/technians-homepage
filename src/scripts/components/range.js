import TouchEvent from '../vendor/touchevent.js/src/TouchEvent '

class Range {
  constructor(elm, opt, cb) {
    this.selector = elm
    this.elm = document.querySelector(`${elm}`)
    this.options = {
      range: opt.range
    }

    this.slider = this.elm.querySelector('.c-range__slider')
    this.icon = this.elm.querySelector('.c-range__slider-icon')
    this.line = this.elm.querySelector('.c-range__slider-line')
    this.value = []
    this.activeValue = []
    this.on = cb

    this.init()
  }

  step() {
    if (Array.isArray(this.options.range.min)) {
      let sta = this.options.range.min[1] - this.options.range.min[0]
      let stc = this.options.range.max / sta
      this.value.push([this.options.range.min[0], this.options.range.min[1]])

      for (let index = 0; index < stc - 1; index++) {

        if (index !== stc - 2) {
          this.value.push([this.options.range.min[0] += sta, this.options.range
            .min[1] += sta
          ])
        }else {
          this.value.push([this.options.range.min[0] += sta, this.options.range
          .max
        ])
        }
      }

    } else {
      let stac = this.options.range.min
      this.value.push(stac)
      for (let index = 0; index < this.options.range.max - 1; index++) {
        let tempArary = this.options.range.min += stac
        this.value.push(tempArary)
      }
    }
  }


  run() {
    let left = 0

    for (let index = 0; index < this.value.length; index++) {}

    new TouchEvent(this.selector + ' .c-range__slider', (e) => {
      let p = (this.slider.offsetWidth / this.value.length)

      if (e.target == this.icon) {

        if(e.isMobile) {
          left = (e.startX + e.walkX) - this.icon.offsetWidth
        }else {
          left += e.walkX
        }

        if (left > -1) {
          this.icon.style.left = `${left}px`
          this.activeValue = this.value[Math.round((left) / p)]
        } else {
          left = 0
          this.activeValue = this.value[Math.round((left) / p)]
        }
        if (left > this.slider.offsetWidth - 1) {
          left = this.slider.offsetWidth - 10
          this.icon.style.left = `${left}px`

          if (this.value.length == Math.round((left) / p)) {
            this.activeValue = this.value[this.value.length]
          } else {
            this.activeValue = this.value[Math.round((left) / p)]
          }
        }
        this.on()
      }
    })
  }

  init() {
    this.step()
    this.run()
  }
}

export default Range;
