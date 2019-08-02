<template>
  <div>
    <Style :str="color" :msg="text"></Style>
  </div>
</template>
<script>
import Style from '@/components/Style.vue'
export default {
  data(){
    return {color:"#0066CC",
    text:"书籍"}
  },
  name: 'book',
  components: {
    Style
  }
}
</script>