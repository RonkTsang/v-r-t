// var Vue = require('vue')

var hello = require('./hello.vue')

// hello()

// const Vue = require('vue')
import Vue from 'vue'
window.app = new Vue({
  el: '#app',
  render: (h) => h(hello)
})
console.log(Vue)