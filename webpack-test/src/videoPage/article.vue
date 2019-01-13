<template>
  <!-- <div class="wrapper">
    <div style="flex-direction: row;" @click="toggleDesc">
      <text style="flex: 1; font-size: 16dp; font-weight: bold;" :value="title" />
      <text style="margin-left: 5dp;" value="▼" />
    </div>
    <div ref="desc" style="margin-top: 10dp; transform-origin: left; transform: scaleY(0)">
      <text :value="desciption" />
    </div>
  </div> -->
  <div class="wrapper" ref="wrapper">
    <div style="flex-direction: row;" @click="toggleDesc">
      <text style="flex: 1; font-size: 16dp; font-weight: bold;" :value="title" />
      <text style="margin-left: 5dp;" value="▼" />
    </div>

    <text style="
      width: 750;
      position: absolute; top: 0; right: -750;
      padding-top: 5dp; padding-left: 10dp; padding-right: 10dp;
      color: #595959;
      "
      :value="desciption"
      @click="toggleDesc"
    />
  </div> 
  <!-- <slider :index="descShowStatus" :autoEnable="false" class="wrapper" @change="updateStatus">
    <cell>
      <div style="flex-direction: row; align-items: center;" @click="toggleDesc">
        <text style="flex: 1; font-size: 16dp; font-weight: bold;" :value="title" />
        <text style="margin-left: 5dp;" value="►" />
      </div>
    </cell>
    <cell>
      <div style="position: absolute">
        <text :value="desciption" />
      </div>
    </cell>
  </slider> -->
</template>

<script>
export default {
  data () {
    return {
      descShowStatus: 0,
      title: '交互设计在任何的人工物的设计和制作过程里面都是不可以避免',
      desciption: '区别只在于显意识和无意识。然而，随着产品和用户体验日趋复杂、功能增多，新的人工物不断涌现，给用户造成的认知摩擦日益加剧的情况下，人们对交互设计的需求变得愈来愈显性'
    }
  },
  created () {
    let b = viola.requireAPI('bridge')
    b && b.setPopWidth && b.setPopWidth('50dp')
    this.descIsShow = 0
  },
  methods: {
    toggleDesc1 () {
      this.descShowStatus = 1
    },
    toggleDesc () {
      console.info(this.descIsShow)
      // if (this.descIsShow) {
      //   this.$refs.wrapper.animate({
      //     transform: 'translateX(0)'
      //   }, {
      //     duration: 0.3
      //   })
      // } else {
      //   this.$refs.wrapper.animate({
      //     transform: 'translateX(-100%)'
      //   }, {
      //     duration: 0.3
      //   })

      // }
      this.descIsShow = !this.descIsShow
    },
    updateStatus (e) {
      this.descShowStatus = e.index
    }
  }
}
</script>

<style lang="scss" scoped>
  // @import './common.scss';

  .wrapper {
    // @include padding;

    height: 60dp;
    // background-color: #595959;
  }
</style>

