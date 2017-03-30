const css = require("./sass/main.scss"); //webpack-dev

import Vue from 'vue';
import App from './App.vue';
import router from './components/router';
import axios from 'axios';

//Vue.config.productionTip = false;

/* eslint-disable no-new */
// this is to mount the application at the right moment
// (after pre-rendered content has loaded...from the prerender-spa-plugin)
document.addEventListener('DOMContentLoaded', function () {

  new Vue({
    el: '#app',
    router,
    render: h => h(App),
    template: '<App/>',
    components: { App }
  }).$mount();

  router.push('/');

});
