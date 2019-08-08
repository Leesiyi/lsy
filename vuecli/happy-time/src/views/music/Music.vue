<template>
  <div>
    <Style :str="color" :msg="text" @backup="gobackk"></Style>
    <Loading v-if="isLoading"></Loading>
    <div class="musicinfo">
      <aplayer :audio="audio" :lrcType="0" ref="aplayer" v-if="issong" />
      <div v-if="isshow">
        <ul class="list" v-for="(val,index) in listdata" :key="index" @click="golist(val.id)">
          <li>
            <img class="music-img" :src="val.coverImgUrl" alt />
          </li>
          <li id="list-name">{{val.name}}</li>
          <li id="tags">{{val.tags[0]}}/{{val.tags[1]}}/{{val.tags[2]}}</li>
        </ul>
      </div>

      <table class="song" v-if="issong">
        <thead>
          <tr>
            <th></th>
            <th>歌曲标题</th>
            <th>歌手</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(val,index) in musicdata" :key="index" @click="gomusic(val.id)">
            <th>{{index+1}}</th>
            <td>{{val.name}}</td>
            <td>{{val.ar[0].name}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
import Loading from "@/components/Loading.vue";
import Vue from "vue";
import APlayer from "@moefe/vue-aplayer";
import Style from "@/components/Style.vue";
Vue.use(APlayer);
export default {
  created() {
    this.getmusicdata();
    this.getlistdata();
    this.isfirst = true;
  },
  data() {
    return {
      isfirst:true,
      issong:false,
      listid: "707862925",
      listdata: [],
      isshow: true,
      isLoading: true,
      color: "#33CC99",
      text: "音乐",
      musicdata: [],
      audio: [
        {
          name: "东西（Cover：林俊呈）",
          artist: "纳豆",
          url: "https://cdn.moefe.org/music/mp3/thing.mp3",
          cover: 'https://p1.music.126.net/5zs7IvmLv7KahY3BFzUmrg==/109951163635241613.jpg?param=300y300', // prettier-ignore
          lrc: ""
        }
      ]
    };
  },
  name: "music",
  components: {
    Style,
    Loading
  },
  methods: {
    gobackk(){
      this.$router.push('/music')
    },
    golist(id) {
      this.isLoading = true;
      this.isshow = false;
      this.getmusicdata(id);
    },
    gomusic(id) {
      let gequ = `https://bird.ioliu.cn/netease/song?id=${id}`;
      axios.get(gequ).then(res => {
        this.audio[0].name = res.data.data.name;
        this.audio[0].artist = res.data.data.ar[0].name;
        this.audio[0].cover = res.data.data.al.picUrl;
        this.audio[0].url = res.data.data.mp3.url;
        console.log(res);
      });
      // this.$refs.aplayer.pause();
      this.$refs.aplayer.play();
    },
    getmusicdata(id=this.listid) {
      let gedan = `https://bird.ioliu.cn/netease/playlist?id=${id}`;
      axios.get(gedan).then(res => {
        console.log(res);
        this.musicdata = res.data.playlist.tracks;

        console.log(res);
        this.isLoading = false;
        if(!this.isfirst){
          this.issong = true
        }
        this.isfirst = false;
        // this.issong = true
        
      });
    },
    getlistdata() {
      let list = "http://musicapi.xiecheng.live/top/playlist";
      axios.get(list).then(res => {
        this.listdata = res.data.playlists;
        console.log(this.listdata);
      });
    }
  }
};
</script>
<style>
tbody td {
  width: 10rem;
  text-align: center;
}
table {
  font-size: 0.4rem;
  border: 0;
  border-collapse: collapse;
}
tbody {
  font-size: 0.3rem;
}
.musicinfo {
  width: 100%;
  margin-bottom: 1rem;

  margin-top: 1rem;
}
tbody tr:nth-child(odd) {
  background-color: rgb(208, 245, 233);
}
.list {
  position: relative;
  border-bottom: 1px solid black;
}
#list-name {
  font-size: 0.4rem;
  position: absolute;
  top: 0;
  left: 3.1rem;
}
#tags {
  font-size: 0.35rem;
  position: absolute;
  top: 1.5rem;
  left: 3.1rem;
  color: #33cc99;
}
.music-img {
  height: 3rem;
  width: 3rem;
  display: block;
  margin-top: 5px;
  margin-bottom: 5px;
}
/* tbody tr :nth-child(2n-1){
  background-color: white;
}  */
/* table > tr:nth-child(2n) >td {background-color:grey;}  */
</style>