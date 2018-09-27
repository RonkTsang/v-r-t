<template>
  <div @click="divClick">
    <richtext style="color: red;">
      <template v-for="(item, i) in list">
        <span
          v-if="i % 2"
          :key="i"
          style="color: red"
          :style="style"
          class="static_class"
          :class="className"
          @click.stop="clickSpan($event, 123)">
          {{ item.text }}
        </span>
        <span
          v-else
          :key="i"
          style="color: green">
          {{ item.text }}
        </span>  
      </template>
      <span
        style="color: red"
        :style="style"
        class="static_class"
        :class="className"

        @click="clickSpan($event, 123)">
        span
      </span>
      <span>{{ text }}</span>
      <image src="xxurl" @click.stop="imgClick" />
      <span> {{ text }} </span>
      <span
        v-for="(data, i) in list"
        :key="i"
      >
        {{ data.text }}
      </span>
    </richtext>
    <!-- <text @click="clickTest">
      {{ text }}
    </text> -->
  </div>
</template>

<script>

// import T from './Test.js'
// let t = new T()
export default {
  data () {
    return {
      text: 'span',
      style: {
        height: '50dp'
      },
      className: ['dy_class'],
      list: [
        {text: 'span1'},
        {text: 'span2'},
        {text: 'span3'},
        {text: 'span4'},
        {text: 'span5'},
        {text: 'span6'}
      ]
    }
  },
  methods: {
    divClick (e) {
      console.log('div click')
    },
    clickTest (e) {
      console.log('text click')
      console.log(e)
      e.stopPropagation()
    },
    clickSpan (e, data) {
      console.log('span click')
      console.log(e)
      console.log(data)
    },
    imgClick (e) {
      console.log('img click')
      e.stopPropagation();
    }
  },
  destroyed() {
    // t = null
  },
}
</script>

<style scoped>
  .static_class {
    width: 50dp;
    color: red;
  }

  .dy_class {
    color: blue;
    height: 40dp;
  }
</style>
