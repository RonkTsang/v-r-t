<template>
  <div class="viola"></div>
</template>

<style lang="less">
  .single {
    lines: 3;
  }

  .single .a {
    lines: 3;
    padding: 5dp;
  }

  .single .a .b{
    lines: 3;
    padding: 5dp;
  }

  .nest {
    rule: parent;

    .nest_1 {
      color: aqua;

      .nest_2 {
        width: 6dp;
      }
    }
  }

  .nest_root {
    rule: parent;

    &_1 {
      color: aqua;

      &_2 {
        width: 6dp;
      }
    }

    &_2 {
      height: 60dp;
    }
  }
</style>

