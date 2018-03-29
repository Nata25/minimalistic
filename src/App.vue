<template lang="pug">
  div
    span.hash {{ color }}
    p Number of clicks: {{ number }}
    button(@click="handleClick", :style="{'backgroundColor': color}") Click me!
    button(@click="reset") Reset
</template>

<script lang="ts">
  import { Component, Vue }  from 'vue-property-decorator';

  @Component({
    name: 'App',
    computed: {
      color() {
        const hash = (Math.random() * this.number).toString(16);
        return this.number === 0 ? '#fff' : '#' + hash.substr(hash.indexOf('.') + 1, 6);
      }
    }
  })
  export default class App extends Vue {

    public number: number = 0;
    public color: string; 
    
    private handleClick(): void {
      this.number++;
    }

    private reset() {
      this.number = 0;
    }
  }

</script>

<style lang="scss" scoped>
  div {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 20px auto;
    width: 250px;
    height: 250px;
    color: rgb(192, 118, 8);
    border: 1px solid rgb(192, 118, 8);
    border-radius: 45%;

    p {
      font: 20px/200% Georgia, sans-serif;
      color: inherit;
    }

    button {
      display: block;
      margin: 10px auto;
      border: 1px solid #888;
      padding: 5px 10px;
      border-radius: 4px;
    }

    .hash {
      font-family: monospace;
    }
  }
</style>