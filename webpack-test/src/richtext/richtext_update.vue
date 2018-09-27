<template>
  <div>
    <div @click="divClick"></div>
    <richtext style="color: red;">
      <template v-for="(t, i) in list">
        <span v-if="t.type" :key="i" @click.stop="handleClick(t)">{{ t.text }}</span>
        <span v-else :key="i">{{ t.text }}</span>
      </template>
    </richtext>
  </div>
</template>

<script>

// import T from './Test.js'
// let t = new T()
let lists = [
  [
    {
      text: 'text1',
      type: 1
    },
    {
      text: 'text2',
      type: 0
    },
    {
      text: 'text3',
      type: 1
    },
    {
      text: 'text4',
      type: 0
    }
  ],
  [
    {
      text: 'update1',
      type: 1
    },
    {
      text: 'update2',
      type: 0
    },
    {
      text: 'update3',
      type: 0
    },
    {
      text: 'update4',
      type: 1
    }
  ]
]

export default {
  data () {
    return {
      list: lists[1]
    }
  },
  methods: {
    handleClick (text) {
      console.log(text)
    },
    divClick () {
      let _list = lists.shift()
      this.list = _list
      lists.push(_list)
    }
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
