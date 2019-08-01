<template>
    <div id="nav">
      <p id="shouye" @click="backhome">首页</p>
      <Style>
      </Style>
      <div class="footerlink">
        <router-link to="/" class="">电影</router-link>
        <router-link to="/music" class="">音乐</router-link>
        <router-link to="/book" class="">书籍</router-link>
        <router-link to="/talk" class="">聊天</router-link>
      </div>
      <router-view/>
      <!-- <router-link to="/">电影</router-link> -->
    </div>
    
  
</template>
<script>
import Style from '@/components/Style.vue'
export default {
  methods: {
    backhome(){
      this.$router.push("/")
    }
  },
  components: {
    Style
  }
}
</script>
<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
#shouye{
  position: fixed;
  top: 0;
  z-index: 2;
  font-size: 0.35rem;
  margin-left: 4%;
  line-height: 1rem;
  color: white;

}
a{
  text-decoration: none;
}
a:visited{
  color:white;
}
a:link{
  color: white;
}
a:active{
  color: aliceblue;
  text-shadow: 2px 2px 4px white
}
.footerlink{
  display: flex;
  justify-content: space-around;
  line-height: 1rem;
  width: 100%;
  font-size: 0.4rem;
  position: fixed;
  bottom: 0;
  color: white;
  z-index: 11;
  
  
  
  
}
</style>
