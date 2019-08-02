<template>
  <div>
      <h1>hello</h1>
  </div>
</template>
<script>
export default {
  created() {
      this.getdata();
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
      }
  }
};
</script>