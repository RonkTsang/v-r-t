import frame from './template/cmd.html'
// import genCode from '../util/template'

// export function genFrame(id) {
//   return genCode(frame, {id})
// }

export function genFrame() {
  let $c = document.createElement('div')
  $c.id = 'cmd_wrapper'
  $c.style.width = '500px'
  $c.style.height = '350px'
  $c.style.position = 'absolute'
  $c.style.bottom = '0'
  $c.style.right = '0'
  $c.innerHTML = frame
  return $c
}