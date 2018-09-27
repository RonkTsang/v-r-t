<template>
  <div @click="click">
    <div>
      <text v-for="(v,i) in list" :key="v + i">
        {{ v }}
      </text>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: Array.from({length: 100}, (key, v) => 'text' + v),
      show: false
    }
  },
  methods: {
    click () {
      // this.show = !this.show
      this.list.sort(_ => (.5 - Math.random()))
    }
  }
}
</script>

<style>

</style>
