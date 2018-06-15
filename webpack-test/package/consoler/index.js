const Reset = "\x1b[0m"
const Bright = "\x1b[1m"
const Dim = "\x1b[2m"
const Underscore = "\x1b[4m"
const Blink = "\x1b[5m"
const Reverse = "\x1b[7m"
const Hidden = "\x1b[8m"

const FgBlack = "\x1b[30m"
const FgRed = "\x1b[31m"
const FgGreen = "\x1b[32m"
const FgYellow = "\x1b[33m"
const FgBlue = "\x1b[34m"
const FgMagenta = "\x1b[35m"
const FgCyan = "\x1b[36m"
const FgWhite = "\x1b[37m"

const BgBlack = "\x1b[40m"
const BgRed = "\x1b[41m"
const BgGreen = "\x1b[42m"
const BgYellow = "\x1b[43m"
const BgBlue = "\x1b[44m"
const BgMagenta = "\x1b[45m"
const BgCyan = "\x1b[46m"
const BgWhite = "\x1b[47m"

var deepExtend = require('deep-extend');

let colors = [FgGreen, FgYellow, FgBlue, FgMagenta, FgCyan]
function getColor() {
  let c = colors.shift()
  colors.push(c)
  return c
}

module.exports = {
  log(tag, content, asset) {
    let colors = getColor()
    console.log(colors, `\n =========== ${Array.isArray(tag) ? tag.join(' ') : tag} ===========`)
    console.log('\n', isObj(content) ? JSON.stringify(toJSON(content), {}, 2) : content, '\n')
    asset && console.log('\n', BgCyan, FgWhite, asset, Reset, '\n')
    console.log(colors, `=========== ${Array.isArray(tag) ? tag.join(' ') : tag} =========== \n`, Reset)
  }
}

function isObj(v) {
  return v && typeof v === 'object'
}

function toJSON(obj) {
  let copy = {}
  deepExtend(copy, obj)
  return copy
}