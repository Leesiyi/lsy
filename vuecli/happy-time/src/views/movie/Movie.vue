<template>
  <div>
    <Style :str="color" :msg="text"></Style>
  </div>
</template>
<script>
import Style from '@/components/Style.vue'
export default {
  data(){
    return {color:"rgb(33, 150, 243)",
    text:"电影"}
  },
  name: 'movie',
  components: {
    Style
  }
}
</script>
