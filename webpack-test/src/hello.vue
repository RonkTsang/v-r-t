<template>

  <div class="viola">
    <p> hello {{ text }} </p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        text: 'viola'
      }
    }
  }
</script>
<style scoped lang="scss">
  .weex {
    background-color: rgb(77, 69, 190);
    transform: scale(1.5);

    .p {
      color: blue;
    }
  }

  .weex:hover {
    width: 300
  }

  @font-face {
    font-family: "Bitstream Vera Serif Bold";
    src: url("http://developer.mozilla.org/@api/deki/files/2934/=VeraSeBd.ttf");
  }
</style>
