<template>
  <div @click="click" @list="listAdd">
    <div v-if="list.length" class="body">
      <text>
        wo de tian a
      </text>
    </div>
    <div v-else class="loading">
      <div>
        <img />
        <text>
          what the fff
        </text>
      </div>
    </div>
    <err v-if="isErr">
      <text> cuo le </text>
    </err>
    <right>
      <text> wo zui hou </text>
    </right>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [],
      isErr: false
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.isErr = true
    // }, 1000);
  },
  methods: {
    click () {
      this.isErr = true
    },
    listAdd () {
      this.list.push(1)
    }
  }
}
</script>

<style>

  .loading {
    color: red;
  }

  .body {
    color: blue;
  }
</style>
