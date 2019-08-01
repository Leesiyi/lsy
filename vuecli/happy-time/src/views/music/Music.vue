<template>
  <div>
    <Style :str="color" :msg="text"></Style>
  </div>
</template>
<script>
import Style from '@/components/Style.vue'
export default {
  data(){
    return {color:"rgb(0, 150, 136)",
    text:"音乐"}
  },
  name: 'music',
  components: {
    Style
  }
}
</script>