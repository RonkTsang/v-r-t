<template>
  <!-- <grand-sub
    :style="dyncStyle"
  /> -->
  <div style="type: div">
    <text :style="dyncStyle"></text>
  </div>
</template>

<script>

import grandSub from './deep_grandSub.vue'

export default {
  props: ['dyncStyle'],
  components: {
    grandSub
  }
}
</script>

<style>

</style>
