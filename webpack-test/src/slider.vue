<template>
  <div>
    <slider
      :index="index"
      :autoEnable="true"
      :interval="3000"
    >
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
    </slider>
    <div style="width: 50dp; height: 50dp;margin-top: 5dp;"
      v-for="(v, i) in list"
      :key="i"
      :style="{
        backgroundColor: v.color
      }"
      @click="jump(i)"
      >

    </div>
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
    }
  }
}
</script>

<style>

</style>
