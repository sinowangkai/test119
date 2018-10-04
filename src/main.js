import Vue from 'vue'
import App from './App.vue'

import { Header } from 'mint-ui';
import './lib/mui/css/mui.min.css'
Vue.component(Header.name, Header);
let vm=new Vue({
  el:"#app",
  render:c=>c(App)
})