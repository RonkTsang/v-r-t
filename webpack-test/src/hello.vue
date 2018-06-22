<template>

  <div class="viola test" :class="dynamic ? 'hh': ''" disabled>
    <p class="p"> hello {{ text }} </p>
    <div class="viola" type="oj" @click="handler">
      type = oj
    </div>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        text: 'viola',
        dynamic: true
      }
    },
    methods: {
      handler () {
        console.log('hhhhhhhhhh')
      }
    }
  }
</script>
<style scoped lang="scss">
  .viola {
    background-color: rgb(77, 69, 190);

    .p {
      color: blue;
    }

    &[type=oj] {
      background-color: red;
    }
  }

  .viola:hover {
    width: 300px;
  }

  @font-face {
    font-family: "Bitstream Vera Serif Bold";
    src: url("http://developer.mozilla.org/@api/deki/files/2934/=VeraSeBd.ttf");
  }
</style>
