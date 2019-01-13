<template>
  <div>
    <div :class="classStr"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classStr: 'base'
    }
  },
  created () {
    viola.on('update', ({ type }) => {
      let value
      switch (type) {
        case '1-1':
          this.classStr = 'base a'
          break;
        case '1-2':
          this.classStr = 'base a a2'
          break;
        case '1-3':
          this.classStr = 'base a a2 a3'
          break;
        case '2-1':
          this.classStr = 'base a2 a3'
          break;
        case '2-2':
          this.classStr = 'base a3'
          break;
        case '2-3':
          this.classStr = 'base'
          break;

        case 'setTo3':
          this.classStr = 'base t3'
          break;
        case '3-1':
          this.classStr = 'base add'
          break;
        case '3-2':
          this.classStr = 'base add2'
          break;
      }
    })
  }
}
</script>

<style lang="scss" scope>
  .base {
    base: 1;
  }

  .a {
    special: 1;
  }

  .a2 {
    base: 2;
  }

  .a3 {
    base: 2;
    newAdd: 1;
  }

  .a4 {
    a: 4
  }

  .t3 {
    t: 1
  }

  .add {
    t: 2
  }

  .add2 {
    x: 1
  }

  .add3 {
    x: 2;
    q: 1;
  }
</style>
