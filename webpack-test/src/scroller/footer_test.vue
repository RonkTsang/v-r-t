<template>
  <div  style="background-color: #f4f4f4" >
    <scroller v-if="list.length" ref="scroller">
        <refresh ref="refresh"
                  @refresh="onRefresh"
                  @pulling="onPulling"
                  @idle="onIdle"
                  style="
                    background-color: grey;
                    align-items: center;
                    justify-content: center;
                    padding: 20dp">
            <text style="fontSize: 16dp;" :value="refreshText" />
        </refresh>

        <div v-for="item in list" :key="item">
          <div style="padding-top: 10dp; padding-bottom: 10dp; border: 1dp solid black;">
            <text :value="item" />
          </div>
        </div>

        <footer
          ref="footer"
          @refresh="onFooterRefresh"
          @pulling="onFooterPulling"
          @idle="onFooterIdle"
        >
          <div style="
              background-color: grey;
              align-items: center;
              justify-content: center;
              padding: 20dp">
            <text style="fontSize: 16dp;" :value="footerText" />
          </div>
        </footer>

    </scroller>

  </div>



</template>


<script>


  const list1 = [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13
        ],

        list2 = [
          'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i'
        ]

  export default {

    data () {
      return {
        refreshText:'我是 refresh',
        footerText: '我是 footer',
        title: '',
        list: list1,
        isOne: true,
        refreshing:false,
        lastOffsetY:0,

        animating:false,
        info:'',
        loadMore:'加载更多中..',

        requestLast:'',
        cheight:'100dp',
        isFirstReLoad:true,
      }

    },

    computed:{

    },

    methods: {

      onRefresh () {
        this.refreshText = '为你推荐中..';
        setTimeout(() => {
          if (this.isOne) {
            this.list = list2
          } else {
            this.list = list1
          }
          this.isOne = !this.isOne
          this.$refs.refresh.refreshFinish();
        }, 1500);
      },
      onPulling(){
        this.refreshText = '松开即可推荐';
      },
      onIdle(){
        this.refreshText = '下拉推荐';
      },
      onFooterRefresh () {
        this.footerText = 'Footer: refreshing';
        setTimeout(() => {
          this.$refs.footer.refreshFinish();
        }, 1500);
      },
      onFooterPulling(){
        this.footerText = 'Footer: pulling';
      },
      onFooterIdle(){
        this.footerText = 'Footer: idle';
      }
    }

  }
</script>







