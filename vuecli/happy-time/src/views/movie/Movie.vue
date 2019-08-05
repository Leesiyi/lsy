<template>
  <div>
    <Style :str="color" :msg="text"></Style>
    <div class="movieinfo">
      <ul v-for="(val,index) in moviedata" :key="index" class="movie-list" @click="godetail(val)">
        <li>
          <img :src="moviepic+val.cover.url" alt />
        </li>
        <li class="title">{{val.title}}</li>
        <li class="info">{{val.card_subtitle}}</li>
      </ul>
    </div>
    <Loading v-if="isLoading"></Loading>
  </div>
</template>
<script>
import Style from "@/components/Style.vue";
import Loading from "@/components/Loading.vue"
export default {
  methods: {
    getdata() {
      if (this.moviedata.length != this.total) {
        let douban = `https://m.douban.com/rexxar/api/v2/subject_collection/movie_showing/items?start=${this.start}&count=10`;
        let daili = `https://bird.ioliu.cn/v2?url=`;
        axios.get(daili + douban).then(res => {
          this.total = res.data.total;
          this.moviedata = this.moviedata.concat(
            res.data.subject_collection_items
          );
          console.log(this.moviedata);
          console.log(res);
          this.isLoading = false;
        });
        
      }
      // this.isLoading = false;
    },
    watchwindow() {
      let sHeight = document.documentElement.scrollHeight;
      let cHeight = document.documentElement.clientHeight;
      let sTop = document.documentElement.scrollTop;
      window.onscroll = () => {
        if (sHeight - sTop <= cHeight + 10) {
          if (this.start <= this.total) {
            this.start += 10;
            console.log(this.start);
          }

          this.getdata();
        }
      };
    },
    godetail(val) {
      this.movieid = val.id;
      console.log(this.movieid);
      this.$router.push("/moviedetail");
      this.$router.push({ name: "moviedetail", params: { mid: this.movieid } });
    },
    jieliu(fn, interval) {
      let func = fn;
      let timer; //定时器
      let firstTime = true; //是否第一次调用
      return function() {
        let args = arguments;
        let _this = this;
        //如果第一次执行，不需要延迟
        if (firstTime) {
          func.apply(_this, args);
          return (firstTime = false);
        }
        //如果定时器还在，说明上一次调用还没有完成
        if (timer) {
          return false;
        }
        //延迟1段事件执行
        timer = setTimeout(function() {
          clearTimeout(timer); //清理定时器
          timer = null; //闭包内存释放
          func.apply(_this, args); //返回的新函数、参数借用源函数执行
        }, interval || 500);
      };
    }
  },
  created() {
    this.jieliu(this.watchwindow());
    // this.jieliu(this.getdata());
    // this.watchwindow();
    this.getdata();
  },
  data() {
    return {
      isLoading:true,
      total: 10,
      start: 0,
      color: "#FF6666",
      text: "电影",
      moviedata: [],
      movieid: 0,
      moviepic: "https://images.weserv.nl/?url="
    };
  },
  name: "movie",
  components: {
    Style,
    Loading
  }
};
</script>
<style>
* {
  margin: 0;
  padding: 0;
}
.movieinfo {
  width: 100%;
  margin-bottom: 1rem;

  margin-top: 1rem;
}
.title {
  font-size: 0.4rem;
  position: absolute;
  top: 0;
  left: 2.3rem;
}
.info {
  font-size: 0.3rem;
  position: absolute;
  top: 0.5rem;
  left: 2.3rem;
}
li {
  list-style: none;
}
img {
  height: 3rem;
  width: 2.1rem;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
}
.movie-list {
  position: relative;
  border-bottom: 1px solid black;
  color: #ff6666;
}
</style>
