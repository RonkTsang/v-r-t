<template>
  <div>
    <div :class="classStr" class="base add3"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      classStr: ''
    }
  },
  created () {
    viola.on('update', ({ type }) => {
      let value
      switch (type) {
        case '1-1':
          this.classStr = 'a'
          break;
        case '1-2':
          this.classStr = 'a a2'
          break;
        case '1-3':
          this.classStr = 'a a2 a3'
          break;
        case '2-1':
          this.classStr = 'a2 a3'
          break;
        case '2-2':
          this.classStr = 'a3'
          break;
        case '2-3':
          this.classStr = ''
          break;

        case 'setTo3':
          this.classStr = 't3'
          break;
        case '3-1':
          this.classStr = 'add'
          break;
        case '3-2':
          this.classStr = 'add2'
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
