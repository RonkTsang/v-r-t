<template>
  <richtext
    @click="textClick"
    >
    <template v-for="(item, i) in biuList">
      
      <!-- @nick -->
      <span
        v-if="item.nick"
        :key="i"
        @click.stop="nickClick(item)"
      >
        {{ '@' + item.nick }}
      </span>

      <!-- comment -->
      <span
        v-else
        :key="i"
        >
        {{ item.comment }}
      </span>
    </template>
  </richtext>

</template>

<script>

  /*
  biuList: 
    [
      {
        nick: 'XX',    // @XX
        uin: '111'     // qq account
      },
      {
        comment: ''
      }
    ]
  */
  export function biuLevelText (biuLevelList = []) {
    let biuText = ''
    if (biuLevelList.length !== 0) {
      const NICK = 'biuLevel_nick',
            COMMENT = 'biuLevel_comment'
      
      let list = biuLevelList.slice(0)
  
      let firstBiu = list[list.length - 1]
      biuText += firstBiu[COMMENT].replace(/^：/, '')
  
      // reverse and reduce
      for (let i = list.length - 2; i >= 0; i--) {
        let originBiu = list[i]
        biuText += ('@' + originBiu[NICK])
        biuText += originBiu[COMMENT]
      }
    }

    return biuText
  }

  export default {
    props: ['biuLevelList'],
    computed: {
      biuList () {
        let biuList = [], list = this.biuLevelList

        const userInfo = ['nick', 'uin'],
              commentInfo = ['comment']

        const reducer = (origin) => (info, n) => {
          info[n] = origin['biuLevel_' + n]
          return info
        }
        
        // 第一项需要特殊处理，去掉冒号 = =
        let firstBiu = commentInfo.reduce(reducer(list[list.length - 1]), {})
        firstBiu.comment = firstBiu.comment.replace(/^：/, '')
        biuList.push(firstBiu)

        // reverse and reduce
        for (let i = list.length - 2; i >= 0; i--) {
          let originBiu = list[i]
          biuList.push(userInfo.reduce(reducer(originBiu), {}))
          biuList.push(commentInfo.reduce(reducer(originBiu), {}))
        }

        console.log(biuList)

        return biuList
      }
    },
		methods: {
      nickClick (info) {
        this.$emit('nickClick', info)
      },
      textClick () {
        this.$emit('textClick')
      }
		}
  }
</script>