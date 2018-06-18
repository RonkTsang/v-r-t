<template>

  <div class="viola test" :class="dynamic ? 'hh': ''" disabled>
    <p class="p"> hello {{ text }} </p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        text: 'viola',
        dynamic: true
      }
    }
  }
</script>
<style scoped lang="scss">
  .viola {
    background-color: rgb(77, 69, 190);
    transform: scale(1.5);

    .p {
      color: blue;
    }

    &[type=oj] {
      color: red
    }
  }

  .viola:hover {
    width: 300
  }

  @font-face {
    font-family: "Bitstream Vera Serif Bold";
    src: url("http://developer.mozilla.org/@api/deki/files/2934/=VeraSeBd.ttf");
  }
</style>
