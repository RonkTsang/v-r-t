<template>
  <div>
    <div v-if="isTest" class="isTest"></div>
    <div v-else class="noTest"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isTest: true
    }
  },
  created () {
    viola.on('update', ({ isTest }) => {
      if (isTest) {
        this.isTest = true
      } else {
        this.isTest = false
      }
    })
  }
}
</script>

<style>
  .isTest {
    custom: div;
    background-color: black;
  }

  .noTest {
    custom: div;
    background-color: rgb(255, 10, 10);
  }
</style>
