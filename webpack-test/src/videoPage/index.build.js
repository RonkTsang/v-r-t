import cmp from '@pages/videoPage'

require('@util/log')

new Vue({
  el: '#app',
  components: { cmp },
  render: (h) => h(cmp)
})