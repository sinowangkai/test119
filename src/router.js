import VueRouter from 'vue-router'
import searchcontainer from './components/tabbar/searchcontainer.vue'
import homecontainer from './components/tabbar/homecontainer.vue'
import membercontainer from './components/tabbar/membercontainer.vue'
import shopcarcontainer from './components/tabbar/shopcarcontainer.vue'
import VueResource from 'vue-resource'
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
    {path:'/',redirect:'/home'},
    {path:'/home',component:homecontainer},
    {path:'/member',component:membercontainer},
    {path:'/shopcar',component:shopcarcontainer},
    {path:'/search',component:searchcontainer},
  ],
  linkActiveClass:"mui-active"//change default class
})

// 把路由对象暴露出去
export default router