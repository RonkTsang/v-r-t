<template>
  <div
    class="card_wrapper"
    @click="jump(cardData.jump_url)">

    <image
      class="card_img"
      resize="contain"
      :src="cardData.img_url"
     />
     
     <div class="card_content">
     
       <text class="card_title">
         {{ cardData.content }}
       </text>
     
       <text class="card_desc">
        {{ cardData.desc }}
       </text>
       
     </div>

  </div>
</template>

<script>
  const navigation = viola.requireAPI('navigation')

  export default {
    name: 'topic-card',
    props: {
      cardData: {
        type: Object,
        required: true
      }
    },
    methods: {
      jump (url) {
        navigation.openPage(url, {})
        console.log('jump to ' + url)
      }
    }
  }
</script>

<style lang="scss">
  @function get($map, $color){
    @if not map-has-key($map,$color){
        @warn "No color found for `#{$color}` in `#{$map}` map. Property omitted.";
    }
    @return map-get($map, $color);
  }

  $backgroundColor: (
    wrapper: #ffffff,
    img: #EFEFEF,
    title: #ffffff,
  );

  $colors: (
    desc: #9d9d9d,
    border: #EDEDED,
    title: #000000
  );

  @function bgc($color){
    @return get($backgroundColor, $color); 
  }

  @function color($color){
    @return get($colors, $color); 
  }

  .card {
    @at-root {
      &_wrapper {
        flex-direction: row;
        flex-wrap: noWrap;
        background-color: bgc(wrapper);
        height: 140;
        margin: 20;
        margin-bottom: 0;
      }

      &_img {
        width: 140;
        height: 140;
        background-color: bgc(img);
      }

      &_content {
        flex: 1;
        flex-direction: column;
        flex-wrap: noWrap;
        margin-left: 26;
        justify-content: center;
        height: 140;
        border-bottom-width: 1dp;
        border-bottom-color: color(border);
      }

      &_title {
        font-size:28;
        color: color(title);
        height:36;
        lines:1;
        text-overflow:ellipsis;
      }

      &_desc {
        font-size: 22;
        color: color(desc);
        margin-top: 15;
        margin-right: 13;
        lines: 1;
        text-overflow: ellipsis;
      }
    }
  }
</style>
