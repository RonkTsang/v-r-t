<template>
  <div style="color: blue; backgroundColor: green" :style="dyncStyle">
    <text value="test" style="font-size: 11dp;" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      dyncStyle: {color: 'red', lines: 5}
    }
  },
  created () {
    viola.on('update', (e) => {
      if (e.toggle == 'style_1') {
        
        this.dyncStyle = {lines: 3}
        
      } else if (e.toggle == 'style_over') {
        
        this.dyncStyle = {}

      }
    })
  }
}
</script>

<style>

</style>
