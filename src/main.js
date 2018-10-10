import Vue from 'vue'
import App from './App.vue'

import { Header,Swipe, SwipeItem,Button } from 'mint-ui';
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'
Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
//挂载路由对象
import VueRouter from 'vue-router'
Vue.use(VueRouter)
import router from './router.js'
//2.1 daoru vue-resourve
import VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root = 'http://www.escook.cn:3000/';

//导入时间格式化moment
import moment from 'moment'

Vue.filter('dateformat',function(datastr,pattion="  YYYY-MM-DD HH:MM:SS"){
    return moment(datastr).format(pattion)
})
let vm=new Vue({
  el:"#app",
  render:c=>c(App),
  router,
})