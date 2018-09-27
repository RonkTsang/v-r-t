<template>
  <div>
    <list
      ref="list"
      preloadDistance="400"
      @loadMore="loadMore"
    >
      <div
        v-for="(item, i) in list"
        :key="i"
        style="height: 50dp; justifyContent: center; alignItems: center">
        <text style="font-size: 15dp">
          {{ item.text }}
        </text>
      </div>
      <div style="height: 50dp; justifyContent: center; alignItems: center">
        <text style="font-size: 15dp;color: #333322"> loading... </text>
      </div>
    </list>
  </div>
</template>

<script>

let i = 0
function gen(num) {
  var cnum = num || 15
  var list = []
  for (let a = 0; a < cnum; a++) {
    list.push({
      text: 'text' + (i + a)
    })
  }
  i += a
  return list  
}


export default {
  data () {
    return {
      list: gen()
    }
  },
  methods: {
    loadMore (e) {
      console.log('loadMore!!!!')
      console.log(typeof e)
      this.list = this.list.concat(gen())
      setTimeout(() => {
        this.$refs.list.loadMoreFinish()
      }, 100);
    }
  }
}
</script>

<style>

</style>
