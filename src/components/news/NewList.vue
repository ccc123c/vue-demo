<template>
    <div class="container">
        <ul class="mui-table-view mui-table-view-chevron">
            <li class="mui-table-view-cell mui-media" v-for="(item,index ) in newList" :key="index">
                <router-link class="mui-navigate-right" :to="'/home/newsinfo/'+item.id">
                    <img class="mui-media-object mui-pull-left" :src="item.img_url">
                    <div class="mui-media-body mui-ellipsis">
                        {{item.title}}
                        <p class="mui-ellipsis">
                            <span>发表时间:{{item.add_time | dateformat("YYYY-MM-DD HH:mm:ss")}}</span>
                            <span class="mui-pull-right">点击:{{item.click}}</span>
                        </p>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import tools from "../../lib/tools/tools.js";
import axios from "axios";
import dateformat from "../../components/filters/dateformat";
export default {
    data(){
        return {
            newList:[]
        }
    },
    created(){
        axios({
            url:tools.baseUrl+tools.getnewslist
        }).then(res=>{
            if(res.data.status==0){
                this.newList=res.data.message;
            }
        })
    },
    filters:{
        dateformat
    }
}
</script>
<style>
.mui-navigate-right:after, .mui-push-right:after{
    right:40px;
}
.mui-table-view-chevron .mui-table-view-cell > a:not(.mui-btn){
    margin-right:-90px;
}

</style>

