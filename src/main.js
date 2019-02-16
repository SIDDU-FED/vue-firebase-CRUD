// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import {store} from './store/store'
import router from './router'
import axios from 'axios'
import NProgress from 'nprogress';
import 'nprogress/nprogress.css'
window.axios = axios
Vue.use(NProgress)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);

import 'material-design-icons-iconfont/dist/material-design-icons.css'

// Vue.use(router)

window.Event = new Vue();


window.Event = new class {
  constructor() {
    this.vue = new Vue();
    
  }
  fire(event , data) {
    this.vue.$emit(event, data);
  }
  listen(event , callback) {
    this.vue.$on(event,callback);
  }
}

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
