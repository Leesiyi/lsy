<template>
  <div id="app">
    <select v-model="data" name="" id="">
      <option value="a">a</option>
      <option value="b">b</option>
    </select>
    <a-button type="primary" @click="test()">Button></a-button>
  </div>
</template>
<script>
export default {
  data () {
    return {
      data: '',
      data1: '',
      data2: ''
    }
  },
  methods: {
    test () {
      this.data = ''
      console.log(this.data);
    }
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
