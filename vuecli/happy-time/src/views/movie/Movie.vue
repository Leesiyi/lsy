<template>
  <div>
    <Style :str="color" :msg="text"></Style>
    <div class="movieinfo">
      <ul v-for="(val,index) in moviedata" :key="index" class="movie-list" @click="godetail(val)">
        <li><img :src="moviepic+val.cover.url" alt=""></li>
        <li class="title">{{val.title}}</li>
        <li class="info">{{val.card_subtitle}}</li>
      </ul>
    </div>
  </div>
</template>
<script>
import Style from '@/components/Style.vue'
export default {
  methods:{
    getdata(){
      let douban=`https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=0&count=10`
      let daili=`https://bird.ioliu.cn/v2?url=`
      axios.get(daili+douban).then((res)=>{
        this.moviedata=res.data.subject_collection_items
        console.log(this.moviedata);
        console.log(res);
        
      })
    },
    godetail(val){
      this.movieid=val.id;
      console.log(this.movieid);
      this.$router.push('/moviedetail')
      this.$router.push({name:'moviedetail',params:{mid:this.movieid}})
    }
    
  },
  created(){
    this.getdata();
  },
  data(){
    return {
      color:"#FF6666",
      text:"电影",
      moviedata:[],
      movieid:0,
      moviepic:"https://images.weserv.nl/?url="
    }
  },
  name: 'movie',
  components: {
    Style
  }
}
</script>
<style>
  *{
    margin:0;
    padding:0;
  }
  .movieinfo{
    width: 100%;
    margin-bottom: 1rem;
    
    margin-top: 1rem;
  }
  .title{
    font-size: 0.4rem;
    position: absolute;
    top: 0;
    left: 2.3rem;
    
  }
  .info{
    font-size: 0.3rem;
    position: absolute;
    top:0.5rem;
    left: 2.3rem;
    
  }
  li{
    list-style: none;
  }
  img{
    height: 3rem;
    width: 2.1rem;
    display: block;
    margin-top: 5px;
    margin-bottom: 5px;
  }
  .movie-list{
    position: relative;
    border-bottom: 1px solid black;
    color:#FF6666;
  }
</style>
