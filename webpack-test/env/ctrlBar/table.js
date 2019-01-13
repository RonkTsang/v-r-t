import {
  diffObject
} from '../util/diff'

import {
  isEmptyObj,
  isUndef
} from '../util/check'

export default class JSONTable {
  constructor ({
    data,
    el,
    on
  }) {
    this._data = data
    this.el = typeof el === 'string' ? document.querySelector(el) : el
    this.rowData = {}
    this.tidMap = {}
    this.fragment = null
    this._table = null
    this.init()
  }
  init () {
    this.genJSONTable().render()
  }
  genJSONTable () {
    
    const JSONObject = this._data

    let table = document.createElement('table')
    table.className = 'json_table'
    
    if (!isUndef(JSONObject) || !isEmptyObj(JSONObject)) {
      const fragment = this.getRowFragment(JSONObject)
      table.appendChild(fragment)
    }
    
    table.className = 'json_table'
    this._table = table
    return this
  }
  getRowFragment (JSONObject) {
    // let rowData = {}
    const fragment = document.createDocumentFragment()
    for (const key in JSONObject) {
      if (JSONObject.hasOwnProperty(key)) {
        const row = genJSONTableRow({
          key,
          value: JSONObject[key]
        })
        this.recordRowData(row)
        fragment.appendChild(row.tr)
      }
    }
    return fragment
  }
  
  recordRowData (row) {
    this.rowData[row.data.key] = row
    this.tidMap[row.tid] = row
  }
  render () {
    if (this.el && this._table) {
      this.el.appendChild(this._table)
      this._initListen()
    }
  }
  _initListen () {
    this._table.addEventListener('click', (e) => {
      const dataset = e.target.dataset,
        tid = dataset ? dataset.tid : void 0
      if (tid) {
        console.log(this.tidMap[tid])
      }
    })
  }
  update (data) {
    let oldData = this._data
    this._data = data

    if (isUndef(data) || isEmptyObj(data)) {
      return this.clear()
    }

    if (isUndef(oldData) || isEmptyObj(oldData)) {
      return this.reRender(data)
    }

    let add = [], rm = []

    diffObject(oldData, data, {
      update: (key, value) => {
        this.updateRowValue(key, value)
        return value
      },
      add (key, value) {
        add.push({key, value})
        return value
      },
      rm (key) {
        rm.push(key)
        return ''
      }
    })
    
    rm.forEach(rmKey => {
      if (add.length) {
        let addRow = add.shift()
        this.updateRow(this.rowData[rmKey], addRow)
      } else {
        this.rmRow(this.rowData[rmKey])
      }
    })

    if (add.length) {
      this.addRow(add)
    }
  }
  reRender(data) {
    this._table.appendChild(this.getRowFragment(data))
  }
  updateRow (row, jsonData) {
    if (!row || !jsonData) {
      return
    }
    if (!row.valueTd) {
      row.valueTd = row.tr.querySelector('td[data-row="value"]')
    }

    if (!row.keyTd) {
      row.keyTd = row.tr.querySelector('td[data-row="key"]')
    }
    row.data = jsonData
    row.keyTd.textContent = jsonData.key
    row.valueTd.textContent = jsonData.value
  }
  updateRowValue (key, value) {
    let row = this.rowData[key]
    if (!row) {
      return
    }
    if (!row.valueTd) {
      row.valueTd = row.tr.querySelector('td[data-row="value"]')
    }

    row.data.value = value
    row.valueTd.textContent = value
  }
  rmRow(row) {
    this.rowData[row.data.key] = null
    this.tidMap[row.tid] = null
    this._table.removeChild(row.tr)
  }
  addRow (rows) {
    if (Array.isArray(rows)) {
      const fragment = document.createDocumentFragment()
      rows.forEach(json => {
        const row = genJSONTableRow(json)
        this.recordRowData(row)
        fragment.appendChild(row.tr)
      })
      this._table.appendChild(fragment)
    } else {
      const row = genJSONTableRow(json)
      this.recordRowData(row)
      this._table.appendChild(row.tr)
    }
  }
  clear () {
    this._table.innerHTML = ''
  }
}

let id = 0

function genJSONTableRow(JSONRow) {
  var tr = document.createElement('tr')
  const tid = `row_${id++}`
  tr.id = tid
  tr.dataset.rule = 'row'
  tr.dataset.tid = tid
  const jsonKey = JSONRow.key
  tr.innerHTML = Object.keys(JSONRow).reduce((html, k) => {
    return html += `<td data-row="${k}" data-key="${jsonKey}" data-tid="${tid}"> ${JSONRow[k]} </td>`
  }, '')

  return {
    tid,
    tr,
    data: JSONRow
  }
}