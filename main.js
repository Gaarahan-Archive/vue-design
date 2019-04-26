import Vue from 'vue'
import App from './src/App.vue'
import VueRouter from 'vue-router'

import router from './src/router/router.js'
import './static/font/icon/iconfont.js'

Vue.use(VueRouter);

new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
