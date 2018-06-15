// var Vue = require('vue')

// var hello = require('./hello.vue')
import hello from './hello.vue'
// hello()

// const Vue = require('vue')
import Vue from 'viola-vue'
window.app = new Vue({
  el: '#app',
  // template: '<hello/>',
  components: { hello },
  render: (h) => h(hello)
})
// console.log(Vue)
/* 
var cls = genClassForVnode(vnode);
var oldCls = genClassForVnode(oldVnode);
console.log('cls:', cls)
console.log('oldCls:', oldCls)
var styles = $getStyle(oldCls || [], cls, vnode.context)
console.log('style: ', styles)

for (const key in styles) {
  if (styles.hasOwnProperty(key)) {
    let s = styles[key]
    if (!isNaN(parseInt(s))) s += 'px'
    el.style[key] = s
  }
} */

/* 

function $getStyle(oldClassList, classList, ctx) {
    // style is a weex-only injected object
    // compiled from <style> tags in weex files
    const stylesheet = ctx.$options.style || {}
    const result = {}
    classList.forEach(name => {
      const style = stylesheet[name]
      extend(result, style)
    })
    oldClassList.forEach(name => {
      const style = stylesheet[name]
      for (const key in style) {
        if (!result.hasOwnProperty(key)) {
          result[key] = ''
        }
      }
    })
    return result
      }

*/