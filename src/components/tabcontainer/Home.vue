<template>
  <div class="container">
    <mt-swipe :auto="4000" class="swipe">
      <mt-swipe-item v-for="(item,index) in pic_list" :key="index">
        <img :src="item.img" />
      </mt-swipe-item>
    </mt-swipe>

    <ul class="mui-table-view mui-grid-view mui-grid-9">
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <img src="../../images/menu1.png">
          <div class="mui-media-body">新闻资讯</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
           <img src="../../images/menu2.png">
          <div class="mui-media-body">图片分享</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <img src="../../images/menu3.png">
          <div class="mui-media-body">商品购买</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <img src="../../images/menu4.png">
          <div class="mui-media-body">留言反馈</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <img src="../../images/menu5.png">
          <div class="mui-media-body">视频专区</div>
        </router-link>
      </li>
      <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
        <router-link to="/home/newlist">
          <img src="../../images/menu6.png">
          <div class="mui-media-body">联系我们</div>
        </router-link>
      </li>

    </ul>
  </div>
</template>
<script>
import axios from "axios";
import tools from "../../lib/tools/tools.js";
export default {
  data() {
    return {
      pic_list: []
    }
  },
  created() {
    axios({
      url: tools.baseUrl + tools.getlunbo
    }).then(res => {
      if (res.data.status == 0) {
        // console.log(res.data.message);
        this.pic_list = res.data.message;
      }
    })
  }
}
</script>
<style>
.swipe {
  height: 220px;
}

.mint-swipe-item img {
  width: 100%;
  height: 100%;
}
.mui-table-view-cell img{
  width: 70%;
}
.mui-grid-view.mui-grid-9{
  border:none;
  background-color: #fff;
}
.mui-grid-view.mui-grid-9 .mui-table-view-cell{
  border:none;
}
</style>


