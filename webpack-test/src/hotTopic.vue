
<template>
  <div>
    <div v-for="topic in topicList" :key="topic.id" class="topicItem" @click="handler">
        <image class="img" :src="topic.img_url" resize="contain" />
        <div class="info">
            <text class="title" :value="getRich(topic.content)"></text>
            <text class="desc">{{topic.desc}}</text>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      topicList: [{
        "id":1004695,
        "img_url":"http://qqpublic.qpic.cn/qq_public_cover/0/0647FFCB4EE8AEDAC77123D802AA7C92/0",
        "content":"比尔盖茨2018年推荐书籍",
        "desc":"看看首富又给我们推荐了什么书，这真是比你强的人还比你努力啊",
        "is_recommend":0,
        "has_badge":0,
        "follow":0,
        "jump_url":"https://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004695&viewtype=1&sorttype=2&hasbanner=0&article_type=0"
        }, {
          "id":100505,
          "img_url":"http://qqpublic.qpic.cn/qq_public_cover/0/0647FFCB4EE8AEDAC77",
          "content":"XX比尔盖茨2018年推荐书籍",
          "desc":"XX看看首富又给我们推荐了什么书，这真是比你强的人还比你努力啊",
          "is_recommend":0,
          "has_badge":0,
          "follow":0,
          "jump_url":"XXhttps://kandian.qq.com/mqq/vue/topic?_wv=3&_bid=2378&x5PreFetch=1&topicid=1004695&viewtype=1&sorttype=2&hasbanner=0&article_type=0"
        }
      ]
    }
  },
  methods: {
    getRich (content) {
      return [{
        text: content,
        style: { color: 'red' }
      }]
    },
    handler () {
      this.topicList.reverse()
    }
  }
}
</script>

<style>

</style>
