import Vue from 'vue'
import App from './App.vue'

import { Header,Swipe, SwipeItem } from 'mint-ui';
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
//挂载路由对象
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
//2.1 daoru vue-resourve
import VueResource from 'vue-resource'
Vue.use(VueResource)

let vm=new Vue({
  el:"#app",
  render:c=>c(App),
  router,
})