<template>
  <div rule="batch">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'batch',
  props: ['type'],
  beforeUpdate () {
    console.log('i am batch cmp, here beforeUpdate')
  },
  updated () {
    console.log('i am batch cmp, here has updated')
    console.log(this.$el)
  }
}
</script>
