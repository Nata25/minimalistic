<template lang="html">
  <div>And this is a Vue component!</div>
</template>

<script lang="ts">
  import { Component, Vue }  from 'vue-property-decorator';

  @Component({
    name: 'App'
  })
  export default class App extends Vue {}

</script>

<style lang="css" scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    width: 250px;
    height: 250px;
    color: rgb(192, 118, 8);
    border: 1px solid rgb(192, 118, 8);
    border-radius: 50%;
  }
</style>