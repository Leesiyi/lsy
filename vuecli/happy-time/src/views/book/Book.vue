<template>
  <div>
    <Style :str="color" :msg="text"></Style>
    <Loading v-if="isLoading"></Loading>
    <div class="bookinfo">
      <swiper :options="swiperOption">
        <swiper-slide
          v-for="(val,index) in bookdata"
          :key="index"
          class="slideinfo"
          @click.native="gobookdetail(val.id,val.card_subtitle,val.recommend_comment)"
        >
          <img :src="bookpic+val.cover.url" alt />
          {{val.title}}
        </swiper-slide>
        

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
      <div class="bookdetailarry">
        
        <div class="borderdiv" v-if="isback">
          <img :src="bookpic+bookdetail.subject.pic.large" alt=""  id="detailpic">
          <p id="booktitle">{{this.bookdetail.title}}</p>
          <p id="bookintro">{{this.introduce}}</p>
          <p id="bookpinglu">{{this.pinglun}}</p>
        </div>
        </div>
    </div>
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue";
import Style from "@/components/Style.vue";
import "swiper/dist/css/swiper.css";
import { swiper, swiperSlide } from "vue-awesome-swiper";
export default {
  methods: {
    getbookdata() {
      let jiekou = `https://m.douban.com/rexxar/api/v2/subject_collection/book_fiction/items?start=0&count=20`;
      let daili = `https://bird.ioliu.cn/v2?url=`;
      axios.get(daili + jiekou).then(res => {
        console.log(res);
        this.bookdata = res.data.subject_collection_items;
        console.log(this.bookdata);
        this.isLoading = false;
      });
    },
    gobookdetail(id,introduce,pinglun) {
      console.log(id);
      this.introduce = introduce;
      this.pinglun = pinglun;
      let jiekou = `https://m.douban.com/rexxar/api/v2/market/book/${id}`;
      let daili = `https://bird.ioliu.cn/v2?url=`;
      axios.get(daili + jiekou).then(res => {
        console.log(res);
        this.bookdetail = res.data.data;
        console.log(this.bookdetail.subject.pic);
        this.isback = true;
        
      });
    }
  },
  created() {
    this.getbookdata();
  },
  data() {
    return {
      isLoading:true,
      introduce:"",
      pinglun:"",
      isback:false,
      bookdetail: [],
      bookdata: [],
      color: "#0066CC",
      text: "书籍",
      bookpic: "https://images.weserv.nl/?url=",
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 30,
        slidesPerGroup: 3,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  name: "book",
  components: {
    Loading,
    Style,
    swiper,
    swiperSlide
  }
};
</script>
<style scoped>
.bookinfo {
  width: 100%;
  margin-bottom: 1rem;
  margin-top: 1rem;
  position: relative;
}
.swiper-button-prev {
  height: 0.5rem;
}
.borderdiv{
  font-size: 0.5rem;
  margin-bottom: 1rem;
}
.swiper-button-next {
  height: 0.5rem;
}
.bookdetailarry{
  
  position: absolute;
  bottom: -155%;
  /* background-color: red; */
  height: 300px;
  width: 100%;
  border-top: 1px solid black;
}
#booktitle{
  position: absolute;
  top: 0.15rem;
  left: 4.5rem;
}
#bookintro{
   position: absolute;
  top: 1.7rem;
  left: 3.8rem;
}
#bookpinglu{
  font-size: 0.4rem;
  margin-left: 2%;
}
.test {
  /* background: red;
  height: 1rem;
  width: 1rem; */
}
.slideinfo {
  font-size: 0.3rem;
  text-align: center;
}
.swiper-pagination-bullets {
  bottom: -7%;
}
#detailpic{
  height: 5rem;
  width: 3.5rem;
  margin-left: 3%;
  margin-top: 3%;
}
</style>
