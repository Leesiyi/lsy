<template>
  <div class="about">
    <h1>2</h1>
    <HelloWorld :msg="str"></HelloWorld>
    <h1>This is an about page</h1>
  </div>
</template>
<script>
import HelloWorld from '@/components/HelloWorld.vue'
export default {
  name:"about",
  data(){
    return{
      str:"lsy"
    }
  },
  components:{
    HelloWorld
  }
}
</script>

