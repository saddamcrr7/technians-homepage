import {
  addEvent,
} from './components/utility'

export default class TouchEvent {

  constructor(elm, callback) {
    this.callback = callback
    this.endEvent = () => {}
    this.elem = document.querySelector(`${elm}`)
    this.isDown = !1
    this.startX = 0
    this.startY = 0
    this.endX = 0
    this.endY = 0
    this.walkX = 0
    this.walkY = 0
    this.target
    this.isMobile = false

    this.init()
  }


  notMobile(element) {
    addEvent(element, 'mousedown', (e) => {
      this.isDown = !0
      this.startX = e.layerX - element.offsetLeft
      this.startY = e.layerY - element.offsetTop
      this.target = e.target
      this.isMobile = false
    })

    addEvent(element, 'mouseleave', () => {
      this.isDown = !1
    })

    addEvent(element, 'mouseup', (e) => {
      this.isDown = !1
      this.endEvent(e)
    })

    addEvent(element, 'mousemove', (e) => {

      if (this.isDown) {
        e.preventDefault()

        this.endX = e.layerX
        this.endY = e.layerY
        this.walkX = this.endX - this.startX
        this.walkY = this.endY - this.startY
        this.callback(this)

      }


    })

  }

  mobile(element) {
    addEvent(element, 'touchstart', (e) => {
      const ev = e.changedTouches[0]

      this.isDown = !0
      this.startX = ev.pageX - element.offsetLeft
      this.startY = ev.pageY - element.offsetTop
      this.target = ev.target
      this.isMobile = true
    })

    addEvent(element, 'touchend', (e) => {
      this.isDown = !1
    })

    addEvent(element, 'touchmove', (e) => {

      if (this.isDown) {
        const ev = e.changedTouches[0]

        this.endX = ev.pageX
        this.endY = ev.pageY
        this.walkX = this.endX - this.startX
        this.walkY = this.endY - this.startY
        this.callback(this)
      }
    })
  }

  init() {
    this.notMobile(this.elem)
    this.mobile(this.elem)
  }

}

window.TouchEvent = TouchEvent
