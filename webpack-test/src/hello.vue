<template>
    <!-- <div style="background-color: white">
    <image ref="bg_image" style="position: absolute;
            left: 0;right: 0;top: 0;bottom: 0;"
           src="local://home_bg"
           blurRadius="60dp"></image>



      <div style="height: 200dp;flex-direction: row;"  @click="onClick">

          <div v-if="index" style="background-color: red;flex: 1;">
          </div>
          <div v-else style="background-color:blue;flex: 1;">
          </div>
          <div v-else-if="index == 1" style="background-color:blue;flex: 1;">


          </div>
          <div v-else-if="index == 2" style="background-color: green;flex: 1;">

          </div>


      </div>



    <text style="position: absolute;left: 0;right: 0;bottom: 30dp;text-align: center;color: rgba(255,255,255,0.5);font-size: 15dp;">viola engine</text>



  </div> -->
  <div @click="onClick">
    <!-- <scrollor @click="onClick" style="height: 200dp;flex-direction: row;"> -->
      <!-- <text v-if="show">
        show
      </text>
      <text v-else>
        no show
      </text> -->
      <!-- <div v-if="index === 1" style="background-color: red;flex: 1;" :style="{ color: 'red' }">
        <text id="one">
          index == 1
        </text>
      </div>
      <div v-else-if="index === 0" id="zero" style="flex: 10; sha: yes">
        <text>
          index == 0
        </text>
      </div>
      <div v-else-if="index === 2" id="two" style="sha: hh" :style="{ color: 'blue' }">
        <text>
          index == 2
        </text>
      </div>
      <div v-else>
        <text>
          index bangbang
        </text>
      </div> -->
      <scrollor v-if="list.length">

        <cell
          v-for="(item, index) in list"
          :key="index"
        >
          <text>
            {{ item.content }}
          </text>
        </cell>

        <cell footer="1">
          <div>
            I am footer
          </div>
        </cell>

        <cell footer="1">
          <div>
            I am footer
          </div>
        </cell>

      </scrollor>

      <div v-if="list.length == 0" style="flex: 10; sha: yes">
        <more>
          loader...
        </more>
      </div>
      <!-- <div v-if="index === 1" style="background-color: red;flex: 1;">
        <text>
          index == 1
        </text>
      </div>
      <div v-if="index === 2" style="background-color: red;flex: 1;">
        <text>
          index == 2
        </text>
      </div> -->

      <!-- <div static style="background-color: red;flex: 1;">
        static
      </div> -->
    </div>

    <!-- <template v-if="loginType === 'username'">
      <label>Username</label>
      <input placeholder="Enter your username">
    </template>
    <template v-else>
      <label>Email</label>
      <input placeholder="Enter your email address">
    </template> -->
    
    <!-- <div id="last"></div> -->
  <!-- </div> -->
  <!-- <scroller
    :style="{
      color: 'red'
    }"

    id="scroller"

    style="
      background-color: grey;
      font-size: 12dp;
      border-left-top-radius: 5px
    ">

    <div v-if="show">

    </div>
    
    <text
      class="textStyle"
      v-for="(key, index) in testArr"
      :key="index"
      @click="textClick">
      {{ key }}
    </text>
  </scroller> -->
  <!-- <div>
    <div :style="style" @click="handler" class="viola">
      <text ref="test" class="text"> {{ text }} </text>

      <text class="text"> {{ dynamic ? '' : 'false' }} </text>
      <scroller>
        <div v-for="a in list" :key="a">
          <text>{{ a }}</text>
        </div>
      </scroller>
      <hello-text :hello="helloText" @hello="helloSub" />
    </div>
  </div> -->
</template>
<script>
  export default {
    data () {
      //props
      return {
        list: [],
        index:0,
        show: true
      }
    },
    //init
    created () {
    },
    //render ready
    mounted () {
    },
    methods: {
        onClick(e){
            // this.index = (this.index + 1) % 2
            // this.list.push('5')
            // this.index = this.index ? 0 : 1
            // this.show = !this.show
            this.updateList()
        },
        updateList () {
          var res = []
          for (let i = 0; i < 5; i++) {
            res.push({
              id: this.id++,
              content: parseInt(Math.random() * 100)
            })
          }
          this.list = this.list.concat(res)
        }
    },
}
  // var a = viola.requireAPI('data')
  
  // var list = []

  // for (let index = 0; index < 20; index++) {
  //   list.push('将 样式加载 放入了回调钩子了将 样式加载 放入了回调钩子了将 样式加载 放入')
  // }
  
  // import helloText from './sub.vue'
  // export default {
  //   data () {
  //     return {
  //       show: false,
  //       helloText: 'ronk',
  //       style: {
  //         width: '500px',
  //         height: '500px',
  //         backgroundColor: 'red'
  //       },
  //       text: 'viola',
  //       dynamic: true,
  //       // list: list,
  //       testArr: [1, 2]
  //     }
  //   },
  //   created () {
  //     console.log('================= create =============')
  //   },
  //   mounted () {
  //     console.log('================= mounted =============')
  //   },
  //   methods: {
  //     handler () {
  //       this.text = 'Tom'
  //     },
  //     textClick () {
  //       console.log('text')
  //     },
  //     helloSub (msg) {
  //       console.log('from my son')
  //       console.log(msg)
  //     }
  //   }
  // }

</script>


<style scoped lang="scss">
  .textStyle {
    border-width: 10dp;
    border-color: yellow;
    margin: 10dp;
  }

  .viola {
    backgroundColor: rgb(77, 69, 190);

    .p {
      color: blue;
    }

    &[type=oj] {
      backgroundColor: red;
    }
  }

  .text {
    color: 'red'
  }
  
  .viola:hover, .text:hover {
    width: 300px;
  }

  @font-face {
    font-family: "Bitstream Vera Serif Bold";
    src: url("http://developer.mozilla.org/@api/deki/files/2934/=VeraSeBd.ttf");
  }
</style>
