<template>
  <div>
    <recycler>
      <cell v-for="i in 15" :key="i" style="height: 50dp;">
        <text style="color: red; text-align: center"> {{ 'text-' + i }} </text>
      </cell>

    </recycler>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
