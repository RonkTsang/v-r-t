var _c = require('consoler')

module.exports = function (res) {
  _c.log('viola-style-test test', typeof res)
  // return res
  var testStyle = { violaStyle: "red" }
  return 'module.exports = ' + JSON.stringify(testStyle)
}