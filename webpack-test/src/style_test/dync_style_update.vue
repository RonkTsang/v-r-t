<template>
  <div>
    <div 
      style="
        color: true;
        backgroundColor: true;
        someToDelete: delete;
      "
      :style="toggle">
      <text value="toggle_true" style="font-size: 11dp;" />
    </div>
  </div>
</template>

<script>

/**
 * 
 * 当结构相似时，v-if 将触发 update
 * 测试：当 :style 为绑定值时，是否正确 update
 * 
 */

export default {
  data () {
    return {
      toggle: 'color: true_cover; lines: true'
    }
  },
  created () {
    viola.on('update', (e) => {
      if (e.toggle) {
        this.toggle = 'color: true_cover; lines: true'
      } else {
        this.toggle = {
          color: 'cover_again'
        }
      }
    })
  }
}
</script>

<style>

</style>
