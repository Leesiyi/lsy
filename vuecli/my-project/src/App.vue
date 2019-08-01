<template>
  <div id="app">
    <div id="nav">
      <button @click="home"></button>
      <button @click="forward">></button>
      <button @click="back">back</button>
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>|
      <router-link to="/connect">Connect</router-link>|
      <router-link to="/cool">Cool</router-link>|
      <router-link to="/re">Re</router-link>|
      <router-link to="/recool">Alias</router-link>|
      <router-link to="/count">Count</router-link>
    </div>
    <div class="fath">
      <!-- <transition name="fade"> -->
        <router-view />
        <!-- <router-view name=></router-view> -->
      <!-- </transition> -->
    </div>
  </div>
</template>
<script>
export default {
  methods:{
    home(){
    this.$router.push("/")
  },
  back(){
    this.$router.go(-1)
  },
  forward(){
    this.$router.go(1)

  }
  }
  
}
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fath{
  position: relative;
}
.fade-enter{
  transform: translateX(-100%);
}
.fade-enter-active {
  transition: all 1s ease;
  position: absolute;
  top: 0;
  width: 100%;
}
.fade-enter-to {
  transform: translateX(0);
}
.fade-leave {
  transform: translateX(0);
}
.fade-leave-active {
  transition: all 1s ease;
  position: absolute;
  top: 0;
  width: 100%;
}
.fade-leave-to {
  transform: translateX(100%);
}
a{
  text-decoration: none;
}
</style>
