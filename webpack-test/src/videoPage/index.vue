<template>
  <div>
    <video-view></video-view>
    <user-header></user-header>
    <list style="flex: 1">
      <cell>
        <article-view></article-view>
      </cell>
    </list>
    <interact-bar></interact-bar>
  </div>
</template>

<script>

import videoView from './video.vue'
import userHeader from './userHeader.vue'
import interactBar from './interactBar.vue'
import articleView from './article.vue'

export default {
  components: {
    videoView, userHeader, interactBar, articleView
  }
}
</script>

<style>

</style>
