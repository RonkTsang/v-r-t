<template>
  <div
    style="divStyle: sub; superStyle: sub"
    :style="dyncStyle"
  >
    <text :value="oh" />
  </div>
</template>

<script>
export default {
  props: ['dyncStyle', 'oh']
}
</script>

<style>

</style>
