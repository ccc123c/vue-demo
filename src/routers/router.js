import VueRouter from "vue-router"

import Vue from "vue"

//使用Vue.use方法加载VueRouter模块
Vue.use(VueRouter)

import home from "../components/Home.vue";
import search from "../components/Search.vue";
import member from "../components/Member.vue";
import cart from "../components/Cart.vue";
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
        }
]
});