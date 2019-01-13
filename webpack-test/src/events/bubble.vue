<template>
  <div @click="wrapperClick" @appear="wrapperAppear">
    <div @click="subClick">
      <div @click="grandSubClick"></div>
    </div>
    <div @appear="subAppear"></div>
    <div @click.stop="subClickAndStop"></div>
  </div>
</template>

<script>
export default {
  methods: {
    wrapperClick (e) {
      console.log('wrapper click', e)
    },
    subClick (e) {
      console.log('Sub click', e)
    },
    grandSubClick (e) {
      console.log('grandSub click', e)
    },
    wrapperAppear (e) {
      console.log('wrapper Appear', e)
    },
    subAppear (e) {
      console.log('sub Appear', e)
    },
    subClickAndStop (e) {
      console.log('sub click and stop bubble', e)
    },
  }
}
</script>

<style>

</style>
