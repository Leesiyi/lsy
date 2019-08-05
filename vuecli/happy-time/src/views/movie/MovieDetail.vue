<template>
  <div>
    <Style :str="color" :msg="text"></Style>
    <h1>hello</h1>
  </div>
</template>
<script>
import Style from "@/components/Style.vue";
export default {
  created() {
      this.getdata();
  },
  components:{
    Style
  },
  methods: {
    getdata() {
    //   let detail = `https://api.douban.com/v2/movie/subject/26794435`;
    //   let daili = `https://bird.ioliu.cn/v2?url=`;
      this.movieid=this.$route.params.mid
      console.log(this.movieid);
      
    //   axios.get(daili + detail).then(res => {
    //     console.log(res);
    //   });
    }
  },
  data(){
      return {
          movieid:0,
          color: "#FF6666",
          text: "电影",
      }
  }
};
</script>