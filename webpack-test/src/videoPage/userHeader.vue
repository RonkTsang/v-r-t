<template>
  <div class="wrapper">
    <image
      src="data:image/jpeg;base64,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"
      resize="cover"
      class="avator"
    />

    <div style="
        margin-left: 9dp;
        margin-top: -2;
        justify-content: center;
        flex: 1;
      "
    >
      <text
        style="
          font-size: 14dp;
          lines: 1;
          text-overflow: ellipsis;
          color: black;
          font-weight: bold;
        "
        :value="userName"
      />

      <text
        style="
          font-size: 12dp;
          lines: 1;
          text-overflow: ellipsis;
          color: #737373;
          margin-top: 3dp;
        "
        :value="'浏览：' + playCount"
      />

    </div>
    
    <div
      class="btn"
      :class="followInfo.klass"
      @click.stop="follow">
      <text :class="`${followInfo.klass}_text`" :value="followInfo.text" />
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      userName: 'Viola Video',
      playCount: 1223,
      followStatus: 0
    }
  },
  computed: {
    followInfo () {
        let status = this.followStatus
        let text, klass, hasFollow;
        if (status) {
          hasFollow = 1
          text = '已关注'
          klass = 'has_follow'
          } else {
          hasFollow = 0
          text = '+关注'
          klass = 'no_follow'
        }
        return {
          text,
          klass,
          hasFollow
        }
      },
  }
}
</script>

<style lang="scss" scoped>
  // @import './common.scss';
  $imgSize: 40dp;

  $followBtnBgc: #12B7F5;
  $followBtnColor: #ffffff;

  $followedBtnBgc: #ffffff;
  $followedBtnBorder: lighten(#000000, 90%);
  $followedBtnColor: #737373;

  .wrapper {
    // @include padding;
    flex-direction: row; 
    height: 50dp;
    align-items: center;
  }

  .avator {
    width: $imgSize;
    height: $imgSize;
    border-radius: $imgSize;
  }

  .btn {
    width: 50dp;
    height: 23dp;
    border-radius: 2dp;
    justify-content: center;
    align-items: center;
  }

  .no_follow {
    background-color: $followBtnBgc;

    &_text {
      color: $followBtnColor;
      font-size: 11dp;
    }
  }

  .has_follow {
    background-color: $followedBtnBgc;
    border: {
      width: 0.8dp;
      style: solid;
      color: $followedBtnBorder;
    }
    &_text {
      color: $followedBtnColor;
      font-size: 11dp;
    }
  }
</style>

