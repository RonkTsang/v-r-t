<template>
  <richtext
    @click="textClick"
    >
    <template v-for="(item, i) in textList">
      
      <!-- @nick -->
      <span
        v-if="item.type == 1"
        :key="i"
        @click.stop="nickClick(item)"
      >
        {{ item.text }}
      </span>

      <!-- comment -->
      <span
        v-else
        :key="i"
        >
        {{ item.text }}
      </span>
    </template>
  </richtext>

</template>

<script>

  /* 

    混合用例

    <richtext> 和 <span> 绑定事件， <span> 的事件动态更改

    测试：<richtext> 收集并分发是否正确

    list item结构：

      type = 1 : 增加 click 事件，事件对象为 当前 item

  */

  export default {
    data () {
      return {
        textList: [
          { type: 1, text: 'text1' },
          { type: 2, text: 'text2' },
          { type: 1, text: 'text3' },
          { type: 4, text: 'text4' },
        ]
      }
    },
    created () {
      // e: {
      //   index: [1, 2, 6]
      // }
      let count = 1
      viola.on('update', (e) => {
        console.log('update')
        let _list = [], evList = e.index || []
        let max = evList.length ? Math.max.apply(null, evList) : 0
        let loop = (max > 3) ? max + 1 : 4
        for (let index = 0; index < loop; index++) {
          _list.push({
            type: evList.includes(index) ? 1 : 0,
            text: `${count} times update: ${index}`
          })
        }
        count++
        this.textList = _list
      })
    },
		methods: {
      nickClick (info) {
        console.log(info.text)
      },
      textClick () {
        console.log('textClick')
      }
		}
  }
</script>