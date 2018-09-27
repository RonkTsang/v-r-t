<template>
  <richtext>
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

  export default {
    data () {
      return {
        textList: [
          { type: 0, text: 'text1' }
        ]
      }
    },
    created () {
      let isClick = true
      viola.on('update', (e) => {
        this.textList = [
          { type: isClick ? 1 : 0, text: isClick ? 'has click' : 'text' }
        ]
        isClick = !isClick
      })
    },
		methods: {
      nickClick (info) {
        console.log(info.text)
      }
		}
  }
</script>