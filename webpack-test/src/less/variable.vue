<template>
  <div class="viola"></div>
</template>

<style lang="less" scoped>
  @nice-blue: #5B83AD;
  @light-blue: @nice-blue + #111;

  .viola {
    color: @light-blue;
  }

  .viola .a{
    color: @nice-blue;
  }

  .testMuti {
    color: red;
    .viola-test {
      color: white;
      .viola-brief {
        color: green;
      }
    }
  }
</style>

