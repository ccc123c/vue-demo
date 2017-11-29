<template>
    <div class="comment">
        <h4>发表评论</h4>
        <textarea cols="30" rows="10" v-model="addcomment">

        </textarea>
        <mt-button type="primary" size="large" @click="addCmt">发表评论</mt-button>

        <ul class="mui-table-view">
            <li class="mui-table-view-cell mui-media" v-for="(item ,index) in commentList" :key="index">
                <a href="javascript:;">
                    <img class="mui-media-object mui-pull-right" :src="'../../images/menu'+Math.floor(Math.random()*6+1)+'.png'">
                    <div class="mui-media-body">
                        {{item.user_name}}
                        <p class="mui-ellipsis">
                            {{item.content}}
                            <span class="mui-pull-right">{{item.add_time |dateformat("YYYY-MM-DD HH:ss:mm")}}</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
        <mt-button type="danger" plain size="large" @click="loadMore" v-if="isShow">加载更多</mt-button>
    </div>
</template>
<script>
import { Toast } from 'mint-ui';
import axios from "axios";
import tools from "../../lib/tools/tools";
import dateformat from "../filters/dateformat";
export default {
    data() {
        return {
            commentList: [],
            pageindex: 1,
            isShow: true,
            addcomment: ''
        }
    },
    props: ["id"],
    created() {
        this.getData();
    },
    filters: {
        dateformat
    },
    methods: {
        loadMore() {
            this.pageindex++;
            this.getData();
        },
        getData() {
            axios({
                url: tools.baseUrl + tools.getcomments + "/" + this.id + "?pageindex=" + this.pageindex
            }).then(res => {
                if (res.data.status == 0) {
                    if (res.data.message.length > 0) {
                        this.commentList = this.commentList.concat(res.data.message);
                    } else {
                        Toast('已经没有数据啦');
                        this.isShow = false;
                    }

                }
            })
        },
        addCmt() {
            if (this.addcomment.trim()) {
                axios({
                    url: tools.baseUrl + tools.postcomment + "/" + this.id,
                    method: "post",
                    data: "content=" + this.addcomment
                }).then(res => {
                    if (res.data.status == 0) {
                        this.commentList.unshift({
                            user_name: "匿名用户",
                            add_time: new Date(),
                            content: this.addcomment
                        }
                    );
                    this.addcomment="";
                    }
                })
            }
        }
    }
}
</script>
<style scoped>
.comment {
    padding: 5px;
}

textarea {
    height: 150px;
}
</style>
