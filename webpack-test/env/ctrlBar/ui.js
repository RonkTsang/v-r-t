
import frame from './template/frame.html'
// import genCode from '../util/template'

// export function genFrame(id) {
//   return genCode(frame, {id})
// }

export function genFrame() {
  let aside = document.createElement('aside')
  aside.id = 'side_bar'
  aside.innerHTML = frame
  return aside
}

export function genJSONTable(JSONObject) {
  const fragment = document.createDocumentFragment()
  for (const key in JSONObject) {
    if (JSONObject.hasOwnProperty(key)) {
      const row = genJSONTableRow({
        key, 
        value: JSONObject[key]
      })
      fragment.appendChild(row)
    }
  }
  let table = document.createElement('table')
  table.className = 'json_table'
  return table
}

let id = 0

function genJSONTableRow(JSONRow) {
  var tr = document.createElement('tr')
  const tId = `row_${id++}`
  tr.id = tId
  tr.setAttribute('data-rule', 'row')
  tr.setAttribute('data-tid', tId)

  tr.innerHTML = Object.keys(JSONRow).reduce((html, k) => {
    return html += `<td data-row="${k}" data-tid="${tId}"> ${JSONRow[key]} </td>`
  }, '')

  return tr
}