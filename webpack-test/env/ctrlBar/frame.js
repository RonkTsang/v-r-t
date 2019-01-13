import {
  genFrame
} from './ui'

import {
  $ev
} from '../action'

import JSONTable from './table'

const ID = {
  title: 'side_title',
  back: 'side_back',
  content: 'side_content',
  attrs: 'side_attrs',
  style: 'side_style',
  events: 'side_events'
}

function getId(key) {
  return `#${ID[key]}`
}

export default class CtrlBar  {
  constructor ({
    el = 'app',
    on
  }) {
    this.container = typeof el === 'string' ? document.querySelector(el) : el
    if (!this.container) this.container = document.body

    const frame = genFrame()

    this.frame = frame

    this.domMap = { frame }

    this._data = null

    this._ref = null

    this.attrsTable = null
    this.styleTable = null
    this.eventsPanel = null

    this.events = on || {}

    this.render()._listen()
  }
  render () {
    this.container.appendChild(this.frame)
    return this
  }
  _listen () {
    const frame = this.frame
    const backBtn = frame.querySelector('#' + ID.back)
    this.domMap['back'] = backBtn

    backBtn.addEventListener('click', () => {
      console.log('close')
      this.close()
    })
  }
  open (data) {

    if (this._data == data) {

    } else {
      this._data == data
      this._ref = data.ref
      
      this.updateTitle(`ref: ${data.ref} type: ${data.type}`)

      if (this.attrsTable) {
        this.attrsTable.update(data.attr)
      } else {
        this.attrsTable = new JSONTable({
          data: data.attr,
          el: getId('attrs')
        })
      }
  
      if (this.styleTable) {
        this.styleTable.update(data.style)
      } else {
        this.styleTable = new JSONTable({
          data: data.style,
          el: getId('style')
        })
      }

      this.updateEvents(data.events)
    }

    this.frame.classList.add('open')
    typeof this.events.open === 'function' && this.events.open()
  }
  close () {
    this.frame.classList.remove('open')
    typeof this.events.close === 'function' && this.events.close()
  }
  updateEvents (events = []) {
    let eventsPanel = this.domMap['events']
    if (!eventsPanel) {
      eventsPanel = this.frame.querySelector('#' + ID.events)
      this.domMap['events'] = eventsPanel
      eventsPanel.addEventListener('click', (e) => {
        let evName
        if (evName = e.target.dataset.eventName) {
          $ev(evName, this._ref, {test: 1})
        }
      })
    }
    eventsPanel.innerHTML = this.genEventsBtn(events)
  }
  genEventsBtn (events) {
    let html = ''
    events.forEach(ev => {
      html += `<div class="eventBtn" data-event-name="${ev}">${ev}</div>`
    });
    return html
  }
  updateTitle (title = '') {
    let titleDom = this.domMap['title']
    if (!titleDom) {
      titleDom = this.frame.querySelector('#' + ID.title)
      this.domMap['title'] = titleDom
    }
    titleDom.textContent = title
  }
}