import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import '../public/js/util.js'
import VueCookie from 'vue-cookies'
Vue.use(VueCookie)

import { Switch } from 'iview'
Vue.component('i-switch', Switch)


import 'iview/dist/styles/iview.css';


Vue.config.productionTip = false
Vue.prototype.$cookie = VueCookie;
Vue.prototype.$http = axios.create({
  baseURL:
  // "http://192.168.101.24:3000/api/v1/admin" 
  // 磊哥接口
  //  "http://192.168.101.9:3000/api/v1/admin"
  //  老黄接口
    "https://mockapi.eolinker.com/FbVf4MH0a082b35420706ebbe5770bcacd13a40e3c1a6bd"
});
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
