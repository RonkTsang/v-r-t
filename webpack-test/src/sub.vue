<template>
  <div
    style="color: sub_color;"
    class="viola"
    :class="cls"
    @click="fnc($event, 'i am son')">
    {{ hello }}
  </div>
</template>

<script>
export default {
  props: ['hello'],
  data () {
    return {
      cls: ['sub_class']
    }
  },
  methods: {
    fnc (e, msg) {
      console.log('event', e)
      console.log('msg', msg)
      this.$emit('hello', {
        title: 'son hahahah'
      })
      e.stopPropagation();
    }
  }
}
</script>

<style lang="scss" scoped>
  .viola {
    sub: sub_here;
    text: sub
  }

  .viola_yes {
    subClass: yes
  }

  .viola_no {
    subClass: no
  }
</style>
