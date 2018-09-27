<template>
  <div  style="background-color: #f4f4f4" >
    <image  src="http://api.doufu.diaobao.la/weex/images/tffind/find_great_at.png" style="width: 16dp;height: 16dp;position: absolute;left: 0;visibility: hidden;"></image>
      <!--<batch-->
        <!--type="tree"-->
      <!--&gt;-->
          <list v-if="list.length" ref="scroller" @loadMore="onLoadMore"  preloadDistance="1500"
                style="position: absolute;left: 0;right: 0;bottom: 0;top:0;">
              <refresh ref="refresh"
                       @refresh="onRefresh"
                       @pulling="onPulling"
                       @idle="onIdle"
                       style="
               background-color:rgba(255,255,255,0.3);
               align-items: center;
               justify-content: center;
               padding: 20dp">
                  <text style="fontSize: 16dp;">{{refreshText}}</text>
              </refresh>
              <!--<test></test>-->
              <!--<post-card style="margin-bottom: 5dp;height: 50dp;background-color: red;"></post-card>-->
              <!--<div v-for="(item ,key) in list" :key="item.object_id">-->
              <!--<post-card v-if="item.object_type==41" :data="item" style="margin-bottom: 5dp;"></post-card>-->
              <!--</div>-->
              <cell @click="onClick"
                    v-for="(item ,key) in list"
                    :key="item.object_id"  >
                  <post-card
                          :data="item"
                          style="margin-bottom: 5dp; ">
                  </post-card>
              </cell>

              <cell footer="1" style="height: 50dp;align-items: center;justify-content: center;" @click="onLoadMore">
                  <text style="font-size: 15dp;color: #3c3f41">{{loadMore}}</text>
              </cell>

              <!--<cell footer="1" style="height: 50dp;align-items: center;justify-content: center;background-color: blue;">-->
              <!--<text style="font-size: 15dp;color: #3c3f41">{{loadMore}}</text>-->
              <!--</cell>-->
              <!--<div @click="onLoadMore">-->
              <!--&lt;!&ndash;<tffooter ref="footer"></tffooter>&ndash;&gt;-->
              <!--</div>-->
              <!--<cell :style="{height:isIOS ? '50wx':'120wx'}" ></cell>-->
          </list>
      <!--</batch>-->

    <div v-if="list.length == 0" style="position: absolute;left: 0;right: 0;top: 0;bottom: 0;background-color: white;justify-content: center;align-items: center;">
      <text style="font-size: 15dp;color: #3c3f41">{{loadMore}}</text>
    </div>

    <!--loading-->
    <!--<tfloading ref="loading" @load="firstLoad"></tfloading>-->

    <!--<div  ref="toTopBtn" @click="onClickTopBtn" style="position: absolute;bottom: -50wx;right: 15wx;width: 42wx;height: 42wx;opacity: 1|0.5;">-->
      <!--<image src="http://api.doufu.diaobao.la/weex/images/tffind/btn_totop@3x.png" style="width: 42wx;height: 42wx;"></image>-->
    <!--</div>-->

  </div>



</template>


<script>

  var http = viola.requireAPI('http')
  var cache = viola.requireAPI('cache')
  var navigation = viola.requireAPI('navigation')
  // import postCard from './postCard.vue'
  let _cache = []
  for (var i = 0; i < 20; i++) {
    _cache.push({
      object_id: 'test_cache ' + i++
    })
  }

  export default {

    props: ['url'],//外部
    data () {
      return {
        refreshText:'下拉推荐',
        title:'',
        list:[],
        refreshing:false,
        lastOffsetY:0,

        animating:false,
        info:'',
        loadMore:'加载更多中..',

        requestUrl:'http://api.doufu.la/Find/DaDaQuan/Hot',
        requestLast:'',
        cheight:'100dp',
        isFirstReLoad:true,
      }

    },
    watch: {

    },
    components: {
      // [postCard.name]: postCard
    },

    computed:{

    },



    created () {
      var self = this;
      console.log('?')
      var data = viola.pageData.cache 
      navigation.setTitle('推荐中...');
      if(data && data.list) {
        self.updateData(data, false);
      }
      setTimeout(function () {

        self.request(false,{},function (data,more) {
          self.updateData(data,more);
          navigation.setTitle('');
        });
      },500);



    },

    //ready
    mounted () {


      var self = this;



    },
    methods: {

      onClick(e){
        this.cheight = '120dp';

      },

      //refresh

      onRefresh () {
        this.refreshText = '为你推荐中..';
        var self = this;
        self.request(false,{},function (data,more) {
          self.updateData(data,more);
          self.$refs.refresh.refreshFinish();

        });
      },
      onPulling(){
        this.refreshText = '松开即可推荐';
      },
      onIdle(){
        this.refreshText = '下拉推荐';
      },
      onLoadMore(e){
        var self = this;
        self.request(true,{},function (data,more) {
          self.updateData(data,more);

          self.$refs.scroller.loadMoreFinish();

        });
//        self.request(true,null,function (data,more) {
//
//
//        });

      },


//
//      onRefresh(e){
//        var self = this;
//        this.refreshing = true;
//        self.request(false,function (data) {
//          self.refreshing = false;
//        });
//
//      },

      updateData (data,more) {


        if(data){
          if(!more){
//            this.list = [];
            var self = this;
            setTimeout(function () {
              cache.set(data,'DaDaQuanDemoKey');
            },1000);

          }
          var list = data.list;
          if(!more){
            list.sort(function() {
              return .5 - Math.random();
            });
          }
          if(!more){
            // var nickNames = [];
            // for(var  index in list){
            //   var item = list[index];
            //   nickNames.push(item.topic.user.nickname);
            // }
            this.list = list;

            // console.log("____list____:"+JSON.stringify(nickNames));
          }else {


            this.list = this.list.concat(list);
//            for(var  index in list){
//            var item = list[index];
//            this.list.push(item);
//            }
          }
//          for(var  index in list){
//            var item = list[index];
//            this.list.push(item);
//          }



//
//          data.list = tempList;
//          this.info = JSON.stringify(data);



        }


      },


      request(more, param, responseCallback){
        var self = this;
        var url = self.requestUrl;
        param = param ? param : {};
        if(!param.last){
          param.last = more ?  self.requestLast : '';

          if(this.refreshText == '为你推荐中..'){
            param.last = self.requestLast;
          }
          if(self.isFirstReLoad){
            self.isFirstReLoad = false;
            param.last = Math.floor(Math.random()*10+1);
          }
        }
        self.requestGet(url,param,function (data) {
          if(data){
            self.requestLast = data.last;
          }
          return responseCallback ? responseCallback(data,more) : null;
        });
      },

      //网络请求
      requestGet (url, param, callback) {
        //          block(@{@"data":result,@"code":@(code),@"errorText":statusText,@"success":@(ok)});
        http.requestGet(url, param, function (res) {
          if(callback == null){
            return ;
          }
          if (!res.success || res.data == null) {
            if(!callback(null)){
              //弹出网络异常
            }
            return ;
          }
          var json = res.data;

          if (json.status == 0 ) {
            callback(json.data);
          } else {
            if(!callback(null)){
//              提示错误
              //modal.toast({message: json.user_msg || json.msg,duration:0.4});
            }
          }
        });
      },




    }



  }
  // 提示
  //    <text :style="{ fontSize: size, color: color }">Hello</text>
  //    Vue.set(this.list, 2, {key: 3, text: 'foo'})  update
  //    statusbar.hide();|showBlack()||showWhite()

  //类型
  //    String
  //    Number
  //    Boolean
  //    Function
  //    Object
  //    Array
</script>







