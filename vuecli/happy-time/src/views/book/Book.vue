<template>
  <div>
    <Style :str="color" :msg="text"></Style>
  </div>
</template>
<script>
import Style from '@/components/Style.vue'
export default {
  data(){
    return {color:"rgb(121, 85, 72)",
    text:"书籍"}
  },
  name: 'book',
  components: {
    Style
  }
}
</script>