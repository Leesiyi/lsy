<template>
  <div>
    <Style :str="color" :msg="text"></Style>
  </div>
</template>
<script>
import Style from '@/components/Style.vue'
export default {
  data(){
    return {color:"#33CC99",
    text:"音乐"}
  },
  name: 'music',
  components: {
    Style
  }
}
</script>