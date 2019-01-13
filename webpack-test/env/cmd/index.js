import {
  genFrame
} from './ui'

const ID = {
  list: 'cmd_list',
  nav: 'cmd_nav'
}

function getId(key) {
  return `#${ID[key]}`
}

export default class CmdList {
  constructor({
    el = 'app',
    on
  }) {
    this.container = typeof el === 'string' ? document.querySelector(el) : el
    if (!this.container) this.container = document.body

    const frame = genFrame()

    this.frame = frame

    this.events = on || {}

    this.list = null

    this.cacheX = 0

    this.cacheY = 0

    this.render()._listen()
  }
  render() {
    this.container.appendChild(this.frame)
    return this
  }
  _listen () {
    let frame = this.frame
    document.querySelector(getId('nav')).onmousedown = (e) => {
      console.info(e)
      let x = e.pageX, y = e.pageY

      let cacheX = this.cacheX, cacheY = this.cacheY, translateX, translateY
      function move(e) {
        let xEnd = e.pageX, yEnd = e.pageY
        translateX = xEnd - x + cacheX
        translateY = yEnd - y + cacheY
        frame.style.transform = `translate(${translateX}px, ${translateY}px)`
      }
      document.addEventListener('mousemove', move)

      document.onmouseup = () => {
        this.cacheX = translateX
        this.cacheY = translateY
        document.removeEventListener('mousemove', move)
      }
    }
  }
  _genCmd (mod, contentObj) {
    let li = document.createElement('li')
    let contentHtml = ''
    for (const key in contentObj) {
      if (contentObj.hasOwnProperty(key)) {
        const text = contentObj[key];
        if (typeof text !== 'undefined') {
          contentHtml += `
          <p class="cmd_content">
            <span class="content_label"> ${key} </span><span class="cmd_task"> ${JSON.stringify(text)} </span>
          </p>
          `
        }
      }
    }
    li.innerHTML = `
      <p class="cmd_module"> ${mod} </p>
      ${contentHtml}
    `
    return li
  }
  append({ module, args, method, component }) {
    let list = this.list || (this.list = document.querySelector(getId('list')))
    // this.list.appendChild(this._genCmd(module, { args, method, component}))

    list.insertBefore(this._genCmd(module, { args, method, component }), list.firstChild)
  }
}