<template>
  <div>
    <div v-if="toggle" style="color: true; backgroundColor: true; someToDelete: delete;" :style="'color: true_cover; lines: true'">
      <text value="toggle_true" style="font-size: 11dp;" />
    </div>
    <div v-else style="color: false; backgroundColor: false; ADD: add" :style="'color: false_cover; lines: false'">
      <text value="toggle_false" style="font-size: 11dp;" />
    </div>
  </div>
</template>

<script>

/**
 * 
 * 当结构相似时，v-if 将触发 update
 * 测试：当 :style 为字符串时，是否正确 update
 * 
 */

export default {
  data () {
    return {
      toggle: true
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
