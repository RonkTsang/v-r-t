<template>
  <div class="container">
    <div class="item red" @click="dispatch">
      <text style="color: #ffffff; font-size: 20dp;"> dispatch </text>
    </div>

    <div class="item black" @click="remove">
      <text style="color: #ffffff; font-size: 20dp;"> remove </text>
    </div>

    <div style="width: 740" @click="addMore" class="item green">
      <text style="color: #ffffff; font-size: 20dp;"> yellow 增加监听 </text>
    </div>

    <div class="item blue">
      <text style="color: #ffffff; font-size: 20dp;"> {{ blue }} </text>
    </div>

    <div class="item yellow">
      <text style="color: #ffffff; font-size: 20dp;"> {{ yellow }} </text>
    </div>

    <cmp />
  </div>
</template>

<script>

import cmp from './sub_cmp.vue'

export default {
  components: {
    cmp
  },
  data () {
    return {
      blue: ' blue 监听中',
      yellow: 'yellow 监听中',
      isYellowUp: false
    }
  },
  created() {
    this.count = 1
    const event = viola.requireAPI('event')

    if (event) {
      if (event.addEventListener) {
        event.addEventListener('changeText', (data) => {
          if (typeof data === 'string') {
            Viola.nativeLog('data 是 字符串！！！', 3)
            data = JSON.parse(data)
          }
          if (data && data.source) {
            this.blue = '隔壁好像更新了'
          } else {
            this.blue = 'dispatch 了 ' + this.count + ' 次'
          }
        })
      } else {
        console.error && console.error('没有 addEventListener')
        console.error('没有 addEventListener', 3)
      }
    } else {
      console.error && console.error('没有 events')
    }
  },
  methods: {
    dispatch () {
      const event = viola.requireAPI('event')

      if (event) {
        if (event.dispatchEvent) {
          if (this.isYellowUp) {
            event.dispatchEvent('changeText')
          } else {
            event.dispatchEvent('changeText', {
              source: 'oo'
            })
          }
        } else {
          console.error && console.error('没有 dispatchEvent')
          console.error('没有 dispatchEvent', 3)
        }
      } else {
        console.error && console.error('没有 events')
      }
    },
    addMore () {
      const event = viola.requireAPI('event')
      this.yellow = '我开始监听了'
      if (event) {
        if (event.addEventListener) {
          event.addEventListener('changeText', (data) => {
            this.yellow = '我接受到了'
          })
          this.yellow = '我开始监听了'
        } else {
          console.error && console.error('没有 addEventListener')
          console.error('没有 addEventListener', 3)
        }
      } else {
        console.error && console.error('没有 events')
      }
    },
    remove () {
      const event = viola.requireAPI('event')
      if (event) {
        if (event.removeEventListener) {
          event.removeEventListener('changeText')
        } else {
          // console.error && console.error('没有 removeEventListener')
          console.error('没有 removeEventListener', 3)
        }
      } else {
        console.error && console.error('没有 events')
      }
    }
    
  }
}
</script>

<style lang="scss" scoped>
  .container {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .item {
    width: 340;
    height: 340;
    margin-left: 10;
    justify-content: center;
    align-items: center;
  }

  .red {
    background-color: #d18080;
  }

  .black {
    background-color: #000000;
  }

  
</style>

