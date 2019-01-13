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

import sub from './deep_sub.vue'

export default {
  components: {
    sub
  },
  data () {
    return {
      text: 'true',
      dyncStyle: {
        
      },
      dyncSuperStyle: {type: 'index'}
    }
  },
  created () {
    viola.on('update', (e) => {
      if (e.toggle == 'style_1') {
        this.dyncStyle = {
          type: 'dyncStyle'
        }
        this.dyncSuperStyle = {
          richtext: 'super'
        }
      } else if (e.toggle == 'text') {
        this.text = 'false'
      } else if (e.toggle == 'style_2') {
        this.dyncStyle = {
          richtext: 'super_2'
        }
        this.dyncSuperStyle = {}
      } else if (e.toggle == 'style_over') {
        this.dyncStyle = {}
        this.dyncSuperStyle = {}
      }
    })
  }
}
</script>
