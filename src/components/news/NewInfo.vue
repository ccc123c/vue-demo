<template>
    <div class="container">
        <div class="tmp">
            <h4>{{newsdetail.title}}</h4>
            <p>
                <span>发表时间:{{newsdetail.add_time |dateformat("YYYY-MM-DD HH:mm:ss")}}</span>
                <span class="mui-pull-right">点击了:{{newsdetail.click}}</span>
            </p>
        </div>
        <div class="news-content" v-html="newsdetail.content">
        </div>

        <comment :id="$route.params.id"></comment>

    </div>
</template>
<script>
import axios from "axios";
import tools from "../../lib/tools/tools";
import dateformat from "../filters/dateformat";
import comment from "../comment/Comment.vue";
export default {
    data() {
        return { newsdetail: {} }
    },
    created() {
        axios({
            url: tools.baseUrl + tools.getnew +"/"+ this.$route.params.id,
        }).then(res => {
            if (res.data.status == 0) {
                this.newsdetail = res.data.message[0];
            }
        })
    },
    filters:{
        dateformat
    },
    components:{
        comment
    }
}
</script>
<style>
.tmp {
    padding: 5px;
}

.tmp h4 {
    font-size: 18px;
}
.news-content{
    padding:5px;
}
.news-content img{
    width: 100%;
    height: 100%;
}
</style>
