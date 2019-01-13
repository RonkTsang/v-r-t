<template>
  <div @click="update">
    <div v-if="isTrue" style="background-color: red">
      <text> red </text>
    </div>

    <div v-else style="background-color: blue">
      <text> blue </text>
    </div>

    <div v-if="!isTrue" style="background-color: yellow">
      <text> yellow </text>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isTrue: true
    }
  },
  methods: {
    update () {
      this.isTrue = !this.isTrue
    }
  }
}
</script>


