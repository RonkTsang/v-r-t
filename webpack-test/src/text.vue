<template>
  <div>
    <!-- <div
      style="color: red; custom: xixi; overwrite: false"
      :style="style"
      class="hh"
      :class="clsStr"
      @click="handler">
      <sub
        hello="good afternoon, sub"
        @hello="fromSub"
      ></sub>  
    </div> -->
    <div
      style="color: red; custom: xixi; overwrite: false"
      class="hh"
      :class="clsStr"
      @click="handler">
    </div>
    <!-- <div :class="clsStr" @click="handler"></div> -->
    <!-- <div :style="style" @click="handler" class="viola">
      <text
        style="background-color: red"
        class="text"
      > 
      {{ text }}
      </text>

  
      <text class="text"> {{ dynamic ? '' : 'false' }} </text>

      <div>
        new div
      </div>
    </div> -->
  </div>
</template>
<script>
  import sub from './sub.vue'
  export default {
    data () {
      return {
        cls: ['viola', 'text'],
        clsStr: 'v-str text-str',
        style: {
          width: '500px',
          height: '500px',
          backgroundColor: 'green',
          fontSize:30,
          overwrite: 'yes'
        },
        text: 'viola',
        dynamic: false
      }
    },
    methods: {
      handler () {
          //console.log(this);
          this.cls.push('text_more')
          this.clsStr += ' text_more'
          // this.dynamic = true;
          // this.text = 'Tom'
          // console.log("xxxxxxxx");
      },
      fromSub (text) {
        console.log('I got msg from sub cmp: ', text)
      }
    },
    components: {
      sub
    }
  }
</script>
<style lang="scss">
  .viola, .v-str, .test {
    background-color: #123000;

/*     & > .p {     we don't support sub selector !!
      color: #000123;
    } */

    &[type=oj] {
      background-color: #000123;
    }
  }

/*   .hh {
    cover_static: static
  }
  
  .v-str {
    // background-color: #123000;
    cover_static: cover
  }

  .text {
    color:#000000;
    font-size:30;
   // color:#FF00FF;
    text-align:center;
    font-weight:bold;
  }

  .text_more {
    color:#523462;
    line: 5;
    custom: haha
  }
  
  .viola:hover {
    width: 300;
  }

  @font-face {
   // font-family: "Bitstream Vera Serif Bold";
   // src: url("http://developer.mozilla.org/@api/deki/files/2934/=VeraSeBd.ttf");
  } */
</style>