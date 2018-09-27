<template>
  <div rule="item">
    <text ref="text"
          style="backgroundColor: blue;border: 10dp solid yellow;border-radius: 10dp 20dp 10dp 20dp; height: 50dp; ;transform-origin: center center"
          @click="reverse(index)">
      {{ content }}
    </text>
  </div>
</template>

<script>
export default {
  props: ['content', 'index'],
  methods: {
    reverse (index) {
      this.$emit('reverse', index)
    }
  },
  pageAppear () {
    console.log('i am item, i got appear')
  },
  pageDisappear () {
    console.log('i am FREE i am FREE i am FREE')
  },
  destroyed () {
    console.log('i am out aaaaaaaaaa')
  }
}
</script>

<style>

</style>
