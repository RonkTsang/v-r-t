<template>
  <div>
    <div 
      style="
        color: true;
        backgroundColor: true;
        someToDelete: delete;
      "
      :style="{
        color: toggle ? 'cover' : '',
        backgroundColor: bgc
      }">
      <text value="toggle_true" style="font-size: 11dp;" />
    </div>
  </div>
</template>

<script>

/**
 * 
 * 当结构相似时，v-if 将触发 update
 * 测试：当 :style 为局部绑定时，是否正确 update
 * 
 */

export default {
  data () {
    return {
      toggle: false,
      bgc: 'bgc_cover'
    }
  },
  created () {
    viola.on('update', (e) => {
      if (e.toggle) {
        this.toggle = true
      } else {
        this.toggle = false
      }
    })
  }
}
</script>

<style>

</style>
