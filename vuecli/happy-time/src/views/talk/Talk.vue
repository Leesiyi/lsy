<template>
  <div>
    <Style :str="color" :msg="text"></Style>
  </div>
</template>
<script>
import Style from '@/components/Style.vue'
export default {
  data(){
    return {color:"#FFCC33",
    text:"聊天"}
  },
  name: 'talk',
  components: {
    Style
  }
}
</script>