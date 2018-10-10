import VueRouter from 'vue-router'
import searchcontainer from './components/tabbar/searchcontainer.vue'
import homecontainer from './components/tabbar/homecontainer.vue'
import membercontainer from './components/tabbar/membercontainer.vue'
import shopcarcontainer from './components/tabbar/shopcarcontainer.vue'
import newList from './components/news/newList.vue'
import newsinfo from './components/news/newsinfo.vue'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homecontainer},
    {path:'/member',component:membercontainer},
    {path:'/shopcar',component:shopcarcontainer},
    {path:'/search',component:searchcontainer},
    {path:'/home/newList',component:newList},
    {path:'/home/newsinfo/:id',component:newsinfo},
  ],
  linkActiveClass:"mui-active"//change default class
})

// 把路由对象暴露出去
export default router