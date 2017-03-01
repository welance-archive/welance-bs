const css = require("./sass/main.scss"); //webpack-dev

import Vue from 'vue';
import App from './App.vue';
import router from './components/router';
import axios from 'axios';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App),
  template: '<App/>',
  components: { App }
});