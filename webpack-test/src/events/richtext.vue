<template>
  <div @click="wrapperClick">

    <richtext>
      <span @click="spanClick"> span1 </span>
      <image src="xxxx" style="imageSize: 100" @click="imageClick" />
      <span> span2 </span>
    </richtext>

    <richtext @click="richtextClick">
      <span @click="spanClick"> span1 </span>
      <span @click.stop="spanClick"> span1 </span>
    </richtext>
    
  </div>
</template>

<script>
export default {
  methods: {
    wrapperClick (e) {
      console.log('wrapper click', e)
    },
    spanClick (e) {
      console.log('span click', e)
    },
    imageClick (e) {
      console.log('image click', e)
    },
    richtextClick (e) {
      console.log('richtext click', e)
    }
  }
}
</script>

<style>

</style>
