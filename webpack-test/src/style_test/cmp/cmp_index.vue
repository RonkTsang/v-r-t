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

/**
 * 
 * 
 * sub 为 richtext
 * 
 * dyncStyle 为通过 props 传递的 style，sub 将此 prop 作为 :style 的 绑定值
 * 
 * 在更新时，style 和 :style 将直接应用至 sub 上，
 * 而 dyncStyle 只有直到 vue-components-1-sub 的 updateStyle 时才会更新到，
 * 所以对于直接应用至子组件根节点的样式应当使用 style 或 :style
 * 
 * 
 * 
 */

import sub from './richtext_sub.vue'

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
          richtext: 'super'
        }
      } else if (e.toggle == 'text') {
        this.text = 'false'
      } else if (e.toggle == 'style_2') {
        this.dyncStyle = {
          richtext: 'super_2'
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
