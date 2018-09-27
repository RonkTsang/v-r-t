<template>
  <div>
    <list>
      <!-- 
        idle 事件： 普通状态（未到触发下拉刷新的距离） =》 “下拉刷新”
        pulling： 已经达到触发刷新距离   =》  “松手即可刷新”
        refresh 事件： 松手    =》  “正在刷新”
      -->
      <refresh
        @idle="onIdle"
        @pulling="onPulling"
        @refresh="onRresh"
      >
        <text style="color: #ffffff;font-size: 14dp;">
          {{ text }}
        </text>
      </refresh>
      <div
        v-for="(v, i) in list"
        :key="i"
        :style="{
          width: 750,
          justifyContent: 'center',
          alignItems: 'center',
          height: 300,
          backgroundColor: v.color
        }"
      >
        <text style="color: #ffffff;font-size: 50dp;">
          {{ v.text }}
        </text>
      </div>
    </list>

  </div>
</template>

<script>
export default {
  data () {
    return {
      index: 0,
      list: [
        { color: '#123456', text: 'div1' },
        { color: '#654321', text: 'div2' },
        { color: '#333333', text: 'div3' },
        { color: '#123456', text: 'div4' },
        { color: '#654321', text: 'div5' },
        { color: '#333333', text: 'div6' },
        { color: '#123456', text: 'div7' }
      ]
    }
  },
  methods: {
    jump (index) {
      this.index = index
    },
    onIdle () {
      this.text = '下拉刷新'
    },
    onPulling () {
      this.text = '松手即可刷新'
    },
    onRresh () {
      this.text = '正在刷新'
    }
  }
}
</script>

<style>

</style>
