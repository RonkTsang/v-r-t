<template>
  <div>
    <biu-text
      v-for="(cl, i) in commentLists"
      :key="i"
      :biuLevelList="cl"
      @nickClick="nickClick"
      @textClick="textClick"
      style="color: blue;"
      :style="{
        dynStyle: 1
      }"
    />
  </div>
</template>

<script>

/*

    QQ看点 biu text 例子

 */

import biuText from './biuText.vue'

  export default {
    components: {
      'biu-text': biuText
    },
    created() {
      viola.on('update', (e) => {
        if (e.updateList === 1) {
          // span 无事件
          this.commentLists = [
            [{biuLevel_comment: '纯文本'}]
          ] 
        } else if (e.updateList === 2){

          // 更新为 两个 事件
          this.commentLists = [
            [
              {biuLevel_comment: 'three', biuLevel_nick: 'three nick', biuLevel_uin: 'three uin'},
              {biuLevel_comment: '这是comment1', biuLevel_nick: 'afterUpdate nick', biuLevel_uin: 'afterUpdate uin'},
              {biuLevel_comment: '更新了', biuLevel_nick: '嘻嘻更新了', biuLevel_uin: '1004474277 更新了'},
            ]
          ]
        } else {
          this.commentLists = [[{biuLevel_comment: '有文本', biuLevel_nick: 'ronktsang', biuLevel_uin: '1037568810'},{biuLevel_comment: '噢噢', biuLevel_nick: '嘻嘻', biuLevel_uin: '1004474277'}]]
        }
      })
    },
    data () {
      return {
        commentLists: [[{biuLevel_comment: '有文本', biuLevel_nick: 'ronktsang', biuLevel_uin: '1037568810'},{biuLevel_comment: '噢噢', biuLevel_nick: '嘻嘻', biuLevel_uin: '1004474277'}]]
      }
    },
    methods: {
      textClick () {
        console.log('text click')
      },
      nickClick ({uin}) {
        console.log(uin)
      }
    }
  }
</script>
