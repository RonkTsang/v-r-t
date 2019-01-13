<template>
  <div>
    <sub
      :oh="text"
      :dyncStyle="dyncStyle"
      style="superStyle: super"
      :style="dyncSuperStyle" />
  </div>
</template>

<script>

import sub from './blank_sub.vue'

export default {
  components: {
    sub
  },
  data () {
    return {
      text: 'true',
      dyncStyle: {},
      dyncSuperStyle: {}
    }
  },
  created () {
    viola.on('update', (e) => {
      if (e.toggle == 'style_1') {
        this.dyncStyle = {
          dyncStyle: true
        }
        this.dyncSuperStyle = {
          divStyle: 'super'
        }
      } else if (e.toggle == 'text') {
        this.text = 'false'
      } else if (e.toggle == 'style_2') {
        this.dyncStyle = {
          divStyle: 'super_2'
        }
        this.dyncSuperStyle = {
          
        }
      } else if (e.toggle == 'style_over') {
        this.dyncStyle = {
          
        }
        this.dyncSuperStyle = {
          
        }
      }
    })
  }
}
</script>

<style>

</style>
