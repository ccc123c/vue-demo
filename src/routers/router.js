import VueRouter from "vue-router"

import Vue from "vue"

//使用Vue.use方法加载VueRouter模块
Vue.use(VueRouter)

import home from "../components/tabcontainer/Home.vue";
import search from "../components/tabcontainer/Search.vue";
import member from "../components/tabcontainer/Member.vue";
import cart from "../components/tabcontainer/Cart.vue";
import newlist from "../components/news/NewList.vue";
import newinfo from "../components/news/NewInfo.vue";
export default new VueRouter({
    routes: [
        {
            path: "/home",
            component: home
        },
        {
            path:"/search",
            component: search
        },
        {
            path:"/member",
            component:member
        },
        {
            path:"/cart",
            component:cart
        },
        {
            path:"/home/newlist",
            component:newlist
        },
        {
            path:"/home/newsinfo/:id",
            component:newinfo
        },
        {
            path:"/",
            redirect:"/home"
        }
]
});